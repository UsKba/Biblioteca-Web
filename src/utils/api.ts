import api from '~/services/api';

interface RequestError {
  error: string;
}

export async function getRequest<T = any, E = RequestError>(url: string) {
  try {
    const response = await api.get(url);

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

export async function postRequest<T = any, E = RequestError>(url: string, data?: any) {
  try {
    const response = await api.post(url, data);

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

export async function putRequest<T = any, E = RequestError>(url: string, data: any) {
  try {
    const response = await api.put(url, data);

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

export async function deleteRequest<T = any, E = RequestError>(url: string) {
  try {
    const response = await api.delete(url);

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
