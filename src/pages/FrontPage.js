import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header/Header';
import ArticleLinks from '../components/ArticleLinks/ArticleLinks';
import { featuredItems } from '../data/workItems';
import '../components/HomeSections/HomeSections.css';

const titleAnim = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.2 }
};

const FrontPage = () => {
  return (
    <main className="page">
      <Header />
      <div className="home-sections">
        <section id="work" className="home-section">
          <motion.h2
            className="section-title"
            initial={titleAnim.initial}
            whileInView={titleAnim.whileInView}
            transition={titleAnim.transition}
            viewport={{ once: true, amount: 0.6 }}
          >
            Featured Work
          </motion.h2>
          <ArticleLinks items={featuredItems} />
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/experience" className="view-all-link">
              View All Experience →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FrontPage;
