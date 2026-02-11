# Portfolio Context

Comprehensive reference for Will Kung's personal portfolio website. This file documents every convention, pattern, and structural detail so any AI assistant can work on the codebase immediately.

**Live site:** https://willkung.com
**Owner:** Will Kung — CS @ UT Austin, Full Stack Developer

---

## Tech Stack

| Dependency | Version | Purpose |
|---|---|---|
| vite | ^7.3.1 | Build tool + dev server |
| @vitejs/plugin-react | ^5.1.3 | JSX transform, Fast Refresh |
| react | ^18.3.1 | UI library |
| react-dom | ^18.3.1 | DOM renderer |
| react-router-dom | ^6.26.1 | Client-side routing (BrowserRouter) |
| framer-motion | ^11.3.31 | Animations + page transitions |
| react-helmet-async | ^2.0.5 | Per-page `<title>` and OG meta tags |
| react-icons | ^5.5.0 | Tech stack icons on article pages (Simple Icons set) |
| prop-types | ^15.8.1 | Runtime prop validation |
| eslint | ^9.39.2 | Linting (flat config format) |
| eslint-plugin-react | ^7.37.5 | React-specific lint rules |
| eslint-plugin-react-hooks | ^7.0.1 | Hooks lint rules |
| eslint-plugin-jsx-a11y | ^6.10.2 | Accessibility lint rules |
| eslint-config-prettier | ^10.1.8 | Disables rules that conflict with Prettier |
| prettier | ^3.8.1 | Code formatting |
| globals | ^17.3.0 | Browser globals for ESLint flat config |

**Runtime:** Node.js (no specific version pinned). `"type": "module"` in package.json.

---

## NPM Scripts

| Script | Command | Notes |
|---|---|---|
| `dev` | `vite` | Dev server on port 3000, auto-opens browser |
| `start` | `vite` | Alias for dev |
| `build` | `vite build` | Outputs to `build/` (not default `dist/`) |
| `preview` | `vite preview` | Preview production build locally |

---

## File Structure

```
react_portfolio/
├── index.html                          # Entry HTML (Vite root, not in public/)
├── package.json
├── vite.config.js                      # Build → build/, dev port 3000
├── eslint.config.js                    # ESLint 9 flat config
├── PORTFOLIO_CONTEXT.md                # This file
│
├── public/                             # Static assets (served at / by Vite)
│   ├── portrait.jpg                    # Will's portrait (800px wide, ~115KB)
│   ├── robots.txt                      # Allow all crawlers
│   ├── sitemap.xml                     # 7 URLs for SEO
│   ├── logo/
│   │   ├── W.svg                       # Favicon + navbar logo
│   │   ├── github.svg                  # (unused in current code)
│   │   ├── linkedin.svg               # (unused in current code)
│   │   ├── logo.png                    # Logo variants
│   │   ├── logowhite.png
│   │   └── my_logo.png
│   └── companies/                      # Work/project images
│       ├── elasa.jpg                   # Card backgrounds
│       ├── kdan.png
│       ├── adonit.png
│       ├── nagoya.png
│       ├── triniti.jpg
│       ├── triniti.png                 # Orphaned (old PNG, replaced by .jpg)
│       ├── donedesk.jpg
│       ├── resia.jpg
│       ├── kdan/                       # Kdan article images
│       │   ├── kdan-ai.jpg
│       │   ├── figma.jpg
│       │   ├── hi_team.jpg
│       │   ├── aws.jpg
│       │   ├── langfuse.jpg
│       │   ├── deployment.jpg
│       │   ├── chatbot_layout.jpg
│       │   └── chatbot/               # Chatbot demo GIFs (~3MB total)
│       │       ├── chatbot_message.gif
│       │       ├── chatbot_table.gif
│       │       └── chatbot_graph.gif
│       ├── adonit/
│       │   ├── start.jpg
│       │   └── forecast_page.jpg
│       └── nagoya/
│           ├── nagoya.jpg              # Orphaned (unused)
│           ├── nagoya_large.jpg
│           ├── cover.jpg
│           └── figma.jpg
│
└── src/
    ├── index.jsx                       # ReactDOM.createRoot, StrictMode
    ├── App.jsx                         # Router, providers, routes, layout
    ├── motionUtils.js                  # Shared framer-motion variants
    │
    ├── assets/
    │   ├── fonts/                      # RobotoMono WOFF2 + TTF fallbacks
    │   │   ├── RobotoMono-ExtraLight.woff2 / .ttf
    │   │   ├── RobotoMono-Regular.woff2 / .ttf
    │   │   ├── RobotoMono-Bold.woff2 / .ttf
    │   │   └── RobotoMono-SemiBold.woff2 / .ttf
    │   └── styles/
    │       ├── index.css               # Base body reset (from CRA)
    │       └── global.css              # CSS variables, @font-face, utilities
    │
    ├── context/
    │   └── NavigationContext.jsx        # External link confirmation provider
    │
    ├── components/
    │   ├── ErrorBoundary.jsx            # Class component, catches render errors
    │   ├── Navbar/
    │   │   ├── Navbar.jsx               # Desktop nav + mobile toggle menu
    │   │   └── Navbar.css
    │   ├── Header/
    │   │   ├── Header.jsx               # Hero section with typewriter animation
    │   │   └── Header.css
    │   ├── Footer/
    │   │   ├── Footer.jsx               # Email, social links, work links
    │   │   └── Footer.css
    │   ├── ConfirmModal/
    │   │   ├── ConfirmModal.jsx          # External link confirmation dialog
    │   │   └── ConfirmModal.css
    │   ├── ArticleLinks/
    │   │   ├── ArticleLinks.jsx          # Card grid (experience + projects)
    │   │   └── ArticleLinks.css
    │   └── HomeSections/
    │       └── HomeSections.css          # Styles for front page sections
    │
    ├── pages/
    │   ├── FrontPage.jsx                # / — hero + featured work
    │   ├── ExperiencePage.jsx           # /experience — all internships
    │   ├── ProjectsPage.jsx             # /projects — all projects
    │   ├── AboutPage.jsx                # /about — bio + portrait + snowflakes
    │   ├── NotFoundPage.jsx             # 404 fallback
    │   ├── styles/
    │   │   ├── WorkPage.css             # Shared by Experience + Projects pages
    │   │   └── AboutPage.css
    │   └── articles/
    │       ├── DynamicArticlePage.jsx    # /:id — resolves article data by URL param
    │       ├── ArticlePage.jsx           # Renders article content from data object
    │       └── styles/
    │           └── ArticleGlobal.css     # Article page typography and layout
    │
    └── data/
        ├── siteConfig.js                # Nav links, social links, work links, email
        ├── workItems.js                 # internshipItems[], projectItems[], featuredItems[]
        ├── articles.js                  # Maps route IDs → article data objects
        ├── kdan.js                      # kdanData article content
        ├── adonit.js                    # adonitData article content
        ├── nagoya.js                    # nagoyaData article content
        ├── elasa.js                     # elasaData article content
        └── techIcons.jsx                # Maps tech name strings → react-icons components
```

