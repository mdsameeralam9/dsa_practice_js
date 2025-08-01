import { useState, useEffect, useRef } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);

  useEffect(() => {
    if (!url) return;

    controllerRef.current = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(url, {signal: controllerRef.current.signal});
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      console.log('Cleanup: Aborting fetch request');
      controllerRef.current.abort()
    }
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
