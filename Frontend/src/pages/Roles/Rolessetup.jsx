import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar'
import CatalogSidebar from '../../components/CatalogSidebar'
import HelpRequest from '../../components/HelpRequest'
import WriteFlexGroup from '../../components/WriteflexGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import '../Roles/Rolessetup.css';
import { handleClickTimestamp, handleOpenClose, handleClickFiles, displayFileName } from '../Accounts/AccountSidebar'
import Addinfo from '../../components/Addinfo'
// description declaration
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { useAuthContext } from '../../hooks/useAuthContext';


const Rolessetup = () => {

  const { user } = useAuthContext();
  console.log(user);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  // 
  // froala integaration

const handleModelChange = (model) => {
console.log(model);
};
const editorConfig = {
toolbarButtons: [
['fontFamily','fontSize','textColor','backgroundColor','|','bold', 'italic',
'underline','|','formatOL', 'formatUL','paragraphFormat', 'paragraphStyle','|','align','indent', 'outdent','|','insertLink',
'insertImage','insertTable','|','specialCharacters', 'print','undo', 'redo',]
]
};

  // error message for 
  const [roleName, setRoleName] = useState('');
  const [roleNameError, setRoleNameError] = useState(false);

  const handleRoleNameChange = (event) => {
    const value = event.target.value;
    setRoleName(value);
    setRoleNameError(value.trim() === '');

    const rolesetupinputb1 = document.querySelector('.rolesetupinputb1');
    rolesetupinputb1.style.outlineColor = value.trim() === '' ? 'red' : '#0f6b93';

  };

  // catalog categary dropdown 
  const [isDropdownOpencaca, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownElement = dropdownRef.current;
      const inputElement = inputRef.current;
      if (
        dropdownElement &&
        !dropdownElement.contains(event.target) &&
        inputElement &&
        !inputElement.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpencaca);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    setDisplayValue(option);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setDisplayValue(value);
  };

  const options = ['DBA', 'DSOM', 'EDUCATION', 'IZOT'];
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchValue.toLowerCase())
  );
  // catalog sttus 
  const optionscast = ['INACTIVE', 'IN PROGRESS', 'PUBLISHED'];
  const dropdownRefcast = useRef(null);
  const [isDropdownOpencast, setIsDropdownOpencast] = useState(false);
  const [selectedOptioncast, setSelectedOptioncast] = useState('');
  const [searchValuecast, setSearchValuecast] = useState('');
  const [filteredOptionscast, setFilteredOptions] = useState(optionscast);

  const toggleDropdowncast = () => {
    setIsDropdownOpencast(!isDropdownOpencast);
  };

  const handleInputClick = () => {
    if (isDropdownOpencast) {
      setIsDropdownOpencast(false);
    } else {
      setIsDropdownOpencast(true);
    }
  };

  const handleOptionSelectcast = (option) => {
    setSelectedOptioncast(option);
    setIsDropdownOpencast(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRefcast.current && !dropdownRefcast.current.contains(event.target)) {
      setIsDropdownOpencast(false);
    }
  };

  const handleSearchChangecast = (event) => {
    const value = event.target.value;
    setSearchValuecast(value);

    // Filter options based on the search value
    const filtered = optionscast.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  // role type
  const [isDropdownOpenroletype, setDropdownOpenroletype] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRefroletype = useRef(null);

  const toggleDropdownroletype = () => {
    setDropdownOpenroletype(!isDropdownOpenroletype);
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setDropdownOpenroletype(false);

  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSelectedRole(value); // Open the dropdown when searching
  };

  const handleInputClickroletype = () => {
    if (isDropdownOpenroletype) {
      setDropdownOpenroletype(false);
    } else {
      setDropdownOpenroletype(true);
    }

  };

  const handleClickOutsideroletype = (e) => {
    if (
      dropdownRefroletype.current &&
      !dropdownRefroletype.current.contains(e.target) &&
      e.target.id !== 'sttoggleroletype'
    ) {
      setDropdownOpenroletype(false);
    }
  };

  const filteredRoles = ['APPROVELS', 'SALES', 'BID TEAM MEMBER', 'MANAGEMENT', 'DELIVARY', 'DELIVARY OWNER', 'PRACTICE'].filter((role) =>
    role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideroletype);
    return () => {
      document.removeEventListener('click', handleClickOutsideroletype);
    };
  }, []);
  // role group
  const [isDropdownOpengroup, setIsDropdownOpengroup] = useState(false);
  const [selectedOptionrolegroup, setSelectedOptionrolegroup] = useState('');
  const [searchValuerolegroup, setSearchValuerolegroup] = useState('');
  const [displayValuerolegroup, setDisplayValuerolegroup] = useState('');
  const inputRefrolegroup = useRef(null);
  const dropdownRefgroup = useRef(null);

  useEffect(() => {
    const handleClickOutsiderolegroup = (event) => {
      const dropdownElement = dropdownRefgroup.current;
      const inputElement = inputRefrolegroup.current;
      if (
        dropdownElement &&
        !dropdownElement.contains(event.target) &&
        inputElement &&
        !inputElement.contains(event.target)
      ) {
        setIsDropdownOpengroup(false);
      }
    };

    document.addEventListener('click', handleClickOutsiderolegroup);
    return () => {
      document.removeEventListener('click', handleClickOutsiderolegroup);
    };
  }, []);

  const toggleDropdownrolegroup = () => {
    setIsDropdownOpengroup(!isDropdownOpengroup);
  };

  const handleOptionSelectrolegroup = (optionrolegroup) => {
    setSelectedOptionrolegroup(optionrolegroup);
    setIsDropdownOpengroup(false);
    setDisplayValuerolegroup(optionrolegroup);
  };

  const handleSearchChangerolegroup = (e) => {
    const value = e.target.value;
    setSearchValuerolegroup(value);
    setDisplayValuerolegroup(value);
  };

  const optionsrolegroup = ['NO RESULTS FOUND'];
  const filteredOptionsrolegroup = optionsrolegroup.filter((optionrolegroup) =>
    optionrolegroup.toLowerCase().includes(searchValuerolegroup.toLowerCase())
  );
  // practice drodown
  const [isDropdownOpenpractice, setIsDropdownOpenpractice] = useState(false);
  const [searchTermpractice, setSearchTermpractice] = useState('');
  const [filteredOptionspractice, setFilteredOptionspractice] = useState([]);
  const dropdownRefpractice = useRef(null);
  const [selectedOptionpractice, setSelectedOptionpractice] = useState('');

  const toggleDropdownpractice = () => {
    setIsDropdownOpenpractice(!isDropdownOpenpractice);
  };

  const handleSearchChangepractice = (event) => {
    setSearchTermpractice(event.target.value);
  };

  useEffect(() => {
    const handleOutsideClickpractice = (event) => {
      if (dropdownRefpractice.current && !dropdownRefpractice.current.contains(event.target)) {
        setIsDropdownOpenpractice(false);
      }
    };

    window.addEventListener('click', handleOutsideClickpractice);

    return () => {
      window.removeEventListener('click', handleOutsideClickpractice);
    };
  }, []);

  useEffect(() => {
    // Filter options based on the search term
    const filtered = practiceoptions.filter((optionpractice) =>
      optionpractice.toLowerCase().includes(searchTermpractice.toLowerCase())
    );
    setFilteredOptionspractice(filtered); // Update the state with the filtered options
  }, [searchTermpractice]);

  const handleSelectoptionpractice = (optionpractice) => {
    setSearchTermpractice(optionpractice);
    setSelectedOptionpractice(optionpractice);
    setIsDropdownOpenpractice(false);
  };

  const practiceoptions = ['DBA', 'DSOM', 'EDUCATION', 'IZOT'];


  // parent role 
  const [isDropdownOpenparent, setIsDropdownOpenparent] = useState(false);
  const [searchTermparent, setSearchTermparent] = useState('');
  const [filteredOptionsparent, setFilteredOptionsparent] = useState([]);
  const dropdownRefparent = useRef(null);
  const [selectedOptionparent, setSelectedOptionparent] = useState('');

  const toggleDropdownparentrole = () => {
    setIsDropdownOpenparent(!isDropdownOpenparent);
  };

  const handleSearchChangeparent = (event) => {
    setSearchTermparent(event.target.value);
  };

  useEffect(() => {
    const handleOutsideClickparent = (event) => {
      if (dropdownRefparent.current && !dropdownRefparent.current.contains(event.target)) {
        setIsDropdownOpenparent(false);
      }
    };

    window.addEventListener('click', handleOutsideClickparent);

    return () => {
      window.removeEventListener('click', handleOutsideClickparent);
    };
  }, []);

  useEffect(() => {
    // Filter options based on the search term
    const filtered = parentoptions.filter((optionparent) =>
      optionparent.toLowerCase().includes(searchTermparent.toLowerCase())
    );
    setFilteredOptionsparent(filtered);
  }, [searchTermparent]);

  const handleSelectoptionparent = (optionparent) => {
    setSearchTermparent(optionparent);
    setSelectedOptionparent(optionparent);
    setIsDropdownOpenparent(false);
  };

  const parentoptions = ['ITEM 1', 'ITEM 2', 'ITEM 3', 'ITEM 4', 'ITEM 5'];

  // side panel
  const [isDropdownOpenskil, setIsDropdownOpenskil] = useState(false);

  const toggleDropdownskil = () => {
    setIsDropdownOpenskil(!isDropdownOpenskil);
  };

  // description js 
  // description
  const [isToggleActivedesc, setIsToggleActivedesc] = useState(false);

  const handleToggledescription = () => {
    setIsToggleActivedesc(!isToggleActivedesc);
  }
  // description js 

  // categaries code 1
  const optionsrolecata1 = ['DEFAULT'];
  const dropdownRefcata1 = useRef(null);
  const inputRefcata1 = useRef(null);
  const [isDropdownOpencata1, setisDropdownOpencata1] = useState(false);
  const [searchValuerolecata1, setSearchValuerolecata1] = useState('');
  const [selectedOptionrolecata1, setSelectedOptionrolecata1] = useState('');
  const [displayvaluecata1, setdisplayvaluecata1] = useState('');

  const toggleDropdowncata1 = () => {
    setisDropdownOpencata1(!isDropdownOpencata1);
  };

  const handleOptionSelectcata1 = (optioncata1) => {
    setSelectedOptionrolecata1(optioncata1);
    setisDropdownOpencata1(false);
    setdisplayvaluecata1(optioncata1);
  };

  const handleSearchChangerolecata1 = (e) => {
    const value = e.target.value;
    setSearchValuerolecata1(value);
    setdisplayvaluecata1(value);
  };

  useEffect(() => {
    const handleClickOutsiderolecata1 = (event) => {
      if (
        dropdownRefcata1.current &&
        !dropdownRefcata1.current.contains(event.target) &&
        inputRefcata1.current &&
        !inputRefcata1.current.contains(event.target)
      ) {
        setisDropdownOpencata1(false);
      }
    };

    const handleWindowMousedown = (event) => {
      handleClickOutsiderolecata1(event);
    };

    window.addEventListener('mousedown', handleWindowMousedown);

    return () => {
      window.removeEventListener('mousedown', handleWindowMousedown);
    };
  }, []);

  const filteredOptionsrolecata1 = optionsrolecata1.filter((option) =>
    option.toLowerCase().includes(searchValuerolecata1.toLowerCase())
  );

  // ***********************************************************************************************
  const optionsrolecata33 = ['DEFAULT'];
  const dropdownRefcata33 = useRef(null);
  const inputRefcata33 = useRef(null);
  const [isDropdownOpencata33, setisDropdownOpencata33] = useState(false);
  const [searchValuerolecata33, setSearchValuerolecata33] = useState('');
  const [selectedOptionrolecata33, setSelectedOptionrolecata33] = useState('');
  const [displayvaluecata33, setdisplayvaluecata33] = useState('');

  const toggleDropdowncata33 = () => {
    setisDropdownOpencata33(!isDropdownOpencata33);
  };

  const handleOptionSelectcata33 = (optionsrolecata333) => {
    setSelectedOptionrolecata33(optionsrolecata333);
    setisDropdownOpencata33(false);
    setdisplayvaluecata33(optionsrolecata333);
  };

  const handleSearchChangerolecata33 = (e) => {
    const value = e.target.value;
    setSearchValuerolecata33(value);
    setdisplayvaluecata33(value);
  };

  useEffect(() => {
    const handleClickOutsiderolecata33 = (event) => {
      if (
        dropdownRefcata33.current &&
        !dropdownRefcata33.current.contains(event.target) &&
        inputRefcata33.current &&
        !inputRefcata33.current.contains(event.target)
      ) {
        setisDropdownOpencata33(false);
      }
    };

    const handleWindowMousedown = (event) => {
      handleClickOutsiderolecata33(event);
    };

    window.addEventListener('mousedown', handleWindowMousedown);

    return () => {
      window.removeEventListener('mousedown', handleWindowMousedown);
    };
  }, []);

  const filteredOptionsrolecata33 = optionsrolecata33.filter((option) =>
    option.toLowerCase().includes(searchValuerolecata33.toLowerCase())
  );
  // ****************************************************************************************************
  const optionsrolecata44 = ['DEFAULT'];
  const dropdownRefcata44 = useRef(null);
  const inputRefcata44 = useRef(null);
  const [isDropdownOpencata44, setisDropdownOpencata44] = useState(false);
  const [searchValuerolecata44, setSearchValuerolecata44] = useState('');
  const [selectedOptionrolecata44, setSelectedOptionrolecata44] = useState('');
  const [displayvaluecata44, setdisplayvaluecata44] = useState('');

  const toggleDropdowncata44 = () => {
    setisDropdownOpencata44(!isDropdownOpencata44);
  };

  const handleOptionSelectcata44 = (optionsrolecata444) => {
    setSelectedOptionrolecata44(optionsrolecata444);
    setisDropdownOpencata44(false);
    setdisplayvaluecata44(optionsrolecata444);
  };

  const handleSearchChangerolecata44 = (e) => {
    const value = e.target.value;
    setSearchValuerolecata44(value);
    setdisplayvaluecata44(value);
  };

  useEffect(() => {
    const handleClickOutsiderolecata44 = (event) => {
      if (
        dropdownRefcata44.current &&
        !dropdownRefcata44.current.contains(event.target) &&
        inputRefcata44.current &&
        !inputRefcata44.current.contains(event.target)
      ) {
        setisDropdownOpencata44(false);
      }
    };

    const handleWindowMousedown = (event) => {
      handleClickOutsiderolecata44(event);
    };

    window.addEventListener('mousedown', handleWindowMousedown);

    return () => {
      window.removeEventListener('mousedown', handleWindowMousedown);
    };
  }, []);

  const filteredOptionsrolecata44 = optionsrolecata44.filter((option) =>
    option.toLowerCase().includes(searchValuerolecata44.toLowerCase())
  );
  // **********************************************************************************************
  const optionsrolecata55 = ['DEFAULT'];
  const dropdownRefcata55 = useRef(null);
  const inputRefcata55 = useRef(null);
  const [isDropdownOpencata55, setisDropdownOpencata55] = useState(false);
  const [searchValuerolecata55, setSearchValuerolecata55] = useState('');
  const [selectedOptionrolecata55, setSelectedOptionrolecata55] = useState('');
  const [displayvaluecata55, setdisplayvaluecata55] = useState('');

  const toggleDropdowncata55 = () => {
    setisDropdownOpencata55(!isDropdownOpencata55);
  };

  const handleOptionSelectcata55 = (optionsrolecata555) => {
    setSelectedOptionrolecata55(optionsrolecata555);
    setisDropdownOpencata55(false);
    setdisplayvaluecata55(optionsrolecata555);
  };

  const handleSearchChangerolecata55 = (e) => {
    const value = e.target.value;
    setSearchValuerolecata55(value);
    setdisplayvaluecata55(value);
  };

  useEffect(() => {
    const handleClickOutsiderolecata55 = (event) => {
      if (
        dropdownRefcata55.current &&
        !dropdownRefcata55.current.contains(event.target) &&
        inputRefcata55.current &&
        !inputRefcata55.current.contains(event.target)
      ) {
        setisDropdownOpencata55(false);
      }
    };

    const handleWindowMousedown = (event) => {
      handleClickOutsiderolecata55(event);
    };

    window.addEventListener('mousedown', handleWindowMousedown);

    return () => {
      window.removeEventListener('mousedown', handleWindowMousedown);
    };
  }, []);

  const filteredOptionsrolecata55 = optionsrolecata55.filter((option) =>
    option.toLowerCase().includes(searchValuerolecata55.toLowerCase())
  );
  // *****************************************************************************************
  const optionsrolecata66 = ['DEFAULT'];
  const dropdownRefcata66 = useRef(null);
  const inputRefcata66 = useRef(null);
  const [isDropdownOpencata66, setisDropdownOpencata66] = useState(false);
  const [searchValuerolecata66, setSearchValuerolecata66] = useState('');
  const [selectedOptionrolecata66, setSelectedOptionrolecata66] = useState('');
  const [displayvaluecata66, setdisplayvaluecata66] = useState('');

  const toggleDropdowncata66 = () => {
    setisDropdownOpencata66(!isDropdownOpencata66);
  };

  const handleOptionSelectcata66 = (optionsrolecata666) => {
    setSelectedOptionrolecata66(optionsrolecata666);
    setisDropdownOpencata66(false);
    setdisplayvaluecata66(optionsrolecata666);
  };

  const handleSearchChangerolecata66 = (e) => {
    const value = e.target.value;
    setSearchValuerolecata66(value);
    setdisplayvaluecata66(value);
  };

  useEffect(() => {
    const handleClickOutsiderolecata66 = (event) => {
      if (
        dropdownRefcata66.current &&
        !dropdownRefcata66.current.contains(event.target) &&
        inputRefcata66.current &&
        !inputRefcata66.current.contains(event.target)
      ) {
        setisDropdownOpencata66(false);
      }
    };

    const handleWindowMousedown = (event) => {
      handleClickOutsiderolecata66(event);
    };

    window.addEventListener('mousedown', handleWindowMousedown);

    return () => {
      window.removeEventListener('mousedown', handleWindowMousedown);
    };
  }, []);

  const filteredOptionsrolecata66 = optionsrolecata66.filter((option) =>
    option.toLowerCase().includes(searchValuerolecata66.toLowerCase())
  );

  // cateagariiws code end 

  const [externalRef, setExternalRef] = useState('');
  const [category2, setCategory2] = useState('');

  const saveRoles = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4001/api/rolesSetup/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          role_name: roleName,
          role_catalog_category: displayValue,
          role_catalog_status: selectedOptioncast,
          role_type: selectedRole,
          role_group: displayValuerolegroup,
          role_practice: searchTermpractice,
          parent_role: searchTermparent,
          role_external_ref: externalRef,
          // role_prohibit_discount:
          role_category_1: displayvaluecata1,
          role_category_2: category2,
          role_category_3: displayvaluecata33,
          role_category_4: displayvaluecata44,
          role_category_5: displayvaluecata55,
          role_category_6: displayvaluecata66
        }),
      });
      if (response.ok) {
        console.log('success');
        alert('Roles Created Successfully.');
        window.location.href = '/rolessetupedit';
      } else {
        console.error('Request Failed: ', response.status);
        alert('Roles Not Created Try Again!');
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (


      <div>
        <Navbar />

        <CatalogSidebar />

        <div className="bread">
          <ul className="breadcrumbs">
            <li className="breadcrumbs--item">
              <a href='/home' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>HOME</a>
            </li>
            <li className="breadcrumbs--item">
              <a href='/' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>CATALOG</a>
            </li>
            <li className="breadcrumbs--item">
              <a href='#' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>ROLES</a>
            </li>
            <li className="breadcrumbs--item">
              <a href="" className="breadcrumbs--link breadcrumbs--link--active">SETUP</a>
            </li>
          </ul>
          <hr className="hr" />
        </div>
        {/* -------------------------- */}

        <HelpRequest />
        <div className='rowrolesetup'>
          <WriteFlexGroup />
          <div className="plusiconRoles">
            <i className="fa fa-plus" onClick={hideshowplusiconroles} />
          </div>
          <div className='rightrolesetup'>
            <div id="headerRoles">CATALOG ROLES</div>
            <div id='nodtaplus'>NO RULES FOUND PLEASE USE + TO ADD NEW RULE</div>
            <div className='hidedhide' style={{display:'none'}}>
              <div className="rolesetupcontainer1">
                <div id="rolesetupcontent1">
                  <input className={`rolesetupinputb1 ${roleNameError ? 'red-outline' : ''}`} type="text" value={roleName} onChange={handleRoleNameChange} />
                  {!roleNameError && <label id="rolesetupv1">ROLE NAME</label>}
                  {roleNameError && <div className="errormessagerolename">ROLE PROFILE NAME IS REQUIRED</div>}
                </div>

                <div id="rolesetupcontent2">
                  <input
                    className="rolesetupinputb2"
                    type="text"
                    value={displayValue}
                    onChange={handleSearchChange}
                    onClick={toggleDropdown}
                    ref={inputRef}

                  />
                  <i
                    className={`fa fa-caret-${isDropdownOpencaca ? 'up' : 'down'}`}
                    onClick={toggleDropdown}
                    id="cacarole"
                  ></i>
                  <label id="rolesetupv2">CATALOG CATEGORY</label>
                  {isDropdownOpencaca && (
                    <ul className="ulrolecaca" ref={dropdownRef}>
                      {filteredOptions.map((option) => (
                        <li key={option} onClick={() => handleOptionSelect(option)}>
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div id="rolesetupcontent3" ref={dropdownRefcast}>
                  <input
                    className="rolesetupinputb3"
                    type="text"
                    value={searchValuecast || selectedOptioncast}
                    onClick={handleInputClick}
                    onChange={handleSearchChangecast}
                  />
                  <label id="rolesetupv3">CATALOG STATUS</label>
                  <FontAwesomeIcon
                    icon={isDropdownOpencast ? faCaretUp : faCaretDown}
                    className="carettoggleicon"
                    id="sttogglecatalogstatus"
                    onClick={toggleDropdowncast}
                  />
                  <ul id="castlabelullist" style={{ display: isDropdownOpencast ? 'block' : 'none' }}>
                    {filteredOptionscast.map((option, index) => (
                      <li
                        key={index}
                        onClick={() => handleOptionSelectcast(option)}
                        className={option === selectedOptioncast ? 'selected' : ''}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* -------------------------------------------------------------------- */}
              <div className='rolesecomain'>
                <div className="rolesetupcontainer4" ref={dropdownRefroletype}>
                  <div id="rolesetupcontent4">
                    <input
                      className="rolesetupinputb4"
                      type="text"

                      value={selectedRole || searchTerm} // Display the selected role or the search term in the input field
                      onChange={handleSearch}
                      onClick={handleInputClickroletype}
                    />
                    <label id="rolesetupv4">ROLE TYPE</label>
                    <FontAwesomeIcon
                      icon={isDropdownOpenroletype ? faCaretUp : faCaretDown}
                      className="roletypetoggle"
                      id="sttoggleroletype"
                      onClick={toggleDropdownroletype}
                    />
                    <ul
                      id="roletypelist"
                      ref={dropdownRefroletype}
                      style={{ display: isDropdownOpenroletype ? 'block' : 'none' }}
                    >
                      {filteredRoles.map((role, index) => (
                        <li key={index} onClick={() => handleRoleSelection(role)}>
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="rolesetupcontainer5">
                  <div id="rolesetupcontent5">
                    <input
                      className="rolesetupinputb5"
                      type="text"
                      onClick={toggleDropdownrolegroup}
                      value={displayValuerolegroup}
                      onChange={handleSearchChangerolegroup}
                      ref={inputRefrolegroup}
                    />
                    <label id="rolesetupv5">ROLE GROUP</label>
                    <i
                      className={`fa fa-caret-${isDropdownOpengroup ? 'up' : 'down'}`}
                      id="sttogglerolegroup"
                      onClick={toggleDropdownrolegroup}
                    ></i>
                    {isDropdownOpengroup && (
                      <ul id="rolegrouplist" ref={dropdownRefgroup}>
                        {filteredOptionsrolegroup.map((option) => (
                          <li key={option} onClick={() => handleOptionSelectrolegroup(option)}>
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="rolesetupcontainer6">
                  <div id="rolesetupcontent6">
                    <div className="dropdownpractice" ref={dropdownRefpractice}>
                      <input
                        className="rolesetupinputb6"
                        type="text"
                        onClick={toggleDropdownpractice}
                        value={searchTermpractice}
                        onChange={handleSearchChangepractice}
                      />
                      <label id="rolesetupv6">PRACTICE</label>
                      <i
                        id="sttogglpractice"
                        className={`fa fa-caret-${isDropdownOpenpractice ? 'up' : 'down'}`}
                        onClick={toggleDropdownpractice}
                      ></i>
                      {isDropdownOpenpractice && (
                        <ul className="rolepracticelist">
                          {filteredOptionspractice.map((optionpractice, index) => (
                            <li
                              key={index}
                              onClick={() => handleSelectoptionpractice(optionpractice)}
                              className={optionpractice === selectedOptionpractice ? 'selected' : ''}
                            >
                              {optionpractice}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* ---------------------------------------------------- */}
              <div className='rolesmain2'>
                <div className="rolesetupcontainer7">
                  <div id="rolesetupcontent7">
                    <div className="dropdownparentrole" ref={dropdownRefparent}>
                      <input
                        className="rolesetupinputb7"
                        type="text"
                        onClick={toggleDropdownparentrole}
                        value={searchTermparent}
                        onChange={handleSearchChangeparent}
                      />
                      <label id="rolesetupv7">PARENT ROLE</label>
                      <i
                        id="toggleparent"
                        className={`fa fa-caret-${isDropdownOpenparent ? 'up' : 'down'}`}
                        onClick={toggleDropdownparentrole}
                      ></i>
                      {isDropdownOpenparent && (
                        <ul id="roleparentlist">
                          {filteredOptionsparent.map((optionparent, index) => (
                            <li
                              key={index}
                              onClick={() => handleSelectoptionparent(optionparent)}
                              className={optionparent === selectedOptionparent ? 'selected' : ''}
                            >
                              {optionparent}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>


                <div className="rolesetupcontainer8">

                  < input className='rolesetupinputb8' type="text" onChange={(e) => setExternalRef(e.target.value)} value={externalRef} />
                  <label id="rolesetupv8">EXTERNAL REFERENSE</label>

                </div>
                <div className="rolesetupcontainer9">
                  < input id='rolesetupCHECK' type="checkbox" />

                  <label id="rolesetupv9">PROHIBIT DISCOUNT</label>
                </div>
              </div>
              {/* -------------------------------------------------------- */}
              <div className={`headerRoles2 ${isDropdownOpen ? 'active' : ''}`} onClick={handleToggle}>
              <label className='catelabelroles'>CATEGORIES</label>
                <FontAwesomeIcon
                  icon={isDropdownOpen ? faAngleUp : faAngleDown}
                  className="careticoncategaries"
                  id="togglecategaries"
                />
              </div>
              {isDropdownOpen && (

                <div className="categaries" onClick={(e) => e.stopPropagation()}>
                  <div className="categaries1grid">
                    <div id="contentS123">
                      <input
                        className="cata1"
                        type="text"
                        onClick={toggleDropdowncata1}
                        value={displayvaluecata1}
                        ref={inputRefcata1}
                        onChange={handleSearchChangerolecata1}
                      />
                      <label id="labelcata1">CATEGORY 1</label>
                      <i
                        className={`fa fa-caret-${isDropdownOpencata1 ? 'up' : 'down'}`}
                        id="togglecata1"
                        onClick={toggleDropdowncata1}
                      ></i>
                      {isDropdownOpencata1 && (
                        <ul id="rolecatalist1" ref={dropdownRefcata1}>
                          {filteredOptionsrolecata1.length === 0 ? (
                            <li id="norefo1">NO RESULTS FOUND</li>
                          ) : (
                            filteredOptionsrolecata1.map((option) => (
                              <li key={option} onClick={() => handleOptionSelectcata1(option)}>
                                {option}
                              </li>
                            ))
                          )}
                        </ul>
                      )}
                    </div>
                    <div id="contentS123">
                      <input type='text' onChange={(e) => setCategory2(e.target.value)} value={category2}></input>
                      <label>CATEGORY 2</label>
                    </div>

                    <div id="contentS123">
                      <input
                        className="cata33"
                        type="text"
                        onClick={toggleDropdowncata33}
                        value={displayvaluecata33}
                        ref={inputRefcata33}
                        onChange={handleSearchChangerolecata33}
                      />
                      <label id="labelcata33">CATEGORY 3</label>
                      <i
                        className={`fa fa-caret-${isDropdownOpencata33 ? 'up' : 'down'}`}
                        id="togglecata33"
                        onClick={toggleDropdowncata33}
                      ></i>
                      {isDropdownOpencata33 && (
                        <ul id="rolecatalist33" ref={dropdownRefcata33}>
                          {filteredOptionsrolecata33.length === 0 ? (
                            <li id="labelcata33">NO RESULTS FOUND</li>
                          ) : (
                            filteredOptionsrolecata33.map((option) => (
                              <li key={option} onClick={() => handleOptionSelectcata33(option)}>
                                {option}
                              </li>
                            ))
                          )}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className='categariesgrid2'>
                    <div id="contentS123">
                      <input
                        className="cata44"
                        type="text"
                        onClick={toggleDropdowncata44}
                        value={displayvaluecata44}
                        ref={inputRefcata44}
                        onChange={handleSearchChangerolecata44}
                      />
                      <label id="labelcata44">CATEGORY 4</label>
                      <i
                        className={`fa fa-caret-${isDropdownOpencata44 ? 'up' : 'down'}`}
                        id="togglecata44"
                        onClick={toggleDropdowncata44}
                      ></i>
                      {isDropdownOpencata44 && (
                        <ul id="rolecatalist44" ref={dropdownRefcata44}>
                          {filteredOptionsrolecata44.length === 0 ? (
                            <li id="labelcata44">NO RESULTS FOUND</li>
                          ) : (
                            filteredOptionsrolecata44.map((option) => (
                              <li key={option} onClick={() => handleOptionSelectcata44(option)}>
                                {option}
                              </li>
                            ))
                          )}
                        </ul>
                      )}
                    </div>

                    <div id="contentS123">
                      <input
                        className="cata55"
                        type="text"
                        onClick={toggleDropdowncata55}
                        value={displayvaluecata55}
                        ref={inputRefcata55}
                        onChange={handleSearchChangerolecata55}
                      />
                      <label id="labelcata55">CATEGORY 5</label>
                      <i
                        className={`fa fa-caret-${isDropdownOpencata55 ? 'up' : 'down'}`}
                        id="togglecata55"
                        onClick={toggleDropdowncata55}
                      ></i>
                      {isDropdownOpencata55 && (
                        <ul id="rolecatalist55" ref={dropdownRefcata55}>
                          {filteredOptionsrolecata55.length === 0 ? (
                            <li id="labelcata55">NO RESULTS FOUND</li>
                          ) : (
                            filteredOptionsrolecata55.map((option) => (
                              <li key={option} onClick={() => handleOptionSelectcata55(option)}>
                                {option}
                              </li>
                            ))
                          )}
                        </ul>
                      )}
                    </div>
                    <div id="contentS123">
                      <input
                        className="cata66"
                        type="text"
                        onClick={toggleDropdowncata66}
                        value={displayvaluecata66}
                        ref={inputRefcata66}
                        onChange={handleSearchChangerolecata66}
                      />
                      <label id="labelcata66">CATEGORY 6</label>
                      <i
                        className={`fa fa-caret-${isDropdownOpencata66 ? 'up' : 'down'}`}
                        id="togglecata66"
                        onClick={toggleDropdowncata66}
                      ></i>
                      {isDropdownOpencata66 && (
                        <ul id="rolecatalist66" ref={dropdownRefcata66}>
                          {filteredOptionsrolecata66.length === 0 ? (
                            <li ID="deflist">NO RESULTS FOUND</li>
                          ) : (
                            filteredOptionsrolecata66.map((option) => (
                              <li key={option} onClick={() => handleOptionSelectcata66(option)}>
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
              <div
                className={`headerRoles3 ${isToggleActivedesc ? 'active' : ''}`}
                onClick={handleToggledescription}
              >
                <label className='desclabel'>DESCRIPTION</label> 
                <FontAwesomeIcon
                  icon={isToggleActivedesc ? faAngleUp : faAngleDown}
                  className="descriptiontoggle"
                  id="toggledescription"
                />
              </div>
              <div className="descrimainpdiv">
               
                {isToggleActivedesc && (
                  <div id="textdesc" onClick={(e) => e.stopPropagation()}>
                    {/* description content */}
                    <div className="requillgrid">
                    <FroalaEditorComponent
tag="textarea"
config={editorConfig}
onModelChange={handleModelChange}

/>
                    </div>
                  </div>
                )}
                {/* description content end */}
              </div>

              {/* description content end */}


              <div className='addinfoforroles'>
                <Addinfo />
              </div>
              <div className="cancelroles">
                <button id="deletrole">DELETE</button>
                <button id='newrolecreate' onClick={saveRoles} style={{ display: 'none' }}>SAVE NEW ROLE</button>
              </div>
            </div>
          </div>

          {/* sidepanel */}
          <div className="slide">
            <div id="mySidebar" className="sidebar1">
              {/* <a href="javascript:void(0)" >x</a> */}
              <div className="navsideskils">
                <button
                  className={`dropdown-btnskil ${isDropdownOpenskil ? "active" : ""}`}
                  id="sidetoggle3skil"
                  onClick={toggleDropdownskil}
                >
                  SKILLS
                  <i
                    className={`fa ${isDropdownOpenskil ? "fa-angle-up" : "fa-angle-down"
                      }`}
                    id="idskilpnl"
                    style={{ color: "black", fontSize: "12px", float: "right" }}
                  />
                </button>
                {isDropdownOpenskil && (
                  <div className="dropskil">

                    <input type='text' hidden />
                    <label id='faplusakil'>
                      <i className="fa fa-plus" />
                    </label>
                  </div>
                )}
              </div>
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


          {/* side panel end */}
          {/* heading roles */}


        </div>

      </div>

    )
  }





  export function hideshowplusiconroles() {
    var headerroles = document.getElementById("headerRoles");
    var hid = document.getElementById('nodtaplus')
    var createDelete = document.getElementById("deletrole");
    var newRoleButton = document.getElementById("newrolecreate");
    var sidepnl = document.getElementById('mainsidebar');
    var hidedhide = document.querySelector('.hidedhide');
    headerroles.innerHTML = "ADD NEW ROLE";
    createDelete.innerHTML = "CANCEL";
    hidedhide.style.display = 'block'
    // Show the new role button
    newRoleButton.style.display = 'block';
    sidepnl.style.display = 'none';
    hid.style.display = 'none';
  }






  export default Rolessetup