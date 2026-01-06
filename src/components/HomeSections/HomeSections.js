import React from 'react';
import { motion } from 'framer-motion';
import ArticleLinks from '../ArticleLinks/ArticleLinks';

const HomeSections = () => {
  const internshipItems = [
  {
      title: 'KDANMOBILE',
      link: '/kdan',
      backgroundImage: '/companies/kdan.png',
      emojiLink: '🤖💬',
      details: 'React.js | Python | SQL | BigQuery | LLM | Docker',
      description:
        'Built and deployed a real-time analytics chatbot for revenue and stock inquiries; integrated multiple LLMs with Google Cloud Functions and SQL on BigQuery, boosting response speed from 30s to ~8s and improving answer accuracy through LangChain, LangFuse, and RAGAS testing.',
      size: 'large' // Featured card
    },
    {
      title: 'Adonit',
      link: '/adonit',
      backgroundImage: '/companies/adonit.png',
      emojiLink: '📈',
      details: 'React Native | Python | Streamlit | SQL | Prophet',
      description:
        'Developed features for Adonit One including an AI-powered audio module; created a predictive analytics dashboard using Streamlit and SQL on BigQuery with Prophet forecasting, enabling proactive revenue insights; automated deployments via GitLab CI/CD.',
      size: 'medium'
    },
    {
      title: 'Done Desk',
      link: '',
      backgroundImage: '/companies/donedesk.jpg',
      emojiLink: '🦷',
      details: 'Ruby on Rails | MongoDB | AWS | REST APIs',
      description:
        'Engineered a SaaS platform to track employee CE credits; built data pipelines to parse state requirements from Excel into MongoDB, deployed a Ruby on Rails frontend for record management, and validated APIs with automated test suites and Postman.',
      size: 'small'
    },
    {
      title: 'Resia',
      link: '',
      backgroundImage: '/companies/resia.jpg',
      emojiLink: '🏗️',
      details: 'React.js | AWS | LLM',
      description:
        'Collaborated on building an AI-powered 3D modeling and cost estimation platform for architects. Developed React.js components for interactive design previews, integrated LLM-based natural language inputs for generating structural layouts, and deployed prototypes on AWS.',
      size: 'medium'
    }
  ];

  const projectItems = [
    {
      title: 'Nagoya USARD',
      link: 'https://github.com/quarcs-lab/quarcs-bolivia',
      backgroundImage: '/companies/nagoya.png',
      emojiLink: '🎓',
      details: 'Hugo | Go | Node.js',
      description:
        'Data-driven development // Built robust analysis tools for Bolivian socio-economic datasets, enhancing research capabilities.',
      size: 'large'
    },
    {
      title: 'Triniti',
      link: 'https://github.com/wilku702/Triniti',
      backgroundImage: '/companies/triniti.png',
      emojiLink: '👵🏠',
      details: 'React Native | Firebase',
      description:
        'User interaction enhancement // Implemented a social media framework to enable nursing staff to post updates, enhancing family engagement.',
      size: 'large'
    }
  ];

  const titleAnim = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="flex flex-col">
      <section className="pt-12 md:pt-16 lg:pt-24 px-4 md:px-8 lg:px-12">
        {/* Modern offset title with number indicator */}
        <div className="mb-8 md:mb-12">
          <motion.div
            className="flex items-baseline gap-3 md:gap-6"
            initial={titleAnim.initial}
            whileInView={titleAnim.whileInView}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ ...titleAnim.transition, duration: 1.2 }}
          >
            <span className="text-sm md:text-base font-mono text-main/60">01</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold gradient-text-main tracking-tight">
              Internships
            </h2>
          </motion.div>
          <motion.div
            className="h-1 bg-gradient-to-r from-main/60 via-main/30 to-transparent mt-4 md:mt-6"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        <ArticleLinks items={internshipItems} />
      </section>

      <section className="pt-20 md:pt-28 lg:pt-32 px-4 md:px-8 lg:px-12">
        {/* Modern offset title with number indicator */}
        <div className="mb-8 md:mb-12">
          <motion.div
            className="flex items-baseline gap-3 md:gap-6"
            initial={titleAnim.initial}
            whileInView={titleAnim.whileInView}
            transition={{ ...titleAnim.transition, duration: 1.2 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <span className="text-sm md:text-base font-mono text-main/60">02</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold gradient-text-main tracking-tight">
              Projects
            </h2>
          </motion.div>
          <motion.div
            className="h-1 bg-gradient-to-r from-main/60 via-main/30 to-transparent mt-4 md:mt-6"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        <ArticleLinks items={projectItems} />
      </section>
    </div>
  );
};

export default HomeSections;
