# Project Instructions: Portfolio Website

## Architectural Identity
- **Style:** High-End Editorial / Liquid Glass.
- **Vibe:** "Surgical Precision meets Creative Intuition."
- **Stack:** React (TS), Tailwind CSS, Framer Motion, StringTune.

## Engineering Standards
- **Component Paths:** All UI primitives live in `@/components/ui`.
- **Package Manager:** Always use **bun** for installations.

## Design & Motion Standards
- **Typography Hierarchy:**
    - `font-caslon` (Libre Caslon Text): Premium display headings (H1-H3), Navbar Logo.
    - `font-sans` (Plus Jakarta Sans): Technical body text, descriptions.
    - `font-hanken` (Hanken Grotesk): UI Pills, small caps labels, buttons.
- **Animation Easing:** Prefer "Vanguard" easing: `cubic-bezier(0.32, 0.72, 0, 1)`.
- **Micro-interactions:** Interactive elements should use "Magnetic" behavior on desktop (`hover: hover`).
- **Performance First:** 
    - Disable expensive CSS filters (like `blur`) and the `string-tune` engine on touch devices.
    - Use `will-change` hints on elements with scroll-triggered transforms.
