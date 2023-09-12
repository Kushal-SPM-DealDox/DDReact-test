import React from 'react';
import Navbar from '../../components/Navbar'
import CatalogSidebar from '../../components/CatalogSidebar'
import Sidebar_SurveySetup from '../../components/Admin/setup/Sidebar_SurveySetup'
import AddSection from '../../components/AddSection'

import { useState, useEffect } from 'react';


import { addsec } from './Surveysetupjs'
import './Surveysetupjs.css'
import './Surveysetup.css'
import { openPopup, closePopup, myFunctionpopupSurvey, myFunctionpopupSurvey1, showOverwriteButton } from './Surveysetuppop'
import { defaultShow, calcShow, showDeleteBtn, displayAlert } from './Surveysetupiconjs'
import {
  handleClickFiles, displayFileName, handleClickNotes, handleClickExternal, handleClickTimestamp, handleClickInternal,
  copyText, handleClickLink, copyLink, handleOpenClose
} from '../Accounts/AccountSidebar'
import HelpRequest from '../../components/HelpRequest'
import { useAuthContext } from "../../hooks/useAuthContext";
import SpreadJSApp from '../../components/SpreadJsApp';

const SetupCreate = () => {

  const { user } = useAuthContext();
  const [surveyData, setSurveyData] = useState([]);
  const [surveyKey, setSurveyKey] = useState("");


  useEffect(() => {
    if (user) {
      getSurvey();
    }
  }, [user])

  // getSurvey api function
  const getSurvey = async () => {
    try {
      const response = await fetch('/api/survey/getSurvey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },

      });
      if (response.ok) {
        const survey = await response.json();
        if (survey.status == "Success") {
          setSurveyData(survey.data);

        }
      }
    } catch (error) {
      // console.log(error);
    }
  }

  const createSurvey = async (event) => {
    const field_name = event.target.getAttribute('name');
    const field_value = event.target.value;
    const setup_key = document.querySelector('input[name=surveyKey]');
    var survey_data = { field_name, field_value, setup_key: surveyKey };
    try {
      const response = await fetch('/api/survey/addSurvey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify(survey_data)
      });
      if (response.ok) {
        const survey = await response.json();
        if (survey.status == "Success") {
          getSurvey();
          setSurveyKey(survey.survey_key);
        }
      }
    } catch (error) {
      alert(error);
    }
  }

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
            <a href="" className="breadcrumbs--link breadcrumbs--link--active">SETUP</a>
          </li>
        </ul>
        <hr className="hr" />
      </div>
      <HelpRequest />
      {/* -------------------------- */}


      <div className="rowsurvey">
        <Sidebar_SurveySetup data={surveyData} />
        <div className="rightsurvey">
          <div id="mainsurvey">
            <div className="surveyhead">
              <div id="headersurvey">SURVEY TEMPLATE
                <div className="surveyapprove">
                  <a className="approvesurvey1" href="#" onClick={openPopup}>OVERWRITE</a>
                  <a className="approvesurvey2" href="#">CREATE A COPY</a>
                </div>

              </div>
            </div>
            <div>
              <div className="containersurvey">
                <div id="contentS1">
                  <div className="surveyName" id="surveynamesection">
                    <input className id="sn" onBlur={(event) => { createSurvey(event) }} type="text" name="title" />
                    <input type="hidden" name="surveyKey" value="" />
                    <label id="tittleLabel">TITLE</label>
                    <label id="cpqLabel">CPQ</label>
                  </div>
                  <div id="headsurvey2" style={{ display: 'none' }}>
                    <a className="export" href="#">EXPORT</a>
                    <label htmlFor="myfile" id="file">IMPORT FROM LOCAL FILE</label>
                    <input type="file" id="myfile" name="myfile" display="show" hidden />
                    <a className="savee" href="#">SAVE</a>
                    <a className="resumecalc" href="#">RESUME CALCULATIONS</a>
                  </div>
                  <div className="catIcon" id='caticonid'>
                    <i className="fa-solid fa-clipboard-list" id="catIcon" onClick={defaultShow} style={{ marginLeft: '25px', width: '20px' }} /><br />
                    <label htmlFor id="clipLabel">DEFAULTS</label>
                  </div>
                  <div className="calcIcon" id="calcId">
                    <i className="fa fa-table" id="calcIcon" onClick={calcShow} style={{ marginLeft: '25px', width: '20px' }} /><br />
                    <label htmlFor id="calcLabel">CALC</label>
                    <i className="fa fa-cog" id="configIcon" style={{ marginLeft: '25px', display: 'none' }} onClick={defaultShow} /><br />
                    <label htmlFor id="configLabel" style={{ display: 'none' }}>CONFIG</label>
                  </div>
                  {/*  */}
                  <div className="bckbtn" id="bckbtn1" onClick={calcShow} style={{ display: 'none' }}>
                    <button id="backk">BACK</button>
                    <i className="fa fa-chevron-left" id="backicon" aria-hidden="true" />
                  </div>
                </div>
                <div id="containerSA">
                  <div id="contentS2">
                    <select onBlur={(event) => { createSurvey(event) }} name='category'>
                      <option value="">Select</option>
                      <option value="DBA">DBA</option>
                      <option value="DSOM">DSOM</option>
                      <option value="DEFAULT">DEFAULT</option>
                      <option value="EDUCATION">EDUCATION</option>
                      <option value="IZOT">IZOT</option>
                    </select>
                    <label>CATLALOG CATEGORY</label>
                  </div>
                  <div id="contentS3">
                    <select id="mySelect" onBlur={(event) => { createSurvey(event) }} name="status" onChange={showDeleteBtn}>
                      <option selected disabled hidden />
                      <option value="inactive">INACTIVE</option>
                      <option value="inprogress">IN PROCESS</option>
                      <option value="published">PUBLISHED</option>
                    </select>
                    <label>CATLOG STATUS</label>
                  </div>
                  <div id="contentS4">
                    <input type="checkbox" onChange={(event) => { createSurvey(event) }} name="globals" style={{ width: '20px', marginLeft: '28px' }} value="1" />
                    <label>GLOBALS</label>
                  </div>
                  <div id="contentS5">
                    <input type="checkbox" onChange={(event) => { createSurvey(event) }} name="wide" style={{ width: '20px', marginLeft: '28px' }} value="1" />
                    <label>WIDE</label>
                  </div>
                </div>
                <div id="containerSB">
                  <div id="contentS6">
                    <select id="tempUpdate" onBlur={(event) => { createSurvey(event) }} name="update_type" onChange={displayAlert}>
                      <option selected disabled hidden />
                      <option value="AUTOMATIC UPDATE">AUTOMATIC UPDATE</option>
                      <option value="NO UPDATE">NO UPDATE</option>
                      <option value="PROMPT USER">PROMPT USER</option>
                    </select>
                    <label>TEMPLATE UPDATE TYPE</label>
                  </div>
                  <div id="contentS7">
                    <input type="text" name="update_notification" id="userMesg" placeholder="Enter Your Message" />
                    <label>UPDATE NOTIFICATION</label>
                  </div>
                </div>
                <p id="noSurveyQuestion">This survey has no questions. </p>
              </div>
            </div>
            <div id="main-section">

              <AddSection data={surveyKey}/>
            </div>
            {/* SPREAD SHEET CODE STARTS FROM HERE */}
            <div id="calc-container" style={{ display: 'none' }}>
              {/* <iframe id="myfile" width="100%" height="400vh" frameBorder={4} scrolling="no" src="https://onedrive.live.com/embed?resid=6C685993F809A9F8%212757&authkey=%21AABR6KgqMF_ImYs&em=2&wdAllowInteractivity=False&AllowTyping=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=true&ejss=false" /> */}
            <SpreadJSApp />
            </div>
            <div id="deletesurveysection">
              <button id="deletesurvey" style={{ color: 'red' }}>DELETE SURVEY</button>
            </div>
          </div>
        </div>
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
            <div className="navside">
              <button className="dropdown-btn" id="sidetoggle4" onClick={handleClickInternal}>INTERNAL ID <i className="fa fa-angle-down" style={{ color: '1px solid black', fontSize: '12px', float: 'right' }} />
              </button>
              <div className="dropdown-container" id='internOpen'>
                <div className="txt">
                  <p id="text-to-copy">
                    <a href="https://chat.openai.com/chat" id="myId" style={{ fontSize: '13px' }} target="_blank">Internal Id</a>
                  </p>
                </div>
                <div className="bnt">
                  <button id="cpbtn" onClick={copyText}><i className="fa fa-clone" style={{ fontSize: '15px', zIndex: 2 }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="navside">
              <button className="dropdown-btn" id="sidetoggle5" onClick={handleClickLink}>LINK
                <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '12px', float: 'right' }} />
              </button>
              <div className="dropdown-container" id='linkOpen'>
                <div className="txt">
                  <p id="link-to-copy"><a href="https://www.youtube.com/" id="myLink" style={{ fontSize: '13px' }} target="_blank">Link</a>
                  </p>
                </div>
                <div className="bnt">
                  <button id="linkbtn" onClick={copyLink}><i className="fa fa-clone" style={{ fontSize: '15px', zIndex: 2 }} /></button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button id="mainsidebar" className="openbtnact" onClick={handleOpenClose}>
              <i className="fa-light fa-less-than" style={{ fontSize: '14px' }} /></button>
          </div>
        </div>
      </div>

      {/* POPUP SCREEN FOR OVERWRITE */}
      <div id="overwriteContainer">
        <i className="fas fa-xmark" id="hidesec" style={{ float: 'right', marginRight: '-5px', marginTop: '-17px', color: '#2698ca' }} onClick={closePopup} />
        <p style={{ color: '#2698ca', marginLeft: '-20px' }}>SURVEY SEARCH</p><br />
        <div>
          <i className="fa fa-search" style={{ position: 'relative', left: '-33px', color: '#2698ca', top: '-18px', zIndex: 1 }} aria-hidden="true" />
          <input type="text" id="mySearchpopupsurvey" onKeyUp={myFunctionpopupSurvey1} title="type in a chategory" />
        </div>
        <p id="info">A survey overwrite will replace your current survey's rules, options, and calcsheet with the
          selected survey</p>
        <div id="surveyNameAndStatus">
          <p style={{ color: '#2698ca', marginTop: '10px' }}>Survey Name</p>
          <p style={{ color: '#2698ca', marginTop: '10px' }}>Survey Status</p>
        </div>
        <div id="surveyns">
          <div id="surveyName">
            <span id="dotspopupsurvey">
              <li><a href="#" onClick={showOverwriteButton}>Abbott Laboratories</a></li>
              <li><a href="#" onClick={showOverwriteButton}>ABC Company</a></li>
              <li><a href="#" onClick={showOverwriteButton}>ABSA Bank Limited</a></li>
              <li><a href="#" onClick={showOverwriteButton}>ACA Pacific Technology</a></li>
              <li><a href="#" onClick={showOverwriteButton}>Accenture</a></li>
              <li><a href="#" onClick={showOverwriteButton}>Accenture S.p.A</a></li>
              <li><a href="#" onClick={showOverwriteButton}>1040Tech LLC</a></li>
              <li><a href="#" onClick={showOverwriteButton}>ABB AG</a></li>
              <li><a href="#" onClick={showOverwriteButton}>Abbey National Group</a></li>
              <li><a href="#" onClick={showOverwriteButton}>Abbott</a></li>
            </span>
            <span id="morepopupsurvey">
              <li><a href="#" onClick={showOverwriteButton}>Accenture S.p.A</a></li>
              <li><a href="#" onClick={showOverwriteButton}>1040Tech LLC</a></li>
              <li><a href="#" onClick={showOverwriteButton}>ABB AG</a></li>
              <li><a href="#" onClick={showOverwriteButton}>Abbey National Group</a></li>
              <li><a href="#" onClick={showOverwriteButton}>Abbott</a></li>
              <li><a href="#" onClick={showOverwriteButton}>Abbott Laboratories</a></li>
              <li><a href="#" onClick={showOverwriteButton}>ABC Company</a></li>
              <li><a href="#" onClick={showOverwriteButton}>ABSA Bank Limited</a></li>
              <li><a href="#" onClick={showOverwriteButton}>ACA Pacific Technology</a></li>
              <li><a href="#" onClick={showOverwriteButton}>Accenture</a></li>
              <li><a href="#" onClick={showOverwriteButton}>Accenture S.p.A</a></li>
            </span>
            <button onClick={myFunctionpopupSurvey} id="myBTNpopupsurvey">SHOW MORE</button>
          </div>
        </div>
        <button id="overwrite" disabled>OVERWRITE</button>
      </div>
      <div id="backdrop"></div>

      <div id="mySidebar" className="sidebar1" style={{ paddingTop: '0px' }}>
        <div className="navside">
          <button className="dropdown-btn" id="sidetoggle">FILES<i className="fa fa-angle-down" style={{ color: 'black', fontSize: '20px', float: 'right' }} /> </button>
          <div className="dropdown-container">
            <ul id="file-list" />
            <div className="file-upload">
              <input id="file-input" type="file" onchange="displayFileName()" multiple hidden />
              <label htmlFor="file-input" id="filePlus"><i className="fa fa-plus" /></label>
            </div>
          </div>
          <div className="navside"> <button className="dropdown-btn" id="sidetoggle1">NOTES <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '20px', float: 'right' }} /> </button>
            <div className="dropdown-container">
              <form action><input type="text" name="new" id="send" placeholder="Type your Note" /><button id="sent1"><i className="fa fa-send-o blue-color" style={{ color: '#045679' }} /></button>
              </form>
            </div>
          </div>
          <div className="navside">
            <button className="dropdown-btn" id="sidetoggle3">TIMESTAMP <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '20px', float: 'right' }} /> </button>
            <div className="side-container">
              <hr id="lhr" />
              <span id="time">CREATED BY:</span><span id="time1">${'{'}model{'}'}</span><br />
              <hr id="lhr" />
              <span id="time">CREATED:</span><span id="time1">${'{'}model{'}'}</span><br />
              <hr id="lhr" />
              <span id="time">LAST MODIFIED BY:</span><span id="time1">${'{'}model{'}'}</span><br />
              <hr id="lhr" />
              <span id="time">LAST MODIFIED</span><span id="time1">${'{'}model{'}'}</span><br />
              <hr id="lhr" />
              <span id="time">REVISION</span><span id="time1">${'{'}model{'}'}</span><br />
            </div>
          </div>
          <div className="navside">
            <button className="dropdown-btn" id="sidetoggle4">INTERNAL ID <i className="fa fa-angle-down" style={{ color: '1px solid black', fontSize: '20px', float: 'right' }} />
            </button>
            <div className="dropdown-container">
              <div className="txt">
                <p id="text-to-copy">
                  <a href="https://chat.openai.com/chat" id="myId" style={{ fontSize: '13px' }} target="_blank">Internal Id</a>
                </p>
              </div>
              <div className="bnt">
                <button id="cpbtn" onclick="copyText()"><i className="fa fa-clone" style={{ fontSize: '15px', zIndex: 2 }} />
                </button>
              </div>
            </div>
          </div>
          <div className="navside">
            <button className="dropdown-btn" id="sidetoggle5">LINK
              <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '20px', float: 'right' }} />
            </button>
            <div className="dropdown-container">
              <div className="txt">
                <p id="link-to-copy"><a href="https://www.youtube.com/" id="myLink" style={{ fontSize: '13px' }} target="_blank">Link</a>
                </p>
              </div>
              <div className="bnt">
                <button id="linkbtn" onclick="copyLink()"><i className="fa fa-clone" style={{ fontSize: '15px', zIndex: 2 }} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default SetupCreate