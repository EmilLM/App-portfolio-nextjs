import React, {useState} from 'react';
import {Button, Form, FormGroup, Input, FormFeedback} from 'reactstrap';


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
        setFormState({
            nameInput: "",
            emailInput: "",
            messageInput: ""
        });
    };

    return(
        <div className="container-form">
            <div className="contact-info">
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
                    <FormFeedback valid>Cool name!</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input  
                        type={"text"} name="emailInput"
                        value={emailInput} onChange={handleChange}
                        noValidate
                        valid={emailInput.includes('@')} invalid={errors.isInvalid}
                        placeholder={"Email"}
                    />
                    <FormFeedback valid>Seems alright!</FormFeedback>
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
