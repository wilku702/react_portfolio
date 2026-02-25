import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import techIcons from '../../data/techIcons';
import {
  scrollFadeIn,
  slideFromLeft,
  slideFromRight,
  scaleUp,
  galleryContainerVariants,
  galleryItemVariants,
  splitContainerVariants,
  splitLeftVariants,
  splitRightVariants,
} from '../../motionUtils';
import './styles/ArticleGlobal.css';

const ALLOWED_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const getAnimationForSection = (section) => {
  switch (section.contentType) {
    case 'demonstration':
      return section.position === 'right' ? slideFromRight : slideFromLeft;
    case 'feature-highlight':
      return scaleUp;
    case 'showcase':
    case 'gallery':
    case 'comparison':
    case 'split-content':
    case 'paragraph':
    case 'list':
    default:
      return scrollFadeIn;
  }
};

/* ── Shared helpers ── */

const renderHeader = (type, text) => {
  const HeaderTag = ALLOWED_TAGS.includes(type) ? type : 'h1';
  return <HeaderTag>{text}</HeaderTag>;
};

const renderMedia = (img, imgIndex, className = 'space') =>
  img.video ? (
    <video key={imgIndex} src={img.src} className={className} autoPlay loop muted playsInline aria-label={img.alt} />
  ) : (
    <img key={imgIndex} src={img.src} alt={img.alt} className={className} loading="lazy" />
  );

const SectionHeader = ({ section }) => (
  <div className="col-lg-12">
    {renderHeader(section.headerType, section.title)}
  </div>
);

const SectionImages = ({ section }) =>
  section.images?.map((img, i) => renderMedia(img, i));

/* ── Section renderers ── */

