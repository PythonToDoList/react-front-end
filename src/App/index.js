import React, { Component } from 'react';
import logo from '../logo.svg';
import './index.css';
import Table from '../Table';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>PyTasks</h2>
        <Table />
      </div>
    );
  }
}

export default App;