---

## Routing

All routing uses `react-router-dom` v6 `BrowserRouter`. Routes are defined in `App.jsx`.

| Path | Component | Type | Notes |
|---|---|---|---|
| `/` | `FrontPage` | Static | Hero + featured work (lazy-loaded) |
| `/experience` | `ExperiencePage` | Static | All internship cards (lazy-loaded) |
| `/projects` | `ProjectsPage` | Static | All project cards (lazy-loaded) |
| `/work` | `Navigate` → `/experience` | Redirect | Legacy URL support |
| `/about` | `AboutPage` | Static | Bio page (lazy-loaded) |
| `/:id` | `DynamicArticlePage` | Dynamic | Resolves from `articles.js` map (lazy-loaded) |
| `*` | `NotFoundPage` | Catch-all | 404 page (lazy-loaded) |

**Route resolution:** React Router v6 ranks static routes higher than dynamic `/:id`, so `/experience`, `/projects`, and `/about` always take priority over the dynamic segment.

**Valid dynamic `:id` values:** `kdan`, `adonit`, `nagoya`, `elasa`

**Unknown IDs:** `DynamicArticlePage` renders `<NotFoundPage />` inline (no redirect) when `articles[id]` is undefined.

**Prefetching:** All lazy-loaded chunks are prefetched on mount via dynamic `import()` calls in `App.jsx` `useEffect`.

**ScrollToTop:** A `ScrollToTop` component inside `Router` scrolls to `(0,0)` on every pathname change.

---

## Data Architecture

### siteConfig.js

Centralized configuration consumed by Navbar and Footer.

```js
navigationLinks[]   // { path, label } — used by Navbar + mobile menu
socialLinks[]       // { id, url, label } — Instagram, LinkedIn
workLinks[]         // { id, url, label } — GitHub, Resume
contactEmail        // string — mailto link in Footer
```

### workItems.js

Three exports that feed `ArticleLinks` cards:

```js
internshipItems[]   // ELASA, KDAN, Adonit, Done Desk, Resia
projectItems[]      // Nagoya, Triniti
featuredItems[]     // [internshipItems[0], internshipItems[1]] (ELASA, KDAN)
```

Each item shape:
```js
{
  id: string,              // URL slug (matches articles.js key for linked items)
  title: string,           // Card heading
  link: string,            // Route path or external URL; empty string = non-clickable
  backgroundImage: string, // Absolute path to public/ image
  emojiLink: string,       // Unused in rendered UI (data-only)
  details: string,         // Pipe-separated tech tags (split on "|" for display)
  description: string,     // Card body text
  type: string             // "internship" | "project" | "part-time"
}
```

