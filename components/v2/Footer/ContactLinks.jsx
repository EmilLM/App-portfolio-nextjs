import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faListAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Modal from "../Modal/Modal";
import Contact from "../Modal/Contact.jsx";

export default function ContactLinks() {
    
    const [contact, setContact] = useState(false);
    const contactToggle = (e) => {
        e.preventDefault();
        setContact(!contact);
    }
    return (
        <>
            <a className="iconContact" id="mail" href="mailto:luchianemil@gmail.com"  rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} /> luchianemil@gmail.com
            </a>
             {/* eslint-disable-next-line */}
            <a className="iconContact" href='#' target={'_blank'} onClick={contactToggle}>
                <FontAwesomeIcon icon={faListAlt}/> In-app form 
            </a>
            <Modal isOpen={contact} title={"Contact"} onToggle={contactToggle}>
                <Contact/>
            </Modal>

            <div className='links'>
                    <a  href='https://github.com/EmilLM' target={'_blank'} rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                    <a  href='https://www.linkedin.com/in/emil-luchian-9933b198/' target={'_blank'} rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a  href='https://www.facebook.com/luchian.emil/' target={'_blank'} rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
            </div>
        </>
    );
};
