import React from 'react';
import './styles/ArticleGlobal.css';
import './styles/KdanPage.css';
import { kdanData } from '../../data/kdan';

const KdanPage = () => {
  const renderHeader = (type, text) => {
    const HeaderTag = type || 'h1';
    return <HeaderTag>{text}</HeaderTag>;
  };

  const renderContent = (section) => {
    const contentType = section.contentType;
    const content = section.content;
    if (contentType === 'list') {
      return (
        <>
          <div className="col-lg-12">
            {renderHeader(section.headerType, section.title)}
          </div>
          <div className="col-lg-12">
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {section.images?.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img.src}
                alt={img.alt}
                className="space"
              />
            ))}
          </div>
        </>
      );
    } else if (contentType === 'paragraph') {
      return (
        <>
          <div className="col-lg-12">
            {renderHeader(section.headerType, section.title)}
          </div>
          <div className="col-lg-12">
            <p>{content}</p>
            {section.images?.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img.src}
                alt={img.alt}
                className="space"
              />
            ))}
          </div>
        </>
      );
    } else if (contentType === 'demonstration') {
      return (
        <>
          <div class="col-lg-3" />
          <div class="col-lg-5 sltn-prv">
            <h5>{section.title}</h5>
            <h4>{content}</h4>
          </div>
          <div class="col-lg-4">
            {section.images?.map((img, imgIndex) => (
              <img key={imgIndex} src={img.src} alt={img.alt} />
            ))}
          </div>
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
            <h1 className="article-title">{kdanData.title}</h1>
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
              {renderContent(section)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KdanPage;
