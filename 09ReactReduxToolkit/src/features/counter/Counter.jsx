import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {inc,dec} from "./counterSlice";
const Counter = () => {
    let count = useSelector((state)=>state.counter.value);
    let dispatch = useDispatch();
    return (
        <div>
            <div>
                <button aria-label="Increment value" onClick={()=>dispatch(inc())}>Increment</button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={()=>dispatch(dec())}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;
