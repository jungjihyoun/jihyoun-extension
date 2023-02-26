import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p
          onClick={() => {
            chrome.runtime.sendMessage('Light');
          }}
        >
          Light
        </p>
        <p
          onClick={() => {
            chrome.runtime.sendMessage('Dark');
          }}
        >
          {' '}
          Dark
        </p>
      </header>
    </div>
  );
};

export default Popup;
