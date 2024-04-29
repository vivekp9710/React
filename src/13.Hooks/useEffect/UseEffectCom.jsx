import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

export default function UseEffectCom() {
    let [count, setCount] = useState(0);
    let [count2, setCount2] = useState(0);
    useEffect(() => {
        console.log("-----2----");
    });
    useEffect(() => {
        console.log("-----4----");
    }, []);
    useEffect(() => {
        console.log("----6----");
    }, [count]);

    //count function
    function inc(params) {
        setCount(count + 1);

    }
    function inc2(params) {
        setCount2(count2 + 1);
    }

    return (
        <>

            <h1>useEffect</h1>
            <h1>{count}</h1>
            <Button classname="mt-2" variant="info" onClick={() => inc()}>Inc</Button>

            <h2>count-2</h2>
            <h2>{count2}</h2>
            <Button classname="mt-2" variant="info" onClick={() => inc2()}>Inc2</Button>
        </>
    )
}
