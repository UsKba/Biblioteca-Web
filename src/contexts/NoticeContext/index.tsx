import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { getRequest, postRequest } from '~/utils/api';

import { useAuth } from '~/contexts/AuthContext';
import { Notice } from '~/types';

interface CreateNoticeParams {
  title: string;
  content: string;
  expiredAt: string;
  imageCode: number;
  type: number;

  // caso seja de sala ou computador
  data?: {
    id: number;
    status: number;
  };
}

interface NoticeContextData {
  notices: Notice[];
  createNotice: (data: CreateNoticeParams) => Promise<void>;
}

const NoticeContext = createContext<NoticeContextData>({} as NoticeContextData);

export const NoticeProvider: React.FC = ({ children }) => {
  const authContext = useAuth();

  const [notices, setNotices] = useState<Notice[]>([]);

  const createNotice = useCallback(
    async (requestData: CreateNoticeParams) => {
      const { data, error } = await postRequest<Notice>('/notices', requestData);

      if (error) {
        alert(error.error);
        return;
      }

      if (data) {
        setNotices([...notices, data]);
      }
    },
    [notices]
  );

  const loadNotices = useCallback(async () => {
    const { data, error } = await getRequest<Notice[]>('/notices');

    if (error) {
      alert(error.error);
      return;
    }

    console.log(data);

    if (data) {
      setNotices(data);
    }
  }, []);

  useEffect(() => {
    authContext.addListener(loadNotices);
    return () => {
      authContext.removeListener(loadNotices);
    };
  }, [authContext, loadNotices]);

  return <NoticeContext.Provider value={{ notices, createNotice }}>{children}</NoticeContext.Provider>;
};

export function useNotice() {
  const context = useContext(NoticeContext);

  return context;
}

export default NoticeContext;
