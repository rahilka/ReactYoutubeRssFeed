import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
	
  // eslint-disable-next-line
	const videoItems = props.videos.map((video) => {

    if (video.contentDetails.upload) {
      return (
        <VideoListItem
          key={video.etag}
          video={video} 
        />
      )
    }

  });

	return (
		<div className="row">
      <ul>{videoItems}</ul>
    </div>
	);

}

export default VideoList;
