import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import techIcons from '../../data/techIcons';
import './styles/ArticleGlobal.css';

const ALLOWED_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

/* ── Animation variants per content type ── */

const defaultEasing = [0.6, -0.05, 0.01, 0.99];

const scrollFadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: defaultEasing },
  viewport: { once: true, amount: 0.2 },
};

const slideFromLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
  viewport: { once: true, amount: 0.2 },
};

const slideFromRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
  viewport: { once: true, amount: 0.2 },
};

const scaleUp = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, amount: 0.2 },
};

const galleryContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const galleryItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: defaultEasing },
  },
};

const getAnimationForSection = (section) => {
  switch (section.contentType) {
    case 'demonstration':
      return section.position === 'right' ? slideFromRight : slideFromLeft;
    case 'feature-highlight':
      return scaleUp;
    case 'gallery':
    case 'comparison':
    case 'split-content':
    case 'paragraph':
    case 'list':
    default:
      return scrollFadeIn;
  }
};

const ArticlePage = ({ data }) => {
  const navigate = useNavigate();
  const renderHeader = (type, text) => {
    const HeaderTag = ALLOWED_TAGS.includes(type) ? type : 'h1';
    return <HeaderTag>{text}</HeaderTag>;
  };

  const renderContent = (section) => {
    const contentType = section.contentType;
    const content = section.content;

    const renderImages = () =>
      section.images?.map((img, imgIndex) => (
        <img key={imgIndex} src={img.src} alt={img.alt} className="space" loading="lazy" />
      ));

    const renderHeaderSection = () => (
      <div className="col-lg-12">
        {renderHeader(section.headerType, section.title)}
      </div>
    );

    if (contentType === 'list') {
      return (
        <>
          {renderHeaderSection()}
          <div className="col-lg-12">
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {renderImages()}
          </div>
        </>
      );
    } else if (contentType === 'paragraph') {
      return (
        <>
          {renderHeaderSection()}
          <div className="col-lg-12">
            <p>{content}</p>
            {renderImages()}
          </div>
        </>
      );
    } else if (contentType === 'demonstration') {
      const isLeftPosition = section.position === 'left';
      return (
        <>
          <div className="col-lg-3 demo-spacer" />
          {isLeftPosition ? (
            <>
              <div className="col-lg-5 sltn-prv demo-text">
                <h5>{section.title}</h5>
                <h4>{content}</h4>
              </div>
              <div className="col-lg-4 demo-image">{renderImages()}</div>
            </>
          ) : (
            <>
              <div className="col-lg-4 demo-image">{renderImages()}</div>
              <div className="col-lg-5 sltn-prv demo-text">
                <h5>{section.title}</h5>
                <h4>{content}</h4>
              </div>
            </>
          )}
        </>
      );
    } else if (contentType === 'gallery') {
      const cols = section.columns || 2;
      return (
        <>
          {renderHeaderSection()}
          <div className="col-lg-12">
            {content && <p>{content}</p>}
            <motion.div
              className={`gallery-grid cols-${cols}`}
              variants={galleryContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {section.images?.map((img, imgIndex) => (
                <motion.figure key={imgIndex} className="gallery-item" variants={galleryItemVariants}>
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  {img.caption && <figcaption className="gallery-caption">{img.caption}</figcaption>}
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </>
      );
    } else if (contentType === 'feature-highlight') {
      return (
        <div className="col-lg-12 feature-highlight">
          {renderHeader(section.headerType, section.title)}
          {section.images?.map((img, imgIndex) => (
            <img key={imgIndex} src={img.src} alt={img.alt} loading="lazy" />
          ))}
          {content && <p>{content}</p>}
        </div>
      );
    } else if (contentType === 'split-content') {
      return (
        <>
          {renderHeaderSection()}
          <div className="col-lg-12">
            <div className="split-content">
              <motion.div
                className="split-content-text"
                {...slideFromLeft}
              >
                <p>{content}</p>
              </motion.div>
              <motion.div
                className="split-content-list"
                {...slideFromRight}
              >
                <ul>
                  {section.list?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
            {renderImages()}
          </div>
        </>
      );
    } else if (contentType === 'comparison') {
      return (
        <>
          {renderHeaderSection()}
          <div className="col-lg-12">
            <div className="comparison-row">
              <motion.div
                className="comparison-side"
                {...slideFromLeft}
              >
                {section.leftSide?.image && (
                  <img src={section.leftSide.image.src} alt={section.leftSide.image.alt} loading="lazy" />
                )}
                <h5 className="comparison-label">{section.leftSide?.label}</h5>
                <p>{section.leftSide?.content}</p>
              </motion.div>
              <motion.div
                className="comparison-side"
                {...slideFromRight}
              >
                {section.rightSide?.image && (
                  <img src={section.rightSide.image.src} alt={section.rightSide.image.alt} loading="lazy" />
                )}
                <h5 className="comparison-label">{section.rightSide?.label}</h5>
                <p>{section.rightSide?.content}</p>
              </motion.div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="page">
      <Helmet>
        <title>{data.title} | Will Kung</title>
        <meta property="og:title" content={`${data.title} | Will Kung`} />
        <meta property="og:description" content={data.description} />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="whitespace"></div>
      <div className="article-container">
        <motion.div className="row" {...scrollFadeIn}>
          <div className="col-lg-12">
            <div className="article-toolbar">
              <button
                onClick={() => {
                  if (window.history.length > 1) {
                    navigate(-1);
                  } else {
                    navigate('/experience');
                  }
                }}
                className="back-link"
              >
                ← Back
              </button>
              {data.githubUrl && (
                <a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  aria-label={`View ${data.title} on GitHub`}
                >
                  <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>
            <h1 className="article-title">{data.title}</h1>
            <div className="row article-meta">
              <div className="col-lg-4">
                <p className="meta-label">service :</p>
                <h6>{data.service}</h6>
              </div>
              <div className="col-lg-4">
                <p className="meta-label">timeline :</p>
                <h6>{data.timeline}</h6>
              </div>
              <div className="col-lg-4">
                <p className="meta-label">role :</p>
                <h6>{data.role}</h6>
              </div>
            </div>
            {data.techStack && data.techStack.length > 0 && (
              <div className="tech-stack-row" aria-label="Technologies used">
                {data.techStack.map((tech) => {
                  const IconComponent = techIcons[tech];
                  return (
                    <span key={tech} className="tech-stack-item" title={tech}>
                      {IconComponent && <IconComponent aria-hidden="true" />}
                      <span className="tech-stack-label">{tech}</span>
                    </span>
                  );
                })}
              </div>
            )}
            <p>{data.description}</p>
          </div>
        </motion.div>
      </div>
      {data.images?.length > 0 && (
        <motion.div className="project-img" {...scrollFadeIn}>
          <div className="article-container">
            <div className="row">
              <div className="col-lg-12">
                {data.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={image.className || ''}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
      <div className="article-container">
        <div>
          {data.sections.map((section, index) => (
            <motion.div key={index} className="row space" {...getAnimationForSection(section)}>
              {renderContent(section)}
            </motion.div>
          ))}
        </div>
        <motion.div className="article-cta" {...scrollFadeIn}>
          <p>Interested in seeing more?</p>
          <Link to="/experience" className="cta-button">View more work</Link>
        </motion.div>
      </div>
    </div>
  );
};

const imageShape = PropTypes.shape({
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  caption: PropTypes.string
});

const comparisonSideShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: imageShape
});

ArticlePage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    githubUrl: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(imageShape),
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        headerType: PropTypes.string,
        title: PropTypes.string.isRequired,
        contentType: PropTypes.oneOf([
          'paragraph', 'list', 'demonstration',
          'gallery', 'feature-highlight', 'split-content', 'comparison'
        ]).isRequired,
        content: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.arrayOf(PropTypes.string),
        ]),
        images: PropTypes.arrayOf(imageShape),
        position: PropTypes.oneOf(['left', 'right']),
        columns: PropTypes.oneOf([2, 3]),
        list: PropTypes.arrayOf(PropTypes.string),
        leftSide: comparisonSideShape,
        rightSide: comparisonSideShape
      })
    ).isRequired
  }).isRequired
};

export default ArticlePage;
