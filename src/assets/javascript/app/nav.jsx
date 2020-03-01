import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Bullet from '../../../../static/images/bullet.svg';

const Nav = ( props ) => {
  const {
    data,
  } = props;
  return (
    <div className="nav">
      <NavLink exact to="/about" activeClassName="active">
        <Bullet />
      </NavLink>
    </div>
  );
};

export default Nav;
