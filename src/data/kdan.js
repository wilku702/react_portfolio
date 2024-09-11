export const kdanData = {
  title: 'Uber Internship',
  service: 'Design Systems',
  timeline: 'Jun 2021 - Sep 2021 (4 months)',
  role: 'Product Design Intern',
  description: `I worked with the Base team at Uber to foster a consistent, cohesive experience among all Uber products. By ensuring our design roots are consistent and accessible, we aid designers in creating beautiful user experiences for everyone. You can learn more about the Base design system at the official website.`,
  images: [
    {
      src: './companies/kdan/chatbot.png',
      alt: 'preview of the Base design system'
    }
  ],
  sections: [
    {
      headerType: 'h3',
      title: 'HIGHLIGHTS',
      contentType: 'list',
      content: [
        'Documented TalkBack accessibility guidelines for internal teams',
        'Contributed to creating a new onboarding experience for all designers',
        'Created a component from beginning to end for usage in all products',
        'Volunteered with Suit Up to empower youth',
        'Updated module libraries for various products'
      ],
      images: []
    },
    {
      headerType: 'h3',
      title: 'PROBLEM STATEMENT',
      contentType: 'paragraph',
      content:
        'How might we create a cohesive rating experience across Uber products?',
      images: []
    },
    {
      headerType: 'h3',
      title: 'AUDIT',
      contentType: 'paragraph',
      content: `
          I began by conducting an initial audit around current use cases for stars across all products and experiences. 
          This allowed me to understand current use cases and consider potential use cases in the future. Additionally, 
          I had to consider both mobile and web experiences, and an audit helped me see the context and placement of 
          this particular component. This internal audit examined over 20 unique use cases across 6 distinct products.
        `,
      images: [
        {
          src: 'images/uberprivaudit.png',
          alt: 'existing screens using stars'
        },
        { src: 'images/uberprivaudit2.png', alt: 'notes on existing stars' }
      ]
    },
    {
      headerType: 'h3',
      title: 'ADD HOUSEMATES',
      contentType: 'demonstration',
      content: `Add users to share owned items and track together.`,
      images: [
        {
          src: './companies/kdan/demonstration.gif',
          alt: 'preview of the Base design system'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'FINDINGS (PROBLEM)',
      contentType: 'paragraph',
      content: `
          This audit revealed inconsistencies with aspects like size, color, shape, fill, and spacing. With color, 
          there were also accessibility concerns as yellow stars do not pass web accessibility guidelines (WCAG). 
          As an accessibility-focused designer, I realized the color contrast was a concern as the stars with shaded 
          inactive states meant our ratings relied on color alone to distinguish the states, which is extremely inaccessible.
        `,
      images: []
    },
    {
      headerType: 'h3',
      title: 'COMPETITIVE ANALYSIS',
      contentType: 'paragraph',
      content: `
          I moved into competitive analysis of products that offered rating systems. This included seeing how they 
          were visually displayed, their interactions, and various design systems. I took note of commonalities and 
          differences to keep in mind and have supporting evidence to back up my design decisions later.
        `,
      images: [
        {
          src: 'images/uberprivcompanalysis.png',
          alt: 'random external products with ratings'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'SOLUTION',
      contentType: 'paragraph',
      content:
        'These are the finalized components that address all current use cases and consider potential variations in the future.',
      images: [{ src: 'images/uberprivcomponents.png', alt: 'star component' }]
    },
    {
      headerType: 'h3',
      title: 'MOMENTS',
      contentType: 'paragraph',
      content:
        'Just highlighting some precious moments during my internship at Uber.',
      images: [
        { src: 'images/uberwelcomeyvonne.png', alt: 'Welcome Yvonne' },
        { src: 'images/uberbyemegan.png', alt: 'Farewell Megan' },
        { src: 'images/uberdesigninterns.png', alt: 'Design Interns' },
        { src: 'images/uberteam.png', alt: 'Team Photo' },
        { src: 'images/uberbyegenerous.png', alt: 'Goodbye Gift' }
      ]
    }
  ]
};
