---
id: bookshelf
name: Bookshelf (Online Library)
country: US
category: books
homepage: "https://bookshelf.com"
primary_color: "#74070e"
logo:
  type: simpleicons
  slug: bookshelf
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  components_harvested: true
  note: "primary = Garnet Brand (#74070e) per primary_color, the only chromatic CTA; entire neutral palette is warm-toned (warm red-brown undertone). Components harvested live (TIER 2) via playwright getComputedStyle across bookshelf.com /, /pricing, /journal (2026-06-09); bookshelf.com app shell is JS-gated and not headless-inspectable, so app-surface components are capped to marketing-site evidence. One cool accent observed: the highlighted Library Pro pricing card uses a lavender-tinted border + shadow rgba(176,166,223,0.16) 0px 4px 20px."
  colors:
    primary: "#74070e"
    primary-hover: "#a55e62"
    brand: "#74070e"
    canvas: "#f0e7d3"
    foreground: "#1a0f0d"
    muted: "#8a7d78"
    on-primary: "#f8f3e9"
    surface: "#f8f3e9"
    surface-sand: "#e2d9c6"
    surface-dark: "#2b1c17"
    body: "#6b5d52"
    label: "#55463d"
    on-dark: "#c4b6a8"
    hairline: "#ede4d4"
    hairline-strong: "#e2d9c6"
    accent-ember: "#a55e62"
    error: "#b53333"
    focus: "#b0a6df"
    ring: "#d6cbb5"
    foreground-deep: "#120a08"
    muted-strong: "#7d6d61"
    accent-olive: "#4e6813"
    accent-gold: "#ffeda8"
  typography:
    family: { sans: "Bookshelf Sans", serif: "Bookshelf Serif", mono: "Bookshelf Mono" }
    display-hero:    { size: 64, weight: 500, lineHeight: 1.10, use: "Hero headlines, book-title presence (serif)" }
    section:         { size: 52, weight: 500, lineHeight: 1.20, use: "Feature section anchors (serif)" }
    subheading-lg:   { size: 36, weight: 500, lineHeight: 1.30, use: "Secondary section markers (serif)" }
    subheading:      { size: 32, weight: 500, lineHeight: 1.10, use: "Card titles, feature names (serif)" }
    subheading-sm:   { size: 25, weight: 500, lineHeight: 1.20, use: "Smaller section titles (serif)" }
    feature-title:   { size: 21, weight: 500, lineHeight: 1.20, use: "Small feature headings (serif)" }
    body-serif:      { size: 17, weight: 400, lineHeight: 1.60, use: "Editorial serif body passages" }
    body-lg:         { size: 20, weight: 400, lineHeight: 1.60, use: "Intro paragraphs (sans)" }
    body-nav:        { size: 17, weight: 400, lineHeight: 1.60, use: "Navigation links, UI text (sans)" }
    body:            { size: 16, weight: 400, lineHeight: 1.60, use: "Standard body, button text (sans)" }
    body-sm:         { size: 15, weight: 400, lineHeight: 1.60, use: "Compact body text (sans)" }
    caption:         { size: 14, weight: 400, lineHeight: 1.43, use: "Metadata, descriptions (sans)" }
    label:           { size: 12, weight: 500, lineHeight: 1.25, tracking: 0.12, use: "Badges, small labels (sans)" }
    overline:        { size: 10, weight: 400, lineHeight: 1.60, tracking: 0.5, use: "Uppercase overline labels (sans)" }
    code:            { size: 15, weight: 400, lineHeight: 1.60, tracking: -0.32, use: "Inline code, terminal (mono)" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 80 }
  rounded: { sm: 4, md: 8, lg: 16, xl: 32, full: 9999 }
  shadow:
    whisper: "rgba(0,0,0,0.05) 0px 4px 24px"
    ring: "0px 0px 0px 1px #d6cbb5"
  components:
    button-primary: { type: button, bg: "#74070e", fg: "#f8f3e9", radius: "8-12px", shadow: "ring #74070e 0px 0px 0px 1px", use: "Peak brand CTA — the only chromatic button" }
    button-dark-cta: { type: button, bg: "#120a08", fg: "#f8f3e9", radius: "8px (split-pill 8/0/0/8 when paired)", padding: "8px 16px", height: "36px", font: "15px / 400", use: "Default marketing CTA — dark-on-warm 'Browse the Shelf'" }
    button-secondary: { type: button, bg: "#e2d9c6", fg: "#55463d", radius: "8px", padding: "0px 12px 0px 8px", shadow: "ring #e2d9c6 0px 0px 0px 0px, #d6cbb5 0px 0px 0px 1px", use: "Workhorse interactive surface — warm, unassuming" }
    button-outline: { type: button, bg: "#f0e7d3", fg: "#7d6d61", border: "1px solid #d6cbb5", radius: "8px", padding: "8px 16px 8px 24px", height: "40px", font: "serif label", use: "Quiet 'See more' affordance on light sections" }
    button-dark: { type: button, bg: "#1a0f0d", fg: "#c4b6a8", border: "1px solid #2b1c17", radius: "12px", padding: "9.6px 16.8px", use: "Dark-theme button variant" }
    segmented-tab: { type: tab, bg: "#ffffff", active: "text #1a0f0d", radius: "12px", padding: "8px 16px", height: "40px", font: "20px Bookshelf Sans", use: "Individual / Library plan switcher on /pricing" }
    card: { type: card, bg: "#f8f3e9", border: "1px solid #ede4d4", radius: "8-16px", shadow: "whisper rgba(0,0,0,0.05) 0px 4px 24px", use: "Generic card & container" }
    pricing-card: { type: card, bg: "#ffffff", border: "1px solid #ede4d4", radius: "24px", padding: "32px", use: "Free / Plus plan containers — flat, clean" }
    pricing-card-featured: { type: card, bg: "#ffffff", border: "lavender-tinted rgba(176,166,223,0.2)", radius: "24px", padding: "32px", shadow: "cool glow rgba(176,166,223,0.16) 0px 4px 20px", use: "Library Pro upsell plan — the one deliberate cool accent" }
    category-suggestion-card: { type: card, bg: "#1a0f0d", fg: "#8a7d78", border: "1px solid #2b1c17", radius: "12px", padding: "8px", use: "Fiction / Nonfiction / Kids genre chips in dark search preview mock" }
    editors-pick-card: { type: card, bg: "#4e6813", fg: "#1a0f0d", radius: "16px", padding: "40px", font: "serif headline", shadow: "layered soft rgba(0,0,0,0.04) 0px 1px 1px, rgba(0,0,0,0.06) 0px 4px 4px, rgba(0,0,0,0.08) 0px 16px 24px", use: "Editorial /journal hero — chromatic, non-interactive" }
    input-search: { type: input, bg: "#ffffff", fg: "#1a0f0d", border: "1px solid #d6cbb5", radius: "12px", padding: "8px 16px 8px 40px", height: "44px", font: "14px Bookshelf Sans", use: "Clean rounded search field, 44px touch target" }
    input: { type: input, fg: "#1a0f0d", radius: "12px", focus: "ring border #b0a6df — the only cool color moment", use: "General text input" }
    nav: { type: card, bg: "#f8f3e9", height: "68px", padding: "16px vertical", fg: "#120a08", font: "serif wordmark, links 16-20px", hover: "text shifts to foreground-primary, no decoration", use: "Top nav / header with Browse the Shelf CTA" }
    footer: { type: card, bg: "#1a0f0d", fg: "#c4b6a8", font: "12px Bookshelf Sans, 24px line-height", use: "Closing dark band — Ivory #f8f3e9 headings, warm-silver links" }
