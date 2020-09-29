import React, {useState} from 'react';
import {Button, Form, FormGroup, Input, FormFeedback} from 'reactstrap';
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
    
    const [errors, setErrors] = useState({
        isValid: false,
        isInvalid: false,
    });

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
        if (emailInput.includes('@')) {
            setErrors({
                isValid: true,
            })
        } else {
            setErrors( {
                isValid: false,
                isInvalid: true
            })
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
            <div className="form-info">
                <div>We can discuss ideas, projects or  opportunities to develop yours.</div>
                <p>Feel free to leave your impression of my work.</p>
            </div>
            <Form onSubmit={handleSubmit} className="contact-form" >
                
                <FormGroup>
                    <Input  
                        name="nameInput" type="text"
                        autoComplete="off"
                        value={nameInput}
                        onChange={handleChange}
                        noValidate valid={Boolean(nameInput)}
                        placeholder={"Name"}
                    />
                    
                </FormGroup>
                <FormGroup>
                    <Input  
                        type="email" name="emailInput"
                        value={emailInput} onChange={handleChange}
                        noValidate
                        valid={emailInput.includes('@')} invalid={errors.isInvalid}
                        placeholder={"Email"}
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                        type="textarea" name="messageInput" id="messageArea"
                        value={messageInput}
                        onChange={handleChange}
                        placeholder={"Message"}
                    />
                </FormGroup>
                <Button type="submit" className="btn" disabled={!isEnabled}>Send</Button>
                {errors.isValid &&
                <p id="afterSubmit">Message sent!</p>}
            </Form>
        </div>      
    )
}
