import { AxiosResponse } from 'axios';

export type Callback = {
  onSuccess?: (data?: AxiosResponse<any, any>, variables?: any, context?: unknown) => void;
  onError?: (error: Error) => void;
  onSettled?: () => void;
};
