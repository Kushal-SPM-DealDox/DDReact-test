import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import '../Opportunities/OpportunitiesData.css'
import {myFunctionA,myFunctionB} from '../Accounts/AccountFlex'
import { exportData1,myfunctionData,handleOpenCloseOppo } from './OpportunitiesDatajs'
import HelpRequest from '../../components/HelpRequest.jsx'
import { useState } from 'react'
import { handleClickFiles,displayFileName, handleClickBidTeam,handleClickNotes,handleClickExternal,
  handleClickTimestamp } from '../Accounts/AccountSidebar'
  import { handleClickInternal,copyText,handleClickLink,copyLink,handleOpenClose } from '../Accounts/AccountSidebar'
import { useLocation } from 'react-router-dom';
import { useAuthContext } from "../../hooks/useAuthContext";
import { event } from 'jquery'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles

const OpportunitiesData = () => {

  const { user } = useAuthContext();
  console.log(user);
  // const [closeDate, setCloseDate] = useState(new Date()); // Initial date for CLOSE
  // const [startDate, setStartDate] = useState(new Date()); // Initial date for START
  
  
  const { state: row } = useLocation();
  const oppData = row.row;



  const opportunityId =  oppData.opportunity_id; 
  


    //useStates for saving updated values into database from frontend(data has been get from database)

    const [opportunityName, setOpportunityName] = useState('');
    const [parentOpportunity, setParentOpportunity] = useState('');
    const [account, setAccount] = useState('');
    const [netPrice, setNetPrice] = useState('');
    const [margin, setMargin] = useState('');
    const [cost, setCost] = useState('');
    const [stage, setStage] = useState('');
    const [permissionType, setPermissionType] = useState('');
    const [probability, setProbability] = useState('');
    const [hours, setHours] = useState('');
    // const [close, setClose] = useState('');
    // const [start, setStart] = useState('');
    const [startDate, setStartDate] = useState(null); 
  const [closeDate, setCloseDate] = useState(null); 
    const [duration_weeks, setDuration_weeks] = useState('');
    const [list_price, setListPrice] = useState('');
    const [owner, setOwner] = useState('');
    const [region, setRegion] = useState('');
    const [vertical, setVertical] = useState('');
    const [practice, setPractice] = useState('');
    const [currency, setCurrency] = useState('');
    const [org, setOrg] = useState('');
    const [opportunity_type, setOpportunity_Type] = useState('');

    useEffect (() => {
      setOpportunityName(oppData.opportunity_name);
      setParentOpportunity(oppData.parentOpportunity)
      setAccount(oppData.account);
      setNetPrice(oppData.net_price);
      setMargin(oppData.margin);
      setCost(oppData.cost);
      setStage(oppData.stage);
      setPermissionType(oppData.permissionType)
      setProbability(oppData.probability);
      setHours(oppData.hours);
      setCloseDate(oppData.close);
      setStartDate(oppData.start);
      setDuration_weeks(oppData.duration_weeks);
      setOwner(oppData.owner);
      setRegion(oppData.region);
      setVertical(oppData.vertical);
      setPractice(oppData.practice);
      setCurrency(oppData.currency);
      setOrg(oppData.org);
      setOpportunity_Type(oppData.opportunity_type);
    }, [oppData])


    const handleUpdateOpportunity = ()=> {

          
          fetch(`http://localhost:4001/api/opportunity/update/${oppData.opportunity_id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`,
            },
            body: JSON.stringify({
              opportunity_name:opportunityName,
              net_price:netPrice,
              margin:margin,
              cost:cost,
              stage: stage,
              probability:probability,
              hours:hours,
              close:closeDate,
              start:startDate,
              duration_weeks:duration_weeks,
              owner:owner,
              region:region,
              vertical:vertical,
              practice:practice,
              currency:currency,
              org:org,
              opportunity_type:opportunity_type,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Opportunity updated successfully!', data);
              window.location.href = '/account'
            })
            .catch((error) => {
              console.error('Error updating opportunity:', error);
            });
          
          };

          const deleteOpportunity = ()=> {

      
            fetch(`http://localhost:4001/api/opportunity/delete/${opportunityId}`, {

              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`,
              },
  
            })
              .then((response) => response.json())
              .then((data) => {
                console.log('Opportunity Deleted successfully!', data);
                window.location.href = '/account';
              })
              .catch((error) => {
                console.error('Error Deleting opportunity:', error);
              });
            
            };
  



    
  return (
    <div>
         <Navbar />
      <Sidebar/>
      <div className="bread">
        <ul className="breadcrumbs">
          <li className="breadcrumbs--item">
            <a href="./home" className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>HOME</a>
          </li>
          <li className="breadcrumbs--item">
            <a href="./account" className="breadcrumbs--link breadcrumbs--link--active">ACCOUNTS</a>
          </li>
          <li className="breadcrumbs--item">
            <a href="./account" className="breadcrumbs--link breadcrumbs--link--active">{opportunityName}</a>
          </li>
          </ul>
        <hr className="hr" />
      </div>
      <HelpRequest />
      <div id="mainpage">
        <div className="opportunitydata">
          
            <div id="opportunitiesheader1"><a>OPPORTUNITY</a></div>
            <div className="dataleft">
              <div className="containerD1">
                <div id="contentD1">
                  <input  
                  type="text"
                   value={opportunityName}
                   onChange={(e) => setOpportunityName(e.target.value)}
                   />
                  <label>OPPORTUNITY</label>
                </div>
              </div>
              <div className="containerD2">
                <div id="contentD2">
                  <input  type="text"
                   value={parentOpportunity}
                   onChange={(e) => setParentOpportunity(e.target.value)}
                    />
                  <label>PARENT OPPORTUNITY</label>
                </div>
              </div>
              <div className="containerD3">
                <div id="contentD3">
                  <input className
                   type="text"
                   value={account} 
                   onChange={(e) => setAccount(e.target.value)}
                   />
                  <label>ACCOUNT</label>
                </div>
                <div id="contentD3A">
                  <select value={opportunity_type} onChange={(e) =>setOpportunity_Type(e.target.value)} >
                    <option selected disabled />
                    <option>CONSULTING SERVICES OPPORTUNITY</option>
                    <option>EDUCATION SERVICES OPPORTUNITY</option>
                  </select>
                  <label>OPPORTUNITY TYPE</label>
                </div>
              </div>
              <div className="containerD4">
                <div id="contentD4">
                  <select value={stage} onChange={(e) =>setStage(e.target.value)} required>
                    <option selected disabled />
                    <option>QULIFY</option>
                    <option>SCOPE</option>
                    <option>GO NO-GO</option>
                    <option>VALIDATE SOLUTION</option>
                    <option>BUSINESS CASE</option>
                    <option>NEGOTIATE &amp; CLOSE</option>
                    <option>DISCOVERY</option>
                    <option>CLOSED-NO SALE</option>
                  </select>
                  <label>STAGE</label>
                </div>
                <div id="contentD4">
                  <select value={permissionType} onChange={(e) =>setPermissionType(e.target.value)} >
                    <option selected disabled />
                    <option>CONFIDENTIAL</option>
                    <option>DEFAULT</option>
                  </select>
                  <label>PERMISSION TYPE</label>
                </div>
              </div>
              <div className="containerD5">
                <div id="contentD5">
                  <input type="text" value={probability} onChange={(e) =>setProbability(e.target.value)}/>
                  <label>PROBABILITY</label>
                </div>
                
              
        <div id="contentD5">
          <DatePicker
            // selected={closeDate}
            onChange={date => setCloseDate(date)}
            onFocus={() => setCloseDate(new Date())}
            dateFormat="MM/dd/yyyy"
            value={closeDate}
          />
          <label>CLOSE</label>
        </div>
        <div id="contentD5">
          <DatePicker
            // selected={startDate}
            onChange={date => setStartDate(date)}
            onFocus={() => setStartDate(new Date())}
            dateFormat="MM/dd/yyyy"
            value={startDate}
          />
          <label>START</label>
        </div>
   
  
              </div>
            </div>
            <div className="dataright">
              <div className="containerD6">
                <div id="contentD6">
                  <input className type="number" min={0} placeholder="$0.00" value={netPrice} onChange={(e) =>setNetPrice(e.target.value)}/>
                  <label>NET PRICE</label>
                </div>
                <div id="contentD6">
                  <input className type="number" min="0%" placeholder="0%" value={margin} onChange={(e) =>setMargin(e.target.value)}/>
                  <label>MARGIN</label>
                </div>
              </div>
              <div className="containerD7">
                <div id="contentD7">
                  <input className type="number" min={0} placeholder="$0.00" value={cost} onChange={(e) =>setCost(e.target.value)}/>
                  <label>COST</label>
                </div>
                <div id="contentD7">
                  <input className type="number" min="0%" placeholder value={duration_weeks} onChange={(e) =>setDuration_weeks(e.target.value)}/>
                  <label>WEEKS</label>
                </div>
              </div>
              <div className="containerD8">
                <div id="contentD8">
                  <input className type="number" min={0} placeholder  />
                  <label>LIST PRICE</label>
                </div>
                <div id="contentD8">
                  <input className type="number" min="0%" placeholder />
                  <label>DISCOUNT</label>
                </div>
              </div>
              <div className="containerD9">
                <div id="contentD9">
                  <input className type="number" min={0} placeholder value={hours} onChange={(e) =>setHours(e.target.value)}/>
                  <label>HOURS</label>
                </div>
                <div id="contentD9">
                  <input className type="number" min="0%" placeholder />
                  <label>AVG RATE</label>
                </div>
              </div>
              <div className="containerD10">
                <div id="contentD10">
                  <select value={org} onChange={(e) =>setOrg(e.target.value)}>
                    <option selected disabled />
                    <option>AFRICA</option>
                    <option>ALL OTHER AP</option>
                    <option>AP-ALL OTHER</option>
                    <option>AP-AUS/JP</option>
                    <option>AP-CHINA</option>
                    <option>AP-INDIA</option>
                    <option>ARGENTINA</option>
                    <option>AUSTRALIA</option>
                  </select>
                  <label>ORG</label>
                </div>
                <div id="contentD10">
                  <select id="currency" name="currency" value={currency} onChange={(e) =>setCurrency(e.target.value)}>
                    <option selected disabled />
                    <option value="AFN">Afghan Afghani</option>
                    <option value="ALL">Albanian Lek</option>
                    
                  </select>
                  <label>CURRENCY</label>
                </div>
              </div>
            </div>
        
        </div>
        {/*OPPORTUNITY DETAILS  */}
        <div className="opportunitydetails">
          <form action="#">
            <div className="leftdetail">
              <button type="button" className="bbtndetails" onClick={myfunctionData} id="clickmedetails">
                <b>DETAILS &nbsp; <span className="fa fa-angle-down" /></b></button>
              <div id="oppodetails" className="hidden1">
                <div className="containerD11">
                  <div id="contentD11">
                    <textarea placeholder="Enter Description" defaultValue={""} />
                    <label>DESCRIPTION</label>
                  </div>
                  <div className="containerDleft">
                    <div id="contentD12">
                      <input type="text" value={owner} onChange={(e) =>setOwner(event.target.value) }/>
                      <label>OWNER</label>
                    </div>
                    <div id="contentD12">
                      <select>
                        <option selected disabled />
                        <option>NO RESULT FOUND</option>
                      </select>
                      <label>DELIVERY MANAGER</label>
                    </div>
                    <div id="contentD13">
                      <input type="text" onfocus="(this.type='date')" />
                      <label>DUE DATE</label>
                    </div>
                    <div id="contentD14">
                      <select>
                        <option selected disabled />
                        <option>REQUESTED</option>
                        <option>IN PROGRESS</option>
                        <option>ON HOLD</option>
                        <option>SUBMITTED</option>
                        <option>REJECTED</option>
                        <option>APPROVED</option>
                      </select>
                      <label>STATUS</label>
                    </div>
                  </div>
                  <div className="containerDright">
                    <div id="contentD15">
                      <select  value={region} onChange={(e) =>setRegion(event.target.value)} required>
                        <option selected disabled />
                        <option value>AP</option>
                        <option value>EMEA</option>
                        <option value>LA</option>
                        <option value>NA</option>
                      </select>
                      <label>REGION</label>
                    </div>
                    <div id="contentD15">
                      <select value={vertical} onChange={(e)=>setVertical(e.target.value)} required>
                        <option selected disabled />
                        <option value>BANKING</option>
                        <option value>CHEMICALS</option>
                        <option value>CONSTRUCTION &amp; ENGG</option>
                        <option value>COSULTING SERVICES</option>
                        <option value>CONSUMER PRODUCTS</option>
                        <option value>EDUCATION</option>
                        <option value>ENTERTAINMENT &amp; LEISURE</option>
                        <option value>FINANCIAL SERVICES</option>
                      </select>
                      <label>VERTICAL</label>
                    </div>
                    <div id="contentD16">
                      <select value={practice} onChange={(e)=>setPractice(e.target.value)} required>
                        <option selected disabled />
                        <option value>DBA</option>
                        <option value>DSOM</option>
                        <option value>EDUCATION</option>
                        <option value>IZOT</option>
                      </select>
                      <label>PRACTICE</label>
                    </div>
                    <div id="contentD17">
                      <select required>
                        <option selected disabled />
                        <option value>BMC DEAL REVIEW REPORT</option>
                        <option value>BMC DEAL REVIEW REPORT-MULTI WORKSTREAM/CCO</option>
                        <option value>BMC ENGAGEMENT SUMMARY</option>
                        <option value>BMC EXPERT SERVICES SOW</option>
                        <option value>BMC FRAMEWORK SOW-SINGLE WORKSTREAM </option>
                        <option value>BMC SURVEY REVIEW-CTM IMPL.</option>
                        <option value>EDU DIFF REGION</option>
                        <option value>EDUCATION APPROVAL TEMPLATE</option>
                        <option value>EDUCATION ORDER SUMMARY DOCUMENT</option>
                        <option value>EDUCATION QUOTE</option>
                        <option value>GARY TEST</option>
                        <option value>ORDER SERVICES OPENAIR REPORT</option>
                      </select>
                      <label>TEMPLATE QUOTE</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* billing and shipping address in opportunitydata */}
        <div className="containerBS">
          <div className="left1" onClick={myFunctionA}> <button type="button" className="bbtn" id="clickme">
              <b>BILLING ADDRESS &nbsp; <span className="fa fa-angle-down" /></b></button>
            <div id="billOne" className="hidden">
              <div className="content9BS">
                <div className="street1BS">
                  <input className="billingBS" type="text" placeholder required />
                  <label>STREET-1</label>
                </div>
                {/* </div>  <div class="content9BS"> */}
                <div className="street2BS">
                  <input className="billingBS" type="text" placeholder required />
                  <label>STREET-2</label>
                </div>
              </div>
              <div className="content9BS">
                <div className="street1BS">
                  <input className="billingBS" type="text" placeholder required />
                  <label>CITY</label>
                </div>
                {/* </div>  <div class="content9BS"> */}
                <div className="street2BS">
                  <input className="billingBS" type="text" placeholder required />
                  <label>STATE</label>
                </div>
              </div>
              <div className="content9BS">
                <div className="street1BS">
                  <input className="billingBS" type="number" placeholder required /> <label>ZIP</label>
                </div>
                {/* </div>  <div class="content9BS"> */}
                <div className="street2BS">
                  <input className="billingBS" type="text" placeholder required />
                  <label>COUNTRY</label>
                </div>
              </div>
              <div className="content9BS"> <input id="pnoBS" className="billingBS" type="number" placeholder style={{marginLeft: '0.9%'}} required />
                <label>PHONE</label>
              </div>
            </div>
          </div>
          <div className="right1"> <button type="button" onClick={myFunctionB} className="sbtn" id="clikhere">
              <b>SHIPPING ADDRESS &nbsp;<span className="fa fa-angle-down" /></b></button>
            <div id="ship" className="hidden">
              <div className="content10BS">
                <div className="street1BS">
                  <input className="billingBS" type="text" placeholder required />
                  <label id="l1">STREET-1</label>
                </div>
                {/* <div class="content10BS"> */}
                <div className="street2BS"> <input className="billingBS" type="text" placeholder required />
                  <label>STREET-2</label>
                </div>
              </div>
              <div className="content10BS">
                <div className="street1BS">
                  <input className="billingBS" type="text" placeholder required /> <label>CITY</label>
                </div>
                {/* </div>  <div class="content10BS"> */}
                <div className="street2BS">
                  <input className="billingBS" type="text" placeholder required />
                  <label>STATE</label>
                </div>
              </div>
              <div className="content10BS">
                <div className="street1BS">
                  <input className="billingBS" id="zip" type="number" placeholder required />
                  <label>ZIP</label>
                </div>
                {/* </div>  <div class="content10BS"> */}
                <div className="street2BS">
                  <input className="billingBS" type="text" placeholder required />
                  <label>COUNTRY</label>
                </div>
              </div>
              <div className="content10BS"> <input id="pnoBS" className="billingBS" type="number" placeholder style={{marginLeft: '0.9%'}} required />
                <label>PHONE</label>
              </div>
            </div>
          </div>
        </div>
        {/* opportunity quote table */}
        <div className="total">
          <div className="downloadandreload">
            <div className="downloadquotes">
              <button className="xlbutton1" onClick={exportData1}>
                <span className="fa fa-file-excel-o" /></button>
              <div>
                <label>DOWNLOAD</label>
              </div>
            </div>
            <div className="quoteshead">
              <b>QUOTES</b>
            </div>
            <div className="reload">
              <span className="fa fa-refresh" />
              <div>
                <label>RELOAD</label>
              </div>
            </div>
          </div>
        </div>
        <div className="listquotes">
          <form>
            <table id="tblStocksQuotes" cellPadding={0} cellSpacing={0}>
              <tbody><tr className="ellipsisquotes">
                  <th>PRIMARY</th>
                  <th>STATUS</th>
                  <th>QUOTE</th>
                  <th>DESCRIPTION</th>
                  <th>LAST EDITED</th>
                  <th>BY</th>
                  <th>NET PRICE</th>
                  <th>MARGIN</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>98</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>D</td>
                  <td>E</td>
                  <td>F</td>
                  <td>G</td>
                  <td>H</td>
                </tr>
                <tr>
                  <td>J</td>
                  <td>K</td>
                  <td>L</td>
                  <td>M</td>
                  <td>N</td>
                  <td>O</td>
                  <td>P</td>
                  <td>Q</td>
                </tr>
              </tbody></table>
            <br />
            <div className="plus-quotes">
              <a href="./quotecreation"><i className="fa fa-plus" /></a>
            </div>
         
           
          </form>
             {/* delete and update  opportunity */}
          <div className="deleteoppo">
          <button className="update_opportunity" onClick={handleUpdateOpportunity}>UPDATE OPPORTUNITY</button>
           <button className="delete_opportunity" onClick={deleteOpportunity}>DELETE OPPORTUNITY</button>
             
            </div>
          
        </div>
        
        </div>
 {/* sidebar */}
   
  

    <div className="slide">
            <div id="mySidebar" className="sidebar1">
              {/* <a href="javascript:void(0)" >x</a> */}
              <div className="navside">
                <button className="dropdown-btn" id="sidetogglebid" onClick={handleClickBidTeam}>BID TEAM<i className="fa fa-angle-down" style={{ color: 'black', fontSize: '12px', float: 'right' }} />
                </button>
                <div className="dropdown-container" id='bidOpen'>
                <form action="">
                    <input type="search" name="ownerName" id="oname" placeholder="Enter Name to be searched" required />
                    <input type="submit" id="search" hidden />
                    <label for="search"><i className="fa-solid fa-check"></i></label>
                </form>
            </div>
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
              <div className="navside"> <button className="dropdown-btn" id="sidetoggle1" onClick={handleClickNotes}>NOTES <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '12px', float: 'right' }} />
              </button>
                <div className="dropdown-container" id='notesOpen'>
                  <form action><input type="text" name="new" id="send" placeholder="Type your Note" /><button id="sent1"><i className="fa fa-send-o blue-color" style={{ color: '#045679' }} /></button> </form>
                </div>
              </div>
              <div className="navside">
                <button className="dropdown-btn" id="sidetoggle2" onClick={handleClickExternal}>EXTERNAL REFERENCES
                  <i className="fa fa-angle-down" style={{ color: 'black', fontSize: '12px', float: 'right' }} />
                </button>
                <div className="dropdown-container" id='externOpen'>
                  <form action><input type="text" name="id" id="eid" /><label htmlFor id="lab">EXTERNAL
                    REFERENCES ID</label><br />
                    <input type="text" name="id" id="eid2" />
                    <label htmlFor id="lab">EXTERNAL REFERENCES ID 2</label>
                    <br /><input type="text" name="id" id="cfid" /><label htmlFor id="lab">CRM
                      REFERENCE</label>
                  </form>
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
              <button id="mainsidebaroppo" className="openbtnact" onClick={handleOpenCloseOppo}>
              <i className="fa-light fa-less-than" style={{ fontSize: '14px' }} /></button>
              </div>
          </div>  
      
      </div>
  )
}

export default OpportunitiesData