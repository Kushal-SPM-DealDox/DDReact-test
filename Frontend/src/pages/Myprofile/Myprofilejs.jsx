import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import HelpRequest from '../../components/HelpRequest'
import './Myprofile.css'
const Myprofile = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="bread">
                <ul className="breadcrumbs">
                    <li className="breadcrumbs--item">
                        <a href='/home' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>HOME</a>
                    </li>
                    <li className="breadcrumbs--item">
                        <a href="" className="breadcrumbs--link breadcrumbs--link--active">MYPROFILE</a>
                    </li>
                </ul>
                <hr className="hr" />
            </div>
            <HelpRequest />
            <div className="myprofile">
                <div id="myprofileheader">MY PROFILE</div>
                <form>
                    <div className="grid-containermy" style={{ marginLeft: '66px',marginTop:'16px' }}>
                        <div className="left-grid-item1">
                            <i className="fa fa-circle" aria-hidden="true" />
                            <a className="reauthenticate" href="#">&nbsp;REAUTHENTICATE SALESFORCE&nbsp;</a>
                        </div>
                        <div className="right-grid-item2">
                            <div className="containerP1">
                                <div id="contentP1">
                                    <input className type="text" readOnly />
                                    <label>FIRST NAME</label>
                                </div>
                                <div id="contentP1">
                                    <input className type="text" readOnly />
                                    <label>LAST NAME</label>
                                </div>
                            </div>
                            <div className="containerP2">
                                <div id="contentP2">
                                    <input className type="text" readOnly />
                                    <label>TITLE</label>
                                </div>
                                <div id="contentP2">
                                    <input className type="text" readOnly />
                                    <label>MANAGER</label>
                                </div>
                            </div>
                            <div className="containerP3">
                                <div id="contentP3">
                                    <input className type="text" readOnly />
                                    <label>PHONE</label>
                                </div>
                                <div id="contentP3">
                                    <input className type="email" />
                                    <label>EMAIL</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="role">
                        <b>ROLE</b>
                    </div>
                    <div className="roles">
                        <i>Roles are defined in the Admin Security section on the left</i>
                    </div>
                    <div className="containerP4">
                        <div id="contentP4A">
                            <input className type="checkbox" />
                            <label>INTEGRATION ACCESS ONLY</label>
                        </div>
                        <div id="contentP4B">
                            <a className="delete1" href="#">&nbsp;DELETE REFRESH TOKEN&nbsp;</a>
                            <label />
                        </div>
                    </div>
                    <div className="containerP5">
                        <div id="contentP5">
                            <input className type="text" />
                            <label>SECURITY ROLE</label>
                        </div>
                        <div id="contentP5">
                            <input className type="text" />
                            <label>PASSWORD EXPIRATION DATE</label>
                        </div>
                    </div>
                </form>
                <div className="preferences">
                    <b>PREFERENCES</b>
                </div>
                <form>
                    <div className="containerP6">
                        <div id="contentP6"> <select>
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
                        <div id="contentP6">
                            <select>
                                <option selected disabled />
                                <option value>AFRICA/ABIDJAN(FEBRUARY 16TH,6:40AM)</option>
                                <option value>AFRICA/ACCRA(FEBRUARY 16TH,6:40AM)</option>
                                <option value>AFRICA/ADDIS_ABABA(FEBRUARY 16TH,9:40AM)</option>
                                <option value>AFRICA/ALGIERS(FEBRUARY 16TH,7:40AM)</option>
                                <option value>AFRICA/ASMARA(FEBRUARY 16TH,9:40AM)</option>
                                <option value>AFRICA/ASMERA(FEBRUARY 16TH,9:40AM)</option>
                                <option value>AFRICA/BAMAKO(FEBRUARY 16TH,6:40AM)</option>
                                <option value>AFRICA/BANGUI(FEBRUARY 16TH,7:40AM)</option>
                            </select>
                            <label>TIME ZONE</label>
                        </div>
                    </div>
                    <div className="containerP7">
                        <div id="contentP7"> <select>
                            <option selected disabled />
                            <option value="Afrikaans">Afrikaans</option>
                            <option value="Albanian">Albanian</option>
                            <option value="Arabic">Arabic</option>
                            <option value="Armenian">Armenian</option>
                            <option value="Basque">Basque</option>
                            <option value="Bengali">Bengali</option>
                            <option value="Bulgarian">Bulgarian</option>
                            <option value="Catalan">Catalan</option>
                            <option value="Cambodian">Cambodian</option>
                            <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                            <option value="Croatian">Croatian</option>
                            <option value="Czech">Czech</option>
                            <option value="Danish">Danish</option>
                            <option value="Dutch">Dutch</option>
                            <option value="English">English</option>
                            <option value="Estonian">Estonian</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finnish">Finnish</option>
                            <option value="French">French</option>
                            <option value="Georgian">Georgian</option>
                            <option value="German">German</option>
                            <option value="Greek">Greek</option>
                            <option value="Gujarati">Gujarati</option>
                            <option value="Hebrew">Hebrew</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Hungarian">Hungarian</option>
                            <option value="Icelandic">Icelandic</option>
                            <option value="Indonesian">Indonesian</option>
                            <option value="Irish">Irish</option>
                            <option value="Italian">Italian</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Javanese">Javanese</option>
                            <option value="kannada">kannada</option>
                            <option value="Korean">Korean</option>
                            <option value="Latin">Latin</option>
                            <option value="Latvian">Latvian</option>
                            <option value="Lithuanian">Lithuanian</option>
                            <option value="Macedonian">Macedonian</option>
                            <option value="Malay">Malay</option>
                            <option value="Malayalam">Malayalam</option>
                            <option value="Maltese">Maltese</option>
                            <option value="Maori">Maori</option>
                            <option value="Marathi">Marathi</option>
                            <option value="Mongolian">Mongolian</option>
                            <option value="Nepali">Nepali</option>
                            <option value="Norwegian">Norwegian</option>
                            <option value="Persian">Persian</option>
                            <option value="Polish">Polish</option>
                            <option value="Portuguese">Portuguese</option>
                            <option value="Punjabi">Punjabi</option>
                            <option value="Quechua">Quechua</option>
                            <option value="Romanian">Romanian</option>
                            <option value="Russian">Russian</option>
                            <option value="Samoan">Samoan</option>
                            <option value="Serbian">Serbian</option>
                            <option value="Slovak">Slovak</option>
                            <option value="Slovenian">Slovenian</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Swahili">Swahili</option>
                            <option value="Swedish ">Swedish </option>
                            <option value="Tamil">Tamil</option>
                            <option value="Tatar">Tatar</option>
                            <option value="Telugu">Telugu</option>
                            <option value="Thai">Thai</option>
                            <option value="Tibetan">Tibetan</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Turkish">Turkish</option>
                            <option value="Ukrainian">Ukrainian</option>
                            <option value="Urdu">Urdu</option>
                            <option value="Uzbek">Uzbek</option>
                            <option value="Vietnamese">Vietnamese</option>
                            <option value="Welsh">Welsh</option>
                            <option value="Xhosa">Xhosa</option>
                        </select>
                            <label>LANGUAGE</label>
                        </div>
                        <div id="contentP7">
                            <select>
                                <option selected disabled />
                                <option value>NONE</option>
                                <option value>BY EMAIL</option>
                            </select>
                            <label>NOTIFICATIONS</label>
                        </div>
                    </div>
                    <div>
                        <div className="loginemail">
                            <b>LOGIN EMAIL &amp; PASSWORD</b>
                        </div>
                    </div>
                </form>
                <div>
                    <button id="edit" onClick={myFunctionE}>&nbsp;&nbsp;&nbsp;&nbsp;EDIT&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </div>
                </div>
            <div>
                <div id="myLogin" className="loginemailpage">
                    <b>LOGIN EMAIL &amp; PASSWORD</b>
                    <div className="loginleft">
                        <form>
                            <div className="containerL1">
                                <div id="contentL1">
                                    <input className type="email" />
                                    <label id="contentL1label">EMAIL</label>
                                </div>
                                <div id="contentL2">
                                    <input className type="password" />
                                    <label id="contentL2label">CURRENT PASSWORD</label>
                                </div>
                                <div id="contentL3">
                                    <input className type="password" placeholder="Enter Password" />
                                    <label id="contentL3label">NEW PASSWORD</label>
                                </div>
                                <div id="contentL4">
                                    <input className type="password" placeholder="Enter Password" />
                                    <label id="contentL4label">RE-TYPE NEW PASSWORD</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="saveandcance2">
                        <button id="reset2" type="reset" style={{ color: 'red' }}><a>&nbsp;CANCEL&nbsp;</a></button>
                        <button id="save2" type="submit" style={{ color: 'green' }}><a>&nbsp;SAVE&nbsp;</a></button>
                    </div>
                    {/* <div class="loginright">
                <p>Please make sure your password meets all requirements mentioned below.</p>
                <p>Also, your new password cannot be any of your previous 12 passwords</p>
                <div class="passconditions">
                   <p>1. Has one or more numbers</p>
                   <p>2. Has one or more uppercase letters</p> 
                   <p>3. Has one or more lowercase letters</p>
                   <p>4. Has one or more special characters</p>
                   <p>5. Cannot contain the email:</p>
                </div>
            </div> */}
                </div>
            </div>
        </div>
    )
    function myFunctionE() {
        var mp = document.getElementById("myLogin");
        var edit =document.getElementById('edit');
        if (mp.style.display === "block") {
            mp.style.display = "none";
            edit.style.backgroundColor='white'
            edit.style.color='#216c98'
        } 
        else {
            mp.style.display = "block";
            edit.style.backgroundColor='#216c98'
            edit.style.color='white'
        }
    }
}

export default Myprofile