import React, {useState} from 'react';

import emailjs from 'emailjs-com';



export default function ContactForm() {
    const [formState, setFormState] = useState({
        nameInput: "",
        emailInput: "",
        messageInput: ""
    });
    const {nameInput, emailInput, messageInput} = formState;
    const isEnabled= nameInput.length > 0 && emailInput.length > 0 && messageInput.length > 0;

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value,
        })
    };
    
    const [isValid, setIsValid] = useState(false);

    const sendEmail = () => {
        const templateParams = {
            name: nameInput,
            message: messageInput,
            email: emailInput
        }
        emailjs.send('1234-GMAIL','template_jczgxtd', templateParams, 'user_VIMh8mewaR5I6RPSpsz35')
            .then((response) => {
                console.log('SUCCESS!', response);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }
   
    const handleSubmit = e => {
        e.preventDefault();
        if (emailInput.includes('@') && emailInput.includes('.com')) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
        sendEmail();
        setFormState({
            nameInput: "",
            emailInput: "",
            messageInput: ""
        });
    };

    

    return(
        <div className="form-container">
                <p className="form-info">Feel free to leave some feedback.</p>
            <form onSubmit={handleSubmit} >
                    <input  
                        name="nameInput" type="text"
                        autoComplete="off"
                        value={nameInput}
                        onChange={handleChange}
                        noValidate 
                        placeholder={"Name"}
                    />
    
                    <input  
                        type="email" name="emailInput"
                        value={emailInput} onChange={handleChange}
                        // noValidate
                        placeholder={"Email"}
                    />
               
                    <textarea
                        name="messageInput" id="messageArea"
                        value={messageInput}
                        onChange={handleChange}
                        placeholder={"Message"}
                    />
                
                <button type="submit" className="btn" disabled={!isEnabled}>Send</button>
                {isValid && <p id="afterSubmit">Message sent!</p>}
            </form>
            
        </div>      
    )
}
