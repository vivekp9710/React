import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'
import { addUser } from '../user/action';

function UserForm(props) {
    const [data, setData] = useState({ name: "", age: "" });

    function addDatatoState() {
        props.userAdd(data);
        setData({ name: "", age: "" });
    }
    return (

        <>

            <div className='w-50'>

                <Form className="m-5 border border-black p-4 rounded" >
                    <FormGroup row>
                        <Label for="name" sm={4}>
                            Name
                        </Label>
                        <Col md={15} >
                            <Input
                                id="name"
                                value={data?.name}
                                name="name"
                                placeholder="Enter your name"
                                type="name"
                                onChange={(e) => setData({ ...data, name: e?.target?.value })}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="age" sm={4}>
                            Age
                        </Label>
                        <Col sm={15} >
                            <Input
                                id="age"
                                value={data?.age}

                                placeholder="Enter age"
                                type="number"
                                onChange={(e) => setData({ ...data, age: e?.target?.value })}

                            />
                        </Col>
                    </FormGroup>


                    <Button onClick={() => addDatatoState()} color='primary' className='w-100'>
                        Submit
                    </Button >
                </Form >
            </div>

        </>

    );
}
const todDispatchToProps = (dispatch) => {
    return {
        userAdd: (d) => dispatch(addUser(d)),
    };
};

export default connect(null, todDispatchToProps)(UserForm);