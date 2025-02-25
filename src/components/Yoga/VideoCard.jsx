import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <a href={video.url}
        target="_blank" 
        rel="noreferrer noopener"
        className="footer__link-item">  
        <div className={`inner-content-div ${video.bgc}`}>
          <div className="bigger-font">{video.emojis}</div>
          <div className="unstyled-text responsive-text footer__link-item">{video.title}
          <h5>{[video.length]}</h5>
          </div>
        </div>
      </a>
    </div>
  );
};

export default VideoCard;