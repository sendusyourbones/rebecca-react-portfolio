import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

import { validateEmail } from '../../utils/validateEmail';
import '../../assets/styles/Contact.css';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'message') {
            setMessage(value);
        }

        if (value !== '') {
            setErrorMessage('');
        }
    };

    const handleBlur = (e) => {
        const { value, name } = e.target;

        if (value === '') {
            if (name === 'name') {
                setErrorMessage('Name is required.');
            } else if (name === 'email') {
                setErrorMessage('Email address is required.');
            } else if (name === 'message') {
                setErrorMessage('Message is required.');
            }
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
    };

    return (
        <section>
            <h1>Contact Me</h1>
            <form>
                <div className="form-container">
                    <TextField
                        label="Name"
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        variant="outlined"
                        required
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        label="Email Address"
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="text"
                        variant="outlined"
                        required
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        label="Message"
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        variant="outlined"
                        multiline
                        rows={10}
                        required
                        onBlur={handleBlur}
                        fullWidth
                    />
                </div>
                {errorMessage && (
                    <p className="error">{errorMessage}</p>
                )}
                <button
                    type="button"
                    onClick={handleFormSubmit}
                    className="btn btn-lg btn-contact"
                >
                    Send Your Message
                </button>
                {submitted && (
                    <p>Your message has been submitted!</p>
                )}
            </form>
        </section>
    );
};

export default Contact;
