import React from 'react';
import ContactLinks from './ContactLinks'
import ContactForm from './ContactForm';

const Contact = () => {
    return ( 
        <div className="content contact" >
            <h2 className="section-title" >Contact</h2>
            <div className="contact-container">
                <ContactForm />
                <ContactLinks />
            </div>
        </div>  
    );
}
 
export default Contact;