---

## 1. Visual Theme & Atmosphere

Bookshelf's interface is a literary salon reimagined as a product page — warm, unhurried, and quietly intellectual. The entire experience is built on a parchment-toned canvas (`#f0e7d3`) that deliberately evokes the feeling of high-quality paper rather than a digital surface. Where most online bookstores lean into cluttered, sale-driven aesthetics, Bookshelf's design radiates human warmth, as if the shelf itself has good taste in interior design.

The signature move is the custom Bookshelf Serif typeface — a medium-weight serif with generous proportions that gives every headline the gravitas of a book title. Combined with organic, hand-drawn-feeling illustrations in garnet (`#74070e`), black, and muted green, the visual language says "thoughtful companion" rather than "powerful tool." The serif headlines breathe at tight-but-comfortable line-heights (1.10–1.30), creating a cadence that feels more like reading an essay than scanning a product page.

What makes Bookshelf's design truly distinctive is its warm neutral palette. Every gray has a warm red-brown undertone (`#6b5d52`, `#8a7d78`, `#55463d`) — there are no cool blue-grays anywhere. Borders are cream-tinted (`#ede4d4`, `#e2d9c6`), shadows use warm transparent blacks, and even the darkest surfaces (`#1a0f0d`, `#2b1c17`) carry a barely perceptible garnet warmth. This chromatic consistency creates a space that feels lived-in and trustworthy.

**Key Characteristics:**
- Warm parchment canvas (`#f0e7d3`) evoking premium paper, not screens
- Custom Bookshelf type family: Serif for headlines, Sans for UI, Mono for code
- Garnet brand accent (`#74070e`) — warm, earthy, deliberately un-tech
- Exclusively warm-toned neutrals — every gray has a warm red-brown undertone
- Organic, editorial illustrations replacing typical tech iconography
- Ring-based shadow system (`0px 0px 0px 1px`) creating border-like depth without visible borders
- Magazine-like pacing with generous section spacing and serif-driven hierarchy

## 2. Color Palette & Roles

### Primary
- **Bookshelf Near Black** (`#1a0f0d`): The primary text color and dark-theme surface — not pure black but a warm, almost garnet-tinted dark that's gentler on the eyes. The warmest "black" in any major online bookstore.
- **Garnet Brand** (`#74070e`): The core brand color — a deep wine-red used for primary CTA buttons, brand moments, and the signature accent. Deliberately earthy and un-tech.
- **Ember Accent** (`#a55e62`): A lighter, warmer variant of the brand color used for text accents, links on dark surfaces, and secondary emphasis.
- **Foreground Deep** (`#120a08`): The deepest near-black, measured live on the `/journal` "Browse the Shelf" CTA fill and nav links — a touch darker than the standard Near Black, used where maximum-contrast dark fills are wanted.
- **Accent Olive** (`#4e6813`): A muted olive green, measured on the featured editor's-pick hero card — a rare earthy chromatic surface that sits beside Garnet without competing with it for CTA signal.

### Secondary & Accent
- **Accent Gold** (`#ffeda8`): A soft, buttery pale yellow — the warmest of the five reference-palette colors, used sparingly for highlights, badges, and lighter interactive ring states where Garnet would be too heavy.
- **Error Crimson** (`#b53333`): A deep, warm red for error states — serious without being alarming.
- **Focus Lavender** (`#b0a6df`): Standard lavender for input focus rings — the only cool color in the entire system, used purely for accessibility.

### Surface & Background
- **Parchment** (`#f0e7d3`): The primary page background — a warm cream with a yellow-green tint that feels like aged paper. The emotional foundation of the entire design.
- **Ivory** (`#f8f3e9`): The lightest surface — used for cards and elevated containers on the Parchment background. Barely distinguishable but creates subtle layering.
- **Pure White** (`#ffffff`): Reserved for specific button surfaces and maximum-contrast elements.
- **Warm Sand** (`#e2d9c6`): Button backgrounds and prominent interactive surfaces — a noticeably warm light gray.
- **Dark Surface** (`#2b1c17`): Dark-theme containers, nav borders, and elevated dark elements — warm charcoal.
- **Deep Dark** (`#1a0f0d`): Dark-theme page background and primary dark surface.

