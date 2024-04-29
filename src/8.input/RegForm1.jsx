import React, { useState } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label, Table } from 'reactstrap'

export default function RegForm1() {
    let [user, setUser] = useState({
        email: "",
        password: "",

    })
    let [data, setData] = useState([])

    function getData(e) {
        console.log("--->", e?.target?.value)
        setUser({ ...user, [e?.target?.name]: e?.target?.value })
    }
    function submitHandler() {
        setData({ ...data, user })
        setUser({
            email: "",
            password: "",
        })
    }

    return (
        <div>
            <h2>Regsitration form </h2>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        value={user.email}
                        onChange={(e) => getData(e)}
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        value={user.password}
                        onChange={(e) => getData(e)}
                        name="password"
                        placeholder="password placeholder"
                        type="text"
                    />
                </FormGroup>


                <Button onClick={() => submitHandler()}>
                    Submit
                </Button>
            </Form>
            <Table
            >
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((e, i) => {
                            return (

                                <tr key={i}>
                                    <th scope="row">
                                        {i + 1}
                                    </th>
                                    <td>
                                        {e.email}
                                    </td>
                                    <td>
                                        {e.password}
                                    </td>

                                </tr>

                            )
                        })
                    }
                </tbody>
            </Table>

        </div>
    )
}
