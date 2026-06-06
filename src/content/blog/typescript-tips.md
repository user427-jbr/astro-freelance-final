---
title: "5 TypeScript-Patterns, die meinen Code sauberer machen"
date: 2026-05-02
description: "Von Discriminated Unions bis zu Template Literal Types: diese TypeScript-Features nutze ich täglich und möchte sie nicht mehr missen."
tags: ["typescript", "javascript", "clean-code"]
---

TypeScript ist mehr als „JavaScript mit Typen". Wer die Sprache wirklich ausreizt, bekommt ein Tool, das Fehler verhindert, bevor sie entstehen, und den Code selbst dokumentiert.

## 1. Discriminated Unions statt boolean-Flags

```typescript
// ❌ Fragil
type State = { loading: boolean; data?: User; error?: string };

// ✅ Exhaustiv überprüfbar
type State =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: User }
  | { status: 'error'; message: string };
```

## 2. `satisfies` für sichere Objekt-Typen

```typescript
const config = {
  port: 3000,
  host: 'localhost',
} satisfies Record<string, string | number>;

// config.port ist number, nicht string | number
```

## 3. Template Literal Types

```typescript
type EventName = `on${Capitalize<string>}`;
// 'onClick', 'onSubmit', 'onChange' : alle valide
```

## 4. `infer` in Conditional Types

```typescript
type UnpackPromise<T> = T extends Promise<infer U> ? U : T;
type Resolved = UnpackPromise<Promise<string>>; // string
```

## 5. `as const` für Enums ohne Enum

```typescript
const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

type Route = typeof ROUTES[keyof typeof ROUTES];
// '/' | '/about' | '/contact'
```

## Fazit

Diese fünf Patterns kosten kaum Lernaufwand, zahlen sich aber schnell aus, besonders in größeren Codebasen, wo Typen als lebendige Dokumentation fungieren.