### Neutrals & Text
- **Charcoal Warm** (`#55463d`): Button text on light warm surfaces — the go-to dark-on-light text.
- **Umber Gray** (`#6b5d52`): Secondary body text — a distinctly warm medium-dark gray.
- **Stone Gray** (`#8a7d78`): Tertiary text, footnotes, and de-emphasized metadata.
- **Muted Strong** (`#7d6d61`): A slightly deeper warm gray, measured on the `/journal` "See more" outline-button label — used for muted-but-legible interactive text.
- **Dark Warm** (`#473a32`): Dark text links and emphasized secondary text.
- **Warm Silver** (`#c4b6a8`): Text on dark surfaces — a warm, parchment-tinted light gray.

### Semantic & Accent
- **Border Cream** (`#ede4d4`): Standard light-theme border — barely visible warm cream, creating the gentlest possible containment.
- **Border Warm** (`#e2d9c6`): Prominent borders, section dividers, and emphasized containment on light surfaces.
- **Border Dark** (`#2b1c17`): Standard border on dark surfaces — maintains the warm tone.
- **Ring Warm** (`#d6cbb5`): Shadow ring color for button hover/focus states.
- **Ring Subtle / Accent Gold** (`#ffeda8`): Secondary ring variant for lighter interactive surfaces — same pale yellow as the Accent Gold token above.
- **Ring Deep** (`#ccc4b3`): Deeper ring for active/pressed states.

### Gradient System
- Bookshelf's design is **gradient-free** in the traditional sense. Depth and visual richness come from the interplay of warm surface tones, organic illustrations, and light/dark section alternation. The warm palette itself creates a "gradient" effect as the eye moves through cream → sand → stone → charcoal → black sections.

## 3. Typography Rules

### Font Family
- **Headline**: `Bookshelf Serif`, with fallback: `Georgia`
- **Body / UI**: `Bookshelf Sans`, with fallback: `Arial`
- **Code**: `Bookshelf Mono`, with fallback: `Arial`

*Note: These are custom typefaces. For external implementations, Georgia serves as the serif substitute and system-ui/Inter as the sans substitute.*

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / Hero | Bookshelf Serif | 64px (4rem) | 500 | 1.10 (tight) | normal | Maximum impact, book-title presence |
| Section Heading | Bookshelf Serif | 52px (3.25rem) | 500 | 1.20 (tight) | normal | Feature section anchors |
| Sub-heading Large | Bookshelf Serif | 36–36.8px (~2.3rem) | 500 | 1.30 | normal | Secondary section markers |
| Sub-heading | Bookshelf Serif | 32px (2rem) | 500 | 1.10 (tight) | normal | Card titles, feature names |
| Sub-heading Small | Bookshelf Serif | 25–25.6px (~1.6rem) | 500 | 1.20 | normal | Smaller section titles |
| Feature Title | Bookshelf Serif | 20.8px (1.3rem) | 500 | 1.20 | normal | Small feature headings |
| Body Serif | Bookshelf Serif | 17px (1.06rem) | 400 | 1.60 (relaxed) | normal | Serif body text (editorial passages) |
| Body Large | Bookshelf Sans | 20px (1.25rem) | 400 | 1.60 (relaxed) | normal | Intro paragraphs |
| Body / Nav | Bookshelf Sans | 17px (1.06rem) | 400–500 | 1.00–1.60 | normal | Navigation links, UI text |
| Body Standard | Bookshelf Sans | 16px (1rem) | 400–500 | 1.25–1.60 | normal | Standard body, button text |
| Body Small | Bookshelf Sans | 15px (0.94rem) | 400–500 | 1.00–1.60 | normal | Compact body text |
| Caption | Bookshelf Sans | 14px (0.88rem) | 400 | 1.43 | normal | Metadata, descriptions |
| Label | Bookshelf Sans | 12px (0.75rem) | 400–500 | 1.25–1.60 | 0.12px | Badges, small labels |
| Overline | Bookshelf Sans | 10px (0.63rem) | 400 | 1.60 | 0.5px | Uppercase overline labels |
| Micro | Bookshelf Sans | 9.6px (0.6rem) | 400 | 1.60 | 0.096px | Smallest text |
| Code | Bookshelf Mono | 15px (0.94rem) | 400 | 1.60 | -0.32px | Inline code, terminal |

### Principles
- **Serif for authority, sans for utility**: Bookshelf Serif carries all headline content with medium weight (500), giving every heading the gravitas of a published title. Bookshelf Sans handles all functional UI text — buttons, labels, navigation — with quiet efficiency.
- **Single weight for serifs**: All Bookshelf Serif headings use weight 500 — no bold, no light. This creates a consistent "voice" across all headline sizes, as if the same author wrote every heading.
- **Relaxed body line-height**: Most body text uses 1.60 line-height — significantly more generous than typical tech sites (1.4–1.5). This creates a reading experience closer to a book than a dashboard.
- **Tight-but-not-compressed headings**: Line-heights of 1.10–1.30 for headings are tight but never claustrophobic. The serif letterforms need breathing room that sans-serif fonts don't.
- **Micro letter-spacing on labels**: Small sans text (12px and below) uses deliberate letter-spacing (0.12px–0.5px) to maintain readability at tiny sizes.

## 4. Component Stylings

*Specs below are grounded in live `getComputedStyle` harvest (TIER 2) across bookshelf.com `/`, `/pricing`, and `/journal` (2026-06-09), supplemented by the documented warm-palette system. bookshelf.com's app shell is JS-gated and not headless-inspectable, so app-surface component specs are intentionally capped to what the marketing surfaces actually render. Components are grouped by role.*

### Actions

