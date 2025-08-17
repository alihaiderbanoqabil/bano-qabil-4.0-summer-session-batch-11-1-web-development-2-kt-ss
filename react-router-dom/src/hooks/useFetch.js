import { useState, useEffect } from "react";

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { signal: signal, ...options });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    // const fetchData = async () => {
    //   setIsLoading(true);
    //   setError(null);

    //   try {
    //     const response = await fetch(url, { ...options, signal });

    //     if (!response.ok) {
    //       throw new Error(`Error ${response.status}: ${response.statusText}`);
    //     }

    //     const result = await response.json();
    //     setData(result);
    //   } catch (err) {
    //     if (err.name !== "AbortError") {
    //       setError(err.message);
    //     }
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    fetchData();

    return () => {
      controller.abort(); // cancel request if the component unmounts
    };
  }, [url]);

  return { data, isLoading, error };
};
