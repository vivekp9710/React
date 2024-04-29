import React, { useState } from "react";

export default function FunState() {

    let [count, setCount] = useState(0);
    let x = 0;

    function updatecount(params) {
        x++;
        console.log("~file: funstate.jsx:7 ~ updatecount ~ x:", x);
    }
    function updatestate(params) {
        setCount((pre) => pre + 1);
        console.log("~file: funstate.jsx:13 ~ updatestate ~ count:", count);
    }
    return (
        <div>
            <h1>{x}</h1>
            <button onClick={() => updatecount()}>count Inc</button>
            <hr />
            <h1>{count}</h1>
            <button onClick={() => updatestate()}>count</button>
        </div>
    );

}