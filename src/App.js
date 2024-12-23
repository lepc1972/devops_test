import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.linkedin.com/in/lepc72/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LEPC72
        </a>
      </header>
      <p>
          Application version: 1
      </p>
    </div>
  );
}

export default App;
