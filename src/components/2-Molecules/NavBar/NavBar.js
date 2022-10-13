import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import menu from '../../../datas/menu.json';

import './navBar.scss';

function NavBar() {
  const activeClassName = 'underline';

  return (
    <ul className="nav">
      {menu.pages.map((p) => (
        <NavLink key={uuid()} to={`/${p.toLowerCase()}`} className={({ isActive }) => (isActive ? activeClassName : undefined)}>
          <li className={`nav-${p.toLowerCase()}`}>
            {p}
          </li>
        </NavLink>
      ))}
    </ul>

  );
}

export default NavBar;
