import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import NavBar from './NavBar'


export default function Router() {
    return (
        <>


            <BrowserRouter>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                </Routes>



            </BrowserRouter>


        </>
    );
}
