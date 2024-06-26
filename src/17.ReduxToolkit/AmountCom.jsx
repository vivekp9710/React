import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap';

import { incrementByValue } from './features/amount/amountslice';

export default function AmountCom() {
    let data = useSelector((state) => {
        console.log("state", state);
        return state?.AMOUNT;
    });
    const dispatch = useDispatch()
    return (
        <>

            <h1>Amount  is {data?.amount}</h1>
            <Button color="primary" onClick={() => dispatch(incrementByValue(500))} >Increment-amt</Button>


        </>

    );
};
