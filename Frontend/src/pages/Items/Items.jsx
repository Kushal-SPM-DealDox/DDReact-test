import React from 'react'
import Navbar from '../../components/Navbar'
// import Sidebar from '../../components/Sidebar'

import CatalogSidebar from '../../components/CatalogSidebar'
import HelpRequest from '../../components/HelpRequest'
import WriteFlexGroup from '../../components/WriteflexGroup';
import { handleClickTimestamp, handleOpenClose, handleClickFiles, displayFileName } from '../Accounts/AccountSidebar'
import "../Items/Items.css"
import Addinfo from '../../components/Addinfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-regular-svg-icons';
import { useState, useRef, useEffect } from 'react';


const Items = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  // =========================================================
  
const [isToggleActivedesc, setIsToggleActivedesc] = useState(false);
const [isGeneralInfoVisible, setGeneralInfoVisible] = useState(false);

const toggleGeneralInfo = () => {
    setGeneralInfoVisible(!isGeneralInfoVisible);
    setIsToggleActivedesc(!isToggleActivedesc);
};

  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (event) => {
    const itemlabel = document.getElementById('itemlabel');
    const inputField = event.target;
    const value = inputField.value;
    setInputValue(value);

    if (value.length > 0) {
      setErrorMessage("");
      itemlabel.style.display = "block";
      inputField.style.outlineColor = "#0f6b93";
    } else {
      setErrorMessage("ITEM IS A REQUIRED FIELD");
      itemlabel.style.display = "none";
      inputField.style.outlineColor = "red";
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.length === 0) {
      setErrorMessage("ITEM IS A REQUIRED FIELD");
    }
    else {
      // Proceed with form submission or further processing
    }
  };

  

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(' ');
  const [filteredOptions, setFilteredOptions] = useState(['DEFAULT']);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const filterOptions = (event) => {
    const searchInput = event.target.value.toLowerCase();
    const filtered = ['DEFAULT'].filter(option =>
      option.toLowerCase().includes(searchInput)
    );
    setFilteredOptions(filtered);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option

  };
  // ===========================================================================================

  const [isDropdownOpencataitem4, setisDropdownOpencataitem4] = useState(false);

  const [searchValuecataitem4, setSearchValuecataitem4] = useState('');

  const [selectedOptioncataitem4, setSelectedOptioncataitem4] = useState('');

  const [displayvaluecataitem4, setdisplayvaluecataitem4] = useState('');

  const inputrefcataitem4 = useRef(null);

  const dropdownRefcataitem4 = useRef(null);




  useEffect(() => {

    const handleClickOutsiderolecataitem4 = (event) => {

      const dropdownElement = dropdownRefcataitem4.current;

      const inputElement = inputrefcataitem4.current;

      if (

        dropdownElement &&

        !dropdownElement.contains(event.target) &&

        inputElement &&

        !inputElement.contains(event.target)

      ) {

        setisDropdownOpencataitem4(false);

      }

    };




    const handleWindowMousedown = (event) => {

      handleClickOutsiderolecataitem4(event);

    };




    window.addEventListener('mousedown', handleWindowMousedown);




    return () => {

      window.removeEventListener('mousedown', handleWindowMousedown);

    };

  }, []);




  const toggledropdowncataitem4 = () => {

    setisDropdownOpencataitem4(!isDropdownOpencataitem4);

  };




  const handleOptionSelectcataitem4 = (optionscata4) => {

    setSelectedOptioncataitem4(optionscata4);

    setisDropdownOpencataitem4(false);

    setdisplayvaluecataitem4(optionscata4);

  };




  const handleSearchChangecataitem4 = (e) => {

    const value = e.target.value;

    setSearchValuecataitem4(value);

    setdisplayvaluecataitem4(value);

  };




  const optionscataitem4 = ['DEFAULT'];

  const filteredOptionscataitem4 = optionscataitem4.filter((optionscataitem4) =>

    optionscataitem4.toLowerCase().includes(searchValuecataitem4.toLowerCase())

  );

  // =============================================================================================

  const [isDropdownOpencataitem3, setisDropdownOpencataitem3] = useState(false);

  const [searchValuecataitem3, setSearchValuecataitem3] = useState('');

  const [selectedOptioncataitem3, setSelectedOptioncataitem3] = useState('');

  const [displayvaluecataitem3, setdisplayvaluecataitem3] = useState('');

  const inputrefcataitem3 = useRef(null);

  const dropdownRefcataitem3 = useRef(null);




  useEffect(() => {

    const handleClickOutsiderolecataitem3 = (event) => {

      const dropdownElement = dropdownRefcataitem3.current;

      const inputElement = inputrefcataitem3.current;

      if (

        dropdownElement &&

        !dropdownElement.contains(event.target) &&

        inputElement &&

        !inputElement.contains(event.target)

      ) {

        setisDropdownOpencataitem3(false);

      }

    };


    const handleWindowMousedown = (event) => {

      handleClickOutsiderolecataitem3(event);

    };




    window.addEventListener('mousedown', handleWindowMousedown);




    return () => {

      window.removeEventListener('mousedown', handleWindowMousedown);

    };

  }, []);


  const toggledropdowncataitem3 = () => {

    setisDropdownOpencataitem3(!isDropdownOpencataitem3);

  };




  const handleOptionSelectcataitem3 = (optionscata3) => {

    setSelectedOptioncataitem3(optionscata3);

    setisDropdownOpencataitem3(false);

    setdisplayvaluecataitem3(optionscata3);

  };




  const handleSearchChangecataitem3 = (e) => {

    const value = e.target.value;

    setSearchValuecataitem3(value);

    setdisplayvaluecataitem3(value);

  };




  const optionscataitem3 = ['DEFAULT'];

  const filteredOptionscataitem3 = optionscataitem3.filter((optionscataitem3) =>

    optionscataitem3.toLowerCase().includes(searchValuecataitem3.toLowerCase())
  );

  // ================================================================================
  const [isDropdownOpencataitem1, setisDropdownOpencataitem1] = useState(false);

  const [searchValuecataitem1, setSearchValuecataitem1] = useState('');

  const [selectedOptioncataitem1, setSelectedOptioncataitem1] = useState('');

  const [displayvaluecataitem1, setdisplayvaluecataitem1] = useState('');

  const inputrefcataitem1 = useRef(null);

  const dropdownRefcataitem1 = useRef(null);




  useEffect(() => {

    const handleClickOutsiderolecataitem1 = (event) => {

      const dropdownElement = dropdownRefcataitem1.current;

      const inputElement = inputrefcataitem1.current;

      if (

        dropdownElement &&

        !dropdownElement.contains(event.target) &&

        inputElement &&

        !inputElement.contains(event.target)

      ) {

        setisDropdownOpencataitem1(false);

      }

    };



    const handleWindowMousedown = (event) => {

      handleClickOutsiderolecataitem1(event);

    };




    window.addEventListener('mousedown', handleWindowMousedown);




    return () => {

      window.removeEventListener('mousedown', handleWindowMousedown);

    };

  }, []);





  const toggledropdowncataitem1 = () => {

    setisDropdownOpencataitem1(!isDropdownOpencataitem1);

  };




  const handleOptionSelectcataitem1 = (optionscata1) => {

    setSelectedOptioncataitem1(optionscata1);

    setisDropdownOpencataitem1(false);

    setdisplayvaluecataitem1(optionscata1);

  };




  const handleSearchChangecataitem1 = (e) => {

    const value = e.target.value;

    setSearchValuecataitem1(value);

    setdisplayvaluecataitem1(value);

  };




  const optionscataitem1 = ['DEFAULT'];

  const filteredOptionscataitem1 = optionscataitem1.filter((optionscataitem1) =>

    optionscataitem1.toLowerCase().includes(searchValuecataitem1.toLowerCase())

  );

  // =======================================================================================
  const [isDropdownOpencataitem5, setisDropdownOpencataitem5] = useState(false);

  const [searchValuecataitem5, setSearchValuecataitem5] = useState('');

  const [selectedOptioncataitem5, setSelectedOptioncataitem5] = useState('');

  const [displayvaluecataitem5, setdisplayvaluecataitem5] = useState('');

  const inputrefcataitem5 = useRef(null);

  const dropdownRefcataitem5 = useRef(null);




  useEffect(() => {

    const handleClickOutsiderolecataitem5 = (event) => {

      const dropdownElement = dropdownRefcataitem5.current;

      const inputElement = inputrefcataitem5.current;

      if (

        dropdownElement &&

        !dropdownElement.contains(event.target) &&

        inputElement &&

        !inputElement.contains(event.target)

      ) {

        setisDropdownOpencataitem5(false);

      }

    };




    const handleWindowMousedown = (event) => {

      handleClickOutsiderolecataitem5(event);

    };




    window.addEventListener('mousedown', handleWindowMousedown);




    return () => {

      window.removeEventListener('mousedown', handleWindowMousedown);

    };

  }, []);


  const toggledropdowncataitem5 = () => {

    setisDropdownOpencataitem5(!isDropdownOpencataitem5);

  };




  const handleOptionSelectcataitem5 = (optionscata5) => {

    setSelectedOptioncataitem5(optionscata5);

    setisDropdownOpencataitem5(false);

    setdisplayvaluecataitem5(optionscata5);

  };




  const handleSearchChangecataitem5 = (e) => {

    const value = e.target.value;

    setSearchValuecataitem5(value);

    setdisplayvaluecataitem5(value);

  };




  const optionscataitem5 = ['DEFAULT'];

  const filteredOptionscataitem5 = optionscataitem5.filter((optionscataitem5) =>

    optionscataitem5.toLowerCase().includes(searchValuecataitem5.toLowerCase())

  );
  // =========================================================================
  const [isDropdownOpencataitem6, setisDropdownOpencataitem6] = useState(false);

  const [searchValuecataitem6, setSearchValuecataitem6] = useState('');

  const [selectedOptioncataitem6, setSelectedOptioncataitem6] = useState('');

  const [displayvaluecataitem6, setdisplayvaluecataitem6] = useState('');

  const inputrefcataitem6 = useRef(null);

  const dropdownRefcataitem6 = useRef(null);




  useEffect(() => {

    const handleClickOutsiderolecataitem6 = (event) => {

      const dropdownElement = dropdownRefcataitem6.current;

      const inputElement = inputrefcataitem6.current;

      if (

        dropdownElement &&

        !dropdownElement.contains(event.target) &&

        inputElement &&

        !inputElement.contains(event.target)

      ) {

        setisDropdownOpencataitem6(false);

      }

    };



    const handleWindowMousedown = (event) => {

      handleClickOutsiderolecataitem6(event);

    };




    window.addEventListener('mousedown', handleWindowMousedown);




    return () => {

      window.removeEventListener('mousedown', handleWindowMousedown);

    };

  }, []);




  const toggledropdowncataitem6 = () => {

    setisDropdownOpencataitem6(!isDropdownOpencataitem6);

  };




  const handleOptionSelectcataitem6 = (optionscata6) => {

    setSelectedOptioncataitem6(optionscata6);

    setisDropdownOpencataitem6(false);

    setdisplayvaluecataitem6(optionscata6);

  };




  const handleSearchChangecataitem6 = (e) => {

    const value = e.target.value;

    setSearchValuecataitem6(value);

    setdisplayvaluecataitem6(value);

  };




  const optionscataitem6 = ['DEFAULT'];

  const filteredOptionscataitem6 = optionscataitem6.filter((optionscataitem6) =>

    optionscataitem6.toLowerCase().includes(searchValuecataitem6.toLowerCase())

  );

  // ===============================================popup category.====================================
  const [isDropdownOpencatapop4, setisDropdownOpencatapop4] = useState(false);

  const [searchValuecatapop4, setSearchValuecatapop4] = useState('');

  const [selectedOptioncatapop4, setSelectedOptioncatapop4] = useState('');

  const [displayvaluecatapop4, setdisplayvaluecatapop4] = useState('');

  const inputrefcatapop4 = useRef(null);

  const dropdownRefcatapop4 = useRef(null);




  useEffect(() => {

    const handleClickOutsiderolecatapop4 = (event) => {

      const dropdownElement = dropdownRefcatapop4.current;

      const inputElement = inputrefcatapop4.current;

      if (

        dropdownElement &&

        !dropdownElement.contains(event.target) &&

        inputElement &&

        !inputElement.contains(event.target)

      ) {

        setisDropdownOpencatapop4(false);

      }

    };




    const handleWindowMousedown = (event) => {

      handleClickOutsiderolecatapop4(event);

    };




    window.addEventListener('mousedown', handleWindowMousedown);




    return () => {

      window.removeEventListener('mousedown', handleWindowMousedown);

    };

  }, []);






  const toggledropdowncatapop4 = () => {

    setisDropdownOpencatapop4(!isDropdownOpencatapop4);

  };




  const handleOptionSelectcatapop4 = (optionscatapop4) => {

    setSelectedOptioncatapop4(optionscatapop4);

    setisDropdownOpencatapop4(false);

    setdisplayvaluecatapop4(optionscatapop4);

  };




  const handleSearchChangecatapop4 = (e) => {

    const value = e.target.value;

    setSearchValuecatapop4(value);

    setdisplayvaluecatapop4(value);

  };




  const optionscatapop4 = ['DEFAULT'];

  const filteredOptionscatapop4 = optionscatapop4.filter((optionscatapop4) =>

    optionscatapop4.toLowerCase().includes(searchValuecatapop4.toLowerCase())

  );

  // =============================================================================================

  const [isDropdownOpencatapop3, setisDropdownOpencatapop3] = useState(false);

  const [searchValuecatapop3, setSearchValuecatapop3] = useState('');

  const [selectedOptioncatapop3, setSelectedOptioncatapop3] = useState('');

  const [displayvaluecatapop3, setdisplayvaluecatapop3] = useState('');

  const inputrefcatapop3 = useRef(null);

  const dropdownRefcatapop3 = useRef(null);




  useEffect(() => {

    const handleClickOutsiderolecatapop3 = (event) => {

      const dropdownElement = dropdownRefcatapop3.current;

      const inputElement = inputrefcatapop3.current;

      if (

        dropdownElement &&

        !dropdownElement.contains(event.target) &&

        inputElement &&

        !inputElement.contains(event.target)

      ) {

        setisDropdownOpencatapop3(false);

      }

    };





    const handleWindowMousedown = (event) => {

      handleClickOutsiderolecatapop3(event);

    };




    window.addEventListener('mousedown', handleWindowMousedown);




    return () => {

      window.removeEventListener('mousedown', handleWindowMousedown);

    };

  }, []);








  const toggledropdowncatapop3 = () => {

    setisDropdownOpencatapop3(!isDropdownOpencatapop3);

  };




  const handleOptionSelectcatapop3 = (optionscatapop3) => {

    setSelectedOptioncatapop3(optionscatapop3);

    setisDropdownOpencatapop3(false);

    setdisplayvaluecatapop3(optionscatapop3);

  };




  const handleSearchChangecatapop3 = (e) => {

    const value = e.target.value;

    setSearchValuecatapop3(value);

    setdisplayvaluecatapop3(value);

  };




  const optionscatapop3 = ['DEFAULT'];

  const filteredOptionscatapop3 = optionscatapop3.filter((optionscatapop3) =>

    optionscatapop3.toLowerCase().includes(searchValuecatapop3.toLowerCase())
  );

  // ================================================================================
  const [isDropdownOpencatapop1, setisDropdownOpencatapop1] = useState(false);

  const [searchValuecatapop1, setSearchValuecatapop1] = useState('');

  const [selectedOptioncatapop1, setSelectedOptioncatapop1] = useState('');

  const [displayvaluecatapop1, setdisplayvaluecatapop1] = useState('');

  const inputrefcatapop1 = useRef(null);

  const dropdownRefcatapop1 = useRef(null);




  useEffect(() => {

    const handleClickOutsiderolecatapop1 = (event) => {

      const dropdownElement = dropdownRefcatapop1.current;

      const inputElement = inputrefcatapop1.current;

      if (

        dropdownElement &&

        !dropdownElement.contains(event.target) &&

        inputElement &&

        !inputElement.contains(event.target)

      ) {

        setisDropdownOpencatapop1(false);

      }

    };




    const handleWindowMousedown = (event) => {

      handleClickOutsiderolecatapop1(event);

    };




    window.addEventListener('mousedown', handleWindowMousedown);




    return () => {

      window.removeEventListener('mousedown', handleWindowMousedown);

    };

  }, []);




  const toggledropdowncatapop1 = () => {

    setisDropdownOpencatapop1(!isDropdownOpencatapop1);

  };




  const handleOptionSelectcatapop1 = (optionscatapop1) => {

    setSelectedOptioncatapop1(optionscatapop1);

    setisDropdownOpencatapop1(false);

    setdisplayvaluecatapop1(optionscatapop1);

  };




  const handleSearchChangecatapop1 = (e) => {

    const value = e.target.value;

    setSearchValuecatapop1(value);

    setdisplayvaluecatapop1(value);

  };




  const optionscatapop1 = ['DEFAULT'];

  const filteredOptionscatapop1 = optionscatapop1.filter((optionscatapop1) =>

    optionscatapop1.toLowerCase().includes(searchValuecatapop1.toLowerCase())

  );

  // =======================================================================================
  const [isDropdownOpencatapop5, setisDropdownOpencatapop5] = useState(false);

  const [searchValuecatapop5, setSearchValuecatapop5] = useState('');

  const [selectedOptioncatapop5, setSelectedOptioncatapop5] = useState('');

  const [displayvaluecatapop5, setdisplayvaluecatapop5] = useState('');

  const inputrefcatapop5 = useRef(null);

  const dropdownRefcatapop5 = useRef(null);




  useEffect(() => {

    const handleClickOutsiderolecatapop5 = (event) => {

      const dropdownElement = dropdownRefcatapop5.current;

      const inputElement = inputrefcatapop5.current;

      if (

        dropdownElement &&

        !dropdownElement.contains(event.target) &&

        inputElement &&

        !inputElement.contains(event.target)

      ) {

        setisDropdownOpencatapop5(false);

      }

    };



    const handleWindowMousedown = (event) => {

      handleClickOutsiderolecatapop5(event);

    };




    window.addEventListener('mousedown', handleWindowMousedown);




    return () => {

      window.removeEventListener('mousedown', handleWindowMousedown);

    };

  }, []);


  const toggledropdowncatapop5 = () => {

    setisDropdownOpencatapop5(!isDropdownOpencatapop5);

  };




  const handleOptionSelectcatapop5 = (optionscatapop5) => {

    setSelectedOptioncatapop5(optionscatapop5);

    setisDropdownOpencatapop5(false);

    setdisplayvaluecatapop5(optionscatapop5);

  };




  const handleSearchChangecatapop5 = (e) => {

    const value = e.target.value;

    setSearchValuecatapop5(value);

    setdisplayvaluecatapop5(value);

  };




  const optionscatapop5 = ['DEFAULT'];

  const filteredOptionscatapop5 = optionscataitem5.filter((optionscatapop5) =>

    optionscatapop5.toLowerCase().includes(searchValuecatapop5.toLowerCase())

  );
  // =========================================================================
  const [isDropdownOpencatapop6, setisDropdownOpencatapop6] = useState(false);

  const [searchValuecatapop6, setSearchValuecatapop6] = useState('');

  const [selectedOptioncatapop6, setSelectedOptioncatapop6] = useState('');

  const [displayvaluecatapop6, setdisplayvaluecatapop6] = useState('');

  const inputrefcatapop6 = useRef(null);

  const dropdownRefcatapop6 = useRef(null);




  useEffect(() => {

    const handleClickOutsiderolecatapop6 = (event) => {

      const dropdownElement = dropdownRefcatapop6.current;

      const inputElement = inputrefcatapop6.current;

      if (

        dropdownElement &&

        !dropdownElement.contains(event.target) &&

        inputElement &&

        !inputElement.contains(event.target)

      ) {

        setisDropdownOpencatapop6(false);

      }

    };





    const handleWindowMousedown = (event) => {

      handleClickOutsiderolecatapop6(event);

    };




    window.addEventListener('mousedown', handleWindowMousedown);




    return () => {

      window.removeEventListener('mousedown', handleWindowMousedown);

    };

  }, []);







  const toggledropdowncatapop6 = () => {

    setisDropdownOpencatapop6(!isDropdownOpencatapop6);

  };




  const handleOptionSelectcatapop6 = (optionscatapop6) => {

    setSelectedOptioncatapop6(optionscatapop6);

    setisDropdownOpencatapop6(false);

    setdisplayvaluecatapop6(optionscatapop6);

  };




  const handleSearchChangecatapop6 = (e) => {

    const value = e.target.value;

    setSearchValuecatapop6(value);

    setdisplayvaluecatapop6(value);

  };




  const optionscatapop6 = ['DEFAULT'];

  const filteredOptionscatapop6 = optionscataitem6.filter((optionscatapop6) =>

    optionscatapop6.toLowerCase().includes(searchValuecatapop6.toLowerCase())

  );

  // =======================================================================

  const [isDropdownOpencatapop2, setisDropdownOpencatapop2] = useState(false);

  const [searchValuecatapop2, setSearchValuecatapop2] = useState('');

  const [selectedOptioncatapop2, setSelectedOptioncatapop2] = useState('');

  const [displayvaluecatapop2, setdisplayvaluecatapop2] = useState('');

  const inputrefcatapop2 = useRef(null);

  const dropdownRefcatapop2 = useRef(null);




  useEffect(() => {

    const handleClickOutsiderolecatapop2 = (event) => {

      const dropdownElement = dropdownRefcatapop2.current;

      const inputElement = inputrefcatapop2.current;

      if (

        dropdownElement &&

        !dropdownElement.contains(event.target) &&

        inputElement &&

        !inputElement.contains(event.target)

      ) {

        setisDropdownOpencatapop2(false);

      }

    };





    const handleWindowMousedown = (event) => {

      handleClickOutsiderolecatapop2(event);

    };




    window.addEventListener('mousedown', handleWindowMousedown);




    return () => {

      window.removeEventListener('mousedown', handleWindowMousedown);

    };

  }, []);



  const toggledropdowncatapop2 = () => {

    setisDropdownOpencatapop2(!isDropdownOpencatapop2);

  };




  const handleOptionSelectcatapop2 = (optionscatapop2) => {

    setSelectedOptioncatapop2(optionscatapop2);

    setisDropdownOpencatapop2(false);

    setdisplayvaluecatapop2(optionscatapop2);

  };




  const handleSearchChangecatapop2 = (e) => {

    const value = e.target.value;

    setSearchValuecatapop2(value);

    setdisplayvaluecatapop2(value);

  };




  const optionscatapop2 = ['DEFAULT'];

  const filteredOptionscatapop2 = optionscataitem6.filter((optionscatapop2) =>

    optionscatapop2.toLowerCase().includes(searchValuecatapop2.toLowerCase())

  );

  return (
    <div>
      <div>
        <Navbar />
        <CatalogSidebar />
        <div className="bread">
          <ul className="breadcrumbs">
            <li className="breadcrumbs--item">
              <a href='/' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>HOME</a>
            </li>
            <li className="breadcrumbs--item">
              <a href='#' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>CATALOG</a>
            </li>
            <li className="breadcrumbs--item">
              <a href="" className="breadcrumbs--link breadcrumbs--link--active">ITEMS</a>
            </li>
          </ul>
          <hr className="hr" />
        </div>
        <HelpRequest />

        <div className="rowitem" id="rowitemm">

          <WriteFlexGroup />
          <div id="filtershosd" onClick={openPopup}>
            <FontAwesomeIcon icon={faFilter} id="filteritemicon" />
          </div>
          <div id="popupitempage" style={{ display: "none" }}>
            <FontAwesomeIcon
              icon={faTimes}
              className="close-icon"
              onClick={(closepopup)}

            />
            <label id="itemfilterlabel">ITEM FILTER </label>
            <div className="input-container">
              <input id="popupitemsearch" />
              <FontAwesomeIcon icon={faSearch} className="search-icon" />

            </div>
            <div id="filtercontent">
              <div id="generalfilter" onClick={showContentFilter}>
                <button type="button" id="generalbtn">GENERAL</button>
              </div>
              <div id="catalogfilter" onClick={hideContentFilter}>
                <button type="button" id="categorybtn">CATEGORIES</button>
              </div>
              <div id="matchallfilter">
                <button type="button" id="matchallbtn">Match All</button>
              </div>
              <div id="anyfilter">
                <button type="button" id="anybtn">Any</button>
              </div>
            </div>

            <div id="contentfilter">
              <div id="generalgrid1">
                <div id="catalogecategorydiv" >
                  <input type="text" id="catalogecategoryitem" onClick={hidecatalogecategorylist} />
                  <label id="categoryitemlabel">CATALOGE CATEGORIES</label>
                  <ul id="catalogecategorylist" style={{ display: "none" }}>
                    <li id="catli1">DBA</li>
                    <li id="catli1">DEFAULT</li>
                    <li id="catli1" >DSOM</li>
                    <li id="catli1" >EDUCATION</li>
                    <li id="catli1">IZOT</li>
                  </ul>
                  <FontAwesomeIcon icon={faCaretDown} className="caret-icon3" />
                </div>
                <div id="catalogestatusdiv">
                  <input type="text" id="catalogestatusitem" onClick={hidesurveycategorylist} />
                  <label id="surveyitemlabel">CATALOGE SURVEYS</label>
                  <ul id="surveycategorylist" style={{ display: "none" }}>
                    <li id="catli2">IN PROCESS</li>
                    <li id="catli2">INACTIVE</li>
                    <li id="catli2" >PUBLISHED</li>

                  </ul>
                  <FontAwesomeIcon icon={faCaretDown} className="caret-icon4" />
                </div>
              </div>

              <div id="generalgrid2">
                <div id="prefertedsupplierdiv">
                  {/* <input type="text" id="prefertedsupplieritem" />
                  <label id="prefertedsupplierlabel">Prefered Supplier</label> */}

                  <input

                    className="prefertedsupplieritem"

                    type="text"

                    onClick={toggledropdowncatapop2}

                    value={displayvaluecatapop2}

                    ref={inputrefcatapop2}

                    onChange={handleSearchChangecatapop2}

                  />

                  <label id="prefertedsupplierlabel">PREFERED SUPPLIER</label>

                  <i

                    className={`fa fa-caret-${isDropdownOpencatapop1 ? 'up' : 'down'}`}

                    id="togglecatapop2"

                    onClick={toggledropdowncatapop2}

                  ></i>

                  {isDropdownOpencatapop2 && (

                    <ul id="popcatalist22" ref={dropdownRefcatapop2}>

                      {filteredOptionscatapop2.length === 0 ? (

                        <li id="labelcatapop22">NO RESULTS FOUND</li>

                      ) : (

                        filteredOptionscatapop2.map((option) => (

                          <li key={option} onClick={() => handleOptionSelectcatapop2(option)}>

                            {option}

                          </li>

                        ))

                      )}

                    </ul>

                  )}
                </div>
                <div id="manufactureitemdiv">
                  <input type="text" id="manufactureitem" />
                  <label id="manufacturelabel">MANUFACTURER</label>
                </div>
              </div>
              <div id="generalgrid3">
                <div id="locationdiv">
                  <input type="text" id="locationitem" />
                  <label id="locationitemlabel">LOCATION</label>
                </div>
                <div id="sublocationdiv">
                  <input type="text" id="sublocationitem" />
                  <label id="sublocationlabel">SUB-LOCATION</label>
                </div>
              </div>
            </div>
            {/* --------------------------------------------------------------- */}
            <div id="contentfiltercategory" style={{ display: "none" }}>
              <div id="catagoriesgrid1">
                <div id="catagoriesdiv1" >

                  <input

                    className="catagoriespop1"

                    type="text"

                    onClick={toggledropdowncatapop1}

                    value={displayvaluecatapop1}

                    ref={inputrefcatapop1}

                    onChange={handleSearchChangecatapop1}

                  />

                  <label id="catagoriesitemlabel1">CATEGORY 1</label>

                  <i

                    className={`fa fa-caret-${isDropdownOpencatapop1 ? 'up' : 'down'}`}

                    id="togglecatapop1"

                    onClick={toggledropdowncatapop1}

                  ></i>

                  {isDropdownOpencatapop1 && (

                    <ul id="popcatalist11" ref={dropdownRefcatapop1}>

                      {filteredOptionscatapop1.length === 0 ? (

                        <li id="labelcatapop11">NO RESULTS FOUND</li>

                      ) : (

                        filteredOptionscatapop1.map((option) => (

                          <li key={option} onClick={() => handleOptionSelectcatapop1(option)}>

                            {option}

                          </li>

                        ))

                      )}

                    </ul>

                  )}
                </div>
                <div id="catagoriesdiv2">
                  <input type="text" id="catagoriesitem2" />
                  <label id="catagoriesitemlabel2">CATEGORY 2</label>
                </div>
              </div>

              <div id="catagoriesgrid2">
                <div id="catagoriesdiv3">
                  {/* <input type="text" id="catagoriesitem3" />
                  <label id="catagoriesitemlabel3">Category3</label> */}
                  <input

                    className="catagoriespop3"

                    type="text"

                    onClick={toggledropdowncatapop3}

                    value={displayvaluecatapop3}

                    ref={inputrefcatapop3}

                    onChange={handleSearchChangecatapop3}

                  />

                  <label id="catagoriesitemlabel3">CATEGORY 3</label>

                  <i

                    className={`fa fa-caret-${isDropdownOpencatapop3 ? 'up' : 'down'}`}

                    id="togglecatapop3"

                    onClick={toggledropdowncatapop3}

                  ></i>

                  {isDropdownOpencatapop3 && (

                    <ul id="popcatalist33" ref={dropdownRefcatapop3}>

                      {filteredOptionscatapop3.length === 0 ? (

                        <li id="labelcatapop33">NO RESULTS FOUND</li>

                      ) : (

                        filteredOptionscatapop3.map((option) => (

                          <li key={option} onClick={() => handleOptionSelectcatapop3(option)}>

                            {option}

                          </li>

                        ))

                      )}

                    </ul>

                  )}
                </div>
                <div id="catagoriesdiv4">
                  {/* <input type="text" id="catagoriesitem4" />
                  <label id="catagoriesitemlabel4">Category4</label> */}

                  <input

                    className="catagoriesitem4"

                    type="text"

                    onClick={toggledropdowncatapop4}

                    value={displayvaluecatapop4}

                    ref={inputrefcatapop4}

                    onChange={handleSearchChangecatapop4}

                  />

                  <label id="catagoriesitemlabel4">CATEGORY 4</label>

                  <i

                    className={`fa fa-caret-${isDropdownOpencatapop4 ? 'up' : 'down'}`}

                    id="togglecatapop4"

                    onClick={toggledropdowncatapop4}

                  ></i>

                  {isDropdownOpencatapop4 && (

                    <ul id="popcatalist44" ref={dropdownRefcatapop4}>

                      {filteredOptionscatapop4.length === 0 ? (

                        <li id="labelcatapop44">NO RESULTS FOUND</li>

                      ) : (

                        filteredOptionscatapop4.map((option) => (

                          <li key={option} onClick={() => handleOptionSelectcatapop4(option)}>

                            {option}

                          </li>

                        ))

                      )}

                    </ul>

                  )}
                </div>
              </div>
              <div id="catagoriesgrid3">
                <div id="catagoriesdiv5">
                  {/* <input type="text" id="catagoriesitem5" />
                  <label id="catagoriesitemlabel5">Category5</label> */}
                  <input

                    className="catagoriesitem5"

                    type="text"

                    onClick={toggledropdowncatapop5}

                    value={displayvaluecatapop5}

                    ref={inputrefcatapop5}

                    onChange={handleSearchChangecatapop5}

                  />

                  <label id="catagoriesitemlabel5">CATEGORY 5</label>

                  <i

                    className={`fa fa-caret-${isDropdownOpencatapop5 ? 'up' : 'down'}`}

                    id="togglecatapop5"

                    onClick={toggledropdowncatapop5}

                  ></i>

                  {isDropdownOpencatapop5 && (

                    <ul id="popcatalist55" ref={dropdownRefcatapop5}>

                      {filteredOptionscatapop5.length === 0 ? (

                        <li id="labelcatapop55">NO RESULTS FOUND</li>

                      ) : (

                        filteredOptionscatapop5.map((option) => (

                          <li key={option} onClick={() => handleOptionSelectcatapop5(option)}>

                            {option}

                          </li>

                        ))

                      )}

                    </ul>

                  )}


                </div>
                <div id="catagoriesdiv6">
                  {/* <input type="text" id="catagoriesitem6" />
                  <label id="catagoriesitemlabel6">Category6</label> */}

                  <input

                    className="catagoriesitem6"

                    type="text"

                    onClick={toggledropdowncatapop6}

                    value={displayvaluecatapop6}

                    ref={inputrefcatapop6}

                    onChange={handleSearchChangecatapop6}

                  />

                  <label id="catagoriesitemlabel6">CATEGORY 6</label>

                  <i

                    className={`fa fa-caret-${isDropdownOpencatapop6 ? 'up' : 'down'}`}

                    id="togglecatapop6"

                    onClick={toggledropdowncatapop6}

                  ></i>

                  {isDropdownOpencatapop6 && (

                    <ul id="popcatalist66" ref={dropdownRefcatapop6}>

                      {filteredOptionscatapop6.length === 0 ? (

                        <li id="labelcatapop66">NO RESULTS FOUND</li>

                      ) : (

                        filteredOptionscatapop6.map((option) => (

                          <li key={option} onClick={() => handleOptionSelectcatapop6(option)}>

                            {option}

                          </li>

                        ))

                      )}

                    </ul>
                  )}

                </div>
              </div>
            </div>
            <div id="downfltrbtn">
              <button type="button" id="canclbtn">CANCEL</button>
              <button type="button" id="clrbtn">CLEAR FILTERS</button>
              <button type="button" id="fltrbtn">FILTER</button>
            </div>


          </div>

          {/* -------------------------- */}

          <div className="plusiconitem">

            <i className="fa fa-plus" id="plusiconitems" onClick={hideshowplusiconitem} />

          </div>


          <div className="rightitem">

            <div id="headeritem"><a>CATALOG ITEM</a></div>

            <div id="itemmsgdiv">

              <label id="itemmsg">

                NO ITEM FOUND. PLEASE USE + TO ADD A NEW ITEM

              </label>

            </div>
            <div id="itemshow" style={{ display: 'none' }}>
              <div class="itemgrid">
                <div id="itemname">
                  {/* <input id="iteminput" type="text" /> */}
                  <form onSubmit={handleSubmit}>
                    <input
                      id="iteminput"
                      type="text"
                      value={inputValue}
                      onChange={handleChange}

                    />
                    <label id="itemlabel">ITEM</label>
                    {errorMessage && <label id="itemsg">{errorMessage}</label>}
                  </form>



                </div>
                <div id="itemcate">
                  <input id="iteminput1" type="text" onClick={handleItemcatlistClick} />
                  <label id="itemcatlistlabel">CATALOG CATEGORY</label>
                  <ul id="Itemcatlistitem" style={{ display: 'none' }}>
                    <li id="itemopt1">DBA</li>
                    <li id="itemopt1">DSCM</li>
                    <li id="itemopt1">DEFAULT</li>
                    <li id="itemopt1">EDUCATION</li>
                    <li id="itemopt1">QOT</li>
                  </ul>
                  <FontAwesomeIcon icon={faCaretDown} className="caret-icon2" />
                </div>
                <div id="itemlist">
                  <input id="iteminput2" type="text" onClick={handleItemlistClick} />
                  <label id="itemtlistlabel">CATLOFG STATUS</label>
                  <ul id="Itemlistitem" style={{ display: 'none' }}>
                    <li id="itemopt">INACTIVE</li>
                    <li id="itemopt">IN PROCESS</li>
                    <li id="itemopt">PUBLISHED</li>
                  </ul>
                  <FontAwesomeIcon icon={faCaretDown} className="caret-icon1" />
                </div>
              </div>

              <div class="itemgrid1">
                <div id="itemdesc">
                  <input id="iteminput3" type="text" />
                  <label>DESCRIPTION</label>


                </div>
                <div id="itemcheck">
                  <input type="checkbox" id="checKbox1"></input>
                  <label id="checklabell">PROHBIT DISCOUNT</label>
                </div>
              </div>

              <div
                className={`generalinfo ${isGeneralInfoVisible ? 'active' : ''}`}
                onClick={toggleGeneralInfo}
              >
                GENERAL INFO
              </div>

              <div className="infodiv">
                <FontAwesomeIcon
                  icon={isToggleActivedesc ? faAngleUp : faAngleDown}
                  className="generaltoggle"
                  id="togglegeneral"
                />

                {isToggleActivedesc && (
                  <div id="textgeneral" onClick={(e) => e.stopPropagation()}>
                    {/* Content under General Info */}
                  </div>
                )}
              </div>
              {isGeneralInfoVisible && (
                <div className="general info">
                  <div className="itemgrid2">
                    <div id="generalname">
                      {/* <input id="generalinput" type="text" />

                      <label id="generalabel">PREFERRED SUPPLIER</label> */}
                      <div className="general-prefered" onClick={toggleDropdown}>
                        <span id="searchtypeitem">{selectedOption}</span>
                     
                        <FontAwesomeIcon icon={faCaretDown} className="caret-icon5" />
                        
                      </div>
                      <label id="itempreftype">PREFERED SUPPLIER</label>
                      <div className="List-options" id="liistOptions" style={{ display: isOpen ? 'block' : 'none' }}>
                        <input type="text" onKeyUp={filterOptions} />
                        <ul>
                          {filteredOptions.map((option, index) => (
                            <li key={index} onClick={() => selectOption(option)}>{option}</li>
                          ))}
                           
                        </ul>
                       
                      </div>


                    </div>
                    <div id="generalname1">
                      <input id="generalinput1" type="text" />
                      <label>SUPPLIER ITEM NUMBER</label>
                    </div>
                    <div id="generalname2">
                      <input id="generalinput2" type="text" />

                      <label id="generallabel2">CATALOG NUMBER</label>
                    </div>

                    <div id="generalname3">
                      <input id="generalinput3" type="text" />

                      <label id="generallabel3">EXTERNAL REFERENCE</label>


                    </div>
                  </div>
                  <div class="itemgrid3">
                    <div id="generalname4">
                      <input id="generalinput4" type="text" />

                      <label id="generalabel4">MANUFACTURER</label>


                    </div>
                    <div id="generalname5">
                      <input id="generalinput5" type="text" />

                      <label id="generalabel5">MANUFACTURER ITEM NUMBER </label>


                    </div>
                    <div id="generalname6">
                      <input id="generalinput6" type="text" />

                      <label id="generalabel6">LOCATION</label>


                    </div>
                    <div id="generalname7">
                      <input id="generalinput7" type="text" />

                      <label id="generalabel7">SUB-LOCATION</label>


                    </div>
                  </div>
                </div>
              )}

              {/* ============================================================================================ */}
              <div className={`headeritem ${isDropdownOpen ? 'active' : ''}`} onClick={handleToggle}>
                CATEGORIES
                <FontAwesomeIcon
                  icon={isDropdownOpen ? faAngleUp : faAngleDown}
                  className="itemcategaries"
                  id="toggleitems"
                />
              </div>
              {isDropdownOpen && (

                <div className="categariesitem" onClick={(e) => e.stopPropagation()}>
                  <div className="categariesitemgrid">
                    <div id="itemcat">

                      <input

                        className="cataitem1"

                        type="text"

                        onClick={toggledropdowncataitem1}

                        value={displayvaluecataitem1}

                        ref={inputrefcataitem1}

                        onChange={handleSearchChangecataitem1}

                      />

                      <label id="labelcata1">CATEGORY 1</label>

                      <i

                        className={`fa fa-caret-${isDropdownOpencataitem1 ? 'up' : 'down'}`}

                        id="togglecataitem1"

                        onClick={toggledropdowncataitem1}

                      ></i>

                      {isDropdownOpencataitem1 && (

                        <ul id="itemcatalist11" ref={dropdownRefcataitem1}>

                          {filteredOptionscataitem1.length === 0 ? (

                            <li id="labelcata11">NO RESULTS FOUND</li>

                          ) : (

                            filteredOptionscataitem1.map((option) => (

                              <li key={option} onClick={() => handleOptionSelectcataitem1(option)}>

                                {option}

                              </li>

                            ))

                          )}

                        </ul>

                      )}


                    </div>


                    <div id="itemcat1">
                      <input type='text'>

                      </input>
                      <label>CATEGORY 2</label>
                    </div>
                    <div id="itemcat2">

                      <input

                        className="cataitem3"

                        type="text"

                        onClick={toggledropdowncataitem3}

                        value={displayvaluecataitem3}

                        ref={inputrefcataitem3}

                        onChange={handleSearchChangecataitem3}

                      />

                      <label id="labelcata3">CATEGORY 3</label>

                      <i

                        className={`fa fa-caret-${isDropdownOpencataitem3 ? 'up' : 'down'}`}

                        id="togglecataitem3"

                        onClick={toggledropdowncataitem3}

                      ></i>

                      {isDropdownOpencataitem3 && (

                        <ul id="itemcatalist33" ref={dropdownRefcataitem3}>

                          {filteredOptionscataitem3.length === 0 ? (

                            <li id="labelcata33">NO RESULTS FOUND</li>

                          ) : (

                            filteredOptionscataitem3.map((option) => (

                              <li key={option} onClick={() => handleOptionSelectcataitem3(option)}>

                                {option}

                              </li>

                            ))

                          )}

                        </ul>

                      )}
                    </div>
                  </div>

                  <div className='categariesitemgrid1'>
                    <div id="itemcat3">

                      <input

                        className="cataitem4"

                        type="text"

                        onClick={toggledropdowncataitem4}

                        value={displayvaluecataitem4}

                        ref={inputrefcataitem4}

                        onChange={handleSearchChangecataitem4}

                      />

                      <label id="labelcata4">CATEGORY 4</label>

                      <i

                        className={`fa fa-caret-${isDropdownOpencataitem4 ? 'up' : 'down'}`}

                        id="togglecataitem4"

                        onClick={toggledropdowncataitem4}

                      ></i>

                      {isDropdownOpencataitem4 && (

                        <ul id="itemcatalist44" ref={dropdownRefcataitem4}>

                          {filteredOptionscataitem4.length === 0 ? (

                            <li id="labelcata44">NO RESULTS FOUND</li>

                          ) : (

                            filteredOptionscataitem4.map((option) => (

                              <li key={option} onClick={() => handleOptionSelectcataitem4(option)}>

                                {option}

                              </li>

                            ))

                          )}

                        </ul>

                      )}


                    </div>

                    <div id="itemcat4">

                      <input

                        className="cataitem5"

                        type="text"

                        onClick={toggledropdowncataitem5}

                        value={displayvaluecataitem5}

                        ref={inputrefcataitem5}

                        onChange={handleSearchChangecataitem5}

                      />

                      <label id="labelcata5">CATEGORY 5</label>

                      <i

                        className={`fa fa-caret-${isDropdownOpencataitem5 ? 'up' : 'down'}`}

                        id="togglecataitem5"

                        onClick={toggledropdowncataitem5}

                      ></i>

                      {isDropdownOpencataitem5 && (

                        <ul id="itemcatalist55" ref={dropdownRefcataitem5}>

                          {filteredOptionscataitem5.length === 0 ? (

                            <li id="labelcata55">NO RESULTS FOUND</li>

                          ) : (

                            filteredOptionscataitem5.map((option) => (

                              <li key={option} onClick={() => handleOptionSelectcataitem5(option)}>

                                {option}

                              </li>

                            ))

                          )}

                        </ul>

                      )}


                    </div>

                    <div id="itemcat5">
                      <input

                        className="cataitem6"

                        type="text"

                        onClick={toggledropdowncataitem6}

                        value={displayvaluecataitem6}

                        ref={inputrefcataitem6}

                        onChange={handleSearchChangecataitem6}

                      />

                      <label id="labelcata6">CATEGORY 6</label>

                      <i

                        className={`fa fa-caret-${isDropdownOpencataitem6 ? 'up' : 'down'}`}

                        id="togglecataitem6"

                        onClick={toggledropdowncataitem6}

                      ></i>

                      {isDropdownOpencataitem6 && (

                        <ul id="itemcatalist66" ref={dropdownRefcataitem6}>

                          {filteredOptionscataitem6.length === 0 ? (

                            <li id="labelcata66">NO RESULTS FOUND</li>

                          ) : (

                            filteredOptionscataitem6.map((option) => (

                              <li key={option} onClick={() => handleOptionSelectcataitem6(option)}>

                                {option}

                              </li>

                            ))

                          )}

                        </ul>

                      )}

                    </div>
                  </div>
                </div>
              )}
              {/* ********************************************************************* */}

              <div id="add">
                <Addinfo />

              </div>
              <div className="itembutton">
                <button id="deleteitem">CANCEL</button>
                <button id="saveitem">SAVE NEW ITEM</button>
              </div>
            </div>
          </div>




          {/* sidepanel */}
          <div className="slide">
            <div id="mySidebar" className="sidebar1">
              {/* <a href="javascript:void(0)" >x</a> */}

              <div className="navside">
                <button className="dropdown-btn" id="sidetoggle" onClick={handleClickFiles}>FILES<i className="fa fa-angle-down" style={{ color: 'black', fontSize: '12px', float: 'right' }} />
                </button>
                <div class="dropdown-container" id='filesOpen'>
                  <ul id="file-list"></ul>
                  <div class="file-upload">
                    <input id="file-input" type="file" onChange={displayFileName} multiple hidden />
                    <label for="file-input" id="filePlus"><i class="fa fa-plus"></i></label>
                  </div>
                </div>
              </div>
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
              <button id="mainsidebar" className="openbtnact" onClick={handleOpenClose}>
                <i className="fa-light fa-less-than" style={{ fontSize: '14px' }} /></button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

// =============================================================

export function hideshowplusiconitem() {

  var heditem = document.getElementById("headeritem");

  heditem.innerHTML = `ADD ITEM`;

  const itemg = document.getElementById("itemmsgdiv");

  itemg.style.display = "none";
  var sidepnl1 = document.getElementById('mainsidebar');
  sidepnl1.style.display = "none";







  var doc = document.getElementById("itemshow");

  if (doc.style.display === "none") {




    doc.style.display = "block";

  } else {

    doc.style.display = "none";

  }

}

export const handleItemlistClick = () => {
  const ItemListitem = document.querySelector("#Itemlistitem");
  const itemInput2 = document.querySelector("#iteminput2");
  const itemlisttDiv = document.getElementById('itemlist');
  ItemListitem.style.display = ItemListitem.style.display === "none" ? "block" : "none";
  itemlisttDiv.style.height = '59px';
  itemlisttDiv.style.zIndex = '1';

  //  ITEM SELECTING
  const handleItemlistitemClick = (event) => {
    const selectedOptionsList = event.target.textContent;
    itemInput2.value = selectedOptionsList;
    ItemListitem.style.display = "none";
  };
  // search filter
  const handleItemlistitemInput = () => {
    const filter = itemInput2.value.toUpperCase();
    const ItemListitems = ItemListitem.querySelectorAll("li");


    ItemListitems.forEach(function (item) {
      const text = item.textContent.toUpperCase();
      if (text.indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }
  const handleItemlistitemInputKeydown = (event) => {
    if (event.keyCode === 13) {
      const visibleItem = ItemListitem.querySelector("li:not([style*='display: none'])");
      if (visibleItem) {
        itemInput2.value = visibleItem.textContent;
        ItemListitem.style.display = "none";
      }
    }
  }
  // WINDOWS CLICK
  const handleItemlistClick = (event) => {
    if (!itemInput2.contains(event.target)) {
      ItemListitem.style.display = "none";
    }
  };
  // ITEM SELECTING
  const ItemListitems = ItemListitem.querySelectorAll("li");
  ItemListitems.forEach(function (item) {
    item.addEventListener("click", handleItemlistitemClick);
  });

  itemInput2.addEventListener("input", handleItemlistitemInput);
  itemInput2.addEventListener("keydown", handleItemlistitemInputKeydown);
  window.addEventListener("click", handleItemlistClick);

};
// ====================================================================================



export const handleItemcatlistClick = () => {
  const ItemcatListitem = document.querySelector("#Itemcatlistitem");
  const itemInput1 = document.querySelector("#iteminput1");
  const itemcateDiv = document.getElementById('itemcate');
  ItemcatListitem.style.display = ItemcatListitem.style.display === "none" ? "block" : "none";
  itemcateDiv.style.height = '59px';
  itemcateDiv.style.zIndex = '1';

  //  ITEM SELECTING
  const handleItemcatlistitemClick = (event) => {
    const selectedOptionsList = event.target.textContent;
    itemInput1.value = selectedOptionsList;
    ItemcatListitem.style.display = "none";
  };
  // search filter
  const handleItemcatlistitemInput = () => {
    const filter = itemInput1.value.toUpperCase();
    const ItemcatListitems = ItemcatListitem.querySelectorAll("li");


    ItemcatListitems.forEach(function (item) {
      const text = item.textContent.toUpperCase();
      if (text.indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }
  const handleItemcatlistitemInputKeydown = (event) => {
    if (event.keyCode === 13) {
      const visibleItem = ItemcatListitem.querySelector("li:not([style*='display: none'])");
      if (visibleItem) {
        itemInput1.value = visibleItem.textContent;
        ItemcatListitem.style.display = "none";
      }
    }
  }
  // WINDOWS CLICK
  const handleItemcatlistClick = (event) => {
    if (!itemInput1.contains(event.target)) {
      ItemcatListitem.style.display = "none";
    }
  };
  // ITEM SELECTING
  const ItemcatListitems = ItemcatListitem.querySelectorAll("li");
  ItemcatListitems.forEach(function (item) {
    item.addEventListener("click", handleItemcatlistitemClick);
  });

  itemInput1.addEventListener("input", handleItemcatlistitemInput);
  itemInput1.addEventListener("keydown", handleItemcatlistitemInputKeydown);
  window.addEventListener("click", handleItemcatlistClick);

};



export function openPopup() {
  var popupItemPage = document.getElementById("popupitempage")
  popupItemPage.style.display = "block";
}

function showContentFilter() {
  var contentFilter = document.getElementById("contentfilter");
  var contentFilterCategory = document.getElementById("contentfiltercategory");
  var generalBtn = document.getElementById("generalbtn");
  var categorybtn = document.getElementById("categorybtn");

  contentFilter.style.display = "block";
  contentFilterCategory.style.display = "none";
  generalBtn.style.background = "#ccc";
  categorybtn.style.background = "white";

}

function hideContentFilter() {
  var contentFilter = document.getElementById("contentfilter");
  var contentFilterCategory = document.getElementById("contentfiltercategory");
  var categorybtn = document.getElementById("categorybtn");
  var generalBtn = document.getElementById("generalbtn");

  contentFilter.style.display = "none";
  contentFilterCategory.style.display = "block";
  categorybtn.style.background = "#ccc";
  generalBtn.style.background = "white";

}
// function hidecatalogecategorylist() {
//   var catalogecategorylist = document.getElementById("catalogecategorylist");
//   catalogecategorylist.style.display = catalogecategorylist.style.display === "none" ? "block" : "none";

// }

export const hidecatalogecategorylist = () => {
  const catalogecategorylist = document.querySelector("#catalogecategorylist");
  const catalogecategoryItem = document.querySelector("#catalogecategoryitem");
  const catalogecategoryDiv = document.getElementById('catalogecategorydiv');
  catalogecategorylist.style.display = catalogecategorylist.style.display === "none" ? "block" : "none";
  catalogecategoryDiv.style.height = '59px';
  catalogecategoryDiv.style.zIndex = '1';

  //  ITEM SELECTING
  const hidecatalogecategoryitem = (event) => {
    const selectedOptionsList = event.target.textContent;
    catalogecategoryItem.value = selectedOptionsList;
    catalogecategorylist.style.display = "none";
  };
  // search filter
  const hidecatalogecategoryitemInput = () => {
    const filter = catalogecategoryItem.value.toUpperCase();
    const catalogecategorylists = catalogecategorylist.querySelectorAll("li");


    catalogecategorylists.forEach(function (item) {
      const text = item.textContent.toUpperCase();
      if (text.indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }
  const hidecatalogecategoryitemInputtKeydown = (event) => {
    if (event.keyCode === 13) {
      const visibleItem = catalogecategorylist.querySelector("li:not([style*='display: none'])");
      if (visibleItem) {
        catalogecategoryItem.value = visibleItem.textContent;
        catalogecategorylist.style.display = "none";
      }
    }
  }
  // WINDOWS CLICK
  const hidecatalogecategorylistClick = (event) => {
    if (!catalogecategoryItem.contains(event.target)) {
      catalogecategorylist.style.display = "none";
    }
  };
  // ITEM SELECTING
  const catalogecategorylists = catalogecategorylist.querySelectorAll("li");
  catalogecategorylists.forEach(function (item) {
    item.addEventListener("click", hidecatalogecategoryitem);
  });

  catalogecategoryItem.addEventListener("input", hidecatalogecategoryitemInput);
  catalogecategoryItem.addEventListener("keydown", hidecatalogecategoryitemInputtKeydown);
  window.addEventListener("click", hidecatalogecategorylistClick);

};
export const hidesurveycategorylist = () => {
  const surveycategoryList = document.querySelector("#surveycategorylist");
  const catalogestatusItem = document.querySelector("#catalogestatusitem");
  const catalogestatusDiv = document.getElementById('catalogestatusdiv');
  surveycategoryList.style.display = surveycategoryList.style.display === "none" ? "block" : "none";
  catalogestatusDiv.style.height = '59px';
  catalogestatusDiv.style.zIndex = '1';

  //  ITEM SELECTING
  const hidesurveycategoryitem = (event) => {
    const selectedOptionsList = event.target.textContent;
    catalogestatusItem.value = selectedOptionsList;
    surveycategoryList.style.display = "none";
  };
  // search filter
  const hidesurveycategoryitemInput = () => {
    const filter = catalogestatusItem.value.toUpperCase();
    const surveycategoryLists = surveycategoryList.querySelectorAll("li");


    surveycategoryLists.forEach(function (item) {
      const text = item.textContent.toUpperCase();
      if (text.indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }
  const hidesurveycategoryitemInputtKeydown = (event) => {
    if (event.keyCode === 13) {
      const visibleItem = surveycategoryList.querySelector("li:not([style*='display: none'])");
      if (visibleItem) {
        catalogestatusItem.value = visibleItem.textContent;
        surveycategoryList.style.display = "none";
      }
    }
  }
  // WINDOWS CLICK
  const hidesurveycategorylistClick = (event) => {
    if (!catalogestatusItem.contains(event.target)) {
      surveycategoryList.style.display = "none";
    }
  };
  // ITEM SELECTING
  const surveycategoryLists = surveycategoryList.querySelectorAll("li");
  surveycategoryLists.forEach(function (item) {
    item.addEventListener("click", hidesurveycategoryitem);
  });

  catalogestatusItem.addEventListener("input", hidesurveycategoryitemInput);
  catalogestatusItem.addEventListener("keydown", hidesurveycategoryitemInputtKeydown);
  window.addEventListener("click", hidesurveycategorylistClick);
};


export function closepopup() {
  var closePopup = document.getElementById("popupitempage")
  closePopup.style.display = "none";


}
window.addEventListener("mousedown", function(event) {
  var popup = document.getElementById("popupitempage");
  var filterButton = document.getElementById("filtershosd");

  // Check if the click occurred outside the popup and the filter button
  if (popup && filterButton && !popup.contains(event.target) && !filterButton.contains(event.target)) {
    closepopup();
  }
  
});



export default Items;