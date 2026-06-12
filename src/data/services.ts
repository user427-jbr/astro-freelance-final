export interface ServiceData {
  slug: string;
  icon: string;
  image?: string;
  nameDE: string;
  nameEN: string;
  descDE: string;
  descEN: string;
  cardFeaturesDE: string[];
  cardFeaturesEN: string[];
  featuresDE: string[];
  featuresEN: string[];
  detailDE: string;
  detailEN: string;
  useCasesDE: string[];
  useCasesEN: string[];
}

export const services: ServiceData[] = [
  {
    slug: 'process-automation',
    icon: 'lucide:workflow',
    image: 'process-automation-1.png',
    nameDE: 'Prozessautomatisierung',
    nameEN: 'Process Automation',
    descDE:
      'Apps und Workflows auf Basis von Microsoft Power Platform.',
    descEN:
      'Apps and workflows built on Microsoft Power Platform.',
    cardFeaturesDE: ['Power Apps', 'Power Automate', 'SharePoint', 'Genehmigungsworkflows', 'PDF-Generierung', 'Dataverse'],
    cardFeaturesEN: ['Power Apps', 'Power Automate', 'SharePoint', 'Approval workflows', 'PDF generation', 'Dataverse'],
    featuresDE: [
      'Canvas Apps für Tablet, Mobil und Desktop',
      'Modellgetriebene Apps mit Dataverse-Backend',
      'Mehrstufige Genehmigungsworkflows',
      'Automatisierte E-Mail- und Teams-Benachrichtigungen',
      'PDF-Generierung und Dokumentenversand',
      'SharePoint- und Excel-Integration',
      'Datensynchronisation zwischen Systemen',
      'Fehlerbehandlung und Monitoring',
    ],
    featuresEN: [
      'Canvas Apps for tablet, mobile, and desktop',
      'Model-driven apps with Dataverse backend',
      'Multi-step approval workflows',
      'Automated email and Teams notifications',
      'PDF generation and document dispatch',
      'SharePoint and Excel integration',
      'Data synchronization between systems',
      'Error handling and monitoring',
    ],
    detailDE:
      'Manuelle Prozesse kosten Zeit und erzeugen Fehler. Mit Microsoft Power Platform entwickle ich maßgeschneiderte Apps und Workflows, die sich nahtlos in Ihr Microsoft 365-Umfeld einfügen.',
    detailEN:
      'Manual processes waste time and cause errors. With Microsoft Power Platform I build custom apps and workflows that fit seamlessly into your Microsoft 365 environment.',
    useCasesDE: [
      'Urlaubsanträge und HR-Workflows',
      'Reisekostenabrechnung mit PDF-Export',
      'Bestellanforderungen und Freigabeprozesse',
      'Qualitätssicherung und Checklisten-Apps',
      'Lager- und Inventarverwaltung',
    ],
    useCasesEN: [
      'Leave requests and HR workflows',
      'Travel expense reports with PDF export',
      'Purchase requests and approval processes',
      'Quality assurance and checklist apps',
      'Inventory and stock management',
    ],
  },
  {
    slug: 'web-development',
    icon: 'lucide:monitor',
    image: 'web-development-1.png',
    nameDE: 'Web Entwicklung',
    nameEN: 'Web Development',
    descDE:
      'Professionelle Websites und Landing Pages für Unternehmen.',
    descEN:
      'Professional websites and landing pages for businesses.',
    cardFeaturesDE: ['Astro / React', 'SEO-Optimierung', 'DSGVO-konform', 'Mehrsprachig', 'Barrierefrei'],
    cardFeaturesEN: ['Astro / React', 'SEO optimization', 'GDPR-compliant', 'Multilingual', 'Accessible'],
    featuresDE: [
      'Statische Websites mit Astro (maximale Performance)',
      'Responsives Design für alle Geräte',
      'SEO-Optimierung und strukturierte Daten',
      'DSGVO-konform ohne externe Tracker',
      'Dark/Light-Mode und Barrierefreiheit',
      'Mehrsprachigkeit (i18n)',
      'Kontaktformulare mit Netlify oder eigener API',
      'Schnelle Ladezeiten und Core Web Vitals',
    ],
    featuresEN: [
      'Static websites with Astro (maximum performance)',
      'Responsive design for all devices',
      'SEO optimization and structured data',
      'GDPR-compliant without external trackers',
      'Dark/light mode and accessibility',
      'Multilingual support (i18n)',
      'Contact forms via Netlify or custom API',
      'Fast load times and Core Web Vitals',
    ],
    detailDE:
      'Ihre Website ist der erste Eindruck und der muss sitzen. Ich entwickle schnelle, barrierefreie und DSGVO-konforme Websites mit Astro: vom ersten Konzept bis zum Go-live.',
    detailEN:
      'Your website is the first impression and it needs to land. I build fast, accessible, and GDPR-compliant websites with Astro: from initial concept to go-live.',
    useCasesDE: [
      'Unternehmenswebsite und digitale Visitenkarte',
      'Landing Pages für Produkte oder Kampagnen',
      'Portfolio- und Präsentationsseiten',
      'Blogs und Content-Websites',
      'Mehrsprachige internationale Auftritte',
    ],
    useCasesEN: [
      'Company website and digital business card',
      'Landing pages for products or campaigns',
      'Portfolio and presentation sites',
      'Blogs and content websites',
      'Multilingual international presences',
    ],
  },
];
