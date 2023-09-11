import React, { useState } from 'react';

// Material-UI imports
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Package imports
import emailjs from '@emailjs/browser';

// Utility imports
import { validateEmail } from '../../utils/validateEmail';

// Asset imports
import '../../assets/styles/Contact.css';

const SubmitButton = withStyles((theme) => ({
  root: {
    color: '#000000',
    backgroundColor: '#B4B4FA',
    '&:hover': {
      color: '#FFFFFF',
      backgroundColor: '#7a7acc',
    },
    marginBottom: '1%',
    border: '2px solid #000000',
  },
}))(Button);

export const Contact = () => {
  const inputDefaultValues = {
    value: '',
    isEmpty: false,
    isValid: true,
  };

  const [name, setName] = useState(inputDefaultValues);
  const [email, setEmail] = useState(inputDefaultValues);
  const [message, setMessage] = useState(inputDefaultValues);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (inputValue, setState) => {
    setState((otherValues) => ({
      ...otherValues,
      value: inputValue,
    }));
  };

  const handleBlur = (inputValue, setState) => {
    if (inputValue === '') {
      setState((otherValues) => ({
        ...otherValues,
        isEmpty: true,
      }));
    }

    if (setState === setEmail && !validateEmail(inputValue)) {
      setState((otherValues) => ({
        ...otherValues,
        isValid: false,
      }));
    }
  };

  const handleFocus = (state, setState) => {
    if (state.isEmpty) {
      setState((otherValues) => ({
        ...otherValues,
        isEmpty: false,
      }));
    }

    if (!state.isValid) {
      setState((otherValues) => ({
        ...otherValues,
        isValid: true,
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    emailjs
      .send(
        'service_6w977vf',
        'template_tgeqq6e',
        templateParams,
        '7NjHvxliNrbBPbZ1l'
      )
      .then(() => {
        resetFormFields(setName);
        resetFormFields(setEmail);
        resetFormFields(setMessage);
        setSubmitted(true);
      })
      .catch((error) => {
        setErrorMessage(
          `Apologies, there was an issue sending your message: ${error}. You can email me at beckee.roos@gmail.com.`
        );
      });
  };

  function resetFormFields(setState) {
    setState((otherValues) => ({
      ...otherValues,
      value: '',
    }));
  }

  return (
    <section>
      <Typography variant='h1'>Contact Me</Typography>
      <Typography>
        To get in touch with me, email me at{' '}
        <a href='mailto:beckee.roos@gmail.com'>beckee.roos@gmail.com</a> or fill
        out the form below.
      </Typography>
      <Box component='form' onSubmit={handleFormSubmit}>
        <div className='form-container'>
          <TextField
            label='Name'
            name='name'
            type='text'
            variant='outlined'
            required
            fullWidth
            margin='normal'
            onChange={(e) => handleInputChange(e.target.value, setName)}
            onBlur={(e) => handleBlur(e.target.value, setName)}
            onFocus={() => handleFocus(name, setName)}
            error={name.isEmpty}
            helperText={name.isEmpty && 'Please enter your name'}
          />
          <TextField
            label='Email Address'
            name='email'
            type='text'
            variant='outlined'
            required
            fullWidth
            margin='normal'
            onChange={(e) => handleInputChange(e.target.value, setEmail)}
            onBlur={(e) => handleBlur(e.target.value, setEmail)}
            onFocus={() => handleFocus(email, setEmail)}
            error={email.isEmpty || !email.isValid}
            helperText={
              (email.isEmpty && 'Please enter your email address') ||
              (!email.isValid && 'Please enter a valid email address')
            }
          />
          <TextField
            label='Message'
            name='message'
            variant='outlined'
            multiline
            rows={10}
            required
            fullWidth
            margin='normal'
            onChange={(e) => handleInputChange(e.target.value, setMessage)}
            onBlur={(e) => handleBlur(e.target.value, setMessage)}
            onFocus={() => handleFocus(message, setMessage)}
            error={message.isEmpty}
            helperText={message.isEmpty && 'Please enter a message'}
          />
        </div>
        <SubmitButton type='submit'>Send Your Message</SubmitButton>
        {submitted && <Typography>Your message has been sent!</Typography>}
        {errorMessage && (
          <Typography className='error'>{errorMessage}</Typography>
        )}
      </Box>
    </section>
  );
};

export default Contact;
