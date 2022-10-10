import React from 'react';
import { v4 as uuid } from 'uuid';

import Button from '../../1-Atoms/Button/Button';
import TitleChapter from '../../1-Atoms/TitleChapter/TitleChapter';

import menu from '../../../datas/menu.json';

function Sections() {
  return (
    <>
      {
        menu.pages.map((m) => (
          <section key={uuid()} className={`section-${m.toLowerCase()}`}>
            <TitleChapter title={`Explore all ${m.toLowerCase()}`} />
            <Button name={m} />
          </section>
        ))
      }
    </>
  );
}

export default Sections;
