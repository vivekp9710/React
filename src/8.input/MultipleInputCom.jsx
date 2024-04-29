import React, { useState } from 'react'
import "./input.css"
import { Table } from "react-bootstrap"


//state keyname ane input key name must be same


export default function MultipleInputCom() {
    let [user, setUser] = useState({
        name: "",
        email: "",
        company: "",
        model: "",
        no: "",

    });

    let [userData, setUserData] = useState([])
    //to get data from input

    function getData(e) {
        console.log("----->", e.target.value)
        //...user=> to get old object data
        setUser({ ...user, [e?.target?.name]: e?.target?.value });

    }
    //add object [userstate] into array [user data]
    function submitHandler() {
        setUserData([...userData, user]);
        setUser({
            name: "",
            email: "",
            company: "",
            model: "",
            no: "",

        });
    }

    return (
        <>


            <div className="inputForm">
                <label htmlFor="name">Name</label>
                <input value={user.name} type="text" onChange={(e) => getData(e)}
                    placeholder="enter your name" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input value={user.email} type="email" onChange={(e) => getData(e)}
                    name="email" placeholder="enter your email" id="email" />
                <label htmlFor="text">Company</label>
                <input value={user.company} type="text" onChange={(e) => getData(e)} name="company"
                    placeholder="enter your company name" id="company" />
                <label htmlFor="text">Model</label>
                <input value={user.model} type="text" onChange={(e) => getData(e)} name="model"
                    placeholder="enter your bike model" id="model" />
                <label htmlFor="no">No</label>
                <input value={user.no} type="text" onChange={(e) => getData(e)} name="no"
                    placeholder="enter your bike no" id="no" />

                <button onClick={() => submitHandler()}>Submit</button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>srno</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Model</th>
                        <th>No</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.company}</td>
                                <td>{e.model}</td>
                                <td>{e.no}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

        </>
    );
}
