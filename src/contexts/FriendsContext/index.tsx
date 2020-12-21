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

interface FriendsContextData {
  friends: Friend[];
  requests: FriendsRequests;
  fetchData: () => void;
  sendInvite: (enrollment: string) => Promise<void>;
  acceptInvite: (inviteId: number) => Promise<void>;
  recuseInvite: (inviteId: number) => Promise<void>;
}

const FriendsContext = createContext<FriendsContextData>({} as FriendsContextData);

export const FriendsProvider: React.FC = ({ children }) => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [requests, setRequests] = useState<FriendsRequests>({ sent: [], received: [] });

  const fetchData = useCallback(async () => {
    const friendsResponse = await api.get<Friend[]>('friends');
    const requestsResponse = await api.get<FriendsRequests>('friends/request');

    setFriends(friendsResponse.data);
    setRequests(requestsResponse.data);
    console.log('Fez o fetch');
  }, []);

  const sendInvite = useCallback(async (enrollment: string) => {
    await api.post('friends/request', {
      receiverEnrollment: enrollment,
    });
  }, []);

  const acceptInvite = useCallback(
    async (inviteId: number) => {
      await api.post('friends/request/confirmation', {
        id: inviteId,
      });

      fetchData();
    },
    [fetchData]
  );

  const recuseInvite = useCallback(
    async (inviteId: number) => {
      await api.delete(`friends/request/${inviteId}`);
      fetchData();
    },
    [fetchData]
  );

  return (
    <FriendsContext.Provider value={{ friends, fetchData, requests, sendInvite, recuseInvite, acceptInvite }}>
      {children}
    </FriendsContext.Provider>
  );
};

export function useFriends() {
  const context = useContext(FriendsContext);

  return context;
}

export default FriendsContext;