const ListSection = ({ section }) => (
  <>
    <SectionHeader section={section} />
    <div className="col-lg-12">
      <ul>
        {section.content.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <SectionImages section={section} />
    </div>
  </>
);

const ParagraphSection = ({ section }) => (
  <>
    <SectionHeader section={section} />
    <div className="col-lg-12">
      <p>{section.content}</p>
      <SectionImages section={section} />
    </div>
  </>
);

const DemonstrationSection = ({ section }) => {
  const isLeft = section.position === 'left';
  const textBlock = (
    <div className="col-lg-5 sltn-prv demo-text">
      <p className="demo-body">{section.content}</p>
    </div>
  );
  const imageBlock = (
    <div className="col-lg-4 demo-image">
      <SectionImages section={section} />
    </div>
  );
  return (
    <>
      <SectionHeader section={section} />
      <div className="col-lg-3 demo-spacer" />
      {isLeft ? <>{textBlock}{imageBlock}</> : <>{imageBlock}{textBlock}</>}
    </>
  );
};

const GallerySection = ({ section }) => {
  const cols = section.columns || 2;
  return (
    <>
      <SectionHeader section={section} />
      <div className="col-lg-12">
        {section.content && <p>{section.content}</p>}
        <motion.div
          className={`gallery-grid cols-${cols}`}
          variants={galleryContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {section.images?.map((img, i) => (
            <motion.figure key={i} className="gallery-item" variants={galleryItemVariants}>
              {renderMedia(img, i, '')}
              {img.caption && <figcaption className="gallery-caption">{img.caption}</figcaption>}
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </>
  );
};

const FeatureHighlightSection = ({ section }) => (
  <div className="col-lg-12 feature-highlight">
    {renderHeader(section.headerType, section.title)}
    {section.images?.map((img, i) => renderMedia(img, i, ''))}
    {section.content && <p>{section.content}</p>}
  </div>
);

const SplitContentSection = ({ section }) => (
  <>
    <SectionHeader section={section} />
    <div className="col-lg-12">
      <motion.div
        className="split-content"
        variants={splitContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="split-content-text" variants={splitLeftVariants}>
          <p>{section.content}</p>
        </motion.div>
        <motion.div className="split-content-list" variants={splitRightVariants}>
          <ul>
            {section.list?.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </motion.div>
      </motion.div>
      <SectionImages section={section} />
    </div>
  </>
);

const ComparisonSection = ({ section }) => (
  <>
    <SectionHeader section={section} />
    <div className="col-lg-12">
      <div className="comparison-row">
        <motion.div className="comparison-side" {...slideFromLeft}>
          {section.leftSide?.image && (
            <img src={section.leftSide.image.src} alt={section.leftSide.image.alt} loading="lazy" />
          )}
          <h5 className="comparison-label">{section.leftSide?.label}</h5>
          <p>{section.leftSide?.content}</p>
        </motion.div>
        <motion.div className="comparison-side" {...slideFromRight}>
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

const ShowcaseSection = ({ section }) => {
  const frameType = section.deviceFrame || false;
  const count = Math.min(section.images?.length || 0, 3);

  return (
    <>
      <SectionHeader section={section} />
      <div className="col-lg-12">
        {section.content && <p>{section.content}</p>}
        <motion.div
          className={`showcase-grid count-${count}`}
          variants={galleryContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {section.images?.slice(0, 3).map((img, i) => (
            <motion.figure
              key={i}
              className={`showcase-device ${frameType ? `frame-${frameType}` : ''}`}
              variants={galleryItemVariants}
            >
              <div className="device-screen">
                {frameType === 'browser' && (
                  <div className="browser-bar">
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                  </div>
                )}
                <div className="device-content">
                  {renderMedia(img, i, '')}
                </div>
              </div>
              {img.caption && <figcaption className="showcase-caption">{img.caption}</figcaption>}
              {img.description && <p className="showcase-description">{img.description}</p>}
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </>
  );
};

const sectionRenderers = {
  list: ListSection,
  paragraph: ParagraphSection,
  demonstration: DemonstrationSection,
  gallery: GallerySection,
  'feature-highlight': FeatureHighlightSection,
  'split-content': SplitContentSection,
  comparison: ComparisonSection,
  showcase: ShowcaseSection,
};

const ArticlePage = ({ data, backTo = '/experience' }) => {
  return (
    <div className="page">
      <Helmet>
        <title>{data.title} | Will Kung</title>
        <meta name="description" content={data.description} />
        <meta property="og:title" content={`${data.title} | Will Kung`} />
        <meta property="og:description" content={data.description} />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="whitespace"></div>
      <div className="article-container">
        <motion.div className="row" {...scrollFadeIn}>
          <div className="col-lg-12">
            <div className="article-toolbar">
              <Link to={backTo} className="back-link" aria-label={`Back to ${backTo === '/projects' ? 'projects' : 'experience'} page`}>
                <span aria-hidden="true">←</span> Back
              </Link>
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
              <div className="tech-stack-row" role="list" aria-label="Technologies used">
                {data.techStack.map((tech) => {
                  const IconComponent = techIcons[tech];
                  return (
                    <span key={tech} className="tech-stack-item" role="listitem">
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
                {data.images.map((image, index) =>
                  image.deviceFrame === 'phone' ? (
                    <figure key={index} className="showcase-device frame-phone hero-phone">
                      <div className="device-screen">
                        <div className="device-content">
                          <img src={image.src} alt={image.alt} loading="eager" />
                        </div>
                      </div>
                    </figure>
                  ) : (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className={image.className || ''}
                      loading="eager"
                      fetchPriority="high"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
      <div className="article-container">
        <div>
          {data.sections.map((section, index) => {
            const Renderer = sectionRenderers[section.contentType];
            if (!Renderer) {
              if (process.env.NODE_ENV !== 'production') {
                console.warn(`ArticlePage: unknown contentType "${section.contentType}" in section "${section.title}"`);
              }
              return null;
            }
            return (
              <motion.div key={index} className="row space" {...getAnimationForSection(section)}>
                <Renderer section={section} />
              </motion.div>
            );
          })}
        </div>
        <motion.div className="article-cta" {...scrollFadeIn}>
          <p>Interested in seeing more?</p>
          <div className="cta-actions">
            <Link to={backTo} className="cta-button">View more work</Link>
            {data.githubUrl && (
              <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button cta-github"
                aria-label={`View ${data.title} on GitHub`}
              >
                View on GitHub
              </a>
            )}
          </div>
          <a href="mailto:wkung2004@gmail.com" className="cta-contact">
            Or get in touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

const imageShape = PropTypes.shape({
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  caption: PropTypes.string,
  description: PropTypes.string,
  video: PropTypes.bool,
  deviceFrame: PropTypes.oneOf(['browser', 'phone'])
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
          'gallery', 'feature-highlight', 'split-content', 'comparison', 'showcase'
        ]).isRequired,
        content: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.arrayOf(PropTypes.string),
        ]),
        images: PropTypes.arrayOf(imageShape),
        position: PropTypes.oneOf(['left', 'right']),
        columns: PropTypes.oneOf([2, 3]),
        deviceFrame: PropTypes.oneOf(['browser', 'phone']),
        list: PropTypes.arrayOf(PropTypes.string),
        leftSide: comparisonSideShape,
        rightSide: comparisonSideShape
      })
    ).isRequired
  }).isRequired,
  backTo: PropTypes.string
};

export default ArticlePage;
