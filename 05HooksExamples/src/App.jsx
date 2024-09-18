import React, { useEffect, useState } from "react";
import FetchAPI from "./FetchAPI";

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
            <FetchAPI url="https://hitvaniapp.excellcons.com/datalist"/>
            <button onClick={jadu}>Click</button>
        </>
    );
};

export default App;