**Link behavior:**
- Empty string (`""`) → card renders as non-clickable with "Coming soon" badge
- Internal path (e.g. `/kdan`) → click-to-animate-then-navigate
- External URL (e.g. `https://github.com/...`) → opens confirmation modal

### articles.js

Maps string keys to article data objects:

```js
{ kdan: kdanData, nagoya: nagoyaData, adonit: adonitData, elasa: elasaData }
```

Each article data object shape (validated by `ArticlePage.propTypes`):

```js
{
  title: string,           // Page heading + Helmet title
  service: string,         // Meta field displayed in article header
  timeline: string,        // Meta field displayed in article header
  role: string,            // Meta field displayed in article header
  techStack: string[],     // Optional; maps to icons via techIcons.jsx
  description: string,     // Intro paragraph + OG description
  images: [{ src, alt, className? }],  // Hero images below header
  sections: [{
    headerType: string,    // "h1"–"h6" (validated against ALLOWED_TAGS)
    title: string,         // Section heading text
    contentType: "paragraph" | "list" | "demonstration",
    content: string | string[],  // String for paragraph/demo, array for list
    images: [{ src, alt }],      // Optional section images
    position: "left" | "right"   // Only for demonstration contentType
  }]
}
```

### techIcons.jsx

Maps tech name strings to `react-icons/si` components. Used by `ArticlePage` to render icons next to tech stack labels. Currently maps 16 tech names.

---

## Component Inventory

### App-Level (`src/App.jsx`)

| Feature | Implementation |
|---|---|
| Mouse gradient | `pointer-gradient` div follows cursor via RAF-throttled `mousemove` |
| Providers | `HelmetProvider` → `MotionConfig` → `Router` → `NavigationProvider` |
| Skip link | `<a href="#main-content">` positioned off-screen, shown on focus |
| Layout | `<Navbar />` + `<Suspense>` + `<ErrorBoundary>` + `<main>` + `<Footer />` |

### Navbar (`src/components/Navbar/Navbar.jsx`)
- **Props:** None
- **State:** `isMenuOpen` (boolean)
- **Behavior:** Desktop horizontal nav + mobile toggle menu with `role="menu"`
- **Data source:** `navigationLinks` from siteConfig.js
- **Animation:** `staggerOne` + `bannerFadeInVariants` from motionUtils
- **ARIA:** Separate `aria-expanded`, `aria-hidden`, `tabIndex` on open/close buttons

### Header (`src/components/Header/Header.jsx`)
- **Props:** None
- **State:** `skipAnimation` — initialized from `sessionStorage.hero_animated`; set once on first render, skips typewriter on revisit within session
- **Behavior:** Typewriter CSS animation on hero text; scroll-down indicator

### Footer (`src/components/Footer/Footer.jsx`)
- **Props:** None
- **Behavior:** Email link, social links (Instagram, LinkedIn), work links (GitHub, Resume)
- **External links:** All use `confirmNavigation()` from NavigationContext
- **Data source:** `socialLinks`, `workLinks`, `contactEmail` from siteConfig.js

### ArticleLinks (`src/components/ArticleLinks/ArticleLinks.jsx`)
- **Props:** `items` (array of work/project items)
- **Behavior:** Grid of animated cards with click-to-navigate
- **External links:** Routed through `confirmNavigation()` modal
- **Internal links:** Animate to `clicked` variant then navigate via `onAnimationComplete`
- **Non-clickable items:** Empty `link` string shows "Coming soon" badge, no `role="button"`

### ConfirmModal (`src/components/ConfirmModal/ConfirmModal.jsx`)
- **Props:** `isOpen`, `destination`, `onConfirm`, `onCancel`
- **Behavior:** Modal overlay for external link confirmation
- **A11y:** Focus trap (Tab cycling between Confirm/Cancel), Escape to close, focus restoration to trigger element on close
- **Animation:** AnimatePresence fade + scale

### ErrorBoundary (`src/components/ErrorBoundary.jsx`)
- **Props:** `children`
- **Type:** Class component (only class component in codebase)
- **Behavior:** Catches render errors, displays fallback UI with link home

### NavigationProvider (`src/context/NavigationContext.jsx`)
- **Provides:** `{ confirmNavigation }` via `useNavigationConfirm()` hook
- **Behavior:** Manages pending URL state, opens ConfirmModal, opens external link in new tab on confirm

### DynamicArticlePage (`src/pages/articles/DynamicArticlePage.jsx`)
- **Behavior:** Reads `:id` from URL params, looks up in `articles` map, renders `ArticlePage` or `NotFoundPage`

