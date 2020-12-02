import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import api from '~/services/api';
import suap from '~/services/suap';

import { useFriends } from '~/contexts/FriendsContext';

interface User {
  name: string;
  email: string;
  enrollment: string;
  campus: string;
  id: number;
}

interface UserSuapResponse {
  nome: string;
  email: string;
  identificacao: string;
  campus: string;
}

interface SignInParams {
  name: string;
  email: string;
  enrollment: string;
  campus: string;
}

interface AuthContextData {
  signed: boolean;
  user: User;
  signInSuapUrl: string;
  signOut(): void;
  loading: boolean;
}

interface UserBackendResponse {
  // user: Omit<User, 'campus'>;
  user: {
    name: string;
    email: string;
    enrollment: string;
    id: number;
  };
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const friends = useFriends();
  const [user, setUser] = useState({} as User);
  const [loading, setLoading] = useState(false);
  const [isSigned, setIsSigned] = useState(false);

  const handleSignIn = useCallback(
    async (formattedUser: SignInParams) => {
      setLoading(true);

      const { email, enrollment, name, campus } = formattedUser;

      const response = await api.post<UserBackendResponse>('/login', {
        enrollment,
        name,
        email,
        // campus: user.campus,
      });

      const { token } = response.data;
      const newUser = { ...response.data.user, campus };
      // ... pega toda a informacao do response.data.user e poe no novo objeto
      localStorage.setItem('@RNAuth:user', JSON.stringify(newUser));
      localStorage.setItem('@RNAuth:token', token);
      api.defaults.headers = { authorization: `Bearer ${token}` };

      setUser(newUser);
      setLoading(false);
      setIsSigned(true);

      await friends.fetchData();
      // console.log(token);
      if (history.location.hash) {
        history.push('/');
      }
    },
    [history]
  );

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = localStorage.getItem('@RNAuth:user');
      const storagedToken = localStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.authorization = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
        setIsSigned(true);
        await friends.fetchData();
      }
    }

    loadStoragedData();
  }, []);
  useEffect(() => {
    suap.init();

    // console.log('Entrou');
    // console.log(suap.getLoginURL());
    // console.log('Authenticado', suap.isAuthenticated());

    if (suap.isAuthenticated()) {
      const scope = 'identificacao email&state=';

      suap.getResource(scope, (response: UserSuapResponse) => {
        const { campus, email, nome, identificacao } = response;
        const formattedUser = {
          name: nome,
          email,
          enrollment: identificacao,
          campus,
        };
        // chamada artificial
        handleSignIn(formattedUser);
      });
    }
  }, [handleSignIn]);

  function signOut() {
    history.push('/');
    localStorage.clear();
    suap.logout();
    setIsSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed: isSigned, user, signInSuapUrl: suap.getLoginURL(), loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
