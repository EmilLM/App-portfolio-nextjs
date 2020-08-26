import React, {useState} from 'react';
import { Form, FormGroup, Label, Input, FormFeedback} from 'reactstrap';


export default function Contact() {
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
    const handleSelect = e => {
        e.target.setSelectionRange(0, e.target.value.length)
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
    };

    return(
        <>
        {errors.isValid && nameInput && emailInput && messageInput
            ?
            <h2 id="afterSubmit">Thanks for the message, {nameInput}</h2>
            :
           <Form onSubmit={handleSubmit}>
               <FormGroup>
                   <Label for="nameInput">Name:</Label>
                   <Input name="nameInput" autoComplete="off"
                          value={nameInput}
                          onChange={handleChange}
                          onClick={handleSelect}
                          noValidate valid={Boolean(nameInput)}

                   />
                   <FormFeedback valid>Cool name!</FormFeedback>
               </FormGroup>
               <FormGroup>
                   <Label for="emailInput">Email:</Label>
                   <Input  type={"text"} name="emailInput"
                           value={emailInput} onChange={handleChange}
                           onClick={handleSelect} noValidate
                           valid={emailInput.includes('@')} invalid={errors.isInvalid}
                   />
                   <FormFeedback valid>Seems alright!</FormFeedback>
               </FormGroup>
               <FormGroup>
                   <Label for="messageInput">Message:</Label>
                   <Input type="textarea" name="messageInput" id="messageArea"
                          value={messageInput}
                          onChange={handleChange}
                          onClick={handleSelect}
                   />
               </FormGroup>
               <button type="submit" className="btn btn-primary" disabled={!isEnabled} >Submit</button>
           </Form>
        }
        </>
    )
}
