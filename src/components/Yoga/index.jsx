import React from 'react';
import VideoCard from './VideoCard';
import data from './data.json';

const yoga = data.yoga;

const Yoga = () => {
 
  return (
    <div className="app-layout">
      <h3>Some Suggested Yoga Videos:</h3>
      <div className="row">
        <div className="column">
          <div className="video-card-wrapper">{yoga.map((item) => <VideoCard video={item} />)}</div>
        </div>
      </div>
    </div>
  );
};

export default Yoga;
