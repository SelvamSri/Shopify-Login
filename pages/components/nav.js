import React from 'react';
import css from '../../style.css';
import {Link} from 'react-router-dom';
function Nav() {
    const navStyle = {
        color: 'white'
    }
  return (
  <nav>
      <h2>Single Signon</h2>
      
      <Link style={navStyle} to="/email">
          <div className={css.col}>
      <li className={css.navi}>Contact</li></div>
      </Link>
      <Link style={navStyle} to="/">
      <div className={css.col1}>
      <li className={css.navi}>Guide</li></div>
      </Link>   
      <Link style={navStyle} to="/toogle">
      <div className={css.col2}>
      <li className={css.navi}>Config</li></div>
      </Link>
      
      </nav>
  );
}

export default Nav;