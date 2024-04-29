import React from 'react'

export default function Card(props) {

    return (
        <>
            <div style={{ backgroundColor: 'darkcyan', color: "white" }}>

                <h1>bike:{props.bike}</h1>
                <h1>num:{props.num}</h1>
            </div>
        </>
    );
}
