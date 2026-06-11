export interface ServiceData {
  slug: string;
  icon: string;
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
      'Viele Unternehmen verlieren täglich wertvolle Zeit durch manuelle Prozesse: Formulare per E-Mail, Excel-Listen, die manuell befüllt werden, oder Genehmigungen, die im Postfach verschwinden. Genau hier setzt Microsoft Power Platform an. Ich entwickle maßgeschneiderte Canvas Apps und modellgetriebene Anwendungen, die sich nahtlos in Ihr bestehendes Microsoft 365-Umfeld einfügen. Genehmigungsworkflows laufen automatisch ab, Benachrichtigungen werden in Echtzeit versendet, und Berichte werden auf Knopfdruck als PDF erzeugt. Das Ergebnis: weniger Fehler, mehr Transparenz und ein Team, das sich auf das Wesentliche konzentrieren kann.',
    detailEN:
      'Many organizations lose valuable time every day to manual processes: forms sent by email, Excel sheets filled in by hand, or approvals that get lost in inboxes. That is exactly where Microsoft Power Platform comes in. I build custom Canvas Apps and model-driven applications that integrate seamlessly into your existing Microsoft 365 environment. Approval workflows run automatically, notifications are sent in real time, and reports are generated as PDFs at the click of a button. The result: fewer errors, more transparency, and a team that can focus on what matters.',
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
      'Ihre Website ist oft der erste Eindruck, den potenzielle Kunden von Ihrem Unternehmen haben. Ein langsamer Ladezeit, schlechte Darstellung auf dem Smartphone oder fehlende Suchmaschinenoptimierung kosten Besucher – und damit Umsatz. Mit dem modernen Static-Site-Framework Astro entstehen Websites, die in allen Bereichen überzeugen: blitzschnell, barrierefrei, DSGVO-konform und suchmaschinenoptimiert. Ich begleite Sie vom ersten Konzept bis zum Go-live und stelle sicher, dass Ihre digitale Präsenz langfristig funktioniert.',
    detailEN:
      'Your website is often the first impression potential clients have of your business. Slow load times, poor mobile display, or missing SEO cost you visitors – and revenue. Using the modern static-site framework Astro, I create websites that excel in every area: blazing fast, accessible, GDPR-compliant, and search-engine optimized. I guide you from the initial concept to go-live and ensure your digital presence works for the long term.',
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
