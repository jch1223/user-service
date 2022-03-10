import { useEffect, useRef, useState } from 'react';

interface ResultType<TData> {
  isLoading: boolean;
  isError: boolean;
  error: any;
  data: TData | null;
}

function useFetch<TData>(fetch: () => Promise<TData>) {
  const [result, setResult] = useState<ResultType<TData>>({
    isLoading: false,
    isError: false,
    error: null,
    data: null,
  });

  const memoizedFetch = useRef(fetch);

  useEffect(() => {
    setResult({
      isLoading: true,
      isError: false,
      error: null,
      data: null,
    });

    (async () => {
      try {
        const data = await memoizedFetch.current();
        setResult({
          isLoading: false,
          isError: false,
          error: null,
          data,
        });
      } catch (error: any) {
        setResult({
          isLoading: false,
          isError: true,
          error: error.message,
          data: null,
        });
      }
    })();
  }, []);

  return { ...result };
}

export default useFetch;
