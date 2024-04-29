import React, { useState } from 'react'
import { connect } from 'react-redux';
import { incAmtAction, incAmt2Action } from './redux/amount/action';

function AmountCom(props) {
    const [number, setNumber] = useState(0);
    console.log("props", props);
    return (
        <>
            <div className='w-60'>

                <h1>Amount1:{props.amount1}</h1>
                <button className="align-items-center" onClick={() => { props.addAmount() }}>inc-amount</button>
                <h1>Amount2:{props.amount2}</h1>
                <input type="number" onChange={(e) => setNumber(+ e?.target?.value)} />
                <button onClick={() => props.addAmount2(number)}>add to amt 2</button>
            </div>
        </>
    );
};

const toStatetoProps = (state) => {
    return {
        amount1: state?.AMOUNT?.amount1,
        amount2: state?.AMOUNT?.amount2,
    };

};

const toDispatchtoprops = (dispatch) => {
    return {
        addAmount: () => dispatch(incAmtAction()),
        addAmount2: (no) => dispatch(incAmt2Action(no)),

    };
};
export default connect(toStatetoProps, toDispatchtoprops)(AmountCom)
