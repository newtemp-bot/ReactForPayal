import React, { useEffect, useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    const [jadus, setJadus] = useState(0);
    const jadu = () => {
        console.log("Called");
        setJadus((pre) => pre + 1);
    };
    useEffect(() => {
        setCount((pre) => pre + 1);
    }, [jadus]);

    return (
        <>
            <div>{count}</div>
            <button onClick={jadu}>Click</button>
        </>
    );
};

export default App;
