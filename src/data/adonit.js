export const adonitData = {
  title: 'Adonit Internship',
  service: 'Forecast Analyzer',
  timeline: 'Jun 2023 - Jul 2023 (2 months)',
  role: 'Software Engineer Intern',
  description: `At KDANMobile, I developed a chatbot for a client, aimed at streamlining data inquiries such as daily revenue and stock levels. This role involved front-end and back-end development, ensuring the chatbot was both functional and user-friendly.`,
  images: [
    {
      src: './companies/adonit/forecast_page.png',
      alt: 'company branch'
    }
  ],
  sections: [
    // {
    //   headerType: 'h3',
    //   title: 'FRONTEND DEVELOPMENT',
    //   contentType: 'list',
    //   content: [
    //     'Documented TalkBack accessibility guidelines for internal teams',
    //     'Contributed to creating a new onboarding experience for all designers',
    //     'Created a component from beginning to end for usage in all products',
    //     'Volunteered with Suit Up to empower youth',
    //     'Updated module libraries for various products'
    //   ],
    //   images: []
    // },
    {
      headerType: 'h3',
      title: 'PROPHET MODEL',
      contentType: 'paragraph',
      content:
        "Designed and implemented the chatbot's front-end using React JavaScript. The interface allows users to interact with data through visualizations such as graphs and tables, enabling analysis and decision-making",
      images: []
    },
    {
      headerType: 'h3',
      title: 'DATA QUERY',
      contentType: 'paragraph',
      content: `
            I began by conducting an initial audit around current use cases for stars across all products and experiences. 
            This allowed me to understand current use cases and consider potential use cases in the future. Additionally, 
            I had to consider both mobile and web experiences, and an audit helped me see the context and placement of 
            this particular component. This internal audit examined over 20 unique use cases across 6 distinct products.
          `,
      images: [
        {
          src: './companies/kdan/chatbot_layout.jpg',
          alt: 'chatbot_layout'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'REGRESSION CONSIDERATIONS',
      contentType: 'paragraph',
      content: `
            This audit revealed inconsistencies with aspects like size, color, shape, fill, and spacing. With color, 
            there were also accessibility concerns as yellow stars do not pass web accessibility guidelines (WCAG). 
            As an accessibility-focused designer, I realized the color contrast was a concern as the stars with shaded 
            inactive states meant our ratings relied on color alone to distinguish the states, which is extremely inaccessible.
          `,
      images: [
        {
          src: './companies/kdan/langfuse.jpg',
          alt: 'langfuse'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'RESULTING PREDICTIONS',
      contentType: 'paragraph',
      content: ``,
      images: [
        {
          src: './companies/kdan/deployment.jpg',
          alt: 'langfuse'
        }
      ]
    }
  ]
};
