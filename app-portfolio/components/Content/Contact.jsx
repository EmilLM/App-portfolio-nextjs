import React from 'react';
import Footer from '../Footer/Footer'
import ContactLinks from '../Footer/ContactLinks'

const Contact = () => {
    return ( 
        <div className="clip-path" >
            <div className="content contact" >
                <h1 className="sectionTitle" >Contact</h1>
                <strong>Interested in working with me? Find me at:</strong>
                
                <ContactLinks/>
                <Footer/>
            </div>
        </div>
     );
}
 
export default Contact;