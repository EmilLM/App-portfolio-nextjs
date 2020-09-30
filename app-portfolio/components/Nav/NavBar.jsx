import React, {useState, useEffect} from 'react';
import { Collapse, Navbar,Nav} from 'reactstrap';
import NavToggle from "./NavToggle.jsx";

import Scrollspy from 'react-scrollspy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faFolder} from '@fortawesome/free-solid-svg-icons'

const NavBar = React.memo(() =>{

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
        return (
            <section className='nav_section'>
                <Navbar className="navbar navbar-expand-sm navbar-dark " 
                fixed="top" id={offset ? "scrolling": null}>
                    <NavToggle onToggle={toggleNavBar} class={navToggle}/>
                    <Collapse isOpen={navToggle} >
                        <Nav>
                            <Scrollspy items={['header','about', 'projects', 'contact']} 
                                currentClassName="is-active"
                                componentTag={"div"} 
                                offset={-5}
                                style={{display: "flex"}}
                            >
                                {/* added header to items as a way to avoid about navbar highlight from start */}
                                <li className="nav-item" style={{display: "none"}}> <a className="nav-link" href="#header">header</a> </li>
                                <li className="nav-item"> 
                                    <FontAwesomeIcon icon={faUser}/>
                                    <a className="nav-link" href="#about">About</a> 
                                </li>
                                <li className="nav-item projects"> 
                                    <FontAwesomeIcon icon={faFolder} />
                                    <a className="nav-link" href="#projects">Projects</a>
                                </li>
                                <li className="nav-item"> 
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <a className="nav-link" href="#contact">Contact</a> 
                                </li>
                            </Scrollspy>
                        </Nav>
                    </Collapse>
                    <img className="logo" src="/assets/logo.webp" alt="logo"/>
                </Navbar>
                
            </section>

        )

})

export default NavBar;