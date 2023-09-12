import React from 'react'
import Navbar from '../../components/Navbar'
import AdminSidebar from '../../components/AdminSidebar'
import HelpRequest from '../../components/HelpRequest'
import '../Alert/Alert.css'
import WriteFlex from '../../components/WriteFlex'
import { useState, useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import en from "date-fns/locale/en-US";
registerLocale("en", en);



const Alert = () => {
    const editorRef = useRef(null);
    
    const toggleCodeView = () => {
        if (editorRef.current) {
            const editor = editorRef.current;
            const isCodeView = editor.mode.get() === 'code';
            editor.mode.set(isCodeView ? 'design' : 'code');
        }
    };






    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handleChange = (event) => {
        const alertlabel = document.getElementById('alertlabel');
        const inputField = event.target;
        const value = inputField.value;
        setInputValue(value);

        if (value.length > 0) {
            setErrorMessage("");
            alertlabel.style.display = "block";
            inputField.style.outlineColor = "#0f6b93";
        } else {
            setErrorMessage("TITLE IS A REQUIRED FIELD");
            alertlabel.style.display = "none";
            inputField.style.outlineColor = "red";
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.length === 0) {
            setErrorMessage("TITLE IS A REQUIRED FIELD");
        }
        else {
            // Proceed with form submission or further processing
        }
    };




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
                        <a href='#' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>ADMIN</a>
                    </li>
                    <li className="breadcrumbs--item">
                        <a href="" className="breadcrumbs--link breadcrumbs--link--active">ALERT</a>
                    </li>
                </ul>
                <hr className="hr" />
            </div>
            <HelpRequest />
            {/* -------------------------- */}
            <div className='AlertMain'>
                <WriteFlex />
                <div className="plusiconalert">
                    <i className="fa fa-plus" onClick={hideshowplusicon} />
                </div>
            </div>
            <div id="Alert-head">
                <label id="text">
                    ADMIN ALERTS
                </label>

                <div id="alertmsg">
                    <label id="msg">
                        NO ALERTS FOUND PLEASE USE + TO ADD A NEW ALERT
                    </label>

                </div>
                <div id="prasent" style={{ display: 'none' }}>
                    <div class="alertgrid">
                        <div id="alertname">
                            <form onSubmit={handleSubmit}>
                                <input
                                    id="alertinput"
                                    type="text"
                                    value={inputValue}
                                    onChange={handleChange}
                                    placeholder="Enter title"
                                />
                                <label id="alertlabel">TITLE</label>
                                {errorMessage && <label id="alertmsg">{errorMessage}</label>}
                            </form>

                        </div>
                        <div id="alertdate">
                            <DatePicker
                                id="alertinput1" 
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="MMMM d, yyyy" // Format that includes the month name
                                placeholderText="Select a date"
                                locale="en" // Set the locale to use the registered locale
                               />
                            <label>PUBLISHED DATE</label>
                        </div>
                        <div id="alertlist">
                            <input id="alertinput2" type="text" onClick={handleAlertlistClick} />
                            <label id="alertlistlabel">STATUS</label>
                            <ul id="alertlistitem" style={{ display: 'none' }}>
                                <li id="alertitems">PUBLISHED</li>
                                <li id="alertitems">UNPUBLISHED</li>
                            </ul>
                            <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
                        </div>


                        <div class="buttongrid">
                            <button id="buttoncancel">CANCEL</button>
                            <button id="buttonalert">SAVE NEW ALERT</button>
                        </div>
                    </div>



                    <div id="description">
                        
<div>
                <Editor
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue="<p>ghy </p>"
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'a11ychecker',
                            'advlist',
                            'advcode',
                            'advtable',
                            'autolink',
                            'checklist',
                            'export',
                            'lists',
                            'link',
                            'image',
                            'charmap',
                            'preview',
                            'anchor',
                            'searchreplace',
                            'visualblocks',
                            'powerpaste',
                            'fullscreen',
                            'formatpainter',
                            'insertdatetime',
                            'media',
                            'table',
                            'help',
                            'wordcount',
                            'code', // Include the 'code' plugin
                        ],
                        toolbar:
                            'undo redo | bold italic underline | backcolor forecolor link | code', // Customize the toolbar options
                    }}
                />
                </div>
                        
                    </div>
                </div>
            </div>

            {/* main div */}
        </div>
    )
}

export function hideshowplusicon() {
    var header = document.getElementById("text");

    header.innerHTML = `ADD ALERT`;
    const alertmsg = document.getElementById("alertmsg");
    alertmsg.style.display = "none";





    var div = document.getElementById("prasent");
    if (div.style.display === "none") {

        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}


export const handleAlertlistClick = () => {
    const alertListitem = document.querySelector("#alertlistitem");
    const alertInput2 = document.querySelector("#alertinput2");
    const alertlistDiv = document.getElementById('alertlist');
    alertListitem.style.display = alertListitem.style.display === "none" ? "block" : "none";
    alertlistDiv.style.height = '59px';
    alertlistDiv.style.zIndex = '3';

    //  ITEM SELECTING
    const handleAlertlistItemClick = (event) => {
        const selectedOptionsList = event.target.textContent;
        alertInput2.value = selectedOptionsList;
        alertListitem.style.display = "none";
    };
    // search filter
    const handleAlertlistItemInput = () => {
        const filter = alertInput2.value.toUpperCase();
        const alertListitems = alertListitem.querySelectorAll("li");



        alertListitems.forEach(function (item) {
            const text = item.textContent.toUpperCase();
            if (text.indexOf(filter) > -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    }
    const handleAlertlistItemInputKeydown = (event) => {
        if (event.keyCode === 13) {
            const visibleItem = alertListitem.querySelector("li:not([style*='display: none'])");
            if (visibleItem) {
                alertInput2.value = visibleItem.textContent;
                alertListitem.style.display = "none";
            }
        }
    }
    // WINDOWS CLICK
    const handleAlertlistClick = (event) => {
        if (!alertInput2.contains(event.target)) {
            alertListitem.style.display = "none";
        }
    };
    // ITEM SELECTING
    const alertListitems = alertListitem.querySelectorAll("li");
    alertListitems.forEach(function (item) {
        item.addEventListener("click", handleAlertlistItemClick);
    });

    alertInput2.addEventListener("input", handleAlertlistItemInput);
    alertInput2.addEventListener("keydown", handleAlertlistItemInputKeydown);
    window.addEventListener("click", handleAlertlistClick);

};




export default Alert