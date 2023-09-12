import React, { useState } from 'react';
import HelpIcon from '../Images/HelpIcon.png';
import "./HelpRequest.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useAuthContext } from "../hooks/useAuthContext";

const HelpRequest = () => {

  const { user } = useAuthContext();
    console.log(user);

  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const [secondDropdownOptions, setSecondDropdownOptions] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState("");
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [contactMethod1, setContactMethod1] = useState('');
  const [contactMethod2, setContactMethod2] = useState('');
  const [permission, setPermission] = useState('');
  const [issueType, setIssueType] = useState();
  const [issueName, setIssueName] = useState();
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedHelpTime, setSelectedHelpTime] = useState("");
  const [helpTimeOptionsVisible, setHelpTimeOptionsVisible] = useState(false);


  const handleLevelClick = () => {
    const levellist = document.querySelector("#levellist");
    levellist.style.display = levellist.style.display === "none" ? "block" : "none";
  };

  const handleLevelItemClick = (event) => {
    const selectedOption = event.target.textContent;
    setSelectedLevel(selectedOption);
    const levellist = document.querySelector("#levellist");
    levellist.style.display = "none";
  };

  const handleLevelOutsideClick = (event) => {
    const levelinput = document.querySelector("#levelinput");
    const levellist = document.querySelector("#levellist");
    if (!levelinput.contains(event.target)) {
      levellist.style.display = "none";
    }
  };

  window.addEventListener("click", handleLevelOutsideClick);


  const handleHelpTimeClick = () => {
    setHelpTimeOptionsVisible(!helpTimeOptionsVisible);
  };

  const handleHelpTimeItemClick = (event) => {
    const selectedOption = event.target.textContent;
    setSelectedHelpTime(selectedOption);
    setHelpTimeOptionsVisible(false);
  };

  const handleHelpTimeInput = (event) => {
    const filter = event.target.value.toUpperCase();
    const helpTimelistitems = document.querySelectorAll("#helpTimelistitems");

    helpTimelistitems.forEach(function (item) {
      const text = item.textContent.toUpperCase();
      if (text.indexOf(filter) > -1) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };

  const handleHelpTimeInputKeydown = (event) => {
    if (event.keyCode === 13) {
      const visibleItem = document.querySelector("#helpTimelistitems:not([style*='display: none'])");
      if (visibleItem) {
        setSelectedHelpTime(visibleItem.textContent);
        setHelpTimeOptionsVisible(false);
      }
    }
  };

  const handleHelpTimeOutsideClick = (event) => {
    const helpTimeinput = document.querySelector("#helpTimeinput");
    if (!helpTimeinput.contains(event.target)) {
      setHelpTimeOptionsVisible(false);
    }
  };

  window.addEventListener("click", handleHelpTimeOutsideClick);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  const handleAddOptions = (event) => {
    const selectedValue = event.target.value;
    setShowContactDropdown(selectedValue !== "");

    // Set the options for the second dropdown based on the selected value
    if (selectedValue === "Sales support") {
      setSecondDropdownOptions(['', 'I need pricing information']);
    } else if (selectedValue === "Technical issues") {
      setSecondDropdownOptions(['', 'Access request/Profile Update', 'Application slow/Unavailable', 'Broken/Missing Functionality', 'Content/Data/Profile changes']);
    } else if (selectedValue === "Billing and payment") {
      setSecondDropdownOptions(['', 'Finding Invoices', 'Help with a quote', 'Problem with a personal or Credit card', 'Cancel cloud subscription']);
    } else {
      // Set default options for other cases or when "Select...." is selected
      setSecondDropdownOptions([]);
    }
  };

  //  const wrapper = document.querySelector('.wrapper');
  function submitForm() {

    // setTimeout(function() {
    // Hide the form and show the success message
    document.querySelector('.container1').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';


  }


  // Country code Reset and submit:
  const originalInputProps = {
    required: true,
    style: { width: '597px', border: '0.1px solid rgb(56, 54, 54)' },

  };

  const [inputProps, setInputProps] = useState(originalInputProps);


  const handleInput = () => {
    setInputProps(originalInputProps);
  };



  const handleQueryPage = () => {

    setInputProps((prevInputProps) => ({ ...prevInputProps, value: '' }));

    document.getElementById('nameInput').value = '';
    document.getElementById('EmailInput').value = '';
    // document.getElementById('NumberInput').value = '';

    setShowContactDropdown(false);
    // document.getElementById('helpDropdown').value = '';
    // document.getElementById('prefereddropdown').value = '';
    document.querySelector('.help-input').value = '';
    document.querySelector('textarea').value = '';
    document.getElementById('levelinput').value = '';
    document.getElementById('radio').checked = false;
    document.getElementById('acessinfodiv').style.display = 'none';
    document.getElementById('yesorNoDiv').style.display = 'none';
    document.getElementById('dateInput').value = ' ';
    document.getElementById('helpDropdown').value = '';

    document.querySelector('.container1').style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';
  }

  
  const [valid, setValid] = useState(true);


  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  }

  const validatePhoneNumber = () => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);

  }


  const sendToSupport = async () => {


    try{

      const response = await fetch('http://localhost:4001/api/help/create',{
        method: "POST",
        headers: {
          'Content-Type' : 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          first_name:firstName,
          last_name:lastName,
          customer_email:customerEmail,
          contact_number: phoneNumber,
          department: issueType,
          issue: issueName,
          summary: summary,
          description: description,
          priority:selectedLevel,
          contact_type1: contactMethod1,
          contact_type2: contactMethod2,
          permission_access: permission,
          date:selectedDate,
          prefered_time:selectedHelpTime

        }),
      });
      if (response.ok) {
        submitForm();
        alert('Send to support!');
        window.location.href = '/home';
      } else {
        alert('Unable to send');
      }
    }catch(error){
      console.log(error);
    }

  }; 


  return (
    <div>

      <div className="helpbox">
        <button className="help">
          <a href="#divOne" className="button1" >
            <img src={HelpIcon} alt="Help" style={{ height: '35px', width: '35px' }} />
          </a>
        </button>
      </div>
      <div className="overlay" id="divOne">


        <div className="wrapper">
          <p className="head" id='p'>LOG A SUPPORT REQUEST</p><br />
          <a href="#" className="close">x</a>
          <div className="content">
            <div className="container1">
            {/* <form action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8" method='POST'>
              <input type="hidden" name="orgid" value="00D2v000003PByK" />
              <input type="hidden" name="retURL" value="http://localhost:3002/account" /> */}
              <form >
                <div>
                  <label htmlFor="">FirstName:</label>
                  <br />
                  <input type="text" id='nameInput' required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="">LastName:</label>
                  <br />
                  <input type="text" id='nameInput' required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="">Email:</label>
                  <br />
                  <input type="text" id='EmailInput' required value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="">Contact Number:</label>
                  <br />
                  <PhoneInput onClick={handleInput} type="text" country={'in'} required value={phoneNumber} onChange={handleChange} id='NumberInput' inputProps={inputProps} />

                </div>

                <label htmlFor="">What can we help you with?</label>
                <br />
                <select name="" id="helpDropdown" value={issueType} required onChange={(e) => setIssueType(e.target.value)} onClick={handleAddOptions}>
                  <option> </option>
                  <option>Sales support</option>
                  <option>Technical issues</option>
                  {/* <option>My account</option> */}
                  <option>Billing and payment</option>
                  {/* <option>Enhancement</option>
                    <option>Others</option> */}
                </select>

                {showContactDropdown && (
                  <div>
                    <label htmlFor="">Select a Topic:</label>
                    <select name="" id="prefereddropdown" required value={issueName} onChange={(e) => setIssueName(e.target.value)}>
                      {secondDropdownOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <br />
                <label>Summary:</label>
                <input type="text" className="help-input" required value={summary} onChange={(e) => setSummary(e.target.value)} />
                <br /><br />
                <label>Description:</label> <br />
                <textarea rows={8} cols defaultValue={""} required style={{ width: '595px', height: '134px' }} value={description} onChange={(e) => setDescription(e.target.value)} />  <br />
                <br />
                <div id="levels">
                  <label id="levellabel">What is the impact on your business:</label>
                  <input id="levelinput" type="text" value={selectedLevel} required onClick={handleLevelClick} />
                  <ul id="levellist" style={{ display: 'none' }}>
                    <li onClick={handleLevelItemClick}>
                      <span id='levelhead'>Priority 1:</span> Production application down or major malfunction affecting business and high number of staff
                    </li>
                    <li onClick={handleLevelItemClick}>
                      <span id='levelhead'>Priority 2:</span> Issues or question with limited business
                    </li>
                    <li onClick={handleLevelItemClick}>
                      <span id='levelhead'>Priority 3:</span> Application issue that has a moderate impact on the business
                    </li>
                    <li onClick={handleLevelItemClick}>
                      <span id='levelhead'>Priority 4:</span> Issues or question with limited business
                    </li>
                  </ul>
                </div>
                <br />



                {/* Contact Method div */}
                <div id='contactdiv'>
                  <label htmlFor="">  Prefereed Contact Method:</label>
                  <br />
                  <div id='phoneEmail'>
                    <input type="checkbox" name='email' id='radio'   value="email" checked={contactMethod1 === "email"} onChange={(e) => setContactMethod1(e.target.value)} />
                    <label htmlFor="email" id='labels'>Email</label>
                    &nbsp;  &nbsp; <input type="checkbox"  name='phone' id='radio' value="phone"  checked={contactMethod2 === "phone"} onChange={(e) => setContactMethod2(e.target.value)} />
                    <label htmlFor="Phone" id='labels'>Phone</label>
                  </div> <br />
                </div>

                {/* Permission to Acecess data */}
                <div>
                  <p id='acessinfodiv'>
                    I give DealDox support personnel permission
                    to access data in my Cloud Instance to assist me with my request:
                  </p>
                  <div id='yesorNoDiv'>
                    <input type="radio" name="infoAcess" id="radioOption1" value="Yes" checked={ permission === 'Yes'} onChange={(e) => setPermission(e.target.value)}/>&nbsp;<label htmlFor="">Yes</label>&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="infoAcess" id="radioOption2" value="No" checked={ permission === 'No'} onChange={(e) => setPermission(e.target.value)} />&nbsp;<label htmlFor="">No</label>
                  </div>
                </div>

                <br />
                {/* Prefered Date */}
                <div>
                  <label htmlFor="">Prefereed Date:</label>
                  <br />   <DatePicker
                    id="dateInput"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd" required// Customize date format if needed
                  />
                </div>
                <br />

                <div id="helpDropdown">
                  <label id="helpTimelabel" >Preferred Time (Regional Time):</label>
                  <input id="helpTimeinput" requ type="text" value={selectedHelpTime} required onClick={handleHelpTimeClick} onChange={handleHelpTimeInput} onKeyDown={handleHelpTimeInputKeydown}></input>

                  <ul id="helpTimelist"  style={{ display: helpTimeOptionsVisible ? 'block' : 'none' }} onClick={handleHelpTimeItemClick}>
                    <li id="helpTimelistitems">(UTC-12:00) International Date Line West</li>
                    <li id="helpTimelistitems">(UTC-11:00) Coordinated Universal Time-11</li>
                    <li id="helpTimelistitems">(UTC-10:00) Hawaii</li>
                    <li id="helpTimelistitems">(UTC-09:30) Marquesas Islands</li>
                    <li id="helpTimelistitems">(UTC-09:00) Aleutian Islands</li>
                    <li id="helpTimelistitems">(UTC-09:00) Coordinated Universal Time-09</li>
                    <li id="helpTimelistitems">(UTC-08:00) Alaska</li>
                    <li id="helpTimelistitems">(UTC-08:00) Coordinated Universal Time-08</li>
                    <li id="helpTimelistitems">(UTC-07:00) Baja California</li>
                    <li id="helpTimelistitems">(UTC-07:00) Pacific Time (US & Canada)</li>
                    <li id="helpTimelistitems">(UTC-07:00) Arizona</li>
                    <li id="helpTimelistitems">(UTC-07:00) Chihuahua,La Paz,Mazatlan</li>
                    <li id="helpTimelistitems">(UTC-06:00) Saskatchewan</li>
                    <li id="helpTimelistitems">(UTC-06:00) Easter Island</li>
                    <li id="helpTimelistitems">(UTC-06:00) Guadalajara,Mexico City,Monterrey</li>
                    <li id="helpTimelistitems">(UTC-06:00) Central America</li>
                    <li id="helpTimelistitems">(UTC-06:00) Mountain Time(US & Canada)</li>
                    <li id="helpTimelistitems">(UTC-05:00) Bagota, Lime, Quito, Rio Branco</li>
                    <li id="helpTimelistitems">(UTC-05:00) Chetumal</li>
                    <li id="helpTimelistitems">(UTC-05:00) Central Time (US & Canada)</li>
                    <li id="helpTimelistitems">(UTC-04:00) Santiago</li>
                    <li id="helpTimelistitems">(UTC-04:00) Georgetown,La Paz,Manaus,San Juan</li>
                    <li id="helpTimelistitems">(UTC-04:00) Cuiaba</li>
                    <li id="helpTimelistitems">(UTC-04:00) Caracas</li>
                    <li id="helpTimelistitems">(UTC-04:00) Asuncion</li>
                    <li id="helpTimelistitems">(UTC-04:00) Turks and Caicos</li>
                    <li id="helpTimelistitems">(UTC-04:00) Havana</li>
                    <li id="helpTimelistitems">(UTC-04:00) Haiti</li>
                    <li id="helpTimelistitems">(UTC-04:00) Eastern Time(US & Canada)</li>
                    <li id="helpTimelistitems">(UTC-04:00) Indiana (East)</li>
                    <li id="helpTimelistitems">(UTC-03:00) Salvador</li>
                    <li id="helpTimelistitems">(UTC-03:00) City of Buenos Aires</li>
                    <li id="helpTimelistitems">(UTC-03:00) Montevideo</li>
                    <li id="helpTimelistitems">(UTC-03:00) Cayenne,Fortaleza</li>
                    <li id="helpTimelistitems">(UTC-03:00) Araguaina</li>
                    <li id="helpTimelistitems">(UTC-03:00) Atlantic Time (Canada)</li>
                    <li id="helpTimelistitems">(UTC-03:00) Brasilia</li>
                    <li id="helpTimelistitems">(UTC-02:30) Newfoundland</li>
                    <li id="helpTimelistitems">(UTC-02:00) Greenland</li>
                    <li id="helpTimelistitems">(UTC-02:00) Saint Pierre and Miquelon</li>
                    <li id="helpTimelistitems">(UTC-02:00) Coordinated Universal Time-02</li>
                    <li id="helpTimelistitems">(UTC-01:00) Cabo Verde Is</li>
                    <li id="helpTimelistitems">(UTC+00:00) Coordinated Universal Time</li>
                    <li id="helpTimelistitems">(UTC+00:00) Azores</li>
                    <li id="helpTimelistitems">(UTC+00:00) Monrovia, Reykjavik</li>
                    <li id="helpTimelistitems">(UTC+00:00) Sao Tome</li>
                    <li id="helpTimelistitems">(UTC+01:00) Casablanca</li>
                    <li id="helpTimelistitems">(UTC+01:00) West Central Africa</li>
                    <li id="helpTimelistitems">(UTC+01:00) Dublin,Edinburgh,Lisbon,London</li>
                    <li id="helpTimelistitems">(UTC+02:00) Kaliningrad</li>
                    <li id="helpTimelistitems">(UTC+02:00) Harare, Pretoria</li>
                    <li id="helpTimelistitems">(UTC+02:00) Windhoek</li>
                    <li id="helpTimelistitems">(UTC+02:00) Khartoum</li>
                    <li id="helpTimelistitems">(UTC+02:00) Belgrade, Bratislava, Budapest, Ljubljana</li>
                    <li id="helpTimelistitems">(UTC+02:00) Sarajevo, Skopje, Warsaw, Zagreb</li>
                    <li id="helpTimelistitems">(UTC+02:00) Brussels, Copenhagen, Madrid, Paris</li>
                    <li id="helpTimelistitems">(UTC+02:00) Amsterdam, Berlin, Bern, Rome,Stockholm</li>
                    <li id="helpTimelistitems">(UTC+02:00) Tripoli</li>
                    <li id="helpTimelistitems">(UTC+03:00) Nairobi</li>
                    <li id="helpTimelistitems">(UTC+03:00) Moscow,St.Petersburg</li>
                    <li id="helpTimelistitems">(UTC+03:00) Minsk</li>
                    <li id="helpTimelistitems">(UTC+03:00) Kuwait,Riyadh</li>
                    <li id="helpTimelistitems">(UTC+03:00) Istanbul</li>
                    <li id="helpTimelistitems">(UTC+03:00) Amman</li>
                    <li id="helpTimelistitems">(UTC+03:00) Volgograd</li>
                    <li id="helpTimelistitems">(UTC+03:00) Baghdad</li>
                    <li id="helpTimelistitems">(UTC+03:00) Helsinki,Kyiv,Riga,Sofia,Tallinn,Vilnius</li>
                    <li id="helpTimelistitems">(UTC+03:00) Jerusalem</li>
                    <li id="helpTimelistitems">(UTC+03:00) Gaza,Hebron</li>
                    <li id="helpTimelistitems">(UTC+03:00) Damascus</li>
                    <li id="helpTimelistitems">(UTC+03:00) Chisinau</li>
                    <li id="helpTimelistitems">(UTC+03:00) Cairo</li>
                    <li id="helpTimelistitems">(UTC+03:00) Beirut</li>
                    <li id="helpTimelistitems">(UTC+03:00) Athens, Bucharest</li>
                    <li id="helpTimelistitems">(UTC+03:30) Tehran</li>
                    <li id="helpTimelistitems">(UTC+04:00) Yerevan</li>
                    <li id="helpTimelistitems">(UTC+04:00) Saratov</li>
                    <li id="helpTimelistitems">(UTC+04:00) Port Louis</li>
                    <li id="helpTimelistitems">(UTC+04:00) Tbilisi</li>
                    <li id="helpTimelistitems">(UTC+04:00) Baku</li>
                    <li id="helpTimelistitems">(UTC+04:00) Astrakhan, Ulyanovsk</li>
                    <li id="helpTimelistitems">(UTC+04:00) Izhevsk,Samara</li>
                    <li id="helpTimelistitems">(UTC+04:00) Abu Dhabi, Muscat</li>
                    <li id="helpTimelistitems">(UTC+04:30) Kabul</li>
                    <li id="helpTimelistitems">(UTC+05:00) Islamabad, Karachi</li>
                    <li id="helpTimelistitems">(UTC+05:00) Qyzylorda</li>
                    <li id="helpTimelistitems">(UTC+05:00) Ashgabat, Toshkent</li>
                    <li id="helpTimelistitems">(UTC+05:00) Ekaterinburg</li>
                    <li id="helpTimelistitems">(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi</li>
                    <li id="helpTimelistitems">(UTC+05:30) Sri Jayawardenepura</li>
                    <li id="helpTimelistitems">(UTC+05:45) Kathmandu</li>
                    <li id="helpTimelistitems">(UTC+06:00) Nur-Sultan</li>
                    <li id="helpTimelistitems">(UTC+06:00) Dhaka</li>
                    <li id="helpTimelistitems">(UTC+06:00) Omsk</li>
                    <li id="helpTimelistitems">(UTC+06:30) Yangon (Rangoon)</li>
                    <li id="helpTimelistitems">(UTC+07:00) Novosibirsk</li>
                    <li id="helpTimelistitems">(UTC+07:00) Krasnoyarsk</li>
                    <li id="helpTimelistitems">(UTC+07:00) Tomsk</li>
                    <li id="helpTimelistitems">(UTC+07:00) Barnaul, Gorno-Altaysk</li>
                    <li id="helpTimelistitems">(UTC+07:00) Hovd</li>
                    <li id="helpTimelistitems">(UTC+07:00) Bangkok, Hanoi, Jakarta</li>
                    <li id="helpTimelistitems">(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi</li>
                    <li id="helpTimelistitems">(UTC+08:00) Irkutsk</li>
                    <li id="helpTimelistitems">(UTC+08:00) Kuala Lumpur, Singapore</li>
                    <li id="helpTimelistitems">(UTC+08:00) Perth</li>
                    <li id="helpTimelistitems">(UTC+08:00) Taipei</li>
                    <li id="helpTimelistitems">(UTC+08:00) Ulaanbaatar</li>
                    <li id="helpTimelistitems">(UTC+08:45) Eucla</li>
                    <li id="helpTimelistitems">(UTC+09:00) Yakutsk</li>
                    <li id="helpTimelistitems">(UTC+09:00) Seoul</li>
                    <li id="helpTimelistitems">(UTC+09:00) Chita</li>
                    <li id="helpTimelistitems">(UTC+09:00) Osaka,Sapporo,Tokyo</li>
                    <li id="helpTimelistitems">(UTC+09:00) Pyongyang</li>
                    <li id="helpTimelistitems">(UTC+09:30) Adelaide</li>
                    <li id="helpTimelistitems">(UTC+09:30) Darwin</li>
                    <li id="helpTimelistitems">(UTC+10:00) Hobart</li>
                    <li id="helpTimelistitems">(UTC+10:00) Vladivostok</li>
                    <li id="helpTimelistitems">(UTC+10:00) Canberra, Melbourne, Sydney</li>
                    <li id="helpTimelistitems">(UTC+10:00) Brisbane</li>
                    <li id="helpTimelistitems">(UTC+10:00) Gaum, Port Moresby</li>
                    <li id="helpTimelistitems">(UTC+10:30) Lord Howe Island</li>
                    <li id="helpTimelistitems">(UTC+12:00) Sakhalin</li>
                    <li id="helpTimelistitems">(UTC+12:00) Norfolk Island</li>
                    <li id="helpTimelistitems">(UTC+12:00) Solomon Is., New Caledonia</li>
                    <li id="helpTimelistitems">(UTC+12:00) Chokurdakh</li>
                    <li id="helpTimelistitems">(UTC+12:00) Bougainville Island</li>
                    <li id="helpTimelistitems">(UTC+12:00) Magadan</li>
                    <li id="helpTimelistitems">(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky</li>
                    <li id="helpTimelistitems">(UTC+12:00) Auckland, Wellington</li>
                    <li id="helpTimelistitems">(UTC+12:00) Coordinated Universal Time+ 12</li>
                    <li id="helpTimelistitems">(UTC+12:00) Fiji</li>
                    <li id="helpTimelistitems">(UTC+12:45) Chatham Islands</li>
                    <li id="helpTimelistitems">(UTC+13:00) Samoa</li>
                    <li id="helpTimelistitems">(UTC+13:00) Coordinated Universal Time+ 13</li>
                    <li id="helpTimelistitems">(UTC+13:00) Naku'alofa</li>

                  </ul>
                </div>


                <br />
                <br />
                <br />

                <input type="submit" onClick={sendToSupport} />
              </form>
            </div>
          </div>
          <div id="successMessage" style={{ display: "none" }}>
            <div id='sucessMsg'>
              <h2>Thank You for Submitting your Queries</h2>
              <h1>We will get back to you shortly</h1>
              <button onClick={handleQueryPage} id="okButton">Done</button>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
};



export default HelpRequest;
