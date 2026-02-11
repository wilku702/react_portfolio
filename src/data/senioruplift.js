export const seniorUpliftData = {
  title: 'SeniorUplift',
  service: 'Full-Stack Web Application',
  timeline: 'Aug 2024 - Dec 2024 (4 months)',
  role: 'Developer & Phase 4 Lead',
  githubUrl: 'https://github.com/wilku702/SeniorUplift',
  techStack: ['React.js', 'Python', 'Flask', 'MySQL', 'AWS', 'D3.js', 'Docker', 'Selenium'],
  description: `SeniorUplift is a full-stack web application built for CS 373 (Software Engineering) at UT Austin. It aggregates welfare support information for the elderly population in Texas — healthcare centers, nursing homes, and entertainment — all interconnected through geographic proximity.`,
  images: [
    {
      src: '/projects/senioruplift/01-home.png',
      alt: 'SeniorUplift landing page with hero section and feature cards'
    }
  ],
  sections: [
    {
      headerType: 'h3',
      title: 'ARCHITECTURE',
      contentType: 'paragraph',
      content:
        'Built with a React 18 front-end communicating over HTTP with a Flask REST API backed by a MySQL database on AWS RDS. Data was ingested from three external sources — ahd.com (Selenium), Google Maps Places API, and Eventbrite (Selenium) — and linked through many-to-many relationships based on geographic proximity.',
      images: []
    },
    {
      headerType: 'h3',
      title: 'BROWSE NURSING HOMES',
      contentType: 'demonstration',
      position: 'left',
      content: 'Browse nursing homes across Texas with sorting, filtering, search, and pagination.',
      images: [
        {
          src: '/projects/senioruplift/02-nursing-homes.png',
          alt: 'Nursing Homes list page with card grid and filter controls'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'NURSING HOME DETAILS',
      contentType: 'demonstration',
      position: 'right',
      content: 'View detailed information for each nursing home, including nearby healthcare centers and entertainment options.',
      images: [
        {
          src: '/projects/senioruplift/03-nursing-home-detail.png',
          alt: 'Nursing Home detail page for Sunrise Senior Living'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'BROWSE HEALTHCARE CENTERS',
      contentType: 'demonstration',
      position: 'left',
      content: 'Explore hospitals and medical facilities with data on beds, discharges, patient days, and revenue.',
      images: [
        {
          src: '/projects/senioruplift/04-healthcare-centers.png',
          alt: 'Healthcare Centers list page with sortable card grid'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'HEALTHCARE CENTER DETAILS',
      contentType: 'demonstration',
      position: 'right',
      content: 'Each healthcare center links to nearby nursing homes and entertainment, creating a connected resource network.',
      images: [
        {
          src: '/projects/senioruplift/05-healthcare-detail.png',
          alt: 'Healthcare detail page for Austin Regional Medical Center'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'BROWSE ENTERTAINMENT',
      contentType: 'demonstration',
      position: 'left',
      content: 'Discover senior-friendly events and activities across Texas, filterable by category and cost.',
      images: [
        {
          src: '/projects/senioruplift/06-entertainment.png',
          alt: 'Entertainment list page showing senior events'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'ENTERTAINMENT DETAILS',
      contentType: 'demonstration',
      position: 'right',
      content: 'View event details including venue, time, cost, and nearby healthcare and nursing home resources.',
      images: [
        {
          src: '/projects/senioruplift/07-entertainment-detail.png',
          alt: 'Entertainment detail page for Senior Jazz Night'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'DATA VISUALIZATIONS',
      contentType: 'paragraph',
      content:
        'Built interactive D3.js visualizations including a bar chart of entertainment event frequency by category, a bubble map showing nursing home distribution across Texas using TopoJSON, and a bubble chart of hospital density by city.',
      images: [
        {
          src: '/projects/senioruplift/08-visualizations.png',
          alt: 'D3.js visualizations: bar chart, bubble map, and bubble chart'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'BACKEND & DATA PIPELINE',
      contentType: 'paragraph',
      content:
        'Developed a Flask REST API with SQLAlchemy ORM supporting sorting, searching, and filtering across all endpoints. Scraped data from ahd.com and Eventbrite using Selenium, and queried the Google Maps Places API for nursing home data. Deployed on AWS with Docker containerization.',
      images: []
    },
    {
      headerType: 'h3',
      title: 'SEARCH',
      contentType: 'paragraph',
      content:
        'Implemented full-text search across all three models with keyword highlighting and a tabbed interface to switch between Healthcare, Nursing Homes, and Entertainment results.',
      images: [
        {
          src: '/projects/senioruplift/10-search-results.png',
          alt: 'Search results for "austin" with keyword highlighting'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'ABOUT & TEAM',
      contentType: 'paragraph',
      content:
        'The About page dynamically fetches team contribution stats from the GitLab API — commits, issues, and pipeline counts per member — providing full transparency on project contributions.',
      images: [
        {
          src: '/projects/senioruplift/09-about.png',
          alt: 'About page showing team members and GitLab contribution stats'
        }
      ]
    }
  ]
};
