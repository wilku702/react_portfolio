# Portfolio Data Context

This document explains how to create new company/project data for Will Kung's React portfolio. Give this to another AI chatbot so it can generate properly structured content.

## How It Works

There are two data layers:

1. **Card data** (`src/data/workItems.js`) — the tile shown on the Experience/Projects page
2. **Article data** (`src/data/<company>.js`) — the full article page content

If a company has an article page, both files are needed. If it only appears as a card (no detail page), only the card entry is needed.

---

## 1. Card Entry (workItems.js)

Each card in `workItems.js` is an object in either `internshipItems` or `projectItems`:

```js
{
  id: 'companyname',          // URL-safe slug, used as route: /companyname
  title: 'Company Name',      // Display name on card
  link: '/companyname',        // Internal route (matches id) OR external URL OR '' for coming soon
  backgroundImage: '/companies/companyname.jpg',  // Image in public/companies/
  emojiLink: '🔧',            // Decorative emoji (not displayed, legacy field)
  details: 'React | Python | AWS',  // Pipe-separated tech stack shown as tags
  description: 'One sentence describing the work done.',
  type: 'internship'          // 'internship' or 'project'
}
```

**Link rules:**
- `/companyname` — internal article page (needs article data file)
- `https://...` — opens external link confirmation modal
- `''` (empty string) — card shows "Coming soon" badge and is non-clickable

---

## 2. Article Data File (src/data/<company>.js)

Create a new file like `src/data/newcompany.js`:

```js
export const newcompanyData = {
  title: 'Company Name Internship',
  service: 'What you built',
  timeline: 'Jun 2025 - Aug 2025 (3 months)',
  role: 'Software Engineer Intern',
  description: `Summary paragraph about the work.`,
  images: [
    {
      src: '/companies/newcompany/hero.jpg',
      alt: 'Descriptive alt text for the hero image'
    }
  ],
  sections: [
    // ... section objects (see below)
  ]
};
```

### Section Types

Each section in the `sections` array has one of three `contentType` values:

#### `paragraph` — text with optional images

```js
{
  headerType: 'h3',
  title: 'SECTION TITLE',
  contentType: 'paragraph',
  content: 'A paragraph of text describing this part of the project.',
  images: [
    {
      src: '/companies/newcompany/screenshot.jpg',
      alt: 'Descriptive alt text'
    }
  ]
}
```

#### `list` — bullet points with optional images

```js
{
  headerType: 'h3',
  title: 'KEY FEATURES',
  contentType: 'list',
  content: [
    'First bullet point',
    'Second bullet point',
    'Third bullet point'
  ],
  images: []
}
```

#### `demonstration` — side-by-side text + image (for demos/GIFs)

```js
{
  headerType: 'h3',
  title: 'DEMO TITLE',
  contentType: 'demonstration',
  position: 'left',   // 'left' = text left, image right. 'right' = opposite.
  content: 'Short description of what the demo shows.',
  images: [
    {
      src: '/companies/newcompany/demo.gif',
      alt: 'Demo of the feature in action'
    }
  ]
}
```

---

## 3. Register the Article

After creating the data file, add it to `src/data/articles.js`:

```js
import { kdanData } from './kdan';
import { nagoyaData } from './nagoya';
import { adonitData } from './adonit';
import { newcompanyData } from './newcompany';  // add import

const articles = {
  kdan: kdanData,
  nagoya: nagoyaData,
  adonit: adonitData,
  newcompany: newcompanyData  // add entry (key must match the id in workItems.js)
};

export default articles;
```

No route changes needed — the dynamic `/:id` route in App.jsx automatically picks it up.

---

## 4. Image Assets

Place images in `public/companies/<companyname>/`:

```
public/
  companies/
    newcompany/
      hero.jpg        (card background + article hero)
      screenshot.jpg
      demo.gif
    newcompany.jpg     (card background if not using subfolder)
```

**Rules:**
- Use absolute paths starting with `/companies/...`
- Prefer JPEG over PNG (smaller files)
- Keep images under 200KB each
- All `<img>` tags must have descriptive `alt` text (not generic like "image")

---

## Full Example: Adding "Acme Corp"

### Step 1: Card in workItems.js

```js
// Add to internshipItems array:
{
  id: 'acme',
  title: 'Acme Corp',
  link: '/acme',
  backgroundImage: '/companies/acme.jpg',
  emojiLink: '🚀',
  details: 'Next.js | PostgreSQL | Redis | Docker',
  description:
    'Built a real-time inventory management system serving 500+ warehouses with sub-second query latency using PostgreSQL partitioning and Redis caching.',
  type: 'internship'
}
```

### Step 2: Article data file (src/data/acme.js)

```js
export const acmeData = {
  title: 'Acme Corp Internship',
  service: 'Inventory Management System',
  timeline: 'Jun 2025 - Aug 2025 (3 months)',
  role: 'Backend Engineer Intern',
  description: `At Acme Corp, I designed and built a real-time inventory management system that handles 500+ warehouses, replacing a legacy batch-processing pipeline with a live streaming architecture.`,
  images: [
    {
      src: '/companies/acme/hero.jpg',
      alt: 'Acme Corp office and engineering team'
    }
  ],
  sections: [
    {
      headerType: 'h3',
      title: 'SYSTEM ARCHITECTURE',
      contentType: 'paragraph',
      content: 'Designed a microservices architecture using Next.js API routes, PostgreSQL with table partitioning for time-series inventory data, and Redis for hot-path caching of warehouse availability queries.',
      images: [
        {
          src: '/companies/acme/architecture.jpg',
          alt: 'System architecture diagram showing microservices flow'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'REAL-TIME DASHBOARD',
      contentType: 'demonstration',
      position: 'left',
      content: 'Live dashboard showing warehouse stock levels updating in real-time via WebSocket connections.',
      images: [
        {
          src: '/companies/acme/dashboard.gif',
          alt: 'Demo of real-time inventory dashboard updating'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'KEY RESULTS',
      contentType: 'list',
      content: [
        'Reduced query latency from 12s to under 200ms',
        'Handled 10,000+ concurrent WebSocket connections',
        'Processed 2M+ inventory events per day'
      ],
      images: []
    }
  ]
};
```

### Step 3: Register in articles.js

```js
import { acmeData } from './acme';
// ... add to articles object:
// acme: acmeData
```

### Step 4: Add images to public/companies/acme/

Done. The page is now live at `/acme`.
