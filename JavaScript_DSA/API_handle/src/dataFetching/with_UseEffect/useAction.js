import { useState, useEffect, useRef, useCallback } from 'react';

const useAction = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!!url);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);

  const fetchData = useCallback(async (apiURL, customOptions = {}) => {
    if (!apiURL) {
      setLoading(false);
      return;
    }

    // Cleanup previous request
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();

    // if loading is true, reset it to false
    if (!loading) setLoading(true);

    //  only clearing error if there was a previous error
    if (error) setError(null);

    try {
      const response = await fetch(apiURL, {
        signal: controllerRef.current.signal,
        ...options,
        ...customOptions
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
      } else {
        console.log('AbortError')
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(url);

    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, [fetchData]);



  const post = useCallback((body) => {
    return fetchData(url , { method: 'POST', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json', ...options.headers } });
  }, []);

  const put = useCallback((id, body) => {
    return fetchData(url+`/${id}`, { method: 'PUT', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json', ...options.headers } });
  }, []);

  const del = useCallback((id) => {
    return fetchData(url+`/${id}`, { method: 'DELETE', headers: options.headers });
  }, []);

  return { data, loading, error, refetch: fetchData, post, put, delete: del };
};

export default useAction;