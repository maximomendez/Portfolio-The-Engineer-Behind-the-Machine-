# Design System — The Engineer Behind the Machine

> Reference for all visual decisions. Every component must derive from these tokens.
> Aesthetic direction: Tesla UI × F1 dashboard × futuristic HUD. Dark, precise, premium.

---

## 1. Color Palette

### Base (backgrounds & surfaces)

| Token | Hex | Usage |
|---|---|---|
| `bg-primary` | `#0B0B0B` | Page background, deepest layer |
| `bg-secondary` | `#151515` | Section backgrounds, elevated surfaces |
| `bg-card` | `#1A1A1A` | Cards, panels, modals |
| `metallic` | `#2A2A2A` | Borders, dividers, inactive elements |
| `metallic-light` | `#3A3A3A` | Hover borders, subtle separators |

### Text

| Token | Hex | Usage |
|---|---|---|
| `text-primary` | `#EDEDED` | Main body text, headings |
| `text-secondary` | `#A0A0A0` | Subtitles, descriptions, captions |
| `text-muted` | `#6B6B6B` | Placeholders, disabled states, metadata |

### Accents

| Token | Hex | Usage |
|---|---|---|
| `accent-red` | `#FF2D2D` | Primary CTAs, speed, energy, action, danger |
| `accent-red-dim` | `#CC1F1F` | Pressed/active state of red |
| `accent-blue` | `#00D4FF` | AI, data, technology, information, links |
| `accent-blue-dim` | `#0099CC` | Pressed/active state of blue |
| `accent-green` | `#3DFF8F` | System active, success, online status |
| `accent-green-dim` | `#28CC6A` | Pressed/active state of green |

### Glow overlays (use as box-shadow or drop-shadow)

| Token | Value | Usage |
|---|---|---|
| `glow-red` | `0 0 20px 2px rgba(255, 45, 45, 0.30)` | Red CTA hover, active indicators |
| `glow-red-intense` | `0 0 40px 4px rgba(255, 45, 45, 0.45)` | Focus ring on primary button |
| `glow-blue` | `0 0 20px 2px rgba(0, 212, 255, 0.30)` | AI section elements, data nodes |
| `glow-blue-intense` | `0 0 40px 4px rgba(0, 212, 255, 0.45)` | Active workflow nodes |
| `glow-green` | `0 0 16px 1px rgba(61, 255, 143, 0.30)` | System health indicator, success |

---

## 2. Typography

### Font Families

| Role | Family | Variable |
|---|---|---|
| Headings | Space Grotesk | `--font-space-grotesk` |
| Body / UI | Inter | `--font-inter` |
| Code / Terminal | System monospace | `font-mono` |

### Type Scale

| Name | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| `display` | 72px / 4.5rem | 1.05 | 700 | Hero headings only |
| `h1` | 56px / 3.5rem | 1.1 | 700 | Section hero titles |
| `h2` | 40px / 2.5rem | 1.15 | 600 | Section headings |
| `h3` | 28px / 1.75rem | 1.2 | 600 | Subsection headings, card titles |
| `h4` | 20px / 1.25rem | 1.3 | 600 | Labels, widget titles |
| `body-lg` | 18px / 1.125rem | 1.6 | 400 | Lead paragraphs |
| `body` | 16px / 1rem | 1.65 | 400 | Default body text |
| `body-sm` | 14px / 0.875rem | 1.6 | 400 | Captions, metadata, tags |
| `label` | 11px / 0.6875rem | 1.4 | 600 | ALL CAPS section labels, HUD tags |
| `mono` | 13px / 0.8125rem | 1.5 | 400 | Code, terminal inputs, tech badges |

### Rules

- Headings always use **Space Grotesk**.
- Body text always uses **Inter**.
- `label` style is always uppercase + letter-spacing: 0.12em.
- Hero text (`display`, `h1`) uses tight tracking: -0.02em.
- Never mix more than two font weights in a single component.

