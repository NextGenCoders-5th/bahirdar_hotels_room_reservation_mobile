import { useState } from 'react';

type ApiFunction<T> = (...args: any[]) => Promise<{ ok: boolean; data: T }>;

function useApi<T>(apiFunc: ApiFunction<T>) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: Parameters<ApiFunction<T>>) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return;
    }

    setError(false);
    setData(response.data);
  };

  return { data, error, loading, request };
}

export default useApi;
