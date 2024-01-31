// useState hook: allows for a dynamic, reactive value
import { useState, useEffect } from "react";

// Custom hook to fetch data
const useFetch = (url) => {
    // [initial value, function to rerender component] = useState(arg)
    // General data abstraction (blogs, categories, tags, etc)
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Cleanup function stops fetch when component unmounts (to prevent state from updating)
        const stopFetch = new AbortController();

        // Timeout to view pending state during testing; remove for production
        setTimeout(() => {
            fetch(url, { signal: stopFetch.signal })
                .then((response) => {
                    // Determine if server sends back the correct response
                    if (!response.ok) {
                        throw Error(`Could not fetch data for that resource. Check that your URL/endpoint is correct.`);
                    }
                    return response.json();
                })
                .then((responseData) => {
                    setData(responseData);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    // Don't update the state for abort errors
                    if (err.name === "AbortError") {
                        console.log("fetch aborted");
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                });
        }, 1000);

        // Abort associated fetch
        return () => stopFetch.abort();
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;
