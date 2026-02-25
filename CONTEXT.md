# Portfolio Content Guide

This document explains how to add new experience/project content to Will Kung's React portfolio. Give this to an AI chatbot so it can generate properly structured data files.

## How It Works

There are two data layers:

1. **Card data** (`src/data/workItems.js`) — the tile shown on the Experience or Projects page
2. **Article data** (`src/data/<slug>.js`) — the full article page content

If a card has an article page, both files are needed. If it only appears as a card (no detail page), only the card entry is needed.

---

## 1. Card Entry (workItems.js)

Cards live in one of two exported arrays: `internshipItems` or `projectItems`. A third export, `featuredItems`, controls which cards appear on the home page.

```js
{
  id: 'companyname',
  title: 'Company Name',
  link: '/companyname',
  backgroundImage: '/companies/companyname.jpg',
  details: 'React.js | Python | AWS',
  description: 'One sentence describing the work done.'
}
```

### Card fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | yes | URL-safe slug — used as the route (`/companyname`) and the key in `articles.js` |
| `title` | string | yes | Display name on the card |
| `link` | string | yes | Internal route, external URL, or `''` (see link rules below) |
| `backgroundImage` | string | yes | Absolute path to card image in `public/` (e.g. `/companies/companyname.jpg`) |
| `backgroundStyle` | object | no | CSS overrides for the card background (see below) |
| `details` | string | yes | Pipe-separated tech stack shown as tags (e.g. `'React.js \| Python \| AWS'`) |
| `description` | string | yes | Short description of the work |

### `backgroundStyle` (optional)

