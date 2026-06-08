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
}

export const services: ServiceData[] = [
  {
    slug: 'process-automation',
    icon: 'lucide:workflow',
    nameDE: 'Prozessautomatisierung',
    nameEN: 'Process Automation',
    descDE:
      'Apps und Workflows auf Basis von Microsoft Power Platform – von Canvas Apps über Genehmigungsflows bis hin zur automatisierten PDF-Erstellung.',
    descEN:
      'Apps and workflows built on Microsoft Power Platform – from Canvas Apps to approval flows and automated PDF generation.',
    cardFeaturesDE: ['Power Apps', 'Power Automate', 'PDF-Generierung'],
    cardFeaturesEN: ['Power Apps', 'Power Automate', 'PDF generation'],
    featuresDE: [
      'Power Apps (Canvas & Modellgetrieben)',
      'Genehmigungsworkflows',
      'Automatisierte E-Mails',
      'PDF-Generierung',
    ],
    featuresEN: [
      'Power Apps (Canvas & Model-Driven)',
      'Approval workflows',
      'Automated emails',
      'PDF generation',
    ],
    detailDE:
      'Ich entwickle maßgeschneiderte Power Apps und automatisiere Ihre Geschäftsprozesse mit Power Automate – von der App-Entwicklung über Genehmigungsworkflows bis zur automatisierten PDF-Erstellung und Datensynchronisation. Ob Canvas App für Tablet und Mobil, modellgetriebene App oder komplexer Multi-Step-Workflow: Gemeinsam finden wir die passende Lösung für Ihr Unternehmen.',
    detailEN:
      'I build custom Power Apps and automate your business processes with Power Automate – from app development to approval workflows, automated PDF generation, and data synchronization. Whether a Canvas App for tablet and mobile, a model-driven app, or a complex multi-step workflow: together we find the right solution for your organization.',
  },
  {
    slug: 'sharepoint',
    icon: 'lucide:file-text',
    nameDE: 'SharePoint Lösungen',
    nameEN: 'SharePoint Solutions',
    descDE:
      'Ich richte SharePoint-Intranetlösungen ein, die als Grundlage für Ihre Power Apps und Workflows dienen.',
    descEN:
      'I set up SharePoint intranet solutions that serve as the foundation for your Power Apps and workflows.',
    cardFeaturesDE: ['SharePoint Online', 'Team Sites', 'Dokumentenmanagement'],
    cardFeaturesEN: ['SharePoint Online', 'Team sites', 'Document management'],
    featuresDE: [
      'SharePoint Online Setup',
      'Listen & Bibliotheken',
      'Berechtigungskonzepte',
      'Team Sites & Intranets',
      'Dokumentenmanagement',
    ],
    featuresEN: [
      'SharePoint Online setup',
      'Lists & libraries',
      'Permission management',
      'Team sites & intranets',
      'Document management',
    ],
    detailDE:
      'Gut strukturierte SharePoint-Listen, Bibliotheken und Berechtigungskonzepte bilden das Fundament für alle digitalen Prozesse in Ihrem Unternehmen. Ich richte SharePoint Online Umgebungen ein, die nahtlos mit Power Apps und Power Automate zusammenarbeiten – von einfachen Team-Sites bis hin zu vollständigen Intranet-Portalen mit rollenbasierter Zugriffskontrolle.',
    detailEN:
      'Well-structured SharePoint lists, libraries, and permission concepts form the backbone of all digital processes in your organization. I set up SharePoint Online environments that work seamlessly with Power Apps and Power Automate – from simple team sites to complete intranet portals with role-based access control.',
  },
  {
    slug: 'web-development',
    icon: 'lucide:monitor',
    nameDE: 'Web Entwicklung',
    nameEN: 'Web Development',
    descDE:
      'Professionelle Websites und Landing Pages für Unternehmen. Schnell, barrierefrei und modern.',
    descEN:
      'Professional websites and landing pages for businesses. Fast, accessible, and modern.',
    cardFeaturesDE: ['Astro / React', 'SEO-Optimierung', 'DSGVO-konform'],
    cardFeaturesEN: ['Astro / React', 'SEO optimization', 'GDPR-compliant'],
    featuresDE: [
      'Statische Websites (Astro)',
      'Responsive Design',
      'SEO-Optimierung',
      'DSGVO-konform',
      'Schnelle Ladezeiten',
    ],
    featuresEN: [
      'Static websites (Astro)',
      'Responsive design',
      'SEO optimization',
      'GDPR-compliant',
      'Fast load times',
    ],
    detailDE:
      'Neben der Microsoft Power Platform entwickle ich auch professionelle Websites und Landing Pages für Unternehmen. Mit dem modernen Static-Site-Framework Astro entstehen blitzschnelle, barrierefreie Websites, die als perfekte digitale Visitenkarte für Ihr Unternehmen dienen – DSGVO-konform und für Suchmaschinen optimiert.',
    detailEN:
      'In addition to the Microsoft Power Platform, I develop professional websites and landing pages for businesses. Using the modern static-site framework Astro, blazing-fast, accessible websites are created that serve as the perfect digital business card – GDPR-compliant and optimized for search engines.',
  },
];
