import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ data }) => {
  return (
    <header className="header">
      {data.title && (
        <h1 className="header--headline">
          <NavLink exact to="/" activeClassName="active">
            {data.title}
          </NavLink>
        </h1>
      )}
    </header>
  );
};

export default Header;
