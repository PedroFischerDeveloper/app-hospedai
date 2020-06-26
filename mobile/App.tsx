import React from 'react';
import Routes from './src/Pages/routes';

import {ContrastProvider} from './src/Pages/Contexts/contrastContext';
import {AuthProvider} from './src/Pages/Contexts/authContext';

export default function App() {
  return (
    <>
      <ContrastProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ContrastProvider>
    </>
  );
}
