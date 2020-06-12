import React from 'react';
import Header from './src/Pages/Components/Header/Header';
import Routes from './src/Pages/routes';

import {ContrastProvider} from './src/Pages/Contexts/contrastContext';

export default function App() {
  return (
    <>
      <ContrastProvider>
        <Header />
        <Routes />
      </ContrastProvider>
    </>
  );
}
