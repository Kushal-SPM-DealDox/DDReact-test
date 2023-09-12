import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { myFunctionA, myFunctionB, accountList, exportData } from './AccountFlex'
import WriteFlex from '../../components/WriteFlex'
import {
  handleOpenClose, copyText, copyLink, handleClickFiles, handleClickNotes, handleClickExternal,
  handleClickTimestamp, handleClickInternal, handleClickLink, displayFileName
} from './AccountSidebar';
import HelpRequest from '../../components/HelpRequest';


import { useAuthContext } from "../../hooks/useAuthContext";


const CreateAccount = () => {



  const { user } = useAuthContext();
  console.log(user);

  const [accountname, setAccountName] = useState('');
  const [owner, setOwner] = useState('');
  const [parentaccount, setParentAccount] = useState('');
  const [description, setDescription] = useState('');
  const [region, setRegion] = useState('');
  const [industry, setIndustry] = useState('');
  const [vertical, setVertical] = useState('');
  const [type, setType] = useState('');
  const [street1, setStreet1] = useState('');
  const [street2, setStreet2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [street12, setStreet12] = useState('');
  const [street21, setStreet21] = useState('');
  const [city2, setCity2] = useState('');
  const [state2, setState2] = useState('');
  const [zip2, setZip2] = useState('');
  const [country2, setCountry2] = useState('');
  const [phone2, setPhone2] = useState('');
  // const [accountname, setAccountName] = useState('');
  // const [accountname, setAccountName] = useState('');
  // const [accountname, setAccountName] = useState('');
  // const [accountname, setAccountName] = useState('');
  // const [accountname, setAccountName] = useState('');
  // const [accountname, setAccountName] = useState('');
  // const [accountname, setAccountName] = useState('');
  // const [accountname, setAccountName] = useState('');
  // const [accountname, setAccountName] = useState('');
  // const [accountname, setAccountName] = useState('');
  // const [accountname, setAccountName] = useState('');
  
  useEffect (()=>{

  }, [user]);
  const saveaccounts = async (event) => {

    event.preventDefault();
    try {
      const response = await fetch('/api/accounts/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify({

          accounts: accountname,
          owner: owner,
          parent_account: parentaccount,
          description: description,
          region: region,
          industry: industry,
          vertical: vertical,
          type: type,
          street1: street1,
          street2: street2,
          city: city,
          state: state,
          zip: zip,
          country: country,
          phone: phone,
          street12: street12,
          street21: street21,
          city2: city2,
          state2: state2,
          zip2: zip2,
          country2: country2,
          phone2: phone2,

        }),
      });
      if (response.ok) {
        console.log('success');
        alert('Account Created Successfully.');
        window.location.href = '/account';
      } else {
        console.error('Request failed:', response.status);
        alert('Account already exits');
      }
    } catch (error) {
      console.log(error);
    }
  }



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
        <div className="right" id="createAcc">
          <div id="header"><a>ACCOUNTS</a></div>
          <div>
            <form onSubmit={saveaccounts}>
              <div className="containerA1">
                <div id="content1">
                  <input className="inputTextA1" type="text" placeholder onChange={(e) => setAccountName(e.target.value)} value={accountname} required />
                  <label>ACCOUNTS</label>
                </div>
                <div id="content2">
                  <input className="inputTextA1" type="text" placeholder onChange={(e) => setOwner(e.target.value)} value={owner} required />
                  <label>OWNER</label>
                </div>
              </div>
              <div className="containerA2">
                <div id="content3">
                  <input type="text" className="inputTextA1" placeholder="Please enter 3 or more charecters" onChange={(e) => setParentAccount(e.target.value)} value={parentaccount} />
                  <label>PARENT ACCOUNT</label>
                </div>
              </div>
              <div className="containerA3">
                <div id="content4">
                  <input type="text" className="inputTextA1" placeholder onChange={(e) => setDescription(e.target.value)} value={description}/>
                  <label>DESCRIPTION</label>
                </div>
              </div>
              <div className="containerA4">
                <div id="content5">
                  <select  onChange={(e) => setRegion(e.target.value)} value={region} >
                    <option selected disabled />
                    <option value="AP">AP</option>
                    <option value="EMEA">EMEA</option>
                    <option value="LA">LA</option>
                    <option value="NA">NA</option>
                  </select>
                  <label>REGION</label>
                </div>
                <div id="content6">
                  <select onChange={(e) => setIndustry(e.target.value)} value={industry}>
                    <option selected disabled  />
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
                  <select onChange={(e) => setVertical(e.target.value)} value={vertical}>
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
                <div id="content8" onChange={(e) => setType(e.target.value)} value={type}>
                  <select>
                    <option selected disabled />
                    <option value="CUSTOMER">CUSTOMER</option>
                    <option value="PROSPECT">PROSPECT</option>
                    <option value="INTERNAL">INTERNAL</option>
                    <option value="GENERIC">GENERIC</option>
                  </select>
                  <label>TYPE</label>
                </div>
              </div>
              {/* </form> */}
            {/* </form></div> */}
          {/* tables */}
          {/* BILLING ADDRESS */}
          <div className="containerA6">
            <div className="left1" > <button type="button" className="bbtn" onClick={myFunctionA} id="clickme">
              <b>BILLING ADDRESS &nbsp; <span className="fa fa-angle-down" /></b></button>
              <div id="billOne" className="hidden">
                <div className="content9">
                  <div className="street1">
                    <input className="billing" type="text" placeholder onChange={(e) => setStreet1(e.target.value)} value={street1} />
                    <label>STREET-1</label>
                  </div>
                  {/* </div>  <div class="content9"> */}
                  <div className="street2">
                    <input className="billing" type="text" placeholder onChange={(e) => setStreet2(e.target.value)} value={street2} />
                    <label>STREET-2</label>
                  </div>
                </div>
                <div className="content9">
                  <div className="street1">
                    <input className="billing" type="text" placeholder onChange={(e) => setCity(e.target.value)} value={city}/>
                    <label>CITY</label>
                  </div>
                  {/* </div>  <div class="content9"> */}
                  <div className="street2">
                    <input className="billing" type="text" placeholder onChange={(e) => setState(e.target.value)} value={state}/>
                    <label>STATE</label>
                  </div>
                </div>
                <div className="content9">
                  <div className="street1">
                    <input className="billing" type="number" placeholder onChange={(e) => setZip(e.target.value)} value={zip}/> <label>ZIP</label>
                  </div>
                  {/* </div>  <div class="content9"> */}
                  <div className="street2">
                    <input className="billing" type="text" placeholder onChange={(e) => setCountry(e.target.value)} value={country}/>
                    <label>COUNTRY</label>
                  </div>
                </div>
                <div className="content9"> <input id="pno" className="billing" type="number" placeholder style={{ marginLeft: '0.8%' }} onChange={(e) => setPhone(e.target.value)} value={phone}/>
                  <label>PHONE</label>
                </div>
              </div>
            </div>
            <div className="right1"> <button type="button" onClick={myFunctionB} className="sbtn" id="clikhere">
              <b>SHIPPING ADDRESS &nbsp;<span className="fa fa-angle-down" /></b></button>
              <div id="ship" className="hidden">
                <div className="content10">
                  <div className="street1">
                    <input className="billing" type="text" placeholder onChange={(e) => setStreet12(e.target.value)} value={street12}/>
                    <label id="l1">STREET-1</label>
                  </div>
                  {/* <div class="content10"> */}
                  <div className="street2"> <input className="billing" type="text" placeholder onChange={(e) => setStreet21(e.target.value)} value={street21} />
                    <label>STREET-2</label>
                  </div>
                </div>
                <div className="content10">
                  <div className="street1">
                    <input className="billing" type="text" placeholder onChange={(e) => setCity2(e.target.value)} value={city2} /> <label>CITY</label>
                  </div>
                  {/* </div>  <div class="content10"> */}
                  <div className="street2">
                    <input className="billing" type="text" placeholder onChange={(e) => setState2(e.target.value)} value={state2} />
                    <label>STATE</label>
                  </div>
                </div>
                <div className="content10">
                  <div className="street1">
                    <input className="billing" id="zip" type="number" placeholder onChange={(e) => setZip2(e.target.value)} value={zip2} />
                    <label>ZIP</label>
                  </div>
                  {/* </div>  <div class="content10"> */}
                  <div className="street2">
                    <input className="billing" type="text" placeholder onChange={(e) => setCountry2(e.target.value)} value={country2} />
                    <label>COUNTRY</label>
                  </div>
                </div>
                <div className="content10"> <input id="pno" className="billing" type="number" placeholder style={{ marginLeft: '0.7%' }}
                 onChange={(e) => setPhone2(e.target.value)} value={phone2} />
                  <label>PHONE</label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="savcanc">
            <button id="reset" type="reset" style={{ color: 'red' }}>CANCEL</button>           
            <button id="save" type="submit"  style={{ color: 'green' }}>SAVE</button>
          </div>
          </form></div>

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
          </div>{/* </div> */}
          <div><button id="mainsidebar" className="openbtnact" onClick={handleOpenClose}>
            <i className="fa-light fa-less-than" style={{ fontSize: '14px' }} /></button></div>
        </div>
      </div>


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
  )
}

export default CreateAccount