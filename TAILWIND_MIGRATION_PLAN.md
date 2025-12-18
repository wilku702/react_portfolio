# Tailwind Migration Plan (CRA React Portfolio)

This plan walks through moving the current Create React App portfolio from custom CSS files to Tailwind CSS, with concrete steps, file targets, and QA checks.

## Goals
- Replace bespoke CSS with Tailwind utility classes while preserving visuals and interactions.
- Centralize theme tokens (colors, fonts, spacing) in Tailwind config.
- Reduce unused CSS, simplify component styles, and keep bundle lean.

## 0) Inventory (what to convert)
- Global styles: `src/assets/styles/global.css`, `src/assets/styles/index.css`.
- Component styles: `src/components/*/*.css` (Navbar, Header, HomeSections, ArticleLinks, CompanyLayout, Footer, article styles).
- Page styles: `src/pages/styles/AboutPage.css`, `src/pages/articles/styles/ArticleGlobal.css`.
- Fonts: `src/assets/fonts/*` (RobotoMono variants) imported in `global.css`.

## 1) Install Tailwind in CRA
1. Install dependencies:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
2. Tailwind config (`tailwind.config.js`):
   - Set `content` to `["./src/**/*.{js,jsx,ts,tsx}"]`.
   - Extend `theme` with:
     - `fontFamily`: map `mono` to Roboto Mono stack.
     - `colors`: define `background` = `rgb(20,20,20)`, `text` = `#ffffff`, `main` = `rgb(148, 174, 247)`.
   - Optional: add `boxShadow`, `borderRadius`, `animation` for snowflakes/typewriter equivalents.
3. Add Tailwind directives to `src/assets/styles/index.css` (or create `src/index.css` if preferred):
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
4. Move custom font-face declarations into `@layer base` in the same file; ensure font files remain in `src/assets/fonts`.

## 2) Wire Tailwind globally
- Update `src/index.js` imports to use the new Tailwind entry stylesheet (e.g., `import './assets/styles/index.css';` with Tailwind directives).
- Remove `global.css` import from `App.js` once equivalents are in place.
- If CSS reset is needed beyond Tailwind preflight, add minimal overrides in `@layer base`.

## 3) Theme & tokens
- Define Tailwind `:root` tokens as theme entries instead of CSS variables. Example in `tailwind.config.js`:
  ```js
  extend: {
    colors: {
      background: 'rgb(20,20,20)',
      text: '#ffffff',
      main: 'rgb(148, 174, 247)',
    },
    fontFamily: {
      mono: ['RobotoMono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
  }
  ```
- Add utility classes for gradients (pointer highlight) and animations (typewriter cursor, snowflakes) via `@keyframes` + `animation` entries.

## 4) Component-by-component migration
Work top-down, keeping layouts stable. For each component, replace classNames with Tailwind utility strings and delete the old CSS file when done.

**App.js**
- Replace `.App` layout with Tailwind classes on the root div (`min-h-screen flex flex-col bg-background text-text`).
- Pointer gradient: use `fixed inset-0 pointer-events-none transition-[background] duration-100 ease-linear` with inline style for radial gradient.

**Navbar (`src/components/Navbar/Navbar.js`)**
- Layout: `fixed top-0 w-full flex items-center justify-between px-6 md:px-12 h-20 z-20 bg-transparent`.
- Logo: `w-12 transition-transform hover:scale-110`.
- Desktop links: `hidden md:flex items-center gap-12 text-text hover:font-semibold transition`.
- Mobile menu: use `md:hidden`, absolute positioning, Tailwind transitions for open/close states; ensure consistent resume link.

**Header/Hero**
- Container: `h-screen flex items-center justify-center font-mono`.
- Typewriter: use `text-center text-4xl md:text-5xl leading-tight font-light` with custom animation for cursor (define in Tailwind config or `@layer`).
- Scroll chevron: replace `.scroll-down` with Tailwind classes and `after` pseudo via `content-['']` in `@layer components`.

