import React, { useContext } from 'react'
import { NameContext } from './ContextCom';

export default function ComA() {
    const data = useContext(NameContext);
    return (
        <>

            {/* <h1>Com A</h1> */}
            <h1>ComA-- {data}</h1>


        </>
    );
}
