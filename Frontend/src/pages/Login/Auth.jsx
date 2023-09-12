import React, { useState } from 'react';
import '../../assets/css/Auth.css';

const  Auth = () => {
  
    const [userotp, setUserOtp] = useState(0);
    const CheckOtp = async (e) => {
        e.preventDefault();

     try{
        const response = await fetch('http://localhost:3030/verify', {
          method: 'POST',
          headers: {
                'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userotp: userotp,
          }),
        });
        if(response.ok){
          console.log("verification Successful");
          alert('verification Successful');
          window.location.href = "/home";
        }else{
          console.error('Request failed:', response.status);
          alert('Invalid OTP or OTP has Expired')
        }
     } catch(error){
        console.error('Error:', error);
     }      
    };

  return (
    <>
    <div id='otpvarification'>
    <marquee width="100%" direction="right" id='enterotp'>Enter The OTP To Verify Your Account and Login</marquee>
    <form method='post' id='formOtp'>
        <input type='number' placeholder='Enter OTP' id='userotp' name='userotp'  onChange={(e) => setUserOtp(e.target.value)}  required/>
        <label htmlFor='otp'>Enter Your OTP Here!</label>
        <br/>
        <button type='submit' id='otpverify' onClick={CheckOtp}>Verify</button>
        <br/>
        <a href='/'>Resend OTP?</a>
    </form>
    </div>
    </>
  )
}
export default Auth;