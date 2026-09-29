import { Alert, Box, Snackbar, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import EmailJSConfig from '../../Config/email.config';
// import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const emailConfig = EmailJSConfig;
    const [email, setEmail] = useState({});
    const form = useRef();
    const FormContainer = styled(Box)`
    width: 100%;
    border-radius: 16px;
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
    padding: 30px;
    height: 100%;
    `;
    const FormContent = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    margin: auto 0;
    `;
    const FormContentInner = styled(Box)`
    margin: 2%;
    width: 96%;
    `;
    const InputFieldColOne = styled(TextField)`
        width: 100%;
    `;
    const Button = styled.button`
    width: 100%;
    padding: 16px 40px;
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
    border: none;
    font-size: 18px;
    font-weight: 400;
    transition: all 0.4s ease-in-out;
    border-radius: 6px;
    &:hover{
        background-image: linear-gradient(145deg, #6a67ce,#fc636b) !important;
        transform: translateY(-3px);
        color: #fff;
        font-weight: 600;
    }
    `;

    const emailSender = () => {
        emailjs.sendForm(emailConfig.service_id, emailConfig.template_id, form.current, emailConfig.public_key)
            .then((result) => {
                setSuccess(true);
                setOpen(true);
                setEmail({})
            }, (error) => {
                setSuccess(false);
                setOpen(true);
            });
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setSuccess(false);
        setOpen(false);

        if (email?.name?.length > 0 && email?.email?.length > 0 && email?.subject?.length > 0 && email?.message?.length > 0) {


            if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email?.email)) {
                setErrorMessage("");
                emailSender();
            }
            else {
                setSuccess(false);
                setOpen(true);
                setErrorMessage("invalid email ex: sample@abc.xyz");
            }

        }
        else if (Object.keys(email).length === 0) {
            setSuccess(false);
            setOpen(true);
            setErrorMessage("Fill the form properly")
        }
        else {
            setSuccess(false);
            setOpen(true);
            setErrorMessage("Fill the form properly")
        }

    };

    const onBlurHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let oldValue = email;
        oldValue[name] = value;
        setEmail(oldValue);

    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const AlertMessage = () => {
        return <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            {
                success ?
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Successfully Sent!
                    </Alert>
                    :
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Something went wrong (not Sent) !
                    </Alert>
            }
        </Snackbar>
    }



    return (
        < >

            <AlertMessage />
            <FormContainer
                component="form"
                onSubmit={sendEmail}
                ref={form}
                noValidate
                autoComplete="on"
            >

                <FormContent>


                    {errorMessage.length > 0 && <>< Alert sx={{ my: 2 }} variant="outlined" severity="error">{errorMessage}</Alert> <AlertMessage /></>}
                    <FormContentInner>
                        <InputFieldColOne onBlur={onBlurHandler} defaultValue={email?.name} required name="name" type={"text"} id="input-name" label="Your Name" variant="outlined" />
                    </FormContentInner>

                    <FormContentInner>
                        <InputFieldColOne onBlur={onBlurHandler} defaultValue={email?.email} required name="email" type={"email"} id="input-email" label="Your email" variant="outlined" />
                    </FormContentInner>
                    <FormContentInner>
                        <InputFieldColOne onBlur={onBlurHandler} defaultValue={email?.subject} required name="subject" type={"text"} id="input-subject" label="Subject" variant="outlined" />
                    </FormContentInner>
                    <FormContentInner>
                        <InputFieldColOne onBlur={onBlurHandler} defaultValue={email?.message} required name="message" type={"text"} id="outlined-basic" label="Message" variant="outlined" multiline
                            minRows={16} />
                    </FormContentInner>
                    <FormContentInner>
                        <Button type="submit" >SEND MESSAGE</Button>
                    </FormContentInner>
                </FormContent>
            </FormContainer>
        </>

    )
}

export default ContactForm;