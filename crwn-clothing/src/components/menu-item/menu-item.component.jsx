import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imgUrl, size, history, linkUrl, match}) => (
  <div className={`${size} menu-item`}>
    <div className="background-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    />
    <div className="content">
      <h1 className="title">{ title }</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
