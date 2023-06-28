import React, { useState } from 'react';
import { Typography } from '@material-ui/core';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
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
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
    };

    return (
        <section>
            <Typography variant="h1">
                Contact Me
            </Typography>
            <form>
                <label for="name">Name:</label>
                <input
                    id="name"
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                />
                <label for="email">Email Address:</label>
                <input
                    id="email"
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                />
                <label for="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    rows={10}
                />
                <button
                    type="button"
                    onClick={handleFormSubmit}
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