**HomeSections + ArticleLinks tiles**
- Section titles: `text-3xl md:text-4xl font-bold text-center pb-4`.
- Tiles container: `flex flex-wrap`.
- Tile card: `relative w-full md:w-1/2 h-80 md:h-[30rem] p-10 flex items-center bg-cover bg-center overflow-hidden transition-transform duration-300 hover:scale-[1.01]`.
- Overlay: use `before:` utilities via `@layer components` or wrap with gradient overlays using `bg-gradient-to-t`.
- Text: `text-4xl font-bold drop-shadow` plus `text-main` accents.
- Handle empty links (Done Desk, Resia) by disabling pointer or adding `cursor-not-allowed`.

**About Page**
- Container width: `mx-auto px-4 max-w-5xl`.
- Grid: `grid md:grid-cols-3 gap-6 items-start pt-24`.
- Typography: apply `font-mono leading-9 text-base`.
- Snowflakes: implement via `@layer components` with `animate-[snow-fall_10s_linear_infinite, snow-shake_3s_ease-in-out_infinite]`; apply `fixed top-[-10%] left-[10%] text-white`.
- Portrait: `rounded-tl-[30%] rounded-bl-none rounded-tr-none rounded-br-none` etc., `mb-6`.

**CompanyLayout tiles**
- Reuse tile styles from ArticleLinks to avoid duplication; consider extracting a shared Tile component styled with Tailwind.

**Footer**
- Wrapper: `flex flex-col pt-16 pb-8 px-6 md:px-16 border-t border-white/30`.
- Columns: `flex flex-wrap justify-between gap-8 text-center md:text-left`.
- Links: `text-main hover:underline text-lg`.

**Article pages (`ArticleGlobal.css` replacements)**
- Page/container: `w-full px-4 md:px-6 lg:px-8 max-w-6xl mx-auto`.
- Whitespace spacer: use Tailwind padding/margin utilities instead of empty divs.
- Grids: use `grid` with `md:grid-cols-3` or `lg:grid-cols-[1fr_1fr]` depending on layout.
- Images: `block max-w-[80%] mx-auto mb-6 rounded-tr-4 rounded-bl-4 object-contain max-h-[600px] md:max-h-[300px]`.
- Typography: set headings to Tailwind classes inline (`text-4xl font-semibold`, etc.).
- Remove Bootstrap-like column classes entirely and replace with responsive Tailwind grids/flex.

## 5) Cleanup & removal
- Delete unused CSS files as each component is converted to ensure no dead styles linger.
- Remove `src/assets/styles/global.css` once all tokens live in Tailwind config and `index.css`.
- Update imports in components to drop old CSS files.

## 6) QA & regression checklist
- Visual parity on `/`, `/about`, `/kdan`, `/nagoya`, `/adonit`; ensure `/triniti` placeholder still renders safely.
- Check mobile nav open/close, tile click animations, pointer gradient, typewriter timing, snowflake animation.
- Verify fonts load (no FOUT); ensure `font-mono` uses Roboto Mono.
- Lighthouse: measure LCP/CLS; confirm no layout shift after removing CSS files.
- Run `npm run build` to ensure Tailwind purges unused classes (check build size).

## 7) Suggested sequence (2–3 days)
- Day 1: Install/configure Tailwind; set up base styles, fonts, tokens; convert App wrapper and Navbar.
- Day 2: Convert Hero, HomeSections/ArticleLinks tiles, Footer; extract shared tile component if desired.
- Day 3: Convert About page and article templates; remove legacy CSS; final QA/Lighthouse; update README to reflect Tailwind usage.

## 8) Notes
- Keep the pointer-gradient inline style; Tailwind will handle positioning and transitions.
- Consider adding `prefers-reduced-motion` guards for animations via Tailwind’s `motion-safe`/`motion-reduce` variants.
- When converting GIF-heavy pages, you can also seize the moment to add `loading="lazy"` and `object-contain` via Tailwind classes.
