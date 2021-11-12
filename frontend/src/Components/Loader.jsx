import React from 'react'
import logo from './images/loader.gif';
import "./Loader.css"

function Loader() {
    return (
        <div classname="loader">
            <img src={logo} alt="loading..." />
        </div>
    )
}

export default Loader
