import React, { Component } from 'react';
import axios from 'axios';
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
    console.log(search_term);
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange = {this.videoSearch} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
