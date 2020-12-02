import React, { createContext, useState, useContext, useCallback } from 'react';

import api from '~/services/api';

interface Invite {
  id: number;
  senderId: number;
  receiverId: number;
}

interface Friend {
  id: number;
  name: string;
  enrollment: string;
  email: string;
}

interface FriendsContextData {
  friends: Friend[];
  invites: Invite[];
  fetchData: () => void;
  sendInvite: (enrollment: number) => Promise<void>;
  acceptInvite: (inviteId: number) => Promise<void>;
}

const FriendsContext = createContext<FriendsContextData>({} as FriendsContextData);

export const FriendsProvider: React.FC = ({ children }) => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [invites, setInvites] = useState<Invite[]>([]);

  const fetchData = useCallback(async () => {
    const friendsResponse = await api.get<Friend[]>('friends');
    const invitesResponse = await api.get<Invite[]>('invites');

    setFriends(friendsResponse.data);
    setInvites(invitesResponse.data);
  }, []);

  const sendInvite = useCallback(async (enrrolment: number) => {
    await api.post('invites', {
      receiverId: enrrolment,
    });
  }, []);

  const acceptInvite = useCallback(
    async (inviteId: number) => {
      await api.post('invites/confirmation', {
        id: inviteId,
      });

      fetchData();
    },
    [fetchData]
  );

  return (
    <FriendsContext.Provider value={{ friends, fetchData, invites, sendInvite, acceptInvite }}>
      {children}
    </FriendsContext.Provider>
  );
};

export function useFriends() {
  const context = useContext(FriendsContext);

  return context;
}

export default FriendsContext;
