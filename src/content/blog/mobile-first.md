---
title: "Mobile First ist mehr als eine Breakpoint-Reihenfolge"
date: 2026-03-10
description: "Mobile-first Design bedeutet nicht einfach, media queries anders herum zu schreiben. Es ist eine Denkweise, die das gesamte UI-Design verbessert."
tags: ["css", "mobile", "ux"]
---

„Mobile first" ist ein Begriff, den fast jeder kennt. In der Praxis sieht man aber oft CSS, das Desktop-Layouts nachträglich auf Mobile zusammenquetscht. Das führt zu aufgeblähtem CSS und fragilen Layouts.

## Was Mobile First wirklich bedeutet

Der Kern ist einfach: **Fang mit dem kleinsten Bildschirm an.** Definiere dein Basis-Layout für mobile Geräte und erweitere es dann für größere Screens mit `min-width`-Queries.

```css
/* Mobile: basis */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet + */
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Fluid Typography statt Breakpoints

Noch besser: Mit `clamp()` braucht man für Typografie oft gar keine Breakpoints mehr.

```css
h1 {
  font-size: clamp(2rem, 5vw, 4.5rem);
}
```

Der Text wächst gleichmäßig mit dem Viewport, ganz ohne abrupten Sprung.

## Touch-Targets nicht vergessen

44×44 px ist die empfohlene Mindestgröße für touch-interaktive Elemente (Apple HIG, WCAG). Kleine Buttons frustrieren mobile Nutzer mehr als alles andere.

## Fazit

Mobile-first ist eine Denkweise: Fang mit dem Wesentlichen an und füge Komplexität hinzu, nicht umgekehrt. Dein CSS wird schlanker, deine Layouts robuster.
