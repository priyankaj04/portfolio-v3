# ◼ Priyanka J — Portfolio

> Dark. Sharp. Alive.
> A modern, story-driven developer portfolio — built with React + Tailwind CSS.
> Scroll through a life in code.

---

## 🗂️ Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React (Vite) |
| Styling | Tailwind CSS + CSS Variables |
| Fonts | Clash Display (headings), Syne (subheadings), Instrument Sans (body) |
| Animations | Framer Motion |
| Parallax | react-scroll-parallax |
| Illustrations | Custom SVG illustrations (per section) |
| Data | `/src/data/portfolio.json` |

---

## 📁 Project Structure

```
src/
├── data/
│   └── portfolio.json            # Single source of truth — all content lives here
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Timeline.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   └── Contact.jsx
├── illustrations/
│   ├── HeroBlob.jsx              # SVG illustration — abstract coder figure
│   ├── TimelineThread.jsx        # SVG connecting thread across milestones
│   ├── SkillOrbs.jsx             # Abstract orb cluster for skills
│   └── ContactWave.jsx           # Wavy abstract footer illustration
├── hooks/
│   └── useScrollReveal.js
├── App.jsx
└── index.css
```

---

## 📄 `portfolio.json` — Data Schema

All sections read from this single file. Update here, reflects everywhere.

```json
{
  "meta": {
    "name": "Priyanka J",
    "title": "Full Stack & AI Engineer",
    "tagline": "I build things that make life a little easier — one commit at a time.",
    "location": "India",
    "email": "",
    "github": "",
    "linkedin": "",
    "availableForWork": true
  },

  "about": {
    "bio": "Passionate, curious developer constantly looking for problems to solve. I work at the intersection of full stack engineering and AI — building systems that scale, agents that think, and products that matter.",
    "currentFocus": ["AI/ML Engineering", "Inference Engineering", "Full Stack Systems"]
  },

  "skills": {
    "fullstack": ["Node.js", "React", "Next.js", "PostgreSQL", "Redis", "AWS"],
    "ai": ["RAG Applications", "AI Agents", "Fine Tuning", "Inferencing", "Context Tokenization", "LangChain", "LangGraph"],
    "tools": ["Docker", "Flask", "Express.js", "Tailwind CSS"]
  },

  "timeline": [
    {
      "id": 1,
      "year": "2020",
      "title": "The Beginning",
      "description": "Started BCA. Wrote my first line of code. Got hooked.",
      "type": "education",
      "accent": "orange"
    },
    {
      "id": 2,
      "year": "Oct 2022",
      "title": "First Real Mission",
      "description": "Joined Circle Health as an intern. Dove into Node.js, React, PostgreSQL — and real-world healthcare tech.",
      "type": "work",
      "accent": "white"
    },
    {
      "id": 3,
      "year": "2023",
      "title": "Degree Unlocked",
      "description": "Completed BCA. Three years of fundamentals done.",
      "type": "education",
      "accent": "orange"
    },
    {
      "id": 4,
      "year": "Sep 2023",
      "title": "Founding Engineer",
      "description": "Went full-time at Circle Health as a Founding Engineer. Bigger scope, bigger problems.",
      "type": "work",
      "accent": "white"
    },
    {
      "id": 5,
      "year": "2024",
      "title": "Built a Company",
      "description": "Co-founded Ferronyx — a robotics fleet observability platform. Flask, React, Claude API, LangChain, LangGraph. Solid engineering, big lessons.",
      "type": "startup",
      "accent": "orange"
    },
    {
      "id": 6,
      "year": "2025",
      "title": "Back to School (Again)",
      "description": "Started MCA at VIT online. Leveling up theory while shipping in production.",
      "type": "education",
      "accent": "white"
    },
    {
      "id": 7,
      "year": "Now",
      "title": "Still Building",
      "description": "Full stack. AI. Always solving something. The story continues.",
      "type": "current",
      "accent": "orange"
    }
  ],

  "experience": [
    {
      "company": "Circle Health",
      "role": "Founding Engineer",
      "period": "Oct 2022 – Present",
      "type": "full-time",
      "highlights": [
        "Customer app — 40% increase in platform users, avg 1 hr/user/month",
        "WhatsApp chatbot — 30% increase in consultation bookings",
        "Partner integrations expanding US business by 30%",
        "Medical AI Agent — books consultations, reviews vitals, generates prescriptions, creates care plans, identifies care gaps — 15x care manager efficiency, 30% more billing",
        "US healthcare compliance (HIPAA), security architecture, system protection"
      ]
    },
    {
      "company": "Ferronyx",
      "role": "CTO & Co-founder",
      "period": "2024 (8 months)",
      "type": "startup",
      "highlights": [
        "Built a robotics fleet observability platform end-to-end from scratch",
        "Stack: Flask, React, Claude API, LangChain, LangGraph",
        "RAG applications, AI agents, anomaly detection on ROS2 data",
        "Shutdown after 8 months — the engineering was solid, the lessons were invaluable"
      ]
    }
  ],

  "projects": [
    {
      "name": "Medical AI Agent",
      "description": "AI agent for care managers that books consultations, schedules calls, reviews vitals, generates prescriptions, creates care plans, and identifies care gaps.",
      "tech": ["Node.js", "LangGraph", "PostgreSQL", "React"],
      "impact": "15x care manager efficiency · 30% more billing"
    },
    {
      "name": "WhatsApp Health Bot",
      "description": "Healthcare consultation booking chatbot over WhatsApp — accessible, conversational, instant.",
      "tech": ["Node.js", "WhatsApp Cloud API"],
      "impact": "30% increase in consultation bookings"
    },
    {
      "name": "SRE Platform",
      "description": "Full-stack site reliability platform — AWS monitoring, Slack alerts, status page, anomaly detection, AI healing recommendations, and auto-healing daemon.",
      "tech": ["Node.js", "React", "PostgreSQL", "Redis", "AWS", "Sentry"],
      "impact": "Production-grade SRE system built from scratch"
    },
    {
      "name": "Ferronyx Platform",
      "description": "Robotic fleet observability platform with real-time monitoring, RAG-based runbook generation, and LLM-powered diagnostics.",
      "tech": ["Flask", "React", "Claude API", "LangChain", "LangGraph"],
      "impact": "Built end-to-end from zero"
    }
  ],

  "education": [
    {
      "degree": "MCA",
      "institute": "VIT (Online)",
      "period": "2025 – 2027",
      "status": "Ongoing"
    },
    {
      "degree": "BCA",
      "institute": "College",
      "period": "2020 – 2023",
      "status": "Completed"
    }
  ]
}
```