### ArticlePage (`src/pages/articles/ArticlePage.jsx`)
- **Props:** `data` (article data object)
- **Behavior:** Full article layout with back button, meta fields, tech stack icons, hero images, content sections
- **Section types:** `paragraph` (text + images), `list` (bullet list + images), `demonstration` (side-by-side text + image)
- **Animation:** Each section uses scroll-triggered `whileInView` fade-in

### Page Components

| Page | File | Helmet Title | Animation |
|---|---|---|---|
| FrontPage | `pages/FrontPage.jsx` | "Will Kung \| Full Stack Developer" | None (Header has typewriter) |
| ExperiencePage | `pages/ExperiencePage.jsx` | "Experience \| Will Kung" | `defaultPageFadeInVariants` |
| ProjectsPage | `pages/ProjectsPage.jsx` | "Projects \| Will Kung" | `defaultPageFadeInVariants` |
| AboutPage | `pages/AboutPage.jsx` | "About \| Will Kung" | `defaultPageFadeInVariants` |
| NotFoundPage | `pages/NotFoundPage.jsx` | "404 - Page Not Found \| Will Kung" | None |

---

## Motion / Animation System

All animation variants live in `src/motionUtils.js`. The app wraps everything in `<MotionConfig reducedMotion="user">` to respect user OS preferences.

### Exports from motionUtils.js

| Export | Used By | Purpose |
|---|---|---|
| `defaultEasing` | All variants | Cubic bezier `[0.6, -0.05, 0.01, 0.99]` |
| `staggerHalf` | — | Stagger children by 0.05s |
| `staggerOne` | Navbar, Footer | Stagger children by 0.25s |
| `bannerFadeInVariants` | Navbar | Fade in (opacity 0→1, 0.8s) |
| `bannerFadeInUpVariants` | Footer | Fade in + slide up (y: 30→0, 0.8s) |
| `defaultPageFadeInVariants` | Experience, Projects, About pages | Page-level fade (0.6s) |
| `articleVariants` | ArticleLinks | Card click animation (scale 1→0.85, opacity 1→0) |

### Additional inline variants

- **ArticlePage:** `scrollFadeIn` — per-section `whileInView` fade-in (y: 20→0, 0.6s, viewport once)
- **ArticleLinks:** Card header `whileInView` fade-in (y: 16→0, 0.5s, viewport once)
- **FrontPage:** `titleAnim` — section title `whileInView` fade-in (y: 12→0, 1.2s)

---

## Styling

### Approach
- Plain CSS with co-located stylesheets per component (no CSS modules, no CSS-in-JS)
- Global styles in `src/assets/styles/global.css` and `src/assets/styles/index.css`
- No vendor prefixes (removed in QA round)
- No CSS preprocessor

### CSS Variables (`:root` in global.css)

```css
--background-color: rgb(20, 20, 20);   /* Dark background */
--text-color: hsl(0, 0%, 100%);        /* White text */
--main-color: rgb(148, 174, 247);      /* Light blue accent */
```

### Font Stack

| Family Name | Weight | File |
|---|---|---|
| `RobotoMono` | Regular | RobotoMono-Regular.woff2 |
| `RobotoMonoLight` | ExtraLight | RobotoMono-ExtraLight.woff2 |
| `RobotoMonoBold` | Bold | RobotoMono-Bold.woff2 |
| `RobotoMonoSemiBold` | SemiBold | RobotoMono-SemiBold.woff2 |

All use `font-display: swap` with WOFF2 primary + TTF fallback.

### Global Utility Classes

| Class | Purpose |
|---|---|
| `.sr-only` | Screen-reader-only text (visually hidden) |
| `.skip-link` | Skip-to-content link (hidden until focused) |
| `.loading-page` / `.loading-pulse` | Suspense fallback skeleton |
| `.not-found-page` | 404 page layout |
| `.pointer-gradient` | Mouse-following radial gradient overlay |

### Key CSS Selectors

- `.App` — flex column, full viewport height
- `.page` — base class for page containers
- `.tiles` — card grid container (ArticleLinks)
- `.article-card` — individual work/project card
- `.article-card.non-clickable` — disabled card styling
- `.coming-soon-badge` — overlay badge for non-clickable cards

---

## SEO

### index.html
- `<meta name="description">` — site-wide description
- `<link rel="canonical">` — https://willkung.com
- Open Graph tags: `og:title`, `og:description`, `og:type`, `og:url`, `og:image`
- Twitter Card tags: `summary_large_image`
- JSON-LD structured data: `Person` schema with name, url, jobTitle, alumniOf, sameAs

### Per-Page (react-helmet-async)
- Every page sets `<title>` via `<Helmet>`
- ExperiencePage and AboutPage also set `og:title` / `og:description`
- ArticlePage sets `og:title`, `og:description`, `og:type: article`

