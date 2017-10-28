import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({videos}) => {	
  let filteredVideos = videos;
  
  // when fetching activities, the response contains different types of videos,
  // ex: upload, playlistItem, recommendation etc.
  // here we filter to show only the videos with type of 'upload'
  // if the videos are from the search api call, we don't need to filter them
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