---

## 🎨 Design System

### Philosophy
> **Refined brutalism.** Sharp edges, deliberate whitespace, orange as fire — not decoration.
> The site feels like a developer's brain: structured, fast, opinionated.

### Color Palette

```
--color-bg:         #0a0a0a    (near-black background)
--color-surface:    #111111    (card/section surfaces)
--color-border:     #1f1f1f    (subtle borders)
--color-orange:     #f45d00    (primary accent — CTAs, highlights, active states)
--color-orange-dim: #f45d0022  (orange tint for card backgrounds/hover)
--color-white:      #f5f5f5    (primary text)
--color-muted:      #6b6b6b    (secondary text, labels)
--color-line:       #2a2a2a    (dividers, timeline thread)
```

### Typography

| Role | Font | Weight | Use |
|---|---|---|---|
| Display / H1 | `Clash Display` | 600–700 | Hero name, section titles |
| Subheadings | `Syne` | 500–600 | Card titles, labels, nav |
| Body | `Instrument Sans` | 400 | Descriptions, paragraphs |
| Mono / Tags | `JetBrains Mono` | 400 | Tech tags, code snippets, dates |

```html
<!-- Add to index.html -->
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=syne@500,600&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
```

### Visual Details
- **Grain overlay** — subtle noise texture at 3–5% opacity over the entire page (`::before` pseudo)
- **Orange glow** — `box-shadow: 0 0 40px #f45d0033` on hover for key cards
- **Hairline borders** — `1px solid #1f1f1f` on cards and sections, no rounded corners (sharp, intentional)
- **Diagonal section break** — use `clip-path: polygon(0 0, 100% 4%, 100% 100%, 0 96%)` between sections
- **Cursor** — custom orange dot cursor that scales on hover
- **Selection color** — `::selection { background: #f45d00; color: #0a0a0a }`

---

## 📐 Sections & Layout

### 1. 🔥 Hero
- Full viewport height
- Left side: Large display name (`Clash Display`, ~96px), title, tagline, CTA buttons
- Right side: SVG illustration — abstract floating shapes / coder silhouette with orange glow
- Animated: name fades + slides up on load, illustration floats gently (infinite subtle y-motion)
- Background: dark with very faint diagonal grid lines
- Parallax: background grid moves slower than foreground text on scroll

### 2. 👤 About
- Two-column: short punchy bio on left, "Current Focus" list on right
- Bio rendered with `Instrument Sans`, large leading, very readable
- Focus items shown as orange-bordered inline tags
- Small decorative SVG blob behind the bio text (abstract, orange-tinted)

### 3. 📖 Timeline — *The Story*
- Full-width vertical scroll section — **the centerpiece**
- Each milestone is a card connected by a continuous vertical orange thread line (SVG)
- Cards alternate left/right on desktop, single column on mobile
- Each card: year (mono font, muted), title (Syne bold), description (Instrument Sans)
- On scroll: cards slide in from their respective side (left cards from left, right from right)
- Active/current milestone: orange left border, faint orange background tint
- Thread line animates — draws itself downward as user scrolls (SVG stroke-dashoffset trick)