---

## 3. Spacing Scale

Base unit: **4px**. All spacing must be a multiple of 4.

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Icon gaps, tight internal padding |
| `space-2` | 8px | Between label and value, badge padding |
| `space-3` | 12px | Small card padding |
| `space-4` | 16px | Default component padding |
| `space-5` | 20px | Card padding |
| `space-6` | 24px | Section internal spacing |
| `space-8` | 32px | Between components |
| `space-10` | 40px | Large internal gaps |
| `space-12` | 48px | Between sections (mobile) |
| `space-16` | 64px | Section padding top/bottom (mobile) |
| `space-20` | 80px | Section padding top/bottom (desktop) |
| `space-24` | 96px | Hero section padding |
| `space-32` | 128px | Between major sections (desktop) |

---

## 4. Border & Radius

### Border colors

| Usage | Value |
|---|---|
| Default card border | `1px solid #2A2A2A` |
| Hover card border | `1px solid #3A3A3A` |
| Active / accent border | `1px solid #FF2D2D` (or blue/green by context) |
| Input default | `1px solid #2A2A2A` |
| Input focus | `1px solid #FF2D2D` |
| Divider / separator | `1px solid #1F1F1F` |

### Border radius

| Token | Value | Usage |
|---|---|---|
| `radius-none` | 0px | Sharp industrial elements, HUD panels |
| `radius-sm` | 2px | Badges, tags, small chips |
| `radius-md` | 4px | Cards, buttons, inputs |
| `radius-lg` | 8px | Large panels, modals |
| `radius-full` | 9999px | Pills, status dots |

> Default preference is **sharp (0–4px)**. This is a precision machine, not a consumer app.

---

## 5. Component Patterns

### Buttons

**Primary (red)**
- Background: `#FF2D2D`
- Text: `#EDEDED`, font-weight 600, uppercase, letter-spacing 0.08em
- Border: none
- Radius: 4px
- Padding: 12px 28px
- Hover: background `#CC1F1F` + `glow-red`
- Active: scale 0.97
- Focus: `glow-red-intense` outline

**Secondary (outline)**
- Background: transparent
- Text: `#EDEDED`
- Border: `1px solid #2A2A2A`
- Radius: 4px
- Padding: 12px 28px
- Hover: border-color `#FF2D2D`, text `#FF2D2D`
- Active: scale 0.97

**Ghost**
- Background: transparent
- Text: `#A0A0A0`
- Border: none
- Hover: text `#EDEDED`

### Cards (HudCard)

- Background: `#1A1A1A`
- Border: `1px solid #2A2A2A`
- Radius: 4px
- Padding: 20px 24px
- Hover: border-color `#3A3A3A`, subtle background lift to `#1E1E1E`
- Active accent variant: left border `3px solid [accent-color]`
- Never use drop shadows — use glow instead, sparingly

### Inputs / TerminalInput

- Background: `#0F0F0F`
- Border: `1px solid #2A2A2A`
- Text: `#EDEDED`, font `mono`, 13px
- Placeholder: `#6B6B6B`
- Focus: border `#FF2D2D`, no outline ring
- Radius: 2px
- Padding: 10px 14px
- Cursor blink on focus (CSS animation)

### Badges / TechBadge

- Background: `#2A2A2A`
- Text: `#A0A0A0`, 11px, uppercase, letter-spacing 0.1em
- Radius: 2px
- Padding: 3px 8px
- Hover: background `#3A3A3A`, text `#EDEDED`

### Skill Indicator / RPM Bar

- Track: `#2A2A2A`, height 2px, radius 0
- Fill: gradient from `accent-red` → `accent-blue` based on level
- Label: 13px Inter, `text-secondary`
- Value: 13px Space Grotesk, `text-primary`, right-aligned
- Animates from 0 on viewport entry

### Metric Widget

