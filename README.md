# Nova Studio - Enterprise Brutalist Landing Page Template

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-6.0-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-cyan)
![Performance](https://img.shields.io/badge/Lighthouse-96%2F100-green)

A **"God Tier"** creative studio portfolio template designed with an **Anti-Design / Neo-Brutalist** aesthetic. This project prioritizes bold typography, kinetic motion, and raw technical interactions over traditional web polish, while maintaining enterprise-grade performance and code quality.

<img width="1847" height="905" alt="Nova Studio Preview" src="https://github.com/user-attachments/assets/ea6a82e0-a0a4-424d-9c96-4cb7418878e6" />

---

## 🚀 Enterprise Architecture

This is not just a pretty face. The codebase is engineered for scale, performance, and maintainability.

*   **⚡️ Lightning Fast:** Achieves a **96/100 Performance Score** on Lighthouse.
*   **🧩 Lazy Loading:** Below-the-fold components (`ProjectGrid`, `Team`, `ProcessTimeline`) are lazy-loaded using `React.lazy` and `Suspense` to minimize initial bundle size.
*   **📦 Optimized Build:** `vite.config.ts` is configured with manual chunk splitting to separate vendor libraries (`react`, `gsap`) for better caching.
*   **🛡️ Type Safety:** Fully typed with TypeScript. Shared types are centralized in `src/types`.
*   **🪝 Custom Hooks:** Reusable `useGsap` hook for memory-safe animation management.

---

## 🛠️ Tech Stack

*   **Framework:** React 19
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS v4 (configured for Brutalist design tokens)
*   **Animation:** GSAP (GreenSock Animation Platform)
    *   `ScrollTrigger`: Pinned sections and scroll-driven parallax.
    *   `TextPlugin`: Kinetic text decoding and scrambling.
*   **Language:** TypeScript

---

## 📂 Project Structure

```bash
/src
├── components/         # UI Components
│   ├── Hero.tsx        # Kinetic text explosion + Ghost effects
│   ├── ProcessTimeline.tsx # Horizontal scroll system with snap physics
│   ├── ProjectGrid.tsx # Brutalist directory-style showcase
│   └── ...
├── hooks/              # Custom React Hooks
│   └── useGsap.ts      # Safe GSAP context management
├── types/              # Shared TypeScript definitions
│   └── index.ts        # Interfaces for data models
├── App.tsx             # Main layout & Lazy load configuration
└── index.css           # Global styles & Tailwind directives
```

---

## 🎨 Design Philosophy: "System_Breaker"

The design language moves away from the "Clean SaaS" look into a high-energy, confident, and polarizing aesthetic.

1.  **Kinetic Typography:** Text is the main visual element. It explodes, drifts, blurs, and decodes.
2.  **Industrial HUD:** UI mimics technical dashboards (progress bars, memory usage stats) for an "under the hood" feel.
3.  **Horizontal Friction:** The `ProcessTimeline` breaks vertical scrolling, forcing engagement.
4.  **Raw Materials:** Pure hex codes (`#CCFF00` Acid Green) and unstyled HTML elements used intentionally.

---

## 📦 Getting Started

### Prerequisites
*   Node.js >= 18.0.0
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/nova-studio/landing-page.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Build for production:
    ```bash
    npm run build
    ```

---

## 🔧 Customization Guide

### Colors & Fonts
Edit `tailwind.config.js` to update the design tokens:

```javascript
theme: {
  extend: {
    colors: {
      'brutal-bg': '#050505',
      'brutal-green': '#CCFF00', // Change your primary accent here
    },
    fontFamily: {
      display: ['Syne', 'sans-serif'],
      mono: ['Space Mono', 'monospace'],
    }
  }
}
```

### Animations
Animations are managed via the `useGsap` hook in each component. Tweak `duration`, `ease`, and `stagger` values in `src/components/*.tsx` to adjust the feel.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Built by [Nova Studio](https://nova-studio.demo).*
