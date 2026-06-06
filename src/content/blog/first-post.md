---
title: "Warum ich Astro für mein Portfolio gewählt habe"
date: 2026-01-15
description: "Astro liefert standardmäßig kein JavaScript, und genau das macht es zur perfekten Wahl für ein Content-fokussiertes Portfolio."
tags: ["astro", "webdev", "performance"]
---

Vor einigen Monaten stand ich vor der Frage, mit welchem Framework ich mein neues Portfolio bauen soll. React war vertraut, Next.js wäre solide gewesen, doch ich landete bei **Astro**. Hier erkläre ich warum.

## Das Problem mit JavaScript-First-Frameworks

Für ein Portfolio, das hauptsächlich statischen Content ausliefert, ist ein komplettes React-App-Bundle schlicht Overkill. Lighthouse-Scores leiden, der Browser muss JavaScript parsen, bevor irgendetwas sichtbar wird.

## Astros "Zero JS by default"-Ansatz

Astro sendet standardmäßig **kein JavaScript** an den Browser. Interaktive Elemente wie der Theme-Toggle auf dieser Seite werden gezielt als "Islands" eingebettet. Der Rest bleibt reines HTML und CSS.

```astro
---
// Diese Komponente rendert zu statischem HTML
const headline = "Hallo Welt";
---
<h1>{headline}</h1>
```

## Content Collections

Die typsicheren Content Collections machen das Verwalten von Blog-Posts und Projekten angenehm. Frontmatter wird mit Zod validiert, also kein Tippfehler-Debugging mehr.

## Fazit

Für Content-Websites, Portfolios und Blogs ist Astro aktuell meine erste Wahl. Die Developer Experience ist exzellent, und die resultierenden Sites sind schnell ohne zusätzliche Optimierungsarbeit.