### Static Files
- `public/robots.txt` — allows all crawlers, links to sitemap
- `public/sitemap.xml` — 7 URLs: `/`, `/experience`, `/projects`, `/about`, `/kdan`, `/adonit`, `/nagoya`

**Note:** `/elasa` is not yet in sitemap.xml.

---

## Accessibility

| Feature | Implementation |
|---|---|
| Skip link | `<a href="#main-content">` in App.jsx, visible on `:focus` |
| Landmark | Single `<main id="main-content">` wraps all routes |
| Nav landmark | `<nav aria-label="Main navigation">` |
| Reduced motion | `<MotionConfig reducedMotion="user">` wraps entire app |
| Focus visible | Global `*:focus-visible` style with `outline: 3px solid var(--main-color)` |
| Modal focus trap | ConfirmModal traps Tab between Confirm/Cancel buttons |
| Modal focus restore | Saves `document.activeElement` on open, restores on close |
| Modal escape | Escape key closes ConfirmModal |
| Card keyboard | `role="button"`, `tabIndex={0}`, Enter/Space handlers on article cards |
| Loading state | Suspense fallback has `role="status"`, `aria-live="polite"`, `.sr-only` label |
| Mobile menu | `role="menu"` with `role="menuitem"` children, `aria-expanded`/`aria-hidden` per button |
| Image alts | All `<img>` tags have descriptive `alt` text |
| Decorative | Snowflakes on AboutPage marked `aria-hidden="true"` |
| Tech icons | Marked `aria-hidden="true"` with visible text label alongside |
| Lint | `eslint-plugin-jsx-a11y` in ESLint config catches violations |

---

## Build & Tooling

### Vite Config (`vite.config.js`)
```js
plugins: [react()]
build.outDir: 'build'
server.port: 3000
server.open: true
```

### ESLint Config (`eslint.config.js`)
- ESLint 9 flat config format
- Extends: `@eslint/js` recommended, `eslint-plugin-react` flat recommended + jsx-runtime, `eslint-plugin-jsx-a11y` recommended, `eslint-config-prettier`
- Plugins: `react-hooks`
- Rules: `react/prop-types: warn`, react-hooks recommended
- Ignores: `build/**`
- Globals: browser (via `globals` package)

---

## Key Conventions

### File Extensions
- `.jsx` for all files containing JSX (components, pages, techIcons)
- `.js` for pure data/utility files (motionUtils, siteConfig, workItems, articles, kdan, adonit, nagoya, elasa)

### Image Paths
- Always use absolute paths from public root: `/companies/kdan.png`, `/portrait.jpg`
- Never relative paths (`./companies/...`)

### External Link Handling
- All external links go through `NavigationContext.confirmNavigation(url)`
- Opens a modal showing the destination hostname
- On confirm, opens in new tab with `noopener,noreferrer`
- Used in: Footer (social/work links), ArticleLinks (external project links like Triniti GitHub)

### Entity Escaping
- Use `&apos;` for single quotes and `&quot;` for double quotes in JSX text content
- Required by `react/no-unescaped-entities` rule

### Component Patterns
- All components are functional (except ErrorBoundary which must be a class)
- No `import React` — using jsx-runtime automatic transform
- PropTypes defined at bottom of file for components receiving props
- Lazy loading via `React.lazy()` + `Suspense` for all page components
- Motion variants defined in `motionUtils.js` or as inline constants at top of component files

---

## How to Add a New Experience or Project (Step-by-Step)

This section walks through every file you need to touch and every decision you need to make when adding a new work experience or project to the portfolio. There are three tiers of complexity:

1. **Card only** — a non-clickable placeholder card ("Coming soon")
2. **Card + external link** — card that opens a confirmation modal and navigates to an external URL
3. **Card + article page** — card that navigates to a full internal article page with sections, images, and tech icons

Pick the tier that matches your needs and follow every step below it. Each tier builds on the previous one.

---

### Tier 1: Card Only (Non-Clickable Placeholder)

Use this when the experience/project exists but you don't have an article or external link ready yet. The card will render with a "Coming soon" badge and no click behavior.

#### Step 1 — Prepare a background image

- Add a card background image to `public/companies/`. Supported formats: `.jpg`, `.png`.
- **Naming:** use a lowercase slug matching the item's `id` (e.g. `acme.jpg` for id `"acme"`).
- **Recommended size:** ~800px wide, JPEG for photos (smaller file size). Avoid PNGs for photographic images.

#### Step 2 — Add the item to `src/data/workItems.js`

Add an object to either `internshipItems[]` (for work experiences) or `projectItems[]` (for personal/academic projects). Insert it at the position you want it to appear in the grid — items render in array order.

