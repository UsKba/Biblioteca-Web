import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '~/contexts/AuthContext';
import { FriendsProvider } from '~/contexts/FriendsContext';

// import Routes from './routes';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <FriendsProvider>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </FriendsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
