export const seniorUpliftData = {
  title: 'SeniorUplift',
  service: 'Full-Stack Web Application',
  timeline: 'Aug 2024 - Dec 2024 (4 months)',
  role: 'Developer & Phase 4 Lead',
  githubUrl: 'https://github.com/wilku702/SeniorUplift',
  techStack: ['React.js', 'Python', 'Flask', 'MySQL', 'AWS', 'D3.js', 'Docker', 'Selenium'],
  description: `SeniorUplift is a full-stack web application built for CS 373 (Software Engineering) at UT Austin. It aggregates welfare support information for the elderly population in Texas \u2014 healthcare centers, nursing homes, and entertainment \u2014 all interconnected through geographic proximity.`,
  images: [
    {
      src: '/projects/senioruplift/01-home.jpg',
      alt: 'SeniorUplift landing page with hero section and feature cards'
    }
  ],
  sections: [
    {
      headerType: 'h3',
      title: 'ARCHITECTURE',
      contentType: 'paragraph',
      content:
        'Built with a React 18 front-end communicating over HTTP with a Flask REST API backed by a MySQL database on AWS RDS. Data was ingested from three external sources \u2014 ahd.com (Selenium), Google Maps Places API, and Eventbrite (Selenium) \u2014 and linked through many-to-many relationships based on geographic proximity.',
      images: []
    },
    {
      headerType: 'h3',
      title: 'RESOURCE BROWSER',
      contentType: 'showcase',
      deviceFrame: 'browser',
      content:
        'Explore nursing homes, healthcare centers, and entertainment options with sorting, filtering, search, and pagination across all three resource types.',
      images: [
        {
          src: '/projects/senioruplift/02-nursing-homes.jpg',
          alt: 'Nursing Homes list page with card grid and filter controls',
          caption: 'Nursing Homes'
        },
        {
          src: '/projects/senioruplift/04-healthcare-centers.jpg',
          alt: 'Healthcare Centers list page with sortable card grid',
          caption: 'Healthcare Centers'
        },
        {
          src: '/projects/senioruplift/06-entertainment.jpg',
          alt: 'Entertainment list page showing senior events',
          caption: 'Entertainment'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'RESOURCE DETAILS',
      contentType: 'showcase',
      deviceFrame: 'browser',
      content: 'View detailed information for each resource, including nearby healthcare centers and entertainment options, creating a connected resource network.',
      images: [
        {
          src: '/projects/senioruplift/03-nursing-home-detail.jpg',
          alt: 'Nursing Home detail page for Sunrise Senior Living',
          caption: 'Nursing Home Details',
          description: 'View detailed information for each nursing home, including nearby healthcare centers and entertainment options.'
        },
        {
          src: '/projects/senioruplift/05-healthcare-detail.jpg',
          alt: 'Healthcare detail page for Austin Regional Medical Center',
          caption: 'Healthcare Details',
          description: 'Each healthcare center links to nearby nursing homes and entertainment, creating a connected resource network.'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'ENTERTAINMENT',
      contentType: 'showcase',
      deviceFrame: 'browser',
      content: 'Discover senior-friendly events and activities across Texas, filterable by category and cost.',
      images: [
        {
          src: '/projects/senioruplift/06-entertainment.jpg',
          alt: 'Entertainment list page showing senior events'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'ENTERTAINMENT DETAILS',
      contentType: 'showcase',
      deviceFrame: 'browser',
      content: 'View event details including venue, time, cost, and nearby healthcare and nursing home resources.',
      images: [
        {
          src: '/projects/senioruplift/07-entertainment-detail.jpg',
          alt: 'Entertainment detail page for Senior Jazz Night'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'DATA VISUALIZATIONS',
      contentType: 'showcase',
      deviceFrame: 'browser',
      content:
        'Built interactive D3.js visualizations including a bar chart of entertainment event frequency by category, a bubble map showing nursing home distribution across Texas using TopoJSON, and a bubble chart of hospital density by city.',
      images: [
        {
          src: '/projects/senioruplift/08-visualizations.jpg',
          alt: 'D3.js visualizations: bar chart, bubble map, and bubble chart'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'BACKEND & DATA PIPELINE',
      contentType: 'split-content',
      content:
        'Developed a Flask REST API with SQLAlchemy ORM supporting sorting, searching, and filtering across all endpoints. Deployed on AWS with Docker containerization.',
      list: [
        'Selenium scrapers for ahd.com and Eventbrite',
        'Google Maps Places API for nursing home data',
        'MySQL on AWS RDS with geographic linking',
        'Docker containerization for reproducible builds',
        'Full-text search with keyword highlighting'
      ],
      images: [
        {
          src: '/projects/senioruplift/10-search-results.jpg',
          alt: 'Search results for "austin" with keyword highlighting'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'ABOUT & TEAM',
      contentType: 'paragraph',
      content:
        'The About page dynamically fetches team contribution stats from the GitLab API \u2014 commits, issues, and pipeline counts per member \u2014 providing full transparency on project contributions.',
      images: [
        {
          src: '/projects/senioruplift/09-about.jpg',
          alt: 'About page showing team members and GitLab contribution stats'
        }
      ]
    }
  ]
};
