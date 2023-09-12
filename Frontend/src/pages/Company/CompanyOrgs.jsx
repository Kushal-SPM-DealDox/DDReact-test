import React from 'react'
import Navbar from '../../components/Navbar'
import AdminSidebar from '../../components/AdminSidebar'
import WriteFlex from '../../components/WriteFlex';
import { useState } from 'react';
import '../Company/CompanyOrgs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faAngleUp, faAngleDown, faGear, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import Addinfo from '../../components/Addinfo';
import { handleClickTimestamp, handleOpenClose } from '../Accounts/AccountSidebar'

const CompOrgs = () => {
    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [inputcodeValue, setInputcodeValue] = useState("");
    const [codeerrorMessage, setcodeErrorMessage] = useState("");
    const [inputHoursValue, setInputHoursValue] = useState("");
    const [HourserrorMessage, setHoursErrorMessage] = useState("");

    const handleChange = (event) => {
        const orgLabel = document.getElementById('orgLabel');
        const externallabel = document.getElementById('externallabel');


        const inputField = event.target;
        const value = inputField.value;
        setInputValue(value);



        if (value.length > 0) {
            setErrorMessage("");

            orgLabel.style.display = "block";

            inputField.style.outlineColor = "#0f6b93";


        } else {
            setErrorMessage("THE FIELD IS REQUIRED");

            orgLabel.style.display = "none";


            inputField.style.outlineColor = "red";

        }

    };



    // ===============================================================
    const handleOrgCodeChange = (event) => {

        const orglcodelabel = document.getElementById('orglcodelabel');
        const externallabel = document.getElementById('externallabel');


        const inputField = event.target;
        const value = inputField.value;
        setInputcodeValue(value);



        if (value.length > 0) {
            setcodeErrorMessage("");
            // orgLabel.style.display = "block";
            orglcodelabel.style.display = "block";
            // Defaulthourslabel.style.display = "block";
            inputField.style.outline = "2px solid #0f6b93";
            externallabel.style.top = "68%";

        } else {
            setcodeErrorMessage("THE FIELD IS REQUIRED");
            orglcodelabel.style.display = "none";
            inputField.style.outline = "2px solid red";
            externallabel.style.top = "55%";

        }

    };
    // =================================================================

    const handleDefaulthoursChange = (event) => {

        const Defaulthourslabel = document.getElementById('Defaulthourslabel');
        const inputField = event.target;
        const value = inputField.value;
        setInputHoursValue(value);



        if (value.length > 0) {
            setHoursErrorMessage("");

            Defaulthourslabel.style.display = "block";

            inputField.style.outlineColor = "#0f6b93";

        } else {
            setHoursErrorMessage("THE FIELD IS REQUIRED");

            Defaulthourslabel.style.display = "none";

            inputField.style.outlineColor = "red";

        }

    };
    const handleVaraibleError = (event) => {
        const colalabel = document.getElementById('colalabel');
        const inputField = event.target;
        const value = inputField.value;
        setInputValue(value);

        if (value.length > 0) {
            setErrorMessage("");
        } else {
            setErrorMessage("THE FIELD IS REQUIRED");
            colalabel.style.display = "none";

        }

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.length === 0) {
            setErrorMessage("THE FIELD IS REQUIRED");
        }

        if (inputcodeValue.length === 0) {
            setcodeErrorMessage("THE FIELD IS REQUIRED");
        }
        if (inputHoursValue.length === 0) {
            setHoursErrorMessage("THE FIELD IS REQUIRED");
        }
        else {
            // Proceed with form submission or further processing
        }
    };

    // =======================================================================


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
                        <a href='/catalog' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>CATALOG</a>
                    </li>
                    <li className="breadcrumbs--item">
                        <a href="" className="breadcrumbs--link breadcrumbs--link--active">COMPANY ORGANISATION</a>
                    </li>
                </ul>
                <hr className="hr" />
            </div>
            {/* -------------------------- */}
            <div className="roworg" id="orgsrows">
                <WriteFlex />
                <div className="plusiconDoctype">
                    <i className="fa fa-plus" onClick={hideshowplusicon} />
                </div>
                <div id="rightOrgshead">
                    <div id="Orgheader"><a>COMPANY ORGANISATIONS</a></div>


                    <div class="grid1">
                        {/* <div id="orgname">
                            <input id="orgnameinput" type="text" placeholder="Enter Name" required></input>
                            
                            <label id="orglabel">ORG NAME</label>
                        </div> */}
                        <div id="orgname">
                            <form id='orgform' onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    id="orgnameinput"
                                    value={inputValue}
                                    onChange={handleChange}
                                    placeholder="Enter Name"
                                />
                                <label id="orgLabel">ORG NAME</label>
                                {errorMessage && <label id="emsg">{errorMessage}</label>}

                            </form>
                        </div>

                        <div id="activeorg">
                            <input id="activeinputorg" type="checkbox"></input>
                            <label id="activelabelorg">ACTIVE?</label>
                        </div>
                    </div>
                    <div id="grid2">
                        <div id="orgcode">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    id="orgcodeinput"
                                    value={inputcodeValue}
                                    onChange={handleOrgCodeChange}
                                    placeholder="Enter Code"
                                />
                                <label id="emsg1">{codeerrorMessage}</label>
                                {/* <input id="orgcodeinput" type="text" placeholder="Enter Code" required></input> */}

                                <label id="orglcodelabel">ORG CODE</label>
                            </form>
                        </div>
                        <div id="external">
                            <input id="externalinputorg" type="text" placeholder="External Reference" required></input>
                            <label id="externallabelorg">EXTERNAL REFERENCE</label>
                        </div>

                    </div>
                    <div id="grid3">
                        <div id="parent">
                            <input id="parentinput" type="text" placeholder="Select Parent" required onClick={handleParentClick}></input>
                            <label id="parentlabel">PARENTORG</label>
                            <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
                            <ul id="parentlist" style={{ display: 'none' }} >
                                <li id="listitems9">item1</li>
                                <li id="listitems9">item2</li>
                                <li id="listitems9">item3</li>
                            </ul>
                        </div>
                        <div id="orgtype">
                            <input id="orgtypeinput" type="text" onClick={handleOrgTypesClick} />
                            <label id="orgtypelabel">ORG TYPE</label>

                            <ul id="orgtypelist" style={{ display: 'none' }} >
                                <li id="listitems1">SOURCING</li>
                                <li id="listitems1">SALES</li>
                                <li id="listitems1">BOTH</li>
                            </ul>
                            <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />

                        </div>
                    </div>

                    <div id="grid4">
                        <div id="defaulttime">
                            <input id="defaulttimeinput" type="text" onClick={handleDefaulttimeClick} placeholder="Select UOM" required />
                            <label id="defaulttimelabel">DEFAULT TIME UOM</label>
                            <ul id="defaulttimelist" style={{ display: 'none' }}>
                                <li id="listitems2">HOURS</li>
                                <li id="listitems2">DAYS</li>
                            </ul>
                            <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
                        </div>
                        <div id="Defaultweekhours">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    id="Defaulthoursinput"
                                    value={inputHoursValue}
                                    onChange={handleDefaulthoursChange}
                                    placeholder="Enter Hours"
                                />
                                <label id="emsg2">{HourserrorMessage}</label>
                                {/* <input id="Defaulthoursinput" type="numbers" placeholder="Enter Hours" required></input> */}
                                <label id="Defaulthourslabel">DEFAULT WEEK HOURS</label>
                            </form>
                        </div>

                    </div>

                    <div id="grid5">
                        <div id="languageorg">
                            <input id="languageorginput" type="text" onClick={handleLanguageOrgClick} />
                            <label id="languageorglabel">LANGUAGE</label>
                            <ul id="languageorglist" style={{ display: 'none' }}>
                                <li id="languageli">Afrikaans</li>
                                <li id="listitems3">Albanian</li>
                                <li id="listitems3">Arabic</li>
                                <li id="listitems3">Armenian</li>
                                <li id="listitems3">Basque</li>
                                <li id="listitems3">Bengali</li>
                                <li id="listitems3">Bulgarian</li>
                                <li id="listitems3">Catalan</li>
                                <li id="listitems3">Cambodian</li>
                                <li id="listitems3">Chinese (Mandarin)</li>
                                <li id="listitems3">Croatian</li>
                                <li id="listitems3">Czech</li>
                                <li id="listitems3">Danish</li>
                                <li id="listitems3">Dutch</li>
                                <li id="listitems3">English</li>
                                <li id="listitems3">Estonian</li>
                                <li id="listitems3">Fiji</li>
                                <li id="listitems3">Finnish</li>
                                <li id="listitems3">French</li>
                                <li id="listitems3">Georgian</li>
                                <li id="listitems3">German</li>
                                <li id="listitems3">Greek</li>
                                <li id="listitems3">Gujarati</li>
                                <li id="listitems3">Hebrew</li>
                                <li id="listitems3">Hindi</li>
                                <li id="listitems3">Hungarian</li>
                                <li id="listitems3">Icelandic</li>
                                <li id="listitems3">Indonesian</li>
                                <li id="listitems3">Irish</li>
                                <li id="listitems3">Italian</li>
                                <li id="listitems3">Japanese</li>
                                <li id="listitems3">Javanese</li>
                                <li id="listitems3">Kannada</li>
                                <li id="listitems3">Korean</li>
                                <li id="listitems3">Latin</li>
                                <li id="listitems3">Latvian</li>
                                <li id="listitems3">Lithuanian</li>
                                <li id="listitems3">Macedonian</li>
                                <li id="listitems3">Malay</li>
                                <li id="listitems3">Malayalam</li>
                                <li id="listitems3">Maltese</li>
                                <li id="listitems3">Maori</li>
                                <li id="listitems3">Marathi</li>
                                <li id="listitems3">Mongolian</li>
                                <li id="listitems3">Nepali</li>
                                <li id="listitems3">Norwegian</li>
                                <li id="listitems3">Persian</li>
                                <li id="listitems3">Polish</li>
                                <li id="listitems3">Portuguese</li>
                                <li id="listitems3">Punjabi</li>
                                <li id="listitems3">Quechua</li>
                                <li id="listitems3">Romanian</li>
                                <li id="listitems3">Russian</li>
                                <li id="listitems3">Samoan</li>
                                <li id="listitems3">Serbian</li>
                                <li id="listitems3">Slovak</li>
                                <li id="listitems3">Slovenian</li>
                                <li id="listitems3">Spanish</li>
                                <li id="listitems3">Swahil</li>
                                <li id="listitems3">Swedish </li>
                                <li id="listitems3">Tamil</li>
                                <li id="listitems3">Tatar</li>
                                <li id="listitems3">Telugu</li>
                                <li id="listitems3">Thai</li>
                                <li id="listitems3">Tibetan</li>
                                <li id="listitems3">Tonga</li>
                                <li id="listitems3">Turkish</li>
                                <li id="listitems3">Ukrainian</li>
                                <li id="listitems3">Urdu</li>
                                <li id="listitems3">Uzbek</li>
                                <li id="listitems3">Vietnamese</li>
                                <li id="listitems3">Welsh</li>
                                <li id="listitems3">Xhosa</li>
                            </ul>
                            <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
                        </div>
                        <div id="currency" >
                            <input id="currencyinput" type="text" onClick={handleCurencyClick}  ></input>
                            <label id="currencylabel">CURRENCY</label>
                            <ul id="currencylist" style={{ display: 'none' }} >

                                <li id="listitems4">Azerbaijani Manat</li>
                                <li id="listitems4">Afghan Afghani</li>
                                <li id="listitems4">Albanian Lek</li>
                                <li id="listitems4">Algerian Dinar</li>
                                <li id="listitems4">Angolan Kwanza</li>
                                <li id="listitems4">Argentine Peso</li>
                                <li id="listitems4">Armenian Dram</li>
                                <li id="listitems4">Aruban Florin</li>
                                <li id="listitems4">Australian Dollar</li>
                                <li id="listitems4">Azerbaijani Manat</li>
                                <li id="listitems4">Bahamian Dollar</li>
                                <li id="listitems4">Bahraini Dinar</li>
                                <li id="listitems4">Barbadian Dollar</li>
                                <li id="listitems4">Belarusian Ruble</li>
                                <li id="listitems4">Belgian Franc</li>
                                <li id="listitems4">Belize Dollar</li>
                                <li id="listitems4">Bermudan Dollar</li>
                                <li id="listitems4">Bhutanese Ngultrum</li>
                                <li id="listitems4">Bitcoin</li>
                                <li id="listitems4">Bolivian Boliviano</li>
                                <li id="listitems4">Bosnia-Herzegovina Convertible Mark</li>
                                <li id="listitems4">Botswanan Pula</li>
                                <li id="listitems4">Brazilian Real</li>
                                <li id="listitems4">British Pound Sterling</li>
                                <li id="listitems4">Brunei Dollar</li>
                                <li id="listitems4">Bulgarian Lev</li>
                                <li id="listitems4">Burundian Franc</li>
                                <li id="listitems4">Cambodian Riel</li>
                                <li id="listitems4">Canadian Dollar</li>
                                <li id="listitems4">Cape Verdean Escudo</li>
                                <li id="listitems4">Cayman Islands Dollar</li>
                                <li id="listitems4">CFA Franc BCEAO</li>
                                <li id="listitems4">CFA Franc BEAC</li>
                                <li id="listitems4">CFP Franc</li>
                                <li id="listitems4">Chilean Peso</li>
                                <li id="listitems4">Chinese Yuan</li>
                                <li id="listitems4">Colombian Peso</li>
                                <li id="listitems4">Comorian Franc</li>
                                <li id="listitems4">Congolese Franc</li>
                                <li id="listitems4">Costa Rican ColÃ³n</li>
                                <li id="listitems4">Croatian Kuna</li>
                                <li id="listitems4">Cuban Convertible Peso</li>
                                <li id="listitems4">Czech Republic Koruna</li>
                                <li id="listitems4">Danish Krone</li>
                                <li id="listitems4">Djiboutian Franc</li>
                                <li id="listitems4">Dominican Peso</li>
                                <li id="listitems4">East Caribbean Dollar</li>
                                <li id="listitems4">Egyptian Pound</li>
                                <li id="listitems4">Eritrean Nakfa</li>
                                <li id="listitems4">Estonian Kroon</li>
                                <li id="listitems4">Ethiopian Birr</li>
                                <li id="listitems4">Euro</li>
                                <li id="listitems4">Falkland Islands Pound</li>
                                <li id="listitems4">Fijian Dollar</li>
                                <li id="listitems4">Gambian Dalasi</li>
                                <li id="listitems4">Georgian Lari</li>
                                <li id="listitems4">German Mark</li>
                                <li id="listitems4">Ghanaian Cedi</li>
                                <li id="listitems4">Gibraltar Pound</li>
                                <li id="listitems4">Greek Drachma</li>
                                <li id="listitems4">Guatemalan Quetzal</li>
                                <li id="listitems4">Guinean Franc</li>
                                <li id="listitems4">Guyanaese Dollar</li>
                                <li id="listitems4">Haitian Gourde</li>
                                <li id="listitems4">Honduran Lempira</li>
                                <li id="listitems4">Hong Kong Dollar</li>
                                <li id="listitems4">Hungarian Forint</li>
                                <li id="listitems4">Icelandic KrÃ³na</li>
                                <li id="listitems4">Indian Rupee</li>
                                <li id="listitems4">Indonesian Rupiah</li>
                                <li id="listitems4">Iranian Rial</li>
                                <li id="listitems4">Iraqi Dinar</li>
                                <li id="listitems4">Israeli New Sheqel</li>
                                <li id="listitems4">Italian Lira</li>
                                <li id="listitems4">Jamaican Dollar</li>
                                <li id="listitems4">Japanese Yen</li>
                                <li id="listitems4">Jordanian Dinar</li>
                                <li id="listitems4">Kazakhstani Tenge</li>
                                <li id="listitems4">Kenyan Shilling</li>
                                <li id="listitems4">Kuwaiti Dinar</li>
                                <li id="listitems4">Kyrgystani Som</li>
                                <li id="listitems4">Laotian Kip</li>
                                <li id="listitems4">Latvian Lats</li>
                                <li id="listitems4">Lebanese Pound</li>
                                <li id="listitems4">Lesotho Loti</li>
                                <li id="listitems4">Liberian Dollar</li>
                                <li id="listitems4">Libyan Dinar</li>
                                <li id="listitems4">Lithuanian Litas</li>
                                <li id="listitems4">Australian Dollar</li>
                                <li id="listitems4">Azerbaijani Manat</li>
                                <li id="listitems4">Bahamian Dollar</li>
                                <li id="listitems4">Bahraini Dinar</li>
                                <li id="listitems4">Barbadian Dollar</li>
                                <li id="listitems4">Belarusian Ruble</li>
                                <li id="listitems4">Belgian Franc</li>
                                <li id="listitems4">Belize Dollar</li>
                                <li id="listitems4">Bermudan Dollar</li>
                                <li id="listitems4">Bhutanese Ngultrum</li>
                                <li id="listitems4">Bitcoin</li>
                                <li id="listitems4">Bolivian Boliviano</li>
                                <li id="listitems4">Bosnia-Herzegovina Convertible Mark</li>
                                <li id="listitems4">Botswanan Pula</li>
                                <li id="listitems4">Brazilian Real</li>
                                <li id="listitems4">British Pound Sterling</li>
                                <li id="listitems4">Brunei Dollar</li>
                                <li id="listitems4">Bulgarian Lev</li>
                                <li id="listitems4">Burundian Franc</li>
                                <li id="listitems4">Cambodian Riel</li>
                                <li id="listitems4">Canadian Dollar</li>
                                <li id="listitems4">Cape Verdean Escudo</li>
                                <li id="listitems4">Cayman Islands Dollar</li>
                                <li id="listitems4">CFA Franc BCEAO</li>
                                <li id="listitems4">CFA Franc BEAC</li>
                                <li id="listitems4">CFP Franc</li>
                                <li id="listitems4">Chilean Peso</li>
                                <li id="listitems4">Chinese Yuan</li>
                                <li id="listitems4">Colombian Peso</li>
                                <li id="listitems4">Comorian Franc</li>
                                <li id="listitems4">Congolese Franc</li>
                                <li id="listitems4">Costa Rican ColÃ³n</li>
                                <li id="listitems4">Croatian Kuna</li>
                                <li id="listitems4">Cuban Convertible Peso</li>
                                <li id="listitems4">Czech Republic Koruna</li>
                                <li id="listitems4">Danish Krone</li>
                                <li id="listitems4">Djiboutian Franc</li>
                                <li id="listitems4">Dominican Peso</li>
                                <li id="listitems4">East Caribbean Dollar</li>
                                <li id="listitems4">Egyptian Pound</li>
                                <li id="listitems4">Eritrean Nakfa</li>
                                <li id="listitems4">Estonian Kroon</li>
                                <li id="listitems4">Ethiopian Birr</li>
                                <li id="listitems4">Euro</li>
                                <li id="listitems4">Falkland Islands Pound</li>
                                <li id="listitems4">Fijian Dollar</li>
                                <li id="listitems4">Gambian Dalasi</li>
                                <li id="listitems4">Georgian Lari</li>
                                <li id="listitems4">German Mark</li>
                                <li id="listitems4">Ghanaian Cedi</li>
                                <li id="listitems4">Gibraltar Pound</li>
                                <li id="listitems4">Greek Drachma</li>
                                <li id="listitems4">Guatemalan Quetzal</li>
                                <li id="listitems4">Guinean Franc</li>
                                <li id="listitems4">Guyanaese Dollar</li>
                                <li id="listitems4">Haitian Gourde</li>
                                <li id="listitems4">Honduran Lempira</li>
                                <li id="listitems4">Hong Kong Dollar</li>
                                <li id="listitems4">Hungarian Forint</li>
                                <li id="listitems4">Icelandic KrÃ³na</li>
                                <li id="listitems4">Indian Rupee</li>
                                <li id="listitems4">Indonesian Rupiah</li>
                                <li id="listitems4">Iranian Rial</li>
                                <li id="listitems4">Iraqi Dinar</li>
                                <li id="listitems4">Israeli New Sheqel</li>
                                <li id="listitems4">Italian Lira</li>
                                <li id="listitems4">Jamaican Dollar</li>
                                <li id="listitems4">Japanese Yen</li>
                                <li id="listitems4">Jordanian Dinar</li>
                                <li id="listitems4">Kazakhstani Tenge</li>
                                <li id="listitems4">Kenyan Shilling</li>
                                <li id="listitems4">Kuwaiti Dinar</li>
                                <li id="listitems4">Kyrgystani Som</li>
                                <li id="listitems4">Laotian Kip</li>
                                <li id="listitems4">Latvian Lats</li>
                                <li id="listitems4">Lebanese Pound</li>
                                <li id="listitems4">Lesotho Loti</li>
                                <li id="listitems4">Liberian Dollar</li>
                                <li id="listitems4">Libyan Dinar</li>
                                <li id="listitems4">Lithuanian Litas</li>
                                <li id="listitems4">Macanese Pataca</li>
                                <li id="listitems4">Macedonian Denar</li>
                                <li id="listitems4">Malagasy Ariary</li>
                                <li id="listitems4">Malawian Kwacha</li>
                                <li id="listitems4">Malaysian Ringgit</li>
                                <li id="listitems4">Maldivian Rufiyaa</li>
                                <li id="listitems4">Mauritanian Ouguiya</li>
                                <li id="listitems4">Mauritian Rupee</li>
                                <li id="listitems4">Mexican Peso</li>
                                <li id="listitems4">Moldovan Leu</li>
                                <li id="listitems4">Mongolian Tugrik</li>
                                <li id="listitems4">Moroccan Dirham</li>
                                <li id="listitems4">Mozambican Metical</li>
                                <li id="listitems4">Myanmar Kyat</li>
                                <li id="listitems4">Namibian Dollar</li>
                                <li id="listitems4">Nepalese Rupee</li>
                                <li id="listitems4">Netherlands Antillean Guilder</li>
                                <li id="listitems4">New Taiwan Dollar</li>
                                <li id="listitems4">New Zealand Dollar</li>
                                <li id="listitems4">Nicaraguan CÃ³rdoba</li>
                                <li id="listitems4">Nigerian Naira</li>
                                <li id="listitems4">North Korean Won</li>
                                <li id="listitems4">Norwegian Krone</li>
                                <li id="listitems4">Omani Rial</li>
                                <li id="listitems4">Pakistani Rupee</li>
                                <li id="listitems4">Panamanian Balboa</li>
                                <li id="listitems4">Papua New Guinean Kina</li>
                                <li id="listitems4">Paraguayan Guarani</li>
                                <li id="listitems4">Peruvian Nuevo Sol</li>
                                <li id="listitems4">Philippine Peso</li>
                                <li id="listitems4">Polish Zloty</li>
                                <li id="listitems4">Qatari Rial</li>
                                <li id="listitems4">Romanian Leu</li>
                                <li id="listitems4">Russian Ruble</li>
                                <li id="listitems4">Samoan Tala</li>
                                <li id="listitems4">Saudi Riyal</li>
                                <li id="listitems4">Seychellois Rupee</li>
                                <li id="listitems4">Sierra Leonean Leone</li>
                                <li id="listitems4">Singapore Dollar</li>
                                <li id="listitems4">Slovak Koruna</li>
                                <li id="listitems4">Solomon Islands Dollar</li>
                                <li id="listitems4">Somali Shilling</li>
                                <li id="listitems4">South African Rand</li>
                                <li id="listitems4">South Korean Won</li>
                                <li id="listitems4">Special Drawing Rights</li>
                                <li id="listitems4">Sri Lankan Rupee</li>
                                <li id="listitems4">St. Helena Pound</li>
                                <li id="listitems4">Swedish Krona</li>
                                <li id="listitems4">Swiss Franc</li>
                                <li id="listitems4">São Tomé and Príncipe Dobra</li>
                                <li id="listitems4">Tajikistani Somoni</li>
                                <li id="listitems4">Tanzanian Shilling</li>
                                <li id="listitems4">Thai Baht</li>
                                <li id="listitems4">Tongan pa'anga</li>
                                <li id="listitems4">Trinidad &amp; Tobago Dollar</li>
                                <li id="listitems4">Tunisian Dinar</li>
                                <li id="listitems4">Turkish Lira</li>
                                <li id="listitems4">Turkmenistani Manat</li>
                                <li id="listitems4">Ugandan Shilling</li>
                                <li id="listitems4">Ukrainian Hryvnia</li>
                                <li id="listitems4">United Arab Emirates Dirham</li>
                                <li id="listitems4">Uruguayan Peso</li>
                                <li id="listitems4">US Dollar</li>
                                <li id="listitems4">Uzbekistan Som</li>
                                <li id="listitems4">Vanuatu Vatu</li>
                                <li id="listitems4">Venezuelan BolÃ­var</li>
                                <li id="listitems4">Vietnamese Dong</li>
                                <li id="listitems4">Yemeni Rial</li>
                                <li id="listitems4">Zambian Kwacha</li>
                            </ul>
                            <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
                        </div>
                    </div>

                    <div id="grid6">
                        <div id="cola">
                            <input id="colainput" type="text" placeholder="Yearly Price Adjustment" onKeyUp={convertToPercentage} />
                            <label id="colalabel">COLA</label>
                            <label id="error-msg"></label>

                        </div>
                        <div id="pola">
                            <input id="polainput" type="text" placeholder="Yearly Costy Adjustment" onKeyUp={convertToPercentagePola} />
                            <label id="polalabel">POLA</label>
                            <label id="error-msg-pola"></label>
                        </div>
                        <div id="cost">
                            <input id="costinput" type="checkbox" />
                            <label id="costlabel">COST READ ONLY</label>

                        </div>
                    </div>

                    <Addinfo />
                    <div id="grid10">
                        <button type="button" id="removeorg"  >Remove Org</button>
                    </div>
                </div>



                {/* sidebar org */}

                <div className="slide">
                    <div id="mySidebar" className="sidebar1">
                        {/* <a href="javascript:void(0)" >x</a> */}



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
                        <button id="mainsidebar" className="openbtnact" onClick={handleOpenClose}>
                            <i className="fa-light fa-less-than" style={{ fontSize: '14px' }} /></button>
                    </div>
                </div>


                {/* -------------------------------------------- */}
            </div>

        </div>


    )
}


