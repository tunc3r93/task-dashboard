# React Projektstruktur (`src/`)

```txt
src/
│
├── api/
│   └── client.ts
│
├── assets/
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── MainLayout.tsx
│   │
│   └── tasks/
│       ├── TaskCard.tsx
│       ├── TaskList.tsx
│       └── TaskForm.tsx
│
├── pages/
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   └── Settings.tsx
│
├── hooks/
│   └── useTasks.ts
│
├── services/
│   └── taskService.ts
│
├── types/
│   └── task.ts
│
├── styles/
│   ├── globals.css
│   └── variables.css
│
├── App.tsx
├── main.tsx
└── router.tsx
```

---

# Ordnerstruktur erklärt

## `api/`
Enthält die zentrale API-Konfiguration und die Kommunikation mit externen Schnittstellen.

---

## `assets/`
Beinhaltet statische Dateien wie Bilder, Icons, Schriftarten oder andere Medien.

---

# `components/`

Hier liegen alle wiederverwendbaren React-Komponenten.

---

## `components/ui/`

Allgemeine UI-Komponenten, die unabhängig von bestimmten Features genutzt werden können.

Typische Inhalte:
- Buttons
- Inputs
- Cards
- Modals

---

## `components/layout/`

Komponenten für das globale Layout der Anwendung.

Dazu gehören:
- Navigation
- Sidebar
- Hauptlayout
- allgemeine Seitenstruktur

---

## `components/tasks/`

Feature-spezifische Komponenten für den Aufgabenbereich der Anwendung.

Die Struktur nach Features sorgt für bessere Übersichtlichkeit und einfachere Wartung.

---

# `pages/`

Enthält komplette Seiten der Anwendung.

Jede Datei repräsentiert normalerweise eine Route bzw. Ansicht.

Hier werden Komponenten, Hooks und Services kombiniert.

---

# `hooks/`

Custom React Hooks für wiederverwendbare Logik.

Dazu gehören häufig:
- State-Handling
- API-Logik
- Filter
- Datenverwaltung

Die Auslagerung der Logik verbessert die Wiederverwendbarkeit und hält Komponenten übersichtlich.

---

# `services/`

Enthält Business-Logik und Datenzugriffe.

Dieser Bereich kümmert sich um:
- API-Aufrufe
- Datenverarbeitung
- Kommunikation mit dem Backend

---

# `types/`

TypeScript-Typen und Interfaces der Anwendung.

Sorgt für:
- bessere Typisierung
- klarere Datenstrukturen
- weniger Fehler im Code

---

# `styles/`

Globale Styles und CSS-Dateien der Anwendung.

---

## `globals.css`
Globale Basisstyles und allgemeine Formatierungen.

---

## `variables.css`
Zentrale CSS-Variablen für Farben, Abstände und Designwerte.

---

# Root-Dateien

## `App.tsx`

Zentrale Hauptkomponente der Anwendung.

Hier werden meistens globale Layouts, Provider und Routing eingebunden.

---

## `main.tsx`

Einstiegspunkt der React-Anwendung.

Verantwortlich für das Rendern der App im DOM.

---

## `router.tsx`

Definiert die Routen und Navigation der Anwendung.

Hier wird festgelegt, welche Seite unter welcher URL geladen wird.

---

# Vorteile der Struktur

- klare Trennung der Verantwortlichkeiten
- einfache Wartung
- gute Skalierbarkeit
- wiederverwendbare Komponenten
- übersichtlicher Projektaufbau
- gut geeignet für größere React-Projekte mit TypeScript