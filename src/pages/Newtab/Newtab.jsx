import React, { useState, useEffect } from 'react';
import logo from './image/mac_image.svg';
import Title from './component/Title';
import './Newtab.scss';

const Newtab = () => {
  const [Theme, setTheme] = useState(localStorage.getItem('TabTheme'));
  const [ThemeMode, setThemeMode] = useState({});
  const [hour, setHour] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const day = new Date().toString().split(' ');

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message) => {
      setTheme(message);
      localStorage.setItem('TabTheme', message);
    });
  }, []);

  useEffect(() => {
    const ThemeMode =
      Theme === 'Light'
        ? { background: '#ffffff', color: '#383838' }
        : { background: '#212121', color: '#ffffff' };

    setThemeMode(ThemeMode);

    console.log(ThemeMode);
  }, [Theme]);

  return (
    <body className="newtab" style={ThemeMode}>
      <section className="clock">
        <p className="clock__time">
          {hour.toString().length === 1 ? `0${hour}` : hour}
          {'    '}
          {minutes.toString().length === 1 ? `0${minutes}` : minutes}
        </p>
        <p className="clock__day">
          {`${day[0]}day`} , {day[1]} , {day[2]}
        </p>
      </section>

      <section className="main">
        <div className="bookmark">
          <Title title="Bookmark" width="20%" />
          <ul className="bookmark__list">
            <li>
              React 상태 관리 라이브러리 어쩌고 저쩌고 어쩌고 어쩌고 저쩌고
              어쩌고 어쩌고 저쩌고 어쩌고
            </li>
            <li>React 상태 관리 라이브러리 어쩌고 저쩌고 어쩌고</li>
            <li>React 상태 관리 라이브러리 어쩌고 저쩌고 어쩌고</li>
            <li>React 상태 관리 라이브러리 어쩌고 저쩌고 어쩌고</li>
            <li>React 상태 관리 라이브러리 어쩌고 저쩌고 어쩌고</li>
          </ul>
        </div>

        <div className="notion">
          <Title title="Notion" width="13%" />
          <textarea cols="50" rows="6" className="notion__textarea"></textarea>
        </div>
      </section>

      <section className="star">
        <img src={logo} className="App-logo" alt="logo" />
      </section>
    </body>
  );
};

export default Newtab;