Override the default card background CSS when the image needs special treatment (e.g. SVG logos that shouldn't cover-fill):

```js
backgroundStyle: {
  backgroundSize: 'contain',
  backgroundColor: '#009999',
  backgroundPosition: 'center'
}
```

### Link rules

| Value | Behavior |
|-------|----------|
| `'/companyname'` | Internal article page — requires a matching article data file |
| `'https://...'` | Opens the external link confirmation modal |
| `''` (empty string) | Card shows a "Coming soon" badge and is non-clickable |

---

## 2. Article Data File (src/data/\<slug\>.js)

Create a new file like `src/data/newcompany.js`:

```js
export const newcompanyData = {
  title: 'Company Name Internship',
  service: 'What you built',
  timeline: 'Jun 2025 - Aug 2025 (3 months)',
  role: 'Software Engineer Intern',
  githubUrl: 'https://github.com/user/repo',
  techStack: ['React.js', 'Python', 'Flask'],
  description: `Summary paragraph about the work.`,
  images: [
    {
      src: '/companies/newcompany/hero.jpg',
      alt: 'Descriptive alt text for the hero image'
    }
  ],
  sections: [
    // ... section objects (see Section Types below)
  ]
};
```

### Top-level fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | yes | Page title (also used in `<title>` and Open Graph meta) |
| `service` | string | yes | What was built (shown in article header) |
| `timeline` | string | yes | Date range (e.g. `'Jun 2024 - Aug 2024 (3 months)'`) |
| `role` | string | yes | Job title or role |
| `githubUrl` | string | no | Full GitHub URL — renders a "View on GitHub" link in the article toolbar |
| `techStack` | string[] | no | Array of tech names — renders icon badges below the header (must match keys in `techIcons.jsx`, see [Available Tech Icons](#9-available-tech-stack-icons)) |
| `description` | string | yes | Summary paragraph displayed below the header metadata |
| `images` | image[] | no | Hero images displayed between the header and sections |
| `sections` | section[] | yes | Array of section objects (see below) |

### Hero images

Hero images support the `deviceFrame` property. Setting `deviceFrame: 'phone'` on a hero image wraps it in a phone device frame:

```js
images: [
  {
    src: '/projects/triniti/01_start_page.jpg',
    alt: 'App welcome screen',
    deviceFrame: 'phone'
  }
]
```

Without `deviceFrame`, the image renders as a standard full-width image. You can also use `className` to add a custom CSS class.

---

## 3. Section Types

Each item in the `sections` array has a `contentType` that determines how it renders. All sections share these common fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `headerType` | string | no | HTML heading tag: `'h1'` through `'h6'` (defaults to `'h1'`) |
| `title` | string | yes | Section heading text (conventionally UPPERCASE) |
| `contentType` | string | yes | One of the 8 types below |

---

### `paragraph` — text with optional images

A block of text with optional images below.

```js
{
  headerType: 'h3',
  title: 'SYSTEM ARCHITECTURE',
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

| Field | Type | Required |
|-------|------|----------|
| `content` | string | yes |
| `images` | image[] | no |

---

### `list` — bullet points with optional images

A bulleted list with optional images below.

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

| Field | Type | Required |
|-------|------|----------|
| `content` | string[] | yes |
| `images` | image[] | no |

---

### `demonstration` — side-by-side text + image

Text and image side by side, with configurable layout direction. Good for feature demos and GIF walkthroughs.

```js
{
  headerType: 'h3',
  title: 'DEMO TITLE',
  contentType: 'demonstration',
  position: 'left',
  content: 'Short description of what the demo shows.',
  images: [
    {
      src: '/companies/newcompany/demo.gif',
      alt: 'Demo of the feature in action'
    }
  ]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `content` | string | yes | Description text |
| `position` | `'left'` \| `'right'` | yes | `'left'` = text left, image right. `'right'` = image left, text right. |
| `images` | image[] | yes | Typically one image or GIF |

Animation: slides in from the left (position `'left'`) or from the right (position `'right'`).

---

### `gallery` — grid of images with captions

A responsive grid of images with optional captions. Supports staggered fade-in animation.

```js
{
  headerType: 'h3',
  title: 'MOMENTS',
  contentType: 'gallery',
  columns: 2,
  content: 'Optional description text above the gallery grid.',
  images: [
    {
      src: '/companies/kdan/hi_team.jpg',
      alt: 'Group photo with the team',
      caption: 'Team Photo'
    },
    {
      src: '/companies/kdan/aws.jpg',
      alt: 'Attending the AWS Summit',
      caption: 'AWS Summit'
    }
  ]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `content` | string | no | Description text above the grid |
| `columns` | `2` \| `3` | no | Grid columns (defaults to `2`) |
| `images` | image[] | yes | Images with optional `caption` |

---

### `feature-highlight` — hero-style image + text

A prominent image with text — no column split, just a heading, full-width image, and paragraph. Good for showcasing a single visual like a Figma design or architecture diagram.

```js
{
  headerType: 'h3',
  title: 'FIGMA DESIGN',
  contentType: 'feature-highlight',
  content: 'Description of the highlighted feature or design.',
  images: [
    {
      src: '/companies/kdan/figma.jpg',
      alt: 'Figma design mockups for the chatbot interface'
    }
  ]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `content` | string | no | Description text below the image |
| `images` | image[] | yes | Typically one hero image |

Animation: scales up into view.

---

### `split-content` — paragraph + bullet list side-by-side

A paragraph on the left and a bulleted list on the right, displayed side by side. Optional images render below. Good for pairing a description with a list of specifics.

```js
{
  headerType: 'h3',
  title: 'INTEGRATION AND TESTING',
  contentType: 'split-content',
  content: 'Description paragraph displayed on the left side.',
  list: [
    'First key point',
    'Second key point',
    'Third key point',
    'Fourth key point'
  ],
  images: [
    {
      src: '/companies/kdan/langfuse.jpg',
      alt: 'Dashboard showing tracing and evaluation'
    }
  ]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `content` | string | yes | Paragraph on the left |
| `list` | string[] | yes | Bullet points on the right |
| `images` | image[] | no | Images below the split layout |

Animation: left side slides from left, right side slides from right.

---

### `comparison` — before/after with two sides

Two columns for comparing states (e.g. before vs. after). Each side has a label, content, and optional image.

```js
{
  headerType: 'h3',
  title: 'WHAT CHANGED',
  contentType: 'comparison',
  leftSide: {
    label: 'Before',
    content: 'Description of the old state.',
    image: {
      src: '/companies/newcompany/before.jpg',
      alt: 'Screenshot of old UI'
    }
  },
  rightSide: {
    label: 'After',
    content: 'Description of the new state.',
    image: {
      src: '/companies/newcompany/after.jpg',
      alt: 'Screenshot of new UI'
    }
  },
  images: []
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `leftSide` | object | yes | Left comparison panel |
| `leftSide.label` | string | yes | Column heading (e.g. `'Before'`) |
| `leftSide.content` | string | yes | Description text |
| `leftSide.image` | image | no | Single image object (not an array) |
| `rightSide` | object | yes | Right comparison panel (same shape as `leftSide`) |
| `images` | image[] | no | Not typically used (pass `[]`) |

Animation: left side slides from left, right side slides from right.

---

### `showcase` — device-framed screenshots

Screenshots wrapped in a device frame (browser or phone) with optional captions and descriptions. The grid auto-adjusts to the number of images (max 3). Great for app screens and web page screenshots.

```js
{
  headerType: 'h3',
  title: 'RESOURCE BROWSER',
  contentType: 'showcase',
  deviceFrame: 'browser',
  content: 'Description text above the device screenshots.',
  images: [
    {
      src: '/projects/senioruplift/02-nursing-homes.jpg',
      alt: 'Nursing Homes list page with card grid',
      caption: 'Nursing Homes'
    },
    {
      src: '/projects/senioruplift/04-healthcare-centers.jpg',
      alt: 'Healthcare Centers list page',
      caption: 'Healthcare Centers',
      description: 'Extended description shown below the caption.'
    }
  ]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `content` | string | no | Description text above the device grid |
| `deviceFrame` | `'browser'` \| `'phone'` | no | Frame style. `'browser'` adds a title bar with dots. `'phone'` adds a phone bezel. Omit for no frame. |
| `images` | image[] | yes | 1–3 images with optional `caption` and `description` |

Image-level `caption` renders below the device frame. Image-level `description` renders below the caption.

---

## 4. Image Object Schema

Images appear in hero `images`, section `images`, and comparison side `image`. All share the same shape:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `src` | string | yes | Absolute path from `public/` (e.g. `'/companies/kdan/hero.jpg'`) |
| `alt` | string | yes | Descriptive alt text (not generic like "image" or "screenshot") |
| `caption` | string | no | Short label shown below image (used in `gallery` and `showcase`) |
| `description` | string | no | Extended text below caption (used in `showcase`) |
| `video` | boolean | no | Set to `true` to render as `<video>` instead of `<img>` (auto-plays, loops, muted) |
| `deviceFrame` | `'browser'` \| `'phone'` | no | On hero images only — wraps image in a device frame |
| `className` | string | no | Custom CSS class added to the `<img>` element |

**Note on `video`:** When `video: true`, the `src` should still point to a video file (`.mp4`, `.webm`). The `alt` text is used as `aria-label`. For GIFs, use a regular image (do not set `video: true`) — GIFs render natively as `<img>`.

---

## 5. Register the Article (articles.js)

After creating the data file, import and register it in `src/data/articles.js`:

```js
import { newcompanyData } from './newcompany';  // add import

const articles = {
  // ... existing entries
  newcompany: newcompanyData  // key MUST match the card's `id` in workItems.js
};

export default articles;
```

No route changes needed — the dynamic `/:id` route in `App.jsx` automatically resolves any slug registered here.

---

## 6. Image Assets

### Folder structure

```
public/
  companies/
    newcompany/
      hero.jpg
      screenshot.jpg
      demo.gif
    newcompany.jpg          ← card background (if not using a subfolder image)
    newcompany.svg          ← SVG logos work too
  projects/
    projectname/
      01-feature.jpg
      02-detail.jpg
```

Internship images go under `public/companies/`. Project images go under `public/projects/`.

### Rules

- Use absolute paths starting with `/companies/...` or `/projects/...`
- Prefer JPEG over PNG (smaller files)
- Keep images under 200 KB each
- All images **must** have descriptive `alt` text
- SVG logos may need `backgroundStyle` on the card (set `backgroundSize: 'contain'` and a `backgroundColor`)

---

## 7. Available Tech Stack Icons

The `techStack` array on an article maps to icons defined in `src/data/techIcons.jsx`. Only the names listed below will render with an icon — unlisted names render as text-only badges.

| Name | Icon |
|------|------|
| `Node.js` | Node.js |
| `Express` | Express |
| `Next.js` | Next.js |
| `AWS SQS` | Amazon SQS |
| `AWS` | Amazon Web Services |
| `MySQL` | MySQL |
| `Docker` | Docker |
| `React.js` | React |
| `React Native` | React |
| `Python` | Python |
| `BigQuery` | Google BigQuery |
| `SQL` | Google BigQuery |
| `LangChain` | LangChain |
| `Streamlit` | Streamlit |
| `GitLab CI/CD` | GitLab |
| `Hugo` | Hugo |
| `Go` | Go |
| `Figma` | Figma |
| `Flask` | Flask |
| `D3.js` | D3.js |
| `Selenium` | Selenium |
| `Firebase` | Firebase |
| `PostgreSQL` | PostgreSQL |
| `OpenAI API` | OpenAI |
| `Google OAuth` | Google |

To add a new icon, import it from `react-icons/si` and add the mapping in `techIcons.jsx`.

---

## 8. Full Example: Adding "Acme Corp"

### Step 1: Card in workItems.js

```js
// Add to internshipItems array:
{
  id: 'acme',
  title: 'Acme Corp',
  link: '/acme',
  backgroundImage: '/companies/acme/hero.jpg',
  details: 'Next.js | PostgreSQL | Redis | Docker',
  description:
    'Built a real-time inventory management system serving 500+ warehouses with sub-second query latency.'
}
```

### Step 2: Article data file (src/data/acme.js)

```js
export const acmeData = {
  title: 'Acme Corp Internship',
  service: 'Inventory Management System',
  timeline: 'Jun 2025 - Aug 2025 (3 months)',
  role: 'Backend Engineer Intern',
  githubUrl: 'https://github.com/user/acme-inventory',
  techStack: ['Next.js', 'PostgreSQL', 'Docker', 'AWS'],
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
      content:
        'Designed a microservices architecture using Next.js API routes, PostgreSQL with table partitioning for time-series data, and Redis for hot-path caching.',
      images: [
        {
          src: '/companies/acme/architecture.jpg',
          alt: 'System architecture diagram showing microservices flow'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'DASHBOARD',
      contentType: 'showcase',
      deviceFrame: 'browser',
      content: 'Live dashboard showing warehouse stock levels updating in real-time via WebSocket connections.',
      images: [
        {
          src: '/companies/acme/dashboard.jpg',
          alt: 'Real-time inventory dashboard',
          caption: 'Live Dashboard',
          description: 'Stock levels update in real-time via WebSocket connections.'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'BACKEND PIPELINE',
      contentType: 'split-content',
      content: 'An event-driven pipeline processes inventory updates through a message queue with at-least-once delivery guarantees.',
      list: [
        'PostgreSQL with table partitioning for time-series data',
        'Redis caching for sub-200ms query latency',
        'SQS message queue for async processing',
        'Docker containerized deployment on ECS'
      ],
      images: []
    },
    {
      headerType: 'h3',
      title: 'FIGMA DESIGNS',
      contentType: 'gallery',
      columns: 3,
      content: 'Worked with the design team to iterate on the dashboard UI.',
      images: [
        {
          src: '/companies/acme/design-v1.jpg',
          alt: 'Initial wireframe of the inventory dashboard',
          caption: 'V1 Wireframe'
        },
        {
          src: '/companies/acme/design-v2.jpg',
          alt: 'Revised high-fidelity mockup',
          caption: 'V2 Mockup'
        },
        {
          src: '/companies/acme/design-final.jpg',
          alt: 'Final shipped design',
          caption: 'Final'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'HERO FEATURE',
      contentType: 'feature-highlight',
      content: 'The real-time map view shows inventory movement across all 500+ warehouses, color-coded by stock level.',
      images: [
        {
          src: '/companies/acme/map.jpg',
          alt: 'Map view showing warehouse inventory levels across the US'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'REAL-TIME UPDATES',
      contentType: 'demonstration',
      position: 'left',
      content: 'Stock levels update within 500ms of warehouse scanners registering inventory changes.',
      images: [
        {
          src: '/companies/acme/realtime-demo.gif',
          alt: 'Demo of real-time inventory updates on the dashboard'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'IMPACT',
      contentType: 'comparison',
      leftSide: {
        label: 'Before',
        content: 'Batch processing ran every 6 hours. Warehouse managers relied on stale data for restocking decisions.',
        image: {
          src: '/companies/acme/before.jpg',
          alt: 'Old batch processing dashboard with 6-hour delay'
        }
      },
      rightSide: {
        label: 'After',
        content: 'Real-time streaming delivers sub-second updates. Restocking alerts trigger automatically based on live thresholds.',
        image: {
          src: '/companies/acme/after.jpg',
          alt: 'New real-time dashboard with instant updates'
        }
      }
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

```
public/companies/acme/
  hero.jpg
  architecture.jpg
  dashboard.jpg
  design-v1.jpg
  design-v2.jpg
  design-final.jpg
  map.jpg
  realtime-demo.gif
  before.jpg
  after.jpg
```

Done. The page is now live at `/acme`.
