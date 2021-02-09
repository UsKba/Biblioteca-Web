import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useAsyncListener } from '~/hooks/listener';

import api from '~/services/api';
import suap from '~/services/suap';

import { User } from '~/types';

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

// temp
interface UserWithCampus extends User {
  campus: string;
}

type Listener = () => Promise<void>;

interface AuthContextData {
  signed: boolean;
  user: UserWithCampus;
  signInSuapUrl: string;
  loading: boolean;
  signOut(): void;
  addListener: (listener: Listener) => void;
  removeListener: (listener: Listener) => void;
}

interface UserBackendResponse {
  user: User;
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const signInListener = useAsyncListener();

  // const { loadFriends } = useFriends();
  // const { loadReserves } = useReserve();

  const [user, setUser] = useState({} as UserWithCampus);
  const [loading, setLoading] = useState(false);
  const [isSigned, setIsSigned] = useState(false);

  // const handleLoginFinish = useCallback(async () => {
  //   await loadFriends();
  //   await loadReserves();
  // }, [loadFriends, loadReserves]);

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

      localStorage.setItem('@RNAuth:user', JSON.stringify(newUser));
      localStorage.setItem('@RNAuth:token', token);
      api.defaults.headers = { authorization: `Bearer ${token}` };

      setUser(newUser);
      setLoading(false);
      setIsSigned(true);

      await signInListener.notifyListeners();
      // console.log(token);
      if (history.location.hash) {
        history.push('/');
      }
    },
    // bug ao adicionar a dependência signInListener o site crasha
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

        await signInListener.notifyListeners();
      }
    }

    loadStoragedData();
    // bug ao adicionar a dependência signInListener o site crasha
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    suap.init();

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

  const signOut = useCallback(() => {
    localStorage.clear();
    suap.logout();
    setIsSigned(false);
    history.push('/');
  }, [history]);

  return (
    <AuthContext.Provider
      value={{
        signed: isSigned,
        user,
        signInSuapUrl: suap.getLoginURL(),
        loading,
        signOut,
        addListener: signInListener.addListener,
        removeListener: signInListener.removeListener,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
