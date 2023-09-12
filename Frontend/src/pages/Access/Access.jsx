import React from 'react'
import '../Access/Access.css'
import Navbar from '../../components/Navbar'
import AdminSidebar from '../../components/AdminSidebar'
import WriteFlexPeople from '../../components/WriteflexPeople'
import HelpRequest from '../../components/HelpRequest'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faAngleUp, faAngleDown, faGear, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { handleClickTimestamp, handleOpenClose } from '../Accounts/AccountSidebar'
import { useState, useRef, useEffect } from 'react';


const Access = () => {



  const [isDropdownOpenextra, setisDropdownOpenextra] = useState(false);
  const [searchValueextra, setSearchValueextra] = useState('');
  const [selectedItemextra, setSelectedItemextra] = useState('');
  const [displayvalueextra, setdisplayvalueextra] = useState('');
  const inputrefextra = useRef(null);
  const dropdownRefextra = useRef(null);
  const [optionsextra, setoptionsExtra] = useState([]);
  const [nonaccesspeopleData, setNonAccessPeopleData] = useState([]);
  const [accessPeopleData, setAccessPeopleData] = useState([]);
  const [adminId, setAdmin] = useState('');
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [writeFormData, setWriteFormData] = useState(false);
  const [securityRoleData, setSecurityRoleData] = useState([]);


  const [formData, setFormData] = useState({
    // initialize your form fields here
    first_name: '',
    last_name: '',
    access: '',
    title: '',
    uid: '',
    emp_id: '',
    emp_reference_id: '',
    start_date: '',
    end_date: '',
    practice: '',
    org: '',
    manager: '',
    exp_yr: '',
    tenure: '',
    crm_status: '',
    email: '',
    phone: '',
    source_system_user_name: '',
    city: '',
    region: '',
    country: '',
    contractor: '',
    supplier: '',
    currency: '',
    cost_per_hour: '',
    week_hour: '',
  });
  const [initialFormData, setInitialFormData] = useState({});

  useEffect(() => {
    setInitialFormData(formData);
  }, [])

  useEffect(() => {
    const handleClickOutsideroleextra = (event) => {
      const dropdownElement = dropdownRefextra.current;
      const inputElement = inputrefextra.current;

      if (
        dropdownElement &&
        !dropdownElement.contains(event.target) &&
        inputElement &&
        !inputElement.contains(event.target)
      ) {
        setisDropdownOpenextra(false);
      }
    };

    const handleWindowMousedown = (event) => {
      handleClickOutsideroleextra(event);
    };
    window.addEventListener('mousedown', handleWindowMousedown);
    return () => {
      window.removeEventListener('mousedown', handleWindowMousedown);
    };

  }, []);

  const toggledropdownextra = () => {
    setisDropdownOpenextra(!isDropdownOpenextra);
  };

  const handleOptionSelectextra = (options) => {
    setSelectedItemextra(options);
    setisDropdownOpenextra(false);
    setdisplayvalueextra(options);
    setShowComponent(true);
    setFormData(nonaccesspeopleData.filter((item) => item.first_name === options)[0])
  };

  useEffect(() => {
    setAdmin(formData.email);
  }, [formData]);

  const handleSearchChangeextra = (e) => {
    const value = e.target.value;
    setSearchValueextra(value);
    setdisplayvalueextra(value);
  };

  //console.log("displayvalueextra : ", displayvalueextra);

  const handleShowClick = () => {
    if (!writeFormData) {
      if (showAnotherComponent) {
        setShowAnotherComponent(false);
        //setFormData(initialFormData);
      } else {
        setShowAnotherComponent(true);
      }
    } else {
      if (!showAnotherComponent) {
        setShowAnotherComponent(true);
      } else {
        //setFormData(initialFormData);
        setWriteFormData(false);
        setShowComponent(false);
      }
    }
    setdisplayvalueextra('');
    setFormData(initialFormData);
  };

  const handleShow = (data) => {
    setShowAnotherComponent(true);
    setWriteFormData(true);
    setAdmin(data.email);
    setShowComponent(true);
    setFormData(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  //console.log("formData : ",formData );

  const handleParentClick = () => {
    const securitylist = document.querySelector("#securitylist");
    const contentaccessinput = document.querySelector("#contentaccessinput");
    const securityDiv = document.getElementById('contentAccess11');
    securitylist.style.display = securitylist.style.display === "none" ? "block" : "none";



    //  ITEM SELECTING
    const handleParentItemClick = (event) => {
      const selectedOptionssecurity = event.target.textContent;
      contentaccessinput.value = selectedOptionssecurity;
      console.log(typeof contentaccessinput.value)

      const { name, value } = contentaccessinput;
      //console.log(name, value, typeof name, typeof value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
      securitylist.style.display = "none";
    };


    // search filter
    const handleParentInput = () => {
      const filter = contentaccessinput.value.toUpperCase();
      console.log(typeof contentaccessinput.value)
      const securitylistitems = securitylist.querySelectorAll("li");



      securitylistitems.forEach(function (item) {
        const text = item.textContent.toUpperCase();
        if (text.indexOf(filter) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    }
    // ENTER
    const handleParentInputKeydown = (event) => {
      if (event.keyCode === 13) {
        const visibleItem = securitylist.querySelector("li:not([style*='display: none'])");
        if (visibleItem) {
          contentaccessinput.value = visibleItem.textContent;
          securitylist.style.display = "none";
        }
      }
    }

    // WINDOWS CLICK
    const handleParentOutsideClick = (event) => {
      if (!contentaccessinput.contains(event.target)) {
        securitylist.style.display = "none";
      }
    };


    // ITEM SELECTING
    const securitylistitems = securitylist.querySelectorAll("li");
    securitylistitems.forEach(function (item) {
      item.addEventListener("click", handleParentItemClick);
    });

    contentaccessinput.addEventListener("input", handleParentInput);
    contentaccessinput.addEventListener("keydown", handleParentInputKeydown);
    window.addEventListener("click", handleParentOutsideClick);

  }

  const fetchData = async () => {
    try {
      let response = await fetch('api/admin/people', {
        method: "GET",
      })
      const json = await response.json()
      if (json) {
        const nonaccessdata = [];
        const accessData = [];
        json.data.map((item) => item.access ? accessData.push(item) : nonaccessdata.push(item))
        setNonAccessPeopleData(nonaccessdata)
        setAccessPeopleData(accessData);
        setoptionsExtra(nonaccessdata.map(item => item.first_name))
        if (accessData.length > 0) handleShow(accessData[0])
      }
    } catch (error) {
      console.error("Error: ", error)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  

  const filteredOptionextra = optionsextra.filter((optionsextra) =>
    optionsextra.toLowerCase().includes(searchValueextra.toLowerCase())
  );

  //*******************************************************************************************
  //API to get security roles from database

  const [selectedSecurityRole, setSelectedSecurityRole] = useState('');
  const handleSecurityItemClick = (value) => {
    setSelectedSecurityRole(value);
    const securityList = document.getElementById('securitylist');
    securityList.style.display = 'none';
  };


  const fetchSecurityRoleData = async () => {
    try {
      let response = await fetch('http://localhost:4001/api/security/', {
        method: "GET",
      })
      const json = await response.json()
      if (json) {
        setSecurityRoleData(json.data);
      }
    } catch (error) {
      console.error("Error: ", error)
    }
  }

  useEffect(() => {
    fetchSecurityRoleData();
  }, []);

  let securityRolesData = securityRoleData.length > 0 ? securityRoleData.map(sroles => sroles.role) : [];
  console.log(securityRolesData)

  const securityRole = selectedSecurityRole;
  const giveAccess = async () => {
    try {
      const response = await fetch(`api/admin/people/${adminId}?securityRole=${securityRole}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const json = await response.json()

      if (json) {
        fetchData();
        setFormData(initialFormData);
        setdisplayvalueextra('');
        setShowComponent(false);
      }

    } catch (error) {
      console.error("Error: ", error)
    }
  }

  return (
    <div>
      <Navbar />
      <AdminSidebar />
      <div className="bread">
        <ul className="breadcrumbs">
          <li className="breadcrumbs--item">
            <a href='/home' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>HOME</a>
          </li>
          <li className="breadcrumbs--item">
            <a className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>ADMIN</a>
          </li>
          <li className="breadcrumbs--item">
            <a href="" className="breadcrumbs--link breadcrumbs--link--active">ACCESS</a>
          </li>
        </ul>
        <hr className="hr" />
      </div>
      <HelpRequest />
      {/* ---------------------------- */}
      <div>
        <div className="rowaccess">

          <WriteFlexPeople compName="People" data={accessPeopleData} handleShow={handleShow} />

          <div className="plusiconaccess">
            <i className="fa fa-plus" id="plusiconaccess" onClick={handleShowClick} />
            {/* <i className="fa fa-plus" id="plusiconaccess" onClick={hideshowplusiconaccess} /> */}
          </div>

          <div className="rightaccess" style={{ width: '50px' }}>

            {!showAnotherComponent ?
              <div id="headeraccess"><a>ACCESS</a></div> :
              <div id="headeraccess"><a> ADD ACCESS</a></div>
            }

            {accessPeopleData.length === 0 &&
              <div id="accessmsgdiv">
                <label id="accessmsg">
                  NO ACCESS FOUND. PLEASE USE + TO ADD A NEW ACCESS
                </label>
              </div>
            }

            {showComponent &&
              <div id="accessshow">
                {/* Selected item: {selectedItemextra} */}
                <div className="grid-access">
                  <div id="left-grid-access">
                    <i className="fa fa-circle" aria-hidden="true" />
                    <p>PENDING(EXPIRED)</p>
                    <label>EXPIRATION</label>
                  </div>
                  <div id="right-grid-access">
                    <div className="accessdataright">
                      <div className="containerAccess1">
                        <div id="contentAccess1">
                          <input className type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder='Enter first name' id='place' />
                          <label>FIRST NAME</label>
                        </div>
                        <div id="contentAccess2">
                          <input className type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder='Enter last name' id='place' />
                          <label>LAST NAME</label>
                        </div>
                      </div>
                      <div className="containerAccess2">
                        <div id="contentAccess3">
                          <input className type="text" name="title" value={formData.title} onChange={handleChange} placeholder='Enter title' id='place' />
                          <label>TITLE</label>
                        </div>
                        <div id="contentAccess4">
                          <input className type="text" />
                          <label>MANAGER</label>
                        </div>
                      </div>
                      <div className="containerAccess3">
                        <div id="contentAccess5">
                          <input className type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder='Enter phone number' id='place' />
                          <label>PHONE</label>
                        </div>
                        <div id="contentAccess6">
                          <input className type="email" name="email" value={formData.email} onChange={handleChange} />
                          <label>EMAIL</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accessdataright1">
                  <div className="containerAccess4">
                    <div id="contentAccess7">
                      <div className="removeandresend">
                        <button id="removeaccess" type="reset" style={{ color: 'red' }} >UPDATE ACCESS</button>
                        <button id="resendemail" type="submit" style={{ color: 'rgb(0, 79, 128)' }}>RESEND EMAIL</button>
                      </div>
                    </div>
                    <div id="contentAccess8">
                      <input className type="number" name="uid" value={formData.uid} onChange={handleChange} placeholder='Enter UID' id='place' />
                      <label>UID</label>
                    </div>
                  </div>
                </div>
                <div className="containerAccess5">
                  <div className="role1">
                    <b>ROLE</b>
                  </div>
                  <div className="roles1">
                    <i>Roles are defined in the Admin Security section on the left</i>
                  </div>
                </div>
                <div className="containerAccess6">
                  <div id="contentAccess9" style={{ display: 'inline' }}>
                    <input className type="checkbox" />
                    <label>INTEGRATION ACCESS ONLY</label>
                    <input className type="checkbox" />
                    <label>INTEGRATION ACCESS ONLY</label>
                  </div>
                  <div id="contentAccess10">
                    <button id="deleteandtoken" type="reset" style={{ color: 'red' }}>DELETE REFRESH TOKEN</button>
                  </div>
                </div>
                <div className="containerAccess7">
                  <div id="contentAccess11">
                    <input id="contentaccessinput"
                      type="text" name="access" value={formData.access}
                      placeholder="Select security" required
                      onClick={handleParentClick}
                    ></input>
                    <label id="securityaccesslabel">SECURITY ROLE</label>
                    <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
                    <ul id="securitylist"  style={{display:'none'}}>
                      {securityRolesData.map((role) => (
                        <li id='langlistitems' key={role} onClick={() => handleSecurityItemClick(role)}>
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div id="contentAccess12">
                    <input className type="text" onFocus="(this.type='date')" placeholder='Enter expiry date' id='place' />
                    <label>PASSWORD EXPIRATION DATE</label>
                  </div>
                </div>
                <div className="refernce1">
                  <b>REFERENCE</b>
                </div>

                <div className="containerAccess8">
                  <div id="contentAccess13">
                    <input id="orgaccessinput" type="text" placeholder="Select Org" required onClick={handleOrgClick}></input>
                    <label id="orglabel" >ORG</label>
                    <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
                    <ul id="orglist" style={{ display: 'none' }} >
                      <li id="orglistitems">AFRICA</li>
                      <li id="orglistitems">ALL OTHER AP</li>
                      <li id="orglistitems">AP-ALL OTHER</li>
                      <li id="orglistitems">AP-AUS/JP</li>
                      <li id="orglistitems">AP-CHINA</li>
                      <li id="orglistitems">AP-INDIA</li>
                      <li id="orglistitems">ARGENTINA</li>
                      <li id="orglistitems">AUSTRALIA</li>
                    </ul>
                  </div>
                  <div id="contentAccess14">
                    <div id="contentAccess14">
                      <input id="timeaccessinput" type="text" placeholder="Select timezone" required onClick={handleTimeClick}></input>
                      <label id="timelabel" >Time Zone</label>
                      <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
                      <ul id="timelist" style={{ display: 'none' }} >
                        <li id="timelistitems">AFRICA/ABIDJAN(FEBRUARY 16TH,6:40AM)</li>
                        <li id="timelistitems">AFRICA/ACCRA(FEBRUARY 16TH,6:40AM)</li>
                        <li id="timelistitems">AFRICA/ADDIS_ABABA(FEBRUARY 16TH,9:40AM)</li>
                        <li id="timelistitems">AFRICA/ALGIERS(FEBRUARY 16TH,7:40AM)</li>
                        <li id="timelistitems">AFRICA/ASMARA(FEBRUARY 16TH,9:40AM)</li>
                        <li id="timelistitems">AFRICA/ASMERA(FEBRUARY 16TH,9:40AM)</li>
                        <li id="timelistitems">AFRICA/BAMAKO(FEBRUARY 16TH,6:40AM)</li>
                        <li id="timelistitems">AFRICA/BANGUI(FEBRUARY 16TH,7:40AM)</li>
                      </ul>
                    </div>

                  </div>
                </div>
                <div className="containerAccess9">
                  <div id="contentAccess15">
                    <div id="contentAccess15">
                      <input id="langaccessinput" type="text" placeholder="Select language" required onClick={handleLangClick}></input>
                      <label id="langlabelacess" >Language</label>
                      <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
                      <ul id="langlist" style={{ display: 'none' }} >
                        <li id="langlistitems">Afrikaans</li>
                        <li id="langlistitems">Albanian</li>
                        <li id="langlistitems">Arabic</li>
                        <li id="langlistitems">Armenian</li>
                        <li id="langlistitems">Basque</li>
                        <li id="langlistitems">Bengali</li>
                        <li id="langlistitems">Bulgarian</li>
                        <li id="langlistitems">Catalan</li>
                        <li id="langlistitems">Cambodian</li>
                        <li id="langlistitems">Chinese (Mandarin)</li>
                        <li id="langlistitems">Croatian</li>
                        <li id="langlistitems">Czech</li>
                        <li id="langlistitems">Danish</li>
                        <li id="langlistitems">Dutch</li>
                        <li id="langlistitems">English</li>
                        <li id="langlistitems">Estonian</li>
                        <li id="langlistitems">Fiji</li>
                        <li id="langlistitems">Finnish</li>
                        <li id="langlistitems">French</li>
                        <li id="langlistitems">Georgian</li>
                        <li id="langlistitems">German</li>
                        <li id="langlistitems">Greek</li>
                        <li id="langlistitems">Gujarati</li>
                        <li id="langlistitems">Hebrew</li>
                        <li id="langlistitems">Hindi</li>
                        <li id="langlistitems">Hungarian</li>
                        <li id="langlistitems">Icelandic</li>
                        <li id="langlistitems">Indonesian</li>
                        <li id="langlistitems">Irish</li>
                        <li id="langlistitems">Indonesian</li>
                        <li id="langlistitems">Italian</li>
                        <li id="langlistitems">Japanese</li>
                        <li id="langlistitems">Javanese</li>
                        <li id="langlistitems">Kannada</li>
                        <li id="langlistitems">Korean</li>
                        <li id="langlistitems">Latin</li>
                        <li id="langlistitems">Latvian</li>
                        <li id="langlistitems">Lithuanian</li>
                        <li id="langlistitems">Macdonian</li>
                        <li id="langlistitems">Malay</li>
                        <li id="langlistitems">Malayalam</li>
                        <li id="langlistitems">Maltese</li>

                        <li id="langlistitems">Marori</li>
                        <li id="langlistitems">Marati</li>
                        <li id="langlistitems">Mangolian</li>
                        <li id="langlistitems">Nepali</li>
                        <li id="langlistitems">Norwegian</li>
                        <li id="langlistitems">Persian</li>
                        <li id="langlistitems">Polish</li>
                        <li id="langlistitems">Portuguese</li>
                        <li id="langlistitems">Punjabi</li>
                        <li id="langlistitems">Quechua</li>
                        <li id="langlistitems">Romanian</li>
                        <li id="langlistitems">Russian</li>
                        <li id="langlistitems">Samoan</li>
                        <li id="langlistitems">Serbian</li>
                        <li id="langlistitems">Slovak</li>
                        <li id="langlistitems">Slovenian</li>
                        <li id="langlistitems">Spanish</li>
                        <li id="langlistitems">Swahili</li>
                        <li id="langlistitems">Swedish</li>
                        <li id="langlistitems">Tamil</li>
                        <li id="langlistitems">Tatar</li>
                        <li id="langlistitems">Telugu</li>
                        <li id="langlistitems">Thai</li>
                        <li id="langlistitems">Tibetan</li>
                        <li id="langlistitems">Tonga</li>
                        <li id="langlistitems">Turkish</li>
                        <li id="langlistitems">Ukrainian</li>
                        <li id="langlistitems">Urdu</li>
                        <li id="langlistitems">Uzbek</li>
                        <li id="langlistitems">Vietnamese</li>
                        <li id="langlistitems">Welsh</li>
                        <li id="langlistitems">Xhosa</li>
                      </ul>
                    </div>


                  </div>
                  <div id="contentAccess16">
                    <input id="noteaccessinput" type="text" placeholder="Select notification " required onClick={handleNoteClick}></input>
                    <label id="noteslabel">NOTIFICATIONS</label>

                    <ul id="notelist" style={{ display: 'none' }} >

                      <li id="notelistitem">BY DEALDOX</li>
                      <li id="notelistitem">BY EMAIL</li>


                    </ul>
                    <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
                  </div>
                </div>
                <div className="loginemailpswd">
                  <b>LOGIN EMAIL &amp; PASSWORD</b>
                  <i>Cannot update password untill the Account is activated</i>
                </div>
                <div className="loginEml">
                  <b>LOGIN EMAIL: </b>
                </div>
                <button id="sendmail" onClick={giveAccess} >SEND EMAIL</button>
              </div>
            }

          </div>

          {(showAnotherComponent && !showComponent) &&
            // <div id="unique" style={{ display: 'none' }}>
            <div id="unique" >
              <input
                className="extrainput"
                type="text"
                onClick={toggledropdownextra}
                value={displayvalueextra}
                ref={inputrefextra}
                onChange={handleSearchChangeextra}
              />

              <label id="labelextra">SELECT PERSON TO GIVE ACCESS TO </label>

              <i
                className={`fa fa-caret-${isDropdownOpenextra ? 'up' : 'down'}`}
                id="toggleextra"
                onClick={toggledropdownextra}
              ></i>
              {isDropdownOpenextra && (
                <ul id="extralist" ref={dropdownRefextra}>
                  {searchValueextra.length < 4 ? (
                    <li id="norextra">PLEASE ENTER 3 OR MORE CHARACTERS</li>
                  ) : (
                    filteredOptionextra.map((option) => (
                      <li id="full" key={option} onClick={() => handleOptionSelectextra(option)}>
                        {option}</li>
                    ))
                  )}
                </ul>
              )}
            </div>
          }

          {/* sidebar org */}

          <div className="slide">
            <div id="mySidebar" className="sidebar1" >
              {/* <a href="javascript:void(0)" >x</a>  */}



              <div className="navside"> <button className="dropdown-btn" id="sidetoggle3" onClick={handleClickTimestamp}>TIMESTAMP
                <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '12px', float: 'right' }} />
              </button>
                <div className="side-container" id='timesOpen'>
                  <span id="time">CREATED BY:</span><span id="time1"></span><br />
                  <hr id="lhr" /> <span id="time">CREATED:</span><span id="time1"></span><br />
                  <hr id="lhr" /> <span id="time">LAST MODIFIED BY:</span><span id="time1"></span><br />
                  <hr id="lhr" /> <span id="time">LAST MODIFIED</span><span id="time1"></span><br />
                  <hr id="lhr" /> <span id="time">REVISION</span><span id="time1"></span><br />
                </div>
              </div>
            </div>
            <div>
              {/* <button id="mainsidebar" className="openbtnact" onClick={handleOpenClose}>
                <i className="fa-light fa-less-than" style={{ fontSize: '14px' }} /></button> */}
              {!showComponent &&
                <button id="mainsidebar" className="openbtnact" onClick={handleOpenClose} style={{ position: 'fixed', right: 10, center: 0 }}>
                  <i className="fa-light fa-less-than" style={{ fontSize: '14px' }} />
                </button>
              }
            </div>
          </div>
        </div>


      </div>


    </div>
  )
}



// export const handleParentClick = () => {
//   const securitylist = document.querySelector("#securitylist");
//   const contentaccessinput = document.querySelector("#contentaccessinput");
//   const securityDiv = document.getElementById('contentAccess11');
//   securitylist.style.display = securitylist.style.display === "none" ? "block" : "none";



//   //  ITEM SELECTING
//   const handleParentItemClick = (event) => {
//     const selectedOptionssecurity = event.target.textContent;
//     contentaccessinput.value = selectedOptionssecurity;
//     securitylist.style.display = "none";
//   };


//   // search filter
//   const handleParentInput = () => {
//     const filter = contentaccessinput.value.toUpperCase();
//     const securitylistitems = securitylist.querySelectorAll("li");



//     securitylistitems.forEach(function (item) {
//       const text = item.textContent.toUpperCase();
//       if (text.indexOf(filter) > -1) {
//         item.style.display = "";
//       } else {
//         item.style.display = "none";
//       }
//     });
//   }
//   // ENTER
//   const handleParentInputKeydown = (event) => {
//     if (event.keyCode === 13) {
//       const visibleItem = securitylist.querySelector("li:not([style*='display: none'])");
//       if (visibleItem) {
//         contentaccessinput.value = visibleItem.textContent;
//         securitylist.style.display = "none";
//       }
//     }
//   }

//   // WINDOWS CLICK
//   const handleParentOutsideClick = (event) => {
//     if (!contentaccessinput.contains(event.target)) {
//       securitylist.style.display = "none";
//     }
//   };


//   // ITEM SELECTING
//   const securitylistitems = securitylist.querySelectorAll("li");
//   securitylistitems.forEach(function (item) {
//     item.addEventListener("click", handleParentItemClick);
//   });

//   contentaccessinput.addEventListener("input", handleParentInput);
//   contentaccessinput.addEventListener("keydown", handleParentInputKeydown);
//   window.addEventListener("click", handleParentOutsideClick);

// }


export const handleOrgClick = () => {
  const orglist = document.querySelector("#orglist");
  const orgaccessinput = document.querySelector("#orgaccessinput");
  const orgDiv = document.getElementById('contentAccess13');
  orglist.style.display = orglist.style.display === "none" ? "block" : "none";
  // parentDiv.style.height = '59px';
  orglist.style.top = '-18px';


  //  ITEM SELECTING
  const handleOrgItemClick = (event) => {
    const selectedOptionsorg = event.target.textContent;
    orgaccessinput.value = selectedOptionsorg;
    orglist.style.display = "none";
  };


  // search filter
  const handleOrgInput = () => {
    const filter = orgaccessinput.value.toUpperCase();
    const orglistitems = orglist.querySelectorAll("li");



    orglistitems.forEach(function (item) {
      const text = item.textContent.toUpperCase();
      if (text.indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }
  // ENTER
  const handleOrgInputKeydown = (event) => {
    if (event.keyCode === 13) {
      const visibleItem = orglist.querySelector("li:not([style*='display: none'])");
      if (visibleItem) {
        orgaccessinput.value = visibleItem.textContent;
        orglist.style.display = "none";
      }
    }
  }

  // WINDOWS CLICK
  const handleOrgOutsideClick = (event) => {
    if (!orgaccessinput.contains(event.target)) {
      orglist.style.display = "none";
    }
  };


  // ITEM SELECTING
  const orglistitems = orglist.querySelectorAll("li");
  orglistitems.forEach(function (item) {
    item.addEventListener("click", handleOrgItemClick);
  });

  orgaccessinput.addEventListener("input", handleOrgInput);
  orgaccessinput.addEventListener("keydown", handleOrgInputKeydown);
  window.addEventListener("click", handleOrgOutsideClick);

}

export const handleTimeClick = () => {
  const timelist = document.querySelector("#timelist");
  const timeaccessinput = document.querySelector("#timeaccessinput");
  const timeDiv = document.getElementById('contentAccess14');
  timelist.style.display = timelist.style.display === "none" ? "block" : "none";
  // parentDiv.style.height = '59px';
  timelist.style.top = '-18px';


  //  ITEM SELECTING
  const handleTimeItemClick = (event) => {
    const selectedOptionstime = event.target.textContent;
    timeaccessinput.value = selectedOptionstime;
    timelist.style.display = "none";
  };


  // search filter
  const handleTimeInput = () => {
    const filter = timeaccessinput.value.toUpperCase();
    const timelistitems = timelist.querySelectorAll("li");



    timelistitems.forEach(function (item) {
      const text = item.textContent.toUpperCase();
      if (text.indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }
  // ENTER
  const handleTimeInputKeydown = (event) => {
    if (event.keyCode === 13) {
      const visibleItem = timelist.querySelector("li:not([style*='display: none'])");
      if (visibleItem) {
        timeaccessinput.value = visibleItem.textContent;
        timelist.style.display = "none";
      }
    }
  }

  // WINDOWS CLICK
  const handleTimeOutsideClick = (event) => {
    if (!timeaccessinput.contains(event.target)) {
      timelist.style.display = "none";
    }
  };


  // ITEM SELECTING
  const timelistitems = timelist.querySelectorAll("li");
  timelistitems.forEach(function (item) {
    item.addEventListener("click", handleTimeItemClick);
  });

  timeaccessinput.addEventListener("input", handleTimeInput);
  timeaccessinput.addEventListener("keydown", handleTimeInputKeydown);
  window.addEventListener("click", handleTimeOutsideClick);

}



export const handleLangClick = () => {
  const langlist = document.querySelector("#langlist");
  const langaccessinput = document.querySelector("#langaccessinput");
  const langDiv = document.getElementById('contentAccess15');
  langlist.style.display = langlist.style.display === "none" ? "block" : "none";
  // parentDiv.style.height = '59px';
  langlist.style.top = '-18px';


  //  ITEM SELECTING
  const handleLangItemClick = (event) => {
    const selectedOptionstime = event.target.textContent;
    langaccessinput.value = selectedOptionstime;
    langlist.style.display = "none";
  };


  // search filter
  const handleLangInput = () => {
    const filter = langaccessinput.value.toUpperCase();
    const langlistitems = langlist.querySelectorAll("li");



    langlistitems.forEach(function (item) {
      const text = item.textContent.toUpperCase();
      if (text.indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }
  // ENTER
  const handleLangInputKeydown = (event) => {
    if (event.keyCode === 13) {
      const visibleItem = langlist.querySelector("li:not([style*='display: none'])");
      if (visibleItem) {
        langaccessinput.value = visibleItem.textContent;
        langlist.style.display = "none";
      }
    }
  }

  // WINDOWS CLICK
  const handleLangOutsideClick = (event) => {
    if (!langaccessinput.contains(event.target)) {
      langlist.style.display = "none";
    }
  };


  // ITEM SELECTING
  const langlistitems = langlist.querySelectorAll("li");
  langlistitems.forEach(function (item) {
    item.addEventListener("click", handleLangItemClick);
  });

  langaccessinput.addEventListener("input", handleLangInput);
  langaccessinput.addEventListener("keydown", handleLangInputKeydown);
  window.addEventListener("click", handleLangOutsideClick);



}
export const handleNoteClick = () => {
  const notelist = document.querySelector("#notelist");
  const noteaccessinput = document.querySelector("#noteaccessinput");
  const noteDiv = document.getElementById('contentAccess16');
  notelist.style.display = notelist.style.display === "none" ? "block" : "none";
  // parentDiv.style.height = '59px';
  notelist.style.top = '-18px';

  //  ITEM SELECTING
  const handleNoteItemClick = (event) => {
    const selectedOptionsnote = event.target.textContent;
    noteaccessinput.value = selectedOptionsnote;
    notelist.style.display = "none";
  };

  // search filter
  const handleNoteInput = () => {
    const filter = noteaccessinput.value.toUpperCase();
    const notelistitems = notelist.querySelectorAll("li");
    notelistitems.forEach(function (item) {

      const text = item.textContent.toUpperCase();

      if (text.indexOf(filter) > -1) {
        item.style.display = "";

      } else {
        item.style.display = "none";
      }
    });
  }


  // ENTER
  const handleNoteInputKeydown = (event) => {
    if (event.keyCode === 13) {
      const visibleItem = notelist.querySelector("li:not([style*='display: none'])");
      if (visibleItem) {
        noteaccessinput.value = visibleItem.textContent;
        notelist.style.display = "none";

      }
    }
  }

  // WINDOWS CLICK
  const handleNoteOutsideClick = (event) => {

    if (!noteaccessinput.contains(event.target)) {
      notelist.style.display = "none";

    }

  };

  // ITEM SELECTING

  const notelistitems = notelist.querySelectorAll("li");
  notelistitems.forEach(function (item) {
    item.addEventListener("click", handleNoteItemClick);
  });


  noteaccessinput.addEventListener("input", handleNoteInput);
  noteaccessinput.addEventListener("keydown", handleNoteInputKeydown);
  window.addEventListener("click", handleNoteOutsideClick);

}

export function hideshowplusiconaccess() {

  var hedaccess = document.getElementById("headeraccess");
  hedaccess.innerHTML = `ADD ACCESS`;
  const accesshy = document.getElementById("accessmsgdiv");
  accesshy.style.display = "none";
  var sidepnl2 = document.getElementById('mainsidebar');
  sidepnl2.style.display = "none";

  var accesslist = document.getElementById("unique");
  if (accesslist.style.display === "none") {
    accesslist.style.display = "block";
  } else {
    accesslist.style.display = "none";
  }

}






export default Access