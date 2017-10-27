import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
// import logo from '../logo.svg';
import '../App.css';
import VideoList from './VideoList';
import SearchBar from './SearchBar';
const API_KEY = 'AIzaSyDeLsFCPL3Yrjj5mApMASa-kj5uMsAd-yk';
const channelId = 'UCDPM_n1atn2ijUwHd0NNRQw';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    
    this.fetchFeeds();
  }

  fetchFeeds() {
    axios({
      method: 'GET',
      url: `https://www.googleapis.com/youtube/v3/activities?channelId=${channelId}&key=${API_KEY}&part=snippet,contentDetails&maxResults=50`,
    })
    .then(res => {
      this.setState({ videos: res.data.items });
    })
    .catch(err => {
      console.log('ERROR: ', err);
    });
  }

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

    const videoSearch = _.debounce((search_term) => { this.videoSearch(search_term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
