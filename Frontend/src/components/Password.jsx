import React, { useState, useEffect } from 'react';

const Password = ({ onChange, onValidityChange }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handlePaste = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    validatePassword(password); // Validate the password pattern
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    setConfirmPassword(confirmPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    validatePasswords(); // Validate passwords initially
  }, []);

  useEffect(() => {
    validatePasswords(); // Re-validate passwords on every change
  }, [password, confirmPassword]);

  const validatePasswords = () => {
    const isValid =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/.test(password) &&
      password === confirmPassword;
    setPasswordsMatch(password === confirmPassword);
    onValidityChange(isValid); // Pass the password validity state to the parent component
  };

  
  const validatePassword = (password) => {
    const isPatternValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/.test(password);
    const passwordError = isPatternValid ? '' : 'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character and be at least 8 characters long.';
    onValidityChange(isPatternValid);
    setPasswordError(passwordError);
  };

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <br />
      <input
        type={showPassword ? 'text' : 'password'}
        id="password"
        required
        placeholder="Password"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$"
        value={password}
        onChange={(event) => {
          handlePasswordChange(event);
          onChange(event.target.value);
        }}
        onPaste={handlePaste} // Prevent paste in the password field
      />
      <button type="button" id="passVisible" onClick={togglePasswordVisibility}>
        {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
      </button>
      <br />
      {passwordError && <b id="notMatch">{passwordError}</b>}
      <br />
      <label htmlFor="cpassword">Confirm Password:</label>
      <br />
      <input
        type="password"
        id="cpass"
        required
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(event) => {
          handleConfirmPasswordChange(event);
        }}
        onPaste={handlePaste} // Prevent paste in the password field
      />
      <br />
      {!passwordsMatch && confirmPassword && <b id="notMatch">Password does not match</b>}
    </div>
  );
};

export default Password;