// cola percentag and error msg start

function convertToPercentage(event) {
    const colainput = document.getElementById('colainput');
    const colalabel = document.getElementById('colalabel');

    const inputValue = colainput.value;
    const errorMsg = document.getElementById('error-msg');

    // Check if the input value contains only numeric characters
    const numericRegex = /^[0-9]+(\.[0-9]*)?$/;
    if (!numericRegex.test(inputValue)) {
        // Display error message
        colalabel.style.display = "none";
        colainput.style.outline = "2px solid red";

        errorMsg.textContent = 'COLA INVALID NUMBER, PLEASE RE-ENTER';

    } else {
        // Remove error message
        colalabel.style.display = "block";
        errorMsg.textContent = '';
        colainput.style.outline = "2px solid #0f6b93";

    }

    if (event.key === "Enter") {
        event.preventDefault();

        // Rest of your code to convert the input value to percentage
        const parsedValue = parseFloat(inputValue);
        if (!isNaN(parsedValue)) {
            colainput.value = parsedValue.toFixed(2) + '%';
        }
    }
}
window.addEventListener('click', function (event) {
    const colainput = document.getElementById('colainput');

    if (colainput !== null) {
        const inputValue = colainput.value;
        const parsedValue = parseFloat(inputValue);

        if (!isNaN(parsedValue)) {
            colainput.value = parsedValue.toFixed(2) + '%';
        }
    }
});


