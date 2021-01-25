import { useCallback, useRef } from 'react';

type DefaultListener = (data?: any) => any;
type DefaultAsyncListener = (data?: any) => Promise<any>;

export function useListener<T extends DefaultListener>() {
  const listeners = useRef([] as T[]);

  const addListener = useCallback((listener: T) => {
    listeners.current.push(listener);
  }, []);

  const removeListener = useCallback((listener: T) => {
    const listenersUpdated = listeners.current.filter((currentListener) => currentListener !== listener);
    listeners.current = listenersUpdated;
  }, []);

  const notifyListeners = useCallback((data?: any) => {
    for (let i = 0; i < listeners.current.length; i += 1) {
      const listenerFn = listeners.current[i];
      listenerFn(data);
    }
  }, []);

  return {
    listeners: listeners.current,
    addListener,
    removeListener,
    notifyListeners,
  };
}

export function useAsyncListener<T extends DefaultAsyncListener>() {
  const listeners = useRef([] as T[]);

  const addListener = useCallback((listener: T) => {
    listeners.current.push(listener);
  }, []);

  const removeListener = useCallback((listener: T) => {
    const listenersUpdated = listeners.current.filter((currentListener) => currentListener !== listener);
    listeners.current = listenersUpdated;
  }, []);

  const notifyListeners = useCallback(async (data?: any) => {
    console.log('iniciou');
    for (let i = 0; i < listeners.current.length; i += 1) {
      const listenerFn = listeners.current[i];
      // eslint-disable-next-line no-await-in-loop
      await listenerFn(data);
    }
    console.log('terminou');
  }, []);

  return {
    listeners: listeners.current,
    addListener,
    removeListener,
    notifyListeners,
  };
}
