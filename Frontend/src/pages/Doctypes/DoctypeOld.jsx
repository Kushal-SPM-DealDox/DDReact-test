import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar'
import "../Doctypes/Doctypes.css"
//import WriteFlexGroup from '../../components/WriteflexGroup';
import WriteFlexPeople from '../../components/WriteflexPeople';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faClone, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import CatalogSidebar from '../../components/CatalogSidebar';

const Doctypes = () => {
      const [sections, setSections] = useState([]);
      // ropdown

      // upload file
      const [uploadedFileName, setUploadedFileName] = useState('');
      const [showDownloadCancel, setShowDownloadCancel] = useState(false);

      // error msg for template name 
      const [fileTypeError, setFileTypeError] = useState(false);
      const [unsupportedTagsError, setUnsupportedTagsError] = useState(false);

      // watermark file 
      const [uploadedWatermarkFileName, setUploadedWatermarkFileName] = useState('');
      const [showWatermarkDownloadCancel, setShowWatermarkDownloadCancel] = useState(false);

      // error msg 
      const [sectionErrors, setSectionErrors] = useState([]);

      // error msg for documentname
      const [documentName, setDocumentName] = useState('');
      const [documentNameError, setDocumentNameError] = useState(false);
      const [showLabel, setShowLabel] = useState(true);

      // papersizelist start
      const papersizeListRef = useRef(null);
      const papersizeInputRef = useRef(null);
      const iconRef = useRef(null);

      //   dropdown for catelog cateagary
      const [isDropdownOpen, setDropdownOpen] = useState(false);
      const [searchTerm, setSearchTerm] = useState('');
      const [filteredOptions, setFilteredOptions] = useState([]);

      const dropdownRef = useRef(null);
      const buttonRef = useRef(null);
      const [selectedButton, setSelectedButton] = useState(null);

      const [data, setData] = useState([]);
      const [formData, setFormData] = useState({});
      const [writeFormData, setWriteFormData] = useState(false);

      useEffect(() => {
            setFormData({
                  "watermark_file": uploadedWatermarkFileName
            })
      }, [uploadedWatermarkFileName])
      console.log("formData : ", formData);

      const handleShow = (datas) => {

            // const reader = new FileReader();
            // reader.onload = (event) => {
            //       setFileContent(event.target.result);
            // };

            setWriteFormData(true);
            setFormData(datas);

            setUploadedWatermarkFileName(datas.watermark_file);
            setShowWatermarkDownloadCancel(true);


      }

      const fetchData = async () => {
            try {
                  let response = await fetch('http://localhost:4001/api/doctype/get', {
                        method: "GET",
                  })
                  const json = await response.json()
                  if (json) {
                        setData(json.data);
                        // if (json.data.length > 0) handleShow(json.data[0])
                  }
            } catch (error) {
                  console.error("Error: ", error)
            }
      }

      useEffect(() => {
            fetchData();
      }, []);

      /*--------------------------------------------------------------------------------------------*/

      const [textFields, setTextFields] = useState({
            doc_name: '',
            category: '',
            status: '',
            purpose: '',
            paper_size: '',
            watermark: false,
            toc: false,
            sections: [],
      });

      const [section, setSection] = useState({
            section_name: '',
            section_tag: '',
      });

      const [fileFields, setFileFields] = useState({
            template_file: null,
            watermark_file: null,
      });

      const [fetchedData, setFetchedData] = useState({
            doc_name: '',
            category: '',
            status: '',
            purpose: '',
            paper_size: '',
            watermark: false,
            toc: false,
            sections: [],
            template_file: null,
            watermark_file: null,
      });

      // Fetch data when the component mounts
      useEffect(() => {
            fetchDataAPI();
      }, []);

      const fetchDataAPI = async () => {
            try {
                  //const response = await axios.get('API_URL');
                  const response = await fetch('http://localhost:4001/api/doctype/get', {
                        method: "GET",
                  })
                  const json = await response.json()
                  if (json) {
                        setFetchedData(response.data);
                        // if (json.data.length > 0) handleShow(json.data[0])
                  }
                  //setFetchedData(response.data);
            } catch (error) {
                  console.error('Error fetching data:', error);
            }
      };

      const handleTextChange = (event) => {
            const { name, value } = event.target;
            setTextFields((prevFields) => ({
                  ...prevFields,
                  [name]: value,
            }));
      };

      const handleFileChange = (event) => {
            const { name, files } = event.target;
            setFileFields((prevFields) => ({
                  ...prevFields,
                  [name]: files[0],
            }));
      };

      /*----------------------------------------------------------------------------*/

      const handleDocumentNameChange = (event) => {
            const value = event.target.value.trim();
            setDocumentName(value);

            // Perform validation logic here
            const outtline = event.target;
            if (value === '') {
                  setDocumentNameError(true);
                  outtline.style.outlineColor = 'red';
            } else {
                  setDocumentNameError(false);
                  outtline.style.outlineColor = '#0f6b93';
            }

            setShowLabel(value !== ''); // Show label when there is a value
      };

      const handleEditClick = () => {
            // Handle edit click event here
      };

      // papersizelist start
      const handlepapersizeClick = () => {
            const papersizeList = papersizeListRef.current;
            const papersizeInput = papersizeInputRef.current;
            const icon = iconRef.current;
            papersizeList.style.display = papersizeList.style.display === 'none' ? 'block' : 'none';

            // Toggle icon
            icon.classList.toggle('fa-caret-down');
            icon.classList.toggle('fa-caret-up');
      };

      useEffect(() => {
            const handlepapersizeItemClick = (event) => {
                  const selectedpapersize = event.target.textContent;
                  const papersizeInput = papersizeInputRef.current;
                  const papersizeList = papersizeListRef.current;

                  papersizeInput.value = selectedpapersize;
                  papersizeList.style.display = 'none';
            };

            const handlepapersizeInput = () => {
                  const filter = papersizeInputRef.current.value.toUpperCase();
                  const papersizelistItems = papersizeListRef.current.querySelectorAll('li');

                  papersizelistItems.forEach((item) => {
                        const text = item.textContent.toUpperCase();
                        if (text.indexOf(filter) > -1) {
                              item.style.display = '';
                        } else {
                              item.style.display = 'none';
                        }
                  });
            };

            const handlepapersizeInputKeydown = (event) => {
                  if (event.keyCode === 13) {
                        const visibleItem = papersizeListRef.current.querySelector("li:not([style*='display: none'])");
                        if (visibleItem) {
                              papersizeInputRef.current.value = visibleItem.textContent;
                              papersizeListRef.current.style.display = 'none';
                        }
                  }
            };

            // const handlePaperOutsideClick = (event) => {
            //       const papersizeInput = papersizeInputRef.current;
            //       const papersizeList = papersizeListRef.current;

            //       if (!papersizeInput.contains(event.target)) {
            //             papersizeList.style.display = 'none';
            //       }
            // };

            // Set default value
            papersizeInputRef.current.value = 'INHERIT FROM WORD TEMPLATE';

            // Attach event listeners
            papersizeInputRef.current.addEventListener('input', handlepapersizeInput);
            papersizeInputRef.current.addEventListener('keydown', handlepapersizeInputKeydown);
            // window.addEventListener('click', handlePaperOutsideClick);

            const papersizeListItems = papersizeListRef.current.querySelectorAll('li');
            papersizeListItems.forEach((item) => {
                  item.addEventListener('click', handlepapersizeItemClick);
            });

            // Clean up event listeners
            return () => {
                  papersizeInputRef.current.removeEventListener('input', handlepapersizeInput);
                  papersizeInputRef.current.removeEventListener('keydown', handlepapersizeInputKeydown);
                  // window.removeEventListener('click', handlePaperOutsideClick);

                  papersizeListItems.forEach((item) => {
                        item.removeEventListener('click', handlepapersizeItemClick);
                  });
            };
      }, []);


      //   dropdown for catelog cateagary
      //   const [sections, setSections] = useState([...]); // Your sections data

      const [isDropdownOpen1, setIsDropdownOpen] = useState(false);

      const toggleDropdown1 = () => {
            setIsDropdownOpen(!isDropdownOpen);
      };

      // dropdowns 
      const addSection = () => {
            setSections([...sections, { id: Date.now() }]);

      };

      const removeSection = (id) => {
            setSections(sections.filter((section) => section.id !== id));
      };

      const handleButtonClick = (id) => {
            const button = document.getElementById(`delete-button-${id}`);

            if (button && button.classList.contains('highlightedsection')) {
                  // Second click, remove section
                  removeSection(id);
                  setSelectedButton(null); // Clear selected button state
            } else {
                  // First click, highlight button
                  setSelectedButton(id);
            }
      };


      const handleClickOutside = (event) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                  setSelectedButton(null); // Clear selected button state
            }
      };

      useEffect(() => {
            // Add event listener when component mounts
            window.addEventListener('click', handleClickOutside);

            // Clean up event listener when component unmounts
            return () => {
                  window.removeEventListener('click', handleClickOutside);
            };
      }, []);

      const handleCopy = (value) => {
            // Copy the value to clipboard

            navigator.clipboard.writeText(value);
            // Show some notification or feedback to the user
            console.log('Copied to clipboard:', value);
      };

      //   dropdown for catelog cateagary end
      const toggleDropdown = () => {
            setDropdownOpen(!isDropdownOpen);
      };

      const handleSearchChange = (event) => {
            setSearchTerm(event.target.value);
      };

      useEffect(() => {
            const handleOutsideClick = (event) => {
                  if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setDropdownOpen(false);
                  }
            };

            window.addEventListener('click', handleOutsideClick);

            return () => {
                  window.removeEventListener('click', handleOutsideClick);
            };
      }, []);

      const [selectedOption, setSelectedOption] = useState('');

      useEffect(() => {
            // Filter options based on the search term
            const filtered = options.filter((option) =>
                  option.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredOptions(filtered);
      }, [searchTerm]);

      const handleSelectOption = (option) => {
            setSearchTerm(option);
            setSelectedOption(option);
            setDropdownOpen(false);
      };


      const handleCancelcatalog = () => {
            setSelectedOption('');
            setSearchTerm('');
      };

      const options = ['DBA', 'DSOM', 'DEFAULT', 'EDUCATION', 'IZOT'];

      // move up move down
      const handleMoveUp = (id) => {
            const index = sections.findIndex((section) => section.id === id);
            if (index > 0) {
                  const updatedSections = [...sections];
                  const currentSection = updatedSections[index];
                  const previousSection = updatedSections[index - 1];
                  updatedSections[index] = previousSection;
                  updatedSections[index - 1] = currentSection;
                  setSections(updatedSections);
            }
      };

      const handleMoveDown = (id) => {
            const index = sections.findIndex((section) => section.id === id);
            if (index < sections.length - 1) {
                  const updatedSections = [...sections];

                  // Swap the current section with the next section
                  [updatedSections[index], updatedSections[index + 1]] = [updatedSections[index + 1], updatedSections[index]];
                  setSections(updatedSections);
            }
      };

      // upload file download cancel
      const handleUpload = (event) => {
            const file = event.target.files[0];
            const fileName = file.name.toLowerCase();
            const extension = fileName.split('.').pop();

            if (extension === 'doc' || extension === 'docx') {
                  setUploadedFileName(fileName);
                  setShowDownloadCancel(true);
                  setFileTypeError(false); // Reset the fileTypeError if previously set
                  setUnsupportedTagsError(checkForUnsupportedTags(file)); // Check for unsupported tags
            } else {
                  setFileTypeError(true);
                  setUnsupportedTagsError(false); // Reset the unsupportedTagsError if previously set
                  setUploadedFileName('');
                  setShowDownloadCancel(false);
            }
      };

      const checkForUnsupportedTags = (file) => {
            // Perform your logic to check for unsupported tags in the file
            // Return true if unsupported tags are found, otherwise return false

            // For example, let's assume the unsupported tag is "<unsupported>"
            const content = ""; // Retrieve the content of the file
            if (content.includes("<unsupported>")) {
                  return true;
            }
            return false;
      };

      const handleDownload = () => {
            // Create a download link for the uploaded file
            const link = document.createElement('a');
            link.href = URL.createObjectURL(new Blob([], { type: 'application/msword' }));
            link.download = uploadedFileName;
            link.click();
      };

      const handleCancel = () => {
            setSearchTerm('');
            setUploadedFileName('');
            setShowDownloadCancel(false);
      };
      //     watermark file 
      const handleWatermarkUpload = (event) => {
            const file = event.target.files[0];
            const fileName = file.name.toLowerCase();
            const extension = fileName.split('.').pop();

            if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
                  setUploadedWatermarkFileName(fileName);
                  setShowWatermarkDownloadCancel(true);
            } else {
                  console.log('Invalid file format. Only JPG and PNG images are allowed.');
            }
      };
      const handleWatermarkDownload = () => {
            // Create a download link for the uploaded watermark file
            const link = document.createElement('a');
            link.href = URL.createObjectURL(new Blob([], { type: 'image/*' }));
            link.download = uploadedWatermarkFileName;
            link.click();
      };

      const handleWatermarkCancel = () => {
            setUploadedWatermarkFileName('');
            setShowWatermarkDownloadCancel(false);
      };


      //   section msg error 
      const handleSectionNameChange = (event, index) => {
            const value = event.target.value;
            const updatedErrors = [...sectionErrors];

            // Update the value of textsection2
            const updatedSections = [...sections];
            updatedSections[index].textsection2 = value;
            setSections(updatedSections);

            // Update the value of textsection3
            const textsection3 = `SECTION_${value}`;
            document.getElementById(`textsection3`).value = textsection3;

            // Perform your validation logic here
            const outline = event.target;
            if (value.trim() === '') {
                  updatedErrors[index] = 'SECTION NAME MAY NOT BE EMPTY';
                  outline.style.outlineColor = 'red';
            } else {
                  updatedErrors[index] = '';
                  outline.style.outlineColor = '#0f6b93';
            }
            setSectionErrors(updatedErrors);
      };

      const handleDownloadClick = () => {
            // Set the desired content for the Word document
            // Create a new Blob object with the desired content (e.g., Word document content)
            const wordContent = "This is the content of the Word file.";
            const blob = new Blob([wordContent], { type: 'application/msword' });

            // Create a temporary anchor element to trigger the download
            const anchor = document.createElement('a');
            anchor.href = URL.createObjectURL(blob);
            anchor.download = 'document.doc'; // Set the desired filename with the .doc extension
            anchor.click();

            // Clean up the temporary anchor element
            URL.revokeObjectURL(anchor.href);
            anchor.remove();
      };

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
                                    <a href='/catalog' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>CATALOG</a>
                              </li>
                              <li className="breadcrumbs--item">
                                    <a href="" className="breadcrumbs--link breadcrumbs--link--active">DOCTYPES</a>
                              </li>
                        </ul>
                        <hr className="hr" />
                  </div>

                  {/* -------------------------- */}

                  <div className='rowdoctypes'>
                        {/* <WriteFlexGroup /> */}
                        <WriteFlexPeople compName="doctypes" data={data} handleShow={handleShow} />
                        <div className="plusiconDoctype">
                              <i className="fa fa-plus" onClick={hideshowplusicon} />
                        </div>
                  </div>
                  <div className="rightDoctype">
                        <form>
                              <div id="header"><a id="headerchange">DOCUMENT TYPES</a>
                                    <div className="worddocdowicon" onClick={handleDownloadClick}>
                                          <i className="fas fa-file-word"></i>
                                          <span id="wordtemplatelabel">BASE TEMPLATE</span>
                                    </div>
                              </div>

                              <div className="containerBV1">
                                    <div id="contentBV1">
                                          <input type="text" value={documentName} onChange={handleDocumentNameChange} className={documentNameError ? 'red-outline' : ''} />
                                          {/* <input type="text" name= "doc_name" value={textFields.doc_name} onChange={handleTextChange} className={documentNameError ? 'red-outline' : ''} /> */}
                                          <i className="fa fa-pencil" aria-hidden="true" id="edit-iconDctype" onClick={handleEditClick} />
                                          {!documentNameError && showLabel && <label>DOCUMENT NAME</label>}
                                          {documentNameError && <div className="errormessageDocname">DOCUMENT NAME IS REQUIRED</div>}
                                    </div>
                                    <div className="containerBV2">
                                          <div id="contentBV2">
                                                <div className="dropdowncatacagalog" ref={dropdownRef}>
                                                      <input
                                                            className="dropdownlistccgaryinput"
                                                            type="text"
                                                            onClick={toggleDropdown}
                                                            value={searchTerm}
                                                            onChange={handleSearchChange}
                                                      />
                                                      <label>CATALOG CATEGORY</label>
                                                      <i
                                                            id="toggleforstucatacatalog"
                                                            className={`fa fa-caret-${isDropdownOpen ? 'up' : 'down'}`}
                                                            onClick={toggleDropdown}
                                                      ></i>
                                                      <i
                                                            id="canclebtcat"
                                                            className={`fa fa-times-circle cancelIcon ${selectedOption ? 'active' : 'hidden'}`}
                                                            onClick={handleCancelcatalog}
                                                      ></i>
                                                      {isDropdownOpen && (
                                                            <ul className="dropdownOptionscatecatalog">
                                                                  {options
                                                                        .filter((option) => option !== selectedOption)
                                                                        .map((option, index) => (
                                                                              <li key={index} onClick={() => handleSelectOption(option)}>
                                                                                    {option}
                                                                              </li>
                                                                        ))}
                                                            </ul>
                                                      )}
                                                </div>
                                          </div>
                                    </div>
                                    <div className="containerBV3">

                                          <div id="contentBV3">

                                                <input className="catalogstatusinput" type="text" onClick={handlecatalogstatusClick} />
                                                <label>CATALOG STATUS</label>
                                                <ul id="catalogstatuslist" style={{ display: isDropdownOpen1 ? 'block' : 'none' }}>
                                                      <li>INACTIVE</li>

                                                      <li>IN PROGRESS</li>

                                                      <li>PUBLISHED</li>

                                                </ul>
                                                <FontAwesomeIcon
                                                      icon={isDropdownOpen1 ? faCaretUp : faCaretDown}
                                                      className="caret-icon"
                                                      id="toggleforstucatacatalogstatus"
                                                      onClick={toggleDropdown1}
                                                />

                                          </div>

                                    </div>
                                    <div className="containerBV4">
                                          <div id="contentBV4">
                                                <input className="purposeinput" type="text" onClick={handlepurposeClick} />
                                                <ul id="purposelist" style={{ display: 'none' }}>
                                                      <li>DOCUMENT</li>
                                                      <li>EMAIL</li>

                                                </ul>
                                                <FontAwesomeIcon icon={faCaretDown} className="caret-iconpurpose" id="togglecatastatusprpose" />
                                                <label>PURPOSE</label>
                                          </div>
                                    </div>
                              </div>

                              <div className="containerBV5">
                                    <div id="contentBV5">
                                          <input type="file" id="fileInput" hidden onChange={handleUpload} accept=".doc, .docx" />
                                          <i id="uploadiconDoctype" className="fa-solid fa-cloud-arrow-up" onClick={() => document.getElementById('fileInput').click()} />
                                          {fileTypeError && <div className="error-message">Invalid file format. Only Word files (.doc, .docx) are allowed.</div>}
                                          {unsupportedTagsError && <div className="error-message red">The template contains unsupported free defined tags.</div>}
                                          {showDownloadCancel && (
                                                <>
                                                      <i id="dowicondoctype" className="fa-solid fa-cloud-arrow-down" onClick={handleDownload} />
                                                      <i id="canceldoctypeicon" className="fa-solid fa-x" onClick={handleCancel} />
                                                </>
                                          )}
                                          <input className={`tempname ${unsupportedTagsError ? 'error' : ''}`} type="text" value={uploadedFileName} readOnly />
                                          <label>TEMPLATE NAME</label>
                                    </div>
                                    <div className="containerBV6">
                                          <div id="contentBV6">
                                                <input
                                                      className="papersizeinput"
                                                      type="text"
                                                      onClick={handlepapersizeClick}
                                                      ref={papersizeInputRef}
                                                />
                                                <FontAwesomeIcon icon={faCaretDown} className="caret-icon" id="togglecatastatuspaper" ref={iconRef} />
                                                <label>PAPER SIZE</label>

                                                <ul id="papersizelist" style={{ display: 'none' }} ref={papersizeListRef}>
                                                      <li>INHERIT FROM WORD TEMPLATE</li>
                                                      <li>LETTER</li>
                                                      <li>LEGAL</li>
                                                      <li>A4</li>
                                                      <li>A3</li>
                                                      <li>LETTER LANDSCAPE</li>
                                                      <li>LEGAL LANDSCAPE</li>
                                                      <li>A4 LANDSCAPE</li>
                                                      <li>A3 LANDSCAPE</li>
                                                      <li></li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className="containerBV7">
                                          <div id="contentBV7">
                                                <div className="uploadiconDoctypewatermark">
                                                      <input type="file" id="watermarkFileInput" hidden onChange={handleWatermarkUpload} accept=".jpg, .jpeg, .png" />
                                                      <i id="uploadwatermark" className="fa-solid fa-cloud-arrow-up" onClick={() => document.getElementById('watermarkFileInput').click()} />
                                                      {showWatermarkDownloadCancel && (
                                                            <>
                                                                  <i id="dowicondoctypewatermark" className="fa-solid fa-cloud-arrow-down" onClick={handleWatermarkDownload} />
                                                                  <i id="canceldoctypeiconwatermark" className="fa-solid fa-x" onClick={handleWatermarkCancel} />
                                                            </>
                                                      )}
                                                </div>
                                                <input className="watermarkifilename" type="text" name="watermark_file" value={uploadedWatermarkFileName} readOnly />
                                                <label>WATERMARK FILE</label>
                                          </div>
                                    </div>
                                    <div id="doccheck1">
                                          <input type="checkbox" name="watermark" id="chechbox1css"></input>
                                          <label id='chb1'>WATER MARK</label>
                                          <input type="checkbox" name="toc" id="chechbox2css"></input>
                                          <label id='chb2'>TOC</label>
                                    </div>
                              </div>

                              <div id="headersectionDoctype">
                                    <a>SECTIONS</a>
                              </div>

                              <div className="containersection">
                                    <div id="contentsectionBV1">
                                          <input className="contentsectionBV1Input1" type="text" readOnly />
                                          <label id="ReorderSections">Reorder Sections</label>
                                    </div>
                                    <div className="containersection1">
                                          <div id="contentsectionBV2">
                                                <input className="contentsectionBV1Input2" type="text" readOnly />
                                                <label id="SectionName">Section Name</label>
                                          </div>
                                    </div>
                                    <div className="containersection2">
                                          <div id="contentsectionBV3">
                                                <input className="contentsectionBV1Input3" type="text" readOnly />
                                                <label id="SectionTag">Section Tag</label>
                                          </div>
                                    </div>
                              </div>

                              {sections.map((section, index) => (
                                    <div key={section.id}>
                                          <div className="addsectionbuttoninput">
                                                <div>
                                                      <div id="textsection1">
                                                            {index > 0 && (
                                                                  <button id="moveupdoctype" onClick={() => handleMoveUp(section.id)}>
                                                                        MOVEUP
                                                                  </button>
                                                            )}
                                                            {index < sections.length - 1 && (
                                                                  <button
                                                                        id="movedowndoctype"
                                                                        className={index === 0 ? 'movedownDoctype' : ''}
                                                                        onClick={() => handleMoveDown(section.id)}
                                                                        style={index === 0 ? { marginLeft: '45px' } : {}}
                                                                  >
                                                                        MOVEDOWN
                                                                  </button>

                                                            )}
                                                      </div>
                                                </div>
                                                <div id='doctypesectionnmae'>
                                                      <input
                                                            type="text"
                                                            id={`textsection2`} // Add unique ID for each section
                                                            onChange={(event) => handleSectionNameChange(event, index)}
                                                            className={sectionErrors[index] ? "red-outline" : ""}
                                                      />
                                                      <i className="fa fa-pencil" aria-hidden="true" id="editsectionDctype" onClick={handleEditClick} />
                                                      <label htmlFor={`textsection2`} id="sectionNAMElabel21" className={sectionErrors[index] ? "hide-label" : ""}>SECTION NAME</label>

                                                      {sectionErrors[index] && <div className="errormessagedoctype">{sectionErrors[index]}</div>}
                                                </div>
                                                <div className="input-with-copy">
                                                      <div>
                                                            <input
                                                                  type="text"
                                                                  id={`textsection3`}
                                                                  value={`SECTION_${section.textsection2 || ''}`}
                                                            />
                                                            <label htmlFor="textsection3" id="sectionNAMElabel22">SECTION TAG</label>
                                                      </div>
                                                </div>
                                                <div>
                                                      {section.textsection2 && (
                                                            <button className="copy-buttonsection" onClick={() => handleCopy(`Value to be copied: ${section.textsection2}`)}>
                                                                  <FontAwesomeIcon icon={faClone} />
                                                            </button>
                                                      )}
                                                </div>
                                                <div>
                                                      <button id={`delete-button-${section.id}`} className={`delete-buttonsection ${selectedButton === section.id ? 'highlightedsection' : ''}`}
                                                            onClick={() => handleButtonClick(section.id)}>
                                                            <FontAwesomeIcon icon={faTrashAlt} /></button>
                                                </div>
                                          </div>
                                    </div>
                              ))}

                              <div class="buttonsection">
                                    <button id="addsectionbuttoncss" onClick={addSection}>+ Add Section</button>
                              </div>

                              <div class="buttonsectionUPDE">
                                    <button id="buttonsectionUpDate">UPDATE</button>
                                    <button id="buttonsectionDelete">DELETE</button>
                              </div>
                        </form>
                  </div>
            </div>
      )
}
export function hideshowplusicon() {
      var header = document.getElementById("headerchange");
      var create = document.getElementById("buttonsectionUpDate")
      header.innerHTML = `ADD DOCUMENT TYPE`;
      create.innerHTML = `CREATE`;
}
// catalog status list startF
export const handlecatalogstatusClick = () => {
      const catalogstatusList = document.querySelector("#catalogstatuslist");
      const catalogstatusInput = document.querySelector(".catalogstatusinput");
      const icon = document.getElementById("togglecatastatus");

      catalogstatusList.style.display = catalogstatusList.style.display === "none" ? "block" : "none";

      // Toggle icon if it exists
      if (icon) {
            if (catalogstatusList.style.display === "none") {
                  icon.classList.remove("fa-caret-up");
                  icon.classList.add("fa-caret-down");
            } else {
                  icon.classList.remove("fa-caret-down");
                  icon.classList.add("fa-caret-up");
            }
      }
      //  ITEM SELECTING
      const handlecatalogstatusItemClick = (event) => {
            const selectedcatalogstatus = event.target.textContent;
            catalogstatusInput.value = selectedcatalogstatus;
            catalogstatusList.style.display = "none";
      };
      // search filter
      const handlecatalogstatusInput = () => {
            const filter = catalogstatusInput.value.toUpperCase();
            const catalogstatuslistItems = catalogstatusList.querySelectorAll("li");
            catalogstatuslistItems.forEach(function (item) {
                  const text = item.textContent.toUpperCase();
                  if (text.indexOf(filter) > -1) {
                        item.style.display = "";
                  } else {
                        item.style.display = "none";
                  }
            });
      };
      // enter
      const handlecatalogstatusInputKeydown = (event) => {
            if (event.keyCode === 13) {
                  const visibleItem = catalogstatusList.querySelector("li:not([style*='display: none'])");
                  if (visibleItem) {
                        catalogstatusInput.value = visibleItem.textContent;
                        catalogstatusList.style.display = "none";
                  }
            }
      };
      // WINDOWS CLICK
      const handleCatalogeOutsideClick = (event) => {
            if (!catalogstatusInput.contains(event.target)) {
                  catalogstatusList.style.display = "none";
            }
      };
      // / ITEM SELECTING
      const catalogstatusListItems = catalogstatusList.querySelectorAll("li");
      catalogstatusListItems.forEach(function (item) {
            item.addEventListener("click", handlecatalogstatusItemClick);
      });
      catalogstatusInput.addEventListener("input", handlecatalogstatusInput);
      catalogstatusInput.addEventListener("keydown", handlecatalogstatusInputKeydown);
      window.addEventListener("click", handleCatalogeOutsideClick);
}

