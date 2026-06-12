<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Allow only POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// Basic Origin Check (Only allow requests from your website)
$allowedOrigins = ['https://jb-solutions.digital', 'https://www.jb-solutions.digital', 'http://localhost:4321', 'http://127.0.0.1:4321'];
if (isset($_SERVER['HTTP_ORIGIN']) && !in_array(rtrim($_SERVER['HTTP_ORIGIN'], '/'), $allowedOrigins)) {
    http_response_code(403);
    echo json_encode(["error" => "Forbidden: Invalid Origin"]);
    exit;
}

// Retrieve form data securely
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';
$lang = isset($_POST['lang']) ? $_POST['lang'] : 'de';

// Validate inputs
if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
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

        // Bypass strict SSL/TLS verification if Hetzner's internal certificate doesn't match the domain exactly
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );

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
        return ['success' => false, 'error' => $mail->ErrorInfo];
    }
}

// 1. Send Email to Site Owner (You)
$subjectToOwner = "Neue Kontaktanfrage von $name";
$bodyToOwner = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";

// Add the user's email as the Reply-To address so you can just click "Reply" in your inbox!
$resultOwner = sendEmailViaSMTP($siteOwnerEmail, "Julius Bruch", $subjectToOwner, $bodyToOwner, $email, $name);

// 2. Send Auto-Reply to User
if ($resultOwner['success']) {
    if ($lang === 'en') {
        $subjectToUser = "Confirmation: We received your message";
        $bodyTextToUser = "Hello $name,\n\nThank you for reaching out. I have received your message and will get back to you shortly.\n\nYour message:\n$message\n\nBest regards,\nJulius Bruch";
    } else {
        $subjectToUser = "Bestätigung: Wir haben Ihre Nachricht erhalten";
        $bodyTextToUser = "Hallo $name,\n\nvielen Dank für Ihre Anfrage. Ich habe Ihre Nachricht erhalten und werde mich in Kürze bei Ihnen melden.\n\nIhre Nachricht:\n$message\n\nMit freundlichen Grüßen,\nJulius Bruch";
    }

    sendEmailViaSMTP($email, $name, $subjectToUser, $bodyTextToUser);
}

if ($resultOwner['success']) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Email sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to send email", "details" => $resultOwner['error']]);
}