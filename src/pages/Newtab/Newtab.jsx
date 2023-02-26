import React, { useState, useEffect } from 'react';
import logo from './image/mac_image.svg';
import Title from './component/Title';
import './Newtab.scss';

const Newtab = () => {
  const [bookmarks, setBookmarks] = useState([]);
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
    chrome.bookmarks.getSubTree('0', function (tree) {
      setBookmarks(
        tree[0].children[0].children.filter((e) => e.title === 'daily')[0]
          .children
      );
    });
    console.log(bookmarks);
  }, []);

  useEffect(() => {
    const ThemeMode =
      Theme === 'Light'
        ? { background: '#ffffff', color: '#383838' }
        : { background: '#212121', color: '#ffffff' };

    setThemeMode(ThemeMode);
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
            {bookmarks.map((e) => (
              <li>
                <a href={e.url} target="_blank" rel="noreferrer">
                  {e.title}
                </a>
              </li>
            ))}
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
