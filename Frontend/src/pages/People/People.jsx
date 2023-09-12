import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar'
import AdminSidebar from '../../components/AdminSidebar'
import "../People/People.css"
import HelpRequest from '../../components/HelpRequest'
import { handleClick, handleClickRoles, handleClickSkills, handleSearch } from '../People/PeopleFlex';
import '../Accounts/AccountSidebar.css'
import { handleClickTimestamp } from '../Accounts/AccountSidebar'
import WriteFlexPeople from '../../components/WriteflexPeople';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function People() {
  // practice
  //
  const [isDropdownOpenpractice, setDropdownOpenpractice] = useState(false);
  const [selectedpractice, setSelectedpractice] = useState('');
  const [searchTermpractice, setSearchTermpractice] = useState('');
  const dropdownRefpractice = useRef(null);

  const toggleDropdownpractice = () => {
    setDropdownOpenpractice(!isDropdownOpenpractice);
  };

  const handlepracticeSelection = (practice) => {
    setSelectedpractice(practice);
    setDropdownOpenpractice(false);

  };

  const handleSearchpractice = (e) => {
    const value = e.target.value;
    setSearchTermpractice(value);
    setSelectedpractice(value); // Open the dropdown when searching
  };

  const handleInputClickpractice = () => {
    if (isDropdownOpenpractice) {
      setDropdownOpenpractice(false);
    } else {
      setDropdownOpenpractice(true);
    }

  };

  const handleClickOutsidepractice = (e) => {
    if (
      dropdownRefpractice.current &&
      !dropdownRefpractice.current.contains(e.target) &&
      e.target.id !== 'c'
    ) {
      setDropdownOpenpractice(false);
    }
  };

  const filteredpractice = ['DBA', 'DSOM', 'EDUCATION', 'IZOT'].filter((practice) =>
    practice.toLowerCase().includes(searchTermpractice.toLowerCase())
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutsidepractice);
    return () => {
      document.removeEventListener('click', handleClickOutsidepractice);
    };
  }, []);

  // ORG

  const [isDropdownOpenorg, setDropdownOpenorg] = useState(false);
  const [selectedorg, setSelectedorg] = useState('');
  const [searchTermsorg, setSearchTermorg] = useState('');
  const dropdownReforg = useRef(null);

  const toggleDropdownorg = () => {
    setDropdownOpenorg(!isDropdownOpenorg);
  };

  const handleorgSelection = (org) => {
    setSelectedorg(org);
    setDropdownOpenorg(false);

  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTermorg(value);
    setSelectedorg(value); // Open the dropdown when searching
  };

  const handleInputClickorg = () => {
    if (isDropdownOpenorg) {
      setDropdownOpenorg(false);
    } else {
      setDropdownOpenorg(true);
    }

  };

  const handleClickOutsideorg = (e) => {
    if (
      dropdownReforg.current &&
      !dropdownReforg.current.contains(e.target) &&
      e.target.id !== 'c'
    ) {
      setDropdownOpenorg(false);
    }
  };

  const filteredorg = ['DEFAULT', 'DELIVARY', 'DELIVARY OWNER', 'PRACTICE'].filter((org) =>
    org.toLowerCase().includes(searchTermsorg.toLowerCase())
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideorg);
    return () => {
      document.removeEventListener('click', handleClickOutsideorg);
    };
  }, []);

  // calender code 
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  // SUPPLIER

  const optionssupplier = ['DEFAULT'];
  const dropdownRefsupplier = useRef(null);
  const inputRefsupplier = useRef(null);
  const [isDropdownOpensupplier, setisDropdownOpensupplier] = useState(false);
  const [searchValuesupplier, setSearchValuesupplier] = useState('');
  const [selectedOptionsupplier, setSelectedOptionsupplier] = useState('');
  const [displayvaluesupplier, setdisplayvaluesupplier] = useState('');

  const toggleDropdownsupplier = () => {
    setisDropdownOpensupplier(!isDropdownOpensupplier);
  };

  const handleOptionSelectsupplier = (supplier1) => {
    setSelectedOptionsupplier(supplier1);
    setisDropdownOpensupplier(false);
    setdisplayvaluesupplier(supplier1);
  };

  const handleSearchChangesupplier = (e) => {
    const value = e.target.value;
    setSearchValuesupplier(value);
    setdisplayvaluesupplier(value);
  };

  useEffect(() => {
    const handleClickOutsidesupplier = (event) => {
      if (
        dropdownRefsupplier.current &&
        !dropdownRefsupplier.current.contains(event.target) &&
        inputRefsupplier.current &&
        !inputRefsupplier.current.contains(event.target)
      ) {
        setisDropdownOpensupplier(false);
      }
    };

    const handleWindowMousedown = (event) => {
      handleClickOutsidesupplier(event);
    };

    window.addEventListener('mousedown', handleWindowMousedown);
    return () => {
      window.removeEventListener('mousedown', handleWindowMousedown);
    };
  }, []);

  const filteredOptionssupplier = optionssupplier.filter((option) =>
    option.toLowerCase().includes(searchValuesupplier.toLowerCase())
  );

  // currency
  const [isDropdownOpencurrency, setDropdownOpencurrency] = useState(false);
  const [selectedcurrency, setSelectedcurrency] = useState('');
  const [searchTermcurren, setSearchTermcurren] = useState('');
  const dropdownRefcurrency = useRef(null);

  const toggleDropdowncurrency = () => {
    setDropdownOpencurrency(!isDropdownOpencurrency);
  };

  const handlecurrencySelection = (currency) => {
    setSelectedcurrency(currency);
    setDropdownOpencurrency(false);
  };

  const handleSearchcurrency = (e) => {
    const value = e.target.value;
    setSearchTermcurren(value);
    setSelectedcurrency(value); // Open the dropdown when searching
  };

  const handleInputClickcurrency = () => {
    if (isDropdownOpencurrency) {
      setDropdownOpencurrency(false);
    } else {
      setDropdownOpencurrency(true);
    }
  };

  const handleClickOutsidecurrency = (e) => {
    if (
      dropdownRefcurrency.current &&
      !dropdownRefcurrency.current.contains(e.target) &&
      e.target.id !== 'c'
    ) {
      setDropdownOpencurrency(false);
    }
  };

  const filteredcurrency = [
    'Azerbaijani Manat',
    'Afghan Afghani',
    'Albanian Lek',
    'Algerian Dinar',
    'Angolan Kwanza',
    'Argentine Peso',
    'Armenian Dram',
    'Aruban Florin',
    'Australian Dollar',
    'Azerbaijani Manat',
    'Bahamian Dollar',
    'Bahraini Dinar',
    'Barbadian Dollar',
    'Belarusian Ruble',
    'Belgian Franc',
    'Belize Dollar',
    'Bermudan Dollar',
    'Bhutanese Ngultrum',
    'Bitcoin',
    'Bolivian Boliviano',
    'Bosnia-Herzegovina Convertible Mark',
    'Botswanan Pula',
    'Brazilian Real',
    'British Pound Sterling',
    'Brunei Dollar',
    'Bulgarian Lev',
    'Burundian Franc',
    'Cambodian Riel',
    'Canadian Dollar',

    'Cape Verdean Escudo',

    'Cayman Islands Dollar',

    'CFA Franc BCEAO',

    'CFA Franc BEAC',

    'CFP Franc',

    'Chilean Peso',

    'Chinese Yuan',

    'Colombian Peso',

    'Comorian Franc',

    'Congolese Franc',

    'Costa Rican ColÃ³n',

    'Croatian Kuna',

    'Cuban Convertible Peso',

    'Czech Republic Koruna',

    'Danish Krone',

    'Djiboutian Franc',

    'Dominican Peso',

    'East Caribbean Dollar',

    'Egyptian Pound',

    'Eritrean Nakfa',

    'Estonian Kroon',

    'Ethiopian Birr',

    'Euro',

    'Falkland Islands Pound',

    'Fijian Dollar',

    'Gambian Dalasi',

    'Georgian Lari',

    'German Mark',

    'Ghanaian Cedi',

    'Gibraltar Pound',

    'Greek Drachma',

    'Guatemalan Quetzal',

    'Guinean Franc',

    'Guyanaese Dollar',

    'Haitian Gourde',

    'Honduran Lempira',

    'Hong Kong Dollar',

    'Hungarian Forint',

    'Icelandic KrÃ³na',

    'Indian Rupee',

    'Indonesian Rupiah',

    'Iranian Rial',

    'Iraqi Dinar',

    'Israeli New Sheqel',

    'Italian Lira',

    'Jamaican Dollar',

    'Japanese Yen',

    'Jordanian Dinar',

    'Kazakhstani Tenge',

    'Kenyan Shilling',

    'Kuwaiti Dinar',

    'Kyrgystani Som',

    'Laotian Kip',

    'Latvian Lats',

    'Lebanese Pound',

    'Lesotho Loti',

    'Liberian Dollar',

    'Libyan Dinar',

    'Lithuanian Litas',

    'Australian Dollar',

    'Azerbaijani Manat',

    'Bahamian Dollar',

    'Bahraini Dinar',

    'Barbadian Dollar',

    'Belarusian Ruble',

    'Belgian Franc',

    'Belize Dollar',

    'Bermudan Dollar',

    'Bhutanese Ngultrum',

    'Bitcoin',

    'Bolivian Boliviano',

    'Bosnia-Herzegovina Convertible Mark',

    'Botswanan Pula',

    'Brazilian Real',

    'British Pound Sterling',

    'Brunei Dollar',

    'Bulgarian Lev',

    'Burundian Franc',

    'Cambodian Riel',

    'Canadian Dollar',

    'Cape Verdean Escudo',

    'Cayman Islands Dollar',

    'CFA Franc BCEAO',

    'CFA Franc BEAC',

    'CFP Franc',

    'Chilean Peso',

    'Chinese Yuan',

    'Colombian Peso',

    , 'Comorian Franc',

    'Congolese Franc',

    'Costa Rican ColÃ³n',

    'Croatian Kuna',

    'Cuban Convertible Peso',

    'Czech Republic Koruna',

    'Danish Krone',

    'Djiboutian Franc',

    'Dominican Peso',

    'East Caribbean Dollar',

    'Egyptian Pound',

    'Eritrean Nakfa',

    'Estonian Kroon',

    'Ethiopian Birr',

    'Euro',

    'Falkland Islands Pound',

    'Fijian Dollar',

    'Gambian Dalasi',

    'Georgian Lari',

    'German Mark',

    'Ghanaian Cedi',

    'Gibraltar Pound',

    'Greek Drachma',

    'Guatemalan Quetzal',

    'Guinean Franc',

    'Guyanaese Dollar',

    'Haitian Gourde',

    'Honduran Lempira',

    'Hong Kong Dollar',

    'Hungarian Forint',

    'Icelandic KrÃ³na',

    'Indian Rupee',

    'Indonesian Rupiah',

    'Iranian Rial',

    'Iraqi Dinar',

    'Israeli New Sheqel',

    'Italian Lira',

    'Jamaican Dollar',

    'Japanese Yen',

    'Jordanian Dinar',

    'Kazakhstani Tenge',

    'Kenyan Shilling',

    'Kuwaiti Dinar',

    'Kyrgystani Som',

    'Laotian Kip',

    'Latvian Lats',

    'Lebanese Pound',

    'Lesotho Loti',

    'Liberian Dollar',

    'Libyan Dinar',

    'Lithuanian Litas',

    'Macanese Pataca',

    'Macedonian Denar',

    'Malagasy Ariary',

    'Malawian Kwacha',

    'Malaysian Ringgit',

    'Maldivian Rufiyaa',

    'Mauritanian Ouguiya',

    'Mauritian Rupee',

    'Mexican Peso',

    'Moldovan Leu',

    'Mongolian Tugrik',

    'Moroccan Dirham',

    'Mozambican Metical',

    'Myanmar Kyat',

    'Namibian Dollar',
    'Nepalese Rupee',
    'Netherlands Antillean Guilder',
    'New Taiwan Dollar',
    'New Zealand Dollar',
    'Nicaraguan CÃ³rdoba',
    'Nigerian Naira',
    'North Korean Won',
    'Norwegian Krone',
    'Omani Rial',
    'Pakistani Rupee',
    'Panamanian Balboa',
    'Papua New Guinean Kina',
    'Paraguayan Guarani',
    'Peruvian Nuevo Sol',
    'Philippine Peso',
    'Polish Zloty',
    'Qatari Rial',
    'Romanian Leu',

    'Russian Ruble',

    'Samoan Tala',

    'Saudi Riyal',

    'Seychellois Rupee',

    'Sierra Leonean Leone',

    'Singapore Dollar',

    'Slovak Koruna',

    'Solomon Islands Dollar',

    'Somali Shilling',

    'South African Rand',

    'South Korean Won',

    'Special Drawing Rights',

    'Sri Lankan Rupee',

    'St. Helena Pound',

    'Swedish Krona',

    'Swiss Franc',

    'São Tomé and Príncipe Dobra',

    'Tajikistani Somoni',

    'Tanzanian Shilling',

    'Thai Baht',

    'Tongan paanga',

    'Trinidad &amp; Tobago Dollar',

    'Tunisian Dinar',

    'Turkish Lira',

    'Turkmenistani Manat',

    'Ugandan Shilling',

    'Ukrainian Hryvnia',

    'United Arab Emirates Dirham',

    'Uruguayan Peso',

    'US Dollar',

    'Uzbekistan Som',

    'Vanuatu Vatu',

    'Venezuelan BolÃ­var',

    'Vietnamese Dong',

    'Yemeni Rial',

    'Zambian Kwacha'].filter((currency) =>

      currency.toLowerCase().includes(searchTermcurren.toLowerCase())

    );


  const [adminId, setAdmin] = useState('');
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);
  const [writeFormData, setWriteFormData] = useState(false);

  useEffect(()=>{
    if (document.getElementById('editpeopledata') && document.getElementById('newpeoplecreate')) {
      if (showAnotherComponent && writeFormData) {
        document.getElementById('editpeopledata').disabled = false;
        document.getElementById('newpeoplecreate').disabled = true;
      } else if (showAnotherComponent) {
        document.getElementById('editpeopledata').disabled = true;
        document.getElementById('newpeoplecreate').disabled = false;
      }
    }
  })
  


  const handleShowClick = () => {
    if (!writeFormData) {
      if (showAnotherComponent) {
        setShowAnotherComponent(false);
        setFormData(initialFormData);
      } else {
        setShowAnotherComponent(true);
      }
    } else {
      if (!showAnotherComponent) {
        setShowAnotherComponent(true);
      } else {
        setFormData(initialFormData);
        setWriteFormData(false);
      }
    }
    setIsChecked(false);
  };


  const handleShow = (data) => {
    setShowAnotherComponent(true);
    setWriteFormData(true);
    setFormData(data);
    data.start_date!=='' ? setStartDate(new Date(data.start_date)) : setStartDate(null);
    data.end_date!=='' ? setEndDate(new Date(data.end_date)) : setEndDate(null);
    setSelectedpractice(data.practice);
    setSelectedorg(data.org);
    setSelectedOptionmanager(data.manager);
    setSelectedOptionsupplier(data.supplier);
    setSelectedcurrency(data.currency);
    setIsChecked(data.contractor);
    setAdmin(data.admin_id);
  };


  useEffect(() => {

    document.addEventListener('click', handleClickOutsidecurrency);

    return () => {

      document.removeEventListener('click', handleClickOutsidecurrency);

    };

  }, []);




  // manager

  // const optionsmanager = ['DEFAULT'];

  const dropdownRefmanager = useRef(null);

  const inputRefmanager = useRef(null);

  const [isDropdownOpenmanager, setisDropdownOpenmanager] = useState(false);

  const [searchValuemanager, setSearchValuemanager] = useState('');

  const [selectedOptionmanager, setSelectedOptionmanager] = useState('');

  const [displayvaluemanager, setdisplayvaluemanager] = useState('');
  const [inputDisplay, setInputDisplay] = useState('none');

  const [formData, setFormData] = useState({
    // initialize your form fields here
    first_name: '',
    last_name: '',
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


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };



  const toggleDropdownmanager = () => {

    setisDropdownOpenmanager(!isDropdownOpenmanager);

  };


  // plus icon roles toggle

  const toggleInputDisplay = () => {

    setInputDisplay(inputDisplay === 'none' ? 'block' : 'none');

  };

  // plus icon skills toggle

  const toggleInputfieldDisplay = () => {

    setInputDisplay(inputDisplay === 'none' ? 'block' : 'none');

  };
  const handleOptionSelectmanager = (manager1) => {

    setSelectedOptionmanager(manager1);

    setisDropdownOpenmanager(false);

    setdisplayvaluemanager(manager1);

  };
  const handleSearchChangemanager = (e) => {

    const value = e.target.value;

    setSearchValuemanager(value);

    setdisplayvaluemanager(value);

  };
  useEffect(() => {

    const handleClickOutsidemanager = (event) => {
      const dropdownElement = dropdownRefmanager.current;

      const inputElement = inputRefmanager.current;
      if (

        dropdownElement &&

        !dropdownElement.contains(event.target) &&

        inputElement &&

        !inputElement.contains(event.target)

      ) {

        setisDropdownOpenmanager(false);

      }

    };




    const handleWindowMousedown = (event) => {

      handleClickOutsidemanager(event);

    };




    window.addEventListener('mousedown', handleWindowMousedown);




    return () => {

      window.removeEventListener('mousedown', handleWindowMousedown);

    };

  }, []);




  const filteredOptionsmanager = optionssupplier.filter((option) =>

    option.toLowerCase().includes(searchValuemanager.toLowerCase())

  );




  const [isDropdownOpenmanager1, setIsDropdownOpenmanager] = useState(false);

  const [isAvatarHidden, setIsAvatarHidden] = useState(false);

  const [isDisnonHidden, setIsDisnonHidden] = useState(false);

  const dropdownRefmanager1 = useRef(null);




  const handleInputClick = () => {

    setIsDropdownOpenmanager(!isDropdownOpenmanager1);

    setIsAvatarHidden(true);

    setIsDisnonHidden(true);

  };




  const handleClickOutside = (event) => {

    if (dropdownRefmanager1.current && !dropdownRefmanager1.current.contains(event.target)) {

      setIsDropdownOpenmanager(false);

    }

  };




  useEffect(() => {

    document.addEventListener('click', handleClickOutside);

    return () => {

      document.removeEventListener('click', handleClickOutside);

    };

  }, []);
  // sidepanel roles 
  // Roles
  // side panel
  const [isDropdownOpenrole, setIsDropdownOpenrole] = useState(false);
  const [isInputVisible1, setIsInputVisible1] = useState(false);
  const [isDropdownOpenrole1, setIsDropdownOpen1] = useState(false);
  const [searchTermrole, setSearchTermrole] = useState('');
  const [filteredOptionrole, setFilteredOptionsrole] = useState([]);
  const dropdownRefrole = useRef(null);
  const [selectedOptionrole, setSelectedOptionrole] = useState('');
  const [isPlusIconVisiblerole, setIsPlusIconVisiblerole] = useState(true);

  const toggleDropdownrole = () => {
    setIsDropdownOpenrole(!isDropdownOpenrole);
    setIsInputVisible1(false); // Reset the input field visibility when toggling the dropdown
  };

  const roletoggleInputField1 = () => {
    setIsInputVisible1(!isInputVisible1);
    setIsDropdownOpen1(true); // Reset the dropdown visibility when toggling the input field
    setIsPlusIconVisiblerole(false); // Hide the plus icon when the input field is displayed
  };

  const toggleDropdownrolesidepanel = () => {
    setIsDropdownOpen1(!isDropdownOpenrole1);
    setIsPlusIconVisiblerole(true); // Show the plus icon when the dropdown is closed
  };

  useEffect(() => {
    // Filter options based on the search term
    const filtered = roleoptions.filter((optionrole) =>
      optionrole.toLowerCase().includes(searchTermrole.toLowerCase())
    );
    setFilteredOptionsrole(filtered); // Update the state with the filtered options
  }, [searchTermrole]);

  const handleSelectoptionrole = (optionrole) => {
    setSelectedOptionrole(optionrole);
    setSearchTermrole(optionrole); // Update the search input field value
    setIsDropdownOpen1(false);
  };

  useEffect(() => {
    const handleOutsideClickrole = (event) => {
      if (dropdownRefrole.current && !dropdownRefrole.current.contains(event.target)) {
        setIsDropdownOpen1(false);
      }
    };

    window.addEventListener('click', handleOutsideClickrole);

    return () => {
      window.removeEventListener('click', handleOutsideClickrole);
    };
  }, []);

  const handleSearchChangerole = (event) => {
    setSearchTermrole(event.target.value);
  };

  const roleoptions = ['item 1', 'item 2', 'item 3', 'item 4'];
  // SKILLS*************************************************************************************************
  // side panel
  const [isDropdownOpenskil1, setIsDropdownOpenskil1] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTermskil, setSearchTermskil] = useState('');
  const [filteredOptionsskil, setFilteredOptionsskil] = useState([]);
  const dropdownRefskil = useRef(null);
  const [selectedOptionskil, setSelectedOptionskil] = useState('');
  const [isPlusIconVisible, setIsPlusIconVisible] = useState(true);

  const toggleDropdownskil1 = () => {
    setIsDropdownOpenskil1(!isDropdownOpenskil1);
    setIsInputVisible(false); // Reset the input field visibility when toggling the dropdown
  };

  const toggleInputField = () => {
    setIsInputVisible(!isInputVisible);
    setIsDropdownOpen(true); // Reset the dropdown visibility when toggling the input field
    setIsPlusIconVisible(false); // Hide the plus icon when the input field is displayed
  };

  const toggleDropdownskilsidepanel = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsPlusIconVisible(true); // Show the plus icon when the dropdown is closed
  };

  useEffect(() => {
    // Filter options based on the search term
    const filtered = skiloptions.filter((optionskil) =>
      optionskil.toLowerCase().includes(searchTermskil.toLowerCase())
    );
    setFilteredOptionsskil(filtered); // Update the state with the filtered options
  }, [searchTermskil]);

  const handleSelectoptionskil = (optionskil) => {
    setSelectedOptionskil(optionskil);
    setSearchTermskil(optionskil); // Update the search input field value
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClickskil = (event) => {
      if (dropdownRefskil.current && !dropdownRefskil.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClickskil);

    return () => {
      window.removeEventListener('click', handleOutsideClickskil);
    };
  }, []);

  const handleSearchChangeskil = (event) => {
    setSearchTermskil(event.target.value);
  };

  const [peopleData, setPeopleData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const fetchData = async () => {
    try {
      let response = await fetch('http://localhost:4001/api/admin/people', {
        method: "GET",
      })
      const json = await response.json()
      if (json) {
        setPeopleData(json.data);
      }
    } catch (error) {
      console.error("Error: ", error)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const savePeopleData = async () => {
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.week_hour) {
      alert('Please fill out all required fields.\n \nFirst Name, Last Name, Email, Week hour are required fields.');
      return;
    }
    try {
      formData.start_date = document.getElementById("plcdat").value;
      formData.end_date = document.getElementById("plcdate").value;
      formData.practice = document.getElementById("plcpractice").value;
      formData.org = document.getElementById("plcorg").value;
      formData.manager = document.getElementById("managerInput").value;
      formData.contractor = document.getElementById("contractor_value").checked;
      formData.supplier = document.getElementById("plcsup").value;
      formData.currency = document.getElementById("plccur").value;

      const response = await fetch('http://localhost:4001/api/admin/people', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   first_name: document.getElementById("plcfirname").value,
        //   last_name: document.getElementById("plcsecname").value,
        //   title: document.getElementById("plctit").value,
        //   uid: document.getElementById("plcuid").value,
        //   emp_id: document.getElementById("plcempid").value,
        //   emp_reference_id: document.getElementById("plcextref").value,
        //   start_date: document.getElementById("plcdat").value,
        //   end_date: document.getElementById("plcdate").value,
        //   practice: document.getElementById("plcpractice").value,
        //   org: document.getElementById("plcorg").value,
        //   //manager: document.getElementById("").value,
        //   exp_yr: document.getElementById("plcyoe").value,
        //   tenure: document.getElementById("plcyot").value,
        //   crm_status: document.getElementById("plccrm").value,
        //   email: document.getElementById("plcemail").value,
        //   phone: document.getElementById("plcphoneno").value,
        //   source_system_user_name: document.getElementById("plcsousysusername").value,
        //   city: document.getElementById("plccityname").value,
        //   region: document.getElementById("plcreg").value,
        //   country: document.getElementById("plccountry").value,
        //   //contractor: document.getElementById("").value,
        //   supplier: document.getElementById("plcsup").value,
        //   currency: document.getElementById("plccur").value,
        //   cost_per_hour: document.getElementById("plccph").value,
        //   week_hour: document.getElementById("plcwh").value,
        // })
        body: JSON.stringify(formData),
      })
      const json = await response.json()

      if (response.ok) {
        fetchData();
        setFormData({
          first_name: '',
          last_name: '',
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
        setStartDate(null);
        setEndDate(null);
        setSelectedpractice('')
        setSelectedorg('');
        setSelectedOptionmanager('');
        setSelectedOptionsupplier('');
        setSelectedcurrency('');
        setIsChecked(false);
        setShowAnotherComponent(false);
        
      }

    } catch (error) {
      console.error("Error: ", error)
    }
  }

  const editPeopleData = async () => {
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.week_hour) {
      alert('Please fill out all required fields.\n \nFirst Name, Last Name, Email, Week hour are required fields.');
      return;
    }

    try {
      formData.start_date = document.getElementById("plcdat").value;
      formData.end_date = document.getElementById("plcdate").value;
      formData.practice = document.getElementById("plcpractice").value;
      formData.org = document.getElementById("plcorg").value;
      formData.manager = document.getElementById("managerInput").value;
      formData.contractor = document.getElementById("contractor_value").checked;
      formData.supplier = document.getElementById("plcsup").value;
      formData.currency = document.getElementById("plccur").value;

      const response = await fetch(`http://localhost:4001/api/admin/people/${adminId}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const json = await response.json()

      if (response.ok) {
        fetchData();
        setFormData({
          first_name: '',
          last_name: '',
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
        setStartDate(null);
        setEndDate(null);
        setSelectedpractice('')
        setSelectedorg('');
        setSelectedOptionmanager('');
        setSelectedOptionsupplier('');
        setSelectedcurrency('');
        setIsChecked(false);
        setShowAnotherComponent(false);
      }

    } catch (error) {
      console.error("Error: ", error)
    }
  }

  const skiloptions = ['item 1', 'item 2', 'item 3', 'item 4'];
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
            <a href='' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>ADMIN</a>
          </li>
          <li className="breadcrumbs--item">
            <a href="" className="breadcrumbs--link breadcrumbs--link--active">PEOPLE</a>
          </li>
        </ul>
        <hr className="hr" />
      </div>
      <HelpRequest />
      <div>
        <div className="rowpeople">
          <div className='rowSide'>
            <div className='lefticon'>
            <WriteFlexPeople compName = "People" data={peopleData} handleShow={handleShow} />
            </div>

            {/* <div className="plusiconpeople">
              <i className="fa fa-plus" onClick={hideshowplusiconpeople} />
            </div> */}

            <div className="plusiconpeople">
              <i className="fa fa-plus" onClick={handleShowClick} />
            </div>

            

          </div>
          <div className="rightpeople">
            <div id="headerpeople"><a>PEOPLE</a></div>
            {!showAnotherComponent && <div id='nodtapluspeople'>NO PEOPLE FOUND PLEASE USE + TO ADD NEW PEOPLE</div>}
            {/* {showAnotherComponent && <div><h1>hello</h1></div>} */}
            {showAnotherComponent &&
              <div id='hidepeople'>
                <div className="peopleprofile">
                <i className="fa fa-circle" aria-hidden="true" /> 
                   <input type="checkbox" className='checkpeople' />
                  <label className='labelpeopleacces'>HAS ACCESS</label>
                  <p>To manage user access,Please go to admin Access</p>
                </div>
                <div id="peoplemain">
                  <div className="persondataleft">
                    <p>PERSON</p>
                    <div className="containerPP1">
                      <div id="contentPP1">
                        <input className type="text" id='plcfirname' name="first_name" value={formData.first_name} onChange={handleChange} placeholder='Enter First Name' />
                        <label>FIRST NAME</label>
                      </div>
                      <div id="contentPP2">
                        <input className type="text" id='plcsecname' name="last_name" value={formData.last_name} onChange={handleChange} placeholder='Enter Last Name' />
                        <label>LAST NAME</label>
                      </div>
                    </div>
                    <div className="containerPP2">
                      <div id="contentPP3">
                        <input className type="text" id='plctit' name="title" value={formData.title} onChange={handleChange} placeholder='Enter Title' />
                        <label>TITLE</label>
                      </div>
                      <div id="contentPP4">
                        <input className type="number" id='plcuid' name="uid" value={formData.uid} onChange={handleChange} placeholder='Enter UID' />
                        <label>UID</label>
                      </div>
                    </div>
                    <div className="containerPP3">
                      <div id="contentPP5">
                        <input className type="text" id='plcempid' name="emp_id" value={formData.emp_id} onChange={handleChange} placeholder='Enter Employee ID' />
                        <label>EMPLOYEE ID</label>
                      </div>
                      <div id="contentPP6">
                        <input className type="text" id='plcextref' name="emp_reference_id" value={formData.emp_reference_id} onChange={handleChange} placeholder='Enter External Reference ID' />
                        <label>EXTERNAL REFERENCE ID</label>
                      </div>
                    </div>

                    <div className="containerPP4">
                      <div id="contentPP7">
                        {/* onChange={(date) => setStartDate(date)} */}
                        <DatePicker selected={startDate}
                          name="start_date" 
                          onChange={(date) => {
                            setStartDate(date)
                          }}
                          dateFormat="MMMM d, yyyy" id="plcdat" placeholderText="Select a Date" />
                        <label>STARTED ON</label>
                      </div>

                      <div id="contentPP8">
                        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}
                          dateFormat="MMMM d, yyyy" id="plcdate" placeholderText="Select a Date" />
                        <label>ENDS ON</label>
                      </div>
                    </div>
                  </div>

                  {/* -----------PRACTICE------------- */}
                  <div className="practicedataright">
                    <p>PRACTICE</p>
                    <div className="containerPP5">
                      <div id="contentPP9" ref={dropdownRefpractice}>
                        <input
                          className="practiceinput"
                          type="text" id='plcpractice' placeholder='Select Practice'
                          name="practice"
                          value={selectedpractice || searchTermpractice} // Display the selected status or the search term in the input field
                          onChange={handleSearchpractice}
                          onClick={handleInputClickpractice}
                        />
                        <label id="practicelabel">PRACTICE</label>
                        <FontAwesomeIcon
                          icon={isDropdownOpenpractice ? faCaretUp : faCaretDown}
                          className="practicetoggle"
                          id="sttogglepractice"
                          onClick={toggleDropdownpractice}
                        />
                        <ul
                          id="practicelist"
                          ref={dropdownRefpractice}
                          style={{ display: isDropdownOpenpractice ? 'block' : 'none' }}
                        >
                          {filteredpractice.map((practice, index) => (
                            <li key={index} onClick={() => handlepracticeSelection(practice)}>
                              {practice}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* ORG */}

                      <div id="contentPP10">
                        <div id="contentPP9" ref={dropdownReforg}>
                          <input
                            className="orginput"
                            type="text" id='plcorg' placeholder='Select ORG'
                            name='org'
                            value={selectedorg || searchTermsorg} // Display the selected status or the search term in the input field
                            onChange={handleSearch}
                            onClick={handleInputClickorg}
                          />
                          <label id="orglabel">ORG</label>
                          <FontAwesomeIcon
                            icon={isDropdownOpenorg ? faCaretUp : faCaretDown}
                            className="orgtoggle"
                            id="sttoggleorg"
                            onClick={toggleDropdownorg}
                          />
                          <ul
                            id="orglist"
                            ref={dropdownReforg}
                            style={{ display: isDropdownOpenorg ? 'block' : 'none' }}
                          >
                            {filteredorg.map((org, index) => (
                              <li key={index} onClick={() => handleorgSelection(org)}>
                                {org}
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </div>

                    {/* Manager */}
                    <div id="contentPP11">
                      {isDropdownOpenmanager ? (
                        <div>
                          <input
                            className="managerinput"
                            type="text"
                            id="managerInput"
                            name="manager"
                            onClick={toggleDropdownmanager}
                            value={displayvaluemanager}
                            ref={inputRefmanager}
                            onChange={handleSearchChangemanager}
                          />
                          <label id="labelmanager">MANAGER</label>
                          <i
                            className={`fa fa-caret-${isDropdownOpenmanager ? 'up' : 'down'}`}
                            id="togglemanager"
                            onClick={toggleDropdownmanager}></i>
                          {isDropdownOpenmanager && (
                            <ul id="managerlist" ref={dropdownRefmanager}>
                              {searchValuemanager.length < 4 ? (
                                <li id="noreman">PLEASE ENTER 3 OR MORE CHARACTERS</li>
                              ) : (
                                filteredOptionsmanager.map((manager) => (
                                  <li key={manager}>{manager}</li>
                                ))
                              )}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <div>
                          <input
                            className="managerinput"
                            id="managerInput"
                            type="text"
                            name="manager"
                            onClick={toggleDropdownmanager}
                            value={displayvaluemanager}
                            ref={inputRefmanager}
                            onChange={handleSearchChangemanager} />
                          <label id="labelmanager">MANAGER</label>
                          <i
                            className={`fa fa-caret-${isDropdownOpenmanager ? 'up' : 'down'}`}
                            id="togglemanager"
                            onClick={toggleDropdownmanager}
                          ></i>
                          <img className="avatar__image1" id="avatarposition" />
                          {/* <display default id="disnon">NONE</display> */}
                          {displayvaluemanager.length === 0 && <display default id="disnon">NONE</display>}
                        </div>
                      )}
                    </div>

                    {/* Year of Experience */}
                    <div className="containerPP7">
                      <div id="contentPP12">
                        <input className type="text" id='plcyoe' name="exp_yr" value={formData.exp_yr} onChange={handleChange} placeholder='Enter Year of Experience' />
                        <label>YEARS OF EXPERIENCE</label>
                      </div>

                      {/* Year of Tenure */}
                      <div id="contentPP13">
                        <input className type="text" id='plcyot' name="tenure" value={formData.tenure} onChange={handleChange} placeholder='Enter Year of Tenture' />
                        <label>YEARS OF TENURE</label>
                      </div>
                    </div>

                    {/* CRM Status */}
                    <div className="containerPP8">
                      <div id="contentPP14">
                        <input className type="text" id='plccrm' name="crm_status" value={formData.crm_status} onChange={handleChange} placeholder='Enter CRM Status' />
                        <label>CRM STATUS</label>
                      </div>
                    </div>
                  </div>


                  {/* -------------CONTACT--------------- */}
                  <div className="contactdataleft">
                    <p>CONTACT</p>
                    <div className="containerPC1">
                      <div id="contentPC1">
                        <input className type="email" id='plcemail' name="email" value={formData.email} onChange={handleChange} placeholder='Enter Your Email' required />
                        <label>EMAIL</label>
                      </div>
                      <div id="contentPC2">
                        <input className type="number" id='plcphoneno' name="phone" value={formData.phone} onChange={handleChange} placeholder='Enter Your Phone Number' />
                        <label>PHONE</label>
                      </div>
                    </div>
                    <div className="containerPC2">
                      <div id="contentPC3">
                        <input className type="text" id='plcsousysusername' name="source_system_user_name" value={formData.source_system_user_name} onChange={handleChange} placeholder='Enter Source System User Name' />
                        <label>SOURCE SYSTEM USER NAME</label>
                      </div>
                    </div>
                    <div className="containerPC3">
                      <div id="contentPC4">
                        <input className type="text" id='plccityname' name="city" value={formData.city} onChange={handleChange} placeholder='Enter City Name' />
                        <label>CITY</label>
                      </div>
                      <div id="contentPC5">
                        <input className type="text" id='plcreg' name="region" value={formData.region} onChange={handleChange} placeholder='Enter Your Region' />
                        <label>REGION</label>
                      </div>
                      <div id="contentPC6">
                        <input className type="text" id='plccountry' name="country" value={formData.country} onChange={handleChange} placeholder='Enter Your Country' />
                        <label>COUNTRY</label>
                      </div>
                    </div>
                  </div>
                  {/* ----------COST------------ */}
                  <div className="costdataright">
                    <p>COST</p>
                    <div className="containerPC4">
                      <div id="contentPC7">
                        <input className type="text" />
                        <input className='checcbox' type="checkbox" id='contractor_value' 
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        <label>CONTRACTOR</label>
                      </div>

                      {/* Supplier */}
                      < div id="contentPC8">
                        <input
                          className="supplyinput"
                          type="text" id='plcsup' placeholder='Select Supplier'
                          onClick={toggleDropdownsupplier}
                          value={displayvaluesupplier}
                          ref={inputRefsupplier}
                          onChange={handleSearchChangesupplier}
                        />
                        <label id="labelsupplier">SUPPLIER</label>
                        <i
                          className={`fa fa-caret-${isDropdownOpensupplier ? 'up' : 'down'}`}
                          id="togglesupplier"
                          onClick={toggleDropdownsupplier}
                        ></i>
                        {isDropdownOpensupplier && (
                          <ul id="supplierlist" ref={dropdownRefsupplier}>
                            {filteredOptionssupplier.length === 0 ? (
                              <li id="noresupply">NO RESULTS FOUND</li>
                            ) : (
                              filteredOptionssupplier.map((supplier) => (
                                <li key={supplier} onClick={() => handleOptionSelectsupplier(supplier)}>
                                  {supplier}
                                </li>
                              ))
                            )}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div className="containerPC5">


                      {/* Currency */}
                      <div id="contentPC9" ref={dropdownRefcurrency}>
                        <input
                          className="currencyinput"
                          type="text" id='plccur' placeholder='Select Currency'
                          value={selectedcurrency || searchTermcurren} // Display the selected status or the search term in the input field
                          onChange={handleSearchcurrency}
                          onClick={handleInputClickcurrency} />

                        <label id="currencylabelpeople">CURRENCY</label>



                        <FontAwesomeIcon

                          icon={isDropdownOpencurrency ? faCaretUp : faCaretDown}

                          className="currencytoggle"

                          id="sttogglecurrency"

                          onClick={toggleDropdowncurrency}

                        />



                        <ul

                          id="currencylist"

                          ref={dropdownRefcurrency}

                          style={{ display: isDropdownOpencurrency ? 'block' : 'none' }}

                        >

                          {filteredcurrency.map((currency, index) => (

                            <li key={index} onClick={() => handlecurrencySelection(currency)}>

                              {currency}

                            </li>

                          ))}

                        </ul>

                      </div>
                      <div id="contentPC10">
                        <input className type="number" id='plccph' name="cost_per_hour" value={formData.cost_per_hour} onChange={handleChange} placeholder='Enter Cost Per Hour' />
                        <label>COST PER HOUR</label>
                      </div>
                    </div>
                    <div className="containerPC6">
                      <div id="contentPC11">
                        <input className type="number" id='plcwh' name="week_hour" value={formData.week_hour} onChange={handleChange} placeholder='Enter Week Hour' required />
                        <label>WEEK HOUR</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cancelpeople">
                  <div className="buttonGap">
                    <button type='button' id="deletpeople" className='child'>CANCEL</button>
                    <button type='button' id='newpeoplecreate' className='child' onClick={savePeopleData}>SAVE NEW PEOPLE</button>
                    <button type='button' id='editpeopledata' className='child' onClick={editPeopleData}>EDIT PEOPLE DATA</button>
                    {/* <button type='button' id='editpeopledata' className='child' onClick={editPeopleData}>EDIT PEOPLE DATA</button> */}
                  </div>
                </div>
              </div>}
          </div>

          {/* Side-Bar Start Section of People */}
          <div className="slide">
            <div id="mySidebar" className="sidebar1">
              {/* <a href="javascript:void(0)" >x</a> */}
              {/* Roles */}
              <div className="navsiderole1">
                <button
                  className={`dropdown-btnrole ${isDropdownOpenrole ? 'active' : ''}`}
                  id="sidetoggle3role"
                  onClick={toggleDropdownrole}
                >
                  ROLES
                  <i
                    className={`fa ${isDropdownOpenrole ? 'fa-angle-up' : 'fa-angle-down'}`}
                    id="idrolepnl1"
                    style={{ color: 'black', fontSize: '12px', float: 'right' }}
                  />
                </button>
                {isDropdownOpenrole && (
                  <div className="droprole1">
                    <input type="text" hidden />
                    {isPlusIconVisiblerole && !isInputVisible1 && (
                      <label id="faplusrole" onClick={roletoggleInputField1}>
                        <i className="fa fa-plus" />
                      </label>
                    )}
                    {isInputVisible1 && (
                      <div className="inputFieldContainerrole" ref={dropdownRefrole}>
                        <input
                          type="text"
                          className="inputrole"
                          placeholder='select role'
                          onClick={toggleDropdownrolesidepanel}
                          value={searchTermrole}
                          onChange={handleSearchChangerole}
                        />

                        {/* Add toggle icon for the input field */}
                        <i
                          className={`fa ${isDropdownOpenrole1 ? 'faAngleUp' : 'fa-angle-down'}`}
                          id="idrolepnl12"
                          style={{ color: 'black', fontSize: '12px', float: 'right' }}
                          onClick={toggleDropdownrolesidepanel}
                        />
                        {isDropdownOpenrole1 && (
                          <ul className="dropdownList">
                            {filteredOptionrole.map((optionrole, index) => (
                              <li
                                key={index}
                                onClick={() => handleSelectoptionrole(optionrole)}
                                className={optionrole === selectedOptionrole ? 'selected' : ''}
                              >
                                {optionrole}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
              {/* roleend */}

              {/* skills */}
              <div className="navsideskils1">
                <button
                  className={`dropdown-btnskil1 ${isDropdownOpenskil1 ? 'active' : ''}`}
                  id="sidetoggle3skil1"
                  onClick={toggleDropdownskil1}
                >
                  SKILLS
                  <i
                    className={`fa ${isDropdownOpenskil1 ? 'fa-angle-up' : 'fa-angle-down'}`}
                    id="idskilpnl1"
                    style={{ color: 'black', fontSize: '12px', float: 'right' }}
                  />
                </button>
                {isDropdownOpenskil1 && (
                  <div className="dropskil1">
                    <input type="text" hidden />
                    {isPlusIconVisible && !isInputVisible && (
                      <label id="faplusakil1" onClick={toggleInputField}>
                        <i className="fa fa-plus" />
                      </label>
                    )}
                    {isInputVisible && (
                      <div className="inputFieldContainer" ref={dropdownRefskil}>
                        <input
                          type="text"
                          className="inputskills"
                          placeholder='select skill'
                          onClick={toggleDropdownskilsidepanel}
                          value={searchTermskil}
                          onChange={handleSearchChangeskil}
                        />

                        {/* Add toggle icon for the input field */}
                        <i
                          className={`fa ${isDropdownOpen ? 'fa-angle-up' : 'fa-angle-down'}`}
                          id="idskilpnl12"
                          style={{ color: 'black', fontSize: '12px', float: 'right' }}
                          onClick={toggleDropdownskilsidepanel}
                        />
                        {isDropdownOpen && (
                          <ul className="dropdownList">
                            {filteredOptionsskil.map((optionskil, index) => (
                              <li
                                key={index}
                                onClick={() => handleSelectoptionskil(optionskil)}
                                className={optionskil === selectedOptionskil ? 'selected' : ''}
                              >
                                {optionskil}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
              {/* skillsend */}
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
              <button id="main" className="openbtnact" onClick={handleClick}>
                <i className="fa-less-than" id='iconpeople' /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}





export default People

