import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import techIcons from '../../data/techIcons';
import './styles/ArticleGlobal.css';

const ALLOWED_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const scrollFadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  viewport: { once: true, amount: 0.2 },
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

    const renderList = () => (
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );

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
            {renderList()}
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
            <motion.div key={index} className="row space" {...scrollFadeIn}>
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
  className: PropTypes.string
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
        contentType: PropTypes.oneOf(['paragraph', 'list', 'demonstration']).isRequired,
        content: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.arrayOf(PropTypes.string),
        ]).isRequired,
        images: PropTypes.arrayOf(imageShape),
        position: PropTypes.oneOf(['left', 'right'])
      })
    ).isRequired
  }).isRequired
};

export default ArticlePage;
