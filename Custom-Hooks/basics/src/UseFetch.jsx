import { useEffect, useState } from 'react';

function UseFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch(e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return {data, loading, error};
}

export default UseFetch;


// UseFetch with re-fetching

export function UseFetch2(url, interval) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        } catch(e) {
            setError(e);
        } finally{
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();  // initial fetch

        if (interval !== null) {
            const fetchInterval = setInterval(() => {
                fetchData();
            }, interval);
        }

        return () => clearInterval(fetchInterval);
    }, [url, interval]);

    return {data, loading, error};
}


