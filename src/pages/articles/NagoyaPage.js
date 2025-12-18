import React from 'react';
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
        <img
          key={imgIndex}
          src={img.src}
          alt={img.alt}
          className="block max-w-[80%] mx-auto mb-6 rounded-tr-4 rounded-bl-4 object-contain max-h-[500px]"
          loading="lazy"
        />
      ));

    const heading = (
      <div className="mb-2">
        {renderHeader(section.headerType, section.title)}
      </div>
    );

    if (contentType === 'list') {
      return (
        <div className="space-y-4">
          {heading}
          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {renderImages()}
        </div>
      );
    }

    if (contentType === 'paragraph') {
      return (
        <div className="space-y-4">
          {heading}
          <p className="text-base leading-relaxed text-white/90">{content}</p>
          {renderImages()}
        </div>
      );
    }

    if (contentType === 'demonstration') {
      const isLeftPosition = section.position === 'left';
      return (
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {isLeftPosition ? (
            <>
              <div className="space-y-2">
                <h5 className="text-lg font-semibold text-main">
                  {section.title}
                </h5>
                <h4 className="text-xl leading-relaxed">{content}</h4>
              </div>
              <div className="flex justify-center">{renderImages()}</div>
            </>
          ) : (
            <>
              <div className="flex justify-center">{renderImages()}</div>
              <div className="space-y-2">
                <h5 className="text-lg font-semibold text-main">
                  {section.title}
                </h5>
                <h4 className="text-xl leading-relaxed">{content}</h4>
              </div>
            </>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full px-4 md:px-6 lg:px-10 max-w-6xl mx-auto pt-24 pb-12 space-y-12">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">{nagoyaData.title}</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="uppercase text-sm text-white/70 tracking-wide">
              service
            </p>
            <h6 className="text-lg font-monoSemi">{nagoyaData.service}</h6>
          </div>
          <div>
            <p className="uppercase text-sm text-white/70 tracking-wide">
              timeline
            </p>
            <h6 className="text-lg font-monoSemi">{nagoyaData.timeline}</h6>
          </div>
          <div>
            <p className="uppercase text-sm text-white/70 tracking-wide">
              team
            </p>
            <h6 className="text-lg font-monoSemi">{nagoyaData.role}</h6>
          </div>
        </div>
        <p className="text-base leading-relaxed text-white/90">
          {nagoyaData.description}
        </p>
      </div>

      <div className="space-y-8">
        {nagoyaData.images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="block max-w-[80%] mx-auto rounded-tr-4 rounded-bl-4 object-contain max-h-[600px]"
            loading="lazy"
          />
        ))}
      </div>

      <div className="space-y-10">
        {nagoyaData.sections.map((section, index) => (
          <div key={index} className="space-y-4">
            {renderContent(section)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NagoyaPage;
