import React, { useState } from 'react';
import { myFunction2Write, myFunctionWrite } from './WriteFlexjs'
import '../components/WriteFlex.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';
import { useLocation,Link,useNavigate } from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext";


const options = ['NO GROUPING', 'CATALOG CATEGORY'];
const WriteFlexContent = () => {
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
// ****************************************************************************************************


const navigate = useNavigate();

const accData = useLocation();
const contentData = accData.state;
const [contentdata, setContentData] = useState([]);
console.log(contentdata,'-0-0-0-0-0-0m');


useEffect(() => {
  const getContentdata = async () => {
      try {
          const response = await fetch('api/content/get', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${user.token}`,
              },
          });
          if (response.ok) {
              const content = await response.json();
              console.log(content,"09090900");
              console.log(content.data + "-=-=-=-=-=-=");
              setContentData(content.data);

          } else {
              console.log('Error:', response.statusText);
          }
      } catch (error) {
          console.log(error);
      }
  };
  if (user != "" && user != null) {
      getContentdata();
  }

}, [user]);
  return (
    <div>

      <div className="leftwrite" style={{ position: 'fixed' }}>
        <div className="nogroupingContent" ref={dropdownRef}>
          <input
            className={`groupingcontentinput ${isOpen ? 'open' : ''}`}
            type="text"
            value={selectedOption}
            onChange={handleSearchChange}
            onClick={toggleDropdown}
          />
          <FontAwesomeIcon
            icon={isOpen ? faCaretUp : faCaretDown}
            className="toggleIcon" id="togglenogroupingcontent"
            onClick={toggleDropdown}
          />
{isOpen && (
            <ul id="groupingcontentdropdown">
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
            {contentdata && contentdata.map((content) => (
  <li key={content.id}>
    <Link to='/contentEdit' state={content}>
      {content.content_name}
    </Link>
  </li>
))}
            </span>
            <span id="morewrite">
              <li><a href="#"></a></li>
             
            </span>
            <button onClick={myFunctionWrite} id="myBTNwrite">VIEW MORE</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WriteFlexContent
