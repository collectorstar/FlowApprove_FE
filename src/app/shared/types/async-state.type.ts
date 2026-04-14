export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncState<T> {
  status: AsyncStatus;
  data: T;
  error: string | null;
}

export const createAsyncState = <T>(data: T): AsyncState<T> => ({
  status: 'idle',
  data,
  error: null
});
