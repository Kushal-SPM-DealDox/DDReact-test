import React, { useEffect } from 'react'
import "../Accounts/Accounts.css"
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar';
import { myFunctionA, myFunctionB, myFunctionC, accountList, exportData } from '../Accounts/AccountFlex';
import {
  handleOpenClose, copyText, copyLink, handleClickFiles, handleClickNotes, handleClickExternal,
  handleClickTimestamp, handleClickInternal, handleClickLink, displayFileName
} from './AccountSidebar';
import './AccountSidebar.css';
import WriteFlex from '../../components/WriteFlex';
import HelpRequest from '../../components/HelpRequest';
import '../Accounts/AccountSidebar.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Addinfo from "../../components/Addinfo"
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLocation } from 'react-router-dom';
import { event } from 'jquery';

const Account = () => {

  const [account_key, setAccountkey] = useState('');
  const [accounts, setAccounts] = useState('');
  const [owner, setOwner] = useState('');
  const [parentAccount, setParentAccount] = useState('');
  const [description, setDescription] = useState('');
  const [region, setRegion] = useState('');
  const [industry, setIndustry] = useState('');
  const [vertical, setVertical] = useState('');
  const [type, setType] = useState('');
  const [billingStreet1, setBillingStreet1] = useState('');
  const [billingStreet2, setBillingStreet2] = useState('');
  const [billingCity, setBillingCity] = useState('');
  const [billingState, setBillingState] = useState('');
  const [billingZip, setBillingZip] = useState('');
  const [billingCountry, setBillingCountry] = useState('');
  const [billingPhone, setBillingPhone] = useState('');
  const [shippingStreet1, setShippingStreet1] = useState('');
  const [shippingStreet2, setShippingStreet2] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [shippingState, setShippingState] = useState('');
  const [shippingZip, setShippingZip] = useState('');
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingPhone, setShippingPhone] = useState('');

  const { user } = useAuthContext();
  console.log(user);

  const [opportunityData, setOpportunityData] = useState([]);

 

  //API to send data to oppurtunityData page end

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;



  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const handleRowClick = () => {
  //   navigate('/opportunitiesdata');
  // };

  const renderTableRows = () => {
    // Rows data
    const rows = [
      // { name: 'tier1', quote: '', status: '', closeDate: '', owner: '', revenue: '', margin: '' },
      // { name: 'row #2', quote: '', status: '', closeDate: '', owner: '', revenue: '', margin: '' },
      // { name: 'row #3', quote: '', status: '', closeDate: '', owner: '', revenue: '', margin: '' },
      // { name: 'row #4', quote: '', status: '', closeDate: '', owner: '', revenue: '', margin: '' },
      // { name: 'row #5', quote: '', status: '', closeDate: '', owner: '', revenue: '', margin: '' },
      // { name: 'row #6', quote: '', status: '', closeDate: '', owner: '', revenue: '', margin: '' },
      // { name: 'row #7', quote: '', status: '', closeDate: '', owner: '', revenue: '', margin: '' },
      // { name: 'row #8', quote: '', status: '', closeDate: '', owner: '', revenue: '', margin: '' },
      // { name: 'row #9', quote: '', status: '', closeDate: '', owner: '', revenue: '', margin: '' },
      // { name: 'row #10', quote: '', status: '', closeDate: '', owner: '', revenue: '', margin: '' },
      // { name: 'row #11', quote: '', status: '', closeDate: '', owner: '', revenue: '', margin: '' },
      // { name: 'row #12', quote: '', status: '', closeDate: '', owner: '', revenue: '', margin: '' },
      // { name: 'row #13', quote: '', status: '', closeDate: '', owner: '', revenue: '', margin: '' },
      // { name: 'row #14', quote: '', status: '', closeDate: '', owner: '', revenue: '', margin: '' },
      // { name: 'row #15', quote: '', status: '', closeDate: '', owner: '', revenue: '', margin: '' },
      // { name: 'row #16', quote: '', status: '', closeDate: '', owner: '', revenue: '', margin: '' }
    ];

    // Calculate indexes for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Filter rows based on current page
    const currentRows = rows.slice(startIndex, endIndex);

    // Render table rows
    return opportunityData.length>0?opportunityData.map((row, index) => (
      //onClick={handleRowClick}
      <tr key={index} onClick={() => sendOpurtunity(row)}>
        <td >{row.opportunity_name}</td>
        <td>{row.quote}</td>
        <td>{row.status}</td>
        <td>{row.closeDate}</td>
        <td>{row.owner}</td>
        <td>{row.revenue}</td>
        <td>{row.margin}</td>
      </tr>
    )):<></>;
  };

  const renderPagination = () => {
    // Calculate total number of pages
    const totalRows = 16;
    const totalPages = Math.ceil(totalRows / itemsPerPage);

    // Render pagination controls
    return (
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );
  };

  const { state: account } = useLocation();
  const accountdata = account;
  console.log(accountdata);

  // console.log("ACCDATA - " + accData);

  useEffect(() => {
    
    setAccountkey(accountdata ? accountdata.account_key : '');
    setAccounts(accountdata ? accountdata.accounts : '');
    setOwner(accountdata ? accountdata.owner : '');
    setParentAccount(accountdata ? accountdata.parent_account : '');
    setDescription(accountdata ? accountdata.description : '');
    setRegion(accountdata ? accountdata.region : '');
    setIndustry(accountdata ? accountdata.industry : '');
    setVertical(accountdata ? accountdata.vertical : '');
    setType(accountdata ? accountdata.type : '');
    setBillingStreet1(accountdata ? accountdata.billing_street1 : '');
    setBillingStreet2(accountdata ? accountdata.billing_street2 : '');
    setBillingCity(accountdata ? accountdata.billing_city : '');
    setBillingState(accountdata ? accountdata.billing_state : '');
    setBillingZip(accountdata ? accountdata.billing_zip : '');
    setBillingCountry(accountdata ? accountdata.billing_country : '');
    setBillingPhone(accountdata ? accountdata.billing_phone : '')
    setShippingStreet1(accountdata ? accountdata.shipping_street1 : '');
    setShippingStreet2(accountdata ? accountdata.shipping_street2 : '');
    setShippingCity(accountdata ? accountdata.shipping_city : '');
    setShippingState(accountdata ? accountdata.shipping_state : '');
    setShippingZip(accountdata ? accountdata.shipping_zip : '');
    setShippingCountry(accountdata ? accountdata.shipping_country : '');


  }, [accountdata])


  console.log("@#$%^");
  console.log(account_key);

  const handleUpdateAccount = () => {
    fetch(`/api/accounts/update/${accountdata.account_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        accounts: accounts,
        owner: owner,
        parent_account: parentAccount,
        description: description,
        region: region,
        industry: industry,
        vertical: vertical,
        type: type,
        billing_street1: billingStreet1,
        billing_street2: billingStreet2,
        billing_city: billingCity,
        billing_state: billingState,
        billing_zip: billingZip,
        billing_country: billingCountry,
        billing_phone: billingPhone,
        shipping_street1: shippingStreet1,
        shipping_street2: shippingStreet2,
        shipping_city: shippingCity,
        shipping_country: shippingCountry,
        shipping_state: shippingState,
        shipping_zip: shippingZip,
        shipping_country: shippingCountry,
        shipping_phone: shippingPhone,

      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error updating Account');
        }
      })
      .then((data) => {
        console.log('Account updated successfully!', data);
        alert('Account updated successfully!');
        // You can choose to update the UI or perform any other actions here
      })
      .catch((error) => {
        console.error('Error updating Account:', error);
      });
  }

  const handleDeleteAccount = ()=> {

      
    fetch(`/api/accounts/delete/${accountdata.account_id}`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },

    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Account Deleted successfully!', data);
        alert('Account Deleted successfully!');
      })
      .catch((error) => {
        console.error('Error Deleting Account:', error);
      });
    };

//****************************************Opportunity section start ***************************************
useEffect(() => {


  const getOpportunityData = async () => {
    try {
      const response = await fetch('/api/opportunity/get', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },

      });
      if (response.ok) {
        const oppData = await response.json();
        console.log(oppData);
        console.log(oppData.data + "-----+--------+-------+--------+-------+");
        setOpportunityData(oppData.data);

        if (opportunityData == null) {
          try {
            const opporData = oppData.data[0];


            // if(accDaata != null){
            //     if(window.location.pathname != '/account/create'){
            //   navigate('/account', {state: { accData} });
            //     }

            // }

          } catch (error) {
            console.log(error);
          }
        }

      } else {
        console.log('Error:', response.statusText);
      }
    } catch (error) {
      console.log(error);
    }


  };
  if (user != "" && user != null) {
    getOpportunityData();
  }

}, [user]);

//API to get data of opportunity using key 
// useEffect(() => {


//   const getOpportunityData = async () => {
//     try {
//       const response = await fetch(`http://localhost:4001/api/opportunity/get/${account_key}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${user.token}`,
//         },

//       });
//       if (response.ok) {
//         const oppData = await response.json();
//         console.log(oppData);
//         console.log(oppData.data + "-----+--------+-------+--------+-------+");
//         setOpportunityData(oppData.data);

//         if (opportunityData == null) {
//           try {
//             const opporData = oppData.data[0];


            // if(accDaata != null){
            //     if(window.location.pathname != '/account/create'){
            //   navigate('/account', {state: { accData} });
            //     }

            // }

//           } catch (error) {
//             console.log(error);
//           }
//         }

//       } else {
//         console.log('Error:', response.statusText);
//       }
//     } catch (error) {
//       console.log(error);
//     }


//   };
//   if (user != "" && user != null) {
//     getOpportunityData();
//   }

// }, [user, account_key]);

//API to send data to oppurtunityData page
const navigate = useNavigate();

const sendOpurtunity = async (row) => {
  try {
    navigate('/opportunitiesdata', { state: { row } });
  } catch (error) {
    console.log(error);
  }
}
//Opportunity section end *******************************************************************************

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="bread">
        <ul className="breadcrumbs">
          <li className="breadcrumbs--item">
            <a href="./home" className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>HOME</a>
          </li>
          <li className="breadcrumbs--item">
            <a href="./account" className="breadcrumbs--link breadcrumbs--link--active">ACCOUNTS</a>
          </li>
          <ol style={{ float: 'right', listStyle: 'none' }}>
            <a href="/account" className="breadcrumbs--link breadcrumbs--link--active" ><i className="fa fa-pen" style={{ fontSize: '15px', marginRight: '10px' }} /></a>
            <a href="#" className="breadcrumbs--link breadcrumbs--link--active" onClick={accountList}><i className="fa fa-table" style={{ fontSize: '15px', marginRight: '10px' }} /></a>
          </ol>
        </ul>
        <hr className="hr" />
      </div>
      <HelpRequest />
      <div className="row" id="rows">
        <WriteFlex />

        {/* <div className="plusicon">
          <a href="/account/create"><i className="fa fa-plus" /></a>
        </div> */}
        <div className="right">
          <div id="header"><a>ACCOUNTS</a></div>
          <div>
            
              <div className="containerA1">
                <div id="content1">
                  <input className="inputTextA1" type="text" placeholder value={accounts} onChange={(e) => setAccounts(e.target.value)} />
                  <label>ACCOUNT</label>
                </div>
                <div id="content2">
                  <input className="inputTextA1" type="text" placeholder value={owner} onChange={(e) => setOwner(e.target.value)} />
                  <label>OWNER</label>
                </div>
              </div>
              <div className="containerA2">
                <div id="content3">
                  <input type="text" className="inputTextA1" value={parentAccount} onChange={(e) => setParentAccount(e.target.value)} />
                  <label>PARENT ACCOUNT</label>
                </div>
              </div>
              <div className="containerA3">
                <div id="content4">
                  <input type="text" className="inputTextA1" placeholder value={description} onChange={(e) => setDescription(e.target.value)} />
                  <label>DESCRIPTION</label>
                </div>
              </div>
              <div className="containerA4">
                <div id="content5">
                  <select value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option selected disabled />
                    <option value="AP">AP</option>
                    <option value="EMEA">EMEA</option>
                    <option value="LA">LA</option>
                    <option value="NA">NA</option>
                  </select>
                  <label>REGION</label>
                </div>
                <div id="content6">
                  <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
                    <option selected disabled />
                    <option value="BUSINESS SERVICES">BUSINESS SERVICES</option>
                    <option value="FINANCE AND INSURENCE">FINANCE AND INSURENCE</option>
                    <option value="MANUFACTURING">MANUFACTURING</option>
                    <option value="MEDIA,ENTERTAINMENT,& LEISURE">MEDIA,ENTERTAINMENT,&amp; LEISURE</option>
                    <option value="PUBLIC SECTOR">PUBLIC SECTOR</option>
                    <option value="RETAIL & WHOLESALE TRADE">RETAIL &amp; WHOLESALE TRADE</option>
                    <option value="UTILITIES & TELECOMMUNICATION">UTILITIES &amp; TELECOMMUNICATION</option>
                    <option value="OTHER">OTHER</option>
                  </select>
                  <label>INDUSTRY</label>
                </div>
              </div>
              <div className="containerA5">
                <div id="content7">
                  <select value={vertical} onChange={(e) => setVertical(e.target.value)}>
                    <option selected disabled />
                    <option value="BANKING">BANKING</option>
                    <option value="CHEMICALS">CHEMICALS</option>
                    <option value="CONSTRUCTION & ENGG">CONSTRUCTION &amp; ENGG</option>
                    <option value="COSULTING SERVICES">COSULTING SERVICES</option>
                    <option value="CONSUMER PRODUCTS">CONSUMER PRODUCTS</option>
                    <option value="EDUCATION">EDUCATION</option>
                    <option value="ENTERTAINMENT & LEISURE">ENTERTAINMENT &amp; LEISURE</option>
                    <option value="FINANCIAL SERVICES">FINANCIAL SERVICES</option>
                  </select>
                  <label>VERTICAL</label>
                </div>
                <div id="content8">
                  <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option selected disabled />
                    <option value="CUSTOMER">CUSTOMER</option>
                    <option value="PROSPECT">PROSPECT</option>
                    <option value="INTERNAL">INTERNAL</option>
                    <option value="GENERIC">GENERIC</option>
                  </select>
                  <label>TYPE</label>
                </div>
              </div>
            
          </div>
          {/* tables */}
          {/* BILLING ADDRESS */}
          <div className="containerA6">
            <div className="left1" >
              <button type="button" className="bbtn" onClick={myFunctionA} id="clickme">
                <b>BILLING ADDRESS &nbsp; <span className="fa fa-angle-down" /></b></button>
              <div id="billOne" className="hidden">
                <div className="content9">
                  <div className="street1">
                    <input className="billing" type="text" placeholder value={billingStreet1} onChange={(e) => setBillingStreet1(e.target.value)} />
                    <label>STREET-1</label>
                  </div>
                  {/* </div>  <div class="content9"> */}
                  <div className="street2">
                    <input className="billing" type="text" placeholder value={billingStreet2} onChange={(e) => setBillingStreet2(e.target.value)} />
                    <label>STREET-2</label>
                  </div>
                </div>
                <div className="content9">
                  <div className="street1">
                    <input className="billing" type="text" placeholder value={billingStreet2}  onChange={(e) =>setBillingStreet2(e.target.value)} /> <label>CITY</label>
                  </div>
                  {/* </div>  <div class="content9"> */}
                  <div className="street2">
                    <input className="billing" type="text" placeholder value={billingState} onChange={(e)=> setBillingState(e.target.value)}/>
                    <label>STATE</label>
                  </div>
                </div>
                <div className="content9">
                  <div className="street1">
                    <input className="billing" type="text" placeholder value={billingZip} onChange={(e)=> setBillingZip(e.target.value)}/> <label>ZIP</label>
                  </div>
                  {/* </div>  <div class="content9"> */}
                  <div className="street2">
                    <input className="billing" type="text" placeholder value={billingCountry} onChange={(e)=>setBillingCountry(e.target.value)}/>
                    <label>COUNTRY</label>
                  </div>
                </div>
                <div className="content9">
                  <input className="billing" type="text" placeholder style={{ marginLeft: '0.8%' }} value={billingPhone} onChange={(e)=>setBillingPhone(e.target.value)} />
                  <label>PHONE</label>
                </div>
              </div>
            </div>
            <div className="right1">
              <button type="button" onClick={myFunctionB} className="sbtn" id="clikhere">
                <b>SHIPPING ADDRESS &nbsp;<span className="fa fa-angle-down" /></b></button>
              <div id="ship" className="hidden">
                <div className="content10">
                  <div className="street1">
                    <input className="billing" type="text" placeholder value={shippingStreet1} onChange={(e)=>setShippingStreet1(e.target.value)}/>
                    <label id="l1">STREET-1</label>
                  </div>
                  {/* <div class="content10"> */}
                  <div className="street2"> <input className="billing" type="text" placeholder value={shippingStreet2} onChange={(e)=> setShippingStreet2(e.target.value)}/>
                    <label>STREET-2</label>
                  </div>
                </div>
                <div className="content10">
                  <div className="street1">
                    <input className="billing" type="text" placeholder value={shippingCity} onChange={(e)=> setShippingCity(e.target.value)} /> <label>CITY</label>
                  </div>
                  {/* </div>  <div class="content10"> */}
                  <div className="street2">
                    <input className="billing" type="text" placeholder value={shippingState} onChange={(e)=> setShippingState(e.target.value)}/>
                    <label>STATE</label>
                  </div>
                </div>
                <div className="content10">
                  <div className="street1">
                    <input className="billing" type="text" placeholder value={shippingZip} onChange={(e)=> setShippingZip(e.target.value)}/> <label>ZIP</label>
                  </div>
                  {/* </div>  <div class="content10"> */}
                  <div className="street2">
                    <input className="billing" type="text" placeholder value={shippingCountry} onChange={(e)=>setBillingCountry(e.target.value)}/>
                    <label>COUNTRY</label>
                  </div>
                </div>
                <div className="content10"> <input className="billing" type="text" placeholder style={{ marginLeft: '0.7%' }} value={shippingPhone} onChange={(e)=>setShippingPhone(e.target.value)}/>
                  <label>PHONE</label>
                </div>
              </div>
            </div>
          </div>
          <Addinfo />
          {/* --------------opportunities----------------- */}
          <div id='oppopagination'>
            <table className="oppotable">
              <thead>
                <tr>
                  <th >Name</th>
                  <th >Quote</th>
                  <th >Status</th>
                  <th >Close Date</th>
                  <th >Owner</th>
                  <th >Revenue</th>
                  <th >Margin</th>
                </tr>
              </thead>
              <tbody>{renderTableRows()}</tbody>
            </table>
            <br></br>
            {renderPagination()}
          </div>

          {/*-------------------- + opportunities------------------ */}
          <div className="plus-oppertunities">
            <a href={`./opportunities?data=${encodeURIComponent(JSON.stringify(account_key))}`}><i className="fa fa-plus" /></a>
          </div>

          {/* ------------delete account------------- */}
          <div className="deleteacc">
            <div className="project">
              <b>PROJECTS</b>
              <p>No Projects</p>
            </div>
            <button className="update_account" style={{color:'green'}} onClick={handleUpdateAccount}>UPDATE ACCOUNT</button>
            <button className='delete_account'  style={{ color: 'red' }}  onClick={handleDeleteAccount}>DELETE ACCOUNT</button>
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

      {/*---------- accountslisting------------- */}
      <div id="actlist" style={{ display: 'none', paddingTop: '68px' }}>
        <div className="acl">
          <b>ACCOUNTS LISTING</b>
        </div>
        <button className="xlbutton" onClick={exportData}>
          <span className="fa fa-file-excel-o" /></button>
        <div className="list">
          <table id="tblStocks" cellPadding={0} cellSpacing={0}>
            <tbody><tr className="ellipsis">
              <th>Account Name</th>
              <th>Owner</th>
              <th>Teritory</th>
              <th>Vertical</th>
              <th>Industry</th>
              <th>xcelaerate partner</th>
              <th>Commercial Region</th>
              <th>Commercial Sub Region</th>
              <th>Vat Number</th>
              <th>Delivery Area</th>
            </tr>
              <tr>
                <td>Life HealthCare INC</td>
                <td>A</td>
                <td>35.58</td>
                <td>38.45</td>
                <td>+8.06</td>
                <td>35.58</td>
                <td>38.45</td>
                <td>+8.06</td>
                <td>38.45</td>
                <td>+8.06</td>
              </tr>
              <tr>
                <td>Life HealthCare INC</td>
                <td>A</td>
                <td />
                <td />
                <td>+8.06</td>
                <td>35.58</td>
                <td>38.45</td>
                <td>+8.06</td>
                <td>38.45</td>
                <td>+8.06</td>
              </tr>
              <tr>
                <td>Life HealthCare INC</td>
                <td>A</td>
                <td />
                <td />
                <td>+8.06</td>
                <td>35.58</td>
                <td>38.45</td>
                <td>+8.06</td>
                <td>38.45</td>
                <td>+8.06</td>
              </tr>
              <tr>
                <td>Life HealthCare INC</td>
                <td>A</td>
                <td />
                <td />
                <td>+8.06</td>
                <td>35.58</td>
                <td>38.45</td>
                <td>+8.06</td>
                <td>38.45</td>
                <td>+8.06</td>
              </tr>
            </tbody></table>
          <br />
        </div>
      </div>

    </div>
  );
}

export default Account;