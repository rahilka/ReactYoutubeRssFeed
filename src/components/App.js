import React, { Component } from 'react';
// import logo from '../logo.svg';
// import '../App.css';
import VideoList from './VideoList';
import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}

export default App;
