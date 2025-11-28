# Nova Studio - Enterprise Brutalist Landing Page Template

A "God Tier" creative studio portfolio template designed with an **Anti-Design / Neo-Brutalist** aesthetic. This project prioritizes bold typography, kinetic motion, and raw technical interactions over traditional web polish, while maintaining enterprise-grade performance and code quality.

## 🚀 Live Tech Stack

*   **Framework:** React 19
*   **Styling:** Tailwind CSS (configured for Brutalist design tokens)
*   **Animation Engine:** GSAP (GreenSock Animation Platform)
    *   `ScrollTrigger`: For pinned sections and scroll-driven parallax.
    *   `TextPlugin`: For kinetic text decoding and scrambling effects.
*   **Fonts:** 
    *   Display: *Syne* (Extra Bold / Wide)
    *   Body: *Space Grotesk* (Technical / Geometric)

---

## 🎨 Design Philosophy: "System_Breaker"

The design language moves away from the "Clean SaaS" look into a high-energy, confident, and polarizing aesthetic.

1.  **Kinetic Typography:** Text is not just content; it is the main visual element. It explodes, drifts, blurs, and decodes.
2.  **Industrial HUD:** The UI mimics technical dashboards (progress bars, memory usage stats, system checks) to give an "under the hood" feel.
3.  **Horizontal Friction:** The `ProcessTimeline` section breaks the vertical scroll habit, forcing the user to engage with the methodology step-by-step.
4.  **Raw Materials:** Use of pure hex codes (`#00FF00` Acid Green, `#FF00FF` Hot Pink) and unstyled HTML elements (borders, default scrollbars) used intentionally as design features.

---

## 📂 Project Structure

```
/
├── components/
│   ├── Hero.tsx            # Kinetic text explosion + Ghost effects + CRT overlay
│   ├── ProcessTimeline.tsx # Horizontal scroll system with snap physics & HUD
│   ├── ProjectGrid.tsx     # Brutalist directory-style project showcase
│   ├── Manifesto.tsx       # Parallax text wall
│   ├── Team.tsx            # Rotated neo-brutalist cards
│   ├── Contact.tsx         # Maximalist input fields
│   └── ClientProof.tsx     # Infinite scroll ticker
├── types.ts                # TypeScript definitions
├── App.tsx                 # Main layout & Smooth scroll context
└── index.html              # Tailwind config & Font imports
```

---

## 🛠️ Key Components & Implementation Details

### 1. The Kinetic Hero (`Hero.tsx`)
Uses a complex GSAP timeline to:
1.  **Decode** the initial text ("WE DON'T FOLLOW...").
2.  **Glitch** and distort the container.
3.  **Ghost** the text: Transforms the solid text into a drifting, outlined "wireframe" in the background.
4.  **Impact** the final headline: "WE BREAK THEM" slams in with a chromatic aberration effect.

### 2. The Operation Protocol (`ProcessTimeline.tsx`)
A strictly engineered horizontal scroll section:
*   **Physics:** Uses `ScrollTrigger` with `snap` logic to ensure users land exactly on a step, never in between.
*   **Math:** `xPercent: -75` (for 4 slides) calculation ensures the track ends exactly at the right pixel.
*   **HUD Sync:** The progress bar and "Active Step" indicators utilize the `onUpdate` callback to sync animation time with scroll position.

---

## 🤖 Prompt Engineering Guide

To generate similar "God Tier" designs using AI, use the following prompt structure. This template was built using a variation of this strategy.

### The "Anti-Design" Prompt Template

**1. Define the Persona:**
> "Act as a world-class Creative Technologist and Awwwards Judge. You specialize in Brutalist, Neo-Brutalist, and Kinetic Typography web experiences."

**2. Set the Visual Rules (The "No" List):**
> "Do NOT design a standard SaaS landing page. No rounded corners, no soft shadows, no happy gradients.
> **Aesthetic:** Raw, Aggressive, High-Contrast.
> **Colors:** #050505 Background, #CCFF00 Accents.
> **Typography:** Huge, overlapping, uppercase display fonts (Syne/Druk)."

**3. Define the Motion (GSAP Specifics):**
> "Use GSAP for everything. I want:
> - ScrollTrigger pinning for the process section (horizontal scroll).
> - TextPlugin for 'hacker' decoding effects.
> - Parallax speed differences between text and images."

**4. Request "God Tier" Details:**
> "Add micro-interactions that make it feel expensive:
> - Custom cursor behavior.
> - Noise/Grain overlays.
> - Technical 'HUD' elements (tiny text showing CPU usage, scroll coordinates).
> - Smooth easing (Power4.inOut)."

**5. Iteration Strategy:**
> "If the text overlaps, fix the CSS grid. If the scroll feels janky, add snapping physics. Make it pixel-perfect."

---

## 📦 How to Run

Since this is a standard React environment:

1.  `npm install`
2.  `npm start`

*Note: GSAP is loaded via CDN in `index.html` to ensure immediate access to all plugins without complex build configuration for this template.*
