import React from 'react';
import './styles/ArticleGlobal.css';
import { nagoyaData } from '../../data/nagoya';

const NagoyaPage = () => {
  const renderHeader = (type, text) => {
    const HeaderTag = type || 'h1';
    return <HeaderTag>{text}</HeaderTag>;
  };

  const renderContent = (section) => {
    const contentType = section.contentType;
    const content = section.content;

    const renderImages = () =>
      section.images?.map((img, imgIndex) => (
        <img key={imgIndex} src={img.src} alt={img.alt} className="space" />
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
    <div className="page">
      <div className="whitespace"></div>
      <div className="article-container">
        <br />
        <br />
        <div className="row">
          <div className="col-lg-12">
            <br />
            <h1 className="article-title">{nagoyaData.title}</h1>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <p>service :</p>
                <h6>{nagoyaData.service}</h6>
              </div>
              <div className="col-lg-4">
                <p>timeline :</p>
                <h6>{nagoyaData.timeline}</h6>
              </div>
              <div className="col-lg-4">
                <p>role :</p>
                <h6>{nagoyaData.role}</h6>
              </div>
            </div>
            <br />
            <p>{nagoyaData.description}</p>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="project-img">
        <div className="article-container">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12">
              {nagoyaData.images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={image.className || ''}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="article-container">
        <div>
          {nagoyaData.sections.map((section, index) => (
            <div key={index} className="row space">
              {renderContent(section)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NagoyaPage;