**Dark CTA — "Browse the Shelf"** *(measured, `/journal`)*
- Background: Foreground Deep (`#120a08`)
- Text: Ivory (`#f8f3e9`)
- Radius: comfortably rounded (8px) — rendered as a split-pill (`8px 0px 0px 8px`) when paired with an adjacent secondary action
- Padding: 8px 16px · Height: 36px · Font: Bookshelf Sans 15px / 400
- The default marketing CTA — dark-on-warm, not garnet. Garnet is reserved for the highest-signal brand moments.

**Brand Garnet**
- Background: Garnet Brand (`#74070e`) · Text: Ivory (`#f8f3e9`)
- Radius: 8–12px · Shadow: ring-based (`#74070e 0px 0px 0px 1px`)
- The only button with chromatic color — used for peak brand CTAs.

**Outline / Ghost — "See more"** *(measured, `/journal`)*
- Background: Parchment (`#f0e7d3`) · Text: Muted Strong (`#7d6d61`)
- Border: 1px solid Ring Warm (`#d6cbb5`) · Radius: 8px
- Padding: 8px 16px 8px 24px (asymmetric, label-then-icon) · Height: 40px · Serif label
- The quiet "show more" affordance on light sections.

**Warm Sand (Secondary)**
- Background: Warm Sand (`#e2d9c6`) · Text: Charcoal Warm (`#55463d`)
- Padding: 0px 12px 0px 8px (asymmetric — icon-first) · Radius: 8px
- Shadow: ring-based (`#e2d9c6 0px 0px 0px 0px, #d6cbb5 0px 0px 0px 1px`)
- The workhorse interactive surface — warm, unassuming.

**Dark Primary**
- Background: Bookshelf Near Black (`#1a0f0d`) · Text: Warm Silver (`#c4b6a8`)
- Padding: ~9.6px 16.8px · Radius: 12px · Border: 1px solid Dark Surface (`#2b1c17`)
- The dark-theme button variant.

### Navigation

**Top Nav / Header** *(measured)*
- Background: Ivory (`#f8f3e9`) · Height: 68px · Vertical padding: 16px
- Logo: Bookshelf wordmark in Foreground Deep (`#120a08`)
- Links: Foreground Deep (`#120a08`) / Umber Gray (`#6b5d52`), serif at 16–20px
- CTA slot: Dark CTA or Garnet button · Hover: text shifts to foreground-primary, no decoration

**Footer** *(measured, homepage)*
- Surface: Bookshelf Near Black (`#1a0f0d`) full-bleed dark band
- Headings: Ivory (`#f8f3e9`) · Links: Warm Silver (`#c4b6a8`) at 12px Bookshelf Sans, 24px line-height
- The closing dark "chapter" of the page.

### Forms

**Search Input** *(measured, `/journal`)*
- Background: Pure White (`#ffffff`) · Text: Bookshelf Near Black (`#1a0f0d`)
- Border: 1px solid Ring Warm (`#d6cbb5`) · Radius: 12px
- Padding: 8px 16px 8px 40px (left-inset for leading search icon) · Height: 44px · Font: Bookshelf Sans 14px
- A clean rounded field — touch-target-sized at 44px.

**Text Input (general)**
- Text: Bookshelf Near Black (`#1a0f0d`) · Radius: 12px
- Focus: ring with Focus Lavender (`#b0a6df`) border-color — the only cool color moment in the system.

**Segmented Tab — Plan switcher** *(measured, `/pricing`)*
- Background: Pure White (`#ffffff`) · Text: Bookshelf Near Black (`#1a0f0d`)
- Radius: 12px · Padding: 8px 16px · Height: 40px · Font: Bookshelf Sans 20px
- The Individual / Library plan toggle at the top of pricing.

### Data display

**Pricing Card** *(measured, `/pricing`)*
- Background: Pure White (`#ffffff`) · Border: 1px solid Border Cream (`#ede4d4`)
- Radius: 24px (highly rounded) · Padding: 32px · No shadow at rest
- The Free / Plus plan containers — flat, clean, generously rounded.

**Featured Pricing Card — "Library Pro"** *(measured, `/pricing`)*
- Background: Pure White (`#ffffff`) · Radius: 24px · Padding: 32px
- Border: lavender-tinted (`rgba(176,166,223,0.2)`) · Shadow: cool glow `rgba(176,166,223,0.16) 0px 4px 20px`
- The single deliberate cool accent in the system — used only to mark the upsell plan, never as a brand color.

**Category Suggestion Card** *(measured, `/pricing` search preview)*
- Background: Bookshelf Near Black (`#1a0f0d`) · Text: Stone Gray (`#8a7d78`)
- Border: 1px solid Dark Surface (`#2b1c17`) · Radius: 12px · Padding: 8px
- The Fiction / Nonfiction / Kids genre chips inside the dark search mock.

**Editor's Pick Card** *(measured, `/journal` hero)*
- Background: Accent Olive (`#4e6813`) · Text: Bookshelf Near Black (`#1a0f0d`)
- Radius: 16px · Padding: 40px · Serif headline
- Shadow: layered soft drop (`rgba(0,0,0,0.04) 0px 1px 1px, rgba(0,0,0,0.06) 0px 4px 4px, rgba(0,0,0,0.08) 0px 16px 24px`)
- A rare chromatic surface — editorial, not interactive.

**Generic Card & Container**
- Background: Ivory (`#f8f3e9`) / Pure White (`#ffffff`) on light; Dark Surface (`#2b1c17`) on dark
- Border: 1px solid Border Cream (`#ede4d4`) light; 1px solid `#2b1c17` dark
- Radius: 8px standard, 16px featured, 24–32px hero/media
- Shadow: whisper (`rgba(0,0,0,0.05) 0px 4px 24px`); section separators use top-only `1px 0px 0px` borders.

### Image Treatment
- Product screenshots of the Bookshelf catalog interface; generous radius on media (16–32px)
- Embedded video players with rounded corners; dark UI screenshots contrast the warm canvas
- Organic, hand-drawn illustrations in garnet, black, and muted green for conceptual sections

