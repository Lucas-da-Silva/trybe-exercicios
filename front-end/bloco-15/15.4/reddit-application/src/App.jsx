import React, { Component } from 'react';
import Header from './components/Header';
import Subreddits from './components/Subreddits';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Subreddits />
      </div>
    );
  }
};

export default App;