- Background: `#151515`
- Border: `1px solid #2A2A2A`
- Top accent line: 2px solid `accent-color` (red/blue/green)
- Value: `display` size, Space Grotesk 700, accent color
- Label: `label` style, `text-muted`
- Context: `body-sm`, `text-secondary`

### System Health Bar

- Height: 32px
- Background: `#0F0F0F`
- Border-bottom: `1px solid #1F1F1F`
- Items: `label` style (11px, uppercase, 0.12em spacing)
- Status dot: 6px circle, `accent-green`, `glow-green` pulse animation
- Separator: `|` in `text-muted`

### Navigation

- Height: 56px
- Background: `rgba(11, 11, 11, 0.85)`, backdrop-blur 12px
- Border-bottom: `1px solid #1F1F1F`
- Logo: Space Grotesk 600, 15px
- Nav links: Inter 400, 13px, `text-secondary`
- Active nav link: `text-primary`
- Hover nav link: `text-primary`, transition 150ms

---

## 6. Animation & Motion

### Duration scale

| Name | Value | Usage |
|---|---|---|
| `instant` | 100ms | State flips, toggle visibility |
| `fast` | 200ms | Hover transitions, microinteractions |
| `default` | 400ms | Component entrance, card transitions |
| `slow` | 600ms | Section entrances, large element reveals |
| `xslow` | 1000ms | Narrative animations, engine boot sequence |

### Easing

| Name | Curve | Usage |
|---|---|---|
| `ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default for all entrances |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | State transitions |
| `ease-spring` | `cubic-bezier(0.22, 1, 0.36, 1)` | Bouncy reveals |
| `linear` | `linear` | Progress bars, counters |

### Rules

- All entrances: fade + translate Y 20–24px, using `ease-out-expo`.
- Stagger delay between children: 80–120ms.
- Hover transitions: max 200ms, never `ease-in` (feels sluggish).
- Never animate `width`, `height`, or `color` directly — use `transform`, `opacity`, `box-shadow`.
- Respect `prefers-reduced-motion`: replace translate animations with opacity-only.
- Engine boot sequence total duration: max 2000ms. Felt should be snappy, not cinematic.
- Infinite animations (pulse, blink): only on status indicators. Never on content.

---

## 7. Iconography

- Library: **Lucide React** (install when needed).
- Default size: 16px.
- Stroke width: 1.5px.
- Color: inherits from text or explicit accent.
- Never use filled icons — outline only to match the HUD aesthetic.

---

## 8. Layout & Grid

### Max widths

| Context | Max width |
|---|---|
| Full bleed section | 100vw |
| Content container | 1280px |
| Narrow content (text) | 720px |
| Card grid | 1120px |

### Grid

- Desktop: 12-column, 24px gutter
- Tablet: 8-column, 16px gutter
- Mobile: 4-column, 16px gutter

### Breakpoints

| Name | Min width |
|---|---|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

---

## 9. Z-index Scale

| Layer | Value | Usage |
|---|---|---|
| base | 0 | Default content |
| raised | 10 | Cards on hover |
| overlay | 20 | Dropdowns, tooltips |
| sticky | 30 | Navigation bar |
| modal | 40 | Modals, drawers |
| toast | 50 | Notifications |
| boot | 100 | Engine boot overlay (top of everything) |

---

## 10. Do / Don't

| Do | Don't |
|---|---|
| Use sharp corners (0–4px) | Round everything like a consumer app |
| Use glow for emphasis | Use drop-shadow |
| Use uppercase labels for metadata | Uppercase body text |
| Keep backgrounds dark and layered | Use white or light backgrounds |
| Animate with transform + opacity | Animate width, height, color |
| Use accent colors sparingly | Flood the layout with red/blue/green |
| Use thin borders (1px) | Use thick decorative borders |
| Let whitespace breathe | Cram content to fill space |
| One accent color per component | Mix multiple accents in one card |