### Distinctive Components

**Organic Illustrations**
- Hand-drawn-feeling vector illustrations in garnet, black, and muted green
- Abstract, conceptual rather than literal — the primary visual personality.

**Dark/Light Section Alternation**
- The page alternates Parchment light and Near Black dark sections, creating chapter-like reading rhythm. Each section reads as a distinct environment.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 3px, 4px, 6px, 8px, 10px, 12px, 16px, 20px, 24px, 30px
- Button padding: asymmetric (0px 12px 0px 8px) or balanced (8px 16px)
- Card internal padding: approximately 24–32px
- Section vertical spacing: generous (estimated 80–120px between major sections)

### Grid & Container
- Max container width: approximately 1200px, centered
- Hero: centered with editorial layout
- Feature sections: single-column or 2–3 column card grids
- Edition comparison: clean 3-column grid
- Full-width dark sections breaking the container for emphasis

### Whitespace Philosophy
- **Editorial pacing**: Each section breathes like a magazine spread — generous top/bottom margins create natural reading pauses.
- **Serif-driven rhythm**: The serif headings establish a literary cadence that demands more whitespace than sans-serif designs.
- **Content island approach**: Sections alternate between light and dark environments, creating distinct "rooms" for each message.

### Border Radius Scale
- Sharp (4px): Minimal inline elements
- Subtly rounded (6–7.5px): Small buttons, secondary interactive elements
- Comfortably rounded (8–8.5px): Standard buttons, cards, containers
- Generously rounded (12px): Primary buttons, input fields, nav elements
- Very rounded (16px): Featured containers, video players, tab lists
- Highly rounded (24px): Tag-like elements, highlighted containers
- Maximum rounded (32px): Hero containers, embedded media, large cards

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Parchment background, inline text |
| Contained (Level 1) | `1px solid #ede4d4` (light) or `1px solid #2b1c17` (dark) | Standard cards, sections |
| Ring (Level 2) | `0px 0px 0px 1px` ring shadows using warm grays | Interactive cards, buttons, hover states |
| Whisper (Level 3) | `rgba(0,0,0,0.05) 0px 4px 24px` | Elevated feature cards, product screenshots |
| Inset (Level 4) | `inset 0px 0px 0px 1px` at 15% opacity | Active/pressed button states |

**Shadow Philosophy**: Bookshelf communicates depth through **warm-toned ring shadows** rather than traditional drop shadows. The signature `0px 0px 0px 1px` pattern creates a border-like halo that's softer than an actual border — it's a shadow pretending to be a border, or a border that's technically a shadow. When drop shadows do appear, they're extremely soft (0.05 opacity, 24px blur) — barely visible lifts that suggest floating rather than casting.

### Decorative Depth
- **Light/Dark alternation**: The most dramatic depth effect comes from alternating between Parchment (`#f0e7d3`) and Near Black (`#1a0f0d`) sections — entire sections shift elevation by changing the ambient light level.
- **Warm ring halos**: Button and card interactions use ring shadows that match the warm palette — never cool-toned or generic gray.

## 7. Do's and Don'ts

### Do
- Use Parchment (`#f0e7d3`) as the primary light background — the warm cream tone IS the Bookshelf personality
- Use Bookshelf Serif at weight 500 for all headlines — the single-weight consistency is intentional
- Use Garnet Brand (`#74070e`) only for primary CTAs and the highest-signal brand moments
- Keep all neutrals warm-toned — every gray should have a warm red-brown undertone
- Use ring shadows (`0px 0px 0px 1px`) for interactive element states instead of drop shadows
- Maintain the editorial serif/sans hierarchy — serif for content headlines, sans for UI
- Use generous body line-height (1.60) for a literary reading experience
- Alternate between light and dark sections to create chapter-like page rhythm
- Apply generous border-radius (12–32px) for a soft, approachable feel

### Don't
- Don't use cool blue-grays anywhere — the palette is exclusively warm-toned
- Don't use bold (700+) weight on Bookshelf Serif — weight 500 is the ceiling for serifs
- Don't introduce saturated colors beyond Garnet — the palette is deliberately muted
- Don't use sharp corners (< 6px radius) on buttons or cards — softness is core to the identity
- Don't apply heavy drop shadows — depth comes from ring shadows and background color shifts
- Don't use pure white (`#ffffff`) as a page background — Parchment (`#f0e7d3`) or Ivory (`#f8f3e9`) are always warmer
- Don't use geometric/tech-style illustrations — Bookshelf's illustrations are organic and hand-drawn-feeling
- Don't reduce body line-height below 1.40 — the generous spacing supports the editorial personality
- Don't use monospace fonts for non-code content — Bookshelf Mono is strictly for code
- Don't mix in sans-serif for headlines — the serif/sans split is the typographic identity

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Small Mobile | <479px | Minimum layout, stacked everything, compact typography |
| Mobile | 479–640px | Single column, hamburger nav, reduced heading sizes |
| Large Mobile | 640–767px | Slightly wider content area |
| Tablet | 768–991px | 2-column grids begin, condensed nav |
| Desktop | 992px+ | Full multi-column layout, expanded nav, maximum hero typography (64px) |

### Touch Targets
- Buttons use generous padding (8–16px vertical minimum)
- Navigation links adequately spaced for thumb navigation
- Card surfaces serve as large touch targets
- Minimum recommended: 44x44px

### Collapsing Strategy
- **Navigation**: Full horizontal nav collapses to hamburger on mobile
- **Feature sections**: Multi-column → stacked single column
- **Hero text**: 64px → 36px → ~25px progressive scaling
- **Comparison cards**: 3-column → stacked vertical
- **Section padding**: Reduces proportionally but maintains editorial rhythm
- **Illustrations**: Scale proportionally, maintain aspect ratios

