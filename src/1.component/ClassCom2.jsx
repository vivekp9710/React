// import React, { Component } from 'react';

// class ClassCom2 extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         );
//     }
// }

// export default ClassCom2;

import React from "react";
import ClassCom from "./ClassCom.jsx";

class ClassCom2 extends React.Component {
    render() {
        return (
            <div>
                <ClassCom />
                structure
            </div>
        );
    }
}

export default ClassCom2;