import React from 'react';

const VideoListItem = ({video}) => {
  const title = video.snippet.title;
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => console.log('clicked video')}>
      <div>
        <img src={imageUrl} alt={title} />
        <div>{title}</div>
      </div>
    </li>
  );
};

export default VideoListItem;
