import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <a href={video.url} target="_blank" rel="noreferrer noopener">
      <div className="video-card pill-shape">
        <div className={`inner-content-div ${video.bgc}`}>
          <div className="bigger-font">{video.emojis}</div>
          <div className="unstyled-text responsive-text">{video.title}</div>
          <div className="unstyled-text responsive-text">[{video.length}]</div>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;