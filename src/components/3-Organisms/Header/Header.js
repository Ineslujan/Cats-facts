import React from 'react';

import NavBar from '../../2-Molecules/NavBar/NavBar';
import Logo from '../../2-Molecules/Logo/Logo';

import './header.scss';

function Header() {
  return (
    <header className="header">
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
