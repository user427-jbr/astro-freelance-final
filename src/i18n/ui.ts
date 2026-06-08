export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'de';

export const ui = {
  de: {
    'nav.home':        'Start',
    'nav.about':       'Über mich',
    'nav.services':    'Leistungen',
    'nav.projects':    'Projekte',
    'nav.contact':     'Kontakt',
    'nav.faq':         'FAQ',

    'hero.label':      'Julius Bruch',
    'hero.tagline':    'Power Apps Maker · Web Developer · Vibe Coder',
    'hero.headline':   'Hi, ich bin Julius.',
    'hero.subtitle':   'Freiberuflicher IT-Berater aus Leipzig.',
    'hero.cta.more':   'Mehr erfahren',
    'hero.cta.contact': 'Kontakt aufnehmen',

    'services.title':         'Meine Leistungen',
    'services.subtitle':      'Wählen Sie einen Service für Details und Lizenzinfos.',
    'services.powerapps':     'Power Apps Entwicklung',
    'services.powerapps.desc': 'Maßgeschneiderte Apps auf Basis von Microsoft 365.',
    'services.automate':      'Power Automate Workflows',
    'services.automate.desc': 'Routineaufgaben und Genehmigungsprozesse automatisieren.',
    'services.sharepoint':    'SharePoint Lösungen',
    'services.sharepoint.desc': 'Portale, Dokumentenmanagement und Team Sites.',
    'services.web':           'Web Entwicklung',
    'services.web.desc':      'Professionelle Websites für Unternehmen.',
    'services.cta':           'Alle Leistungen ansehen',

    'projects.title':  'Projekte',
    'projects.subtitle': 'Entdecken Sie eine Auswahl meiner aktuellen Arbeiten.',
    'projects.cta':    'Alle Projekte ansehen',

    'about.title':     'Über mich',
    'about.role':      'Digital Transformation Consultant',
    'about.location':  'Leipzig, DE',
    'about.intro':     'Masterstudent der Wirtschaftsinformatik an der Universität Leipzig. Freiberuflicher Power Apps Entwickler. Ich baue skalierbare, unternehmenstaugliche Lösungen, die Abläufe optimieren, Workflows automatisieren und das volle Potenzial von Microsoft 365 ausschöpfen.',
    'about.body':      '',
    'about.availability': 'Vorlesungsfreie Zeit: 13.06.2026 – 30.09.2026 · 20 Std./Woche verfügbar',
    'about.profiles':  'Profile',
    'about.exp':       'Berufserfahrung',
    'about.edu':       'Bildungsweg',
    'about.cta':       'Meine Leistungen ansehen',

    'newsletter.title':    'Auf dem Laufenden bleiben',
    'newsletter.subtitle': 'Neue Projekte, Tipps und Updates aus der Welt der Microsoft Power Platform – direkt in Ihr Postfach.',
    'newsletter.placeholder': 'ihre@email.de',
    'newsletter.cta':     'Jetzt anmelden',
    'newsletter.note':    'Kein Spam. Abmeldung jederzeit möglich.',

    'contact.title':   'Kontakt',
    'contact.intro':   'Lassen Sie uns über Ihr Projekt sprechen. Ich antworte in der Regel innerhalb von 24 Stunden.',
    'contact.connect': 'Weitere Kontaktmöglichkeiten',
    'contact.linkedin':    'LinkedIn',
    'contact.freelance':   'freelance.de',
    'contact.faq.title': 'Häufig gestellte Fragen',
    'contact.faq.subtitle': 'Antworten auf die häufigsten Fragen rund um meine Arbeit.',

    'footer.tagline':  'Power Apps · Power Automate · SharePoint',
    'footer.privacy':    'Datenschutz',
    'footer.impressum':  'Impressum',

    'privacy.title':    'Datenschutz',
    'impressum.title':  'Impressum',

    'theme.toggle':    'Design wechseln',

    'back.projects':   'Zurück zu Projekten',

    'contact.form.name':        'Name',
    'contact.form.email':       'E-Mail',
    'contact.form.message':     'Nachricht',
    'contact.form.send':        'Nachricht senden',
    'contact.form.placeholder.name':    'Ihr Name',
    'contact.form.placeholder.email':   'ihre@email.de',
    'contact.form.placeholder.message': 'Ihre Nachricht ...',
    'contact.form.privacy': 'Ich habe die',
    'contact.form.privacy.link': 'Datenschutzerklärung',
    'contact.form.privacy.suffix': 'gelesen und bin mit der Verarbeitung meiner Daten einverstanden.',

    'cta.contact': 'Projekt anfragen',
  },
  en: {
    'nav.home':        'Home',
    'nav.about':       'About',
    'nav.services':    'Services',
    'nav.projects':    'Projects',
    'nav.contact':     'Contact',
    'nav.faq':         'FAQ',

    'hero.label':      'Julius Bruch',
    'hero.tagline':    'Power Apps Maker · Web Developer · Vibe Coder',
    'hero.headline':   "Hi, I'm Julius.",
    'hero.subtitle':   'Freelance IT consultant from Leipzig.',
    'hero.cta.more':   'Learn more',
    'hero.cta.contact': 'Get in touch',

    'services.title':         'My Services',
    'services.subtitle':      'Select a service below for details and licensing info.',
    'services.powerapps':     'Power Apps Development',
    'services.powerapps.desc': 'Custom apps built on Microsoft 365.',
    'services.automate':      'Power Automate Workflows',
    'services.automate.desc': 'Automate tasks and approval processes.',
    'services.sharepoint':    'SharePoint Solutions',
    'services.sharepoint.desc': 'Portals, document management, and team sites.',
    'services.web':           'Web Development',
    'services.web.desc':      'Professional websites for businesses.',
    'services.cta':           'View all services',

    'projects.title':  'Projects',
    'projects.subtitle': 'Explore a selection of my recent work.',
    'projects.cta':    'View all projects',

    'about.title':     'About Me',
    'about.role':      'Digital Transformation Consultant',
    'about.location':  'Leipzig, DE',
    'about.intro':     "Master's student in Business Informatics at the University of Leipzig. Freelance IT consultant. I build scalable, enterprise-ready solutions that streamline operations, automate workflows, and unlock the full potential of Microsoft 365.",
    'about.body':      '',
    'about.availability': 'Semester break: Jun 13, 2026 – Sep 30, 2026 · Available 20 hrs/week',
    'about.profiles':  'Profiles & Links',
    'about.exp':       'Experience',
    'about.edu':       'Education',
    'about.cta':       'View my services',

    'newsletter.title':    'Stay in the loop',
    'newsletter.subtitle': 'New projects, tips, and updates from the world of Microsoft Power Platform — straight to your inbox.',
    'newsletter.placeholder': 'you@example.com',
    'newsletter.cta':     'Subscribe',
    'newsletter.note':    'No spam. Unsubscribe anytime.',

    'contact.title':   'Contact',
    'contact.intro':   "Let's talk about your project. I usually respond within 24 hours.",
    'contact.connect': 'More ways to connect',
    'contact.linkedin':    'LinkedIn',
    'contact.freelance':   'freelance.de',
    'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq.subtitle': 'Answers to the most common questions about my work.',

    'footer.tagline':  'Power Apps · Power Automate · SharePoint',
    'footer.privacy':    'Privacy',
    'footer.impressum':  'Imprint',

    'privacy.title':    'Privacy Policy',
    'impressum.title':  'Imprint',

    'theme.toggle':    'Toggle theme',

    'back.projects':   'Back to Projects',

    'contact.form.name':        'Name',
    'contact.form.email':       'Email',
    'contact.form.message':     'Message',
    'contact.form.send':        'Send Message',
    'contact.form.placeholder.name':    'Your name',
    'contact.form.placeholder.email':   'you@example.com',
    'contact.form.placeholder.message': 'Your message ...',
    'contact.form.privacy': 'I have read the',
    'contact.form.privacy.link': 'Privacy Policy',
    'contact.form.privacy.suffix': 'and consent to the processing of my data.',

    'cta.contact': 'Request project',
  },
} satisfies Record<Lang, Record<string, string>>;
