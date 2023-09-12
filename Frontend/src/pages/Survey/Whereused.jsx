import React from 'react'
import { useRef } from 'react';
import Navbar from '../../components/Navbar'
import CatalogSidebar from '../../components/CatalogSidebar'
import HelpRequest from '../../components/HelpRequest'
import '../Survey/Whereused.css'
import { toggleDropdown, selectOption, filterOptions, exportDataWhereUsed } from './Whereusedjs';
import { useCallback, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';


const Whereused = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '95%', position:'fixed',left:'68px' }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'QUOTE', minWidth: 100, filter: 'agTextColumnFilter', lockPosition: "left", lockVisible: true,sort: 'desc',lockPinned:true },
    { field: 'ACCOUNT',  filter: 'agTextColumnFilter',lockPinned:true},
    { field: 'OPPORTUNITY', filter: 'agTextColumnFilter', minWidth: 200,lockPinned:true},
    { field: 'CREATED BY', filter: 'agTextColumnFilter',lockPinned:true},
    { field: 'QUOTE CREATED DATE', minWidth: 180, filter: 'agDateColumnFilter',lockPinned:true },
    { field: 'QUOTE LAST MODIFIED', filter: 'agDateColumnFilter', lockPinned:true  },
    { field: 'QUOTE STATUS', filter:false,lockPinned:true},
    { field: 'SURVEY NAME', filter: 'agTextColumnFilter', minWidth: 100,lockPinned:true },
    { field: 'SURVEY ID', filter: 'agTextColumnFilter', minWidth: 100,lockPinned:true },
    { field: 'SURVEY REVISION', filter: 'agTextColumnFilter', minWidth: 100,lockPinned:true },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data.slice(0, 600)));
  }, []);

// ------------------------------
const [isOpen, setIsOpen] = useState(false);
const [selectedOption, setSelectedOption] = useState('Survey Name');
const [filteredOptions, setFilteredOptions] = useState(['Survey Name', 'Survey Id']);

const toggleDropdown = () => {
  setIsOpen(!isOpen);
};

const filterOptions = (event) => {
  const searchInput = event.target.value.toLowerCase();
  const filtered = ['Survey Name', 'Survey Id'].filter(option =>
    option.toLowerCase().includes(searchInput)
  );
  setFilteredOptions(filtered);
};

const selectOption = (option) => {
  setSelectedOption(option);
  setIsOpen(false); // Close the dropdown after selecting an option

};
// --------------
const [inputValue, setInputValue] = useState("");
const [isButtonDisabled, setIsButtonDisabled] = useState(true);

const updateLabel = (e) => {
  const value = e.target.value;
  setInputValue(value);

  if (value.length >= 3) {
    document.getElementById("valChange").style.display = "block";
    document.getElementById("valChange1").style.display = "none";
    document.getElementById("valChange2").style.display = "none";
    document.getElementById('myInput').style.outlineColor=' #0f6b93';
  } else if (value.length === 0) {
    document.getElementById("valChange").style.display = "none";
    document.getElementById("valChange1").style.display = "none";
    document.getElementById('myInput').style.outlineColor='red';
    document.getElementById("valChange2").style.display = "block";
  } else {
    document.getElementById("valChange").style.display = "none";
    document.getElementById("valChange1").style.display = "block";
   document.getElementById('myInput').style.outlineColor='red';
    document.getElementById("valChange2").style.display = "none";
  }

  if (value.length >= 3) {
    setIsButtonDisabled(false);
  } else {
    setIsButtonDisabled(true);
  }
};

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
            <a href='#' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>CATALOG</a>
          </li>
          <li className="breadcrumbs--item">
            <a href="" className="breadcrumbs--link breadcrumbs--link--active">WHEREUSED</a>
          </li>
        </ul>
        <hr className="hr" />
      </div>
      {/* -------------------------- */}
      <HelpRequest />
      <div>
        <div className="whereused">
        <div className="custom-dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span id="searchtypespan">{selectedOption}</span>
        <i id="iconanle" className="fa fa-chevron-down" />
      </div>
      <label id="svtype">SEARCH TYPE</label>
      <div className="dropdown-options" id="dropdownOptions" style={{ display: isOpen ? 'block' : 'none' }}>
        <input type="text" placeholder="Search" onKeyUp={filterOptions} />
        <ul>
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => selectOption(option)}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
    <div id="consulting">
      <input
        type="text"
        id="myInput"
        className="nmv"
        placeholder="Name Of The Survey"
        onInput={updateLabel}
      />
      <label id="valChange">VALUE</label>
      <label
        id="valChange1"
        style={{ display: "none", fontSize: "9px", color: "red" }}
      >
        SHOULD BE AT LEAST 3 CHARACTERS
      </label>
      <label id="valChange2" style={{ display: "none", color: "red" }}>
        THE FIELD IS REQUIRED
      </label>
      
    </div>



          <div id="checkbox1">
            <input type="checkbox" id="partial" placeholder />
            <label>MATCH ON PARTIAL TIME</label><br />
            <div id="checkbox2">
              <input type="checkbox" id="approved" placeholder />
              <label>ONLY APPROVED QUOTES</label>
    

            </div>
          </div>
          <div id="calendar1">
            <input className="fromcalendar" type="text" placeholder="Quote Creation Date" onfocus="(this.type = 'Date')" required />
            <label>FROM </label>
          </div>
          <div id="calendar2">
            <input className="tocalendar" type="text" placeholder="Quote Creation Date" onfocus="(this.type = 'Date')" required />
            <label>TO</label>
          </div>
          <div id="searchclear">
            <form>
            <button id="myButton" disabled={isButtonDisabled}>
        SEARCH
      </button>
              <button id="clear" type="clear">CLEAR</button>
              {/* <label>SEARCH TYPE</label> */}
            </form>
          </div>
        </div>
        <div className="rightwhereused">
          <div id="header"><a>WHERE USED</a>
            <button className="xlbuttonWhereused" onClick={exportDataWhereUsed}>
              <i className="fa-sharp fa-solid fa-file-excel" id="downloadicon" />
              {/* <i class="fa-file-excel" id="downloadicon"></i> */}
            </button>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Whereused