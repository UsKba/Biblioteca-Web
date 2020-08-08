import { AxiosError } from 'axios';

interface ResponseDataError {
  error: string;
}

export type AxiosResponseError = AxiosError<ResponseDataError>;
