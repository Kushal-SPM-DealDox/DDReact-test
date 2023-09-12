import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import '../GuidedSelling/GuidedSelling.css'
import { myFunctionguide, expandFullWidth, expandArrow, strinkwidth, guideOpen } from './GuidedSellingjs'
import { bidonclik} from '../GuidedSelling/GuidedSellingstatic'
import { Link, withRouter, useLocation } from "react-router-dom";
import '../Templates/TemplatesGuide.css'
import { useAuthContext } from "../../hooks/useAuthContext";
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { saveAs } from 'file-saver';
import HelpRequest from '../../components/HelpRequest';

import htmlDocx from 'html-docx-js/dist/html-docx';

import FROALA_LICENSE_KEY from '../../ConfigFroala';


const GuidedSelling = () => {
  const data_state = useLocation();
  const survey_key = data_state.state;
  console.log(survey_key)

  const { user } = useAuthContext();

  const [surveySectionsData, setSurveySectionsData] = useState([]);
  const [surveyQuestionsData, setSurveyQuestionsData] = useState([]);
  const [newArray, setNewArray] = useState([])
  const [unitval, setunitval] = useState("")

  useEffect(() => {
    setNewArray([0, 1, 2, 3, 4, 5]);
    if (user) {
      // sections
      getSurveySections();
      // questions
      getSurveyQuestions();

    }
  }, [user]);

  // getSurveySections api function
  const getSurveySections = async () => {
    try {
      const response = await fetch('/api/survey/getSurveySections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify({ survey_key: survey_key })
      });
      if (response.ok) {
        const survey = await response.json();
        if (survey.status == "Success") {

          setSurveySectionsData(survey.data);

        }
      }
    } catch (error) {
      // console.log(error);
    }
  }


  // getSurveyQuestions api function
  const getSurveyQuestions = async () => {
    try {
      const response = await fetch('/api/survey/getSurveyQuestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify({ survey_key: survey_key })
      });
      if (response.ok) {
        const survey = await response.json();
        if (survey.status == "Success") {
          setSurveyQuestionsData(survey.data);
        }
      }
    } catch (error) {
      // console.log(error);
    }
  }

  // bid estimation
  const submitFunction = async () => {
    alert(true)
    var subdata = [];
    for (var i = 0; i < 5; i++) {
      var sel = document.getElementById(`level${i}`);
      var text = sel.options[sel.selectedIndex].text;
      console.log(text)

      const oppid = "<%= oppid %>";
      const accid = "<%= accid %>";
      const template_type = survey_key;

      const level = text;
      const unit_price = document.getElementById(`level${i}`).value;
      const bid_price = document.getElementById(`bid_price${i}`).value;
      const workload = document.getElementById(`workload${i}`).value;
      const csp_workload = document.getElementById(`csp_workload${i}`).value;
      const csp_avg_cost = document.getElementById(`csp_avg_cost${i}`).value;
      const non_billable = document.getElementById(`non_billable${i}`).value;
      const country = document.getElementById(`country${i}`).value;
      const role = document.getElementById(`role${i}`).value;
      const role_description = document.getElementById(`role_description${i}`).value;
      const notes = document.getElementById(`notes${i}`).value;
      subdata.push({ "opportunity_id": oppid, "account_id": accid, "template_type": template_type, "level": level, "unit_price": unit_price, "bid_price": bid_price, "workload": workload, "csp_workload": csp_workload, "csp_avg_cost": csp_avg_cost, "non_billable": non_billable, "country": country, "role": role, "role_description": role_description, "notes": notes });


    }
    console.log(JSON.stringify(subdata));

    fetch("/api/guidedselling/calculation", {
      method: "POST",
      body: JSON.stringify({ data: subdata }),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user.token}`,
      }
    }).then(res => res.json())
      .then(data => {
        if (data.status == "error") {
          alert(data.error)
          // console.log(data.error);

          // success.style.display = "none"  
          // error.style.display = "block" 
          // error.innerText = data.error
        } else {
          alert(data.success);
          document.getElementById("list_price").value = data.total.total_listprice;
          // document.getElementById("discount").value = data.total.discount_listprice;
          document.getElementById("net_price").value = data.total.total_netprice;
          document.getElementById("cost").value = data.total.total_cost;
          // document.getElementById("margin").value = data.total.total_margin;

          var discountValue = data.total.discount_listprice.toFixed(2); // Limit value to 2 decimals
          discountValue += "%"; // Add "%" symbol
          document.getElementById("discount").value = discountValue;

          var marginValue = data.total.total_margin.toFixed(2);
          marginValue += "%";
          document.getElementById("margin").value = marginValue;


          // console.log(data.error);

        }
      })
  }
  // ================================== froala 8th update code========================================
  // Add a function to handle the toggling of showlisticonclick class


  const [selectedOption, setSelectedOption] = useState('option1');

  const [editor1Html, setEditor1Html] = useState('');

  const [editor2Html, setEditor2Html] = useState('');

  const [editor3Html, setEditor3Html] = useState('');

  const editorConfig = {

    key: FROALA_LICENSE_KEY,

    charCounterCount: false,

    toolbarInline: true,

    alwaysVisible: true,

    toolbarVisibleWithoutSelection: true,

    placeholderText: '',

    multiLine: true,

    align: 'left',

    toolbarButtons: [

      [

        'fontFamily',

        'fontSize',

        'textColor',

        'backgroundColor',

        'bold',

        'italic',

        'underline',

        'formatOL',

        'formatUL',

        'paragraphFormat',

        'paragraphStyle',

        'align',

        'alignLeft',

        'alignCenter',

        'alignRight',

        'insertLink',

        'insertImage',

        'table',

        'specialCharacters',

        'print',

        'insertTable',

        'clearFormatting',

        'undo',

        'redo',

        'html',

      ],

    ],

    events: {

      initialized: function () {

        const toolbar = document.querySelector('.fr-toolbar');

        if (toolbar) {

          toolbar.style.height = '180px';

          toolbar.style.width = '360px';

          const editor = this;

          editor.$el[0].setAttribute('style', 'text-align: left');

        }

      },

    },

  };



  // Load content from local storage when the component mounts

  useEffect(() => {

    const storedContent1 = localStorage.getItem('editor1Content');

    const storedContent2 = localStorage.getItem('editor2Content');

    const storedContent3 = localStorage.getItem('editor3Content');



    if (selectedOption === 'option1' && storedContent1) {

      setEditor1Html(storedContent1);

    } else if (selectedOption === 'option2' && storedContent2) {

      setEditor2Html(storedContent2);

    } else if (selectedOption === 'option3' && storedContent3) {

      setEditor3Html(storedContent3);

    }

  }, [selectedOption]);



  // Handle HTML content changes in the editor

  const handleEditorChange = (html) => {

    if (selectedOption === 'option1') {

      setEditor1Html(html);

      localStorage.setItem('editor1Content', html);

    } else if (selectedOption === 'option2') {

      setEditor2Html(html);

      localStorage.setItem('editor2Content', html);

    } else if (selectedOption === 'option3') {

      setEditor3Html(html);

      localStorage.setItem('editor3Content', html);

    }

  };



  // Generate the DOCX document

  const generateDocx = () => {

    let currentEditorHtml;

    if (selectedOption === 'option1') {

      currentEditorHtml = editor1Html;

    } else if (selectedOption === 'option2') {

      currentEditorHtml = editor2Html;

    } else if (selectedOption === 'option3') {

      currentEditorHtml = editor3Html;

    }



    if (currentEditorHtml) {

      // Convert HTML to DOCX

      const docx = htmlDocx.asBlob(currentEditorHtml);



      // Save the DOCX document

      const fileName = 'generated-document.docx';

      saveAs(docx, fileName);

    }

  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="bread">

        <ul className="breadcrumbs">

          <li className="breadcrumbs--item">

            <a href='/' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>HOME</a>

          </li>

          <li className="breadcrumbs--item">

            <a href='#' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>ACCOUNTS</a>

          </li>

          <li className="breadcrumbs--item">

            <a href="" className="breadcrumbs--link breadcrumbs--link--active">GUIDED SELLING</a>

          </li>

        </ul>

        <hr className="hr" />

      </div>
      <HelpRequest />
      <div className="grid-containerguide" id="gridID">
        <div className="sidebarguide" id="leftsideguide">
          <button className="btnguide" id="leftBtn" onClick={guideOpen}>&gt;</button>
          <div className="guidedselling">
            <i className="fa-sharp fa-solid fa-left-right" onClick={expandArrow} id="arrowleftright" /><br />
            <i className="fa-solid fa-down-left-and-up-right-to-center" onClick={expandArrow} id="arrowrightleft" style={{ display: 'none', transform: 'rotate(-135deg)' }} /><br />
            <b id='guidedsabel'>GUIDED SELLING</b>
          </div>
          <div className="guideSelling">
            <h3>Professional Service<i className="fa fa-cog" id="settingicon" onClick={expandFullWidth} /></h3>
            <div className="pencil">
              <i className="fa fa-pencil" onClick={strinkwidth} id="pencil" style={{ display: 'none' }} />
              <label htmlFor="pencil" id="answer" style={{ fontSize: '10px', display: 'none' }}>ANSWER &nbsp;
                CALC</label>
            </div>
            <div className="pencil">
              <i className="fa fa-table" id="configTable" style={{ display: 'none' }} />
              <label htmlFor="configTable" id="tabel" style={{ fontSize: '10px', display: 'none' }}>ANSWER &nbsp;
                CONFIG</label>
            </div>
          </div>
          <div className="guideLabel" id="gl">
            <label id="cpqlabel">CPQ</label>
            <label style={{ float: 'right', paddingRight: 'px' }} id="config">CONFIG</label>
          </div>
          {/* guided selling start customer details */}
          <div id="hideOnExpand">

            {/* start Bid Estimation*/}
            {
              surveySectionsData ?
                surveySectionsData.map((sections, i) => (
                  <>
                    <div class="navside" onClick={(event) => { bidonclik(event) }}>

                      <button className="dropdown-btn" id="sidetoggle4">{sections.survey_section_number}. {sections.survey_section_title}<i className="fa fa-angle-down" style={{ color: 'black', fontSize: '20px', float: 'right' }} /></button>
                      <div class="dropdown-container">

                        {surveyQuestionsData ?
                          surveyQuestionsData.map((questions, j) => (
                            sections.survey_section_key == questions.survey_section_key ?
                              <>
                                <div className="txt">
                                  <p id="text-to-copyBid">{questions.survey_questions_num}</p>
                                  <p id="guidedFieldsBid">{questions.survey_questions_name}</p>
                                  <input type='text' value="" />
                                  {/* <button id="bidData" onClick={openPopup}hidden /> */}
                                  {/* <label className='bidIcon' for="bidData"><i class="fa-regular fa-folder"></i></label> */}
                                </div>
                              </>
                              : <></>
                          ))
                          : <></>
                        }
                      </div>

                    </div>
                  </>
                ))
                : <></>
            }

            {/* <!-- Learning Pass end Section--> */}

          </div>
          <button type="submit" className="guideApply">APPLY</button>
        </div>
        <div className="main-content" id="mainContent" style={{ display: 'block' }}>
          <div className="guidedheader">
            <div className="downloadguide">
              <button className="xlbutton2" onclick>
                <span className="fa fa-file-excel-o" /></button>
              <div>
                <label>DOWNLOAD</label>
              </div>
            </div>
            <div className="guideapprove">
              <a className="approveguide" href="#">&nbsp;&nbsp;SUBMIT FOR APPROVAL&nbsp;&nbsp;</a>
            </div>
            {/* <div class="quotedetails">
                    <a href="#"><button class="product active">Price</button></a>
                    <a href="#"><button class="product">Cost</button></a>
                    <a href="#"><button class="product">Quantity</button></a>
                    <a href="#"><button class="product">FTE</button></a>
                </div> */}
          </div>
          <div className="guidedetails">
            <button type="button" className="guidebbtn" id="clickmeguide" onClick={myFunctionguide}>
              <span className="fa fa-angle-up" /></button>
            <div id="guideid" className="hiddenguide">
              <div className="guideleft">
                <div className="containerGA">
                  <div id="contentG1">
                    <input className type="text" value="" />
                    <label>QUOTE NAME</label>
                  </div>
                  {/* <div id="contentG2">
                    <input className type="text" placeholder />
                    <label>PRICE MODEL</label>
                  </div> */}
                </div>
                <div className="containerGB">
                  {/* <div id="contentG3">
                    <input className type="text" />
                    <label>SALES ORG</label>
                  </div> */}
                  <div id="contentG4">
                    <input className type="text" placeholder value=""/>
                    <label>CURRENCY</label>
                  </div>
                  <div id="contentG5">
                    <input className type="text" placeholder='$0.00' />
                    <label>AVG RATE</label>
                  </div>
                  {/* <div id="contentG6">
                    <input className type="text" placeholder />
                    <label>AVG RATE</label>
                  </div> */}
                </div>
              </div>
              <div className="guideright">
                <div className="containerGC">
                  <div id="contentG7">
                    <input className type="number" placeholder='$0.00' name="list_price" id="list_price" readOnly />
                    <label>LIST PRICE</label>
                  </div>
                  <div id="contentG8">
                    <input className type="text" id="discount" placeholder="  0.00%" readOnly style={{height: '59px', outlineColor: '#216c98',border:'1px solid lightgray', paddingLeft: '8px'  }} />
                    <label>DISCOUNT</label>
                  </div>
                  <div id="contentG9">
                    <input className type="number" id="net_price" placeholder="$0.00" readOnly />
                    <label>NET PRICE</label>
                  </div>
                </div>
                <div className="containerGD">
                  <div id="contentG10">
                    <input className type="number" placeholder='$0.00' readOnly />
                    <label>EXPENSES</label>
                  </div>
                  <div id="contentG11">
                    <input className type="text" id="margin" placeholder="  0.00%" readOnly style={{height: '59px', outlineColor: '#216c98',border:'1px solid lightgray', paddingLeft: '8px' }} />
                    <label>MARGIN</label>
                  </div>
                  <div id="contentG12">
                    <input className type="number" id="cost" placeholder="$0.00" readOnly />
                    <label>COST</label>
                  </div>
                </div>
              </div>
              {/* <div id="contentG13">
                <textarea name id cols rows defaultValue={""} />
                <label>DESCRIPTION</label>
              </div> */}
            </div>
          </div>
        </div>


        {/* ==============================8th update======================= */}
        <div className='righttemplateGuide' style={{ display: 'none' }}>
          <div id="headerTempaltes">  QUOTE TEMPLATE
            <div className='showlisticonclick'>
              <span className='worddowGuide'>
                <i className="fa fa-file-word-o" id='guideDownload' onClick={generateDocx} ></i>
                <span className='worddowlabelGuide'>GENERATE</span>
              </span>
              <div>
                <label className='doclabelGuide'>DOC TYPE</label>
                <select
                  className="templatedocinput"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="option1">SOW</option>
                  <option value="option2">DEAL_REVIEW_REPORT</option>
                  <option value="option3">SERVICE_OPENAIR_REPORT</option>
                </select>

                <div className='frolaeditordiv'>
                  {selectedOption === 'option1' && (
                    <FroalaEditorComponent
                      model={editor1Html}
                      onModelChange={handleEditorChange}
                      config={editorConfig}
                    />
                  )}
                  {selectedOption === 'option2' && (
                    <FroalaEditorComponent
                      model={editor2Html}
                      onModelChange={handleEditorChange}
                      config={editorConfig}
                    />
                  )}

                  {selectedOption === 'option3' && (
                    <FroalaEditorComponent
                      model={editor3Html}
                      onModelChange={handleEditorChange}
                      config={editorConfig}
                    />
                  )}
                </div>
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
                {/* <button className="sectionupdatebutton" onClick={updateContentInDB}>Update Content</button> */}
              </div>
            </div>
          </div>
          {/* {!showtemplate && */}
          {/* <div id="notdis">NO TEMPLATE FOUND PLEASE CLICK + TO ADD NEW TEMPLATE</div> */}
          {/* } */}
          {/* } */}
        </div>
        {/* rightsidebar */}
        <div>
          <div className="slide">
            <div id="mySidebar" className="sidebar1" style={{ top: '73px' }}>
              {/* <a href="javascript:void(0)" >x</a> */}
              <div className="navside">
                <button className="dropdown-btn" id="sidetoggle1">BID TEAM <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '20px', float: 'right' }} />
                </button>
                {/* <div class="dropdown-container">
                           <p>${model}-ownerName</p>
                           <form action="">
                               <input type="search" name="ownerName" id="oname" placeholder="Enter Name to be searched" required />
                               <input type="submit" id="search" hidden>
                               <label for="search"><i class="fa-solid fa-check"></i></label>
                           </form>
                       </div> */}
              </div>
              <div className="navside">
                <button className="dropdown-btn" id="sidetoggle">FILES <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '20px', float: 'right' }} />
                </button>
                {/* <div class="dropdown-container">
                            <form action=""><input type="file" id="upload" name="doc" hidden />
                                <label id="upl"    for="upload">+</label>
                            </form>
                        </div> */}
              </div>
              <div className="navside">
                <button className="dropdown-btn" id="sidetoggle1">NOTES <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '20px', float: 'right' }} />
                </button>
                {/* <div class="dropdown-container">
                            <form action=""><input type="text" name="new" id="send"placeholder="Type your Note" />
                                    <button id="sent1ss"><i class='fa fa-send-o blue-color'
                                        style="color: #045679;"></i></button> </form>
                        </div> */}
              </div>
              <div className="navside">
                <button className="dropdown-btn" id="sidetoggle2">EXTERNAL REFERENCES
                  <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '20px', float: 'right' }} />
                </button>
                {/* <div class="dropdown-container">
                            <form action=""><input type="text" name="id" id="eid" value="$model"><label for=""
                                    id="lab">EXTERNAL
                                    REFERENCES ID</label><br>
                                <input type="text" name="id" id="eid2" value="$model">
                                <label for="" id="lab">EXTERNAL REFERENCES ID 2</label>
                                <br><input type="text" name="id" id="cfid" value="$model"><label for="" id="lab">CRM
                                    REFERENCE</label>
                            </form>
                        </div> */}
              </div>
              <div className="navside">
                <button className="dropdown-btn" id="sidetoggle1">CUSTOM FIELDS
                  <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '20px', float: 'right' }} />
                </button>
                {/* <div class="dropdown-container">
                           <form action=""><input type="text" name="new" id="send"
                                   placeholder="Type your Note" /><button id="sent1ss"><i class='fa fa-send-o blue-color'
                                       style="color: #045679;"></i></button> </form>
                       </div> */}
              </div>
              <div className="navside">
                <button className="dropdown-btn" id="sidetoggle3">TIMESTAMP
                  <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '20px', float: 'right' }} />
                </button>
                {/* <div class="side-container"> <span id="time">CREATED BY:</span><span
                                id="time1">${model}</span><br>

                            <hr id="lhr"> <span id="time">CREATED:</span><span id="time1">${model}</span><br>
                            <hr id="lhr"> <span id="time">LAST MODIFIED BY:</span><span id="time1">${model}</span><br>

                            <hr id="lhr"> <span id="time">LAST MODIFIED</span><span id="time1">${model}</span><br>
                            <hr id="lhr"> <span id="time">REVISION</span><span id="time1">${model}</span><br>
                        </div> */}
              </div>
              <div className="navside">
                <button className="dropdown-btn" id="sidetoggle1">EXCHANGE RATES <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '20px', float: 'right' }} />
                </button>
                {/* <div class="dropdown-container">
                           <form action=""><input type="text" name="new" id="send"
                                   placeholder="Type your Note" /><button id="sent1ss"><i class='fa fa-send-o blue-color'
                                       style="color: #045679;"></i></button> </form>
                       </div> */}
              </div>
              <div className="navside">
                <button className="dropdown-btn" id="sidetoggle1">DOC TYPES <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '20px', float: 'right' }} />
                </button>
                {/* <div class="dropdown-container">
                       <form action=""><input type="text" name="new" id="send"
                               placeholder="Type your Note" /><button id="sent1ss"><i class='fa fa-send-o blue-color'
                                   style="color: #045679;"></i></button> </form>
                   </div> */}
              </div>
              <div className="navside">
                <button className="dropdown-btn" id="sidetoggle1">DOCUMENT EXPORT NAME <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '20px', float: 'right' }} />
                </button>
                {/* <div class="dropdown-container">
                   <form action=""><input type="text" name="new" id="send"
                           placeholder="Type your Note" /><button id="sent1ss"><i class='fa fa-send-o blue-color'
                               style="color: #045679;"></i></button> </form>
               </div>*/}
              </div>
              <div className="navside">
                <button className="dropdown-btn" id="sidetoggle4">GENERATE WORD DOCS<i className="fa fa-angle-down" style={{ color: '1px solid black', fontSize: '20px', float: 'right' }} />
                </button>
                {/*   <div class="dropdown-container">
                            <div class="txt">
                                <p id="text-to-copy"><a href="https://chat.openai.com/chat" style="font-size: 13px;"
                                        target="_blank">file:///C:/Usfyugfgsyugfsgfgsdugfdyusfdhfdhdhfchdrfdhjavxjvgsugdguzlivdshiuvdhlihvihvjhvhdasdddsfegesrhytryu6trdujiy</a>
                                </p>
                            </div>
                            <div class="bnt"><button id="cpbtn" onclick="copyText()"><i class="fa fa-clone"
                                        style="font-size:15px; z-index: 2;"></i></button>
                            </div>
                        </div> */}
              </div>
              <div className="navside"> <button className="dropdown-btn" id="sidetoggle5">GENERATES PDFS
                <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '20px', float: 'right' }} />
              </button>
                <div className="dropdown-container">
                  {/* <div class="txt">
                                <p id="link-to-copy"><a href="https://chat.openai.com/chat" style="font-size: 13px;"
                                        target="_blank">file:///C:/Usfyugfgsyugfsgfgsdugfdyusfdhfdhdhfchdrfdhjavxjvgsugdguzlivdshiuvdhlihvihvjhvhdasdddsfegesrhytryu6trdujiy</a>
                                </p>
                            </div>
                            <div class="bnt"></div> <button id="linkbtn" onclick="copyLink()"><i
                                    class="fa fa-clone"></i></button> */}
                </div>
              </div>
            </div>
          </div>
          <div><button id="main" className="openbtn" onclick="openClose()">
            <i className="fa-light fa-less-than" /></button></div>
        </div>
      </div>
    </div>


  )
}

export default GuidedSelling