// cola percentag and error msg end
// pola percentag and error msg
function convertToPercentagePola(event) {
    const polainput = document.getElementById('polainput');
    const polalabel = document.getElementById('polalabel');

    const inputValue = polainput.value;
    const errorMsgPola = document.getElementById('error-msg-pola');

    // Check if the input value contains only numeric characters
    const numericRegex = /^[0-9]+(\.[0-9]*)?$/;
    if (!numericRegex.test(inputValue)) {
        // Display error message
        polalabel.style.display = "none";
        polainput.style.outline = "2px solid red";

        errorMsgPola.textContent = 'POLA INVALID NUMBER, PLEASE RE-ENTER';
    } else {
        // Remove error message
        polalabel.style.display = "block";
        errorMsgPola.textContent = '';
        polainput.style.outline = "2px solid #0f6b93";

    }

    if (event.key === "Enter") {
        event.preventDefault();

        // Rest of your code to convert the input value to percentage
        const parsedValue = parseFloat(inputValue);
        if (!isNaN(parsedValue)) {
            polainput.value = parsedValue.toFixed(2) + '%';
        }
    }
}
// Add event listener to window object
window.addEventListener('click', function (event) {
    const colainput = document.getElementById('polainput');

    if (colainput !== null) {
        const inputValue = colainput.value;
        const parsedValue = parseFloat(inputValue);

        if (!isNaN(parsedValue)) {
            colainput.value = parsedValue.toFixed(2) + '%';
        }
    }
});


