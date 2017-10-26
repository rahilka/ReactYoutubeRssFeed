import React from 'react';

const VideoListItem = ({video}) => {
  
  const title = video.snippet.title;
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <div className="col-md-4">
      <li onClick={() => console.log('clicked video')} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img src={imageUrl} alt={title} className="media-object" />
          </div>
          <div className="media-body">
            <div className="media-heading">{title}</div>
          </div>
        </div>
      </li>
    </div>
  );

};

export default VideoListItem;
