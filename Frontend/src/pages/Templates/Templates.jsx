
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar'
import CatalogSidebar from '../../components/CatalogSidebar'
import HelpRequest from '../../components/HelpRequest'
//import WriteFlexGroup from '../../components/WriteflexGroup';
import WriteFlexPeople from '../../components/WriteflexPeople';
import '../Templates/Templates.css';
import '../Accounts/AccountSidebar.css';
import { handleClickTimestamp, handleOpenClose } from '../Accounts/AccountSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCaretDown, faCaretUp, faTimes } from '@fortawesome/free-solid-svg-icons';

import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/third_party/embedly.min.js";
import FroalaEditorComponent from 'react-froala-wysiwyg';
import Doc from './Doc';
import { saveAs } from 'file-saver';
import htmlDocx from 'html-docx-js/dist/html-docx';
// import { saveAs } from 'file-saver';
//import FROALA_LICENSE_KEY from '../../ConfigFroala';

const Templates = () => {
  let count = 0;

  const [publishedDoctye, setPublishedDoctype] = useState([]);
  const [dataPublished, setDataPublished] = useState([]);
  const [showtemplate, setshowtemplate] = useState(false);
  const [rightSidebar, setrightSidebar] = useState(false);
  const [docTemplate, setDocTemplate] = useState([]);

  function myFunctiontemp() {
    var tablewrap6 = document.getElementById('quotempid');
    tablewrap6.classList.toggle('hiddenguide');

    var clickmeguide = document.getElementById('clickmetemp');
    var icon = clickmeguide.querySelector('span');

    if (icon.classList.contains('fa-angle-down')) {
      icon.classList.replace('fa-angle-down', 'fa-angle-up');
    } else {
      icon.classList.replace('fa-angle-up', 'fa-angle-down');
    }
  }

  // side panel js 
  const [showInput, setShowInput] = useState(false);
  const dropdownRef = useRef(null);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowInput(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setShowInput(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);
  // ***************************************************************************************************
  const [showInputex, setShowInputex] = useState(false);
  const dropdownRefexchange = useRef(null);

  const toggleInputrates = () => {
    setShowInputex(!showInputex);
  };
  useEffect(() => {
    const handleClickOutsideexchange = (event) => {
      if (dropdownRefexchange.current && !dropdownRefexchange.current.contains(event.target)) {
        setShowInputex(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setShowInputex(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideexchange);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideexchange);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  // ******************************GENERATED WORD DOCSdoc********************************
  const [showInputdocexna, setShowInputdocexna] = useState(false);
  const dropdownRefdocexna = useRef(null);

  const toggleInputdocexna = () => {
    setShowInputdocexna(!showInputdocexna);
  };
  useEffect(() => {
    const handleClickOutsidedocexna = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowInputdocexna(false);
      }
    };
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setShowInputdocexna(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsidedocexna);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsidedocexna);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);



  // ************************************************************
  // ******************************************************************************************************

  const [showOptions, setShowOptions] = useState(false);
  const dropdownRefgenworddoc = useRef(null);


  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  useEffect(() => {
    const handleClickOutsidegenworddoc = (event) => {
      if (dropdownRefgenworddoc.current && !dropdownRefgenworddoc.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setShowOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutsidegenworddoc);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsidegenworddoc);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);
  //**************************************************** */ 
  const [showOptionspdf, setShowOptionspdf] = useState(false);
  const dropdownRefpdf = useRef(null);

  const toggleOptionspdf = () => {
    setShowOptionspdf(!showOptionspdf);
  };

  useEffect(() => {
    const handleClickOutsidepdf = (event) => {
      if (dropdownRefpdf.current && !dropdownRefpdf.current.contains(event.target)) {
        setShowOptionspdf(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setShowOptionspdf(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsidepdf);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsidepdf);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  //  *************************************************************/
  const [showOptionsdoctype, setShowOptionsdoctype] = useState(false);
  const [searchValueDropdown, setSearchValueDropdown] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showLabel, setShowLabel] = useState(true);
  const dropdownRefdoctype = useRef(null);

  const toggleOptionsdoctype = () => {
    setShowOptionsdoctype(!showOptionsdoctype);
  };

  const handleSearchChangeDropdown = (e) => {
    setSearchValueDropdown(e.target.value);
  };

  useEffect(() => {
    const handleClickOutsidedoctype = (event) => {
      if (dropdownRefdoctype.current && !dropdownRefdoctype.current.contains(event.target)) {
        setShowOptionsdoctype(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setShowOptionsdoctype(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsidedoctype);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsidedoctype);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const handleOptionClick = (option) => {
    //console.log(option);
    const isSelected = selectedOptions.some((item) => item.value === option);
    if (isSelected) {
      const select = selectedOptions.filter((item) => item.value !== option)
      setSelectedOptions(select);
      //setDisplayValuetemplatedoc(select[0].value);
    } else {
      const newOption = { id: Date.now(), value: option };
      //setDisplayValuetemplatedoc(newOption.value);
      setSelectedOptions([...selectedOptions, newOption]);
    }
  };

  const handleCancelClick = (id) => {
    setSelectedOptions(selectedOptions.filter((item) => item.id !== id));
    if (selectedOptions.length === 1) {
      setShowLabel(true);
      //setDisplayValuetemplatedoc('');
    }
  };

  useEffect(() => {
    if (selectedOptions.length > 0) {
      setDisplayValuetemplatedoc(selectedOptions[0].value);
    } else {
      setDisplayValuetemplatedoc('');
    }
  }, [selectedOptions])

  const fetchData = async () => {
    try {
      let response = await fetch('http://localhost:4001/api/doctype/get', {
        method: "GET",
      })
      const json = await response.json()
      if (json) {
        if (json.data.length > 0) {
          const data = (json.data.sort((a, b) => b.createdAt - a.createdAt)).filter(item => item.status === 'PUBLISHED')
          //console.log("data: ", data);
          setPublishedDoctype((data.map(item => item.doc_name)));
          setDataPublished(data);
        }
      }
    } catch (error) {
      console.error("Error: ", error)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const filteredOptions = publishedDoctye?.filter((option) =>
    option.toLowerCase().includes(searchValueDropdown.toLowerCase())
  );

  const selectedOptionText = selectedOptions.map((option) => option.value).join(', ');
  //console.log(selectedOptions);

  useEffect(() => {
    setShowLabel(selectedOptions.length === 0);
  }, [selectedOptions]);
  // side panel END


  // price model
  const [isDropdownOpenpricemodel, setDropdownOpenpricemodel] = useState(false);
  const [selectedpricemodel, setSelectedpricemodel] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRefpricemodel = useRef(null);

  const toggleDropdownpricemodel = () => {
    setDropdownOpenpricemodel(!isDropdownOpenpricemodel);
  };

  const handlepricemodelSelection = (pricemodel) => {
    setSelectedpricemodel(pricemodel);
    setDropdownOpenpricemodel(false);

  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSelectedpricemodel(value); // Open the dropdown when searching
  };

  const handleInputClickpricemodel = () => {
    if (isDropdownOpenpricemodel) {
      setDropdownOpenpricemodel(false);
    } else {
      setDropdownOpenpricemodel(true);
    }

  };

  const handleClickOutsidepricemodel = (e) => {
    if (
      dropdownRefpricemodel.current &&
      !dropdownRefpricemodel.current.contains(e.target) &&
      e.target.id !== 'sttogglepricemodel'
    ) {
      setDropdownOpenpricemodel(false);
    }
  };

  const filteredpricemodel = ['APPROVELS', 'SALES', 'BID TEAM MEMBER', 'MANAGEMENT', 'DELIVARY', 'DELIVARY OWNER', 'PRACTICE'].filter((pricemodel) =>
    pricemodel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutsidepricemodel);
    return () => {
      document.removeEventListener('click', handleClickOutsidepricemodel);
    };
  }, []);


  //  CATAGORY

  const [isDropdownOpencatagory, setDropdownOpencatagory] = useState(false);
  const [selectedcatagory, setSelectedcatagory] = useState('');
  const [searchTermcatagory, setsearchTermcatagorydop] = useState('');
  const dropdownRefcatagory = useRef(null);

  const toggleDropdowncatagory = () => {
    setDropdownOpencatagory(!isDropdownOpencatagory);
  };

  const handlecatagorySelection = (catagory) => {
    setSelectedcatagory(catagory);
    setDropdownOpencatagory(false);

  };

  const handleSearchcat = (e) => {
    const value = e.target.value;
    setsearchTermcatagorydop(value);
    setSelectedcatagory(value); // Open the dropdown when searching
  };

  const handleInputClickcatagory = () => {
    if (isDropdownOpencatagory) {
      setDropdownOpencatagory(false);
    } else {
      setDropdownOpencatagory(true);
    }

  };

  const handleClickOutsidecatagory = (e) => {
    if (
      dropdownRefcatagory.current &&
      !dropdownRefcatagory.current.contains(e.target) &&
      e.target.id !== 'sttogglecatagory'
    ) {
      setDropdownOpencatagory(false);
    }
  };

  const filteredcatagory = ['DBA', 'DSOM', 'DEFAULT', 'PEDUCATION', 'IZOT'].filter((catagory) =>
    catagory.toLowerCase().includes(searchTermcatagory.toLowerCase())
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutsidecatagory);
    return () => {
      document.removeEventListener('click', handleClickOutsidecatagory);
    };
  }, []);


  // STATUS

  const [isDropdownOpenstatus, setDropdownOpenstatus] = useState(false);
  const [selectedstatus, setSelectedstatus] = useState('');
  const [searchTermsstaus, setSearchTermstausdow] = useState('');
  const dropdownRefstatus = useRef(null);

  const toggleDropdownstatus = () => {
    setDropdownOpenstatus(!isDropdownOpenstatus);
  };

  const handlestatusSelection = (status) => {
    setSelectedstatus(status);
    setDropdownOpenstatus(false);

  };

  const handleSearchstatus = (e) => {
    const value = e.target.value;
    setSearchTermstausdow(value);
    setSelectedstatus(value); // Open the dropdown when searching
  };

  const handleInputClickstatus = () => {
    if (isDropdownOpenstatus) {
      setDropdownOpenstatus(false);
    } else {
      setDropdownOpenstatus(true);
    }

  };

  const handleClickOutsidestatus = (e) => {
    if (
      dropdownRefstatus.current &&
      !dropdownRefstatus.current.contains(e.target) &&
      e.target.id !== 'sttogglestatus'
    ) {
      setDropdownOpenstatus(false);
    }
  };

  const filteredstatus = ['INACTIVE', 'IN PROGRESS', 'PUBLISHED'].filter((status) =>
    status.toLowerCase().includes(searchTermsstaus.toLowerCase())
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutsidestatus);
    return () => {
      document.removeEventListener('click', handleClickOutsidestatus);
    };
  }, []);



  //  SALES ORG
  const [isDropdownOpensalesorg, setDropdownOpensalesorg] = useState(false);
  const [selectedsalesorg, setSelectedsalesorg] = useState('');
  const [searchTermssalesorg, setSearchTermsalesorg] = useState('');
  const dropdownRefsalesorg = useRef(null);

  const toggleDropdownsalesorg = () => {
    setDropdownOpensalesorg(!isDropdownOpensalesorg);
  };

  const handlesalesorgSelection = (salesorg) => {
    setSelectedsalesorg(salesorg);
    setDropdownOpensalesorg(false);
  };

  const handleSearchsalesorg = (e) => {
    const value = e.target.value;
    setSearchTermsalesorg(value);
    setSelectedsalesorg('');
  };

  const handleInputClicksalesorg = () => {
    if (isDropdownOpensalesorg) {
      setDropdownOpensalesorg(false);
    } else {
      setDropdownOpensalesorg(true);
    }
    setSearchTermsalesorg('');
  };

  const handleClickOutsidesalesorg = (e) => {
    if (
      dropdownRefsalesorg.current &&
      !dropdownRefsalesorg.current.contains(e.target)
    ) {
      setDropdownOpensalesorg(false);
    }
  };

  const filteredsalesorg = ['item1', 'item2', 'item3'].filter(
    (salesorg) =>
      salesorg.toLowerCase().includes(searchTermssalesorg.toLowerCase())
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutsidesalesorg);
    return () => {
      document.removeEventListener('click', handleClickOutsidesalesorg);
    };
  }, []);
  // *******************************error message *************************************************//

  const [dataTemplate, setdataTemplate] = useState([]);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    const length = String(dataTemplate.length + 1).padStart(3, '0');
    if (dataTemplate.length === 0) {
      setInputValue(length);
    } else {
      handleShow(dataTemplate[0])
    }
  }, [dataTemplate])

  //console.log(length);


  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value.trim();
    setInputValue(value);

    if (value === "") {
      setErrorMessageVisible(true);
    } else {
      setErrorMessageVisible(false);
    }
  };

  const [isDropdownOpensummery, setDropdownOpensummery] = useState(false);
  const [selectedsummery, setSelectedsummery] = useState("SUMMERY");
  const [searchTermssum, setSearchTermsumm] = useState("");
  const dropdownRefsummery = useRef(null);

  const toggleDropdownsummery = () => {
    setDropdownOpensummery(!isDropdownOpensummery);
  };

  const handlesummerySelection = (summery) => {
    setSelectedsummery(summery);
    setDropdownOpensummery(false);
  };

  const handleSearchsummerysummy = (e) => {
    const value = e.target.value;
    setSearchTermsumm(value);
    setSelectedsummery(value); // Open the dropdown when searching
  };

  const handleInputClicksummery = () => {
    setDropdownOpensummery(!isDropdownOpensummery);
  };

  const handleClickOutsidesummery = (e) => {
    if (
      dropdownRefsummery.current &&
      !dropdownRefsummery.current.contains(e.target) &&
      e.target.id !== "c"
    ) {
      setDropdownOpensummery(false);
    }
  };

  const filteredsummery = [
    "SUMMERY",
    "STAGES",
    "WEEK",
    "MONTHS",
    "YEARS",
    "CONTRACT YEARS",
  ].filter((summery) =>
    summery.toLowerCase().includes(searchTermssum.toLowerCase())
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutsidesummery);
    return () => {
      document.removeEventListener("click", handleClickOutsidesummery);
    };
  }, []);


  // ********************listing icon start*********************************************************************

  // Add a function to handle the toggling of showlisticonclick class
  const scrolllistingicon = () => {
    const amul = document.getElementById('Amul')
    const showlisticonclick = document.querySelector(".showlisticonclick");
    var notdis = document.getElementById('notdis');
    // notdis.style.display = 'none';
    if (showlisticonclick.style.display === 'none') {
      showlisticonclick.style.display = 'block';
      amul.style.display = 'none';
    }

  };



  // ***********************************************************************************************


  const toggleTempDetailspen = () => {
    const amul = document.getElementById('Amul')
    const showlisticonclick = document.querySelector(".showlisticonclick");
    var tempdeatails = document.querySelector(".tempdeatails");
    var notdis = document.getElementById('notdis');
    // notdis.style.display = 'none';
    if (amul.style.display === 'none') {
      amul.style.display = 'block';
      tempdeatails.style.display = '-37.8%'
      showlisticonclick.style.display = 'none';
    }


  }


  // *********************************************************************************************
  const [inputFields, setInputFields] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState();
  // const [showEditor, setShowEditor] = useState(false);
  const buttonRef = useRef();


  const handleAddField = () => {
    setInputFields([...inputFields, '']); // Add an empty field
    setHighlightedIndex(-1); // Reset the highlighted index
  };

  const handleToggleEditor = (index) => {
    if (highlightedIndex === index) {
      // If the editor is already highlighted, delete it
      handleDeleteField(index);
    } else {
      // Otherwise, highlight the editor
      setHighlightedIndex(index);
    }
  };

  const handleDeleteField = (index) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1); // Remove the editor content at the specified index
    setInputFields(newInputFields);
    setHighlightedIndex(-1); // Reset the highlighted index
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.classList.contains('deincatanew')) {
        setHighlightedIndex(-1); // Remove highlighting
        setShowEditor(false); // Hide the editor
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  // *******************************************editorRef***********************************************************
  // const [showEditor, setShowEditor] = useState(false);
  // // const [currentInputIndex, setCurrentInputIndex] = useState(null);
  // const editorRef = useRef(null);
  // const [editorStates, setEditorStates] = useState(inputFields.map(() => false)); // Array of editor visibility states
  // const toggleEditor = (index) => {
  //   const updatedStates = editorStates.map((state, i) => (i === index ? !state : state));
  //   setEditorStates(updatedStates);
  // };

  const [showEditor, setShowEditor] = useState(false);
  const [currentInputIndex, setCurrentInputIndex] = useState(null);
  const editorRef = useRef(null);
  const [editorStates, setEditorStates] = useState(inputFields.map(() => false)); // Array of editor visibility states
  const [activeEditorIndex, setActiveEditorIndex] = useState(null);
  const toggleEditor = (index) => {
    if (activeEditorIndex === index) {
      setActiveEditorIndex(null); // Close the active editor
    } else {
      setActiveEditorIndex(index); // Open the clicked editor
    }
  };

  const handleInputChangebtn = (e, index) => {
    setInputFields((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index] = e.target.value;
      return updatedFields;
    });

    setActiveEditorIndex(index); // Set active editor index based on the clicked input
  };

  const handleModelChange = (model, index) => {
    // Update the content of the editor at the specified index
    const newInputFields = [...inputFields];
    newInputFields[index] = model;
    setInputFields(newInputFields);
  };
  const editorConfig = {
    key: 'YOUR_FROALA_LICENSE_KEY',
    charCounterCount: false,
    toolbarInline: true,
    alwaysVisible: true,
    toolbarVisibleWithoutSelection: true,
    placeholderText: '',
    multiLine: true,
    align: 'left',
    pluginsEnabled: ['align'],
    toolbarButtons: [
      ['fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'bold', 'italic', 'underline',
        'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'align', 'alignLeft', 'alignCenter', 'alignRight',
        'insertLink', 'insertImage', 'table', 'specialCharacters', 'print', 'insertTable', 'clearFormatting', 'undo', 'redo',
        'html'
      ]

    ],
    events: {
      initialized: function () {
        // Adjust the height and width of the toolbar
        const toolbar = document.querySelector('.fr-toolbar');
        if (toolbar) {
          toolbar.style.height = '180px'; // Adjust the height as per your requirement
          toolbar.style.width = '360px';

          // Align text to the left
          const editor = this;
          editor.$el[0].setAttribute('style', 'text-align: left');
        }
      }
    }
  };


  const handleWindowClick = (e) => {
    // Check if the click occurred within the editor or the button; if so, do nothing
    if (editorRef.current && editorRef.current.contains(e.target)) {
      return;
    }

    // Close the editor by resetting the editorStates array
    setEditorStates(editorStates.map(() => false));
  };

  useEffect(() => {
    if (showEditor) {
      window.addEventListener('click', handleWindowClick);
    } else {
      window.removeEventListener('click', handleWindowClick);
    }

    // Clean up the event listener when the component unmounts or the editor is closed
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, [showEditor]);
  // poup*******************************************************************************************
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRefcatalogbtn = useRef(null);

  useEffect(() => {
    const handleOutsideClickcatalogbtn = (event) => {
      if (
        dropdownRefcatalogbtn.current &&
        !dropdownRefcatalogbtn.current.contains(event.target) &&
        !event.target.classList.contains('popup')
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClickcatalogbtn);

    return () => {
      window.removeEventListener('click', handleOutsideClickcatalogbtn);
    };
  }, []);

  const handleClickcatalogbtn = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };
  // *******************************************************************************************************

  // doctype dropdown 

  const [isDropdownOpentemplatedoc, setIsDropdownOpentemplatedoc] = useState(false);
  const [selectedOptiontemplatedoc, setSelectedOptiontemplatedoc] = useState('');
  const [searchValuetemplatedoc, setSearchValuetemplatedoc] = useState('');
  const [displayValuetemplatedoc, setDisplayValuetemplatedoc] = useState('');
  const dropdownReftemplate = useRef(null);
  const inputReftemplatedoc = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownElement = dropdownRef.current; // Use the correct ref name here
      const inputElement = inputReftemplatedoc.current;
      if (
        dropdownElement &&
        !dropdownElement.contains(event.target) &&
        inputElement &&
        !inputElement.contains(event.target)
      ) {
        setIsDropdownOpentemplatedoc(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const toggleDropdown = () => {
    setIsDropdownOpentemplatedoc(!isDropdownOpentemplatedoc);
  };

  const handleOptionSelect = (option) => {
    setSelectedOptiontemplatedoc(option);
    setIsDropdownOpentemplatedoc(false);
    setDisplayValuetemplatedoc(option);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValuetemplatedoc(value);
    setDisplayValuetemplatedoc(value);
  };

  const option = selectedOptions.map(item => item.value);
  // if (option.length > 0) {
  //   setDisplayValuetemplatedoc(option[0]);
  // }
  //console.log(option);
  const filteredOptiontemplatedoc = option?.filter((option) =>
    option.toLowerCase().includes(searchValuetemplatedoc.toLowerCase())
  );

  // ****************************************listing icon start*********************************************

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showInputField, setShowInputField] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const searchPopupRef = useRef();

  const handleInputChangePOPUP = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchQuery(inputValue);
    setSelectedOption('');

    // Show the dropdown when there is input
    if (inputValue.length > 0) {
      setShowInputField(true);
      setIsOptionSelected(false);
    } else {
      setShowInputField(false);
      setIsOptionSelected(false);
    }
  };

  const filterListItems = (listItems) => {
    return listItems.filter((item) =>
      item.toLowerCase().includes(searchQuery)
    );
  };

  function renderListItems(items) {
    return items.map((item, index) => (
      <li key={index} onClick={() => handleoptinsselectclick()}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">{item}</a>

      </li>
    ));
  }

  const handleoptinsselectclick = () => {
    setIsOptionSelected(true);
    setShowInputField(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchPopupRef.current &&
        !searchPopupRef.current.contains(event.target)
      ) {
        setIsOptionSelected(false);
        setShowInputField(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  // -------------------------------------------------------------------------------

  const optiondroppop = [];
  const [isOpenTemplate, setIsOpenTemplate] = useState(false);
  const [selectedOptionTemplate, setSelectedOptionTemplate] = useState('NO GROUPING');
  const [searchValueTemplate, setSearchValueTemplate] = useState('');
  const dropdownRefTemplate = useRef(null);

  const toggleDropdownTemplate = () => {
    setIsOpenTemplate(!isOpenTemplate);
  };

  const handleOptionSelectTemplate = (option) => {
    setSelectedOptionTemplate(option);
    setIsOpenTemplate(false);
  };

  // const handleSearchChangeTemplate = (e) => {
  //   const value = e.target.value;

  //   setSelectedOptionTemplate(value); // Set selectedOption to the search value
  // };

  const filteredOptionspopup = optiondroppop.filter((option) =>
    option.toLowerCase().includes(searchValueTemplate.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutsideTemplate = (event) => {
      if (dropdownRefTemplate.current && !dropdownRefTemplate.current.contains(event.target)) {
        setIsOpenTemplate(false);
      }
    }
    window.addEventListener('click', handleClickOutsideTemplate);
    return () => {
      window.removeEventListener('click', handleClickOutsideTemplate);
    };
  }, []);

  // ----------------------------------------------------------------------------------------
  const handleDownloadPdf = () => {
    // Create a new Blob object with the desired content (PDF file content)
    const pdfContent = 'binaryDataOfYourPdfFile'; // Replace with the actual binary data of your PDF file
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    // Create a temporary anchor element to trigger the download
    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(blob);
    anchor.download = 'document.pdf'; // Set the desired filename with the .pdf extension
    anchor.click();
    // Clean up the temporary anchor element
    URL.revokeObjectURL(anchor.href);
    anchor.remove();

  };
  // ************************************************************************************************
  // const handleDownloadWord = () => {
  //   // Get the content from Froala Editor
  //   const editorContent = inputFields.join('\n'); // Assuming inputFields is an array of editor content

  //   // Create a new Blob object with the editor content and set the MIME type to MS Word
  //   const blob = new Blob([editorContent], { type: 'application/msword' });

  //   // Create a temporary anchor element to trigger the download
  //   const anchor = document.createElement('a');
  //   anchor.href = URL.createObjectURL(blob);
  //   anchor.download = 'document.doc'; // Set the desired filename with the .doc extension
  //   anchor.click();

  //   // Clean up the temporary anchor element
  //   URL.revokeObjectURL(anchor.href);
  //   anchor.remove();
  // };

  const handleDownloadWord = () => {

    const { HEADER, FOOTER, otherData } = dataFromChild.reduce((acc, item) => {
      if (item.key === 'HEADER') {
        acc.HEADER = item.valueHtml;
      } else if (item.key === 'FOOTER') {
        acc.FOOTER = item.valueHtml;
      } else {
        //console.log(otherData);
        acc.otherData.push(item.valueHtml);
      }
      return acc;
    }, { otherData: [] });
    const combinedhtml = `
    <html>
      <head></head>
      <body>
        <div >
        ${HEADER || 'HEADER'}
        </div>
        <div >
          ${otherData.map(item => item)}
        </div>
        <div>
         ${FOOTER || 'FOOTER'}
        </div>
      </body>
    </html>
    `;
    console.log(combinedhtml);
    const docx = htmlDocx.asBlob(combinedhtml)
    // const docx = htmlDocx.asBlob(editorHtml);

    // // Save the DOCX document
    const fileName = 'generated-document.docx';
    saveAs(docx, fileName);
  }

  const handleClick = async () => {
    setshowtemplate(!showtemplate);
    document.getElementById('mainsidebar').style.display = showtemplate ? 'none' : 'block';
    if (showtemplate) {
      handleOpenClose();
    }
  }

  const handleOpenClosed = async () => {
    setrightSidebar(!rightSidebar)
  }

  const [selectedDoctype, setSelectedDoctye] = useState([]);
  const [templateId, setTemplateId] = useState(null);
  // const [filteredOptiontemplatedoc , setfilteredOptionTemplateDoc] = useState([]);

  const handleSelectedDoc = async () => {
    // const option = selectedOptions.map(item => item.value);
    // if (option.length > 0) {
    //   setDisplayValuetemplatedoc(option[0]);
    // }
    // const filtered = option.filter((option) =>
    //   option.toLowerCase().includes(searchValuetemplatedoc.toLowerCase())
    // );
    // setfilteredOptionTemplateDoc(filtered);
  }
  // console.log(filteredOptiontemplatedoc);
  //const [data, setData] = useState([]);

  const fetchTemplate = async () => {
    try {
      let response = await fetch('http://localhost:4001/api/template/get', {
        method: "GET",
      })
      const json = await response.json()
      if (json) {
        if (json.data.length > 0) {
          setdataTemplate(json.data);
          console.log(json.data);
          handleShow(json.data[0]);
        } else {
          console.log(json.data);
          setdataTemplate([]);
          setTemplateId(null)
        }
      }
    } catch (error) {
      console.error("Error: ", error)
    }
  }
  //console.log(data);

  useEffect(() => {
    fetchTemplate();
  }, []);

  const deleteTemplate = async () => {
    if (templateId) {
      try {
        const response = await fetch(`http://localhost:4001/api/template/delete/${templateId}`, {
          method: 'DELETE',
        })
        const res = response.json();
        console.log(res, response);
        if (response.status) {
          fetchTemplate();
        }
      } catch (err) {

      }
    } else {
      setInputValue('');
      setSelectedOptions([]);
    }
  }

  const submitTemplate = async () => {
    try {
      const formData = new FormData();
      const val = JSON.stringify(selectedOptions.map((item) => item.value));
      formData.append("quote_name", inputValue);
      formData.append('doctypeData', val)
      //console.log("formdata" , formData);  //it doesn't directly display values. it holds.
      for (const entry of formData.entries()) {
        console.log(entry);
      }
      //const response = "abc";
      const response = (templateId) ?
        await fetch(`http://localhost:4001/api/template/update/${templateId}`, {
          method: 'PUT',
          body: formData,
        }) :
        await fetch('http://localhost:4001/api/template/add', {
          method: 'POST',
          body: formData,
        })

      const res = response.json();
      console.log(res, response);
      if (response.status) {
        setInputValue("");
        setSelectedOptions([]);
        fetchTemplate();
      }
    } catch (err) {
      //console.log(err);
    }
  }

  //console.log(filteredOptions);

  //console.log(selectedOptionText, typeof selectedOptionText);


  useEffect(() => {
    if (displayValuetemplatedoc) {
      const sections = dataPublished.find(item => item.doc_name === displayValuetemplatedoc.toUpperCase());
      setDocTemplate(sections?.sections)
    }
  }, [displayValuetemplatedoc, dataPublished])

  // console.log(docTemplate);
  // console.log(docTemplate.map(item => item.section_name))

  // const handleDataFromChild = (data) => {
  //   // This function will receive data from the child component
  //   setDataFromChild(data);
  // };

  const [dataFromChild, setDataFromChild] = useState([]);

  // Define an array of callback functions, one for each item in dataArray

  // [ {key : 'header' value: <p><}, {}]
  // console.log("doc:", docTemplate)
  // console.log("child:", dataFromChild);
  const handleDataFromChildArray = (newData) => {
    if (newData) {
      if (dataFromChild.length > 0) {
        const index = dataFromChild.findIndex((item) => item.key === newData.key);
        const prevData = [...dataFromChild];
        if (index !== -1) {
          prevData[index] = newData;
          setDataFromChild([...prevData])
        } else {
          setDataFromChild([...prevData, newData]);
          //return [...prevData, newData];
        }
      } else {
        setDataFromChild([newData]);
      }
    }
  };

  const handleShow = (data) => {
    console.log(data);
    hideshowpblank();
    setInputValue(data.quote_name);
    setTemplateId(data.template_id);
    console.log(data.doctypeData, typeof JSON.parse(data.doctypeData), JSON.parse(data.doctypeData));
    const res = [];
    JSON.parse(data.doctypeData).map((item, index) => res.push({ value: item }))
    setSelectedOptions(res);
  }

  console.log(templateId);
  const handleTwoClick = () => {
    hideshowplusicon();
    const length = String(dataTemplate.length + 1).padStart(3, '0');
    setInputValue(length);
    setTemplateId(null);
    setSelectedOptions([]);
  }
  console.log(selectedOptions);

  return (
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
            <a href="" className="breadcrumbs--link breadcrumbs--link--active">TEMPLATES</a>
          </li>
          <ol style={{ float: 'right', listStyle: 'none' }}>
            <a href="#" className="breadcrumbs--link breadcrumbs--link--active">
              <i className="fa fa-pen" style={{ fontSize: '15px', marginRight: '10px' }} onClick={toggleTempDetailspen} /></a>
            <a
              href="#"
              className="breadcrumbs--link breadcrumbs--link--active scroll-icon"
              onClick={scrolllistingicon}
            >
              <i className="fa fa-scroll" style={{ fontSize: '15px', marginRight: '10px' }} />
            </a>

            <a href="#" className="breadcrumbs--link breadcrumbs--link--active" ><i className="fa fa-table" style={{ fontSize: '15px', marginRight: '10px' }} /></a>
          </ol>
        </ul>
        <hr className="hr" />
      </div>
      {/* -------------------------- */}
      <HelpRequest />
      <div className='rowtemplate'>
        <div id="xyz">
          <WriteFlexPeople compName="template" data={dataTemplate} handleShow={handleShow} />
        </div>
        <div id="hidetempluicon" style={{ display: 'none' }}>
          <div className="tempalte-dividewrite">
            <div className='tempmaindiv'>
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="newtemplateicon"
                id='faangletemplateleft' />
              <label id='newtwmplabel'> NEW TEMPLATE</label></div>
            <ul id="myMenuwrite">
              <span id="dotswrite">
                <li><a href="#">TEMPLATE</a></li>
                <li><a href="#">PREVIOUS QUOTE</a></li>
                <li id="tempblank" onClick={hideshowpblank}><a href="#">BLANK QUOTE  </a></li>
              </span>
            </ul>
          </div>
        </div>
        <div id="plusiconTempaltes">
          <i className="fa fa-plus" onClick={handleTwoClick} />
          {/* <i className="fa fa-plus" onClick={handleClick} /> */}
        </div>
        <div className='righttemplate'>
          <div id="headerTempaltes">  QUOTE TEMPLATE

            <div className='showlisticonclick' style={{ display: 'none' }}>
              <span className="pdfdow" onClick={handleDownloadPdf}>

                <i className="fa fa-file-pdf"></i>

                <span className="pdfdowlabel">GENERATE</span>

              </span>
              <span className='worddow' onClick={handleDownloadWord}>
                <i className="fa fa-file-word-o"></i>
                <span className='worddowlabel'>GENERATE</span>
              </span>

              <div>
                <label className='doclabel'>DOC TYPE</label>
                <input
                  className="templatedocinput"
                  type="text"
                  value={displayValuetemplatedoc}
                  onChange={handleSearchChange}
                  onClick={toggleDropdown}
                  ref={inputReftemplatedoc}
                />
                <i className={`fa fa-caret-${isDropdownOpentemplatedoc ? 'up' : 'down'}`}
                  onClick={toggleDropdown}
                  id="template"
                ></i>
                {isDropdownOpentemplatedoc && (
                  <ul className="ultemplate" ref={dropdownRef}>
                    {filteredOptiontemplatedoc.map((option) => (
                      <li key={option} onClick={() => handleOptionSelect(option)}>
                        {option}
                      </li>
                    ))}
                    {/* {selectedOptions.map((option, index) => (
                      <li key={index} onClick={() => handleOptionSelect(option.value)}>
                        {option.value}
                      </li>
                    ))} */}
                  </ul>
                )}
              </div>



              <div>
                {/* <div>
                  <div>
                    <span>HEADER</span>
                    {inputFields.map((field, index) => (
                      <div key={index}>
                        <div id='froala_delete'>
                          <button
                            id={`delete-button-${index}`}
                            className={`deincatanew ${highlightedIndex === index ? 'highlightedTemplate' : ''}`}
                          >
                            <i className="fa fa-trash" id='deleteFreoala' aria-hidden="true" onClick={(e) => {
                              e.stopPropagation(); 
                              handleToggleEditor(index);
                            }}></i>
                          </button>

                          <FroalaEditorComponent
                            tag="div"
                            config={editorConfig}
                            model={field}
                            onModelChange={(model) => handleModelChange(model, index)}
                            ref={editorRef}
                            id='froala_editorco'
                          />

                        </div>
                      </div>
                    ))}
                    <div>
                      <button className='catalogbtn' onClick={handleClickcatalogbtn}>+ FROM CATALOG</button>
                      <button className='newbtn' onClick={handleAddField}>+ NEW</button>
                    </div>
                  </div>
                </div> */}
                {docTemplate && docTemplate.length > 0 && docTemplate.map((template, index) => (
                  <div key={index} className="squarebox">
                    <span className="headerclass">
                      {template.section_name ? template.section_name.toUpperCase() : ''}
                    </span>
                    {/* <Doc /> */}
                    {template.section_name ?
                      <Doc keys={template.section_name} onDatafromChild={handleDataFromChildArray} /> : ''
                    }
                    {/* {inputFields.map((field, fieldIndex) => (
                      <div key={fieldIndex} style={{ position: 'relative' }}>
                        <input
                          // type="text"
                          className="inputtwobtn"
                          value={field}
                          onClick={() => toggleEditor(fieldIndex)}
                          onChange={(e) => handleInputChangebtn(e, fieldIndex)}
                        />
                        {activeEditorIndex === fieldIndex && (
                          <div
                            className="popup"
                            style={{
                              top: '1%',
                              left: 0,
                              width: '96%',
                            }}
                            onClick={() => toggleEditor(fieldIndex)}
                          >
                            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                              <FroalaEditorComponent
                                tag="div"
                                config={editorConfig}
                                // model={editorContentMap[template.section_name] || ''}
                                model={field}
                                onModelChange={model => handleModelChange(model, template.section_name)}
                              />
                            </div>
                          </div>
                        )}
                        <button
                          id={`delete-button-${fieldIndex}`}
                          className={`deincatanew ${highlightedIndex === fieldIndex ? 'highlightedTemplate' : ''}`}
                          onClick={() => handleDeleteField(fieldIndex)}
                        >
                          <i className="fa fa-trash-alt" id="deleteinput" aria-hidden="true"></i>
                        </button>
                      </div>
                    ))} */}

                    <div className="dddddddd">
                      <button className="catalogbtn" onClick={handleClickcatalogbtn}>
                        + FROM CATALOG
                      </button>
                      <button className="newbtn" onClick={handleAddField}>
                        + NEW
                      </button>
                    </div>
                  </div>
                ))}

                {/* <button className="sectionupdatebutton" onClick={updateContentInDB}>Update Content</button> */}
              </div>






              {isOpen && (
                <div className="backgroundOverlay"></div>
              )}
              {isOpen && (
                <div className={`popupcatalogbtn ${isOpen ? 'show' : ''}`}>
                  <h4 className="cataaddfromheader">ADD FROM CATALOG</h4>
                  <button className="closeiconpopup" onClick={handleClosePopup}>
                    <i className="fa fa-close"></i>
                  </button>
                  <div className='popupdropdown'>
                    <div input className="nogroupingpopdrop" ref={dropdownRefTemplate}>
                      <input
                        className={`groupingTemplateinput ${isOpenTemplate ? 'open' : ''}`}
                        type="text"
                        value={selectedOptionTemplate}
                        // onChange={handleSearchChangeTemplate}
                        onClick={toggleDropdownTemplate}
                      />
                      <FontAwesomeIcon
                        icon={isOpenTemplate ? faCaretUp : faCaretDown}
                        className="toggleIconTemplate" id="togglenogroupingTemplate"
                        onClick={toggleDropdownTemplate}
                      />
                      {isOpenTemplate && (
                        <ul id="groupingTemplatedropdown">
                          {filteredOptionspopup.map((option) => (
                            <li key={option} onClick={() => handleOptionSelectTemplate(option)}>
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                  </div>
                  <div className="searcdroppopup" ref={searchPopupRef}>
                    <i className="fa fa-search" id="searchpopup"></i>
                    <input
                      type="text"
                      className="inputsearchdoc"
                      value={searchQuery}
                      onChange={handleInputChangePOPUP}
                    />
                    <div className="dividepoupdrop">
                      <ul id="myMenulistdrop" onClick={handleoptinsselectclick}>
                        {renderListItems(
                          filterListItems([
                            'Framework SOW Appendix A',
                            'Framework SOW Appendix B',
                            'Framework SOW Appendix C',
                            'Framework SOW Appendix D',
                            'Framework SOW Appendix E',
                          ])
                        )}
                      </ul>
                    </div>
                  </div>

                  {showInputField && isOptionSelected && (
                    <div className="inputFieldWithScrollbar">
                      <textarea className="scrollableInput" />
                    </div>
                  )}
                  <div className="btnspopup">
                    <button id="deletpopup">
                      CANCEL
                    </button>
                    <button id="ADDpopup">
                      ADD
                    </button>
                  </div>

                </div>
              )}
            </div>

          </div>
          {/* {!showtemplate && */}
            {/* <div id="notdis">NO TEMPLATE FOUND PLEASE CLICK + TO ADD NEW TEMPLATE</div> */}
          {/* } */}
          <div id="Amul" style={{ display: 'none' }} >

            <div className="tempdeatails" >
              <button type="button" className="tempbttn" id="clickmetemp">
                <span id="saa" className="fa fa-angle-down" onClick={myFunctiontemp} /></button>
              <div id="quotempid" className="">
                <div className="templeft">
                  <div className="containertemp1">
                    <div id="contenttemp1">
                      <input
                        id="tempinputleft1"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                      <label id="templabel1" className="active">
                        QUOTE NAME
                      </label>
                      <div
                        id="error-message"
                        style={{ color: "red", display: errorMessageVisible ? "block" : "none" }}
                      >
                        This field is required.
                      </div>
                    </div>
                    <div id="contenttemp2" ref={dropdownRefpricemodel}>
                      <input
                        className="tempinputleft2"
                        type="text"

                        value={selectedpricemodel || searchTerm} // Display the selected pricemodel or the search term in the input field
                        onChange={handleSearch}
                        onClick={handleInputClickpricemodel}
                      />
                      <label id="templabel2">PRICE MODEL</label>
                      <FontAwesomeIcon
                        icon={isDropdownOpenpricemodel ? faCaretUp : faCaretDown}
                        className="pricemodeltoggle"
                        id="sttogglepricemodel"
                        onClick={toggleDropdownpricemodel}
                      />
                      <ul
                        id="pricemodellist"
                        ref={dropdownRefpricemodel}
                        style={{ display: isDropdownOpenpricemodel ? 'block' : 'none' }}
                      >
                        {filteredpricemodel.map((pricemodel, index) => (
                          <li key={index} onClick={() => handlepricemodelSelection(pricemodel)}>
                            {pricemodel}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="containertemp2">

                    <div id="contentdownb1" ref={dropdownRefcatagory}>
                      <input
                        className="tempinputdownv1"
                        type="text"

                        value={selectedcatagory || searchTermcatagory} // Display the selected cataory or the search term in the input field
                        onChange={handleSearchcat}
                        onClick={handleInputClickcatagory}
                      />
                      <label id="tempdownlabelv1">CATAGORY</label>
                      <FontAwesomeIcon
                        icon={isDropdownOpencatagory ? faCaretUp : faCaretDown}
                        className="catagoryltoggle"
                        id="sttogglecatagory"
                        onClick={toggleDropdowncatagory}
                      />
                      <ul
                        id="catagorylist"
                        ref={dropdownRefcatagory}
                        style={{ display: isDropdownOpencatagory ? 'block' : 'none' }}
                      >
                        {filteredcatagory.map((catagory, index) => (
                          <li key={index} onClick={() => handlecatagorySelection(catagory)}>
                            {catagory}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div id="contentdownb2" ref={dropdownRefstatus}>
                      <input
                        className="tempinputdownv2"
                        type="text"

                        value={selectedstatus || searchTerm} // Display the selected status or the search term in the input field
                        onChange={handleSearchstatus}
                        onClick={handleInputClickstatus}
                      />
                      <label id="tempdownlabelv2">STATUS</label>
                      <FontAwesomeIcon
                        icon={isDropdownOpenstatus ? faCaretUp : faCaretDown}
                        className="statustoggle"
                        id="sttogglestatus"
                        onClick={toggleDropdownstatus}
                      />
                      <ul
                        id="statuslist"
                        ref={dropdownRefstatus}
                        style={{ display: isDropdownOpenstatus ? 'block' : 'none' }}
                      >
                        {filteredstatus.map((status, index) => (
                          <li key={index} onClick={() => handlestatusSelection(status)}>
                            {status}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div id="contentdownb3" ref={dropdownRefsalesorg}>
                      <input
                        className="tempinputdownv3"
                        type="text"
                        value={selectedsalesorg || searchTermssalesorg}
                        onChange={handleSearchsalesorg}
                        onClick={handleInputClicksalesorg}
                      />
                      <label id="tempdownlabelv3">SALES ORG</label>
                      <FontAwesomeIcon
                        icon={isDropdownOpensalesorg ? faCaretUp : faCaretDown}
                        className="salesorgtoggle"
                        id="sttogglesalesorg"
                        onClick={toggleDropdownsalesorg}
                      />
                      <ul
                        id="salesorglist"
                        ref={dropdownRefsalesorg}
                        style={{ display: isDropdownOpensalesorg ? 'block' : 'none' }}
                      >
                        {filteredsalesorg.map((salesorg, index) => (
                          <li key={index} onClick={() => handlesalesorgSelection(salesorg)}>
                            {salesorg}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div id="contentdownb4">
                      <input id="tempinputdownv4" type="text" placeholder />
                      <label id="tempdownlabelv4">CURRENCY</label>
                    </div>
                  </div>
                </div>
                {/* temprigth */}
                <div className="tempright">
                  <div className="containerquote1">
                    <div id="contentquote1">
                      <input className type="number" />
                      <label>LIST PRICE</label>
                    </div>
                    <div id="contentquote2">
                      <input className type="number" placeholder />
                      <label>DISCOUNT</label>
                    </div>
                    <div id="contentquote3">
                      <input className type="number" placeholder />
                      <label>NET PRICE</label>
                    </div>
                  </div>
                  <div className="containerqoute2">
                    <div id="contentquoteb1">
                      <input className type="number" />
                      <label>EXPENSES</label>
                    </div>
                    <div id="contentquoteb2">
                      <input className type="number" placeholder />
                      <label>MARGIN</label>
                    </div>
                    <div id="contentquoteb3">
                      <input className type="number" placeholder />
                      <label>COST</label>
                    </div>
                  </div>
                </div>
                <div id="contentqtemp">
                  <textarea name id cols rows defaultValue={""} />
                  <label>DESCRIPTION</label>
                </div>
                <div className='button-template'>
                  <button
                    id="dele-button"
                    style={{ color: 'green', border: '2px solid green' }}
                    onClick={submitTemplate}
                  >
                    ADD TEMPLATE
                  </button>
                  <button id="dele-button" onClick={deleteTemplate}>DELETE TEMPLATE</button>
                </div>

              </div> {/* ending */}
              <div id="contentsum" style={{ marginTop: '20px' }} ref={dropdownRefsummery}>
                <input
                  className="tempinputsum"
                  type="text"
                  value={selectedsummery || searchTermssum}
                  onChange={handleSearchsummerysummy}
                  onClick={handleInputClicksummery}
                />
                <FontAwesomeIcon
                  icon={isDropdownOpensummery ? faCaretUp : faCaretDown}
                  className="summerytoggle"
                  id="sttogglesummery"
                  onClick={toggleDropdownsummery}
                />
                <ul
                  id="summerylist"
                  ref={dropdownRefsummery}
                  style={{ display: isDropdownOpensummery ? "block" : "none" }}
                >
                  {filteredsummery.map((summery, index) => (
                    <li key={index} onClick={() => handlesummerySelection(summery)}>
                      {summery}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
          {/* } */}
        </div>
        {/* side panel start */}

        <div className="slide">
          {/* {rightSidebar ? */}
          <div id="mySidebar" className="sidebar1">
            {/* <a href="javascript:void(0)" >x</a> */}
            <div className='exterRef'>
              <button className="dropbtER" id="sidetoggER" onClick={toggleInput}>
                EXTERNAL REFERENCE
                <i
                  className={`fa ${showInput ? 'fa-angle-up' : 'fa-angle-down'}`}
                  style={{ color: 'black', fontSize: '12px', float: 'right' }}
                />
              </button>
              <div className='inputdivexfe' ref={dropdownRef}>
                {showInput && (
                  <div>
                    <input type='text' className='inputextref' id="inputExtRef" placeholder='External Reference Id' />
                    <label htmlFor="inputExtRef" id='Llaexre'>EXTERNAL REFERENCE ID</label>
                  </div>
                )}
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

            {/* exchange rates start ********************************************************************************/}
            <div className='exchrates'>
              <button className="dropdownbtnexterref" id="sidetoggle3externalref" onClick={toggleInputrates}>
                EXCHANGE RATES
                <i className={`fa ${showInputex ? 'fa-angle-up' : 'fa-angle-down'}`} style={{ color: 'black', fontSize: '12px', float: 'right' }} />
              </button>
              <div className='inputdivexchange' ref={dropdownRefexchange}>
                {showInputex && (
                  <div>

                    <ul className='noavexra'>
                      <li id="noavlabellist">NO AVAILABLE EXCHANGE RATES</li>
                    </ul>

                  </div>
                )}
              </div>
            </div>
            {/* exchange rates start ****************************************************************************/}
            {/* Rest of the code */}
            <div className="docTy">
              <button className="dropdownbtndocty" id="sidetoggledocty" onClick={toggleOptionsdoctype}>
                DOCTYPES
                <i
                  className={`fa ${showOptionsdoctype ? 'fa-angle-up' : 'fa-angle-down'}`}
                  style={{ color: 'black', fontSize: '12px', float: 'right' }}
                />
              </button>
              <div className="inputdivedoctype" ref={dropdownRefdoctype}>
                {showOptionsdoctype && (
                  <div className="dropdownoptionsdoc">
                    {showLabel && <label htmlFor="dropdowninputdoctype">ALL</label>}
                    <i
                      className={`fa ${showOptionsdoctype ? 'fa-angle-up' : 'fa-angle-down'}`}
                      id="angldoctoggle"
                    />
                    <input
                      type="text"
                      id="dropdowninputdoctype"

                      value={selectedOptionText}
                      onChange={() => { }}
                    />
                    <ul className="Dropdoctype">
                      <input
                        className="serchdocype"
                        type="search"
                        placeholder="Search"
                        value={searchValueDropdown}
                        onChange={handleSearchChangeDropdown}
                        hidden
                      />
                      {filteredOptions.map((option, index) => (
                        <li
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className={selectedOptions.some((item) => item.value === option) ? 'selected' : ''}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                    <ul className="selected-options">
                      {selectedOptions.map((selectedOption) => (
                        <li key={selectedOption.id} className="selected-option">
                          {selectedOption.value}
                          <button
                            className="cancel-button"
                            onClick={() => handleCancelClick(selectedOption.id)}
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {/* Rest of the code */}
            <div className='docexpnmae'>
              <button className="dropdownbtndocexpname" id="sidetoggledocexpname" onClick={toggleInputdocexna}>
                DOCUMENT EXPORT NAME
                <i className={`fa ${showInputdocexna ? 'fa-angle-up' : 'fa-angle-down'}`} style={{ color: 'black', fontSize: '12px', float: 'right' }} />
              </button>
              <div className='inputdivexfedxn' ref={dropdownRefdocexna}>
                {showInputdocexna && (
                  <div>
                    <input type='text' className='docexpnameinput' id='docexpnameinput' />
                    <label htmlFor='docexpnameinput' id='docexpnamelabel'>DOCUMENT EXPORT NAME</label>
                  </div>
                )}
              </div>
            </div>
            {/* GENERATED WORD DOCS start */}
            <div className='genwordoc'>
              <button className="dropdownbgenwordoc" id="sidetogglegenwordoc" onClick={toggleOptions}>
                GENERATED WORD DOCS
                <i className={`fa ${showOptions ? 'fa-angle-up' : 'fa-angle-down'}`} style={{ color: 'black', fontSize: '12px', float: 'right' }} />
              </button>
              <div className='inputdivexfegenworddoc' ref={dropdownRefgenworddoc}>
                {showOptions ? (
                  <>
                    <div className="dropdown-optionsTemplates">
                      {/* Render your dropdown options here */}
                      <ul className='ulgewodo'>
                        <li>THERE ARE NO GENERATED DOCUMENTS YET</li></ul>
                    </div>
                  </>
                ) : null}

              </div>
            </div>
            {/* GENERATED WORD DOCS start */}
            {/* geerated pdf code start */}
            <div className='genPdf'>
              <button className="dropdownbtngenpdf" id="sidetogglegenpfd" onClick={toggleOptionspdf}>
                GENERATED PDF
                <i className={`fa ${showOptionspdf ? 'fa-angle-up' : 'fa-angle-down'}`} style={{ color: 'black', fontSize: '12px', float: 'right' }} />
              </button>
              <div className='inputdivexfepdf' ref={dropdownRefpdf}>
                {showOptionspdf ? (
                  <div className="dropdown-optionspdf">
                    {/* Render your dropdown options here */}
                    <ul className='drolisttharnogedoyet'>
                      <li id='tharnogedote'>THERE ARE NO GENERATED DOCUMENTS YET</li>
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
            {/* <div className='div-save'>
              <button className='button-save' onClick={handleSelectedDoc}> SAVE</button>
            </div> */}
            {/* geerated pdf code start end*/}
          </div>
          {/* } */}

          <div>
            <button id="mainsidebar" className="openbtnact" style={{ display: 'none' }} onClick={handleOpenClose}>
              <i className="fa-light fa-less-than" style={{ fontSize: '14px' }} />
            </button>
          </div>
        </div>
      </div>

      {/* side panel end */}
    </div>

  )
}


export function hideshowplusicon() {

  var div = document.getElementById("hidetempluicon");
  var notdis = document.getElementById('notdis');
  // notdis.style.display = 'block';

  const blocked = document.getElementById("xyz");
  blocked.style.display = "none";

  const vani = document.getElementById("plusiconTempaltes");
  vani.style.display = "none";

  const amulnone = document.getElementById("Amul");
  amulnone.style.display = "none";


  var headerTempaltes = document.getElementById("headerTempaltes")
  if (div.style.display === "none") {

    div.style.display = "block";
    headerTempaltes.style.marginLeft = '-37.7%';
    // notdis.style.display = "none";

  } else {

    div.style.display = "none";
    headerTempaltes.style.marginLeft = '21.3%';
    // notdis.style.display = "block";
  }
  var sidepnl = document.getElementById('mainsidebar');
  if (sidepnl.style.display === 'block') {
    sidepnl.style.display = 'none';

  } else {
    sidepnl.style.display = 'block';

  }
}

export function hideshowpblank() {
  var teplatehidenone = document.getElementById("Amul");
  teplatehidenone.style.display = "none";

  var showlisticonclick = document.querySelector(".showlisticonclick");
  showlisticonclick.style.display = 'none';
  var headerTempaltes = document.getElementById("headerTempaltes");
  headerTempaltes.style.marginLeft = '0.3%';

  const blocked1 = document.getElementById("xyz");
  blocked1.style.display = "block";

  var div1 = document.getElementById("hidetempluicon");
  div1.style.display = "none";

  const vanitha = document.getElementById("plusiconTempaltes");
  vanitha.style.display = "block";

  var sidepnl = document.getElementById('mainsidebar');
  sidepnl.style.display = 'block';


  teplatehidenone.style.display = "block";
  if (teplatehidenone.style.display === "block") {
    teplatehidenone.style.display = "block";

  } else {
    teplatehidenone.style.display = "none";

  }

}
// Initialize Flatpickr on the "START DATE" input field

// js listing search
// listing icon js start
export default Templates;