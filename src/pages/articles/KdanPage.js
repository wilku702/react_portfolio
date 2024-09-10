import React from 'react';
import './styles/ArticleGlobal.css';
import './styles/KdanPage.css';
import { kdanData } from '../../data/kdan';

const KdanPage = () => {
  const renderHeader = (type, text) => {
    const HeaderTag = type || 'h2';
    return <HeaderTag>{text}</HeaderTag>;
  };

  const renderContent = (contentType, content) => {
    if (contentType === 'list') {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else if (contentType === 'paragraph') {
      return <p>{content}</p>;
    } else {
      return <p>{content}</p>;
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
            <h1>{kdanData.title}</h1>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <p>service :</p>
                <h6>{kdanData.service}</h6>
              </div>
              <div className="col-lg-4">
                <p>timeline :</p>
                <h6>{kdanData.timeline}</h6>
              </div>
              <div className="col-lg-4">
                <p>role :</p>
                <h6>{kdanData.role}</h6>
              </div>
            </div>
            <br />
            <p>{kdanData.description}</p>
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
              {kdanData.images.map((image, index) => (
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
          {kdanData.sections.map((section, index) => (
            <div key={index} className="row space">
              <div className="col-lg-12">
                {renderHeader(section.headerType, section.title)}
              </div>
              <div className="col-lg-12">
                {renderContent(section.contentType, section.content)}
                {section.images?.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img.src}
                    alt={img.alt}
                    className="space"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KdanPage;
