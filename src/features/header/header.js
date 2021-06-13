import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <ul>
        <NavLink to="/" activeClassName="active-item" exact>
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active-item" exact>
          About
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