// pola percentag and error msg end

// Additional Info display end




// side panel plus icon
export function hideshowplusicon() {
    var header = document.getElementById("headerchange");
    var create = document.getElementById("buttonsectionUpDate")
    header.innerHTML = `ADD DOCUMENT TYPE`;
    create.innerHTML = `CREATE`;
}
// orgtypelist start


export const handleOrgTypesClick = () => {
    const orgtypeList = document.querySelector("#orgtypelist");
    const orgtypeInput = document.querySelector("#orgtypeinput");
    const orgtypeDiv = document.getElementById('orgtype');
    orgtypeList.style.display = orgtypeList.style.display === "none" ? "block" : "none";
    // orgtypeDiv.style.height = '59px';
    // orgtypeDiv.style.zIndex = '1';



    //  ITEM SELECTING
    const handleOrgTypesItemClick = (event) => {
        const selectedOptions = event.target.textContent;
        orgtypeInput.value = selectedOptions;
        orgtypeList.style.display = "none";
    };


    // search filter
    const handleorgtypeInput = () => {
        const filter = orgtypeInput.value.toUpperCase();
        const orgtypeListitems = orgtypeList.querySelectorAll("li");



        orgtypeListitems.forEach(function (listitems1) {
            const text = listitems1.textContent.toUpperCase();
            if (text.indexOf(filter) > -1) {
                listitems1.style.display = "";
            } else {
                listitems1.style.display = "none";
            }
        });
    }
    // ENTER
    const handleOrgtypeInputKeydown = (event) => {
        if (event.keyCode === 13) {
            const visibleItem = orgtypeList.querySelector("li:not([style*='display: none'])");
            if (visibleItem) {
                orgtypeInput.value = visibleItem.textContent;
                orgtypeList.style.display = "none";
            }
        }
    }

    // WINDOWS CLICK
    const handleOrgtypeClick = (event) => {
        if (!orgtypeInput.contains(event.target)) {
            orgtypeList.style.display = "none";
        }
    };


    // ITEM SELECTING
    const orgtypeListitems = orgtypeList.querySelectorAll("li");
    orgtypeListitems.forEach(function (item) {
        item.addEventListener("click", handleOrgTypesItemClick);
    });

    orgtypeInput.addEventListener("input", handleorgtypeInput);
    orgtypeInput.addEventListener("keydown", handleOrgtypeInputKeydown);
    window.addEventListener("click", handleOrgtypeClick);


}
// orgtypelist end



