import React from 'react';
import Logo from '../Logo'
import Navbar from "./Nav/Navbar"
import Waves from "../Waves"
import MiscContext from "../MiscContext"

export default function Header() {
    const {animate, setAnimate} = React.useContext(MiscContext)
    return (
        <header id="header">
            
            <Navbar setAnimate={setAnimate} animate={animate}/>
            <div className="header-inner">
                <h1 className={"header-text"}>APP PORTFOLIO</h1>
                <Logo/>
            </div>  
            <Waves animate={animate} wavesClass={"header-waves"}/>
        </header>
    )
}

