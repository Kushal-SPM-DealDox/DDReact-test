import React, { useState, useEffect } from 'react';
import '../../assets/css/ResetPassword.css';
import Cookies from 'js-cookie';

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
  const [isPasswordRequirementsVisible, setIsPasswordRequirementsVisible] = useState(true);
  const [isPasswordMatching, setIsPasswordMatching] = useState(true);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const email = Cookies.get('email'); // Retrieve the email from cookie

  const handleCopy = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    setIsSubmitEnabled(isPasswordValid && isConfirmPasswordValid && isPasswordMatching);
  }, [isPasswordValid, isConfirmPasswordValid, isPasswordMatching]);

  const updatePassword = async () => {
    try {
      const response = await fetch('http://localhost:3030/update', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
          email: email,
        }),
      });

      if (response.ok) {
        console.log('success');
        alert('Password Changed Successfully');
        window.location.href = '/';
      } else {
        console.error('Request failed:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(
      value.length >= 8 && // At least 8 characters
      /[a-z]/.test(value) && // Contains lowercase letters
      /[A-Z]/.test(value) && // Contains uppercase letters
      /\d/.test(value) && // Contains digits
      /[!@#$%^&*()]/.test(value) // Contains special characters
    );
    setIsPasswordRequirementsVisible(true);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setIsConfirmPasswordValid(value === password);
    setIsPasswordMatching(value === password);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitEnabled) {
      updatePassword();
    } else {
      setIsPasswordMatching(false);
    }
  };

  return (
    <>
      <div>
        <h2 id='enterpswrd'>Enter Your New Password Below To Recover Your Account</h2>
        <br />
        <form className='resetform' onSubmit={handleSubmit}>
          <input type='email' value={email} readOnly hidden /> <br />
          <div className="password-input-container">
            <input
              className='newPassword'
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder='Enter New Password'
              required
              value={password}
              onChange={handlePasswordChange}
              style={{position: 'relative', right: '-8px'}}
              onPaste={handleCopy}
            />
            <i
              className={`password-toggle-icon ${isPasswordVisible ? 'fa fa-eye-slash' : 'fa fa-eye'}`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          {isPasswordRequirementsVisible && !isPasswordValid && (
            <p className="password-requirements" style={{ fontSize: '12px', color: 'red' }}>
              Password should contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 numerical digit, and 1 special character.
            </p>
          )}
          <label htmlFor='password'>Enter New Password</label>
          <div className="password-input-container">
            <input
              type={'password'}
              placeholder='Enter The Above Password'
              required
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onPaste={handleCopy}
            />
          </div>
          <label htmlFor='password'>Confirm Password</label>
          {!isPasswordMatching && (
            <p className="password-match" style={{ fontSize: '12px', color: 'red' }}>
              Password does not match.
            </p>
          )}
          <br />
          <button id="updatepass" type="submit" disabled={!isSubmitEnabled}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;
