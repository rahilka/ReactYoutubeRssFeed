import React from 'react';
import { Link } from 'react-router-dom';

const VideoListItem = ({video}) => {
  
  const title = video.snippet.title;
  const imageUrl = video.snippet.thumbnails.default.url;
  const description = video.snippet.description;
  let videoId;
  if(video.contentDetails.upload) {
    videoId = video.contentDetails.upload.videoId; 
  }
  
  return (
    <div className="col-md-6">
      <li className="list-group-item">
        <Link to={{ pathname: '/detail', state: { title, description, videoId } }}>       
          <div className="video-list media">
            <div className="media-left">
              <img src={imageUrl} alt={title} className="media-object" />
            </div>
            <div className="media-body">
              <div className="media-heading">{title}</div>
            </div>
          </div>
        </Link>
      </li>
    </div>
  );

};

export default VideoListItem;
