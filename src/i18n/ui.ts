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
    'nav.menu.open':   'Menü öffnen',
    'nav.menu.close':  'Menü schließen',

    'seo.title':       'Julius Bruch | Power Platform & Web Developer Leipzig',
    'seo.description': 'Freiberuflicher Low-Code Entwickler aus Leipzig. Power Apps, Power Automate und maßgeschneiderte Microsoft 365 Lösungen – plus professionelle Websites. Jetzt anfragen.',

    'hero.tagline':    'Power Apps Maker · Web Developer · Vibe Coder',
    'hero.headline':   'Hi, ich bin Julius.',
    'hero.subtitle':   'Freiberuflicher IT-Berater aus Leipzig.',
    'hero.cta.more':   'Meine Leistungen',
    'hero.cta.contact': 'Kontakt aufnehmen',

    'services.title':  'Meine Leistungen',

    'projects.title':  'Projekte',

    'about.title':     'Über mich',
    'about.intro':     'Masterstudent der Wirtschaftsinformatik an der Universität Leipzig. Freiberuflicher Low-Code Entwickler und Web Developer. Ich baue skalierbare Power Apps und Automatisierungen, die Abläufe optimieren und das volle Potenzial von Microsoft 365 ausschöpfen.',
    'about.body':      'Mein Ziel: Menschen in ihrem Arbeitsalltag spürbar entlasten. Ich entwickle Lösungen, die Nutzer dort abholen, wo sie stehen. Intuitiv, verlässlich und direkt im vertrauten Microsoft-Umfeld.',
    'about.profiles':  'Profile',

    'contact.title':   'Kontakt',
    'contact.faq.title': 'Häufig gestellte Fragen',

    'footer.privacy':    'Datenschutz',
    'footer.impressum':  'Impressum',

    'privacy.title':    'Datenschutz',
    'impressum.title':  'Impressum',

    'theme.toggle':    'Design wechseln',

    'back.projects':   'Zurück zu Projekten',
    'back.services':   'Zurück zu Leistungen',

    'projects.card.cta':   'Mehr erfahren',

    'contact.form.name':        'Name',
    'contact.form.email':       'E-Mail',
    'contact.form.message':     'Nachricht',
    'contact.form.send':        'Nachricht senden',
    'contact.form.placeholder.name':    'Ihr Name',
    'contact.form.placeholder.email':   'ihre@email.de',
    'contact.form.placeholder.message': 'Ihre Nachricht ...',
    'contact.form.privacy': 'Ich stimme der',
    'contact.form.privacy.link': 'Datenschutzerklärung',
    'contact.form.privacy.suffix': 'zu.',

    'cta.contact': 'Projekt anfragen',

    'projects.skills.title': 'Tech Stack',

    'services.process.title': 'Ablauf eines Projektes',
    'services.process.1': 'Anforderungsanalyse',
    'services.process.1.desc': 'Ich lerne Ihr Unternehmen kennen, verstehe Ihre Ziele und definiere gemeinsam mit Ihnen den Scope des Projekts.',
    'services.process.1.tags': 'Kick-off · Zieldefinition · Scope',
    'services.process.2': 'Konzept & Planung',
    'services.process.2.desc': 'Auf Basis der Anforderungen erstelle ich eine klare Struktur, Technologiewahl und einen realistischen Zeitplan.',
    'services.process.2.tags': 'Architektur · Technologie · Roadmap',
    'services.process.3': 'Entwicklung & Test',
    'services.process.3.desc': 'Ich entwickle iterativ, halte Sie regelmäßig auf dem Laufenden und teste alles gründlich vor der Übergabe.',
    'services.process.3.tags': 'Iterativ · Review · QA',
    'services.process.4': 'Übergabe & Support',
    'services.process.4.desc': 'Nach dem Go-live begleite ich Sie bei der Einführung und stehe für Fragen und Anpassungen bereit.',
    'services.process.4.tags': 'Dokumentation · Schulung · Support',
  },
  en: {
    'nav.home':        'Home',
    'nav.about':       'About',
    'nav.services':    'Services',
    'nav.projects':    'Projects',
    'nav.contact':     'Contact',
    'nav.faq':         'FAQ',
    'nav.menu.open':   'Open menu',
    'nav.menu.close':  'Close menu',

    'hero.tagline':    'Power Apps Maker · Web Developer · Vibe Coder',
    'seo.title':       'Julius Bruch | Digital Solutions',
    'seo.description': 'Freelance low-code developer from Leipzig. Power Apps, Power Automate and custom Microsoft 365 solutions – plus professional websites. Get in touch today.',

    'hero.headline':   "Hi, I'm Julius.",
    'hero.subtitle':   'Freelance IT consultant from Leipzig.',
    'hero.cta.more':   'My Services',
    'hero.cta.contact': 'Get in touch',

    'services.title':  'My Services',

    'projects.title':  'Projects',

    'about.title':     'About Me',
    'about.intro':     "Master's student in Business Informatics at the University of Leipzig. Freelance low-code developer and web developer. I build scalable Power Apps and automations that streamline operations and unlock the full potential of Microsoft 365.",
    'about.body':      "My goal: make people's daily work genuinely easier. I build solutions that meet users where they are. Intuitive, reliable, and right inside the Microsoft tools they already know.",
    'about.profiles':  'Profiles',

    'contact.title':   'Contact',
    'contact.faq.title': 'Frequently Asked Questions',

    'footer.privacy':    'Privacy',
    'footer.impressum':  'Imprint',

    'privacy.title':    'Privacy Policy',
    'impressum.title':  'Imprint',

    'theme.toggle':    'Toggle theme',

    'back.projects':   'Back to Projects',
    'back.services':   'Back to Services',

    'projects.card.cta':   'View project',

    'contact.form.name':        'Name',
    'contact.form.email':       'Email',
    'contact.form.message':     'Message',
    'contact.form.send':        'Send Message',
    'contact.form.placeholder.name':    'Your name',
    'contact.form.placeholder.email':   'you@example.com',
    'contact.form.placeholder.message': 'Your message ...',
    'contact.form.privacy': 'I agree to the',
    'contact.form.privacy.link': 'Privacy Policy',
    'contact.form.privacy.suffix': '.',

    'cta.contact': 'Request project',

    'projects.skills.title': 'Tech Stack',

    'services.process.title': 'How I work',
    'services.process.1': 'Requirements analysis',
    'services.process.1.desc': 'I get to know your business, understand your goals, and define the project scope together with you.',
    'services.process.1.tags': 'Kick-off · Goals · Scope',
    'services.process.2': 'Concept & planning',
    'services.process.2.desc': 'Based on the requirements I create a clear structure, choose the right technologies, and set a realistic timeline.',
    'services.process.2.tags': 'Architecture · Technology · Roadmap',
    'services.process.3': 'Development & testing',
    'services.process.3.desc': 'I develop iteratively, keep you updated regularly, and test everything thoroughly before handover.',
    'services.process.3.tags': 'Iterative · Review · QA',
    'services.process.4': 'Handover & support',
    'services.process.4.desc': 'After go-live I support you during roll-out and remain available for questions and adjustments.',
    'services.process.4.tags': 'Docs · Training · Support',
  },
} satisfies Record<Lang, Record<string, string>>;
