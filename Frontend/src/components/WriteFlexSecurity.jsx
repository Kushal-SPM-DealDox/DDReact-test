
import React, { useState } from 'react';
import { myFunction2Write, myFunctionWrite } from '../components/WriteFlexjs'
import '../components/WriteFlex.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';

const options = ['NO GROUPING', 'PRACTICE', 'ORG', 'MANAGER'];

const WriteFlexSecurity = ({ compName, data, handleShow }) => {
  const [isOpenPeople, setIsOpenPeople] = useState(false);
  const [selectedOptionPeople, setSelectedOptionPeople] = useState('NO GROUPING');
  const [searchValuePeople, setSearchValuePeople] = useState('');
  const dropdownRefPeople = useRef(null);

  const toggleDropdownPeople = () => {
    setIsOpenPeople(!isOpenPeople);
  };

  const handleOptionSelectPeople = (option) => {
    setSelectedOptionPeople(option);
    setIsOpenPeople(false);
  };

  const handleSearchChangePeople = (e) => {
    const value = e.target.value;
    setSearchValuePeople(value);
    setSelectedOptionPeople(value); // Set selectedOption to the search value
  };

  const filteredOptionsPeople = options.filter((option) =>
    option.toLowerCase().includes(searchValuePeople.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutsidePeople = (event) => {
      if (dropdownRefPeople.current && !dropdownRefPeople.current.contains(event.target)) {
        setIsOpenPeople(false);
      }
    }
    window.addEventListener('click', handleClickOutsidePeople);
    return () => {
      window.removeEventListener('click', handleClickOutsidePeople);
    };
  }, []);

  return (
    <div className="leftwrite" style={{ position: 'fixed' }}>
      <div className="nogroupingPeople" ref={dropdownRefPeople}>
        <input
          className={`groupingPeopleinput ${isOpenPeople ? 'open' : ''}`}
          type="text"
          value={selectedOptionPeople}
          onChange={handleSearchChangePeople}
          onClick={toggleDropdownPeople}
        />
        <FontAwesomeIcon
          icon={isOpenPeople ? faCaretUp : faCaretDown}
          className="toggleIconPeople" id="togglenogroupingPeople"
          onClick={toggleDropdownPeople}
        />
        {isOpenPeople && (
          <ul id="groupingPeopledropdown">
            {filteredOptionsPeople.map((option) => (
              <li key={option} onClick={() => handleOptionSelectPeople(option)}>
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
            {data?.map((item, index) => {
              const handleLinkClick = (item) => {
                handleShow(item);
              }
              return (
                <li
                  key={index}
                  className={index % 2 === 0 ? 'gray-bg' : 'lightgray-bg'}
                  onClick={() => { handleLinkClick(item) }}
                >
                  <a>
                    {compName === 'People' ? `${item.first_name} ${item.last_name}` 
                      : compName === 'Security'? `${item.role}`
                        : ''}  
                  </a>
                </li>  
              );
            })}

          </span>
          <span id="moreWrite">
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
            {/* <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li> */}
          </span>
          <button onClick={myFunctionWrite} id="myBTNwrite">VIEW MORE</button>
        </ul>
      </div>
    </div>
  )
}

export default WriteFlexSecurity;
