import React, { useState, useEffect } from 'react';
import '../../assets/css/Login.css';
import togglePasswordVisibility from '../../assets/js/showPassword';
// import Cookies from 'js-cookie';

import { useAuthContext } from "../../hooks/useAuthContext";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const userLogin = async () => {

    try {
      const response = await fetch('api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });
      const json = await response.json()
      console.log(json);

      if (response.ok) {
        
        if(json.status == "Success"){
            alert('User Login Successfully. Check Your Mail For OTP');
            localStorage.setItem('user', JSON.stringify(json));
            window.location.href = "/home";
        }else{
          alert(json.message)
        }
      } else {
        console.error('Request failed:', response.status);
        alert('Login Failed');
        window.location.href = "/";
      }
    } catch (error) {
      console.error('Error:', error);
    }

  };

  return (

    <div className="flex-container_login">
      <div className="container_login">
        <div className="logo">
          <p id='logodd'>DEALDOCX</p>
        </div>

        <p id="log">Login</p>

        <form action="#" method='post' id='logform'>
          <input type="email" id="useremail" value={email} name="useremail" onChange={handleEmailChange} placeholder="Enter Your Email" required />
          <label id='login_email' htmlFor='useremail'>Email</label>
          <input type="password" id="password" value={password} name="password" onChange={handlePasswordChange} placeholder="Enter Your Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$" required /><div className="password-icon"> <i className="fas fa-eye" id='logeye' onClick={togglePasswordVisibility}></i></div>
          <label id='login_password' htmlFor='password'>Password</label>
          <br />
          <button type='button' id='login' onClick={userLogin} >Login</button>
        </form>
        <br />
        <a href="/forgotpassword" id="fgot">FORGOT PASSWORD ?</a>
        <br />
        <a href="/register" id="reg">New User ? Click Here To Register</a>
      </div>
    </div>


  )
}

export default Login;
