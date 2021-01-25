/* eslint-disable no-alert */
import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';

import api from '~/services/api';

import { useAuth } from '~/contexts/AuthContext';
import { Friend, User } from '~/types';

interface FriendsRequests {
  sent: {
    id: number;
    status: number;
    sender: User;
    receiver: User;
  }[];
  received: {
    id: number;
    status: number;
    sender: User;
    receiver: User;
  }[];
}

interface FriendsContextData {
  friends: Friend[];
  requests: FriendsRequests;

  loadFriends: () => Promise<void>;
  sendInvite: (enrollment: string) => Promise<void>;
  acceptInvite: (inviteId: number) => Promise<void>;
  recuseInvite: (inviteId: number) => Promise<void>;
}

const FriendsContext = createContext<FriendsContextData>({} as FriendsContextData);

export const FriendsProvider: React.FC = ({ children }) => {
  const authContext = useAuth();
  const [friends, setFriends] = useState<Friend[]>([]);
  const [requests, setRequests] = useState<FriendsRequests>({ sent: [], received: [] });

  const loadFriends = useCallback(async () => {
    const friendsResponse = await api.get<Friend[]>('friends');
    const requestsResponse = await api.get<FriendsRequests>('friends/request');

    setFriends(friendsResponse.data);

    setRequests(requestsResponse.data);
  }, []);

  const sendInvite = useCallback(async (enrollment: string) => {
    await api.post('friends/request', {
      receiverEnrollment: enrollment,
    });
    alert('Pedido enviado.');
  }, []);

  const acceptInvite = useCallback(
    async (inviteId: number) => {
      await api.post('friends/request/confirmation', {
        id: inviteId,
      });

      loadFriends();
    },
    [loadFriends]
  );

  const recuseInvite = useCallback(
    async (inviteId: number) => {
      await api.delete(`friends/request/${inviteId}`);
      loadFriends();
    },
    [loadFriends]
  );

  useEffect(() => {
    authContext.addListener(loadFriends);
    return () => {
      authContext.removeListener(loadFriends);
    };
  }, [authContext, loadFriends]);

  return (
    <FriendsContext.Provider value={{ friends, loadFriends, requests, sendInvite, recuseInvite, acceptInvite }}>
      {children}
    </FriendsContext.Provider>
  );
};

export function useFriends() {
  const context = useContext(FriendsContext);

  return context;
}

export default FriendsContext;
