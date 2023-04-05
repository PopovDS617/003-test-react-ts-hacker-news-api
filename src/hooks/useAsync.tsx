import { useCallback, useEffect, useState } from 'react';
import { Post, PostList } from '../models/post';

type TUseAsync = (
  callback: () => Promise<number[]>,
  refresh: number,
  dependencies?: [] | unknown[]
) => { loading: boolean; error: boolean; value: number[] | [] };

export const useAsync: TUseAsync = (
  callback,
  refresh: number,
  dependencies = []
) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [value, setValue] = useState<number[] | []>([]);

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(false);
    setValue([]);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
    const interval = setInterval(() => {
      callbackMemoized();
    }, refresh);
    return () => clearInterval(interval);
  }, [callbackMemoized]);

  return { loading, error, value };
};
