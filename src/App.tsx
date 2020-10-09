import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '~/contexts/AuthContext';

// import Routes from './routes';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
