import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
    let [value,setValue] = useState(10);
    const add = () => {
        setValue(value+=1);
        console.log(value);
    };
    return (
        <div className="card">
            {value}&nbsp;&nbsp;&nbsp;
            <button onClick={add}>add</button>
        </div>
    );
};

export default App;
