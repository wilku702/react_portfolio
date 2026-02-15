export const trinitiData = {
  title: 'Triniti',
  service: 'Mobile Application',
  timeline: 'Aug 2024 - Dec 2024 (4 months)',
  role: 'Full Stack Developer',
  githubUrl: 'https://github.com/wilku702/Triniti',
  techStack: ['React Native', 'Firebase', 'Node.js'],
  description: `Triniti is a mobile app for nursing home management built with React Native and Firebase. It bridges the communication gap between care facility staff and residents\u2019 families through two dedicated portals \u2014 a Staff Portal for managing patient schedules, mood tracking, and messaging, and a Family Portal for read-only visibility into a loved one\u2019s daily care.`,
  images: [
    {
      src: '/projects/triniti/01_start_page.png',
      alt: 'Triniti welcome screen with hero illustration and dual login buttons for Staff and Family portals'
    }
  ],
  sections: [
    {
      headerType: 'h3',
      title: 'ARCHITECTURE',
      contentType: 'paragraph',
      content:
        'Built on a React Native / Expo 51 front-end with Firebase Authentication for role-based login and Cloud Firestore for real-time data persistence. The app follows a Context \u2192 Hooks \u2192 Services \u2192 Components architecture with 11 reusable shared components, custom hooks for data fetching and optimistic updates, and a centralized Firestore service layer.',
      images: []
    },
    {
      headerType: 'h3',
      title: 'LOGIN SYSTEM',
      contentType: 'gallery',
      columns: 2,
      content:
        'Triniti provides dual authentication paths for role-based access. Staff login with email and password for full CRUD operations, while family members authenticate with email to access read-only views of their loved one\u2019s care.',
      images: [
        {
          src: '/projects/triniti/03_staff_login_filled.png',
          alt: 'Staff login screen with email and password fields filled',
          caption: 'Staff Login'
        },
        {
          src: '/projects/triniti/13_family_login.png',
          alt: 'Family login screen with email field',
          caption: 'Family Login'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'PATIENT DASHBOARD',
      contentType: 'demonstration',
      position: 'left',
      content:
        'Staff land on a patient grid showing all residents with photos and names. A real-time search bar filters patients instantly as you type, powered by memoized card components for smooth scrolling performance.',
      images: [
        {
          src: '/projects/triniti/gif_01_dashboard_search.gif',
          alt: 'Dashboard with real-time search filtering patients by name'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'ACTIVITY MANAGEMENT',
      contentType: 'feature-highlight',
      content:
        'Each patient has a daily activity schedule grouped by date with a Today badge. Staff can create, view, and delete activities across 10 categories \u2014 Yoga, Reading, Music, Games, Painting, Walking, Crafts, Garden, Meal, and Movie.',
      images: [
        {
          src: '/projects/triniti/05_activities_tab.png',
          alt: 'Patient activity schedule with Today badge and activity cards'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'ADD ACTIVITY FLOW',
      contentType: 'gallery',
      columns: 3,
      content:
        'Creating an activity involves selecting a category, setting a time, and adding details. Changes appear instantly via optimistic UI updates before syncing to Firestore.',
      images: [
        {
          src: '/projects/triniti/06_add_activity_modal.png',
          alt: 'Add activity modal with category picker',
          caption: 'Category Selection'
        },
        {
          src: '/projects/triniti/06b_add_activity_filled.png',
          alt: 'Add activity modal with all fields filled',
          caption: 'Details Entered'
        },
        {
          src: '/projects/triniti/07_activity_detail.png',
          alt: 'Activity detail view showing full information',
          caption: 'Activity Detail'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'MOOD TRACKING',
      contentType: 'demonstration',
      position: 'right',
      content:
        'An interactive calendar displays color-coded emoji indicators across a 5-level mood scale: Great, Good, Okay, Low, and Bad. Staff log one mood entry per day per patient, and tapping a calendar day filters the history below.',
      images: [
        {
          src: '/projects/triniti/gif_04_mood_calendar.gif',
          alt: 'Mood calendar with color-coded days and mood logging interaction'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'REAL-TIME CHAT',
      contentType: 'demonstration',
      position: 'left',
      content:
        'Direct messaging between staff and family about a specific patient, powered by Firestore\u2019s onSnapshot listener for instant delivery. Messages display sender name, role, and relative timestamps in a familiar bubble UI.',
      images: [
        {
          src: '/projects/triniti/gif_05_chat_send.gif',
          alt: 'Chat conversation showing real-time message sending between staff and family'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'DUAL PORTAL EXPERIENCE',
      contentType: 'comparison',
      leftSide: {
        label: 'Staff Portal',
        content: 'Full CRUD access to patient data, activities, mood logs, and real-time messaging. Staff can create, edit, and delete entries across all modules.',
        image: {
          src: '/projects/triniti/05_activities_tab.png',
          alt: 'Staff portal showing full activity management with edit controls'
        }
      },
      rightSide: {
        label: 'Family Portal',
        content: 'Read-only visibility with real-time updates from the care team. Same UI components with role-based feature toggling ensure a consistent experience.',
        image: {
          src: '/projects/triniti/14_family_activities.png',
          alt: 'Family portal showing read-only view of patient activities without edit controls'
        }
      }
    }
  ]
};