// defaulttimelist start
export const handleDefaulttimeClick = () => {
    const defaulttimeList = document.querySelector("#defaulttimelist");
    const defaulttimeInput = document.querySelector("#defaulttimeinput");
    const defaulttimeDiv = document.getElementById('defaulttime');
    defaulttimeList.style.display = defaulttimeList.style.display === "none" ? "block" : "none";
    // defaulttimeDiv.style.height = '59px';
    // defaulttimeDiv.style.zIndex = '1';


    //  ITEM SELECTING
    const handleDefaulttimeItemClick = (event) => {
        const selectedOptionsList = event.target.textContent;
        defaulttimeInput.value = selectedOptionsList;
        defaulttimeList.style.display = "none";
    };


    // search filter
    const handleDefaulttimeInput = () => {
        const filter = defaulttimeInput.value.toUpperCase();
        const defaulttimeListitems = defaulttimeList.querySelectorAll("li");



        defaulttimeListitems.forEach(function (item) {
            const text = item.textContent.toUpperCase();
            if (text.indexOf(filter) > -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    }
    // ENTER
    const handleDefaulttimeInputKeydown = (event) => {
        if (event.keyCode === 13) {
            const visibleItem = defaulttimeList.querySelector("li:not([style*='display: none'])");
            if (visibleItem) {
                defaulttimeInput.value = visibleItem.textContent;
                defaulttimeList.style.display = "none";
            }
        }
    }

    // WINDOWS CLICK
    const handleDefaulttimeClick = (event) => {
        if (!defaulttimeInput.contains(event.target)) {
            defaulttimeList.style.display = "none";
        }
    };


    // ITEM SELECTING
    const defaulttimeListitems = defaulttimeList.querySelectorAll("li");
    defaulttimeListitems.forEach(function (item) {
        item.addEventListener("click", handleDefaulttimeItemClick);
    });

    defaulttimeInput.addEventListener("input", handleDefaulttimeInput);
    defaulttimeInput.addEventListener("keydown", handleDefaulttimeInputKeydown);
    window.addEventListener("click", handleDefaulttimeClick);

};




// defaulttimelist end


// oLanguagelist start


export const handleLanguageOrgClick = () => {
    const languageorgList = document.querySelector("#languageorglist");
    const languageorgInput = document.querySelector("#languageorginput");
    const languagergDiv = document.getElementById('languageorg');
    languageorgList.style.display = languageorgList.style.display === "none" ? "block" : "none";
    // languagergDiv.style.height = '59px';
    // languagergDiv.style.zIndex = '1';



    //  ITEM SELECTING
    const handleLanguageOrgItemClick = (event) => {
        const selectedOptionsList = event.target.textContent;
        languageorgInput.value = selectedOptionsList;
        languageorgList.style.display = "none";
    };


    // search filter
    const handleLanguageOrgInput = () => {
        const filter = languageorgInput.value.toUpperCase();
        const languageorgListitems = languageorgList.querySelectorAll("li");



        languageorgListitems.forEach(function (item) {
            const text = item.textContent.toUpperCase();
            if (text.indexOf(filter) > -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    }
    // ENTER
    const handleOrgtypeInputKeydown = (event) => {
        if (event.keyCode === 13) {
            const visibleItem = languageorgList.querySelector("li:not([style*='display: none'])");
            if (visibleItem) {
                languageorgInput.value = visibleItem.textContent;
                languageorgList.style.display = "none";
            }
        }
    }

    // WINDOWS CLICK
    const handleLanguageOrgoutsideClick = (event) => {
        if (!languageorgInput.contains(event.target)) {
            languageorgList.style.display = "none";
        }
    };


    // ITEM SELECTING
    const languageorgListitems = languageorgList.querySelectorAll("li");
    languageorgListitems.forEach(function (item) {
        item.addEventListener("click", handleLanguageOrgItemClick);
    });

    languageorgInput.addEventListener("input", handleLanguageOrgInput);
    languageorgInput.addEventListener("keydown", handleOrgtypeInputKeydown);
    window.addEventListener("click", handleLanguageOrgoutsideClick);

}
// Language end




// currency start


export const handleCurencyClick = () => {
    const currencyList = document.querySelector("#currencylist");
    const currencyInput = document.querySelector("#currencyinput");
    const currencyDiv = document.getElementById('currency');
    currencyList.style.display = currencyList.style.display === "none" ? "block" : "none";
    // currencyDiv.style.height = '59px';
    // currencyDiv.style.zIndex = '1';


    //  ITEM SELECTING
    const handleCurencyItemClick = (event) => {
        const selectedOptions = event.target.textContent;
        currencyInput.value = selectedOptions;
        currencyList.style.display = "none";
    };


    // search filter
    const handleCurencyInput = () => {
        const filter = currencyInput.value.toUpperCase();
        const currencyListitems = currencyList.querySelectorAll("li");



        currencyListitems.forEach(function (item) {
            const text = item.textContent.toUpperCase();
            if (text.indexOf(filter) > -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    }
    // ENTER
    const handleCurencyInputKeydown = (event) => {
        if (event.keyCode === 13) {
            const visibleItem = currencyList.querySelector("li:not([style*='display: none'])");
            if (visibleItem) {
                currencyInput.value = visibleItem.textContent;
                currencyList.style.display = "none";
            }
        }
    }

    // WINDOWS CLICK
    const handleCurencyOutsideClick = (event) => {
        if (!currencyInput.contains(event.target)) {
            currencyList.style.display = "none";
        }
    };


    // ITEM SELECTING
    const currencyListitems = currencyList.querySelectorAll("li");
    currencyListitems.forEach(function (item) {
        item.addEventListener("click", handleCurencyItemClick);
    });

    currencyInput.addEventListener("input", handleCurencyInput);
    currencyInput.addEventListener("keydown", handleCurencyInputKeydown);
    window.addEventListener("click", handleCurencyOutsideClick);

}
// currency end




// parent start


export const handleParentClick = () => {
    const parentList = document.querySelector("#parentlist");
    const parentInput = document.querySelector("#parentinput");
    const parentDiv = document.getElementById('parent');
    parentList.style.display = parentList.style.display === "none" ? "block" : "none";
    // parentDiv.style.height = '59px';
    parentList.style.top = '-18px';


    //  ITEM SELECTING
    const handleParentItemClick = (event) => {
        const selectedOptionsparent = event.target.textContent;
        parentInput.value = selectedOptionsparent;
        parentList.style.display = "none";
    };


    // search filter
    const handleParentInput = () => {
        const filter = parentInput.value.toUpperCase();
        const parentListitems = parentList.querySelectorAll("li");



        parentListitems.forEach(function (item) {
            const text = item.textContent.toUpperCase();
            if (text.indexOf(filter) > -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    }
    // ENTER
    const handleParentInputKeydown = (event) => {
        if (event.keyCode === 13) {
            const visibleItem = parentList.querySelector("li:not([style*='display: none'])");
            if (visibleItem) {
                parentInput.value = visibleItem.textContent;
                parentList.style.display = "none";
            }
        }
    }

    // WINDOWS CLICK
    const handleParentOutsideClick = (event) => {
        if (!parentInput.contains(event.target)) {
            parentList.style.display = "none";
        }
    };


    // ITEM SELECTING
    const parentListitems = parentList.querySelectorAll("li");
    parentListitems.forEach(function (item) {
        item.addEventListener("click", handleParentItemClick);
    });

    parentInput.addEventListener("input", handleParentInput);
    parentInput.addEventListener("keydown", handleParentInputKeydown);
    window.addEventListener("click", handleParentOutsideClick);

}


export const handleToggleClick = () => {
    const listBegin = document.querySelector("#listbegin");
    const inputSection = document.querySelector(".input-section");
    listBegin.style.display = listBegin.style.display === "none" ? "block" : "none";
    // parentDiv.style.height = '15px';
    // parentDiv.style.zIndex = '2';
}


export default CompOrgs;


