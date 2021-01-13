import React, { createContext, useState, useContext, useCallback } from 'react';

import api from '~/services/api';

interface Invite {
  id: number;
  receiverId: number;

  sender: {
    id: number;
    name: string;
    email: string;
    enrollment: string;
  };
}

interface Friend {
  id: number;
  name: string;
  enrollment: string;
  email: string;
}

interface FriendsRequests {
  sent: {
    id: number;
    status: number;
    sender: {
      id: number;
      name: string;
      email: string;
      enrollment: string;
    };
    receiver: {
      id: number;
      name: string;
      email: string;
      enrollment: string;
    };
  }[];
  received: {
    id: number;
    status: number;
    sender: {
      id: number;
      name: string;
      email: string;
      enrollment: string;
    };
    receiver: {
      id: number;
      name: string;
      email: string;
      enrollment: string;
    };
  }[];
}

interface Users {
  id: number;
  name: string;
  email: string;
  enrollment: string;
}

interface FriendsContextData {
  friends: Friend[];
  requests: FriendsRequests;
  users: Users[];
  loadFriends: () => Promise<void>;
  sendInvite: (enrollment: string) => Promise<void>;
  acceptInvite: (inviteId: number) => Promise<void>;
  recuseInvite: (inviteId: number) => Promise<void>;
}

const FriendsContext = createContext<FriendsContextData>({} as FriendsContextData);

export const FriendsProvider: React.FC = ({ children }) => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [users, setUsers] = useState<Users[]>([]);
  const [requests, setRequests] = useState<FriendsRequests>({ sent: [], received: [] });

  const loadFriends = useCallback(async () => {
    const friendsResponse = await api.get<Friend[]>('friends');
    const usersResponse = await api.get<Users[]>('users');
    const requestsResponse = await api.get<FriendsRequests>('friends/request');

    setFriends(friendsResponse.data);
    setUsers(usersResponse.data);
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

  return (
    <FriendsContext.Provider value={{ friends, users, loadFriends, requests, sendInvite, recuseInvite, acceptInvite }}>
      {children}
    </FriendsContext.Provider>
  );
};

export function useFriends() {
  const context = useContext(FriendsContext);

  return context;
}

export default FriendsContext;
