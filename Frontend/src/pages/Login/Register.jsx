import React, { useState, useEffect } from 'react';
import '../../assets/css/RegisterStyle.css';
import InternationalTelephoneInput from '../../components/InternationalTelephoneInput';
import Password from '../../components/Password';

function Register() {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Track button disabled state
  const [isPasswordValid, setIsPasswordValid] = useState(false); // Track password validity


  // const sendEmail = async (e) => {
  //   // e.preventDefault();
  //   const res = await fetch("/sendmail", {
  //     method: "post",
  //     headers: {
  //       "content-Type": "application/json"
  //     }, body: JSON.stringify({
  //       email
  //     })
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //   if (data.status === 401 || !data) {
  //     console.log("error")
  //   } else {
  //     setEmail("")
  //     console.log("Email sent")
    
  //   }
  // }

  useEffect(() => {
    validateFields(); // Validate fields initially
  }, []);

  const addUser = async () => {
    try {
      // Check if email already exists
      // const emailExistsRes = await fetch('http://localhost:3030/checkEmail', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     email: email,
      //   }),
      // });
  
      // const emailExistsData = await emailExistsRes.json();
  
      // if (emailExistsData.exists) {
      //   // Email already registered
      //   alert('The email is already registered');
      //   return;
      // }
  
      // Proceed with user registration
      const response = await fetch('api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: full_name,
          email: email,
          phone_number: phone_number,
          password: password,
        }),
      });
      const json = await response.json()

      if (response.ok) {
        console.log(json);
        
        if(json.status == "Success"){
          alert('User Registered Successfully. Check Your Mail For Login Details');
          window.location.href = "/";
        }else{
          alert(json.message)
        }
      } else {
        console.error('Request failed:', json.status);
        alert('Request failed try after some time!');
        window.location.href = "/register";
      }
      
      
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  // Handle input change and update state for each input field
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (phone_number) => {
    setPhoneNumber(phone_number);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  // Validate all input fields and update button disabled state
  const validateFields = () => {
    const isFullNameValid = full_name.trim() !== "";
    const isEmailValid = email.trim() !== "";
    const isPhoneNumberValid = phone_number.trim() !== "";
    const isCheckboxChecked = document.getElementById("terms").checked;
    setIsButtonDisabled(
      !(isFullNameValid && isEmailValid && isPhoneNumberValid && isCheckboxChecked && isPasswordValid)
    );
  };


  useEffect(() => {
    validateFields(); // Re-validate fields on every change
  }, [full_name, email, phone_number, isPasswordValid]);

  // Handle password validity change
  const handlePasswordValidityChange = (isValid) => {
    setIsPasswordValid(isValid);
  };

  return (
    <>
      <div className="flex-container_register">
        <div className="container_register">
          <h2>Create a New Account</h2>
          <form action="#" className="regForm" method='POST'>
            <label htmlFor="username">Full Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Full Name"
              required
              value={full_name}
              onChange={handleFullNameChange}
            />
            <label htmlFor="useremail">Email:</label>
            <input
              type="email"
              id="useremail"
              name="useremail"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={handleEmailChange}
            />
            <InternationalTelephoneInput
              onChange={handlePhoneNumberChange}
            />
            <Password
              onChange={handlePasswordChange}
              onValidityChange={handlePasswordValidityChange} // Pass the callback to Password component
            />
            <span>
              <input
                type="checkbox"
                id="terms"
                required
                onChange={() => {
                  validateFields(); // Call the validateFields function on checkbox change
                }}
              />
              I agree To The terms & Conditions
            </span>
            <button
              id="send_register"
              type="button"
              disabled={isButtonDisabled} // Disable button based on validity
              onClick={() => { addUser();  }}
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
