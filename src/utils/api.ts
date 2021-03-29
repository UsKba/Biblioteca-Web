import { AxiosRequestConfig } from 'axios';
// import useSWR from 'swr';

import api from '~/services/api';

interface RequestError {
  error: string;
}

export async function getRequest<T = any, E = RequestError>(url: string, config?: AxiosRequestConfig) {
  try {
    const response = await api.get(url, config);

    return {
      data: response.data as T,
    };
  } catch (e) {
    const error = e.response.data as E;

    return {
      error,
    };
  }
}

// export async function useFetch<T = any, E = RequestError>(url: string) {
//   // eslint-disable-next-line no-shadow
//   const { data, error } = useSWR<T, E>(url, async (url) => {
//     const response = await api.get(url);

//     return response.data;
//   });

//   return { data, error };
// }

// export function useFetch<T = any, E = RequestError>(url: string, config?: AxiosRequestConfig) {
//   // eslint-disable-next-line no-shadow
//   const { data } = useSWR(url, async (url) => {
//     try {
//       const response = await fetch(url, config);
//       // eslint-disable-next-line no-shadow
//       const data = await response.json();

//       return {
//         data,
//       };
//     } catch (e) {
//       const error = e.response.data as E;

//       return {
//         error,
//       };
//     }
//   });
// }

export async function postRequest<T = any, E = RequestError>(url: string, data?: any, config?: AxiosRequestConfig) {
  try {
    const response = await api.post(url, data, config);

    return {
      data: response.data as T,
    };
  } catch (e) {
    const error = e.response.data as E;

    return {
      error,
    };
  }
}

export async function putRequest<T = any, E = RequestError>(url: string, data: any, config?: AxiosRequestConfig) {
  try {
    const response = await api.put(url, data, config);

    return {
      data: response.data as T,
    };
  } catch (e) {
    const error = e.response.data as E;

    return {
      error,
    };
  }
}

export async function deleteRequest<T = any, E = RequestError>(url: string, config?: AxiosRequestConfig) {
  try {
    const response = await api.delete(url, config);

    return {
      data: response.data as T,
    };
  } catch (e) {
    const error = e.response.data as E;

    return {
      error,
    };
  }
}
