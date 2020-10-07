import React from 'react';
import Navbar from "./Nav/Navbar"
import HeaderIntro from "./HeaderIntro"
import Waves from "../Waves"
import MiscContext from "../MiscContext"

export default function Header() {
    const {theme} = React.useContext(MiscContext);

    return (
        <header id="header" className={theme?"header-dark": "header-light"}>
            
            <Navbar/>
            <HeaderIntro/>
            <Waves wavesClass={"header-waves"}/>
        </header>
    )
}