```js
{
  id: 'acme',                              // URL-safe slug, unique across all items
  title: 'Acme Corp',                      // Card heading text
  link: '',                                // Empty string = non-clickable, shows "Coming soon"
  backgroundImage: '/companies/acme.jpg',  // Absolute path from public root
  emojiLink: '🚀',                         // Decorative only (not rendered in UI currently)
  details: 'React.js | Node.js | AWS',     // Pipe-separated tech tags shown on card
  description: 'Built a real-time...',     // Card body paragraph
  type: 'internship'                       // 'internship' | 'project' | 'part-time'
}
```

**Field-by-field reference:**

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | string | Yes | URL slug. Must be unique across both arrays. Used as the React `key` and as the `articles.js` lookup key if you later add an article page. |
| `title` | string | Yes | Displayed as the card heading. Keep it short (1-3 words). |
| `link` | string | Yes | `""` for placeholder, `/slug` for internal article, or full URL for external link. |
| `backgroundImage` | string | Yes | Must be an absolute path starting with `/`. Vite serves `public/` at root. |
| `emojiLink` | string | Yes | Currently stored in data but not rendered in the UI. Include for schema consistency. |
| `details` | string | Yes | Tech tags separated by ` \| ` (pipe with spaces). These are split on `\|` and rendered as individual tags on the card. |
| `description` | string | Yes | 1-2 sentence summary. This is the card body text, not the article description. |
| `type` | string | Yes | One of `"internship"`, `"project"`, or `"part-time"`. Used for categorization. |

#### Step 3 (Optional) — Feature on the front page

If this item should appear in the "Featured" section on the front page, update the `featuredItems` export at the bottom of `workItems.js`:

```js
// Currently features the first two internships
export const featuredItems = [internshipItems[0], internshipItems[1]];

// To feature your new item instead:
export const featuredItems = [internshipItems[0], internshipItems[2]];
```

`featuredItems` is an array of references to items from the other arrays. It controls what shows on the `/` page under "Featured Work".

#### Done — No routing or app-level changes needed

The `ExperiencePage` and `ProjectsPage` components import `internshipItems` / `projectItems` directly and render them via `<ArticleLinks items={...} />`. Adding to the array is all that's required for the card to appear.

---

### Tier 2: Card + External Link

Use this when the card should link to an external URL (e.g. a GitHub repo, a deployed app, a publication). Clicking the card opens a confirmation modal showing the destination domain, then opens the link in a new tab.

#### Steps

1. **Follow all of Tier 1**, but set `link` to the full external URL:
   ```js
   link: 'https://github.com/wilku702/MyProject',
   ```

2. **That's it.** The `ArticleLinks` component detects that the link starts with `http` and routes the click through `NavigationContext.confirmNavigation(url)`, which opens the `ConfirmModal`. No additional wiring needed.

**How it works under the hood:**
- `ArticleLinks.jsx` checks if `item.link` is truthy.
- If the link is external (contains `://`), it calls `confirmNavigation(item.link)`.
- `ConfirmModal` shows the destination hostname and gives the user Confirm/Cancel.
- On confirm, the link opens in a new tab with `noopener,noreferrer`.

---

### Tier 3: Card + Full Article Page

Use this when you want a dedicated page at `/<slug>` with a back button, meta header (service, timeline, role), tech stack icons, hero images, and content sections. This is the most involved option.

#### Step 1 — Follow Tier 1

Add the item to `workItems.js` with `link` set to the internal route path:

```js
link: '/acme',  // Must match the id and the articles.js key
```

**Important:** The `link` value (without the leading `/`) must match the `id` field and the key you'll use in `articles.js`. Example: `id: 'acme'`, `link: '/acme'`, `articles.js` key: `acme`.

#### Step 2 — Prepare article images

Create a directory for article-specific images:

```
public/companies/acme/
├── hero.jpg          # Hero image shown below the header
├── diagram.jpg       # Section images
└── demo.gif          # Demo animations (consider video format for large GIFs)
```

- All image paths in the data file must be absolute from root: `/companies/acme/hero.jpg`
- Use descriptive `alt` text for every image (accessibility requirement)
- Compress images before adding — aim for JPEG at ~80% quality, max 800px wide for standard images

#### Step 3 — Create the article data file

Create `src/data/acme.js` exporting a data object. This is the most important file — it defines everything the article page renders.

```js
export const acmeData = {
  // --- HEADER META (rendered in three columns at top) ---
  title: 'Acme Corp',                         // Page <h1> + Helmet <title>
  service: 'Full Stack Web Development',       // Left column label
  timeline: 'Jun 2025 - Aug 2025 (3 months)', // Center column label
  role: 'Software Engineer Intern',            // Right column label

  // --- TECH STACK (optional, rendered as icon + label chips) ---
  techStack: ['React.js', 'Node.js', 'AWS SQS', 'Docker'],
  // Each string must match a key in techIcons.jsx (see Step 4)
  // If omitted or empty, the tech stack section is hidden

  // --- INTRO ---
  description: 'At Acme Corp, I built...',     // Intro paragraph + OG meta description

  // --- HERO IMAGES (optional, rendered full-width below header) ---
  images: [
    {
      src: '/companies/acme/hero.jpg',
      alt: 'Acme Corp office building',
      className: ''  // Optional CSS class (e.g. for custom sizing)
    }
  ],
  // Set to [] if no hero images

  // --- CONTENT SECTIONS (rendered in order, each scroll-animated) ---
  sections: [
    // ... see section types below
  ]
};
```

