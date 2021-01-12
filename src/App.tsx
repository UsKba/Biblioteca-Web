import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '~/contexts/AuthContext';
import { FriendsProvider } from '~/contexts/FriendsContext';
import { ReserveProvider } from '~/contexts/ReserveContext';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <FriendsProvider>
          <ReserveProvider>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </ReserveProvider>
        </FriendsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
