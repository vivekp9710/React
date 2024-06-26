import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap';
import { increment } from './features/count/countSlice';

export default function CountCom() {
    let data = useSelector((state) => {
        console.log("state", state);
        return state?.COUNT;
    });
    const dispatch = useDispatch()
    return (
        <>

            <h1>count is {data?.count}</h1>
            <Button color="primary" onClick={() => dispatch(increment())}>Increment</Button>


        </>

    );
};
