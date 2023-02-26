import React from 'react';
import Title from './component/Title';
import './Newtab.scss';

const Newtab = () => {
  return (
    <div className="newtab">
      <header className="clock">
        <p className="clock__time">09:29</p>
        <p className="clock__day">March , Tuesday</p>
      </header>

      <main className="main">
        <div className="main__left">
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

          {/* <div className="news">
            <Title title="News" width="8%" />
            <ul>
              <li>React 상태 관리 라이브러리 어쩌고 저쩌고 어쩌고 </li>
              <li>React 상태 관리 라이브러리 어쩌고 저쩌고 어쩌고</li>
              <li>React 상태 관리 라이브러리 어쩌고 저쩌고 어쩌고</li>
              <li>React 상태 관리 라이브러리 어쩌고 저쩌고 어쩌고</li>
              <li>React 상태 관리 라이브러리 어쩌고 저쩌고 어쩌고</li>
            </ul>
          </div> */}
        </div>

        <div className="main__right">
          <div className="notion">
            <Title title="Notion" width="10%" />
            <textarea
              cols="50"
              rows="6"
              className="notion__textarea"
            ></textarea>
          </div>
        </div>
      </main>

      <div>즐찾</div>
    </div>
  );
};

export default Newtab;
