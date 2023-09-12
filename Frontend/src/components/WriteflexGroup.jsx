
import React, { useState } from 'react';
import { myFunction2Write, myFunctionWrite } from '../components/WriteFlexjs'
import '../components/WriteFlex.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const options = ['NO GROUPING', 'CATALOG CATEGORY', 'CATALOG STATUS'];
const WriteFlexGroup = () => {

  const { user } = useAuthContext();
  console.log(user);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('NO GROUPING');
  const [searchValue, setSearchValue] = useState('');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setSelectedOption(value); // Set selectedOption to the search value
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const navigate = useNavigate();

  const roleData = useLocation();
  const dataRoles = roleData.state;
  const [rolesData, setRolesData] = useState([]);
  console.log("RolesData: " + rolesData);

  useEffect(() => {
    const getRolesData = async () => {
      try {
        const response = await fetch('/api/rolesSetup/get', {
          method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${user.token}`,
              },
        });
        if(response.ok) {
          const roles = await response.json();
          console.log('roles: '+ roles);
          console.log('roles.data: ' + roles.data);
          setRolesData(roles.data);
        }else {
          console.log('Error: ', response.statusText);
        }
      }catch (error) {
        console.log(error);
      }
    };
    if (user != "" && user != null) {
      getRolesData();
  }
  }, [user]);

  return (
    <div>

      <div className="leftwrite" style={{ position: 'fixed' }}>
        <div className="nogroupingDoctype" ref={dropdownRef}>
          <input
            className={`groupingdoctypeinput ${isOpen ? 'open' : ''}`}
            type="text"
            value={selectedOption}
            onChange={handleSearchChange}
            onClick={toggleDropdown}
          />
          <FontAwesomeIcon
            icon={isOpen ? faCaretUp : faCaretDown}
            className="toggleIcon" id="togglenogrouping"
            onClick={toggleDropdown}
          />



          {isOpen && (
            <ul id="groupingdoctypedropdown">
              {filteredOptions.map((option) => (
                <li key={option} onClick={() => handleOptionSelect(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="inboxwrite">
          <i className="fa fa-search" aria-hidden="true" />
          <input type="text" id="mySearchwrite" onKeyUp={myFunction2Write} title="type in a chategory" />
        </div>
        <div className="dividewrite">
          <ul id="myMenuwrite">
            <span id="dotswrite">
              {rolesData && rolesData.map((roles) => (
                <li key={roles.id}>
                  <Link to = '/rolessetupedit' state={roles}>
                    {roles.role_name}
                  </Link>
                </li>
              ))}
           {/* <li><a href="#">1040Tech LLC</a></li> */}
              
            </span>
            <span id="morewrite">
              <li><a href="#">1040Tech LLC</a></li>
             
            </span>
            <button onClick={myFunctionWrite} id="myBTNwrite">VIEW MORE</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WriteFlexGroup;
