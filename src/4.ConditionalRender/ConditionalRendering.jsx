import React, { useState } from 'react'

export default function ConditionalRendering() {

    let [isShow, setIsShow] = useState(true);


    return (
        <div>
            {isShow ? <h1>yes its true</h1> : <h1>Sorry its false</h1>}
            <button>Change</button>
        </div>
    )
}
