import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import VideoList from './VideoList';
import SearchBar from './SearchBar';
const API_KEY = 'AIzaSyDeLsFCPL3Yrjj5mApMASa-kj5uMsAd-yk';  //youtube api key
const channelId = 'UCDPM_n1atn2ijUwHd0NNRQw'; //Coldplay channel id

// SearchVideos will render both SearchBar and VideoList component
class SearchVideos extends Component {
  constructor(props) {
    super(props);

    // default state:
    this.state = { 
      videos: []
    };
    
    this.fetchFeeds();
  }

  // fetchFeeds: function to fetch the channel activities data
  fetchFeeds() {
    axios({
      method: 'GET',
      url: `https://www.googleapis.com/youtube/v3/activities?channelId=${channelId}&key=${API_KEY}&part=snippet,contentDetails&maxResults=50&type=upload`,
    })
    .then(res => {
      this.setState({ videos: res.data.items });
    })
    .catch(err => {
      console.log('ERROR: ', err);
    });
  }

  // videoSearch is called on the search input
  videoSearch(search_term) {
    axios({
      method: 'GET',
      url: `https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&key=${API_KEY}&part=snippet&maxResults=25&q=${search_term}`,
    })
    .then(res => {
      this.setState({ videos: res.data.items });
    })
    .catch(err => {
      console.log('ERROR: ', err);
    });
  }

  render() {

    // debounce: takes the inner function and returns new function that can only be called once every 300 ms
    const videoSearch = _.debounce((search_term) => { this.videoSearch(search_term) }, 300);

    return (
      <div>
	      <SearchBar onSearchTermChange={videoSearch} />
	      <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default SearchVideos;
