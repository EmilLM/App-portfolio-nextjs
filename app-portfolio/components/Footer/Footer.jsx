import React from 'react';
import Logo from '../Logo'
import Contact from './Contact'
import Waves from "../Waves"
import MiscContext from "../MiscContext"

export default function Footer() {

    const year = new Date().getFullYear();
    const {theme} = React.useContext(MiscContext);
    return (
        <footer id="contact" className={theme ? "footer-dark": "footer-light"}>
            <Contact/>
            <Logo />
            <Waves wavesClass={"contact-waves"}/>
            <div className="date" > 
                <p>Copyright &copy;</p>
                <span >{year}</span>
            </div>
        
        </footer>
    )
}