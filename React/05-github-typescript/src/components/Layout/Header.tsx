import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.css';
import logo from '../../assets/images/Github_logo.png';

const Header: FC = () => (
  <div className={classes.header}>
    <Link to="/issues">
      <img src={logo} alt="logo" />
    </Link>
  </div>
);

export default Header;
