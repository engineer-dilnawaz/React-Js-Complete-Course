import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const data = await fetchFn();
        setData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsLoading(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isLoading,
    data,
    setData,
    error,
  };
}
