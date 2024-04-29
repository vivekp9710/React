import React, { Component } from 'react'

export default class Unmount extends Component {
    componentWillUnmount() {
        console.log("----WillUnmount");
        alert("component is moving");
    }
    render() {
        return (
            <h1>Component WillUnmount</h1>
        )
    }
}
