import styles from './styles.module.css';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <a href={video.url}
        target="_blank" 
        rel="noreferrer noopener"
        className="footer__link-item">  
        <div className={`inner-content-div ${video.bgc}`}>
          <p>{video.emojis}</p>
          <p className={styles.specialTextSizing}>{video.title}</p>
          <p>{[video.length]}</p>
        </div>
      </a>
    </div>
  );
};

export default VideoCard;