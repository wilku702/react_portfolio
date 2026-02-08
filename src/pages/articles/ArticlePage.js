import React from 'react';
import './styles/ArticleGlobal.css';

const ALLOWED_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const ArticlePage = ({ data }) => {
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
          <div className="col-lg-3" />
          {isLeftPosition ? (
            <>
              <div className="col-lg-5 sltn-prv">
                <h5>{section.title}</h5>
                <h4>{content}</h4>
              </div>
              <div className="col-lg-4">{renderImages()}</div>
            </>
          ) : (
            <>
              <div className="col-lg-4">{renderImages()}</div>
              <div className="col-lg-5 sltn-prv">
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
    <main className="page">
      <div className="whitespace"></div>
      <div className="article-container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="article-title">{data.title}</h1>
            <div className="row">
              <div className="col-lg-4">
                <p>service :</p>
                <h6>{data.service}</h6>
              </div>
              <div className="col-lg-4">
                <p>timeline :</p>
                <h6>{data.timeline}</h6>
              </div>
              <div className="col-lg-4">
                <p>role :</p>
                <h6>{data.role}</h6>
              </div>
            </div>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
      <div className="project-img">
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
      </div>
      <div className="article-container">
        <div>
          {data.sections.map((section, index) => (
            <div key={index} className="row space">
              {renderContent(section)}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ArticlePage;
