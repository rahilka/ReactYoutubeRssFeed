import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
	
	const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        key = {video.etag}
        video = {video} />
    )
  });

	return (
		<div className="row">
      <ul>{videoItems}</ul>
    </div>
	);

}

export default VideoList;