**Section types** — each section in the `sections[]` array must have a `contentType`. There are three types:

##### `"paragraph"` — Text block with optional images below

```js
{
  headerType: 'h3',           // One of 'h1'-'h6' (h3 recommended for consistency)
  title: 'FRONTEND DEVELOPMENT',
  contentType: 'paragraph',
  content: 'Built an interactive interface in React.js that...',  // Single string
  images: [                   // Optional, rendered below the text
    { src: '/companies/acme/diagram.jpg', alt: 'Architecture diagram' }
  ]
}
```

##### `"list"` — Bullet list with optional images below

```js
{
  headerType: 'h3',
  title: 'KEY ACHIEVEMENTS',
  contentType: 'list',
  content: [                 // Array of strings, each becomes a <li>
    'Reduced API latency by 40% through query optimization.',
    'Implemented real-time WebSocket notifications.',
    'Achieved 95% test coverage across all modules.'
  ],
  images: []
}
```

##### `"demonstration"` — Side-by-side text + image (for demos/showcases)

```js
{
  headerType: 'h3',
  title: 'SEND A MESSAGE',
  contentType: 'demonstration',
  position: 'left',          // 'left' = text left / image right
                              // 'right' = image left / text right
  content: 'Ask any question regarding data...',  // Single string
  images: [
    { src: '/companies/acme/demo.gif', alt: 'Demo of sending a message' }
  ]
}
```

**Demonstration position pattern:** Alternate `position` between `"left"` and `"right"` for visual variety when you have consecutive demonstration sections (see `kdan.js` for an example).

**Full data file validation:** `ArticlePage.propTypes` validates the shape at runtime. Required fields will produce console warnings if missing:
- `title`, `service`, `timeline`, `role`, `description` — all required strings
- `sections` — required array, each section needs `title` (string) and `contentType` (one of the three types)
- `content` — required, must be a string for `paragraph`/`demonstration` or an array of strings for `list`
- `images`, `techStack`, `position`, `headerType`, `className` — all optional

#### Step 4 — Add tech stack icons (if needed)

If your `techStack` array uses tech names not already in `src/data/techIcons.jsx`, you need to add mappings.

1. Find the icon name from the `react-icons` Simple Icons set (`react-icons/si`). Browse available icons at https://react-icons.github.io/react-icons/icons/si/
2. Add the import and mapping:

```js
// In techIcons.jsx — add to the import block:
import { SiPostgresql } from 'react-icons/si';

// Add to the techIcons object:
const techIcons = {
  // ... existing entries
  'PostgreSQL': SiPostgresql,
};
```

**Currently mapped tech names (16 total):** `Node.js`, `Express`, `Next.js`, `AWS SQS`, `MySQL`, `Docker`, `React.js`, `React Native`, `Python`, `BigQuery`, `SQL`, `LangChain`, `Streamlit`, `GitLab CI/CD`, `Hugo`, `Go`, `Figma`

If a tech name has no icon available, it will still render as a text label — just without an icon next to it. This is handled gracefully in `ArticlePage.jsx`:
```js
{IconComponent && <IconComponent aria-hidden="true" />}
<span className="tech-stack-label">{tech}</span>
```

#### Step 5 — Register the article in `src/data/articles.js`

Import your data object and add it to the map:

```js
import { kdanData } from './kdan';
import { nagoyaData } from './nagoya';
import { adonitData } from './adonit';
import { elasaData } from './elasa';
import { acmeData } from './acme';       // Add import

const articles = {
  kdan: kdanData,
  nagoya: nagoyaData,
  adonit: adonitData,
  elasa: elasaData,
  acme: acmeData,                         // Add entry — key MUST match the item id
};

export default articles;
```

**Critical:** The key in this map (e.g. `acme`) is what the `/:id` dynamic route uses to look up the article. It must exactly match:
- The `id` field in `workItems.js`
- The path segment in the `link` field (e.g. `link: '/acme'` → key `acme`)

If the key doesn't match, `DynamicArticlePage` will render `<NotFoundPage />` instead.

#### Step 6 — No routing changes needed

The existing `/:id` dynamic route in `App.jsx` handles all article pages automatically:

```jsx
<Route path="/:id" element={<DynamicArticlePage />} />
```

`DynamicArticlePage` reads the `:id` param, looks it up in the `articles` map, and either renders `<ArticlePage data={...} />` or `<NotFoundPage />`. No changes to `App.jsx` are required.

