import React from 'react';
import { v4 as uuid } from 'uuid';

import Button from '../../1-Atoms/Button/Button';
import TitleChapter from '../../1-Atoms/TitleChapter/TitleChapter';

import menu from '../../../datas/menu.json';

function Sections() {
  return (
    <section className="breedsOrFacts">
      {
        menu.pages.map((m) => (
          <article key={uuid()} className={`breedsOrFacts-${m.toLowerCase()}`}>
            <TitleChapter title={`Explore all ${m.toLowerCase()}`} />
            <Button name={m} />
          </article>
        ))
      }
    </section>
  );
}

export default Sections;
