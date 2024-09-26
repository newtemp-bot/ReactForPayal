import React, { useCallback, useState } from "react";
import ChildCompo from "./ChildCompo";

const UseCallBack = () => {
    let [count, setCount] = useState(0);
    let [jadi, setJadi] = useState(0);
    let handleClick = useCallback(() => {
        console.log("Handal event");
        setCount(count + 1);
    }, [count]);
    let jadu = () => {
        console.log("jadu called..");
        setJadi(jadi + 1);
    };
    return (
        <>
            <p>Count : {count}</p>
            <button onClick={jadu}>Click {jadi}</button>
            <ChildCompo onClick={handleClick} />
        </>
    );
};

export default UseCallBack;
