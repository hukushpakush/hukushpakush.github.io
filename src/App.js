import React from 'react';
import logo from './Sharmin.jpeg';
import linkedin from './linkedin.png';
import twitter from './twitter.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am Sharmin and I will become a React Pro!
        </p>
        <a
          className="App-link"
          href="https://github.com/hukushpakush"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check me out on github!
        </a>
        <div className="Socials">
           <a
          className="Linkedin"
          href="https://linkedin.com/in/sharmint"
        >
          <img src={linkedin} alt="linkedin logo" width="43" height="44" ></img>
        </a>
        <a
          className="Twitter"
          href="https://twitter.com/hukushpakush"
        >
          <img src={twitter} alt="twitter logo" width="38" height="38" ></img>
      
        </a>
        </div>
      
      
      </header>
    </div>
  );
}

export default App;
