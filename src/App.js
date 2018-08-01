import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Items from './components/Items';
import Placeholder from './components/Placeholder';

class App extends Component {
  render() {
    const items = ['asdf', 'qwer', 'zxcv'];
    return (
      <div>
        <Placeholder />
        <Items items={items} />
      </div>
    );
  }
}

export default App;
