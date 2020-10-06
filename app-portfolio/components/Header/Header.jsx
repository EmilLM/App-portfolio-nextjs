import React from 'react';
import Logo from '../Logo'
import Navbar from "./Nav/Navbar"
import Waves from "../Waves"
import MiscContext from "../MiscContext"

export default function Header() {
    const {theme} = React.useContext(MiscContext);

    return (
        <header id="header" className={theme?"header-dark": "header-light"}>
            
            <Navbar/>
            <div className="header-inner">
                <h1 className={"header-text"}>APP PORTFOLIO</h1>
                <Logo/>
            </div>  
            <Waves wavesClass={"header-waves"}/>
        </header>
    )
}

