import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
    let [value, setValue] = useState(10);
    let [color, setColor] = useState("white");
    let [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red",
    });
    const add = () => {
        setValue(pre => {return (pre + 1) + (pre * 2)});
        setValue(pre => pre + 1);
        setValue(pre => pre + 1);
        setValue(pre => pre + 1);
        setValue(pre => pre + 1);
        console.log(value);
    };
    const updateColor = c => {
        setCar(pre => {return {...pre, color:c}});
    } 
    return (
        <div className="container" style={{ backgroundColor: color }}>
            <div className="card">
                {value}&nbsp;&nbsp;&nbsp;
                <button onClick={add}>add</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => setColor("red")}>Red</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => {setColor("blue");updateColor("blue");}}>Blue</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => setColor("green")}>Green</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => setColor("yellow")}>Yellow</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => setColor("pink")}>Pink</button>
            </div>
            <div>
                <h1>My {car.brand}</h1>
                <p>
                    It is a {car.color} {car.model} from {car.year}.
                </p>
            </div>
        </div>
    );
};

export default App;
