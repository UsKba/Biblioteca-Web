import { useCallback, useRef } from 'react';

export function useListener<T = any>() {
  const listeners = useRef([] as T[]);

  const addListener = useCallback((listener: T) => {
    listeners.current.push(listener);
  }, []);

  const removeListener = useCallback((listener: T) => {
    const listenersUpdated = listeners.current.filter((currentListener) => currentListener !== listener);
    listeners.current = listenersUpdated;
  }, []);

  return {
    listeners: listeners.current,
    addListener,
    removeListener,
  };
}
