import React from "react";

export default function FunProps(props) {
    props.name = "vivek"
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    );
}