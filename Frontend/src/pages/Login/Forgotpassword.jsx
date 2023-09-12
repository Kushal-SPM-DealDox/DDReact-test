import React from 'react';
import '../../assets/css/ForgotPassword.css';
import { useState } from 'react';
import Cookies from 'js-cookie';

const Forgotpassword = () => {


  const [email, setEmail] = useState('');

  const passEmail = async (e)=> {
    e.preventDefault();
 
    const res = await fetch("http://localhost:3030/reset", {
      method: "post",
      headers: {
        "content-Type": "application/json"
      }, body:JSON.stringify({
          email
      })
    });

    const data = await res.json();
    console.log(data);
    if (data.status === 401 || !data) {
      console.log("error")
    } else {
      setEmail("");
      alert("Please Check Your Email to Set New Password");
      Cookies.set('email', email);
    }
  };

  return (
    <>
      <div>
        <h2>Enter Your Email Below To Reset Your Password:</h2>
        <form action='#' method='post' id='forgotform'>
          <input 
           type="email"
           id="useremail" 
           value={email} 
           name="useremail"
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter Your Registered Email" 
            required 
            />
          <label className='femail' htmlFor='useremail'>Enter Youre Email</label>
          <br />
          <button onClick={passEmail} id='einfo'>Send</button>
        </form>
      </div>
    </>
  )
}


export default Forgotpassword;