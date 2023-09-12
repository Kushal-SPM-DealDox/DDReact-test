import React from 'react';
import Navbar from '../../components/Navbar'
import CatalogSidebar from '../../components/CatalogSidebar'
import Sidebar_SurveySetup from '../../components/Admin/setup/Sidebar_SurveySetup'
import AddSection from '../../components/AddSection'
import SpreadJSApp from '../../components/SpreadJsApp';
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
import { Link, withRouter, useLocation} from "react-router-dom";
import { AvForm, AvField, AvCheckboxGroup, AvCheckbox } from "availity-reactstrap-validation";

const Setup = () => {
  const { user } = useAuthContext();
  const Data = useLocation();
  const [surveyData, setSurveyData] = useState([]);

  const [surveySetup, setSurveySetup] = useState({});
  // setSurveySetup(Data.state);

  const [surveySectionsData, setSurveySectionsData] = useState([]);
  const [surveyQuestionsData, setSurveyQuestionsData] = useState([]);

  if (Data) {
    if (Data) {
      // // console.log(Data.state)
      if (JSON.stringify(surveySetup) != JSON.stringify(Data.state)) {
        setSurveySetup(Data.state);
        if (document.querySelector('#sectionsContainer')) {
          document.querySelector('#sectionsContainer').innerHTML = "";
                  
        }
        // window.location.reload();
      } else {

      }
    } else {
      if (surveyData.length > 0) {
        setSurveySetup(surveyData[0]);

      }
    }
  } else {
    if (surveyData.length > 0) {
      setSurveySetup(surveyData[0]);

    }
  }

  useEffect(() => {
    if (user) {
      getSurvey();
    }
  }, [user,surveySetup])

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
          setSurveySetup(Data.state);
          getSurveySections();
          console.log(Data.state)
        }
      }
    } catch (error) {
      // console.log(error);
    }
  }

  // getSurveySections api function
  const getSurveySections = async () => {
    try {
      const response = await fetch('/api/survey/getSurveySections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify({survey_key : surveySetup.survey_key})
      });
      if (response.ok) {
        const survey = await response.json();
        if (survey.status == "Success") {

          setSurveySectionsData(survey.data);
          getSurveyQuestions(survey.data);

          // var data = survey.data;
          // data.forEach((item, index)=>{
          //   addSection();
          // })

          // data.forEach((item, index)=>{
          //   console.log(index+1)
          //     var section_container = document.querySelector('.newoptional'+(index+1));
          //     if(section_container)
          //     {
          //         var section_key = section_container.querySelector('input[name="section_key"]');
          //         section_key.value = item.survey_section_key;
          //         var section_num = section_container.querySelector('input[name="section_num"]');
          //         section_num.value = item.survey_section_number;
          //         var section_title = section_container.querySelector('input[name="section_title"]');
          //         section_title.value = item.survey_section_title;
                
          //     }
          // })

        }
      }
    } catch (error) {
      // console.log(error);
    }
  }

  // getSurveyQuestions api function
  const getSurveyQuestions = async (sectionData) => {
    try {
      const response = await fetch('/api/survey/getSurveyQuestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify({survey_key : surveySetup.survey_key})
      });
      if (response.ok) {
        const survey = await response.json();
        if (survey.status == "Success") {
          setSurveyQuestionsData(survey.data);

          // var questions_data = survey.data;
          // console.log(sectionData)
          // if(sectionData.length > 0)
          // {
          //     sectionData.forEach((sections, i) => {
                
          //       questions_data.forEach((questions,j) => {
          //           if(sections.survey_section_key == questions.survey_section_key)
          //           {
          //               document.querySelector('.add_question'+(i+1)).click();
          //           }
          //       })
          //     })

          //     sectionData.forEach((sections, i) => {
          //       var section_container = document.querySelector('.newoptional'+(i+1));
          //       var ques_num = 0;
          //       questions_data.forEach((questions,j) => {
          //           var question_container = document.querySelector('.questionscontainer_'+(i+1)+'_'+(ques_num+1));
          //           // console.log(questions)

          //           if(sections.survey_section_key == questions.survey_section_key)
          //           {
          //                console.log((i+1)+", "+(ques_num+1));

          //               if(question_container)
          //               {
          //                   question_container.querySelector('input[name="question_key"]').value = questions.survey_questions_key;
          //                   question_container.querySelector('input[name="question_name"]').value = questions.survey_questions_name;
          //                   ques_num = ques_num+1;
          //               }
          //           }
          //       })
          //     })
          // }
          

        }
      }
    } catch (error) {
      // console.log(error);
    }
  }


  const createSurvey = async (event) => {
    const field_name = event.target.getAttribute('name');

    var field_value = event.target.value;
    if (field_name == "wide") {
      console.log(event.target.checked)
      if (event.target.checked) {
        field_value = 1;
        event.target.checked = true;
        surveySetup.wide = 1;
      } else {
        field_value = 0;
        event.target.checked = false;

        surveySetup.wide = 0;
      }
    }
    if (field_name == "globals") {
      console.log(event.target.checked)
      if (event.target.checked) {
        field_value = 1;
        event.target.checked = true;
        surveySetup.globals = 1;
      } else {
        field_value = 0;
        event.target.checked = false;

        surveySetup.globals = 0;
      }
    }
    const setup_key = document.querySelector('input[name=surveyKey]');
    var survey_data = { field_name, field_value, setup_key: setup_key.value };
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
          setup_key.value = survey.survey_key;
          getSurvey();
          setSurveySetup(survey.data);

        }
      }
    } catch (error) {
      alert(error);
    }
  }
  
  return (

    <div style={{height: '100%'}}>
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


      <div className="rowsurvey" style={{height: '100%'}}>
        <Sidebar_SurveySetup data={surveyData} />
        <div className="rightsurvey" style={{height: '100%'}}>
          <AvForm style={{height: '100%'}}>
            <div id="mainsurvey" style={{height: '100%'}}>
              <div className="surveyhead">
                <div id="headersurvey">SURVEY TEMPLATE
                  <div className="surveyapprove">
                    <a className="approvesurvey1" href="#" onClick={openPopup}>OVERWRITE</a>
                    <a className="approvesurvey2" href="#">CREATE A COPY</a>
                  </div>

                </div>
              </div>
              {surveySetup ? <>
                <div>
                  <div className="containersurvey">

                    <div id="contentS1">
                      <div className="surveyName" id="surveynamesection">
                        <AvField className id="sn" onBlur={(event) => { createSurvey(event) }} type="text" name="title" value={surveySetup ? surveySetup.title : ""} />
                        <AvField type="hidden" name="surveyKey" value={surveySetup ? surveySetup.survey_key : ""} />
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
                        <AvField type="select" onBlur={(event) => { createSurvey(event) }} name='category' value={surveySetup ? surveySetup.category?surveySetup.category:"" : ""}>
                          <option value="" ></option>
                          <option value="DBA">DBA</option>
                          <option value="DSOM">DSOM</option>
                          <option value="DEFAULT">DEFAULT</option>
                          <option value="EDUCATION">EDUCATION</option>
                          <option value="IZOT">IZOT</option>
                        </AvField>
                        <label>CATLALOG CATEGORY</label>
                      </div>
                      <div id="contentS3">
                        <AvField type="select" id="mySelect" onBlur={(event) => { createSurvey(event) }} name="status" onChange={showDeleteBtn} value={surveySetup ? surveySetup.status?surveySetup.status:"" : ""}>
                          <option value=""></option>
                          <option value="inactive">INACTIVE</option>
                          <option value="inprogress">IN PROCESS</option>
                          <option value="published">PUBLISHED</option>
                        </AvField>
                        <label>CATLOG STATUS</label>
                      </div>
                      <div id="contentS4">
                        {surveySetup && (
                          <div>

                            <AvCheckboxGroup name="globals" style={{ border: "none" }}>
                              <AvCheckbox
                                onChange={(event) => { createSurvey(event); }}
                                style={{ width: '20px', marginLeft: '28px' }}
                                checked={surveySetup.globals === 1 ? "checked" : ""}
                                value="1"
                              />
                            </AvCheckboxGroup>
                            <label>GLOBALS</label>
                          </div>
                        )}
                      </div>

                      <div id="contentS5">
                        {surveySetup && (
                          <div>
                            <AvCheckboxGroup name="wide" style={{ border: "none" }}>
                              <AvCheckbox
                                onChange={(event) => { createSurvey(event); }}
                                style={{ width: '20px', marginLeft: '28px' }}
                                checked={surveySetup.wide === 1 ? "checked" : ""}
                                value="1"
                              />
                            </AvCheckboxGroup>
                            <label>WIDE</label>
                          </div>
                        )}
                      </div>

                    </div>
                    <div id="containerSB">
                      <div id="contentS6">
                        <AvField type="select" id="tempUpdate" onBlur={(event) => { createSurvey(event) }} name="update_type" onChange={displayAlert} value={surveySetup ? surveySetup.update_type?surveySetup.update_type:"" : ""}>
                          <option value=""></option>
                          <option value="AUTOMATIC UPDATE">AUTOMATIC UPDATE</option>
                          <option value="NO UPDATE">NO UPDATE</option>
                          <option value="PROMPT USER">PROMPT USER</option>
                        </AvField>
                        <label>TEMPLATE UPDATE TYPE</label>
                      </div>
                      <div id="contentS7">
                        <AvField type="text" name="update_notification" id="userMesg" value={surveySetup ? surveySetup.update_notification : ""} placeholder="Enter Your Message" />
                        <label>UPDATE NOTIFICATION</label>
                      </div>
                    </div>
                    <p id="noSurveyQuestion">This survey has no questions. </p>
                  </div>
                </div>
                <div id="main-section">
                    {surveySetup?<AddSection survey_data={surveySetup} sections_data={surveySectionsData} questions_data={surveyQuestionsData}/>:<></>}
                </div>
              </>
                : <></>
              }

              {/* SPREAD SHEET CODE STARTS FROM HERE */}
              <div id="calc-container" style={{ display: 'none', height: '100%' }}>
                {/* <iframe id="myfile" width="100%" height="400vh" frameBorder={4} scrolling="no" src="https://onedrive.live.com/embed?resid=6C685993F809A9F8%212757&authkey=%21AABR6KgqMF_ImYs&em=2&wdAllowInteractivity=False&AllowTyping=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=true&ejss=false" /> */}
              <SpreadJSApp />
              </div>
              <div id="deletesurveysection">
                <button id="deletesurvey" style={{ color: 'red' }}>DELETE SURVEY</button>
              </div>
            </div>
          </AvForm>
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

export default Setup