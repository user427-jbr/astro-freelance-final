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
    'nav.projects':    'Projekte',
    'nav.blog':        'Blog',
    'nav.contact':     'Kontakt',

    'hero.headline':   'Ich baue Dinge für das Web.',
    'hero.subtitle':   'Full-Stack-Entwickler mit Fokus auf moderne Web-Technologien, sauberen Code und nutzerzentriertes Design.',
    'hero.cta.projects': 'Projekte ansehen',
    'hero.cta.contact':  'Kontakt aufnehmen',

    'skills.title':    'Fähigkeiten',
    'skills.frontend': 'Frontend',
    'skills.backend':  'Backend',
    'skills.tools':    'Tools & DevOps',

    'projects.title':  'Projekte',
    'blog.title':      'Blog',

    'about.title':     'Über mich',
    'about.intro':     'Ich bin Julius, Webentwickler aus Jena. Ich entwerfe und baue digitale Produkte, die gleichzeitig schön, schnell und zugänglich sind.',
    'about.body':      'Mit mehreren Jahren Erfahrung im Web-Bereich bringe ich Projekte von der Idee über den Prototypen bis zum fertigen Produkt. Ich arbeite gerne an der Schnittstelle zwischen Design und Entwicklung und lege großen Wert auf Performance und Barrierefreiheit.',
    'about.availability': 'Aktuell offen für Freelance-Projekte.',
    'about.certs':        'Zertifizierungen',

    'contact.title':   'Kontakt',
    'contact.intro':   'Schreib mir, ich antworte schnell.',
    'contact.connect': 'Profile',
    'contact.linkedin':    'LinkedIn',
    'contact.freelance':   'freelance.de',

    'footer.tagline':  'Gebaut mit Astro.',
    'footer.privacy':    'Datenschutz',
    'footer.impressum':  'Impressum',

    'privacy.title':    'Datenschutz',
    'impressum.title':  'Impressum',

    'theme.toggle':    'Design wechseln',
    'reading.time':    'Min. Lesezeit',

    'back.blog':       'Zurück zum Blog',
    'back.projects':   'Zurück zu Projekten',

    'contact.form.name':        'Name',
    'contact.form.email':       'E-Mail',
    'contact.form.message':     'Nachricht',
    'contact.form.send':        'Nachricht senden',
    'contact.form.placeholder.name':    'Dein Name',
    'contact.form.placeholder.email':   'deine@email.de',
    'contact.form.placeholder.message': 'Deine Nachricht ...',
  },
  en: {
    'nav.home':        'Home',
    'nav.about':       'About',
    'nav.projects':    'Projects',
    'nav.blog':        'Blog',
    'nav.contact':     'Contact',

    'hero.headline':   'I build things for the web.',
    'hero.subtitle':   'Full-stack developer focused on modern web technologies, clean code, and user-centred design.',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact':  'Get in touch',

    'skills.title':    'Skills',
    'skills.frontend': 'Frontend',
    'skills.backend':  'Backend',
    'skills.tools':    'Tools & DevOps',

    'projects.title':  'Projects',
    'blog.title':      'Blog',

    'about.title':     'About',
    'about.intro':     'I\'m Julius, a web developer based in Jena, Germany. I design and build digital products that are beautiful, fast, and accessible.',
    'about.body':      'With several years of experience in web development, I take projects from idea through prototype to finished product. I enjoy working at the intersection of design and engineering, with a strong focus on performance and accessibility.',
    'about.availability': 'Currently available for freelance projects.',
    'about.certs':        'Certifications',

    'contact.title':   'Contact',
    'contact.intro':   'Drop me a line, I reply fast.',
    'contact.connect': 'Profiles',
    'contact.linkedin':    'LinkedIn',
    'contact.freelance':   'freelance.de',

    'footer.tagline':  'Built with Astro.',
    'footer.privacy':    'Privacy',
    'footer.impressum':  'Imprint',

    'privacy.title':    'Privacy Policy',
    'impressum.title':  'Imprint',

    'theme.toggle':    'Toggle theme',
    'reading.time':    'min read',

    'back.blog':       'Back to Blog',
    'back.projects':   'Back to Projects',

    'contact.form.name':        'Name',
    'contact.form.email':       'Email',
    'contact.form.message':     'Message',
    'contact.form.send':        'Send Message',
    'contact.form.placeholder.name':    'Your name',
    'contact.form.placeholder.email':   'you@example.com',
    'contact.form.placeholder.message': 'Your message ...',
  },
} satisfies Record<Lang, Record<string, string>>;
