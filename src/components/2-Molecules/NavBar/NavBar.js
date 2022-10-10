import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import menu from '../../../datas/menu.json';

function NavBar() {
  const activeClassName = 'underline';

  return (
    <ul className="nav">
      {menu.pages.map((p) => (
        <li key={uuid()} className={`nav-${p.toLowerCase()}`}>
          <NavLink to={`/${p.toLowerCase()}`} className={({ isActive }) => (isActive ? activeClassName : undefined)}>{p}</NavLink>
        </li>
      ))}
    </ul>

  );
}

export default NavBar;
