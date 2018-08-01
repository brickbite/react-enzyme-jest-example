import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Items from './components/Items';

class App extends Component {
  render() {
    const items = ['asdf', 'qwer', 'zxcv'];
    return (
      <Items items={items}/>
    );
  }
}

export default App;
