import React from 'react';
import logo from './logo.svg';
import ConfiguratorContainer from './components/ConfiguratorContainer';
import ConfiguredImageContainer from './components/ConfiguredImageContainer';
import './App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h4>Configure your new bike</h4>
        </div>
      </div>
      <div className="row">
        <div className="col m12 l8">
          <ConfiguratorContainer />
        </div>
        <div className="col m12 l4">
          <ConfiguredImageContainer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
