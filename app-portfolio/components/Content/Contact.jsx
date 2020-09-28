import React from 'react';
import Footer from '../Footer/Footer'
import ContactLinks from '../Footer/ContactLinks'
import ContactForm from '../Footer/ContactForm';

const Contact = () => {
    return ( 
        <div className="clip-path" >\
            
            <div className="content contact" >
                <h2 className="sectionTitle" >Contact</h2>
                <div className="contact-container">
                    <ContactForm />
                    <strong></strong>
                    <ContactLinks />
                </div>
                <Footer/>
            </div>
        </div>
     );
}
 
export default Contact;