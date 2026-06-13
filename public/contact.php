<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Set up error logging for debugging on Hetzner
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/mail_error.log');

// Allow only POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// Basic Origin Check (Only allow requests from your website)
$allowedOrigins = ['https://jb-solutions.digital', 'https://www.jb-solutions.digital', 'http://localhost:4321', 'http://127.0.0.1:4321'];
if (isset($_SERVER['HTTP_ORIGIN']) && !in_array(rtrim($_SERVER['HTTP_ORIGIN'], '/'), $allowedOrigins)) {
    error_log("Blocked by Origin Check. Received Origin: " . $_SERVER['HTTP_ORIGIN']);
    http_response_code(403);
    echo json_encode(["error" => "Forbidden: Invalid Origin"]);
    exit;
}

// Allow JSON POST requests (often sent by fetch API in modern frameworks like Astro)
if (empty($_POST)) {
    $input = json_decode(file_get_contents('php://input'), true);
    if (is_array($input)) {
        $_POST = $input;
    }
}

// Honeypot: bots fill the hidden "website" field; humans leave it blank
if (!empty($_POST['website'])) {
    http_response_code(200);
    echo json_encode(["success" => true]);
    exit;
}

// Retrieve form data securely
$name    = isset($_POST['name'])    ? trim($_POST['name'])    : '';
$email   = isset($_POST['email'])   ? trim($_POST['email'])   : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';
$lang    = isset($_POST['lang'])    ? $_POST['lang']          : 'de';

// Validate inputs + length limits
if (
    empty($name) || empty($email) || empty($message)
    || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || mb_strlen($name)    > 100
    || mb_strlen($email)   > 254
    || mb_strlen($message) > 5000
) {
    error_log("Validation failed. Name: '$name', Email: '$email', Message length: " . mb_strlen($message));
    http_response_code(400);
    echo json_encode(["error" => "Invalid input data"]);
    exit;
}

// SET THIS TO YOUR NEW HETZNER EMAIL ADDRESS
$siteOwnerEmail = "info@jb-solutions.digital"; 
$smtpHost = "mail.your-server.de"; // Your Hetzner SMTP server
$smtpUsername = "info@jb-solutions.digital";
$smtpPassword = "YOUR_EMAIL_PASSWORD"; // Replaced automatically by GitHub Actions!

// Load PHPMailer files
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

function sendEmailViaSMTP($to, $toName, $subject, $bodyText, $replyToEmail = null, $replyToName = '') {
    global $smtpHost, $smtpUsername, $smtpPassword, $siteOwnerEmail;

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = $smtpHost;
        $mail->SMTPAuth   = true;
        $mail->Username   = $smtpUsername;
        $mail->Password   = $smtpPassword;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enables STARTTLS
        $mail->Port       = 587;                            // Alternative secure SMTP port
        $mail->CharSet    = 'UTF-8';                     // Automatically fixes "ä" and other special characters!

        // Authenticated sender
        $mail->setFrom($siteOwnerEmail, 'Julius Bruch');
    if ($replyToEmail) {
        $mail->addReplyTo($replyToEmail, $replyToName);
    }
        $mail->addAddress($to, $toName);

        $mail->isHTML(true); // Send as HTML
        $mail->Subject = $subject;
        $mail->Body    = nl2br(htmlspecialchars($bodyText)); // Super minimale HTML-Version (nur Zeilenumbrüche)
        $mail->AltBody = $bodyText;                          // Reine Text-Version im Hintergrund

        $mail->send();
        return ['success' => true, 'error' => ''];
    } catch (Exception $e) {
        error_log("PHPMailer Exception: " . $mail->ErrorInfo);
        return ['success' => false, 'error' => $mail->ErrorInfo];
    }
}

// 1. Send Email to Site Owner (You)
$subjectToOwner = "Neue Kontaktanfrage von $name";
$bodyToOwner = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";

$resultOwner = sendEmailViaSMTP($siteOwnerEmail, "Julius Bruch", $subjectToOwner, $bodyToOwner);

// 2. Send Auto-Reply to User
if ($resultOwner['success']) {
    if ($lang === 'en') {
        $subjectToUser = "Confirmation: I received your message";
        $bodyTextToUser = "Hello $name,\n\nThank you for reaching out. I received your message and will get back to you shortly.\n\nYour message:\n$message\n\nBest regards,\nJulius Bruch";
    } else {
        $subjectToUser = "Bestätigung: Ich habe Ihre Nachricht erhalten";
        $bodyTextToUser = "Hallo $name,\n\nvielen Dank für Ihre Anfrage. Ich habe Ihre Nachricht erhalten und werde mich in Kürze bei Ihnen melden.\n\nIhre Nachricht:\n$message\n\nMit freundlichen Grüßen,\nJulius Bruch";
    }

    sendEmailViaSMTP($email, $name, $subjectToUser, $bodyTextToUser);
}

if ($resultOwner['success']) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Email sent successfully"]);
} else {
    error_log("Failed to send email to owner. Details: " . $resultOwner['error']);
    http_response_code(500);
    echo json_encode(["error" => "Failed to send email", "details" => $resultOwner['error']]);
}