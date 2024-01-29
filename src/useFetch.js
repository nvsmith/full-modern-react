import { useState, useEffect } from "react";

// Custom hook to fetch data
const useFetch = (url) => {
    // [initial value, function to rerender component] = useState(arg)
    // General data abstraction (blogs, categories, tags, etc)
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Timeout to view pending state during testing; remove for production
        setTimeout(() => {
            fetch(url)
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
                    setIsPending(false);
                    setError(err.message);
                });
        }, 1000);
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;
