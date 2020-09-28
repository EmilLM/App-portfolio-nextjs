
// import Modal from "../Modal/Modal";
// import Contact from "../Modal/Contact.jsx";

export default function ContactLinks() {
    
    // const [contact, setContact] = useState(false);
    // const contactToggle = (e) => {
    //     e.preventDefault();
    //     setContact(!contact);
    // }
    return (
        <div className="links-container">
           <p className="links-info">You can also reach me on:</p>
            
            {/* <a className="iconContact" href='#' target={'_blank'} onClick={contactToggle} rel="noopener noreferrer">
                <img src="" > In-app form 
            </a> */}
            {/* <Modal isOpen={contact} title={"Contact"} onToggle={contactToggle}>
                <Contact/>
            </Modal> */}

            <div className='links'>
                    <a
                        classNam                   id="mail" 
                        href="mailto:luchianemil@gmail.com" 
                        rel="noopener noreferrer"
                    >
                        <img src="/assets/icons/gmail.svg"  />
                        luchianemil
                    </a>
                    <a  
                        href='https://github.com/EmilLM' 
                        target={'_blank'} 
                        rel="noopener noreferrer" 
                        alt="github link"
                    >   
                        <img src="/assets/icons/github-sign.svg"  />
                        EmilLM
                    </a>
                    <a  
                        href='https://www.linkedin.com/in/emil-luchian-9933b198/' 
                        target={'_blank'} 
                        rel="noopener noreferrer"
                        alt="linkedIn link"
                    >
                        <img src="/assets/icons/linkedin.svg"  />
                        Emil Luchian
                    </a>
                    <a  
                        href='https://www.facebook.com/luchian.emil/'
                        target={'_blank'} 
                        rel="noopener noreferrer"
                        alt="facebook link"
                     >
                        <img src="/assets/icons/facebook.svg"  />
                        Emil Luchian
                    </a>
            </div>
        </div>
    );
};
