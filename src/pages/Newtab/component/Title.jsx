import React from 'react';
import './Title.scss';

const Title = ({ title, width }) => {
  return (
    <div className="Title" style={{ width: width }}>
      <p>{title}</p>
    </div>
  );
};

export default Title;