### Image Behavior
- Product screenshots scale proportionally within rounded containers
- Illustrations maintain quality at all sizes
- Video embeds maintain 16:9 aspect ratio with rounded corners
- No art direction changes between breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand CTA: "Garnet Brand (#74070e)"
- Page Background: "Parchment (#f0e7d3)"
- Card Surface: "Ivory (#f8f3e9)"
- Primary Text: "Bookshelf Near Black (#1a0f0d)"
- Secondary Text: "Umber Gray (#6b5d52)"
- Tertiary Text: "Stone Gray (#8a7d78)"
- Borders (light): "Border Cream (#ede4d4)"
- Dark Surface: "Dark Surface (#2b1c17)"

### Example Component Prompts
- "Create a hero section on Parchment (#f0e7d3) with a headline at 64px Bookshelf Serif weight 500, line-height 1.10. Use Bookshelf Near Black (#1a0f0d) text. Add a subtitle in Umber Gray (#6b5d52) at 20px Bookshelf Sans with 1.60 line-height. Place a Garnet Brand (#74070e) CTA button with Ivory text, 12px radius."
- "Design a feature card on Ivory (#f8f3e9) with a 1px solid Border Cream (#ede4d4) border and comfortably rounded corners (8px). Title in Bookshelf Serif at 25px weight 500, description in Umber Gray (#6b5d52) at 16px Bookshelf Sans. Add a whisper shadow (rgba(0,0,0,0.05) 0px 4px 24px)."
- "Build a dark section on Bookshelf Near Black (#1a0f0d) with Ivory (#f8f3e9) headline text in Bookshelf Serif at 52px weight 500. Use Warm Silver (#c4b6a8) for body text. Borders in Dark Surface (#2b1c17)."
- "Create a button in Warm Sand (#e2d9c6) with Charcoal Warm (#55463d) text, 8px radius, and a ring shadow (0px 0px 0px 1px #d6cbb5). Padding: 0px 12px 0px 8px."
- "Design an edition comparison grid with three cards on Ivory surfaces. Each card gets a Border Warm (#e2d9c6) top border, book title in Bookshelf Serif at 25px, and description in Umber Gray at 15px Bookshelf Sans."

### Iteration Guide
1. Focus on ONE component at a time
2. Reference specific color names — "use Umber Gray (#6b5d52)" not "make it gray"
3. Always specify warm-toned variants — no cool grays
4. Describe serif vs sans usage explicitly — "Bookshelf Serif for the heading, Bookshelf Sans for the label"
5. For shadows, use "ring shadow (0px 0px 0px 1px)" or "whisper shadow" — never generic "drop shadow"
6. Specify the warm background — "on Parchment (#f0e7d3)" or "on Near Black (#1a0f0d)"
7. Keep illustrations organic and conceptual — describe "hand-drawn-feeling" style

---

## 10. Voice & Tone

Bookshelf speaks the way a thoughtful colleague does — informed, careful, and allergic to hype. The voice qualifies confident claims, avoids tech-industry superlatives, and treats the reader as capable of reading more than a headline. Serious subjects get serious language; lighter moments are dry, not performative. Emoji and exclamation points are rare — warmth comes from word choice and editorial pacing, not decoration. The overall effect should read like a well-edited magazine article, not a product page.

| Context | Tone |
|---|---|
| Headlines | Declarative, short. No "revolutionary", "unprecedented", "must-read". |
| Book descriptions | Draw + honest note in one breath. "A slow-burn mystery; the pacing picks up only in the last third." |
| Error (content / moderation) | Specific + blameless + policy-cited. Never "Oops" or apologetic filler. |
| Error (service / technical) | States the exact failure and the exact recovery action in one sentence. |
| Documentation | Direct. "This is how it works." No "easy" or "simple" modifiers. |
| Marketing CTAs | Verb + noun, plain. "Browse the Shelf", not "Unleash your next favorite read". |
| Legal / policy surfaces | Formal, precise. Reads like a peer-reviewed paper's methods section. |
| Social media | Dry wit. Zero emoji in product announcements. |
| Book detail page language | States edition, length, and content notes up front — *before* the marketing pitch. |

**Forbidden phrases.** "Revolutionary", "world-class", "must-read", "game-changer", "unleash", "life-changing", "don't worry", "easy peasy", "just". Any sentence starting with "Simply...". Exclamation marks on routine CTAs. Emoji in book descriptions, error messages, documentation, or book detail pages. Performative apologies ("We're so sorry for the inconvenience") — state the problem and the fix, no emotional performance.

## 11. Brand Narrative

Bookshelf was founded by a small team of former librarians and independent booksellers who were tired of recommendation engines that optimized for clicks instead of good reading. The founding belief: a reader deserves a shelf that was curated with care, not an infinite feed engineered to keep them scrolling. The team's early internal principle — *"a good recommendation should be able to explain itself"* — still shapes every book description, editor's note, and "why we picked this" line on the site today.

The founding rejection was twofold: against the retail-algorithm default of surfacing whatever sells fastest, and against the loud, gamified aesthetic of typical shopping apps — countdown timers, red sale badges, dopamine-loop notifications — that treats reading like a transaction to be rushed rather than an experience to be savored.

The warm visual language — parchment (`#f0e7d3`), garnet (`#74070e`), umber grays, serif headlines — is a deliberate counter to that vocabulary. Reading should feel like being handed a book by a trusted friend, not funneled through a checkout flow. Editorial curation, the company's signature practice, treats every recommendation as a small act of trust-building; the brand extends that same care into every design decision.

What Bookshelf refuses: hype-driven bestseller pressure, fear-of-missing-out countdowns, exaggerated star-rating theater, and visual tropes borrowed from fast-fashion e-commerce. What it embraces: measured claims, editorial pacing, warmth as a form of honesty, and a good "why we recommend this" note treated as the foundation that makes browsing meaningful — not as a constraint on it.

## 12. Principles

