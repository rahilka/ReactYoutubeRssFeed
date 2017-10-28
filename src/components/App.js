import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchVideos from './SearchVideos';
import VideoDetail from './VideoDetail';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={SearchVideos} />
            <Route exact path="/video/:id" component={VideoDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
