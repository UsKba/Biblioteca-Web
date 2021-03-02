/* eslint-disable import/extensions */
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
        <AuthProvider>
          <FriendsProvider>
            <ReserveProvider>
              <Routes />
            </ReserveProvider>
          </FriendsProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
