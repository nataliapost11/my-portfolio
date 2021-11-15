import React, { useState } from 'react'; 
import '../../styles/Contact.css';
import '../../styles/Section.css';

// Here we import a helper function that will check if the email is valid
import { isEmpty, validateEmail } from '../../utils/helpers';

function ContactForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [fullName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'fullName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  
  const handleFormSubmit = (e) => {
    // Preventing the default behavior
    e.preventDefault();
   
    if (isEmpty(fullName)) {
      setErrorMessage('Name is required');
      return;
    } 
    if (!validateEmail(email)) {
      setErrorMessage('Your email is Invalid');
      return;
    }
    if (isEmpty(fullName)) {
      setErrorMessage('Name is required');
      return;
    } 
    if (isEmpty(message)) {
      setErrorMessage('Message is required');
      return;
    } 

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
  };

  const handleFocusOut = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    const name = e.target.name;
   
    if (name=="fullName" && isEmpty(fullName)) {
      setErrorMessage('Name is required');
      return;
    } 
    if (name=="email" && isEmpty(email)) {
      setErrorMessage('Email is required');
      return;
    }    
    if (name=="email" && !validateEmail(email)) {
      setErrorMessage('Your email is Invalid');
      return;
    }
    if (name=="message" && isEmpty(message)) {
      setErrorMessage('Message is required');
      return;
    }
  };

  return (
    <section className="section">
      <header>
        Contact
      </header>
      <div className="content"> 
      <form className="form">
        <label>Name:</label>        
        <input value={fullName} name="fullName" onBlur={handleFocusOut} onChange={handleInputChange} type="text" />
        <label>Email address:</label> 
        <input value={email} name="email" onBlur={handleFocusOut} onChange={handleInputChange} type="email" />
        <label>Message:</label> 
        <textarea value={message} name="message" onBlur={handleFocusOut} onChange={handleInputChange}></textarea>
        <br/>          
        {errorMessage && (
          <div className="error-text">{errorMessage}</div>
        )}
        <br/>
        <button class="submit-button" type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      </div>
    </section>
  );
}

export default ContactForm;