export const codeassistData = {
  title: 'CodeAssist',
  service: 'AI-Powered Academic Coding Platform',
  timeline: 'Jan 2025 - May 2025 (5 months)',
  role: 'Full Stack Developer',
  githubUrl: 'https://github.com/wilku702/CodeAssist',
  techStack: ['React.js', 'Flask', 'PostgreSQL', 'Docker', 'OpenAI API', 'Google OAuth'],
  description: `CodeAssist is a free, open-source coding platform for UT Austin that auto-grades student submissions in Docker sandboxes and generates adaptive, line-level AI feedback that learns from each student's recurring mistakes over time.`,
  images: [
    {
      src: '/projects/codeassist/01_landing_page.png',
      alt: 'CodeAssist landing page with sign up, log in, and Google OAuth options'
    }
  ],
  sections: [
    {
      headerType: 'h3',
      title: 'AUTOGRADER PIPELINE',
      contentType: 'showcase',
      deviceFrame: 'browser',
      content: 'Instructors upload autograder ZIP files built into Docker images. Each submission runs in an isolated container with configurable timeouts. Students see their grade and individual test case results seconds after submission.',
      images: [
        {
          src: '/projects/codeassist/09_configure_autograder.png',
          alt: 'Autograder configuration page with ZIP upload and timeout settings',
          caption: 'Instructor Config',
          description: 'Instructors upload autograder ZIP files built into Docker images. Each submission runs in an isolated container with configurable timeouts.'
        },
        {
          src: '/projects/codeassist/12_student_results.png',
          alt: 'Autograder results showing 12 test cases with pass/fail status',
          caption: 'Student Results',
          description: 'Students see their grade and individual test case results seconds after submission — pass/fail status and points per case.'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'AI FEEDBACK ENGINE',
      contentType: 'showcase',
      deviceFrame: 'browser',
      content:
        'Instructors configure AI feedback per course — choosing between GPT-4-turbo, GPT-4o, or Gemini with custom prompts and temperature. After grading, an async thread builds a prompt from the student\'s code, autograder results, and their historical coding_insights — a per-student record of recurring mistakes — so feedback adapts over time.',
      images: [
        {
          src: '/projects/codeassist/06_instructor_ai_settings.png',
          alt: 'AI Settings page with model selector showing ChatGPT, Gemini, and Claude tabs'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'LINE-LEVEL ANNOTATIONS',
      contentType: 'showcase',
      deviceFrame: 'browser',
      content:
        'AI feedback appears as inline annotations directly on the student\'s code, regex-matched to relevant lines and color-coded by category — correctness, optimization, documentation, and style.',
      images: [
        {
          src: '/projects/codeassist/14_student_ai_feedback_fullpage.png',
          alt: 'Student code view with inline AI annotations highlighting specific lines'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'FEEDBACK SUMMARY',
      contentType: 'showcase',
      deviceFrame: 'browser',
      content:
        'A summary tab aggregates all AI annotations into a scannable list, each linking back to its line in the code for systematic review.',
      images: [
        {
          src: '/projects/codeassist/15_student_feedback_summary.png',
          alt: 'Feedback Summary tab showing 10 line-level AI comments'
        }
      ]
    }
  ]
};
