import React from 'react';

const VideoDetail = (props) => {
	const {title, description, videoId} = props.location.state;

  const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className = "video-detail col-md-8">
      <div className = "embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title={title}></iframe>
      </div>
      <div className="details">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
	);
}

export default VideoDetail;
