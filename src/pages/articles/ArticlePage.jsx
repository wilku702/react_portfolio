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
    techStack: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(imageShape).isRequired,
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
