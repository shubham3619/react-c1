import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(input));
  };

  const validatePassword = (input) => {
    setPasswordValid(input.length >= 8);
  };

  const validateConfirmPassword = (input) => {
    setConfirmPasswordValid(input === password);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert("Can't submit the form");
    }
  };

  return (
    <div>
      <div className='input-section'>
        <label>Email:</label><br/>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          style={{ border: emailValid ? '2px solid green' : '2px solid red' }}
        />
        {!emailValid && <p>invelid email format</p>}
      </div>
      <div className='input-section'>
        <label>Password:</label><br/>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
          style={{
            border: passwordValid ? '2px solid green' : '2px solid red',
          }}
        />
        {!passwordValid && <p>Password must be at least 8 characters</p>}
      </div>
      <div className='input-section'>
        <label>Confirm Password:</label><br/>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            validateConfirmPassword(e.target.value);
          }}
          style={{
            border: confirmPasswordValid ? '2px solid green' : '2px solid red',
          }}
        />
        {!confirmPasswordValid && <p>Passwords do not match</p>}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignUpForm;
