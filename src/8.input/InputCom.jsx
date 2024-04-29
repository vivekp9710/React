import React, { useState } from "react";

export default function InputCom() {
    let [firstName, setFirstName] = useState("");
    let [data, setData] = useState([]);
    function getData(e) {
        setFirstName(e?.target?.value);
    }

    function addData(params) {
        setData([...data, firstName]);
        setFirstName("");
    }



    return (
        <>
            <label htmlFor="fn">First name : </label>
            <input type="text" value={firstName} onChange={(e) => getData(e)} />
            <button onClick={() => addData()}> Add Name</button>
            <h1>{firstName}</h1>

            <div>
                {data.map((e, i) => {
                    return <h1 key={i}>{e}</h1>;
                })}
            </div>
        </>
    );
}
