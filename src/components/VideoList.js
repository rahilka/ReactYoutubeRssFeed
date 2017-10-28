import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({videos}) => {	
  let filteredVideos = videos;
  
  for (let i = 0; i<videos.length; i++) {
    if(videos[i].kind === 'youtube#activity') {
      filteredVideos = videos.filter(video => video.snippet.type === 'upload');
    } 
  }

	const videoItems = filteredVideos.map((video) => {
      return (
        <VideoListItem
          key={video.etag}
          video={video} 
        />
      )
  });

	return (
		<div className="row">
      <ul>{videoItems}</ul>
    </div>
	);

}

export default VideoList;
