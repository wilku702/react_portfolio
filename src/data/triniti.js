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
      contentType: 'demonstration',
      position: 'right',
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
      title: 'ADD ACTIVITY',
      contentType: 'demonstration',
      position: 'left',
      content:
        'A modal lets staff add activities with a title, scrollable icon-based category picker, and native date/time selectors. Activities appear instantly via optimistic UI updates before syncing to Firestore.',
      images: [
        {
          src: '/projects/triniti/gif_02_add_activity.gif',
          alt: 'Full flow of adding a new activity: title input, category selection, and submission'
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
      title: 'FAMILY PORTAL',
      contentType: 'demonstration',
      position: 'right',
      content:
        'Family members see the same activity schedule, appointments, and mood data as staff \u2014 but in a read-only view with no add, edit, or delete controls. The same components are reused with role-based feature toggling, and family accounts are intelligently linked to patients via email matching.',
      images: [
        {
          src: '/projects/triniti/14_family_activities.png',
          alt: 'Family portal showing read-only view of patient activities without edit controls'
        }
      ]
    }
  ]
};
