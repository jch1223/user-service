import { useState } from 'react';

interface ResultType<TData> {
  isLoading: boolean;
  isError: boolean;
  error: any;
  data: TData | null;
}

function useFetchMutation<TData>(fetch: () => Promise<TData>) {
  const [result, setResult] = useState<ResultType<TData>>({
    isLoading: false,
    isError: false,
    error: null,
    data: null,
  });

  const mutate = async () => {
    setResult({
      isLoading: true,
      isError: false,
      error: null,
      data: null,
    });

    try {
      const data = await fetch();
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
  };

  return {
    mutate,
    ...result,
  };
}

export default useFetchMutation;
