import React from 'react';
import Logo from '../Logo'
import Contact from './Contact'
import Waves from "../Waves"
import MiscContext from "../MiscContext"

import {Slide} from "react-awesome-reveal";

export default function Footer() {

    const year = new Date().getFullYear();
    const {theme} = React.useContext(MiscContext);
    return (
        <footer id="contact" className={theme ? "footer-dark": "footer-light"}>
            <Contact/>
            <Slide direction="up" triggerOnce>
                <Logo />
            </Slide>
            <Waves wavesClass={"contact-waves"}/>
            <div className="date" > 
                <p>Copyleft <span>&copy;</span></p>
                <span >{year}</span>
            </div>
        
        </footer>
    )
}