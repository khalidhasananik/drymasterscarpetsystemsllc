# Design System Inspired by Carpet

> Auto-extracted from `https://carpet.axiomthemes.com/?storefront=envato-elements#anchor-container-01` on 2026-08-31

## 1. Visual Theme & Atmosphere

Friendly, approachable design with rounded shapes and generous whitespace.

The hero section leads with "We install & craft stylish floors".

**Key Characteristics:**
- Antonio as the heading font
- Noto Sans as the body font for all running text
- Heading weight 700
- Light/white background (#f7f6f1) as the primary canvas
- Primary accent `#bd3c16` used for CTAs and brand highlights
- 2 shadow level(s) detected — tinted shadows
- Rounded corners (50px+) creating a friendly, approachable feel
- Tags: light, rounded, accented, sans-serif

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#bd3c16`) · `--color-primary`: Brand color, CTA backgrounds, link text, interactive highlights.
- **Background** (`#f7f6f1`) · `--color-bg`: Page background, primary canvas.
- **Background Secondary** (`#eeece1`) · `--color-bg-secondary`: Cards, surfaces, alternating sections.

### Text
- **Text Primary** (`#8a8880`) · `--color-text`: Headings and body text.
- **Text Secondary** (`#666666`) · `--color-text-secondary`: Muted text, captions, placeholders.

### Borders & Surfaces
- **Border** (`#eeece1`) · `--color-border`: Dividers, outlines, input borders.

### Full Extracted Palette

| # | Hex | CSS Variable | Role | Area | Contrast |
|---|---|---|---|---|---|
| 1 | `#f7f6f1` | `--palette-1` | block | large | text-dark |
| 2 | `#eeece1` | `--palette-2` | block | large | text-dark |
| 3 | `#050e15` | `--palette-3` | button | large | text-light |
| 4 | `#bd3c16` | `--palette-4` | text-accent | medium | text-light |
| 5 | `#1a1f29` | `--palette-5` | button | small | text-light |
| 6 | `#b7b08d` | `--palette-6` | text-accent | small | text-dark |
| 7 | `#7b9663` | `--palette-7` | text-accent | small | text-dark |

## 3. Typography Rules

- **Heading Font:** `Antonio`, sans-serif
- **Body Font:** `Noto Sans`, sans-serif

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 | Antonio | 57px | 700 | 62.985px | normal |
| H2 | Antonio | 168.592px | 700 | 151.733px | normal |
| H3 | Antonio | 35px | 700 | 39.025px | normal |
| H4 | Antonio | 90px | 700 | 99px | -1.8px |
| Body | Noto Sans | 19px | 400 | 22.8px | normal |

### Type Scale

| Token | Size | Suggested Usage |
|---|---|---|
| Display | `495.3px` | headings |
| H1 | `233.363px` | headings |
| H2 | `190.5px` | headings |
| H3 | `171.45px` | headings |
| H4 | `168.592px` | headings |
| Body L | `133.35px` | body / supporting text |
| Body | `90px` | body / supporting text |
| Small | `65px` | body / supporting text |
| XS | `60px` | body / supporting text |
| Caption | `57px` | body / supporting text |

## 4. Component Stylings

### Primary Button

```css
.btn-primary {
  background: transparent;
  color: #bd3c16;
  border-radius: 0px;
  padding: 0px 0px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}
```

### Ghost Button

```css
.btn-ghost {
  background: transparent;
  color: #8a8880;
  border-radius: 0px;
  padding: 0px 15px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;
}
```

### Ghost Button 2

```css
.btn-ghost-2 {
  background: transparent;
  color: #1f242e;
  border-radius: 0px;
  padding: 8px 20px;
  font-size: 15px;
  font-weight: 700;
  border: none;
  cursor: pointer;
}
```

### Ghost Button 3

```css
.btn-ghost-3 {
  background: transparent;
  color: #494c4f;
  border-radius: 0px;
  padding: 0px 10px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}
```

## 5. Layout Principles

- **Base spacing unit:** `8px` — use multiples (16px, 24px, 32px, etc.)

### Spacing Scale (extracted from real elements)

| Token | Value | Role |
|---|---|---|
| spacing-1 | `8px` | element |
| spacing-2 | `13px` | element |
| spacing-3 | `7px` | element |
| spacing-4 | `6px` | element |
| spacing-5 | `10px` | element |
| spacing-6 | `30px` | card |
| spacing-7 | `40px` | card |
| spacing-8 | `150px` | section |

### Border Radius Scale

| Token | Value | Element |
|---|---|---|
| radius-card | `50px` | card |
| radius-subtle | `2px` | subtle |

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| High | `rgba(0, 0, 0, 0.05) 0px 4px 24px 0px` | Modals, floating elements |
| Low | `rgba(255, 255, 255, 0) 0px 0px 0px 0px` | Cards, subtle elevation |


## 7. Do's and Don'ts

### Do
- Use `#f7f6f1` as the primary background color
- Use `Antonio` for all headings and `Noto Sans` for body text
- Use `#bd3c16` as the single dominant accent/CTA color
- Maintain `8px` as the base spacing unit — all gaps should be multiples
- Use rounded corners (`50px`+) consistently for all interactive elements
- Apply the shadow system for elevation — use the extracted shadow values
- Use weight 700 for headings to match the brand's typographic voice

### Don't
- Don't use colors outside the extracted palette without justification
- Don't substitute Antonio/Noto Sans with generic alternatives
- Don't use irregular spacing — stick to 8px grid
- Don't use dark/black backgrounds — this is a light-themed design
- Don't use sharp corners — they feel hostile in this rounded design language
- Don't use pure black (#000000) for text — use `#8a8880` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stack sections, reduce font sizes ~80% |
| Tablet | 640–1024px | 2-column where appropriate, maintain spacing ratios |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 8px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #f7f6f1
Text:        #8a8880
Accent:      #bd3c16
Border:      #eeece1
```

### Example Prompts

1. "Build a hero section with a `#f7f6f1` background, `Antonio` heading in `#8a8880`, and a `#bd3c16` CTA button."
2. "Create a pricing card using background `#eeece1`, border `#eeece1`, `Noto Sans` for text, and 24px padding."
3. "Design a navigation bar — `#f7f6f1` background, `#8a8880` links, `#bd3c16` for active state."
4. "Build a feature grid with 3 columns, 24px gap, each card using the card component style."
5. "Create a footer with `#8a8880` background, `#f7f6f1` text, and 16px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Add shadows for depth — use the extracted shadow values, not defaults
7. Check responsive behavior — test mobile and tablet layouts
8. Final pass — verify all colors match, spacing is consistent, fonts are correct

## 10. CSS Custom Properties

> 271 custom properties extracted from `:root` / `html` stylesheets.

### Color Variables

| Variable | Value |
|---|---|
| `--wp--preset--color--black` | `#000000` |
| `--wp--preset--color--cyan-bluish-gray` | `#abb8c3` |
| `--wp--preset--color--white` | `#ffffff` |
| `--wp--preset--color--pale-pink` | `#f78da7` |
| `--wp--preset--color--vivid-red` | `#cf2e2e` |
| `--wp--preset--color--luminous-vivid-orange` | `#ff6900` |
| `--wp--preset--color--luminous-vivid-amber` | `#fcb900` |
| `--wp--preset--color--light-green-cyan` | `#7bdcb5` |
| `--wp--preset--color--vivid-green-cyan` | `#00d084` |
| `--wp--preset--color--pale-cyan-blue` | `#8ed1fc` |
| `--wp--preset--color--vivid-cyan-blue` | `#0693e3` |
| `--wp--preset--color--vivid-purple` | `#9b51e0` |
| `--wp--preset--color--theme-color-bg-color` | `#F7F6F1` |
| `--wp--preset--color--theme-color-bg-color-2` | `#EEECE1` |
| `--wp--preset--color--theme-color-bd-color` | `#DCD9CB` |
| `--wp--preset--color--theme-color-title` | `#1F242E` |
| `--wp--preset--color--theme-color-meta` | `#B7B08D` |
| `--wp--preset--color--theme-color-link` | `#BD3C16` |
| `--wp--preset--color--theme-color-hover` | `#AF300B` |
| `--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple` | `linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%)` |
| `--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan` | `linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)` |
| `--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange` | `linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%)` |
| `--wp--preset--gradient--luminous-vivid-orange-to-vivid-red` | `linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%)` |
| `--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray` | `linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)` |
| `--wp--preset--gradient--cool-to-warm-spectrum` | `linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)` |
| `--wp--preset--gradient--blush-light-purple` | `linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%)` |
| `--wp--preset--gradient--blush-bordeaux` | `linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%)` |
| `--wp--preset--gradient--luminous-dusk` | `linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%)` |
| `--wp--preset--gradient--pale-ocean` | `linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%)` |
| `--wp--preset--gradient--electric-grass` | `linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%)` |
| ... | *(13 more)* |

### Spacing Variables

| Variable | Value |
|---|---|
| `--wp--preset--aspect-ratio--square` | `1` |
| `--wp--preset--spacing--20` | `0.44rem` |
| `--wp--preset--spacing--30` | `0.67rem` |
| `--wp--preset--spacing--40` | `1rem` |
| `--wp--preset--spacing--50` | `1.5rem` |
| `--wp--preset--spacing--60` | `2.25rem` |
| `--wp--preset--spacing--70` | `3.38rem` |
| `--wp--preset--spacing--80` | `5.06rem` |
| `--wp--style--global--content-size` | `850px` |
| `--wp--style--global--wide-size` | `1290px` |
| `--direction-multiplier` | `1` |
| `--swiper-navigation-size` | `44px` |
| `--fixed-rows-height` | `0px` |
| `--sc-space-tiny` | `1rem` |
| `--sc-space-small` | `2rem` |
| `--sc-space-medium` | `3.3333rem` |
| `--sc-space-large` | `6.6667rem` |
| `--sc-space-huge` | `8.6667rem` |
| `--sc-shift-tiny` | `2em` |
| `--sc-shift-small` | `4em` |
| ... | *(32 more)* |

### Typography Variables

| Variable | Value |
|---|---|
| `--wp--preset--font-size--small` | `13px` |
| `--wp--preset--font-size--medium` | `clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.619), 20px)` |
| `--wp--preset--font-size--large` | `clamp(22.041px, 1.378rem + ((1vw - 3.2px) * 1.439), 36px)` |
| `--wp--preset--font-size--x-large` | `clamp(25.014px, 1.563rem + ((1vw - 3.2px) * 1.751), 42px)` |
| `--wp--preset--font-family--p-font` | `"Noto Sans",sans-serif` |
| `--wp--preset--font-family--post-font` | `inherit` |
| `--wp--preset--font-family--h-1-font` | `Antonio,sans-serif` |
| `--theme-font-p_font-family` | `"Noto Sans",sans-serif` |
| `--theme-font-p_font-size` | `16px` |
| `--theme-font-p_font-weight` | `400` |
| `--theme-font-p_font-style` | `normal` |
| `--theme-font-p_line-height` | `1.625em` |
| `--theme-font-p_text-decoration` | `inherit` |
| `--theme-font-p_text-transform` | `none` |
| `--theme-font-p_letter-spacing` | `0px` |
| `--theme-font-p_margin-top` | `0em` |
| `--theme-font-p_margin-bottom` | `1.62em` |
| `--theme-font-post_font-family` | `inherit` |
| `--theme-font-post_font-size` | `inherit` |
| `--theme-font-post_font-weight` | `inherit` |
| ... | *(127 more)* |

### Other Variables

| Variable | Value |
|---|---|
| `--wp--preset--aspect-ratio--4-3` | `4/3` |
| `--wp--preset--aspect-ratio--3-4` | `3/4` |
| `--wp--preset--aspect-ratio--3-2` | `3/2` |
| `--wp--preset--aspect-ratio--2-3` | `2/3` |
| `--wp--preset--aspect-ratio--16-9` | `16/9` |
| `--wp--preset--aspect-ratio--9-16` | `9/16` |
| `--wp--preset--gradient--vertical-link-to-hover` | `linear-gradient(to bottom,var(--theme-color-link) 0%,var(--theme-color-hover) 100%)` |
| `--wp--preset--gradient--diagonal-link-to-hover` | `linear-gradient(to bottom right,var(--theme-color-link) 0%,var(--theme-color-hover) 100%)` |
| `--wp--custom--spacing--tiny` | `var(--sc-space-tiny,   1rem)` |
| `--wp--custom--spacing--small` | `var(--sc-space-small,  2rem)` |
| `--wp--custom--spacing--medium` | `var(--sc-space-medium, 3.3333rem)` |
| `--wp--custom--spacing--large` | `var(--sc-space-large,  6.6667rem)` |
| `--wp--custom--spacing--huge` | `var(--sc-space-huge,   8.6667rem)` |
| `--page-title-display` | `block` |
| `--sc-space-big` | `var(--sc-space-large)` |
| ... | *(14 more)* |
