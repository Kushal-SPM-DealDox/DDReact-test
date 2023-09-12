import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use
import Navbar from '../../components/Navbar';
import AdminSidebar from '../../components/AdminSidebar';
import '../Company/CompanyProfile.css';
import { useAuthContext } from "../../hooks/useAuthContext";
import HelpRequest from '../../components/HelpRequest'
const CompProfile = () => {

  const { user } = useAuthContext();
  console.log(user);

  // -----------------backend code start---------------------
  //useState to save data of DB 
  const [companyData, setCompanyData] = useState([]);

  const [companyId, setCompanyId] = useState(0);
  const [companyKey, setCompanyKey] = useState('');
  const [companyLogo, setCompanyLogo] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [userAuthorizationDomain, setUserAuthorizaytionDomain] = useState('');
  const [companyDomain, setCompanyDomain] = useState('');
  const [contactPersonFirstName, setContactPersonFirstName] = useState('');
  const [contactPersonLastName, setContactPersonLastName] = useState('');
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  // setCompanyLogo('data:image/jpeg;base64,/9j/4AAQ...'); 
  useEffect(() => {

    setCompanyId(companyData ? companyData.companyid : '');
    setCompanyKey(companyData ? companyData.company_Key : '');
    setCompanyName(companyData ? companyData.company_name : '');
    setCompanyLogo(companyData ? companyData.companyLogo : '');
    setSearchValue(companyData.language || '');
    setUserAuthorizaytionDomain(companyData ? companyData.user_authorization_domain : '');
    setCompanyDomain(companyData ? companyData.company_domain : '');
    setContactPersonFirstName(companyData ? companyData.first_name : '');
    setContactPersonLastName(companyData ? companyData.last_name : '');
    setPhone(companyData ? companyData.phone : '');
    setEmail(companyData ? companyData.email : '');
    setStreet(companyData ? companyData.street : '');
    setCity(companyData ? companyData.city : '');
    setState(companyData ? companyData.state : '');
    setCountry(companyData ? companyData.country : '');

  }, [companyData]);


  //API to get data from DataBase******************************************************8


  useEffect(() => {

    const getCompanyDetails = async () => {

      try {
        const response = await fetch('api/company/get', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          const companyDataWithLogoSrc = data.data[0];
          if (companyDataWithLogoSrc.logoUrl) {
            companyDataWithLogoSrc.logoSrc = companyDataWithLogoSrc.logoUrl;
          }
          setCompanyData(companyDataWithLogoSrc);
        }
      } catch (error) {
        console.log(error);
      }

    }
    getCompanyDetails();

  }, [user]);

  //API to Send the Data to Database for update

  const updateCompanyProfile = () => {
    console.log(typeof companyLogo); // Add this line
    fetch('http://localhost:4001/api/company/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        companyLogo: companyLogo, 
        company_name: companyName,
        language: searchValue,
        user_authorization_domain: userAuthorizationDomain,
        company_domain: companyDomain,
        first_name: contactPersonFirstName,
        last_name: contactPersonLastName,
        phone: phone,
        email: email,
        street: street,
        city: city,
        state: state,
        country: country,

      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error updating company Profile');
        }
      })
      .then((data) => {
        console.log('company profile updated successfully!', data);
        alert('company profile updated successfully!');
        // You can choose to update the UI or perform any other actions here
      })
      .catch((error) => {
        console.error('Error updating Company Profile:', error);
      });
  }
  // -----------------------------------------------------------------




  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef(null);

  const languages = ['Afrikaans', 'Albanian', /* Add more languages here */];

  const filteredLanguages = languages.filter(language =>
    language.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleInputClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDocumentClick = event => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleLanguageSelect = language => {
    setSearchValue(language);
    setIsDropdownOpen(false);
  };
  // ----------------company profile-----------------------
  
  const [logoSrc, setLogoSrc] = useState(null);
  const labelText = logoSrc ? 'CHANGE LOGO' : 'UPLOAD LOGO';

  const handleProfileLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const base64Data = e.target.result; // Base64-encoded image data
        setCompanyLogo(base64Data); // Store the base64 encoded image
        setLogoSrc(URL.createObjectURL(file)); // Generate a Blob URL for preview
      };
  
      reader.readAsDataURL(file);
    }
  };
  
  
  
  return (
    <div>
      <Navbar logoSrc={companyLogo} />
      <AdminSidebar />
      <div className="bread">
        <ul className="breadcrumbs">
          <li className="breadcrumbs--item">
            <a href='/home' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>HOME</a>
          </li>
          <li className="breadcrumbs--item">
            <a href='/' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>ADMIN</a>
          </li>
          <li className="breadcrumbs--item">
            <a href="" className="breadcrumbs--link breadcrumbs--link--active">COMPANY PROFILE</a>
          </li>
        </ul>
        <hr className="hr" />
      </div>
      <HelpRequest />
      {/* -------------------------- */}
      <div id="compProfile-head">
        <p id='company_profileHead'>
          COMPANY PROFILE
        </p>

        <div style={{ marginTop: '20px', marginBottom: '20px', border: '1px solid gray', textAlign: 'center' }}>
  <label htmlFor="logoInput" id="logo_update">
  {logoSrc || companyLogo ? (
 <img
 src={`http://localhost:4001/${companyLogo}`} // Use the full image URL

 style={{ maxWidth: '200px', maxHeight: '200px', marginTop: '10px', display: 'block', margin: '0 auto' }}
/>

) : (
  <FontAwesomeIcon
    icon={faUserCircle}
    style={{ width: '100px', height: '100px', color: 'gray' }}
  />
)}


    <span>{labelText}</span>
  </label>
  <input
    type="file"
    id="logoInput"
    style={{ display: 'none' }}
    onChange={handleProfileLogoChange}
    accept="image/*"
  />
</div>



        <div className="bmcgrid">
          <div id="bmcinput">
            <input id="bmcbox" type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            <label id="companyname">COMPANY NAME</label>
          </div>
          <div id="Language" className="custom-dropdown">
            <input
              id="langustics"
              type="text"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onClick={handleInputClick}
              ref={inputRef}
            />
            <label id="languagelabel">LANGUAGE</label>
            {isDropdownOpen && (
              <ul className="languageslist">
                {filteredLanguages.map(language => (
                  <li key={language} onClick={() => handleLanguageSelect(language)}>
                    {language}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="bmcuser">
          <div id="userin">
            <input id="usertext" type="text" value={userAuthorizationDomain} onChange={(e) => setUserAuthorizaytionDomain(e.target.value)} />
            <label id="userad">USER AUTHORIZATION DOMAIN</label>
          </div>
          <div id="usrin1">
            <input id="usertext1" type="text" value={companyDomain} onChange={(e) => setCompanyDomain(e.target.value)} />
            <label>COMPANY DOMAIN</label>
          </div>
        </div>
        <div className="contact">
          <label>CONTACT</label>
        </div>
        <div className="bmcadmin">
          <div id="useradmin">
            <input id="usertxt" type="text" value={contactPersonFirstName} onChange={(e) => setContactPersonFirstName(e.target.value)} />
            <label>CONTACT PERSON FIRST NAME</label>
          </div>
          <div id="useradmin1">
            <input id="userlast" type="text" value={contactPersonLastName} onChange={(e) => setContactPersonLastName(e.target.value)} />
            <label>CONTACT PERSON LAST NAME</label>
          </div>
          <div id="useradmin2">
            <input id="usertxt" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <label>PHONE</label>
          </div>
          <div id="useradmin3">
            <input id="usertxt" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>EMAIL</label>
          </div>
        </div>
        <div className="adminadd">
          <div id="useradmin4">
            <input id="usertxt1" type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
            <label>STREET</label>
          </div>
          <div id="useradmin5">
            <input id="userlast" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <label>CITY</label>
          </div>
          <div id="useradmin6">
            <input id="usertxt2" type="text" value={state} onChange={(e) => setState(e.target.value)} />
            <label>STATE</label>
          </div>
          <div id="useradmin7">
            <input id="usertxt3" type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
            <label>COUNTRY</label>
          </div>
        </div>
        <button onClick={updateCompanyProfile} id='update_profile'>Update</button>
      </div>
    </div>

  )
}
export default CompProfile;


