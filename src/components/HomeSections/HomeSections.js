import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ArticleLinks from '../ArticleLinks/ArticleLinks';
import Skills from '../Skills/Skills';

const HomeSections = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
    const internshipItems = [
    {
      title: 'ELASA AI',
      link: '/elasa',
      backgroundImage: '/companies/elasa.png',
      description:
        'Stabilized an SQS-driven quoting pipeline across 8 carriers with idempotent retries + observability, cutting failures from 30% to 10%; built MFA session handoff with TTL/refresh + fallback re-auth.',
      size: 'large',
      skills: ['playwright', 'python', 'aws', 'sqs', 'browserbase']
    },
    {
      title: 'KDANMOBILE',
      link: '/kdan',
      backgroundImage: '/companies/kdan.png',
      description:
        'Built a React/Python analytics chatbot processing 1,000+ weekly queries; cut p95 latency from 30s to 8.1s and raised RAGAS from 0.58 to 0.85 (92% success) using BigQuery + LangChain/LangFuse.',
      size: 'medium',
      skills: ['react', 'python', 'sql', 'bigquery', 'llm', 'docker']
    },
    {
      title: 'Resia AI',
      link: '/resia',
      backgroundImage: '/companies/resia.jpg',
      description:
        'Prototyped an LLM pipeline from room descriptions → 2D floorplans/3D interiors.',
      size: 'small',
      skills: ['react', 'aws', 'amplify', 'graphql', 's3', 'python', 'llm']
    },
    {
      title: 'Done Desk',
      link: '/donedesk',
      backgroundImage: '/companies/donedesk.jpg',
      description:
        'Built a Python ETL from Excel/CSV → MongoDB for 50+ licenses across 20+ states.',
      size: 'small',
      skills: ['rails', 'mongodb', 'python']
    },
    {
      title: 'Adonit',
      link: '/adonit',
      backgroundImage: '/companies/adonit.png',
      description:
        'Shipped an accessibility audio module in React Native (Expo) with on-device TFLite; built Streamlit + BigQuery forecasting with Prophet.',
      size: 'medium',
      skills: ['react-native', 'expo', 'redux', 'tflite', 'python', 'bigquery', 'prophet']
    },
    {
      title: 'Siemens',
      link: '/siemens',
      backgroundImage: '/companies/siemens.png',
      description:
        'Built Postman-facing HTTP library visualizations, contributed UI for building management, and created Tableau + Excel VBA workflows for energy and finance analysis.',
      size: 'medium',
      skills: ['postman', 'tableau', 'excel']
    }
  ];

  const projectItems = [
    {
      title: 'Nagoya USARD',
      link: 'https://github.com/quarcs-lab/quarcs-bolivia',
      backgroundImage: '/companies/nagoya.png',
      description:
        'Data-driven development // Built robust analysis tools for Bolivian socio-economic datasets, enhancing research capabilities.',
      size: 'large',
      skills: ['hugo', 'go', 'node']
    },
    {
      title: 'Triniti',
      link: 'https://github.com/wilku702/Triniti',
      backgroundImage: '/companies/triniti.png',
      description:
        'User interaction enhancement // Implemented a social media framework to enable nursing staff to post updates, enhancing family engagement.',
      size: 'large',
      skills: ['react-native', 'firebase']
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
              Skills
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
        <Skills
          hoveredSkill={hoveredSkill}
          onSkillHover={setHoveredSkill}
        />
      </section>

      <section className="pt-20 md:pt-28 lg:pt-32 px-4 md:px-8 lg:px-12">
        {/* Modern offset title with number indicator */}
        <div className="mb-8 md:mb-12">
          <motion.div
            className="flex items-baseline gap-3 md:gap-6"
            initial={titleAnim.initial}
            whileInView={titleAnim.whileInView}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ ...titleAnim.transition, duration: 1.2 }}
          >
            <span className="text-sm md:text-base font-mono text-main/60">02</span>
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
        <ArticleLinks items={internshipItems} hoveredSkill={hoveredSkill} />
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
            <span className="text-sm md:text-base font-mono text-main/60">03</span>
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
        <ArticleLinks items={projectItems} hoveredSkill={hoveredSkill} />
      </section>
    </div>
  );
};

export default HomeSections;
