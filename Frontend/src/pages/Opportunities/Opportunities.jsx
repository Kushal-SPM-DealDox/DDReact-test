import React, { useEffect, useState } from 'react';
import './Opportunities.css'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { useAuthContext } from "../../hooks/useAuthContext";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
const Opportunities = () => {

  const { user } = useAuthContext();
  console.log(user);

 const [accountkay, setAccountKay] = useState(null);
 const [opportunityName, setOpportunityName] = useState('');
 const [netPrice, setNetPrice] = useState('');
 const [margin, setMargin] = useState('');
 const [cost, setCost] = useState(0);
 const [stage, setStage] = useState('');
 const [probability, setProbability] = useState('');
 const [hours, setHours] = useState('');
 const [startDate, setStart] = useState(null); 
 const [closeDate, setClose] = useState(null); 
 const [durationWeek, setDurationWeek] = useState(0);
 const [owner, setOwner] = useState('');
 const [region, setRegion] = useState('');
 const [vertical, setVertical] = useState('');
 const [practice, setPractice] = useState('');
 const [currency, setCurrency] = useState('');
 const [org, setOrg] = useState('');
 const [opportunityType, setOpportunityType] = useState('');


 useEffect(() => {

  const urlParams = new URLSearchParams(window.location.search);
  const dataParam = urlParams.get('data');

  if (dataParam) {
    const decodedData = JSON.parse(decodeURIComponent(dataParam));
    setAccountKay(decodedData);
  }

}, []);

console.log(accountkay)

 const saveOpportunity = async (event) => {

  event.preventDefault();
  try {
    const response = await fetch('/api/opportunity/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify({

        account_key: accountkay,
        opportunity_name: opportunityName,
        net_price: netPrice,
        margin: margin,
        cost: cost,
        stage: stage,
        probability: probability,
        hours: hours,
        close: closeDate,
        start: startDate,
        duration_weeks: durationWeek,
        owner: owner,
        region: region,
        vertical: vertical,
        practice: practice,
        currency: currency,
        org: org,
        opportunity_type: opportunityType,
       

      }),
    });
    if (response.ok) {
      console.log('success');
      alert('Opportunity Created Successfully.');
      window.location.href = '/account';
    } else {
      console.error('Request failed:', response.status);
      alert('Opportunity already exits');
    }
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div className="bread">
        <ul className="breadcrumbs">
          <li className="breadcrumbs--item">
            <a href="./home" className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>HOME</a>
          </li>
          <li className="breadcrumbs--item">
            <a href="./account" className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>ACCOUNTS</a>
          </li>
          <li className="breadcrumbs--item">
            <a  className="breadcrumbs--link breadcrumbs--link--active">OPPORTUNITY</a>
          </li>
          </ul>
        <hr className="hr" />
      </div>
         <div className="oppo">
        <div id="opportunitiesheader"><a>NEW OPPORTUNITY</a></div>
        <form action>
          <div className="containerO1">
            <div id="contentO1">
              <input className type="text" onChange={(e) => setOpportunityName(e.target.value)} value={opportunityName} required />
              <label>OPPORTUNITY</label>
            </div>
          </div>
          <div className="containerO2">
            <div id="contentO2">
              <input className type="number" min={0} placeholder="$0.00" onChange={(e) => setNetPrice(e.target.value)} value={netPrice} />
              <label>NET PRICE</label>
            </div>
            <div id="contentO2">
              <input className type="number" min="0%" placeholder="0%" onChange={(e) => setMargin(e.target.value)} value={margin} />
              <label>MARGIN</label>
            </div>
            <div id="contentO2">
              <input className type="number" min={0} placeholder="$0.00" onChange={(e) => setCost(e.target.value)} value={cost} />
              <label>COST</label>
            </div>
          </div>
          <div className="containerO3">
            <div id="contentO3">
              <select onChange={(e) => setStage(e.target.value)} value={stage}>
                <option selected disabled />
                <option>QUALIFY</option>
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
            <div id="contentO3">
              <input className type="number" min={0} placeholder="0%" onChange={(e) => setProbability(e.target.value)} value={probability} />
              <label>PROBABILITY</label>
            </div>
            <div id="contentO3">
              <input className type="number" min={0} onChange={(e) => setHours(e.target.value)} value={hours}/>
              <label>HOURS</label>
            </div>
          </div>
          <div className="containerO4">
            <div id="contentO4">
            <DatePicker
            id='closedate'
            selected={closeDate}
            onChange={date => setClose(date)}
            onFocus={() => setClose(new Date())}
            dateFormat="MM/dd/yyyy"
          />
              <label>CLOSE</label>
            </div>
            <div id="contentO4">
            <DatePicker
            selected={startDate}
            id='startdate'
            onChange={date => setStart(date)}
            onFocus={() => setStart(new Date())}
            dateFormat="MM/dd/yyyy"
          />
              <label>START</label>
            </div>
            <div id="contentO4">
              <input className type="number" min={1} onChange={(e) => setDurationWeek(e.target.value)} value={durationWeek} />
              <label>DURATION WEEKS</label>
            </div>
          </div>
          <b>GENERAL</b>
          <div className="containerO5">
            <div id="contentO5">
              {/* <img className="avatar__image" src="../src/pages/images/avtar.jpg" /> */}
              <input type="text" onChange={(e) => setOwner(e.target.value)} value={owner} />
              <label>OWNER</label>
            </div>
            <div id="contentO5">
              <select onChange={(e) => setRegion(e.target.value)} value={region}>
                <option selected disabled />
                <option >AP</option>
                <option >EMEA</option>
                <option >LA</option>
                <option >NA</option>
              </select>
              <label>REGION</label>
            </div>
            <div id="contentO5">
              <select onChange={(e) => setVertical(e.target.value)} value={vertical}>
                <option selected disabled />
                <option>BANKING</option>
                <option>CHEMICALS</option>
                <option>CONSTRUCTION &amp; ENGG</option>
                <option>COSULTING SERVICES</option>
                <option>CONSUMER PRODUCTS</option>
                <option>EDUCATION</option>
                <option>ENTERTAINMENT &amp; LEISURE</option>
                <option>FINANCIAL SERVICES</option>
              </select>
              <label>VERTICAL</label>
            </div>
            <div id="contentO5">
              <select onChange={(e) => setPractice(e.target.value)} value={practice}>
                <option selected />
                <option>DBA</option>
                <option>DSOM</option>
                <option>EDUCATION</option>
                <option>IZOT</option>
              </select>
              <label>PRACTICE</label>
            </div>
          </div>
          <div className="containerO6">
            <div id="contentO6">
              <select id="currency" name="currency" onChange={(e) => setCurrency(e.target.value)} value={currency}>
                <option selected disabled />
                <option value="AFN">Afghan Afghani</option>
                <option value="ALL">Albanian Lek</option>
                <option value="DZD">Algerian Dinar</option>
                <option value="AOA">Angolan Kwanza</option>
                <option value="ARS">Argentine Peso</option>
                <option value="AMD">Armenian Dram</option>
                <option value="AWG">Aruban Florin</option>
                <option value="AUD">Australian Dollar</option>
                <option value="AZN">Azerbaijani Manat</option>
                <option value="BSD">Bahamian Dollar</option>
                <option value="BHD">Bahraini Dinar</option>
                <option value="BDT">Bangladeshi Taka</option>
                <option value="BBD">Barbadian Dollar</option>
                <option value="BYR">Belarusian Ruble</option>
                <option value="BEF">Belgian Franc</option>
                <option value="BZD">Belize Dollar</option>
                <option value="BMD">Bermudan Dollar</option>
                <option value="BTN">Bhutanese Ngultrum</option>
                <option value="BTC">Bitcoin</option>
                <option value="BOB">Bolivian Boliviano</option>
                <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
                <option value="BWP">Botswanan Pula</option>
                <option value="BRL">Brazilian Real</option>
                <option value="GBP">British Pound Sterling</option>
                <option value="BND">Brunei Dollar</option>
                <option value="BGN">Bulgarian Lev</option>
                <option value="BIF">Burundian Franc</option>
                <option value="KHR">Cambodian Riel</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="CVE">Cape Verdean Escudo</option>
                <option value="KYD">Cayman Islands Dollar</option>
                <option value="XOF">CFA Franc BCEAO</option>
                <option value="XAF">CFA Franc BEAC</option>
                <option value="XPF">CFP Franc</option>
                <option value="CLP">Chilean Peso</option>
                <option value="CNY">Chinese Yuan</option>
                <option value="COP">Colombian Peso</option>
                <option value="KMF">Comorian Franc</option>
                <option value="CDF">Congolese Franc</option>
                <option value="CRC">Costa Rican ColÃ³n</option>
                <option value="HRK">Croatian Kuna</option>
                <option value="CUC">Cuban Convertible Peso</option>
                <option value="CZK">Czech Republic Koruna</option>
                <option value="DKK">Danish Krone</option>
                <option value="DJF">Djiboutian Franc</option>
                <option value="DOP">Dominican Peso</option>
                <option value="XCD">East Caribbean Dollar</option>
                <option value="EGP">Egyptian Pound</option>
                <option value="ERN">Eritrean Nakfa</option>
                <option value="EEK">Estonian Kroon</option>
                <option value="ETB">Ethiopian Birr</option>
                <option value="EUR">Euro</option>
                <option value="FKP">Falkland Islands Pound</option>
                <option value="FJD">Fijian Dollar</option>
                <option value="GMD">Gambian Dalasi</option>
                <option value="GEL">Georgian Lari</option>
                <option value="DEM">German Mark</option>
                <option value="GHS">Ghanaian Cedi</option>
                <option value="GIP">Gibraltar Pound</option>
                <option value="GRD">Greek Drachma</option>
                <option value="GTQ">Guatemalan Quetzal</option>
                <option value="GNF">Guinean Franc</option>
                <option value="GYD">Guyanaese Dollar</option>
                <option value="HTG">Haitian Gourde</option>
                <option value="HNL">Honduran Lempira</option>
                <option value="HKD">Hong Kong Dollar</option>
                <option value="HUF">Hungarian Forint</option>
                <option value="ISK">Icelandic KrÃ³na</option>
                <option value="INR">Indian Rupee</option>
                <option value="IDR">Indonesian Rupiah</option>
                <option value="IRR">Iranian Rial</option>
                <option value="IQD">Iraqi Dinar</option>
                <option value="ILS">Israeli New Sheqel</option>
                <option value="ITL">Italian Lira</option>
                <option value="JMD">Jamaican Dollar</option>
                <option value="JPY">Japanese Yen</option>
                <option value="JOD">Jordanian Dinar</option>
                <option value="KZT">Kazakhstani Tenge</option>
                <option value="KES">Kenyan Shilling</option>
                <option value="KWD">Kuwaiti Dinar</option>
                <option value="KGS">Kyrgystani Som</option>
                <option value="LAK">Laotian Kip</option>
                <option value="LVL">Latvian Lats</option>
                <option value="LBP">Lebanese Pound</option>
                <option value="LSL">Lesotho Loti</option>
                <option value="LRD">Liberian Dollar</option>
                <option value="LYD">Libyan Dinar</option>
                <option value="LTL">Lithuanian Litas</option>
                <option value="MOP">Macanese Pataca</option>
                <option value="MKD">Macedonian Denar</option>
                <option value="MGA">Malagasy Ariary</option>
                <option value="MWK">Malawian Kwacha</option>
                <option value="MYR">Malaysian Ringgit</option>
                <option value="MVR">Maldivian Rufiyaa</option>
                <option value="MRO">Mauritanian Ouguiya</option>
                <option value="MUR">Mauritian Rupee</option>
                <option value="MXN">Mexican Peso</option>
                <option value="MDL">Moldovan Leu</option>
                <option value="MNT">Mongolian Tugrik</option>
                <option value="MAD">Moroccan Dirham</option>
                <option value="MZM">Mozambican Metical</option>
                <option value="MMK">Myanmar Kyat</option>
                <option value="NAD">Namibian Dollar</option>
                <option value="NPR">Nepalese Rupee</option>
                <option value="ANG">Netherlands Antillean Guilder</option>
                <option value="TWD">New Taiwan Dollar</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="NIO">Nicaraguan CÃ³rdoba</option>
                <option value="NGN">Nigerian Naira</option>
                <option value="KPW">North Korean Won</option>
                <option value="NOK">Norwegian Krone</option>
                <option value="OMR">Omani Rial</option>
                <option value="PKR">Pakistani Rupee</option>
                <option value="PAB">Panamanian Balboa</option>
                <option value="PGK">Papua New Guinean Kina</option>
                <option value="PYG">Paraguayan Guarani</option>
                <option value="PEN">Peruvian Nuevo Sol</option>
                <option value="PHP">Philippine Peso</option>
                <option value="PLN">Polish Zloty</option>
                <option value="QAR">Qatari Rial</option>
                <option value="RON">Romanian Leu</option>
                <option value="RUB">Russian Ruble</option>
                <option value="RWF">Rwandan Franc</option>
                <option value="SVC">Salvadoran ColÃ³n</option>
                <option value="WST">Samoan Tala</option>
                <option value="SAR">Saudi Riyal</option>
                <option value="RSD">Serbian Dinar</option>
                <option value="SCR">Seychellois Rupee</option>
                <option value="SLL">Sierra Leonean Leone</option>
                <option value="SGD">Singapore Dollar</option>
                <option value="SKK">Slovak Koruna</option>
                <option value="SBD">Solomon Islands Dollar</option>
                <option value="SOS">Somali Shilling</option>
                <option value="ZAR">South African Rand</option>
                <option value="KRW">South Korean Won</option>
                <option value="XDR">Special Drawing Rights</option>
                <option value="LKR">Sri Lankan Rupee</option>
                <option value="SHP">St. Helena Pound</option>
                <option value="SDG">Sudanese Pound</option>
                <option value="SRD">Surinamese Dollar</option>
                <option value="SZL">Swazi Lilangeni</option>
                <option value="SEK">Swedish Krona</option>
                <option value="CHF">Swiss Franc</option>
                <option value="SYP">Syrian Pound</option>
                <option value="STD">São Tomé and Príncipe Dobra</option>
                <option value="TJS">Tajikistani Somoni</option>
                <option value="TZS">Tanzanian Shilling</option>
                <option value="THB">Thai Baht</option>
                <option value="TOP">Tongan pa'anga</option>
                <option value="TTD">Trinidad &amp; Tobago Dollar</option>
                <option value="TND">Tunisian Dinar</option>
                <option value="TRY">Turkish Lira</option>
                <option value="TMT">Turkmenistani Manat</option>
                <option value="UGX">Ugandan Shilling</option>
                <option value="UAH">Ukrainian Hryvnia</option>
                <option value="AED">United Arab Emirates Dirham</option>
                <option value="UYU">Uruguayan Peso</option>
                <option value="USD">US Dollar</option>
                <option value="UZS">Uzbekistan Som</option>
                <option value="VUV">Vanuatu Vatu</option>
                <option value="VEF">Venezuelan BolÃ­var</option>
                <option value="VND">Vietnamese Dong</option>
                <option value="YER">Yemeni Rial</option>
                <option value="ZMK">Zambian Kwacha</option>
              </select>
              <label>CURRENCY</label>
            </div>
            <div id="contentO6">
              <select onChange={(e) => setOrg(e.target.value)} value={org}>
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
            <div id="contentO6">
              <select onChange={(e) => setOpportunityType(e.target.value)} value={opportunityType}>
                <option selected />
                <option>CONSULTING SERVICES OPPORTUNITY</option>
                <option>EDUCATIONAL SERVICES OPPORTUNITY</option>
              </select>
              <label>OPPRTUNITY TYPE</label>
            </div>    
          </div>
          <div className="saveandcancel">
            <button id="reset1" type="reset" style={{color: 'red'}}>CANCEL</button>
            <button id="save1" type="submit" onClick={saveOpportunity} style={{color: 'green'}}>SAVE</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Opportunities;