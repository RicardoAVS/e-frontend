import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/brandlogo.svg';

import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo"/>  
    </Link>
    <div className="nav-links">
      <Link className='option'>
        SHOP
      </Link>
      <Link className='option'>
        CONTACT 
      </Link>
    </div>
  </div>
)
export default Header;