// catalog status list end
// purposelist start
export const handlepurposeClick = () => {
      const purposeList = document.querySelector("#purposelist");
      const purposeInput = document.querySelector(".purposeinput");
      const icon = document.getElementById("togglecatastatusprpose");

      purposeList.style.display = purposeList.style.display === "none" ? "block" : "none";

      // Toggle icon if it exists
      if (icon) {
            if (purposeList.style.display === "none") {
                  icon.classList.remove("fa-angle-up");
                  icon.classList.add("fa-angle-down");
            } else {
                  icon.classList.remove("fa-angle-down");
                  icon.classList.add("fa-angle-up");
            }
      }
      //  ITEM SELECTING
      const handlepurposeItemClick = (event) => {
            const selectedpurpose = event.target.textContent;
            purposeInput.value = selectedpurpose;
            purposeList.style.display = "none";
      };
      // search filter
      const handlepurposeInput = () => {
            const filter = purposeInput.value.toUpperCase();
            const purposelistItems = purposeList.querySelectorAll("li");
            purposelistItems.forEach(function (item) {
                  const text = item.textContent.toUpperCase();
                  if (text.indexOf(filter) > -1) {
                        item.style.display = "";
                  } else {
                        item.style.display = "none";
                  }
            });
      };
      // enter
      const handlepurposeInputKeydown = (event) => {
            if (event.keyCode === 13) {
                  const visibleItem = purposeList.querySelector("li:not([style*='display: none'])");
                  if (visibleItem) {
                        purposeInput.value = visibleItem.textContent;
                        purposeList.style.display = "none";
                  }
            }
      };
      // WINDOWS CLICK
      const handlePurposeOutsideClick = (event) => {
            if (!purposeInput.contains(event.target)) {
                  purposeList.style.display = "none";
            }
      };
      // ITEM SELECTING
      const purposeListItems = purposeList.querySelectorAll("li");
      purposeListItems.forEach(function (item) {
            item.addEventListener("click", handlepurposeItemClick);
      });
      purposeInput.addEventListener("input", handlepurposeInput);
      purposeInput.addEventListener("keydown", handlepurposeInputKeydown);
      window.addEventListener("click", handlePurposeOutsideClick);
}
// purposelist end
export default Doctypes