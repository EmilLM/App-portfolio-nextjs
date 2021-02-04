import React, {useState, useEffect} from 'react';
import { Collapse, Navbar,Nav} from 'reactstrap';
import NavToggle from "./NavToggle.jsx";
import logo from "../../assets/logo.png"
import Scrollspy from 'react-scrollspy'

export default function NavBar() {

    //NavToggler event
    const [navToggle, setNavToggle] = useState(false);
    const toggleNavBar = () => setNavToggle(!navToggle);

    const [offset, setOffset] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 60) {
                setOffset(true)
            } else setOffset(false)
        }
    }, [offset]);
    console.log(offset);
    console.log('Project rendered')
        return (
            <section className='nav_section'>
                <Navbar className="navbar navbar-expand-sm navbar-dark " 
                fixed="top" id={offset ? "scrolling": null}>
                    <NavToggle onToggle={toggleNavBar} class={navToggle}/>
                    <Collapse isOpen={navToggle} >
                        <Nav>
                            {/* learn how to avoid rerenders on scroll */}
                            <Scrollspy items={['header','about', 'projects', 'contact']} 
                                currentClassName="active"
                                componentTag={"div"} 
                                offset={-5}
                                style={{display: "flex"}}
                            >
                                {/* added header to items as a way to avoid about navbar highlight from start */}
                            <li className="nav-item" style={{display: "none"}}> <a className="nav-link" href="#header">About</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#about">About</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#projects">Projects</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#contact">Contact</a> </li>
                            </Scrollspy>
                        </Nav>
                    </Collapse>
                    <img className="logo" src={logo} alt="logo"/>
                </Navbar>
                
            </section>

        )

}