import { useEffect, useState } from "react";

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch?: boolean) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchFunction();
      console.log(result)
      setData(result);

    } catch(err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setLoading(false);
    }
  }

  const reset = () => {
    setLoading(false);
    setData(null);
    setError(null);
  }

  useEffect(() => {
    if (autoFetch) fetchData();
  }, []);

  return { data, error, reset, refetch: fetchData, loading }
}

export default useFetch;