import React from 'react';

import Title from '../../1-Atoms/Title/Title';
import NavBar from '../../2-Molecules/NavBar/NavBar';

import menu from '../../../datas/menu.json';

import './header.scss';

function Header() {
  return (
    <header className="header">
      <Title title={menu.title} />
      <NavBar />
    </header>
  );
}

export default Header;
