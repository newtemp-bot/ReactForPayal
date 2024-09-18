import React, { useEffect, useState } from "react";

const FetchAPI = ({ url }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/viewListpage'); // Now proxying to avoid CORS issues
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setData(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [url]); // Dependency array to re-fetch only when the URL changes

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default FetchAPI;
