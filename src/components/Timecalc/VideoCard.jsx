import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <a href={video.url} target="_blank" rel="noreferrer noopener" className={`table-cell special-cell spacing-class ${video.bgc}`}>
      <div className="bigger-font">{video.emojis}</div>
      <p className="unstyled-text responsive-text">{video.title}</p>
      <p className="unstyled-text responsive-text">[{video.length}]</p>
    </a>
  );
};

export default VideoCard;
