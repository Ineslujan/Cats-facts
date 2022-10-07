import React from 'react';

import Button from '../Atoms/Button/Button';
import RefreshFactButton from '../Atoms/RefreshFactButton/RefreshFactButton';
import Title from '../Atoms/Title/Title';
import TitleChapter from '../Atoms/TitleChapter/TitleChapter';
import RandomFact from '../RandomFact/RandomFact';

function Home() {
  return (
    <>
      <Title title="Welcome" />
      <main>
        <section>
          <RandomFact />
          <RefreshFactButton />
        </section>
        <section>
          <TitleChapter title="Explore all breeds" />
          <Button name="Breeds" />
        </section>
        <section>
          <TitleChapter title="Explore all facts" />
          <Button name="Facts" />
        </section>
      </main>
    </>
  );
}

export default Home;
