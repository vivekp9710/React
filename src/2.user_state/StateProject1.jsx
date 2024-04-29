import React, { useState } from "react";
import "./project.css"

export default function StateProject1() {
    const [color, setColor] = useState("black");
    function changeColor() {
        setColor("white");
    }
    return (
        <div>
            <div className="div1">
                <h1 style={{ color: color }}>Box</h1>
            </div>
            <button onClick={() => changeColor()}>changeColor</button>
        </div>
    );
}
