import React from 'react';

import Main from '../Main/Main';
import RandomFact from '../../2-Molecules/RandomFact/RandomFact';
import Sections from '../../2-Molecules/Sections/Sections';

function Home() {
  return (
    <Main>
      <RandomFact />
      <Sections />
    </Main>

  );
}

export default Home;