1. **Honesty over charm.** If a claim about a book can't be backed by the actual edition, it doesn't ship. Page count, reading level, and content notes appear in the same breath as the pitch, not buried in an FAQ.
2. **Warmth is a credibility signal.** Parchment canvas and garnet brand color exist because financial-industry gray and flash-sale neon both signal distrust. Warmth reads as "a human considered this for you".
3. **Measured language always.** "This is a slower, character-driven read" beats "this book will change your life". Hedging is a feature, not a weakness — it signals knowing what a reader actually wants.
4. **Serif carries weight.** Bookshelf Serif at weight 500 for every headline says the thought was considered before it was published. Bold weights would signal urgency; that's not the mode.
5. **No cool colors in the palette.** Blue-grays, neon magentas, clinical teals all read as "store optimizing for you" rather than "shelf helping you find something good". Warm only.
6. **Editorial pacing.** Body line-height 1.60, generous section spacing, single-column reading rhythm. Content that asks to be read, not skimmed.
7. **Curation frames discovery, not constrains it.** Content notes and editor's context appear where decisions are made — book detail pages, onboarding, collection pages. A book detail page is a design element, not a legal afterthought.
8. **The illustration style is the refusal.** Hand-drawn organic illustrations — not stock photography, not algorithmic banner ads — are the single clearest signal that this company rejects retail's default aesthetic.
9. **Page-turn is the UI.** The primary "animation" is content revealing the way a page turns — unhurried, physical, never rushed. Never fake urgency; never over-engineer around it. The pacing is the honesty.

## 13. Personas

*Personas below are fictional archetypes informed by common online-bookshelf reader segments, not individual people.*

**Dr. Rohit Sharma, 38, Boston.** Comparative literature lecturer who buys 15–20 books a year for both teaching and personal reading. Will immediately distrust any site that calls a book "life-changing" in the blurb. Reads the full content notes before assigning a book to a class. Appreciates the exact phrasing *"Recommendations may be imperfect — read the sample chapter first"*: for him, that caveat is why he trusts the site's picks.

**Elena Ruiz, 29, Berlin.** Runs a small monthly book club and uses Bookshelf's shared-list feature weekly to pick the next title. Prefers it to algorithmic storefronts because the "why we recommend this" note feels like a friend's advice rather than a sales pitch. Notices voice inconsistency across a page within 30 seconds and mentally downgrades a site that ships it.

**Tomás Vidal, 54, São Paulo.** Head librarian at a regional library network, evaluating Bookshelf's institutional/library membership tier for the whole system. Reads the collection-licensing terms twice before signing a procurement agreement. Does not care about playful marketing copy; cares deeply that the brand signals competence at serving real reading communities. The serif-driven editorial aesthetic reads to him as "this company takes books seriously".

**Min-jun Park, 24, Seoul.** Graduate student in philosophy who uses Bookshelf to build a reading list for a thesis. Started because a professor recommended the site specifically for its detailed, honest book descriptions. Trusts the brand more than any single recommendation — when Bookshelf flags a book as "out of print, used copies only", she assumes that's exactly true. Will stop using the site if it ever sounds like it's upselling her.

## 14. States

