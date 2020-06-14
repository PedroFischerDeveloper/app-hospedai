import React from 'react';
import Header from './src/Pages/Components/Header/Header';
import Routes from './src/Pages/routes';

import {ContrastProvider} from './src/Pages/Contexts/contrastContext';
import {AuthProvider} from './src/Pages/Contexts/authContext';

export default function App() {
  return (
    <>
      <ContrastProvider>
        <AuthProvider>
          <Header />
          <Routes />
        </AuthProvider>
      </ContrastProvider>
    </>
  );
}
