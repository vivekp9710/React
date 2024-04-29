import { Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Table } from 'reactstrap'


function UserTable({ userArr, getData }) {
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(userArr);
    useEffect(() => {
        let filteredData = userArr?.filter?.((e) => e?.name?.includes?.(searchText));
        console.log("filteredData", filteredData);
        setData(filteredData);

    }, [searchText]);
    return (
        <>
            {
                userArr?.length > 0 ? (
                    <>
                        <div className='p-10  justify-content-around' >
                            <h1 className='w-75'>DATA TABLE</h1>
                            <Input
                                type="text"
                                className='w-100'
                                placeholder='enter your text'
                                onChange={(e) => setSearchText(e?.target?.value)} />


                            <Table className='mt-5' >
                                <thead>
                                    <tr>
                                        <th>
                                            Sr.no
                                        </th>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Age
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.map?.((e, i) => {
                                            return (


                                                <tr key={i}>

                                                    <th scope="row">
                                                        {i + 1}
                                                    </th>
                                                    <td>{e?.name}</td>
                                                    <td>{e?.age}</td>
                                                </tr>

                                            );
                                        })}
                                </tbody>
                            </Table>
                        </div>
                    </>

                ) : (<h1>NO DATA FOUND...!</h1>)
            }

        </>
    );
};


const toStateToProps = (state) => {
    console.log("state", state);
    return {
        userArr: state.USER,
    };
};
const todDispatchToProps = (dispatch) => {
    return {
        getData: dispatch,
    };
};

export default connect(toStateToProps, todDispatchToProps)(UserTable);