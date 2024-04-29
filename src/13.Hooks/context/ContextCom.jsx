import React, { createContext, useState } from 'react'
import ComA from './ComA';
import ComB from './ComB';

export const NameContext = createContext()

export default function ContextCom() {
    const [name, setName] = useState("vivek");
    return (
        <>
            {/* <h1>name:</h1>
            {/* <NameContext.Provider value={{ name, setName: setName }}>
                {/* <ComA /> */}
            {/* <ComB name={"vivek patel"} /> */}
            {/* </NameContext.Provider> */}
            <h1>{name}</h1>
            <NameContext.Provider value={"vivek patel"}>
                <ComA />
                <ComB name={"vivek patel"} />
            </NameContext.Provider>



        </>
    );
}
