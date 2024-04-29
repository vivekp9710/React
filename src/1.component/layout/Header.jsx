import React, { Component } from "react";
import "./Header.css";


class Header extends Component {
    render() {
        return (
            <div className="container">
                <nav className="nav">
                    <ul className="ul_list">
                        <li>home</li>
                        <li>about</li>
                        <li>contact</li>
                        <li>service</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;