### 4. ⚡ Skills
- Three rows: Full Stack / AI / Tools
- Each skill as a minimal pill tag: `border: 1px solid #2a2a2a`, hover → orange border + orange-dim background
- Group labels in `Syne`, small caps, muted orange
- Abstract SVG cluster illustration floats on the right side (decorative)
- Stagger animation: pills fade in one by one on scroll entry

### 5. 💼 Experience
- Large cards, full width, stacked
- Company name large in `Clash Display`, role + period in `Syne`
- Highlights as clean bullet list — each bullet prefixed with orange `→`
- Impact numbers (40%, 15x, 30%) wrapped in orange highlight spans
- Subtle card hover: orange left border slides in, faint background shift

### 6. 🛠️ Projects
- Asymmetric 2-column grid on desktop (one large featured card + two smaller)
- Each card: project name, description, tech pills, impact stat
- Featured card has a large faint SVG illustration as background
- Impact line in orange, slightly larger font
- Hover: card lifts (`translateY(-4px)`), orange glow shadow

### 7. 🎓 Education
- Minimal, clean — two cards side by side
- Degree large, institute and period muted below
- Status badge: `ONGOING` in orange mono, `COMPLETED` in muted white mono
- Thin horizontal rule between section and content

### 8. 📬 Contact
- Full-width section, centered
- Large heading: "Let's Build Something."
- Email + GitHub + LinkedIn as clean icon+text rows
- https://github.com/priyankaj04 , https://www.linkedin.com/in/priyankaj04/ , priyankajagadeesha10@gmail.com
- Optional: minimal contact form (name, email, message — borderless inputs, orange focus border)
- SVG abstract wave illustration above the footer line
- Availability badge: green dot + "Open to opportunities" if `availableForWork: true`

---

## ✨ Animations & Effects

| Effect | Section | Implementation |
|---|---|---|
| Staggered text reveal on load | Hero | Framer Motion `staggerChildren` |
| Floating illustration | Hero | Framer Motion infinite y keyframe |
| Parallax background grid | Hero | `react-scroll-parallax` |
| Timeline thread draw | Timeline | SVG `stroke-dashoffset` on scroll |
| Cards slide in from sides | Timeline | Framer Motion `x` + `opacity`, viewport trigger |
| Pill stagger fade-in | Skills | Framer Motion `staggerChildren` |
| Orange border slide on hover | Experience cards | CSS transition |
| Card lift + glow on hover | Projects | CSS `transform` + `box-shadow` |
| Section fade-up on scroll | All sections | Framer Motion `useInView` |
| Grain overlay | Global | CSS `::before` with SVG noise |
| Custom cursor | Global | JS `mousemove` listener |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| Mobile (`< 640px`) | Single column everything, timeline stacks center, hero text full width |
| Tablet (`640–1024px`) | Two-column grid for projects/skills, timeline stays centered |
| Desktop (`> 1024px`) | Full alternating timeline, asymmetric project grid, parallax active |

> Parallax and custom cursor disabled on touch devices.
> Grain overlay reduced opacity on mobile for performance.

---

## 🖼️ Illustrations Guide

All illustrations are custom SVGs — lightweight, theme-consistent, no external image dependencies.

| File | Section | Description |
|---|---|---|
| `HeroBlob.jsx` | Hero | Abstract layered shapes with orange glow, floating animation |
| `TimelineThread.jsx` | Timeline | Vertical SVG line that draws itself on scroll |
| `SkillOrbs.jsx` | Skills | Cluster of abstract circles/orbs, decorative |
| `ContactWave.jsx` | Contact | Smooth wavy divider above footer |

> All SVGs use `currentColor` and CSS variables so they adapt to theme changes automatically.

---

## 🚀 Getting Started

```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build
```

### Dependencies

```bash
npm install framer-motion react-scroll-parallax
```

### Global CSS Setup (`index.css`)

```css
:root {
  --color-bg: #0a0a0a;
  --color-surface: #111111;
  --color-border: #1f1f1f;
  --color-orange: #f45d00;
  --color-orange-dim: rgba(244, 93, 0, 0.08);
  --color-white: #f5f5f5;
  --color-muted: #6b6b6b;
  --color-line: #2a2a2a;
}

body {
  background: var(--color-bg);
  color: var(--color-white);
  cursor: none; /* replaced by custom cursor */
}

::selection {
  background: var(--color-orange);
  color: var(--color-bg);
}

/* Grain overlay */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* SVG noise */
  opacity: 0.035;
  pointer-events: none;
  z-index: 9999;
}
```

---

## 📝 Notes

- All content lives in `src/data/portfolio.json` — never hardcode strings in components
- Components are purely presentational — receive data as props from `App.jsx`
- Add new projects, timeline events, or skills only by editing the JSON
- Orange (`#f45d00`) is used sparingly — reserved for the most important elements. Don't overuse it.
- Sharp corners everywhere. No `border-radius` except on pill tags (`border-radius: 999px`)

---

*Dark. Sharp. Alive. — Portfolio v1.0*