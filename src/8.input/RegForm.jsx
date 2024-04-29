import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import "./regForm.css"

export default function RegForm() {
    let [user, setUser] = useState({
        firstname: "",
        middlename: "",
        lastname: "",
        address: "",
        dob: "",
        email: "",
        gender: "",
        mobile: "",
    })

    let [userData, setUserData] = useState([])
    let [isUpdate, setIsUpdate] = useState(false)
    let [index, setIndex] = useState(null)

    function getData(e) {
        setUser({ ...user, [e?.target?.name]: e?.target?.value })
    }

    function submitHandler() {
        if (!user.firstname || !user.middlename || !user.lastname || !user.address || !user.dob || !user.email || !user.gender || !user.mobile) {
            alert("Please fill in all the fields.");
            return;
        }

        if (isUpdate) {
            userData.splice(index, 1, user)
            setUser({
                firstname: "",
                middlename: "",
                lastname: "",
                address: "",
                dob: "",
                email: "",
                gender: "",
                mobile: "",
            })
            setIsUpdate(false)
        } else {
            setUserData([...userData, user])
            setUser({
                firstname: "",
                middlename: "",
                lastname: "",
                address: "",
                dob: "",
                email: "",
                gender: "",
                mobile: "",
            })
        }
    }

    function deleteHandler(index) {

        let shouldDelete = confirm("Are you sure you want to delete")
        if (shouldDelete) {
            userData.splice(index, 1)
            setUserData([...userData])
        }
    }

    function updateHandler(ele, index) {
        setUser(ele)
        setIsUpdate(true)
        setIndex(index)
    }
    return (
        <>
            <div className='reginput'>
                <h1>Registartion Form</h1>
                <div className="form-field">
                    <label>First Name :</label>
                    <input value={user.firstname}
                        type="text"
                        name="firstname"
                        id="firstname"
                        onChange={(e) => getData(e)}
                        placeholder='Please enter your First Name' />
                </div>

                <div className="form-field">
                    <label>Middle Name :</label>
                    <input value={user.middlename}
                        type="text"
                        name="middlename"
                        id="middlename"
                        onChange={(e) => getData(e)}
                        placeholder='Please enter your Middle Name' />
                </div>

                <div className="form-field">
                    <label>Last Name :</label>
                    <input value={user.lastname}
                        type="text"
                        name="lastname"
                        id="lastname"
                        onChange={(e) => getData(e)}
                        placeholder='Please enter your Last Name' />
                </div>

                <div className="form-field">
                    <label>Address:</label>
                    <textarea
                        value={user.address}
                        name="address"
                        onChange={(e) => getData(e)}
                        placeholder='Please enter your Address'
                        cols="25"
                        rows="3"
                    />
                </div>

                <div className="form-field">
                    <label>Date of Birth :</label>
                    <input value={user.dob}
                        type="date"
                        name="dob"
                        id="dob"
                        className="dob-field"
                        onChange={(e) => getData(e)}
                    />
                </div>

                <div className="form-field">
                    <label>Email :</label>
                    <input value={user.email}
                        type="text"
                        name="email"
                        id="email"
                        onChange={(e) => getData(e)}
                        placeholder='Please enter your Email' />
                </div>

                <div className="form-field">
                    <label>Gender:</label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={user.gender === "male"}
                            onChange={(e) => getData(e)}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={user.gender === "female"}
                            onChange={(e) => getData(e)}
                        />
                        Female
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={user.gender === "other"}
                            onChange={(e) => getData(e)}
                        />
                        Other
                    </label>
                </div>

                <div className="form-field">
                    <label>Mobile Number :</label>
                    <input value={user.mobile}
                        type="text"
                        name="mobile"
                        id="mobile"
                        onChange={(e) => getData(e)}
                        maxLength={10}
                        placeholder='Please enter your Mobile Number' />
                </div>

                <Button onClick={() => submitHandler()}>{isUpdate ? "Update" : "Submit"}</Button>
            </div>

            {userData.length > 0 && (
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Date of Birth</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Mobile Number</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{e.firstname}</td>
                                    <td>{e.middlename}</td>
                                    <td>{e.lastname}</td>
                                    <td>{e.address}</td>
                                    <td>{e.dob}</td>
                                    <td>{e.email}</td>
                                    <td>{e.gender}</td>
                                    <td>{e.mobile}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => deleteHandler(i)}>Delete</Button>
                                        <Button onClick={() => updateHandler(e, i)}>Update</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </>
    )
}
