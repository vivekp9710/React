import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

export default function DeleteCom() {
    let [firstName, setFirstName] = useState("");
    let [data, setData] = useState([]);

    //to get data from input
    function getData(e) {
        setFirstName(e?.target?.value);
    }

    // to add data in array
    function addData(params) {
        setData([...data, firstName]);
        setFirstName("");
    }

    // to remove data from array (delete)
    function deleteHandler(index) {
        // by splice
        // data.splice(index, 1);
        // setData([...data]);

        // by filter
        let arr = data.filter((e, i) => {
            return i !== index;
        });
        setData(arr);
    }
    return (
        <>
            <h1>Delete Event</h1>

            <label htmlFor="fn">First Name : </label>
            <Form.Control
                className="w-30"
                size="sm"
                type="text"
                value={firstName}
                onChange={(e) => getData(e)}
                placeholder="enter name"
            />
            <Button className="mt-2" onClick={() => addData()} variant="primary">
                Add Name
            </Button>
            <h1>{firstName}</h1>
            <div>
                {data.length > 0 ? (
                    <Table className="mt-5" striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sr.</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{e}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => deleteHandler(i)}>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                ) : (
                    <h1>Data Not Found......!</h1>
                )}
            </div>
        </>
    );
}
