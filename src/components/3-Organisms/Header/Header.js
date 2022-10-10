import React from 'react';

import Title from '../../1-Atoms/Title/Title';
import NavBar from '../../2-Molecules/NavBar/NavBar';

import menu from '../../../datas/menu.json';

function Header() {
  return (
    <header>
      <Title title={menu.title} />
      <NavBar />
    </header>
  );
}

export default Header;
