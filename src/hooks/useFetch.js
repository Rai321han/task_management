
import { useState, useEffect, useMemo } from 'react';

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const optionsKey = JSON.stringify(options);
    

    useEffect(() => {
        if (!url) return;

        const abortController = new AbortController();
        const parsedOptions = JSON.parse(optionsKey);
        
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, {
                    ...parsedOptions,
                    signal: abortController.signal
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const result = await response.json();
                setData(result);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            abortController.abort();
        };
    }, [url, optionsKey]);

    return { data, loading, error };
};

export default useFetch;