React Router v6 ranks static routes (`/experience`, `/projects`, `/about`) higher than the dynamic `/:id`, so there's no risk of your new article shadowing an existing page — **unless** your id matches an existing static route name. Avoid ids like `experience`, `projects`, `about`, or `work`.

#### Step 7 — Add to sitemap

Add the new URL to `public/sitemap.xml`:

```xml
<url>
  <loc>https://willkung.com/acme</loc>
  <priority>0.6</priority>
</url>
```

Use `0.6` priority for article pages (consistent with existing entries).

---

### Quick Reference: Files Touched Per Tier

| File | Tier 1 | Tier 2 | Tier 3 |
|---|---|---|---|
| `public/companies/<slug>.jpg` | Yes | Yes | Yes |
| `public/companies/<slug>/` (image dir) | — | — | Yes |
| `src/data/workItems.js` | Yes | Yes | Yes |
| `src/data/<slug>.js` (new file) | — | — | Yes |
| `src/data/articles.js` | — | — | Yes |
| `src/data/techIcons.jsx` | — | — | If new tech |
| `public/sitemap.xml` | — | — | Yes |
| `src/App.jsx` | — | — | — |

### Common Mistakes to Avoid

1. **Relative image paths** — Always use `/companies/...` (absolute), never `./companies/...` (relative). Vite serves `public/` at the root.
2. **Mismatched id/link/articles key** — The `id` in `workItems.js`, the path in `link`, and the key in `articles.js` must all align. Example: `id: 'acme'`, `link: '/acme'`, `articles: { acme: acmeData }`.
3. **Using a reserved route name as id** — Don't use `experience`, `projects`, `about`, `work`, or any other existing static route as an article id.
4. **Missing `contentType`** — Every section object must have `contentType` set to `"paragraph"`, `"list"`, or `"demonstration"`. Omitting it causes the section to render nothing.
5. **Wrong `content` type for `contentType`** — `paragraph` and `demonstration` expect a string. `list` expects an array of strings. Swapping them causes PropTypes warnings and broken rendering.
6. **Forgetting `position` for demonstrations** — The `demonstration` type requires `position: 'left'` or `'right'`. Without it, the layout defaults but may look unexpected.
7. **Large uncompressed images** — Compress images before committing. Use JPEG for photos, PNG only for images requiring transparency. Aim for < 200KB per image.
8. **Unescaped quotes in JSX strings** — If your content text contains apostrophes or quotes, use template literals (backticks) in the data file to avoid issues. The data files are plain JS, not JSX, so HTML entities like `&apos;` are not needed here — those are only required in `.jsx` files.

### Adding a New Static Page (Non-Article)

If you need a page that isn't data-driven (e.g. a contact page, a resume page), use this approach instead:

1. Create `src/pages/NewPage.jsx` with a `<Helmet>` title:
   ```jsx
   import { Helmet } from 'react-helmet-async';
   import { motion } from 'framer-motion';
   import { defaultPageFadeInVariants } from '../motionUtils';

   const NewPage = () => (
     <motion.div className="page" {...defaultPageFadeInVariants}>
       <Helmet>
         <title>Page Title | Will Kung</title>
       </Helmet>
       {/* Page content */}
     </motion.div>
   );

   export default NewPage;
   ```
2. Add a lazy import in `App.jsx`:
   ```js
   const NewPage = lazy(() => import('./pages/NewPage'));
   ```
3. Add a `<Route>` in the `<Routes>` block **above** the `/:id` route to ensure static priority:
   ```jsx
   <Route path="/newpage" element={<NewPage />} />
   ```
4. Optionally add to `navigationLinks` in `src/data/siteConfig.js` if it should appear in the navbar.
5. Add the URL to `public/sitemap.xml`.

---

## Known TODOs / Tech Debt

- **TypeScript migration** — currently pure JS with PropTypes
- **Test coverage** — 0% currently; target 80%
- **CI/CD pipeline** — no GitHub Actions yet
- **Chatbot GIFs** → `<video>` elements (~3MB savings)
- **NavigationContext** → could be simplified to a standalone hook
- **Orphaned files:** `public/companies/nagoya/nagoya.jpg` and `public/companies/triniti.png` are unused
- **Sitemap:** Missing `/elasa` entry
- **FrontPage** uses inline styles for "View All Experience" link alignment

---

## Updating This File

Keep this file in sync with the codebase. When making changes:

- **New component/page:** Add to File Structure, Component Inventory, and Routing sections
- **New data file:** Add to Data Architecture section
- **New dependency:** Add to Tech Stack table
- **New route:** Add to Routing table and sitemap.xml
- **CSS variable change:** Update Styling section
- **Motion variant change:** Update Motion section
- **Resolved TODO:** Remove from Known TODOs section
