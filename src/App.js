import React from 'react';
import logo from './logo.svg';
import ConfiguratorContainer from './components/ConfiguratorContainer';
import './App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col s8">
          <ConfiguratorContainer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
