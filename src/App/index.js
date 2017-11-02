import React, { Component } from 'react';
import logo from '../logo.svg';
import './index.css';
import { Overdue, ComingUp, Timeless, Completed } from '../TaskLists';
import { RegistrationForm, LoginForm, TaskForm, ProfileForm } from '../Form';
import Button from '../Button';
import Nav from '../Nav';
import Profile from '../Profile';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h2>PyTasks</h2>
        <Profile />
      </div>
    );
  }
}

export default App;
