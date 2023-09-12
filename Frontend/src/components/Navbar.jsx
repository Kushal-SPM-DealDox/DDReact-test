import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuthContext } from "../hooks/useAuthContext";
import { useState,useEffect } from 'react';

const Navbar = () => {
  const { user } = useAuthContext();
  const [companyData, setCompanyData] = useState([]);
  const [inputValue7, setInputValue7] = useState('');
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
          if (data.data[0].companyLogo) {
            setCompanyData(data.data[0]);
         
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCompanyDetails();
  }, [user]);

console.log(companyData);

useEffect(() => {
  const getConfigData = async () => {
    try {
      const response = await fetch('api/config/get', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
      });

      if (response.ok) {
        const conData = await response.json();
        if (conData && conData.data && conData.data.length > 0) {
          setInputValue7(conData.data[0].value7); // Set the initial value to "YES"
          console.log('inputValue7 set to------:', conData.data[0].value1);
        }
      } else {
        console.log('Error:', response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (user && user.token) {
    getConfigData();
  }
}, [user]);
const renderCompanyImage = () => {
  if (inputValue7 === 'YES' && companyData.companyLogo) {
    return (
      <div className="logo_image" id='image_add'>
        
      <>
        <img
          src={companyData.companyLogo}
          style={{ maxWidth: '45px', maxHeight: '20px', marginRight: '10px' }}
        />
        <p style={{ color: 'whitesmoke', marginTop: '1px', display: 'contents' }}>
          <span style={{ fontSize: '11px', marginRight: '10px', marginTop: '8px' }}>Powered by</span><span style={{ marginTop: '4px' }}>DEALDOX</span>
        </p>
      </>
    
    <FontAwesomeIcon icon={faUserCircle} style={{ width: '20px', height: '20px', color: 'gray', display: 'none' }} />
  </div>
    );
  }
  return null;
};

  return ( 
    <div>
      <div className="navandbread">
        <nav>
          <div className="search">
            <div className="icon" onClick={handleIconClick}><i id='fasearchicon' className='fa fa-search'></i></div>
            <div className="input">
              <input type="text" placeholder="Search..." id="mysearch" />
            </div>
            <span className="clear" onClick={handleClearClick} />
          </div>
          {renderCompanyImage()}
          <div className="navset">
            <span style={{ marginRight: '30px' }}><a href="#"><button style={{ paddingTop: '4px', fontFamily: '"Courier New"', fontWeight: 'bold' }}>DEFAULT</button></a></span>
            <span className="icon"><a href="#"><i className="fas fa-clock" style={{ fontSize: '20px', color: 'azure', marginRight: '31px' }} /></a></span>
            <span className="icon"><a href="#"><i className="fa fa-bell" style={{ fontSize: '20px', color: 'azure', marginRight: '31px' }} /></a></span>
            <div className="dropdown">
              <li onClick={myFunction} id="profile" className="fa fa-user" style={{ fontSize: '20px', color: 'azure', marginRight: '20px' }} />
              <div id="myDropdown" className="dropdown-content">
                <a href="./myprofile">My Profile</a>
                <a href="#">What's New?</a>
                <a href="#">Logout From DealDox</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
export const handleIconClick = () => {
  const search = document.querySelector('.search');
  const icon = document.querySelector('.icon');
  const fasearchicon = document.getElementById('fasearchicon');
  search.classList.toggle('active');
  icon.style.backgroundColor = 'white';
  if (search.className === 'search active') {
     fasearchicon.style.color='#0f6b99';
    // fasearchicon.style.color = 'red';
  }
  else {
    fasearchicon.style.color = 'black';
  }
};

export const handleClearClick = () => {
  const input = document.getElementById('mysearch');
  input.value = '';
};

export const myFunction = () => {
  document.getElementById("myDropdown").classList.toggle("show");
  var profile = document.getElementById("profile");
  if (document.getElementById("myDropdown").classList.contains("show")) {
    profile.style.color = '#216c98';
  } else {
    profile.style.color = 'white';
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {

  if (!event.target.matches('.fa-user')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      var profile = document.getElementById("profile");
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        profile.style.color = 'white';
      }
    }

  }
}
export default Navbar;

