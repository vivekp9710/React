import React, { useReducer, useState } from 'react'

let initialVal = 0;
let reducer = (state, method) => {
    switch (method) {
        case "inc":
            return state + 1;
        case "dec":
            return state - 1;

        case "reset":
            return 0;

        default:
            break;
    }
}


export default function UseReducerCom() {

    let [count, setCount] = useReducer(reducer, initialVal)
    return (
        <>
            <h1>count:{count}</h1>

            <button className="ms-5" onClick={() => setCount("inc")}>inc</button>
            <button className="ms-5" onClick={() => setCount("dec")}>dec</button>
            <button className='ms-5' onClick={() => setCount("reset")}>Reset</button>

        </>
    )
}
