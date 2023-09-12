import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { handleClickTimestamp, handleOpenClose, handleClickFiles, displayFileName, handleClickNotes } from '../Accounts/AccountSidebar'
import CatalogSidebar from '../../components/CatalogSidebar';
import '../Content/Content.css';
import ContentGrouping from '../../components/ContentGrouping';
// Rest of your code
import { useLocation } from 'react-router-dom';
import { showContent, shadetext } from './Contentjs';
import HelpRequest from '../../components/HelpRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// floara code 
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/third_party/embedly.min.js";
import FroalaEditorComponent from 'react-froala-wysiwyg';
// Import the table plugin
import 'froala-editor/js/plugins/table.min.js';
import FROALA_LICENSE_KEY from '../../ConfigFroala';
import { useAuthContext } from "../../hooks/useAuthContext";

function ContentEdit() {

    const { user } = useAuthContext();
    console.log(user);
  
    // **************************error message start***********************************************************
    // const [contentname, setContentName] = useState('');
    const [contentnameError, setContentNameError] = useState(false);
    const handleContentNameChange = (event) => {
      const value = event.target.value;
      setContentName(value);
      setContentNameError(value.trim() === '');
      const titleinput = document.querySelector('.titleinput');
      titleinput.style.outlineColor = value.trim() === '' ? 'red' : '#0f6b93';
    };
  
    // **************************error message end***********************************************************
    // *****************************************editor in content********************
    const handleModelChange = (model) => {
      console.log(model);
      setContent(model);
    };
  
    const editorConfig = {
      key: FROALA_LICENSE_KEY,
      toolbarButtons:
      [['fontFamily','fontSize','textColor','backgroundColor','|','bold','italic','underline','|','formatOL','formatUL','paragraphFormat','paragraphStyle','|','align','outdent','indent','|',
    'insertLink','insertImage','insertTable','|','specialCharacters','getPDF','print','clearFormatting','undo','redo','html',],
      ],
     
    };
    //***********************************editor end*****************************************  
  
    // **************************sales org start***************************************
  
    const [isDropdownOpencontent, setIsDropdownOpencontent] = useState(false);
    const [selectedOptioncontent, setSelectedcontent] = useState('');
    const [searchValuecontent, setSearchValuecontent] = useState('');
    const [displayValuecontent, setDisplayValuecontent] = useState('');
    const dropdownRefcontent = useRef(null);
    const inputRefcontent = useRef(null);
  
    const toggleDropdowncontent = () => {
      setIsDropdownOpencontent(!isDropdownOpencontent);
    };
  
    const handleClickOutsidecontent = (event) => {
      const dropdownElement = dropdownRefcontent.current;
      const inputElement = inputRefcontent.current;
      if (
        dropdownElement &&
        !dropdownElement.contains(event.target) &&
        inputElement &&
        !inputElement.contains(event.target)
      ) {
        setIsDropdownOpencontent(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutsidecontent);
      return () => {
        document.removeEventListener('click', handleClickOutsidecontent);
      };
    }, []);
  
    const handleOptionSelectcontent = (option) => {
      setSelectedcontent(option);
      setIsDropdownOpencontent(false);
      setDisplayValuecontent(option);
      setSalesOrg(option);
    };
  
    const handleSearchChangecontent = (e) => {
      const value = e.target.value;
      setSearchValuecontent(value);
      setDisplayValuecontent(value);
    };
  
    const optionscontent = ['AFRICA', 'ALL OTHER AP', 'AP-ALL OTHER', 'AP-AUS/JP', 'AP-CHINA', 'AP-INDIA', 'ARGENTINA', 'AUSTRALIA'];
    const filteredOptionscontent = optionscontent.filter((option) =>
      option.toLowerCase().includes(searchValuecontent.toLowerCase())
    );
    // **************************sales org end**************************************
    // *********************************************catalog categary*************************************************************************************
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
      setCatalogCategory(option);
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
  
    const { state: content } = useLocation();
    const contentdata = content;
    console.log(contentdata);
  
    const [contetName, setContentName] = useState('');
    const [salesOrg, setSalesOrg] = useState('');
    const [calatlogNumber, setCatalogNumber] = useState('');
    const [calatlogCategory, setCatalogCategory] = useState('');
    const [locked, setIsLocked] = useState(contentdata ? contentdata.locked === 1 : false);
    const [contents, setContent] = useState('');
  
    useEffect(() => {
      setContentName(contentdata ? contentdata.content_name : '');
      setSalesOrg(contentdata ? contentdata.sales_org : '');
      setCatalogNumber(contentdata ? contentdata.catalog_number : '')
      setCatalogCategory(contentdata ? contentdata.catalog_category : '')
      setIsLocked(contentdata ? contentdata.locked : '')
      setContent(contentdata ? contentdata.content : '')
    }, [contentdata]);
  
  
  
    const handleUpdateContent = () => {
  
      fetch(`http://localhost:4001/api/content/update/${contentdata.content_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          content_name:contetName,
          sales_org:salesOrg,
          catalog_number:calatlogNumber,
          catalog_category:calatlogCategory,
          locked: locked ? 1 : 0, // Convert boolean to integer for API
          content:contents
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error updating content');
          }
        })
        .then((data) => {
          console.log('content updated successfully!', data);
          alert('content updated successfully!');
          // You can choose to update the UI or perform any other actions here
        })
        .catch((error) => {
          console.error('Error updating content:', error);
          alert('An error occurred while updating content.');
        });
    };
  
  
    const handleDeleteContent = ()=> {
     
      fetch(`http://localhost:4001/api/content/delete/${contentdata.content_id}`, {
  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
  
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('content Deleted successfully!', data);
          alert('content Deleted successfully!');
        })
        .catch((error) => {
          console.error('Error Deleting content:', error);
        });
      };


  return (
    <>
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
            <a href="" className="breadcrumbs--link breadcrumbs--link--active">CONTENT</a>
          </li>
        </ul>
        <hr className="hr" />
      </div>
      <HelpRequest />
      {/* -------------------------- */}
      <div className="rowcontent">
        <ContentGrouping />
        <div className="plusiconcontent">
          <a href='content'><i className="fa fa-plus"  /></a>
        </div>
        <div className="rightcontent">
          <div id="headercontent">CATALOG CONTENT</div>
          {/* <div id='nodtapluscontent'>NO CONTENT FOUND PLEASE USE + TO ADD NEW CONTENT</div> */}
          <div id="createcontent" style={{ display: 'block' }}>
            <div className="containercontent1">
              <div id="cc1">
                <input className={`titleinput ${contentnameError ? 'red-outline' : ''}`} type="text" value={contetName} onChange={(e) => setContentName(e.target.value)} placeholder='Enter item name' />
                {!contentnameError && <label className='titlelabel'>TITLE</label>}
                {contentnameError && <div className="errormessagerolename">TITLE IS A REQUIRED</div>}
              </div>
              <div id="cc2">
                <input
                  type="text"
                  placeholder='Sales org'
                  className="iputcontent"
                  value={salesOrg}
                  onChange={handleSearchChangecontent}
                  onClick={toggleDropdowncontent}
                  ref={inputRefcontent}
                />
                <FontAwesomeIcon
                  icon={isDropdownOpencontent ? faCaretUp : faCaretDown}
                  className="toggleIconcontent"
                  id="togglecontent"
                  onClick={toggleDropdowncontent}
                />
                <label className="labelcontent">ORG</label>
                {isDropdownOpencontent && (
                  <ul className="dropcontent" ref={dropdownRefcontent}>
                    {filteredOptionscontent.map((option) => (
                      <li key={option} onClick={() => handleOptionSelectcontent(option)}>
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div id="cc3">
                <input className='ctaloginput' type="number" placeholder='Enter Catalog number' value={calatlogNumber}  onChange={(e)=> setCatalogNumber(e.target.value)}/>
                <label className='catnumlabel'>CATALOG NUMBER</label>
              </div>
              <div id="cc4">
                <div id="rolesetupcontent2">
                  <input
                    className='catalogcatainput'
                    type="text"
                    placeholder='Catalog categary'
                    value={calatlogCategory}
                    onChange={handleSearchChange}
                    onClick={toggleDropdown}
                    ref={inputRef}

                  />
                  <i
                    className={`fa fa-caret-${isDropdownOpencaca ? 'up' : 'down'}`}
                    onClick={toggleDropdown}
                    id="cacacontent"
                  ></i>
                  <label className='catcatlabel'>CATALOG CATEGORY</label>
                  {isDropdownOpencaca && (
                    <ul className="ulrolecontent" ref={dropdownRef}>
                      {filteredOptions.map((option) => (
                        <li key={option} onClick={() => handleOptionSelect(option)}>
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div id="cc5">
                <input className='Lockinputcheckbox' type="checkbox"  checked={locked} onChange={(e) => setIsLocked(e.target.checked)} />
                <label className='locklabel'>LOCKED</label>
              </div>
            </div>
            {/* wordcontent */}
            <div className="requillgridcontent">
              <FroalaEditorComponent
                tag="textarea"
                config={editorConfig}
                onModelChange={handleModelChange}
                model={contents}
              />
            </div>
            {/* -----------save and content--------------- */}
            <div className="saveandcancelcontent">
              <button id="resetcontent" type="reset" style={{ color: 'red' }} onClick={handleDeleteContent}>DELETE</button>
              <button id="savecontent" type="submit" style={{ color: 'green',width:'144px' }} onClick={handleUpdateContent}>UPDATE CONTENT</button>
            </div>
          </div>
        </div>
        {/* sidepanle content  start*/}
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
            <div className="navside"> <button className="dropdown-btn" id="sidetoggle1" onClick={handleClickNotes}>NOTES <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '12px', float: 'right' }} />
            </button>
              <div className="dropdown-container" id='notesOpen'>
                <form action><input type="text" name="new" id="send" placeholder="Type your Note" /><button id="sent1"><i className="fa fa-send-o blue-color" style={{ color: '#045679' }} /></button> </form>
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
            <button id="mainsidebar" className="openbtnact" style={{ display: 'none' }} onClick={handleOpenClose}>
              <i className="fa-light fa-less-than" style={{ fontSize: '14px' }} /></button>
          </div>
        </div>

        {/* sidepanle content  end*/}
      </div>
    </>
  )
}

export default ContentEdit;