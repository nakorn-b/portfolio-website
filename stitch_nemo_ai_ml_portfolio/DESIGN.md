---
name: Parchment & Cinnabar
colors:
  surface: '#fff8f2'
  surface-dim: '#e4d9c5'
  surface-bright: '#fff8f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fef2de'
  surface-container: '#f9ecd8'
  surface-container-high: '#f3e7d3'
  surface-container-highest: '#ede1cd'
  on-surface: '#201b0f'
  on-surface-variant: '#5b403c'
  inverse-surface: '#363022'
  inverse-on-surface: '#fcefdb'
  outline: '#8f706a'
  outline-variant: '#e4beb7'
  surface-tint: '#b72210'
  primary: '#b41f0e'
  on-primary: '#ffffff'
  primary-container: '#d83a25'
  on-primary-container: '#fffdff'
  inverse-primary: '#ffb4a7'
  secondary: '#8e4e14'
  on-secondary: '#ffffff'
  secondary-container: '#ffab69'
  on-secondary-container: '#783d01'
  tertiary: '#605b57'
  on-tertiary: '#ffffff'
  tertiary-container: '#797470'
  on-tertiary-container: '#fffcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a7'
  on-primary-fixed: '#400200'
  on-primary-fixed-variant: '#910a00'
  secondary-fixed: '#ffdcc4'
  secondary-fixed-dim: '#ffb780'
  on-secondary-fixed: '#2f1400'
  on-secondary-fixed-variant: '#6f3800'
  tertiary-fixed: '#e9e1dc'
  tertiary-fixed-dim: '#ccc5c0'
  on-tertiary-fixed: '#1e1b18'
  on-tertiary-fixed-variant: '#4a4642'
  background: '#fff8f2'
  on-background: '#201b0f'
  surface-variant: '#ede1cd'
typography:
  headline-xl:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
  body-md:
    fontFamily: Libre Caslon Text
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  max-width: 1200px
---

## Brand & Style

This design system is built for a premium, editorial experience that bridges the gap between traditional craftsmanship and modern digital precision. It is inspired by the textures of high-grade paper, the fluidity of ink-wash paintings, and the dramatic intensity of a setting sun.

The visual style is **Minimalist and Editorial**, prioritizing whitespace (or "parchment space") and high-contrast focal points. It targets a sophisticated audience that values slow consumption, intellectual depth, and artisanal quality. The emotional response should be one of calm focus, punctuated by moments of vibrant, energetic inspiration. 

The aesthetic avoids modern trends like glassmorphism or neomorphism in favor of a flat, "printed" feel that relies on meticulous typography and a disciplined color application to create depth.

## Colors

The palette transitions from sterile digital whites to a warm, organic **Parchment (#F1E5D1)** base, which serves as the primary background for all interfaces. 

- **Primary (Cinnabar):** A vibrant, sun-drenched red-orange used sparingly for high-impact actions, critical highlights, and brand moments.
- **Secondary (Sun Gold):** A warm accent used for secondary interactive elements or subtle warning states, echoing the glow of the reference image.
- **Ink Black (#1A1714):** A deep, warm charcoal used for primary text and structural borders. It provides a softer, more premium contrast than pure hex black.
- **Accents:** Occasional use of "Faded Wash" tones (low-opacity versions of the Ink color) for secondary content and metadata.

## Typography

This design system centers on **Libre Caslon Text** to establish an authoritative, literary tone. The serif is used for both headlines and body copy to maintain a singular, cohesive voice. 

To provide functional clarity and modern contrast, **Hanken Grotesk** is introduced exclusively for utility elements—labels, buttons, and navigation items. These are often rendered in all-caps with generous letter spacing to act as a clean counterpoint to the expressive serif. 

Scale is used aggressively; headlines should be significantly larger than body text to create a clear hierarchy and an editorial "hero" feel on every page.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop, centered within the viewport to mimic the margins of a printed book. 

- **Grid:** A 12-column system with wide 24px gutters. 
- **Margins:** Desktop margins are intentionally oversized (80px+) to push content into a readable central column, while mobile margins shrink to 20px for maximum screen utility.
- **Rhythm:** Vertical spacing is driven by the 8px base unit. Section-level spacing should be generous (80px or 120px) to prevent the parchment-colored background from feeling cluttered. 
- **Reflow:** On tablet and mobile, content stacks into a single column, but the oversized typography remains the primary driver of the layout's visual weight.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows. 

1.  **Base Layer:** The Parchment (#F1E5D1) background.
2.  **Surface Layer:** Elements like cards or modals use a slightly lighter "Bleached" parchment or a very thin (0.5px) Ink Black border.
3.  **No Shadows:** Avoid drop shadows. To separate overlapping elements (like a navigation bar), use a solid 1px Ink Black border or a subtle color shift in the background.
4.  **Inking:** Use the Cinnabar Red as a "top-level" layer. It should feel like it was stamped or painted onto the parchment, appearing flat but visually dominant.

## Shapes

The shape language is strictly **Sharp (0)**. 

All UI elements—including buttons, input fields, cards, and images—feature 90-degree corners. This reinforces the "cut paper" and "printed" aesthetic of the design system. The only exception to this rule is the occasional use of perfectly circular "Sun" elements for decorative icons or profile avatars, directly referencing the celestial motif in the reference imagery.

## Components

- **Buttons:** Primary buttons are solid Ink Black with Parchment text. Hover states trigger a transition to Cinnabar Red. All buttons are rectangular with sharp corners and Hanken Grotesk uppercase labels.
- **Input Fields:** To maintain the minimalist feel, input fields consist only of a 1px Ink Black bottom border. Labels float above in small-caps Hanken Grotesk.
- **Cards:** Cards are defined by 1px Ink Black outlines. They do not have background fills that differ from the main page background unless they need to be grouped, in which case a 5% opacity Ink Black tint is used.
- **Chips/Tags:** Small, sharp-edged boxes with a Cinnabar Red border and text, used for categorization or status.
- **Lists:** Separated by horizontal "Ink-line" rules (1px width, low-opacity Ink Black).
- **Hero Accents:** Large, circular decorative elements (The "Sun") can be used behind key headlines to create focal depth, rendered as a gradient from Cinnabar Red to Sun Gold.