import React, { Component } from 'react';
import UserList from './containers/UserList';
import UserDetail from './containers/UserDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserList />
        <UserDetail />
      </div>
    );
  }
}

export default App;
