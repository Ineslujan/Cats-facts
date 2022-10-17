import React from 'react';
import { Link } from 'react-router-dom';

import SvgCat from '../../1-Atoms/SvgCat/SvgCat';
import Title from '../../1-Atoms/Title/Title';

import menu from '../../../datas/menu.json';

import './logo.scss';

function Logo() {
  return (
    <Link to="/">
      <h1 className="logo">
        <SvgCat />
        <Title title={menu.title} />
      </h1>
    </Link>
  );
}

export default Logo;