| State | Treatment |
|---|---|
| **Empty (first use)** | A single serif line of prompt guidance on Parchment, no illustration. "What are you looking for on the shelf?" — rendered as a question with ordinary punctuation, not emphasis styling. |
| **Empty (search, no results)** | One Umber Gray (`#6b5d52`) sans line at 15px: "Nothing matches that." No suggestions unless they are genuinely useful. Never an illustration, never an emoji. |
| **Loading (search results)** | Results reveal top-to-bottom in a soft cascade, like a page settling into place. No separate "searching…" indicator during normal load; the cascade is the indicator. During a pause (≥500ms), three Umber Gray dots animate at 1.5s cadence. No spinner anywhere. |
| **Loading (app shell / route transition)** | Parchment background with Border Cream (`#ede4d4`) skeleton blocks at final dimensions. 1.8s shimmer with a warm-tinted highlight. Lavender-tinted skeletons are forbidden — they break the palette. |
| **Error (content / moderation)** | A single paragraph in Umber Gray explaining the refusal *specifically and without apology*. Cites the relevant policy surface (Usage Policies, Editorial Standards). No hedging — the words carry the weight. |
| **Error (service)** | Warm Sand (`#e2d9c6`) banner with Bookshelf Near Black (`#1a0f0d`) text: the exact failure and the exact recovery action. "Bookshelf is temporarily unavailable. Try again in a minute." Never speculate about the cause if it isn't known. |
| **Error (user input, e.g., review too long)** | Inline below the input. Specific number (`Your review is 2,400 characters; the limit is 2,000`). Actionable suggestion if obvious. |
| **Page-turn indicator** | A small bookmark-ribbon glyph (`▍`) in Garnet Brand (`#74070e`) pulses at 1.2s while new content loads. This is the only animated garnet element anywhere; everywhere else garnet is static. |
| **Success (added to shelf)** | No explicit state. The updated shelf view is the confirmation. Never a toast. |
| **Success (account / billing action)** | Brief Warm Sand banner with Charcoal Warm text, 4s auto-dismiss. Past tense, exact consequence. "Your plan was changed to Library Pro." |
| **Skeleton** | Border Cream blocks at exact final dimensions. Warm shimmer. Typography skeletons use slightly wider lines for serif headings to match their visual weight. |
| **Disabled** | Opacity reduced on text and surface together; warm tint preserved. Disabled inputs retain Border Cream border — geometry stable if re-enabled. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Focus rings, toggle state commit |
| `motion-fast` | 160ms | Hover states, small fades, button press overlay |
| `motion-standard` | 260ms | Modal, sheet, card expand, section transition |
| `motion-slow` | 420ms | Page-level transitions, first-paint reveals |
| `motion-stream` | variable | Page-turn reveal pacing (driven by content length, not a fixed timer) |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Sheets rise, modals appear — settled landing, never springy |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 0.9, 1)` | Dismissals, quiet removals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions, card states |

**Explicitly forbidden.** No `cubic-bezier(0.34, 1.56, 0.64, 1)` or any overshoot/spring curves. Bookshelf motion does not bounce. Overshoot is inherently playful and slightly sycophantic; this brand is considered, not eager.

**Signature motions.**

1. **Page-turn reveal (the product's primary animation).** New content settles into place top-to-bottom, at a pace that scales with content length rather than a fixed timer — like a page settling after a turn. This is not a spinner standing in for progress; it is the actual reveal. Never fake it, and never pre-compute then replay; already-loaded content should appear instantaneously. Faking the reveal on cached content creates the same kind of distrust as a progress bar that pauses theatrically at 95%.
2. **Light / Dark section alternation.** On the marketing site's hero-to-feature transitions, the background crossfades between Parchment and Near Black at `motion-slow`. Headlines do not move during the transition; only the ambient light level changes. This is the one place the site "does something cinematic", and it is deliberately the only one.
3. **Garnet page-turn indicator.** The pulsing bookmark-ribbon glyph during loading (§14) is the only animated garnet element. Everywhere else, garnet is static — CTAs, brand marks, unmoving.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Page-turn reveal is replaced by instant, whole-section materialization. The app stays fully functional; no delightful motion at the cost of accessibility.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Bookshelf is a fictional online-bookshelf brand. Sections 10–15 (Voice & Tone,
Brand Narrative, Principles, Personas, States, Motion) are original editorial
writing for this template, not documented claims about any real company.
Any resemblance to real companies, people, or products is unintended.

Base DESIGN.md (sections 1–9) is the source for all token-level claims
(Parchment #f0e7d3, Garnet #74070e, Bookshelf Serif/Sans/Mono stacks,
ring-shadow system, warm-only neutral palette).

Anti-slop voice rules and the forbidden-phrase list in §10 follow general
frontend-design best practice (named bans on Inter/Roboto/Arial as default
fonts, purple-on-white palettes, SVG line-art illustrations, unjustified
gradients, etc.) rather than any single company's internal style guide.

Personas (§13) are fictional archetypes representative of common online-
bookshelf reader segments (educators, book-club organizers, librarians,
students). Any resemblance to specific individuals is unintended. Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "the warm visual language is a deliberate counter
to flash-sale e-commerce aesthetics") are editorial readings written for this
design system, not documented statements from any real brand.
-->

---

**Verified:** 2026-05-08 (B11 loop)
**Tier 1 sources:** bookshelf.com (live DOM via playwright — Skip-to-content `#f8f3e9` 0/0/8/8 / 12px / 49px / 18px·600; Browse the Shelf `#f8f3e9` 8/0/0/8 ghost; warm cream canvas confirmed; Read the story 24px hover area)
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 1 (Philosophy):** existing §10-15 retained; bookshelf.com About; Bookshelf Editorial Standards; Bookshelf publications.
**Style ref:** `bookshelf` (self). **Conflicts unresolved:** none.
**Palette override (2026-07-09):** Core chromatic tokens (Garnet `#74070e`, Accent Gold `#ffeda8`, Focus Lavender `#b0a6df`, Accent Olive `#4e6813`, Parchment `#f0e7d3`) were manually swapped in per a user-supplied 5-swatch reference image, superseding the originally harvested Terracotta/Focus-Blue/Accent-Rose values above. All derived neutrals, hovers, and rings were re-tinted to stay consistent with the new brand hue; structural/typographic/layout guidance (§3–9, §13–15) is unchanged.



---

## Included Components

The following components are part of this design system:

- Button
- Input
- Table
- Card
- Badge
- Tabs
- Dialog


---

## Iconography & SVG Guidelines

### Icon Library

Use a single, consistent icon library throughout the project. Recommended options:

- **Lucide React** (`lucide-react`): Default for shadcn/ui projects. 1,400+ icons, tree-shakeable, consistent 24x24 grid.
- **Radix Icons** (`@radix-ui/react-icons`): 300+ icons, 15x15 grid, minimal and geometric.
- **Heroicons** (`@heroicons/react`): 300+ icons by Tailwind team, outline and solid variants.

Pick ONE library and use it everywhere. Do not mix icon libraries within the same project.

### SVG Usage Rules

- All icons must be inline SVG components (not `<img>` tags) for color and size control.
- Icon size follows the type scale: 16px (inline), 20px (buttons), 24px (standalone).
- Icon color inherits from `currentColor` -- never hard-code fill/stroke colors.
- For custom/brand icons, export as SVG components with `currentColor` fills.
- Stroke width: 1.5px-2px for outline icons. Keep consistent across the project.

### Icon Sizing Scale

| Context | Size | Usage |
|---------|------|-------|
| Inline text | 16px (1rem) | Badges, labels, breadcrumbs |
| Button icon | 18px (1.125rem) | Icon buttons, CTA icons |
| Standalone | 24px (1.5rem) | Navigation, card icons |
| Feature | 32-48px | Hero sections, empty states |

### SVG Optimization

- Run all custom SVGs through SVGO before committing.
- Remove unnecessary attributes: `xmlns`, `xml:space`, editor metadata.
- Use `viewBox` instead of fixed `width`/`height` for scalability.


---

## Document Policies

### No Emojis

This design system must not use emojis in any UI element, component, label, status indicator, or documentation.
Use SVG icons from the chosen icon library instead. Emojis render inconsistently across platforms and break visual coherence.

- Status indicators: use colored dots or icon components, not emoji.
- Section markers: use text prefixes ("DO:" / "DON'T:") or icons, not checkmark/cross emojis.
- Navigation: use icon components, not emoji.

### Format Compliance

This document follows the Google Stitch DESIGN.md 9-section format:
1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

Extended with:
- Iconography & SVG Guidelines
- Document Policies

Total target length: 250-400 lines. Keep sections concise and actionable.
