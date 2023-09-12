import React, { useState, useEffect,useRef } from 'react';
import Navbar from '../../components/Navbar';
import AdminSidebar from '../../components/AdminSidebar';
import HelpRequest from '../../components/HelpRequest';
import { useAuthContext } from '../../hooks/useAuthContext';
import { toggleSection1, toggleSection2, toggleSection3, toggleSection4, toggleSection5, toggleSection6, toggleSection7, toggleSection8, toggleSection9, toggleSection10, togglePasswordVisibility } from '../Config/Configjs'
import '../Config/Config.css';

const Config = () => {
  const { user } = useAuthContext();

  const [dropdownActive, setDropdownActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [dropdownActive2, setDropdownActive2] = useState(false);
  const [inputValue2, setInputValue2] = useState('');
  const [dropdownActive3, setDropdownActive3] = useState(false);
  const [inputValue3, setInputValue3] = useState('');
  const [dropdownActive4, setDropdownActive4] = useState(false);
  const [inputValue4, setInputValue4] = useState('');
  const [dropdownActive5, setDropdownActive5] = useState(false);
  const [inputValue5, setInputValue5] = useState('');
  const [dropdownActive6, setDropdownActive6] = useState(false);
  const [inputValue6, setInputValue6] = useState('');
  const [dropdownActive7, setDropdownActive7] = useState(false);
  const [inputValue7, setInputValue7] = useState('');
  const [dropdownActive8, setDropdownActive8] = useState(false);
  const [inputValue8, setInputValue8] = useState('');
  const [dropdownActive9, setDropdownActive9] = useState(false);
  const [inputValue9, setInputValue9] = useState('');
  const [dropdownActive10, setDropdownActive10] = useState(false);
  const [inputValue10, setInputValue10] = useState('');
  const [dropdownActive11, setDropdownActive11] = useState(false);
  const [inputValue11, setInputValue11] = useState('');
  const [dropdownActive12, setDropdownActive12] = useState(false);
  const [inputValue12, setInputValue12] = useState('');
  const [dropdownActive13, setDropdownActive13] = useState(false);
  const [inputValue13, setInputValue13] = useState('');
  const [dropdownActive14, setDropdownActive14] = useState(false);
  const [inputValue14, setInputValue14] = useState('');
  const [dropdownActive15, setDropdownActive15] = useState(false);
  const [inputValue15, setInputValue15] = useState('');
  const [dropdownActive16, setDropdownActive16] = useState(false);
  const [inputValue16, setInputValue16] = useState('');
  const [dropdownActive17, setDropdownActive17] = useState(false);
  const [inputValue17, setInputValue17] = useState('');
  const [dropdownActive18, setDropdownActive18] = useState(false);
  const [inputValue18, setInputValue18] = useState('');
  const [dropdownActive19, setDropdownActive19] = useState(false);
  const [inputValue19, setInputValue19] = useState('');
  const [dropdownActive20, setDropdownActive20] = useState(false);
  const [inputValue20, setInputValue20] = useState('');
  const [dropdownActive21, setDropdownActive21] = useState(false);
  const [inputValue21, setInputValue21] = useState('');
  const [dropdownActive22, setDropdownActive22] = useState(false);
  const [inputValue22, setInputValue22] = useState('');
  const [dropdownActive23, setDropdownActive23] = useState(false);
  const [inputValue23, setInputValue23] = useState('');
  const [dropdownActive24, setDropdownActive24] = useState(false);
  const [inputValue24, setInputValue24] = useState('');
  const [dropdownActive25, setDropdownActive25] = useState(false);
  const [inputValue25, setInputValue25] = useState('');
  const [dropdownActive26, setDropdownActive26] = useState(false);
  const [inputValue26, setInputValue26] = useState('');
  const [dropdownActive27, setDropdownActive27] = useState(false);
  const [inputValue27, setInputValue27] = useState('');
  const [dropdownActive28, setDropdownActive28] = useState(false);
  const [inputValue28, setInputValue28] = useState('');
  const [dropdownActive29, setDropdownActive29] = useState(false);
  const [inputValue29, setInputValue29] = useState('');
  const [dropdownActive30, setDropdownActive30] = useState(false);
  const [inputValue30, setInputValue30] = useState('');
  const [dropdownActive31, setDropdownActive31] = useState(false);
  const [inputValue31, setInputValue31] = useState('');
  const [dropdownActive32, setDropdownActive32] = useState(false);
  const [inputValue32, setInputValue32] = useState('');
  const [dropdownActive33, setDropdownActive33] = useState(false);
  const [inputValue33, setInputValue33] = useState('');
  const [dropdownActive34, setDropdownActive34] = useState(false);
  const [inputValue34, setInputValue34] = useState('');
  const [dropdownActive35, setDropdownActive35] = useState(false);
  const [inputValue35, setInputValue35] = useState('');
  const [dropdownActive36, setDropdownActive36] = useState(false);
  const [inputValue36, setInputValue36] = useState('');
  const [dropdownActive37, setDropdownActive37] = useState(false);
  const [inputValue37, setInputValue37] = useState('');
  const [dropdownActive38, setDropdownActive38] = useState(false);
  const [inputValue38, setInputValue38] = useState('');
  const [dropdownActive39, setDropdownActive39] = useState(false);
  const [inputValue39, setInputValue39] = useState('');
  const [dropdownActive40, setDropdownActive40] = useState(false);
  const [inputValue40, setInputValue40] = useState('');
  const [dropdownActive41, setDropdownActive41] = useState(false);
  const [inputValue41, setInputValue41] = useState('');
  const [dropdownActive42, setDropdownActive42] = useState(false);
  const [inputValue42, setInputValue42] = useState('');
  const [dropdownActive43, setDropdownActive43] = useState(false);
  const [inputValue43, setInputValue43] = useState('');
  const [dropdownActive44, setDropdownActive44] = useState(false);
  const [inputValue44, setInputValue44] = useState('');
  const [dropdownActive45, setDropdownActive45] = useState(false);
  const [inputValue45, setInputValue45] = useState('');
  const [dropdownActive46, setDropdownActive46] = useState(false);
  const [inputValue46, setInputValue46] = useState('');
  const [dropdownActive47, setDropdownActive47] = useState(false);
  const [inputValue47, setInputValue47] = useState('');
  const [dropdownActive48, setDropdownActive48] = useState(false);
  const [inputValue48, setInputValue48] = useState('');
  const [dropdownActive49, setDropdownActive49] = useState(false);
  const [inputValue49, setInputValue49] = useState('');
  const [dropdownActive50, setDropdownActive50] = useState(false);
  const [inputValue50, setInputValue50] = useState('');
  const [dropdownActive51, setDropdownActive51] = useState(false);
  const [inputValue51, setInputValue51] = useState('');
  const [dropdownActive52, setDropdownActive52] = useState(false);
  const [inputValue52, setInputValue52] = useState('');
  const [dropdownActive53, setDropdownActive53] = useState(false);
  const [inputValue53, setInputValue53] = useState('');
  const [dropdownActive54, setDropdownActive54] = useState(false);
  const [inputValue54, setInputValue54] = useState('');
  const [dropdownActive55, setDropdownActive55] = useState(false);
  const [inputValue55, setInputValue55] = useState('');
  const [dropdownActive56, setDropdownActive56] = useState(false);
  const [inputValue56, setInputValue56] = useState('');
  const [dropdownActive57, setDropdownActive57] = useState(false);
  const [inputValue57, setInputValue57] = useState('');
  const [dropdownActive58, setDropdownActive58] = useState(false);
  const [inputValue58, setInputValue58] = useState('');
  const [dropdownActive59, setDropdownActive59] = useState(false);
  const [inputValue59, setInputValue59] = useState('');
  const [dropdownActive60, setDropdownActive60] = useState(false);
  const [inputValue60, setInputValue60] = useState('');
  const [dropdownActive61, setDropdownActive61] = useState(false);
  const [inputValue61, setInputValue61] = useState('');
  const [dropdownActive62, setDropdownActive62] = useState(false);
  const [inputValue62, setInputValue62] = useState('');
  const [dropdownActive63, setDropdownActive63] = useState(false);
  const [inputValue63, setInputValue63] = useState('');
  const [dropdownActive64, setDropdownActive64] = useState(false);
  const [inputValue64, setInputValue64] = useState('');
  const [dropdownActive65, setDropdownActive65] = useState(false);
  const [inputValue65, setInputValue65] = useState('');
  const [dropdownActive66, setDropdownActive66] = useState(false);
  const [inputValue66, setInputValue66] = useState('');
  const [dropdownActive67, setDropdownActive67] = useState(false);
  const [inputValue67, setInputValue67] = useState('');
  const [dropdownActive68, setDropdownActive68] = useState(false);
  const [inputValue68, setInputValue68] = useState('');
  const [dropdownActive69, setDropdownActive69] = useState(false);
  const [inputValue69, setInputValue69] = useState('');
  const [dropdownActive70, setDropdownActive70] = useState(false);
  const [inputValue70, setInputValue70] = useState('');
  const [dropdownActive71, setDropdownActive71] = useState(false);
  const [inputValue71, setInputValue71] = useState('');
  const [dropdownActive72, setDropdownActive72] = useState(false);
  const [inputValue72, setInputValue72] = useState('');
  const [dropdownActive73, setDropdownActive73] = useState(false);
  const [inputValue73, setInputValue73] = useState('');
  const [dropdownActive74, setDropdownActive74] = useState(false);
  const [inputValue74, setInputValue74] = useState('');
  const [dropdownActive75, setDropdownActive75] = useState(false);
  const [inputValue75, setInputValue75] = useState('');
  const [dropdownActive76, setDropdownActive76] = useState(false);
  const [inputValue76, setInputValue76] = useState('');
  const [dropdownActive77, setDropdownActive77] = useState(false);
  const [inputValue77, setInputValue77] = useState('');
  const [dropdownActive78, setDropdownActive78] = useState(false);
  const [inputValue78, setInputValue78] = useState('');
  const [dropdownActive79, setDropdownActive79] = useState(false);
  const [inputValue79, setInputValue79] = useState('');
  const [dropdownActive80, setDropdownActive80] = useState(false);
  const [inputValue80, setInputValue80] = useState('');
  const [dropdownActive81, setDropdownActive81] = useState(false);
  const [inputValue81, setInputValue81] = useState('');
  const [dropdownActive82, setDropdownActive82] = useState(false);
  const [inputValue82, setInputValue82] = useState('');
  const [dropdownActive83, setDropdownActive83] = useState(false);
  const [inputValue83, setInputValue83] = useState('');
  const [dropdownActive84, setDropdownActive84] = useState(false);
  const [inputValue84, setInputValue84] = useState('');
  const [dropdownActive85, setDropdownActive85] = useState(false);
  const [inputValue85, setInputValue85] = useState('');
  const [dropdownActive86, setDropdownActive86] = useState(false);
  const [inputValue86, setInputValue86] = useState('');
  const [dropdownActive87, setDropdownActive87] = useState(false);
  const [inputValue87, setInputValue87] = useState('');
  const [dropdownActive88, setDropdownActive88] = useState(false);
  const [inputValue88, setInputValue88] = useState('');
  const [dropdownActive89, setDropdownActive89] = useState(false);
  const [inputValue89, setInputValue89] = useState('');
  const [dropdownActive90, setDropdownActive90] = useState(false);
  const [inputValue90, setInputValue90] = useState('');
  const [dropdownActive91, setDropdownActive91] = useState(false);
  const [inputValue91, setInputValue91] = useState('');
  const [dropdownActive92, setDropdownActive92] = useState(false);
  const [inputValue92, setInputValue92] = useState('');
  const [dropdownActive93, setDropdownActive93] = useState(false);
  const [inputValue93, setInputValue93] = useState('');
  const [dropdownActive94, setDropdownActive94] = useState(false);
  const [inputValue94, setInputValue94] = useState('');
  const [dropdownActive95, setDropdownActive95] = useState(false);
  const [inputValue95, setInputValue95] = useState('');
  const [dropdownActive96, setDropdownActive96] = useState(false);
  const [inputValue96, setInputValue96] = useState('');


  const options = [
    { value: 'YES', label: 'yes' },
    { value: 'NO', label: 'no' }
  ];
  const options2 = [
    { value: 'low', label: 'low' },
    { value: 'normal', label: 'Normal' },
    { value: 'high', label: 'High' }
  ];
  const options3 = [
    { value: '01/15/23', label: '01/15/23' },
    { value: '01/15/2023', label: '01/15/2023' },
    { value: '01-15-23', label: '01-15-23' },
    { value: '01-15-2023', label: '01-15-2023' },
    { value: 'JAN 15, 2023', label: 'JAN 15, 2023' },
    { value: 'JANUARY 15,2023', label: 'JANUARY 15,2023' },
    { value: '15-01-2023', label: '15-01-2023' },
    { value: '15/01/23', label: '15/01/23' }
  ];
  const options4 = [
    { value: 'By Email', label: 'By Email' },
    { value: 'Within Dealdox', label: 'Within Dealdox' }
  ];
  const options5 = [
    { value: 'Weeks', label: 'Weeks' },
    { value: 'Months', label: 'Months' },
    { value: 'Years', label: 'Years' }
  ];
  const options6 = [
    { value: 'No', label: 'No' },
    { value: 'Primary approved only', label: 'Primary approved only' },
    { value: 'All', label: 'All' }
  ];
  const options7 = [
    { value: 'Pricing', label: 'Pricing' },
    { value: 'Content', label: 'Content' }
  ];
  const options8 = [
    { value: 'Fixed price', label: 'Fixed price' },
    { value: 'Margin target', label: 'Margin target' },
    { value: 'Service level', label: 'Service level' },
    { value: 'Time and material', label: 'Time and material' }
  ];
  const options9 = [
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' }
  ];
  const options10 = [
    { value: 'by service', label: 'by service' },
    { value: 'by service category', label: 'by service category' },
    { value: 'by category 1', label: 'by category 1' },
    { value: 'by category 2', label: 'by category 2' },
    { value: 'by service category, category 1, and sourcing org', label: 'by service category, category1, and sourcing org' },
    { value: 'by service location, category 1, and category 2', label: 'by service location, category 1, and category 2' },
    { value: 'by service location, category 2, and category 1', label: 'by service location, category 2, and category 1' },
    { value: 'by service location, service category', label: 'by service location, service category' },
    { value: 'by service category, service location', label: 'by service category, service location' }
  ];
  const options11 = [
    { value: 'standard cost', label: 'standard cost' },
    { value: 'standard price', label: 'standard price' }
  ];
  const options12 = [
    { value: 'by all available roles', label: 'by all available roles' },
    { value: 'by all rate card roles', label: 'by all rate card roles' },
    { value: 'by rate card selling org', label: 'by rate card selling org' },
    { value: 'by rate card equality', label: 'by rate card equality' }
  ];
  const options13 = [
    { value: 'STANDARD', label: 'STANDARD' },
    { value: 'calibri theme', label: 'calibri theme' },
    { value: 'arial 10 theme', label: 'arial 10 theme' },
    { value: 'arial 12 theme', label: 'arial 12 theme' },
    { value: 'sylfaen theme', label: 'sylfaen theme' },
    { value: 'simsun theme', label: 'simsun theme' }
  ];
  const options14 = [
    { value: 'all', label: 'all' },
    { value: 'approved only', label: 'approved only' },
    { value: 'primary only', label: 'primary only' }
  ];
  const options15 = [
    { value: 'by roles', label: 'by roles' },
    { value: 'by crm', label: 'by crm' }
  ];
  const options16 = [
    { value: 'realstic', label: 'realstic' }
  ];
  const options17 = [
    { value: '0', label: '0' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' }
  ];
  const options18 = [
    { value: '01 jan', label: '01 jan' },
    { value: '02 feb', label: '02 feb' },
    { value: '03 mar', label: '03 mar' },
    { value: '04 apr', label: '04 apr' },
    { value: '05 may', label: '05 may' },
    { value: '06 jun', label: '06 jun' },
    { value: '07 jul', label: '07 jul' },
    { value: '08 aug', label: '08 aug' },
    { value: '09 sep', label: '09 sep' },
    { value: '10 oct', label: '10 oct' },
    { value: '11 nov', label: '11 nov' },
    { value: '12 dec', label: '12 dec' }
  ];
  const options19 = [
    { value: 'United States Dollar', label: 'United States Dollar' },
    { value: 'Euro', label: 'Euro' },
    { value: 'Japanese Yen', label: 'Japanese Yen' },
    { value: 'British Pound Sterling', label: 'British Pound Sterling' },
    { value: 'Australian Dollar', label: 'Australian Dollar' },
    { value: 'Canadian Dollar', label: 'Canadian Dollar' },
    { value: 'Swiss Franc', label: 'Swiss Franc' },
    { value: 'Chinese Yuan', label: 'Chinese Yuan' },
    { value: 'Swedish Krona', label: 'Swedish Krona' },
    { value: 'New Zealand Dollar', label: 'New Zealand Dollar' },
    { value: 'Mexican Peso', label: 'Mexican Peso' },
    { value: 'Singapore Dollar', label: 'Singapore Dollar' },
    { value: 'Hong Kong Dollar', label: 'Hong Kong Dollar' },
    { value: 'Norwegian Krone', label: 'Norwegian Krone' },
    { value: 'South Korean Won', label: 'South Korean Won' },
    { value: 'Turkish Lira', label: 'Turkish Lira' },
    { value: 'Russian Ruble', label: 'Russian Ruble' },
    { value: 'Indian Rupee', label: 'Indian Rupee' },
    { value: 'Brazilian Real', label: 'Brazilian Real' },
    { value: 'South African Rand', label: 'South African Rand' },
    { value: 'Danish Krone', label: 'Danish Krone' },
    { value: 'Polish Złoty', label: 'Polish Złoty' },
    { value: 'Thai Baht', label: 'Thai Baht' },
    { value: 'Malaysian Ringgit', label: 'Malaysian Ringgit' },
    { value: 'Indonesian Rupiah', label: 'Indonesian Rupiah' },
    { value: 'Philippine Peso', label: 'Philippine Peso' },
    { value: 'Hungarian Forint', label: 'Hungarian Forint' },
    { value: 'Czech Koruna', label: 'Czech Koruna' },
    { value: 'Israeli Shekel', label: 'Israeli Shekel' },
    { value: 'Chilean Peso', label: 'Chilean Peso' },
    { value: 'Emirati Dirham', label: 'Emirati Dirham' },
    { value: 'Saudi Riyal', label: 'Saudi Riyal' },
    { value: 'Colombian Peso', label: 'Colombian Peso' },
    { value: 'Egyptian Pound', label: 'Egyptian Pound' },
    { value: 'Nigerian Naira', label: 'Nigerian Naira' },
    { value: 'Argentine Peso', label: 'Argentine Peso' },
    { value: 'Bahraini Dinar', label: 'Bahraini Dinar' },
    { value: 'Bangladeshi Taka', label: 'Bangladeshi Taka' },
    { value: 'Bulgarian Lev', label: 'Bulgarian Lev' },
    { value: 'Croatian Kuna', label: 'Croatian Kuna' },
    { value: 'Dominican Peso', label: 'Dominican Peso' },
    { value: 'Fijian Dollar', label: 'Fijian Dollar' },
    { value: 'Ghanaian Cedi', label: 'Ghanaian Cedi' },
    { value: 'Icelandic Króna', label: 'Icelandic Króna' },
    { value: 'Jordanian Dinar', label: 'Jordanian Dinar' },
    { value: 'Kuwaiti Dinar', label: 'Kuwaiti Dinar' },
    { value: 'Lebanese Pound', label: 'Lebanese Pound' },
    { value: 'Omani Rial', label: 'Omani Rial' },
    { value: 'Peruvian Sol', label: 'Peruvian Sol' },
    { value: 'Qatari Riyal', label: 'Qatari Riyal' },
    { value: 'Romanian Leu', label: 'Romanian Leu' },
    { value: 'Serbian Dinar', label: 'Serbian Dinar' },
    { value: 'Sri Lankan Rupee', label: 'Sri Lankan Rupee' },
    { value: 'Tunisian Dinar', label: 'Tunisian Dinar' },
    { value: 'Uruguayan Peso', label: 'Uruguayan Peso' },
    // Add more countries and their currencies as needed
  ];
  const options20 = [
    { value: 'multifactor authentication', label: 'multifactor authentication' },
    { value: 'saml', label: 'saml' }
  ];
  const options21 = [
    { value: 'ping', label: 'ping' },
    { value: 'okta', label: 'okta' },
    { value: 'mz azure', label: 'mz azure' },
    { value: 'active directory', label: 'active directory' },
    { value: 'autho', label: 'autho' }
  ];
  const options22 = [
    { value: 'url', label: 'url' },
    { value: 'xml content', label: 'xml content' }
  ];
  const options23 = [
    { value: 'default dealdocx logout page', label: 'default dealdocx logout page' },
    { value: 'Logout url provided by identity provider', label: 'Logout url provided by identity provider' },
    { value: 'custom url', label: 'custom url' }
  ];
  const options24 = [
    { value: 'bmc sales user', label: 'bmc sales user' },
    { value: 'restricted user', label: 'restricted user' },
    { value: 'admin', label: 'admin' },
    { value: 'no user access', label: 'no user access' },
    { value: 'bmc solution architech', label: 'bmc solution architech' },
    { value: 'bmc pmo user', label: 'bmc pmo user' },
    { value: 'approver', label: 'approver' }
  ];
  const options25 = [
    { value: 'email', label: 'email' },
    { value: 'universal id', label: 'universal id' }
  ];
  const options26 = [
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' }
  ];
  const options27 = [
    { value: '30 minute', label: '30 minute' },
    { value: 'hour', label: 'hour' },
    { value: '3 hour', label: '3 hour' },
    { value: '6 hour', label: '6 hour' },
    { value: '12 hour', label: '12 hour' }
  ];


  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);
  const dropdownRef4 = useRef(null);
  const dropdownRef5 = useRef(null);
  const dropdownRef6 = useRef(null);
  const dropdownRef7 = useRef(null);
  const dropdownRef8 = useRef(null);
  const dropdownRef9 = useRef(null);
  const dropdownRef10 = useRef(null);
  const dropdownRef11 = useRef(null);
  const dropdownRef12 = useRef(null);
  const dropdownRef13 = useRef(null);
  const dropdownRef14 = useRef(null);
  const dropdownRef15 = useRef(null);
  const dropdownRef16 = useRef(null);
  const dropdownRef17 = useRef(null);
  const dropdownRef18 = useRef(null);
  const dropdownRef19 = useRef(null);
  const dropdownRef20 = useRef(null);
  const dropdownRef21 = useRef(null);
  const dropdownRef22 = useRef(null);
  const dropdownRef23 = useRef(null);
  const dropdownRef24 = useRef(null);
  const dropdownRef25 = useRef(null);
  const dropdownRef26 = useRef(null);
  const dropdownRef27 = useRef(null);
  const dropdownRef28 = useRef(null);
  const dropdownRef29 = useRef(null);
  const dropdownRef30 = useRef(null);
  const dropdownRef31 = useRef(null);
  const dropdownRef32 = useRef(null);
  const dropdownRef33 = useRef(null);
  const dropdownRef34 = useRef(null);
  const dropdownRef35 = useRef(null);
  const dropdownRef36 = useRef(null);
  const dropdownRef37 = useRef(null);
  const dropdownRef38 = useRef(null);
  const dropdownRef39 = useRef(null);
  const dropdownRef40 = useRef(null);
  const dropdownRef41 = useRef(null);
  const dropdownRef42 = useRef(null);
  const dropdownRef43 = useRef(null);
  const dropdownRef44 = useRef(null);
  const dropdownRef45 = useRef(null);
  const dropdownRef46 = useRef(null);
  const dropdownRef47 = useRef(null);
  const dropdownRef48 = useRef(null);
  const dropdownRef49 = useRef(null);
  const dropdownRef50 = useRef(null);
  const dropdownRef51 = useRef(null);
  const dropdownRef52 = useRef(null);
  const dropdownRef53 = useRef(null);
  const dropdownRef54 = useRef(null);
  const dropdownRef55 = useRef(null);
  const dropdownRef56 = useRef(null);
  const dropdownRef57 = useRef(null);
  const dropdownRef58 = useRef(null);
  const dropdownRef59 = useRef(null);
  const dropdownRef60 = useRef(null);
  const dropdownRef61 = useRef(null);
  const dropdownRef62 = useRef(null);
  const dropdownRef63 = useRef(null);
  const dropdownRef64 = useRef(null);
  const dropdownRef65 = useRef(null);
  const dropdownRef66 = useRef(null);
  const dropdownRef67 = useRef(null);
  const dropdownRef68 = useRef(null);
  const dropdownRef69 = useRef(null);
  const dropdownRef70 = useRef(null);
  const dropdownRef71 = useRef(null);
  const dropdownRef72 = useRef(null);
  const dropdownRef73 = useRef(null);
  const dropdownRef74 = useRef(null);
  const dropdownRef75 = useRef(null);
  const dropdownRef76 = useRef(null);
  const dropdownRef77 = useRef(null);
  const dropdownRef78 = useRef(null);
  const dropdownRef79 = useRef(null);
  const dropdownRef80 = useRef(null);
  const dropdownRef81 = useRef(null);
  const dropdownRef82 = useRef(null);
  const dropdownRef83 = useRef(null);
  const dropdownRef84 = useRef(null);
  const dropdownRef85 = useRef(null);
  const dropdownRef86 = useRef(null);
  const dropdownRef87 = useRef(null);
  const dropdownRef88 = useRef(null);
  const dropdownRef89 = useRef(null);
  const dropdownRef90 = useRef(null);
  const dropdownRef91 = useRef(null);
  const dropdownRef92 = useRef(null);
  const dropdownRef93 = useRef(null);
  const dropdownRef94 = useRef(null);
  const dropdownRef95 = useRef(null);
  const dropdownRef96 = useRef(null);

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };
  const toggleDropdown2 = () => {
    setDropdownActive2(!dropdownActive2);
  };
  const toggleDropdown3 = () => {
    setDropdownActive3(!dropdownActive3);
  };
  const toggleDropdown4 = () => {
    setDropdownActive4(!dropdownActive4);
  };
  const toggleDropdown5 = () => {
    setDropdownActive5(!dropdownActive5);
  };
  const toggleDropdown6 = () => {
    setDropdownActive6(!dropdownActive6);
  };
  const toggleDropdown7 = () => {
    setDropdownActive7(!dropdownActive7);
  };
  const toggleDropdown8 = () => {
    setDropdownActive8(!dropdownActive8);
  };
  const toggleDropdown9 = () => {
    setDropdownActive9(!dropdownActive9);
  };
  const toggleDropdown10 = () => {
    setDropdownActive10(!dropdownActive10);
  };
  const toggleDropdown11 = () => {
    setDropdownActive11(!dropdownActive11);
  };
  const toggleDropdown12 = () => {
    setDropdownActive12(!dropdownActive12);
  };
  const toggleDropdown13 = () => {
    setDropdownActive13(!dropdownActive13);
  };
  const toggleDropdown14 = () => {
    setDropdownActive14(!dropdownActive14);
  };
  const toggleDropdown15 = () => {
    setDropdownActive15(!dropdownActive15);
  };
  const toggleDropdown16 = () => {
    setDropdownActive16(!dropdownActive16);
  };
  const toggleDropdown17 = () => {
    setDropdownActive17(!dropdownActive17);
  };
  const toggleDropdown18 = () => {
    setDropdownActive18(!dropdownActive18);
  };
  const toggleDropdown19 = () => {
    setDropdownActive19(!dropdownActive19);
  };
  const toggleDropdown20 = () => {
    setDropdownActive20(!dropdownActive20);
  };
  const toggleDropdown21 = () => {
    setDropdownActive21(!dropdownActive21);
  };
  const toggleDropdown22 = () => {
    setDropdownActive22(!dropdownActive22);
  };
  const toggleDropdown23 = () => {
    setDropdownActive23(!dropdownActive23);
  };
  const toggleDropdown24 = () => {
    setDropdownActive24(!dropdownActive24);
  };
  const toggleDropdown25 = () => {
    setDropdownActive25(!dropdownActive25);
  };
  const toggleDropdown26 = () => {
    setDropdownActive26(!dropdownActive26);
  };
  const toggleDropdown27 = () => {
    setDropdownActive27(!dropdownActive27);
  };
  const toggleDropdown28 = () => {
    setDropdownActive28(!dropdownActive28);
  };
  const toggleDropdown29 = () => {
    setDropdownActive29(!dropdownActive29);
  };
  const toggleDropdown30 = () => {
    setDropdownActive30(!dropdownActive30);
  };
  const toggleDropdown31 = () => {
    setDropdownActive31(!dropdownActive31);
  };
  const toggleDropdown32 = () => {
    setDropdownActive32(!dropdownActive32);
  };
  const toggleDropdown33 = () => {
    setDropdownActive33(!dropdownActive33);
  };
  const toggleDropdown34 = () => {
    setDropdownActive34(!dropdownActive34);
  };
  const toggleDropdown35 = () => {
    setDropdownActive35(!dropdownActive35);
  };
  const toggleDropdown36 = () => {
    setDropdownActive36(!dropdownActive36);
  };
  const toggleDropdown37 = () => {
    setDropdownActive37(!dropdownActive37);
  };
  const toggleDropdown38 = () => {
    setDropdownActive38(!dropdownActive38);
  };
  const toggleDropdown39 = () => {
    setDropdownActive39(!dropdownActive39);
  };
  const toggleDropdown40 = () => {
    setDropdownActive40(!dropdownActive40);
  };
  const toggleDropdown41 = () => {
    setDropdownActive41(!dropdownActive41);
  };
  const toggleDropdown42 = () => {
    setDropdownActive42(!dropdownActive42);
  };
  const toggleDropdown43 = () => {
    setDropdownActive43(!dropdownActive43);
  };
  const toggleDropdown44 = () => {
    setDropdownActive44(!dropdownActive44);
  };
  const toggleDropdown45 = () => {
    setDropdownActive45(!dropdownActive45);
  };
  const toggleDropdown46 = () => {
    setDropdownActive46(!dropdownActive46);
  };
  const toggleDropdown47 = () => {
    setDropdownActive47(!dropdownActive47);
  };
  const toggleDropdown48 = () => {
    setDropdownActive48(!dropdownActive48);
  };
  const toggleDropdown49 = () => {
    setDropdownActive49(!dropdownActive49);
  };
  const toggleDropdown50 = () => {
    setDropdownActive50(!dropdownActive50);
  };
  const toggleDropdown51 = () => {
    setDropdownActive51(!dropdownActive51);
  };
  const toggleDropdown52 = () => {
    setDropdownActive52(!dropdownActive52);
  };
  const toggleDropdown53 = () => {
    setDropdownActive53(!dropdownActive53);
  };
  const toggleDropdown54 = () => {
    setDropdownActive54(!dropdownActive54);
  };
  const toggleDropdown55 = () => {
    setDropdownActive55(!dropdownActive55);
  };
  const toggleDropdown56 = () => {
    setDropdownActive56(!dropdownActive56);
  };
  const toggleDropdown57 = () => {
    setDropdownActive57(!dropdownActive57);
  };
  const toggleDropdown58 = () => {
    setDropdownActive58(!dropdownActive58);
  };
  const toggleDropdown59 = () => {
    setDropdownActive59(!dropdownActive59);
  };
  const toggleDropdown60 = () => {
    setDropdownActive60(!dropdownActive60);
  };
  const toggleDropdown61 = () => {
    setDropdownActive61(!dropdownActive61);
  };
  const toggleDropdown62 = () => {
    setDropdownActive62(!dropdownActive62);
  };
  const toggleDropdown63 = () => {
    setDropdownActive63(!dropdownActive63);
  };
  const toggleDropdown64 = () => {
    setDropdownActive64(!dropdownActive64);
  };
  const toggleDropdown65 = () => {
    setDropdownActive65(!dropdownActive64);
  };
  const toggleDropdown66 = () => {
    setDropdownActive66(!dropdownActive66);
  };
  const toggleDropdown67 = () => {
    setDropdownActive67(!dropdownActive67);
  };
  const toggleDropdown68 = () => {
    setDropdownActive68(!dropdownActive68);
  };
  const toggleDropdown69 = () => {
    setDropdownActive69(!dropdownActive69);
  };
  const toggleDropdown70 = () => {
    setDropdownActive70(!dropdownActive70);
  };
  const toggleDropdown71 = () => {
    setDropdownActive71(!dropdownActive71);
  };
  const toggleDropdown72 = () => {
    setDropdownActive72(!dropdownActive72);
  };
  const toggleDropdown73 = () => {
    setDropdownActive73(!dropdownActive73);
  };
  const toggleDropdown74 = () => {
    setDropdownActive74(!dropdownActive74);
  };
  const toggleDropdown75 = () => {
    setDropdownActive75(!dropdownActive75);
  };
  const toggleDropdown76 = () => {
    setDropdownActive76(!dropdownActive76);
  };
  const toggleDropdown77 = () => {
    setDropdownActive77(!dropdownActive77);
  };
  const toggleDropdown78 = () => {
    setDropdownActive78(!dropdownActive78);
  };
  const toggleDropdown79 = () => {
    setDropdownActive79(!dropdownActive79);
  };
  const toggleDropdown80 = () => {
    setDropdownActive80(!dropdownActive80);
  };
  const toggleDropdown81 = () => {
    setDropdownActive81(!dropdownActive81);
  };
  const toggleDropdown82 = () => {
    setDropdownActive82(!dropdownActive82);
  };
  const toggleDropdown83 = () => {
    setDropdownActive83(!dropdownActive83);
  };
  const toggleDropdown84 = () => {
    setDropdownActive84(!dropdownActive84);
  };
  const toggleDropdown85 = () => {
    setDropdownActive85(!dropdownActive85);
  };
  const toggleDropdown86 = () => {
    setDropdownActive86(!dropdownActive86);
  };
  const toggleDropdown87 = () => {
    setDropdownActive87(!dropdownActive87);
  };
  const toggleDropdown88 = () => {
    setDropdownActive88(!dropdownActive88);
  };
  const toggleDropdown89 = () => {
    setDropdownActive89(!dropdownActive89);
  };
  const toggleDropdown90 = () => {
    setDropdownActive90(!dropdownActive90);
  };
  const toggleDropdown91 = () => {
    setDropdownActive91(!dropdownActive91);
  };
  const toggleDropdown92 = () => {
    setDropdownActive92(!dropdownActive92);
  };
  const toggleDropdown93 = () => {
    setDropdownActive93(!dropdownActive93);
  };
  const toggleDropdown94 = () => {
    setDropdownActive94(!dropdownActive94);
  };
  const toggleDropdown95 = () => {
    setDropdownActive95(!dropdownActive95);
  };
  const toggleDropdown96 = () => {
    setDropdownActive96(!dropdownActive96);
  };


  const selectOption = (value) => {
    setInputValue(value);
    toggleDropdown();
  };
  const selectOption2 = (value) => {
    setInputValue2(value);
    toggleDropdown2();
  };
  const selectOption3 = (value) => {
    setInputValue3(value);
    toggleDropdown3();
  };
  const selectOption4 = (value) => {
    setInputValue4(value);
    toggleDropdown4();
  };
  const selectOption5 = (value) => {
    setInputValue5(value);
    toggleDropdown5();
  };
  const selectOption6 = (value) => {
    setInputValue6(value);
    toggleDropdown6();
  };
  const selectOption7 = (value) => {
    setInputValue7(value);
    toggleDropdown7();
  };
  const selectOption8 = (value) => {
    setInputValue8(value);
    toggleDropdown8();
  };
  const selectOption9 = (value) => {
    setInputValue9(value);
    toggleDropdown9();
  };
  const selectOption10 = (value) => {
    setInputValue10(value);
    toggleDropdown10();
  };
  const selectOption11 = (value) => {
    setInputValue11(value);
    toggleDropdown11();
  };
  const selectOption12 = (value) => {
    setInputValue12(value);
    toggleDropdown12();
  };
  const selectOption13 = (value) => {
    setInputValue13(value);
    toggleDropdown13();
  };
  const selectOption14 = (value) => {
    setInputValue14(value);
    toggleDropdown14();
  };
  const selectOption15 = (value) => {
    setInputValue15(value);
    toggleDropdown15();
  };
  const selectOption16 = (value) => {
    setInputValue16(value);
    toggleDropdown16();
  };
  const selectOption17 = (value) => {
    setInputValue17(value);
    toggleDropdown17();
  };
  const selectOption18 = (value) => {
    setInputValue18(value);
    toggleDropdown18();
  };
  const selectOption19 = (value) => {
    setInputValue19(value);
    toggleDropdown19();
  };
  const selectOption20 = (value) => {
    setInputValue20(value);
    toggleDropdown20();
  };
  const selectOption21 = (value) => {
    setInputValue21(value);
    toggleDropdown21();
  };
  const selectOption22 = (value) => {
    setInputValue22(value);
    toggleDropdown22();
  };
  const selectOption23 = (value) => {
    setInputValue23(value);
    toggleDropdown23();
  };
  const selectOption24 = (value) => {
    setInputValue24(value);
    toggleDropdown24();
  };
  const selectOption25 = (value) => {
    setInputValue25(value);
    toggleDropdown25();
  };
  const selectOption26 = (value) => {
    setInputValue26(value);
    toggleDropdown26();
  };
  const selectOption27 = (value) => {
    setInputValue27(value);
    toggleDropdown27();
  };
  const selectOption28 = (value) => {
    setInputValue28(value);
    toggleDropdown28();
  };
  const selectOption29 = (value) => {
    setInputValue29(value);
    toggleDropdown29();
  };
  const selectOption30 = (value) => {
    setInputValue30(value);
    toggleDropdown30();
  };
  const selectOption31 = (value) => {
    setInputValue31(value);
    toggleDropdown31();
  };
  const selectOption32 = (value) => {
    setInputValue32(value);
    toggleDropdown32();
  };
  const selectOption33 = (value) => {
    setInputValue33(value);
    toggleDropdown33();
  };
  const selectOption34 = (value) => {
    setInputValue34(value);
    toggleDropdown34();
  };
  const selectOption35 = (value) => {
    setInputValue35(value);
    toggleDropdown35();
  };
  const selectOption36 = (value) => {
    setInputValue36(value);
    toggleDropdown36();
  };
  const selectOption37 = (value) => {
    setInputValue37(value);
    toggleDropdown37();
  };
  const selectOption38 = (value) => {
    setInputValue38(value);
    toggleDropdown38();
  };
  const selectOption39 = (value) => {
    setInputValue39(value);
    toggleDropdown39();
  };
  const selectOption40 = (value) => {
    setInputValue40(value);
    toggleDropdown40();
  };
  const selectOption41 = (value) => {
    setInputValue41(value);
    toggleDropdown41();
  };
  const selectOption42 = (value) => {
    setInputValue42(value);
    toggleDropdown42();
  };
  const selectOption43 = (value) => {
    setInputValue43(value);
    toggleDropdown43();
  };
  const selectOption44 = (value) => {
    setInputValue44(value);
    toggleDropdown44();
  };
  const selectOption45 = (value) => {
    setInputValue45(value);
    toggleDropdown45();
  };
  const selectOption46 = (value) => {
    setInputValue46(value);
    toggleDropdown46();
  };
  const selectOption47 = (value) => {
    setInputValue47(value);
    toggleDropdown47();
  };
  const selectOption48 = (value) => {
    setInputValue48(value);
    toggleDropdown48();
  };
  const selectOption49 = (value) => {
    setInputValue49(value);
    toggleDropdown49();
  };
  const selectOption50 = (value) => {
    setInputValue50(value);
    toggleDropdown50();
  };
  const selectOption51 = (value) => {
    setInputValue51(value);
    toggleDropdown51();
  };
  const selectOption52 = (value) => {
    setInputValue52(value);
    toggleDropdown52();
  };
  const selectOption53 = (value) => {
    setInputValue53(value);
    toggleDropdown53();
  };
  const selectOption54 = (value) => {
    setInputValue54(value);
    toggleDropdown54();
  };
  const selectOption55 = (value) => {
    setInputValue55(value);
    toggleDropdown55();
  };
  const selectOption56 = (value) => {
    setInputValue56(value);
    toggleDropdown56();
  };
  const selectOption57 = (value) => {
    setInputValue57(value);
    toggleDropdown57();
  };
  const selectOption58 = (value) => {
    setInputValue58(value);
    toggleDropdown58();
  };
  const selectOption59 = (value) => {
    setInputValue59(value);
    toggleDropdown59();
  };
  const selectOption60 = (value) => {
    setInputValue60(value);
    toggleDropdown60();
  };
  const selectOption61 = (value) => {
    setInputValue61(value);
    toggleDropdown61();
  };
  const selectOption62 = (value) => {
    setInputValue62(value);
    toggleDropdown62();
  };
  const selectOption63 = (value) => {
    setInputValue63(value);
    toggleDropdown63();
  };
  const selectOption64 = (value) => {
    setInputValue64(value);
    toggleDropdown64();
  };
  const selectOption65 = (value) => {
    setInputValue65(value);
    toggleDropdown65();
  };
  const selectOption66 = (value) => {
    setInputValue66(value);
    toggleDropdown66();
  };
  const selectOption67 = (value) => {
    setInputValue67(value);
    toggleDropdown67();
  };
  const selectOption68 = (value) => {
    setInputValue68(value);
    toggleDropdown68();
  };
  const selectOption69 = (value) => {
    setInputValue69(value);
    toggleDropdown69();
  };
  const selectOption70 = (value) => {
    setInputValue70(value);
    toggleDropdown70();
  };
  const selectOption71 = (value) => {
    setInputValue71(value);
    toggleDropdown71();
  };
  const selectOption72 = (value) => {
    setInputValue72(value);
    toggleDropdown72();
  };
  const selectOption73 = (value) => {
    setInputValue73(value);
    toggleDropdown73();
  };
  const selectOption74 = (value) => {
    setInputValue74(value);
    toggleDropdown74();
  };
  const selectOption75 = (value) => {
    setInputValue75(value);
    toggleDropdown75();
  };
  const selectOption76 = (value) => {
    setInputValue76(value);
    toggleDropdown76();
  };
  const selectOption77 = (value) => {
    setInputValue77(value);
    toggleDropdown77();
  };
  const selectOption78 = (value) => {
    setInputValue78(value);
    toggleDropdown78();
  };
  const selectOption79 = (value) => {
    setInputValue79(value);
    toggleDropdown79();
  };
  const selectOption80 = (value) => {
    setInputValue80(value);
    toggleDropdown80();
  };
  const selectOption81 = (value) => {
    setInputValue81(value);
    toggleDropdown81();
  };
  const selectOption82 = (value) => {
    setInputValue82(value);
    toggleDropdown82();
  };
  const selectOption83 = (value) => {
    setInputValue83(value);
    toggleDropdown83();
  };
  const selectOption84 = (value) => {
    setInputValue84(value);
    toggleDropdown84();
  };
  const selectOption85 = (value) => {
    setInputValue85(value);
    toggleDropdown85();
  };
  const selectOption86 = (value) => {
    setInputValue86(value);
    toggleDropdown86();
  };
  const selectOption87 = (value) => {
    setInputValue87(value);
    toggleDropdown87();
  };
  const selectOption88 = (value) => {
    setInputValue88(value);
    toggleDropdown88();
  };
  const selectOption89 = (value) => {
    setInputValue89(value);
    toggleDropdown89();
  };
  const selectOption90 = (value) => {
    setInputValue90(value);
    toggleDropdown90();
  };
  const selectOption91 = (value) => {
    setInputValue91(value);
    toggleDropdown91();
  };
  const selectOption92 = (value) => {
    setInputValue92(value);
    toggleDropdown92();
  };
  const selectOption93 = (value) => {
    setInputValue93(value);
    toggleDropdown93();
  };
  const selectOption94 = (value) => {
    setInputValue94(value);
    toggleDropdown94();
  };
  const selectOption95 = (value) => {
    setInputValue95(value);
    toggleDropdown95();
  };
  const selectOption96 = (value) => {
    setInputValue96(value);
    toggleDropdown96();
  };



  const filterOptions = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue(filter); // Update the input value state
  };
  const filterOptions2 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-2');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue2(filter); // Update the input value state
  };
  const filterOptions3 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-3');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue3(filter); // Update the input value state
  };
  const filterOptions4 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-4');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue4(filter); // Update the input value state
  };
  const filterOptions5 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-5');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue5(filter); // Update the input value state
  };
  const filterOptions6 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-6');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue6(filter); // Update the input value state
  };

  const filterOptions7 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-7');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue7(filter); // Update the input value state
  };

  const filterOptions8 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-8');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue8(filter); // Update the input value state
  };

  const filterOptions9 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-9');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue9(filter); // Update the input value state
  };

  const filterOptions10 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-10');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue10(filter); // Update the input value state
  };

  const filterOptions11 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-11');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue11(filter); // Update the input value state
  };

  const filterOptions12 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-12');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue12(filter); // Update the input value state
  };

  const filterOptions13 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-13');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue13(filter); // Update the input value state
  };

  const filterOptions14 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-14');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue14(filter); // Update the input value state
  };

  const filterOptions15 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-15');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue15(filter); // Update the input value state
  };

  const filterOptions16 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-16');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue16(filter); // Update the input value state
  };

  const filterOptions17 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-17');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue17(filter); // Update the input value state
  };
  const filterOptions18 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-18');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue18(filter); // Update the input value state
  };
  const filterOptions19 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-19');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue19(filter); // Update the input value state
  };
  const filterOptions20 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-20');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue20(filter); // Update the input value state
  };
  const filterOptions21 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-21');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue21(filter); // Update the input value state
  };
  const filterOptions22 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-22');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue22(filter); // Update the input value state
  };
  const filterOptions23 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-23');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue23(filter); // Update the input value state
  };
  const filterOptions24 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-24');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue24(filter); // Update the input value state
  };
  const filterOptions25 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-25');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue25(filter); // Update the input value state
  };
  const filterOptions26 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-26');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue26(filter); // Update the input value state
  };
  const filterOptions27 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-27');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue27(filter); // Update the input value state
  };
  const filterOptions28 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-28');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue28(filter); // Update the input value state
  };
  const filterOptions29 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-29');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue29(filter); // Update the input value state
  };
  const filterOptions30 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-30');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue30(filter); // Update the input value state
  };
  const filterOptions31 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-31');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue31(filter); // Update the input value state
  };
  const filterOptions32 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-32');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue32(filter); // Update the input value state
  };
  const filterOptions33 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-33');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue33(filter); // Update the input value state
  };
  const filterOptions34 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-34');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue34(filter); // Update the input value state
  };
  const filterOptions35 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-35');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue35(filter); // Update the input value state
  };
  const filterOptions36 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-36');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue36(filter); // Update the input value state
  };
  const filterOptions37 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-37');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue37(filter); // Update the input value state
  };
  const filterOptions38 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-38');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue38(filter); // Update the input value state
  };
  const filterOptions39 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-39');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue39(filter); // Update the input value state
  };
  const filterOptions40 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-40');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue40(filter); // Update the input value state
  };
  const filterOptions41 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-41');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue41(filter); // Update the input value state
  };
  const filterOptions42 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-42');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue42(filter); // Update the input value state
  };
  const filterOptions43 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-43');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue43(filter); // Update the input value state
  };
  const filterOptions44 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-44');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue44(filter); // Update the input value state
  };
  const filterOptions45 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-45');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue45(filter); // Update the input value state
  };
  const filterOptions46 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-46');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue46(filter); // Update the input value state
  };
  const filterOptions47 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-47');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue47(filter); // Update the input value state
  };
  const filterOptions48 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-48');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue48(filter); // Update the input value state
  };
  const filterOptions49 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-49');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue49(filter); // Update the input value state
  };
  const filterOptions50 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-50');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue50(filter); // Update the input value state
  };
  const filterOptions51 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-51');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue51(filter); // Update the input value state
  };
  const filterOptions52 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-52');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue52(filter); // Update the input value state
  };
  const filterOptions53 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-53');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue53(filter); // Update the input value state
  };
  const filterOptions54 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-54');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue54(filter); // Update the input value state
  };
  const filterOptions55 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-55');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue55(filter); // Update the input value state
  };
  const filterOptions56 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-56');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue56(filter); // Update the input value state
  };
  const filterOptions57 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-57');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue57(filter); // Update the input value state
  };
  const filterOptions58 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-58');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue58(filter); // Update the input value state
  };
  const filterOptions59 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-59');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue59(filter); // Update the input value state
  };
  const filterOptions60 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-60');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue60(filter); // Update the input value state
  };
  const filterOptions61 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-61');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue61(filter); // Update the input value state
  };
  const filterOptions62 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-62');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue62(filter); // Update the input value state
  };
  const filterOptions63 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-63');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue63(filter); // Update the input value state
  };
  const filterOptions64 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-64');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue64(filter); // Update the input value state
  };
  const filterOptions65 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-65');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue65(filter); // Update the input value state
  };
  const filterOptions66 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-66');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue66(filter); // Update the input value state
  };
  const filterOptions67 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-67');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue67(filter); // Update the input value state
  };
  const filterOptions68 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-68');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue68(filter); // Update the input value state
  };
  const filterOptions69 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-69');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue69(filter); // Update the input value state
  };
  const filterOptions70 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-70');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue70(filter); // Update the input value state
  };
  const filterOptions71 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-71');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue71(filter); // Update the input value state
  };
  const filterOptions72 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-72');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue72(filter); // Update the input value state
  };
  const filterOptions73 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-73');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue73(filter); // Update the input value state
  };
  const filterOptions74 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-74');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue74(filter); // Update the input value state
  };
  const filterOptions75 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-75');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue75(filter); // Update the input value state
  };
  const filterOptions76 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-76');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue76(filter); // Update the input value state
  };
  const filterOptions77 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-77');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue77(filter); // Update the input value state
  };
  const filterOptions78 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-78');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue78(filter); // Update the input value state
  };
  const filterOptions79 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-79');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue79(filter); // Update the input value state
  };
  const filterOptions80 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-80');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue80(filter); // Update the input value state
  };
  const filterOptions81 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-81');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue81(filter); // Update the input value state
  };
  const filterOptions82 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-82');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue82(filter); // Update the input value state
  };
  const filterOptions83 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-83');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue83(filter); // Update the input value state
  };
  const filterOptions84 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-84');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue84(filter); // Update the input value state
  };
  const filterOptions85 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-85');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue85(filter); // Update the input value state
  };
  const filterOptions86 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-86');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue86(filter); // Update the input value state
  };
  const filterOptions87 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-87');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue87(filter); // Update the input value state
  };
  const filterOptions88 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-88');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue88(filter); // Update the input value state
  };
  const filterOptions89 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-89');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue89(filter); // Update the input value state
  };
  const filterOptions90 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-90');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue90(filter); // Update the input value state
  };
  const filterOptions91 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-91');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue91(filter); // Update the input value state
  };
  const filterOptions92 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-92');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue92(filter); // Update the input value state
  };
  const filterOptions93 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-93');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue93(filter); // Update the input value state
  };
  const filterOptions94 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-94');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue94(filter); // Update the input value state
  };
  const filterOptions95 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-95');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue95(filter); // Update the input value state
  };
  const filterOptions96 = (event) => {
    const filter = event.target.value.toUpperCase();
    const ul = document.getElementById('input-select-options-96');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      const option = li[i];
      if (option.innerHTML.toUpperCase().indexOf(filter) > -1) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
    setInputValue96(filter); // Update the input value state
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownActive(false);
    }
  };
  const handleOutsideClick2 = (event) => {
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setDropdownActive2(false);
    }
  };
  const handleOutsideClick3 = (event) => {
    if (dropdownRef3.current && !dropdownRef3.current.contains(event.target)) {
      setDropdownActive3(false);
    }
  };
  const handleOutsideClick4 = (event) => {
    if (dropdownRef4.current && !dropdownRef4.current.contains(event.target)) {
      setDropdownActive4(false);
    }
  };
  const handleOutsideClick5 = (event) => {
    if (dropdownRef5.current && !dropdownRef5.current.contains(event.target)) {
      setDropdownActive5(false);
    }
  };
  const handleOutsideClick6 = (event) => {
    if (dropdownRef6.current && !dropdownRef6.current.contains(event.target)) {
      setDropdownActive6(false);
    }
  };
  const handleOutsideClick7 = (event) => {
    if (dropdownRef7.current && !dropdownRef7.current.contains(event.target)) {
      setDropdownActive7(false);
    }
  };
  const handleOutsideClick8 = (event) => {
    if (dropdownRef8.current && !dropdownRef8.current.contains(event.target)) {
      setDropdownActive8(false);
    }
  };
  const handleOutsideClick9 = (event) => {
    if (dropdownRef9.current && !dropdownRef9.current.contains(event.target)) {
      setDropdownActive9(false);
    }
  };
  const handleOutsideClick10 = (event) => {
    if (dropdownRef10.current && !dropdownRef10.current.contains(event.target)) {
      setDropdownActive10(false);
    }
  };
  const handleOutsideClick11 = (event) => {
    if (dropdownRef11.current && !dropdownRef11.current.contains(event.target)) {
      setDropdownActive11(false);
    }
  };
  const handleOutsideClick12 = (event) => {
    if (dropdownRef12.current && !dropdownRef12.current.contains(event.target)) {
      setDropdownActive12(false);
    }
  };
  const handleOutsideClick13 = (event) => {
    if (dropdownRef13.current && !dropdownRef13.current.contains(event.target)) {
      setDropdownActive13(false);
    }
  };
  const handleOutsideClick14 = (event) => {
    if (dropdownRef14.current && !dropdownRef14.current.contains(event.target)) {
      setDropdownActive14(false);
    }
  };
  const handleOutsideClick15 = (event) => {
    if (dropdownRef15.current && !dropdownRef15.current.contains(event.target)) {
      setDropdownActive15(false);
    }
  };
  const handleOutsideClick16 = (event) => {
    if (dropdownRef16.current && !dropdownRef16.current.contains(event.target)) {
      setDropdownActive16(false);
    }
  };
  const handleOutsideClick17 = (event) => {
    if (dropdownRef17.current && !dropdownRef17.current.contains(event.target)) {
      setDropdownActive17(false);
    }
  };
  const handleOutsideClick18 = (event) => {
    if (dropdownRef18.current && !dropdownRef18.current.contains(event.target)) {
      setDropdownActive18(false);
    }
  };
  const handleOutsideClick19 = (event) => {
    if (dropdownRef19.current && !dropdownRef19.current.contains(event.target)) {
      setDropdownActive19(false);
    }
  };
  const handleOutsideClick20 = (event) => {
    if (dropdownRef20.current && !dropdownRef20.current.contains(event.target)) {
      setDropdownActive20(false);
    }
  };
  const handleOutsideClick21 = (event) => {
    if (dropdownRef21.current && !dropdownRef21.current.contains(event.target)) {
      setDropdownActive21(false);
    }
  };
  const handleOutsideClick22 = (event) => {
    if (dropdownRef22.current && !dropdownRef22.current.contains(event.target)) {
      setDropdownActive22(false);
    }
  };
  const handleOutsideClick23 = (event) => {
    if (dropdownRef23.current && !dropdownRef23.current.contains(event.target)) {
      setDropdownActive23(false);
    }
  };
  const handleOutsideClick24 = (event) => {
    if (dropdownRef24.current && !dropdownRef24.current.contains(event.target)) {
      setDropdownActive24(false);
    }
  };
  const handleOutsideClick25 = (event) => {
    if (dropdownRef25.current && !dropdownRef25.current.contains(event.target)) {
      setDropdownActive25(false);
    }
  };
  const handleOutsideClick26 = (event) => {
    if (dropdownRef26.current && !dropdownRef26.current.contains(event.target)) {
      setDropdownActive26(false);
    }
  };
  const handleOutsideClick27 = (event) => {
    if (dropdownRef27.current && !dropdownRef27.current.contains(event.target)) {
      setDropdownActive27(false);
    }
  };
  const handleOutsideClick28 = (event) => {
    if (dropdownRef28.current && !dropdownRef28.current.contains(event.target)) {
      setDropdownActive28(false);
    }
  };
  const handleOutsideClick29 = (event) => {
    if (dropdownRef29.current && !dropdownRef29.current.contains(event.target)) {
      setDropdownActive29(false);
    }
  };
  const handleOutsideClick30 = (event) => {
    if (dropdownRef30.current && !dropdownRef30.current.contains(event.target)) {
      setDropdownActive30(false);
    }
  };
  const handleOutsideClick31 = (event) => {
    if (dropdownRef31.current && !dropdownRef31.current.contains(event.target)) {
      setDropdownActive31(false);
    }
  };
  const handleOutsideClick32 = (event) => {
    if (dropdownRef32.current && !dropdownRef32.current.contains(event.target)) {
      setDropdownActive32(false);
    }
  };
  const handleOutsideClick33 = (event) => {
    if (dropdownRef33.current && !dropdownRef33.current.contains(event.target)) {
      setDropdownActive33(false);
    }
  };
  const handleOutsideClick34 = (event) => {
    if (dropdownRef34.current && !dropdownRef34.current.contains(event.target)) {
      setDropdownActive34(false);
    }
  };
  const handleOutsideClick35 = (event) => {
    if (dropdownRef35.current && !dropdownRef35.current.contains(event.target)) {
      setDropdownActive35(false);
    }
  };
  const handleOutsideClick36 = (event) => {
    if (dropdownRef36.current && !dropdownRef36.current.contains(event.target)) {
      setDropdownActive36(false);
    }
  };
  const handleOutsideClick37 = (event) => {
    if (dropdownRef37.current && !dropdownRef37.current.contains(event.target)) {
      setDropdownActive37(false);
    }
  };
  const handleOutsideClick38 = (event) => {
    if (dropdownRef38.current && !dropdownRef38.current.contains(event.target)) {
      setDropdownActive38(false);
    }
  };
  const handleOutsideClick39 = (event) => {
    if (dropdownRef39.current && !dropdownRef39.current.contains(event.target)) {
      setDropdownActive39(false);
    }
  };
  const handleOutsideClick40 = (event) => {
    if (dropdownRef40.current && !dropdownRef40.current.contains(event.target)) {
      setDropdownActive40(false);
    }
  };
  const handleOutsideClick41 = (event) => {
    if (dropdownRef41.current && !dropdownRef41.current.contains(event.target)) {
      setDropdownActive41(false);
    }
  };
  const handleOutsideClick42 = (event) => {
    if (dropdownRef42.current && !dropdownRef42.current.contains(event.target)) {
      setDropdownActive42(false);
    }
  };
  const handleOutsideClick43 = (event) => {
    if (dropdownRef43.current && !dropdownRef43.current.contains(event.target)) {
      setDropdownActive43(false);
    }
  };
  const handleOutsideClick44 = (event) => {
    if (dropdownRef44.current && !dropdownRef44.current.contains(event.target)) {
      setDropdownActive44(false);
    }
  };
  const handleOutsideClick45 = (event) => {
    if (dropdownRef45.current && !dropdownRef45.current.contains(event.target)) {
      setDropdownActive45(false);
    }
  };
  const handleOutsideClick46 = (event) => {
    if (dropdownRef46.current && !dropdownRef46.current.contains(event.target)) {
      setDropdownActive46(false);
    }
  };
  const handleOutsideClick47 = (event) => {
    if (dropdownRef47.current && !dropdownRef47.current.contains(event.target)) {
      setDropdownActive47(false);
    }
  };
  const handleOutsideClick48 = (event) => {
    if (dropdownRef48.current && !dropdownRef48.current.contains(event.target)) {
      setDropdownActive48(false);
    }
  };
  const handleOutsideClick49 = (event) => {
    if (dropdownRef49.current && !dropdownRef49.current.contains(event.target)) {
      setDropdownActive49(false);
    }
  };
  const handleOutsideClick50 = (event) => {
    if (dropdownRef50.current && !dropdownRef50.current.contains(event.target)) {
      setDropdownActive50(false);
    }
  };
  const handleOutsideClick51 = (event) => {
    if (dropdownRef51.current && !dropdownRef51.current.contains(event.target)) {
      setDropdownActive51(false);
    }
  };
  const handleOutsideClick52 = (event) => {
    if (dropdownRef52.current && !dropdownRef52.current.contains(event.target)) {
      setDropdownActive52(false);
    }
  };
  const handleOutsideClick53 = (event) => {
    if (dropdownRef53.current && !dropdownRef53.current.contains(event.target)) {
      setDropdownActive53(false);
    }
  };
  const handleOutsideClick54 = (event) => {
    if (dropdownRef54.current && !dropdownRef54.current.contains(event.target)) {
      setDropdownActive54(false);
    }
  };
  const handleOutsideClick55 = (event) => {
    if (dropdownRef55.current && !dropdownRef55.current.contains(event.target)) {
      setDropdownActive55(false);
    }
  };
  const handleOutsideClick56 = (event) => {
    if (dropdownRef56.current && !dropdownRef56.current.contains(event.target)) {
      setDropdownActive56(false);
    }
  };
  const handleOutsideClick57 = (event) => {
    if (dropdownRef57.current && !dropdownRef57.current.contains(event.target)) {
      setDropdownActive57(false);
    }
  };
  const handleOutsideClick58 = (event) => {
    if (dropdownRef58.current && !dropdownRef58.current.contains(event.target)) {
      setDropdownActive58(false);
    }
  };
  const handleOutsideClick59 = (event) => {
    if (dropdownRef59.current && !dropdownRef59.current.contains(event.target)) {
      setDropdownActive59(false);
    }
  };
  const handleOutsideClick60 = (event) => {
    if (dropdownRef60.current && !dropdownRef60.current.contains(event.target)) {
      setDropdownActive60(false);
    }
  };
  const handleOutsideClick61 = (event) => {
    if (dropdownRef61.current && !dropdownRef61.current.contains(event.target)) {
      setDropdownActive61(false);
    }
  };
  const handleOutsideClick62 = (event) => {
    if (dropdownRef62.current && !dropdownRef62.current.contains(event.target)) {
      setDropdownActive62(false);
    }
  };
  const handleOutsideClick63 = (event) => {
    if (dropdownRef63.current && !dropdownRef63.current.contains(event.target)) {
      setDropdownActive63(false);
    }
  };
  const handleOutsideClick64 = (event) => {
    if (dropdownRef64.current && !dropdownRef64.current.contains(event.target)) {
      setDropdownActive64(false);
    }
  };
  const handleOutsideClick65 = (event) => {
    if (dropdownRef65.current && !dropdownRef65.current.contains(event.target)) {
      setDropdownActive65(false);
    }
  };
  const handleOutsideClick66 = (event) => {
    if (dropdownRef66.current && !dropdownRef66.current.contains(event.target)) {
      setDropdownActive66(false);
    }
  };
  const handleOutsideClick67 = (event) => {
    if (dropdownRef67.current && !dropdownRef67.current.contains(event.target)) {
      setDropdownActive67(false);
    }
  };
  const handleOutsideClick68 = (event) => {
    if (dropdownRef68.current && !dropdownRef68.current.contains(event.target)) {
      setDropdownActive68(false);
    }
  };
  const handleOutsideClick69 = (event) => {
    if (dropdownRef69.current && !dropdownRef69.current.contains(event.target)) {
      setDropdownActive69(false);
    }
  };
  const handleOutsideClick70 = (event) => {
    if (dropdownRef70.current && !dropdownRef70.current.contains(event.target)) {
      setDropdownActive70(false);
    }
  };
  const handleOutsideClick71 = (event) => {
    if (dropdownRef71.current && !dropdownRef71.current.contains(event.target)) {
      setDropdownActive71(false);
    }
  };
  const handleOutsideClick72 = (event) => {
    if (dropdownRef72.current && !dropdownRef72.current.contains(event.target)) {
      setDropdownActive72(false);
    }
  };
  const handleOutsideClick73 = (event) => {
    if (dropdownRef73.current && !dropdownRef73.current.contains(event.target)) {
      setDropdownActive73(false);
    }
  };
  const handleOutsideClick74 = (event) => {
    if (dropdownRef74.current && !dropdownRef74.current.contains(event.target)) {
      setDropdownActive74(false);
    }
  };
  const handleOutsideClick75 = (event) => {
    if (dropdownRef75.current && !dropdownRef75.current.contains(event.target)) {
      setDropdownActive75(false);
    }
  };
  const handleOutsideClick76 = (event) => {
    if (dropdownRef76.current && !dropdownRef76.current.contains(event.target)) {
      setDropdownActive76(false);
    }
  };
  const handleOutsideClick77 = (event) => {
    if (dropdownRef77.current && !dropdownRef77.current.contains(event.target)) {
      setDropdownActive77(false);
    }
  };
  const handleOutsideClick78 = (event) => {
    if (dropdownRef78.current && !dropdownRef78.current.contains(event.target)) {
      setDropdownActive78(false);
    }
  };
  const handleOutsideClick79 = (event) => {
    if (dropdownRef79.current && !dropdownRef79.current.contains(event.target)) {
      setDropdownActive79(false);
    }
  };
  const handleOutsideClick80 = (event) => {
    if (dropdownRef80.current && !dropdownRef80.current.contains(event.target)) {
      setDropdownActive80(false);
    }
  };
  const handleOutsideClick81 = (event) => {
    if (dropdownRef81.current && !dropdownRef81.current.contains(event.target)) {
      setDropdownActive81(false);
    }
  };
  const handleOutsideClick82 = (event) => {
    if (dropdownRef82.current && !dropdownRef82.current.contains(event.target)) {
      setDropdownActive82(false);
    }
  };
  const handleOutsideClick83 = (event) => {
    if (dropdownRef83.current && !dropdownRef83.current.contains(event.target)) {
      setDropdownActive83(false);
    }
  };
  const handleOutsideClick84 = (event) => {
    if (dropdownRef84.current && !dropdownRef84.current.contains(event.target)) {
      setDropdownActive84(false);
    }
  };
  const handleOutsideClick85 = (event) => {
    if (dropdownRef85.current && !dropdownRef85.current.contains(event.target)) {
      setDropdownActive85(false);
    }
  };
  const handleOutsideClick86 = (event) => {
    if (dropdownRef86.current && !dropdownRef86.current.contains(event.target)) {
      setDropdownActive86(false);
    }
  };
  const handleOutsideClick87 = (event) => {
    if (dropdownRef87.current && !dropdownRef87.current.contains(event.target)) {
      setDropdownActive87(false);
    }
  };
  const handleOutsideClick88 = (event) => {
    if (dropdownRef88.current && !dropdownRef88.current.contains(event.target)) {
      setDropdownActive88(false);
    }
  };
  const handleOutsideClick89 = (event) => {
    if (dropdownRef89.current && !dropdownRef89.current.contains(event.target)) {
      setDropdownActive89(false);
    }
  };
  const handleOutsideClick90 = (event) => {
    if (dropdownRef90.current && !dropdownRef90.current.contains(event.target)) {
      setDropdownActive90(false);
    }
  };
  const handleOutsideClick91 = (event) => {
    if (dropdownRef91.current && !dropdownRef91.current.contains(event.target)) {
      setDropdownActive91(false);
    }
  };
  const handleOutsideClick92 = (event) => {
    if (dropdownRef92.current && !dropdownRef92.current.contains(event.target)) {
      setDropdownActive92(false);
    }
  };
  const handleOutsideClick93 = (event) => {
    if (dropdownRef93.current && !dropdownRef93.current.contains(event.target)) {
      setDropdownActive93(false);
    }
  };
  const handleOutsideClick94 = (event) => {
    if (dropdownRef94.current && !dropdownRef94.current.contains(event.target)) {
      setDropdownActive94(false);
    }
  };
  const handleOutsideClick95 = (event) => {
    if (dropdownRef95.current && !dropdownRef95.current.contains(event.target)) {
      setDropdownActive95(false);
    }
  };
  const handleOutsideClick96 = (event) => {
    if (dropdownRef96.current && !dropdownRef96.current.contains(event.target)) {
      setDropdownActive96(false);
    }
  };




 
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('click', handleOutsideClick2);
    document.addEventListener('click', handleOutsideClick3);
    document.addEventListener('click', handleOutsideClick4);
    document.addEventListener('click', handleOutsideClick5);
    document.addEventListener('click', handleOutsideClick6);
    document.addEventListener('click', handleOutsideClick7);
    document.addEventListener('click', handleOutsideClick8);
    document.addEventListener('click', handleOutsideClick9);
    document.addEventListener('click', handleOutsideClick10);
    document.addEventListener('click', handleOutsideClick11);
    document.addEventListener('click', handleOutsideClick12);
    document.addEventListener('click', handleOutsideClick13);
    document.addEventListener('click', handleOutsideClick14);
    document.addEventListener('click', handleOutsideClick15);
    document.addEventListener('click', handleOutsideClick16);
    document.addEventListener('click', handleOutsideClick17);
    document.addEventListener('click', handleOutsideClick18);
    document.addEventListener('click', handleOutsideClick19);
    document.addEventListener('click', handleOutsideClick20);
    document.addEventListener('click', handleOutsideClick21);
    document.addEventListener('click', handleOutsideClick22);
    document.addEventListener('click', handleOutsideClick23);
    document.addEventListener('click', handleOutsideClick24);
    document.addEventListener('click', handleOutsideClick25);
    document.addEventListener('click', handleOutsideClick26);
    document.addEventListener('click', handleOutsideClick27);
    document.addEventListener('click', handleOutsideClick28);
    document.addEventListener('click', handleOutsideClick29);
    document.addEventListener('click', handleOutsideClick30);
    document.addEventListener('click', handleOutsideClick31);
    document.addEventListener('click', handleOutsideClick32);
    document.addEventListener('click', handleOutsideClick33);
    document.addEventListener('click', handleOutsideClick34);
    document.addEventListener('click', handleOutsideClick35);
    document.addEventListener('click', handleOutsideClick36);
    document.addEventListener('click', handleOutsideClick37);
    document.addEventListener('click', handleOutsideClick38);
    document.addEventListener('click', handleOutsideClick39);
    document.addEventListener('click', handleOutsideClick40);
    document.addEventListener('click', handleOutsideClick41);
    document.addEventListener('click', handleOutsideClick42);
    document.addEventListener('click', handleOutsideClick43);
    document.addEventListener('click', handleOutsideClick44);
    document.addEventListener('click', handleOutsideClick45);
    document.addEventListener('click', handleOutsideClick46);
    document.addEventListener('click', handleOutsideClick47);
    document.addEventListener('click', handleOutsideClick48);
    document.addEventListener('click', handleOutsideClick49);
    document.addEventListener('click', handleOutsideClick50);
    document.addEventListener('click', handleOutsideClick51);
    document.addEventListener('click', handleOutsideClick52);
    document.addEventListener('click', handleOutsideClick53);
    document.addEventListener('click', handleOutsideClick54);
    document.addEventListener('click', handleOutsideClick55);
    document.addEventListener('click', handleOutsideClick56);
    document.addEventListener('click', handleOutsideClick57);
    document.addEventListener('click', handleOutsideClick58);
    document.addEventListener('click', handleOutsideClick59);
    document.addEventListener('click', handleOutsideClick60);
    document.addEventListener('click', handleOutsideClick61);
    document.addEventListener('click', handleOutsideClick62);
    document.addEventListener('click', handleOutsideClick63);
    document.addEventListener('click', handleOutsideClick64);
    document.addEventListener('click', handleOutsideClick65);
    document.addEventListener('click', handleOutsideClick66);
    document.addEventListener('click', handleOutsideClick67);
    document.addEventListener('click', handleOutsideClick68);
    document.addEventListener('click', handleOutsideClick69);
    document.addEventListener('click', handleOutsideClick70);
    document.addEventListener('click', handleOutsideClick71);
    document.addEventListener('click', handleOutsideClick72);
    document.addEventListener('click', handleOutsideClick73);
    document.addEventListener('click', handleOutsideClick74);
    document.addEventListener('click', handleOutsideClick75);
    document.addEventListener('click', handleOutsideClick76);
    document.addEventListener('click', handleOutsideClick77);
    document.addEventListener('click', handleOutsideClick78);
    document.addEventListener('click', handleOutsideClick79);
    document.addEventListener('click', handleOutsideClick80);
    document.addEventListener('click', handleOutsideClick81);
    document.addEventListener('click', handleOutsideClick82);
    document.addEventListener('click', handleOutsideClick83);
    document.addEventListener('click', handleOutsideClick84);
    document.addEventListener('click', handleOutsideClick85);
    document.addEventListener('click', handleOutsideClick86);
    document.addEventListener('click', handleOutsideClick87);
    document.addEventListener('click', handleOutsideClick88);
    document.addEventListener('click', handleOutsideClick89);
    document.addEventListener('click', handleOutsideClick90);
    document.addEventListener('click', handleOutsideClick91);
    document.addEventListener('click', handleOutsideClick92);
    document.addEventListener('click', handleOutsideClick93);
    document.addEventListener('click', handleOutsideClick94);
    document.addEventListener('click', handleOutsideClick95);
    document.addEventListener('click', handleOutsideClick96);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('click', handleOutsideClick2);
      document.removeEventListener('click', handleOutsideClick3);
      document.removeEventListener('click', handleOutsideClick4);
      document.removeEventListener('click', handleOutsideClick5);
      document.removeEventListener('click', handleOutsideClick6);
      document.removeEventListener('click', handleOutsideClick7);
      document.removeEventListener('click', handleOutsideClick8);
      document.removeEventListener('click', handleOutsideClick9);
      document.removeEventListener('click', handleOutsideClick10);
      document.removeEventListener('click', handleOutsideClick11);
      document.removeEventListener('click', handleOutsideClick12);
      document.removeEventListener('click', handleOutsideClick13);
      document.removeEventListener('click', handleOutsideClick14);
      document.removeEventListener('click', handleOutsideClick15);
      document.removeEventListener('click', handleOutsideClick16);
      document.removeEventListener('click', handleOutsideClick17);
      document.removeEventListener('click', handleOutsideClick18);
      document.removeEventListener('click', handleOutsideClick19);
      document.removeEventListener('click', handleOutsideClick20);
      document.removeEventListener('click', handleOutsideClick21);
      document.removeEventListener('click', handleOutsideClick22);
      document.removeEventListener('click', handleOutsideClick23);
      document.removeEventListener('click', handleOutsideClick24);
      document.removeEventListener('click', handleOutsideClick25);
      document.removeEventListener('click', handleOutsideClick26);
      document.removeEventListener('click', handleOutsideClick27);
      document.removeEventListener('click', handleOutsideClick28);
      document.removeEventListener('click', handleOutsideClick29);
      document.removeEventListener('click', handleOutsideClick30);
      document.removeEventListener('click', handleOutsideClick31);
      document.removeEventListener('click', handleOutsideClick32);
      document.removeEventListener('click', handleOutsideClick33);
      document.removeEventListener('click', handleOutsideClick34);
      document.removeEventListener('click', handleOutsideClick35);
      document.removeEventListener('click', handleOutsideClick36);
      document.removeEventListener('click', handleOutsideClick37);
      document.removeEventListener('click', handleOutsideClick38);
      document.removeEventListener('click', handleOutsideClick39);
      document.removeEventListener('click', handleOutsideClick40);
      document.removeEventListener('click', handleOutsideClick41);
      document.removeEventListener('click', handleOutsideClick42);
      document.removeEventListener('click', handleOutsideClick43);
      document.removeEventListener('click', handleOutsideClick44);
      document.removeEventListener('click', handleOutsideClick45);
      document.removeEventListener('click', handleOutsideClick46);
      document.removeEventListener('click', handleOutsideClick47);
      document.removeEventListener('click', handleOutsideClick48);
      document.removeEventListener('click', handleOutsideClick49);
      document.removeEventListener('click', handleOutsideClick50);
      document.removeEventListener('click', handleOutsideClick51);
      document.removeEventListener('click', handleOutsideClick52);
      document.removeEventListener('click', handleOutsideClick53);
      document.removeEventListener('click', handleOutsideClick54);
      document.removeEventListener('click', handleOutsideClick55);
      document.removeEventListener('click', handleOutsideClick56);
      document.removeEventListener('click', handleOutsideClick57);
      document.removeEventListener('click', handleOutsideClick58);
      document.removeEventListener('click', handleOutsideClick59);
      document.removeEventListener('click', handleOutsideClick60);
      document.removeEventListener('click', handleOutsideClick61);
      document.removeEventListener('click', handleOutsideClick62);
      document.removeEventListener('click', handleOutsideClick63);
      document.removeEventListener('click', handleOutsideClick64);
      document.removeEventListener('click', handleOutsideClick65);
      document.removeEventListener('click', handleOutsideClick66);
      document.removeEventListener('click', handleOutsideClick67);
      document.removeEventListener('click', handleOutsideClick68);
      document.removeEventListener('click', handleOutsideClick69);
      document.removeEventListener('click', handleOutsideClick70);
      document.removeEventListener('click', handleOutsideClick71);
      document.removeEventListener('click', handleOutsideClick72);
      document.removeEventListener('click', handleOutsideClick73);
      document.removeEventListener('click', handleOutsideClick74);
      document.removeEventListener('click', handleOutsideClick75);
      document.removeEventListener('click', handleOutsideClick76);
      document.removeEventListener('click', handleOutsideClick77);
      document.removeEventListener('click', handleOutsideClick78);
      document.removeEventListener('click', handleOutsideClick79);
      document.removeEventListener('click', handleOutsideClick80);
      document.removeEventListener('click', handleOutsideClick81);
      document.removeEventListener('click', handleOutsideClick82);
      document.removeEventListener('click', handleOutsideClick83);
      document.removeEventListener('click', handleOutsideClick84);
      document.removeEventListener('click', handleOutsideClick85);
      document.removeEventListener('click', handleOutsideClick86);
      document.removeEventListener('click', handleOutsideClick87);
      document.removeEventListener('click', handleOutsideClick88);
      document.removeEventListener('click', handleOutsideClick89);
      document.removeEventListener('click', handleOutsideClick90);
      document.removeEventListener('click', handleOutsideClick91);
      document.removeEventListener('click', handleOutsideClick92);
      document.removeEventListener('click', handleOutsideClick93);
      document.removeEventListener('click', handleOutsideClick94);
      document.removeEventListener('click', handleOutsideClick95);
      document.removeEventListener('click', handleOutsideClick96);
    };
  }, []);

  const [configData, setConfigData] = useState([]);
  console.log(configData, 'mmmmmmm');
  // const { state: config } = useLocation();
  // const configdata = config;
  // console.log(configdata);

  
  

  useEffect(() => {
    const getConfigData = async () => {
      try {
        const response = await fetch('api/config/get', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
          },
        });

        if (response.ok) {
          const conData = await response.json();

          // Check if conData contains the value you want to display in inputValue
          if (conData && conData.data && conData.data.length > 0) {
            setInputValue(conData.data[0].value1); 
            setInputValue2(conData.data[0].value2); 
            setInputValue3(conData.data[0].value3); 
            setInputValue4(conData.data[0].value4); 
            setInputValue5(conData.data[0].value5); 
            setInputValue6(conData.data[0].value6); 
            setInputValue7(conData.data[0].value7); 
            setInputValue8(conData.data[0].value8); 
           
          }

          setConfigData(conData.data);
        } else {
          console.log('Error:', response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (user && user.token) {
      getConfigData();
    }
  }, [user]);

  
  const configId = configData.length > 0 ? configData[0].config_id : null;
  console.log(configId);

  const handleUpdateConfig = () => {
    fetch(`api/config/update/${configId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        value1: inputValue,
       value2:inputValue2,
       value3:inputValue3,
       value4:inputValue4,
       value5:inputValue5,
       value6:inputValue6,
       value7:inputValue7,
       value8:inputValue8,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error updating config');
        }
      })
      .then((data) => {
        console.log('config updated successfully!', data);
        alert('config updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating config:', error);
      });
  };
  
  return (
    <div>
    <Navbar data={inputValue7}/>
    <AdminSidebar />
    <div className="bread">
      <ul className="breadcrumbs">
        <li className="breadcrumbs--item">
          <a href='/' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>HOME</a>
        </li>
        <li className="breadcrumbs--item">
          <a href='/' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>ADMIN</a>
        </li>
        <li className="breadcrumbs--item">
          <a href="" className="breadcrumbs--link breadcrumbs--link--active">CONFIG</a>
        </li>
      </ul>
      <hr className="hr" />
    </div>
    <HelpRequest />
    {/* -------------------------- */}
    <div>
      <div id="config-head">
        <p>
          MAIN CONFIGERATION
        </p>
      </div>
      <div>
        {/* section 1 */}
        <div id="mainconfig">
          <div className="con-sec1" onClick={toggleSection1}>
            <i className="fa fa-angle-down" />
            <span className="config-number">1</span>
            <span className="config-name">General</span>
          </div>
          <div id="section1" style={{ display: 'none' }}>

            {/* section1.1 */}
            <div id="subsection1">
              <span className="subconfig-number">1.1</span>
              <span className="subconfig-name">Allow delete</span>
              <div id="select-1">
                <div className={`input-select-wrapper ${dropdownActive ? 'active' : ''}`} ref={dropdownRef}>
                  <div className="input-select-container">
                    <input
                      type="text"
                      id="input-select"
                      className="input-select"
                      onClick={toggleDropdown}
                      onChange={filterOptions} // Update the input value on change
                      value={inputValue}
                    />
                    <span
                      className={`toggle-icon ${dropdownActive ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown}
                    ></span>
                  </div>
                  <ul id="input-select-options" className="input-select-options">
                    {options.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* section1.2 */}

            <div id="subsection1">
              <span className="subconfig-number">1.2</span>
              <span className="subconfig-name">Show demo features</span>
              <div id="select-2">
                <div className={`input-select-wrapper ${dropdownActive2 ? 'active' : ''}`} ref={dropdownRef2}>
                  <div className="input-select-container">
                    <input
                      type="text"
                      id="input-select-2"
                      className="input-select"
                      onClick={toggleDropdown2}
                      onChange={filterOptions2}
                      value={inputValue2}
                    />
                    <span
                      className={`toggle-icon ${dropdownActive2 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown2}
                    ></span>
                  </div>
                  <ul id="input-select-options-2" className="input-select-options">
                    {options.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption2(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* section 1.3 */}

            <div id="subsection1">

              <span className="subconfig-number">1.3</span>

              <span className="subconfig-name">Enable custom fields administration</span>

              <div id="select-3">

                <div className={`input-select-wrapper ${dropdownActive3 ? 'active' : ''}`} ref={dropdownRef3}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-3" className="input-select" onClick={toggleDropdown3}
                      onChange={filterOptions3}
                      value={inputValue3} />

                    <span
                      className={`toggle-icon ${dropdownActive3 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown3}
                    ></span>
                  </div>

                  <ul id="input-select-options-3" className="input-select-options">

                    {options.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption3(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

            {/* section 1.4 */}

            <div id="subsection1">

              <span className="subconfig-number">1.4</span>

              <span className="subconfig-name">Show custom fields in forms</span>

              <div id="select-4">

                <div className={`input-select-wrapper ${dropdownActive4 ? 'active' : ''}`} ref={dropdownRef4}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-4" className="input-select" onClick={toggleDropdown4}
                      onChange={filterOptions4}
                      value={inputValue4} />

                    <span
                      className={`toggle-icon ${dropdownActive4 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown4}
                    ></span>
                  </div>

                  <ul id="input-select-options-4" className="input-select-options">

                    {options.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption4(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

            {/* Section 1.5 */}


            <div id="subsection1">

              <span className="subconfig-number">1.5</span>

              <span className="subconfig-name">Default staffing priority</span>

              <div id="select-5">

                <div className={`input-select-wrapper ${dropdownActive5 ? 'active' : ''}`} ref={dropdownRef5}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-5" className="input-select" onClick={toggleDropdown5}
                      onChange={filterOptions5}
                      value={inputValue5} />

                    <span
                      className={`toggle-icon ${dropdownActive5 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown5}
                    ></span>
                  </div>

                  <ul id="input-select-options-5" className="input-select-options">

                    {options2.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption5(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

            {/* section 1.6 */}


            <div id="subsection1">

              <span className="subconfig-number">1.6</span>

              <span className="subconfig-name">Default Date Format</span>

              <div id="select-6">

                <div className={`input-select-wrapper ${dropdownActive6 ? 'active' : ''}`} ref={dropdownRef6}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-6" className="input-select" onClick={toggleDropdown6}
                      onChange={filterOptions6}
                      value={inputValue6} />

                    <span
                      className={`toggle-icon ${dropdownActive6 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown6}
                    ></span>
                  </div>

                  <ul id="input-select-options-6" className="input-select-options">

                    {options3.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption6(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>
            {/* section 1.7 */}

            <div id="subsection1">

              <span className="subconfig-number">1.7</span>

              <span className="subconfig-name">Enable logo personalization on top bar</span>

              <div id="select-7">

                <div className={`input-select-wrapper ${dropdownActive7 ? 'active' : ''}`} ref={dropdownRef7}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-7" className="input-select" onClick={toggleDropdown7}
                      onChange={filterOptions7}
                      value={inputValue7} />

                    <span
                      className={`toggle-icon ${dropdownActive7 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown7}
                    ></span>
                  </div>

                  <ul id="input-select-options-7" className="input-select-options">

                    {options.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption7(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

            {/* section 1.8 */}

            <div id="subsection1">

              <span className="subconfig-number">1.8</span>

              <span className="subconfig-name">Deafault notification type</span>

              <div id="select-8">

                <div className={`input-select-wrapper ${dropdownActive8 ? 'active' : ''}`} ref={dropdownRef8}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-8" className="input-select" onClick={toggleDropdown8}
                      onChange={filterOptions8}
                      value={inputValue8} />

                    <span
                      className={`toggle-icon ${dropdownActive8 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown8}
                    ></span>
                  </div>

                  <ul id="input-select-options-8" className="input-select-options">

                    {options4.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption8(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>
          </div>
          {/* Section 2 */}
          <div>
            <div className="con-sec2" onClick={toggleSection2}>
              <i className="fa fa-angle-down" />
              <span className="config-number">2</span>
              <span className="config-name">Accounts</span>
            </div>
            <div id="section2" style={{ display: 'none' }}>

              {/* section 2.1 */}
              <div id="subsection1">

                <span className="subconfig-number">2.1</span>

                <span className="subconfig-name">Can user add accounts?</span>

                <div id="select-9">

                  <div className={`input-select-wrapper ${dropdownActive9 ? 'active' : ''}`} ref={dropdownRef9}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-9" className="input-select" onClick={toggleDropdown9}
                        onChange={filterOptions9}
                        value={inputValue9} />

                      <span
                        className={`toggle-icon ${dropdownActive9 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown9}
                      ></span>
                    </div>

                    <ul id="input-select-options-9" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption9(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>

              </div>

              {/* section 2.2 */}

              <div id="subsection1">

                <span className="subconfig-number">2.2</span>

                <span className="subconfig-name">Limit user access to his/her accounts?</span>

                <div id="select-10">

                  <div className={`input-select-wrapper ${dropdownActive10 ? 'active' : ''}`} ref={dropdownRef10}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-10" className="input-select" onClick={toggleDropdown10}
                        onChange={filterOptions10}
                        value={inputValue10} />

                      <span
                        className={`toggle-icon ${dropdownActive10 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown10}
                      ></span>
                    </div>

                    <ul id="input-select-options-10" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption10(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>

              </div>

              {/* section 2.3 */}



              <div id="subsection1">

                <span className="subconfig-number">2.3</span>

                <span className="subconfig-name">Show account addresses?</span>

                <div id="select-11">

                  <div className={`input-select-wrapper ${dropdownActive11 ? 'active' : ''}`} ref={dropdownRef11}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-11" className="input-select" onClick={toggleDropdown11}
                        onChange={filterOptions11}
                        value={inputValue11} />

                      <span
                        className={`toggle-icon ${dropdownActive11 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown11}
                      ></span>
                    </div>

                    <ul id="input-select-options-11" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption11(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* section 3 */}

          <div className="con-sec3" onClick={toggleSection3}>
            <i className="fa fa-angle-down" />
            <span className="config-number">3</span>
            <span className="config-name">Opportunities</span>
          </div>
          <div id="section3" style={{ display: 'none' }}>

            {/* section 3.1 */}


            <div id="subsection1">

              <span className="subconfig-number">3.1</span>

              <span className="subconfig-name">Can user add opportunities?</span>

              <div id="select-12">

                <div className={`input-select-wrapper ${dropdownActive12 ? 'active' : ''}`} ref={dropdownRef12}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-12" className="input-select" onClick={toggleDropdown12}
                      onChange={filterOptions12}
                      value={inputValue12} />

                    <span
                      className={`toggle-icon ${dropdownActive12 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown12}
                    ></span>
                  </div>

                  <ul id="input-select-options-12" className="input-select-options">

                    {options.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption12(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

            {/* section 3.2 */}

            <div id="subsection1">

              <span className="subconfig-number">3.2</span>

              <span className="subconfig-name">Limit user acces to his/her oppotunities</span>

              <div id="select-13">

                <div className={`input-select-wrapper ${dropdownActive13 ? 'active' : ''}`} ref={dropdownRef13}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-13" className="input-select" onClick={toggleDropdown13}
                      onChange={filterOptions13}
                      value={inputValue13} />

                    <span
                      className={`toggle-icon ${dropdownActive13 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown13}
                    ></span>
                  </div>

                  <ul id="input-select-options-13" className="input-select-options">

                    {options.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption13(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

            {/* section 3.3 */}


            <div id="subsection1">

              <span className="subconfig-number">3.3</span>

              <span className="subconfig-name">Restrict edit to bid team members?</span>

              <div id="select-14">

                <div className={`input-select-wrapper ${dropdownActive14 ? 'active' : ''}`} ref={dropdownRef14}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-14" className="input-select" onClick={toggleDropdown14}
                      onChange={filterOptions14}
                      value={inputValue14} />

                    <span
                      className={`toggle-icon ${dropdownActive14 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown14}
                    ></span>
                  </div>

                  <ul id="input-select-options-14" className="input-select-options">

                    {options.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption14(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

            {/* section 3.4 */}

            <div id="subsection1">

              <span className="subconfig-number">3.4</span>

              <span className="subconfig-name">Show Duration in</span>

              <div id="select-15">

                <div className={`input-select-wrapper ${dropdownActive15 ? 'active' : ''}`} ref={dropdownRef15}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-15" className="input-select" onClick={toggleDropdown15}
                      onChange={filterOptions15}
                      value={inputValue15} />

                    <span
                      className={`toggle-icon ${dropdownActive15 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown15}
                    ></span>
                  </div>

                  <ul id="input-select-options-15" className="input-select-options">

                    {options5.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption15(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>


            {/* section 3.5*/}

            <div id="subsection1">

              <span className="subconfig-number">3.5</span>

              <span className="subconfig-name">Show opportunity addresses?</span>

              <div id="select-16">

                <div className={`input-select-wrapper ${dropdownActive16 ? 'active' : ''}`} ref={dropdownRef16}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-16" className="input-select" onClick={toggleDropdown16}
                      onChange={filterOptions16}
                      value={inputValue16} />

                    <span
                      className={`toggle-icon ${dropdownActive16 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown16}
                    ></span>
                  </div>

                  <ul id="input-select-options-16" className="input-select-options">

                    {options.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption16(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

            {/* section 3.6 */}
            <div id="subsection1">

              <span className="subconfig-number">3.6</span>

              <span className="subconfig-name">Use opportunity files and notes for both opportunities and quotes</span>

              <div id="select-17">

                <div className={`input-select-wrapper ${dropdownActive17 ? 'active' : ''}`} ref={dropdownRef17}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-17" className="input-select" onClick={toggleDropdown17}
                      onChange={filterOptions17}
                      value={inputValue17} />

                    <span
                      className={`toggle-icon ${dropdownActive17 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown17}
                    ></span>
                  </div>

                  <ul id="input-select-options-17" className="input-select-options">

                    {options.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption17(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

            {/* section 3.7 */}

            <div id="subsection1">

              <span className="subconfig-number">3.7</span>

              <span className="subconfig-name">Allow moving a quote to another opportunity</span>

              <div id="select-18">

                <div className={`input-select-wrapper ${dropdownActive18 ? 'active' : ''}`} ref={dropdownRef18}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-18" className="input-select" onClick={toggleDropdown18}
                      onChange={filterOptions18}
                      value={inputValue18} />

                    <span
                      className={`toggle-icon ${dropdownActive18 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown18}
                    ></span>
                  </div>

                  <ul id="input-select-options-18" className="input-select-options">

                    {options.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption18(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

            {/* section 3.8 */}

            <div id="subsection1">

              <span className="subconfig-number">3.8</span>

              <span className="subconfig-name">Allow Right Click Copy</span>

              <div id="select-19">

                <div className={`input-select-wrapper ${dropdownActive19 ? 'active' : ''}`} ref={dropdownRef19}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-19" className="input-select" onClick={toggleDropdown19}
                      onChange={filterOptions19}
                      value={inputValue19} />

                    <span
                      className={`toggle-icon ${dropdownActive19 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown19}
                    ></span>
                  </div>

                  <ul id="input-select-options-19" className="input-select-options">

                    {options6.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption19(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

            {/* section 3.9 */}

            <div id="subsection1">

              <span className="subconfig-number">3.9</span>

              <span className="subconfig-name">Allow Right Click Archive</span>

              <div id="select-20">

                <div className={`input-select-wrapper ${dropdownActive20 ? 'active' : ''}`} ref={dropdownRef20}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-20" className="input-select" onClick={toggleDropdown20}
                      onChange={filterOptions20}
                      value={inputValue20} />

                    <span
                      className={`toggle-icon ${dropdownActive20 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown20}
                    ></span>
                  </div>

                  <ul id="input-select-options-20" className="input-select-options">

                    {options.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption20(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

            {/* section 3.10 */}

            <div id="subsection1">

              <span className="subconfig-number">3.10</span>

              <span className="subconfig-name">Enable Billing Contracts</span>

              <div id="select-21">

                <div className={`input-select-wrapper ${dropdownActive21 ? 'active' : ''}`} ref={dropdownRef21}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-21" className="input-select" onClick={toggleDropdown21}
                      onChange={filterOptions21}
                      value={inputValue21} />

                    <span
                      className={`toggle-icon ${dropdownActive21 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown21}
                    ></span>
                  </div>

                  <ul id="input-select-options-21" className="input-select-options">

                    {options.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption21(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

            {/* section 3.11 */}

            <div id="subsection1">

              <span className="subconfig-number">3.11</span>

              <span className="subconfig-name">Enable Manual Billing</span>

              <div id="select-22">

                <div className={`input-select-wrapper ${dropdownActive22 ? 'active' : ''}`} ref={dropdownRef22}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-22" className="input-select" onClick={toggleDropdown22}
                      onChange={filterOptions22}
                      value={inputValue22} />

                    <span
                      className={`toggle-icon ${dropdownActive22 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown22}
                    ></span>
                  </div>

                  <ul id="input-select-options-22" className="input-select-options">

                    {options.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption22(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>

            {/* section 3.12 */}

            <div id="subsection1">

              <span className="subconfig-number">3.12</span>

              <span className="subconfig-name">Cross-Account Opportunity Relationships</span>

              <div id="select-23">

                <div className={`input-select-wrapper ${dropdownActive23 ? 'active' : ''}`} ref={dropdownRef23}>
                  <div className="input-select-container">
                    <input type="text" id="input-select-23" className="input-select" onClick={toggleDropdown23}
                      onChange={filterOptions23}
                      value={inputValue23} />

                    <span
                      className={`toggle-icon ${dropdownActive23 ? 'angle-up' : 'angle-down'}`}
                      onClick={toggleDropdown23}
                    ></span>
                  </div>

                  <ul id="input-select-options-23" className="input-select-options">

                    {options.map((option) => (
                      <li
                        key={option.value}
                        data-value={option.value}
                        onClick={() => selectOption23(option.value)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            </div>
          </div>

          {/* section 4 */}

          <div>
            <div class="con-sec4" onClick={toggleSection4}>
              <i class="fa fa-angle-down"></i>
              <span class="config-number">4</span>
              <span class="config-name">Quotes</span>
            </div>

            <div id="section4" style={{ display: 'none' }}>

              {/* section 4.1 */}

              <div id="subsection1">

                <span className="subconfig-number">4.1</span>

                <span className="subconfig-name">Deafault view for quotes</span>

                <div id="select-24">

                  <div className={`input-select-wrapper ${dropdownActive24 ? 'active' : ''}`} ref={dropdownRef24}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-24" className="input-select" onClick={toggleDropdown24}
                        onChange={filterOptions24}
                        value={inputValue24} />

                      <span
                        className={`toggle-icon ${dropdownActive24 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown24}
                      ></span>
                    </div>

                    <ul id="input-select-options-24" className="input-select-options">

                      {options7.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption24(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.2 */}

              <div id="subsection1">

                <span className="subconfig-number">4.2</span>

                <span className="subconfig-name">Deafault Quote Price Model</span>

                <div id="select-25">

                  <div className={`input-select-wrapper ${dropdownActive25 ? 'active' : ''}`} ref={dropdownRef25}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-25" className="input-select" onClick={toggleDropdown25}
                        onChange={filterOptions25}
                        value={inputValue25} />

                      <span
                        className={`toggle-icon ${dropdownActive25 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown25}
                      ></span>
                    </div>

                    <ul id="input-select-options-25" className="input-select-options">

                      {options8.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption25(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.3 */}

              <div id="subsection1">

                <span className="subconfig-number">4.3</span>

                <span className="subconfig-name">Front load allocations</span>

                <div id="select-26">

                  <div className={`input-select-wrapper ${dropdownActive26 ? 'active' : ''}`} ref={dropdownRef26}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-26" className="input-select" onClick={toggleDropdown26}
                        onChange={filterOptions26}
                        value={inputValue26} />

                      <span
                        className={`toggle-icon ${dropdownActive26 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown26}
                      ></span>
                    </div>

                    <ul id="input-select-options-26" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption26(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.4 */}

              <div id="subsection1">

                <span className="subconfig-number">4.4</span>

                <span className="subconfig-name">Allow cost update for roles?</span>

                <div id="select-27">

                  <div className={`input-select-wrapper ${dropdownActive27 ? 'active' : ''}`} ref={dropdownRef27}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-27" className="input-select" onClick={toggleDropdown27}
                        onChange={filterOptions27}
                        value={inputValue27} />

                      <span
                        className={`toggle-icon ${dropdownActive27 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown27}
                      ></span>
                    </div>

                    <ul id="input-select-options-27" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption27(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.5 */}

              <div id="subsection1">

                <span className="subconfig-number">4.5</span>

                <span className="subconfig-name">Allow cost update for items?</span>

                <div id="select-28">

                  <div className={`input-select-wrapper ${dropdownActive28 ? 'active' : ''}`} ref={dropdownRef28}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-28" className="input-select" onClick={toggleDropdown28}
                        onChange={filterOptions28}
                        value={inputValue28} />

                      <span
                        className={`toggle-icon ${dropdownActive28 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown28}
                      ></span>
                    </div>

                    <ul id="input-select-options-28" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption28(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.6 */}
              <div id="subsection1">

                <span className="subconfig-number">4.6</span>

                <span className="subconfig-name">Role & item Unit max display precision</span>

                <div id="select-29">

                  <div className={`input-select-wrapper ${dropdownActive29 ? 'active' : ''}`} ref={dropdownRef29}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-29" className="input-select" onClick={toggleDropdown29}
                        onChange={filterOptions29}
                        value={inputValue29} />

                      <span
                        className={`toggle-icon ${dropdownActive29 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown29}
                      ></span>
                    </div>

                    <ul id="input-select-options-29" className="input-select-options">

                      {options9.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption29(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.7 */}


              <div id="subsection1">

                <span className="subconfig-number">4.7</span>

                <span className="subconfig-name">Select editor theme</span>

                <div id="select-30">

                  <div className={`input-select-wrapper ${dropdownActive30 ? 'active' : ''}`} ref={dropdownRef30}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-30" className="input-select" onClick={toggleDropdown30}
                        onChange={filterOptions30}
                        value={inputValue30} />

                      <span
                        className={`toggle-icon ${dropdownActive30 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown30}
                      ></span>
                    </div>

                    <ul id="input-select-options-30" className="input-select-options">

                      {options13.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption30(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>\imports

                </div>
              </div>

              {/* section 4.8 */}



              <div id="subsection1">

                <span className="subconfig-number">4.8</span>

                <span className="subconfig-name">Default to Guided Selling on a new quote?</span>

                <div id="select-31">
                  <div className={`input-select-wrapper ${dropdownActive31 ? 'active' : ''}`} ref={dropdownRef31}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-31" className="input-select" onClick={toggleDropdown31}
                        onChange={filterOptions31}
                        value={inputValue31} />

                      <span
                        className={`toggle-icon ${dropdownActive31 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown31}
                      ></span>
                    </div>

                    <ul id="input-select-options-31" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption31(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.9 */}


              <div id="subsection1">

                <span className="subconfig-number">4.9</span>

                <span className="subconfig-name">Allow deletion of approved quotes</span>

                <div id="select-32">

                  <div className={`input-select-wrapper ${dropdownActive32 ? 'active' : ''}`} ref={dropdownRef32}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-32" className="input-select" onClick={toggleDropdown32}
                        onChange={filterOptions32}
                        value={inputValue32} />

                      <span
                        className={`toggle-icon ${dropdownActive32 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown32}
                      ></span>
                    </div>

                    <ul id="input-select-options-32" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption32(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.10 */}


              <div id="subsection1">

                <span className="subconfig-number">4.10</span>

                <span className="subconfig-name">Enable Tasks</span>

                <div id="select-33">

                  <div className={`input-select-wrapper ${dropdownActive33 ? 'active' : ''}`} ref={dropdownRef33}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-33" className="input-select" onClick={toggleDropdown33}
                        onChange={filterOptions33}
                        value={inputValue33} />

                      <span
                        className={`toggle-icon ${dropdownActive33 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown33}
                      ></span>
                    </div>

                    <ul id="input-select-options-33" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption33(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.11 */}

              <div id="subsection1">

                <span className="subconfig-number">4.11</span>

                <span className="subconfig-name">Enable Display Dates for service (Tasks)</span>

                <div id="select-34">

                  <div className={`input-select-wrapper ${dropdownActive34 ? 'active' : ''}`} ref={dropdownRef34}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-34" className="input-select" onClick={toggleDropdown34}
                        onChange={filterOptions34}
                        value={inputValue34} />

                      <span
                        className={`toggle-icon ${dropdownActive34 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown34}
                      ></span>
                    </div>

                    <ul id="input-select-options-34" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption34(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 4.12 */}


              <div id="subsection1">

                <span className="subconfig-number">4.12</span>

                <span className="subconfig-name">Enable survey calculation sheets</span>

                <div id="select-35">

                  <div className={`input-select-wrapper ${dropdownActive35 ? 'active' : ''}`} ref={dropdownRef35}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-35" className="input-select" onClick={toggleDropdown35}
                        onChange={filterOptions35}
                        value={inputValue35} />

                      <span
                        className={`toggle-icon ${dropdownActive35 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown35}
                      ></span>
                    </div>

                    <ul id="input-select-options-35" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption35(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.13 */}


              <div id="subsection1">

                <span className="subconfig-number">4.13</span>

                <span className="subconfig-name">Enable catalog grid</span>

                <div id="select-36">

                  <div className={`input-select-wrapper ${dropdownActive36 ? 'active' : ''}`} ref={dropdownRef36}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-36" className="input-select" onClick={toggleDropdown36}
                        onChange={filterOptions36}
                        value={inputValue36} />

                      <span
                        className={`toggle-icon ${dropdownActive36 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown36}
                      ></span>
                    </div>

                    <ul id="input-select-options-36" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption36(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 4.14 */}

              <div id="subsection1">

                <span className="subconfig-number">4.14</span>

                <span className="subconfig-name">Auto refresh formulas</span>

                <div id="select-37">

                  <div className={`input-select-wrapper ${dropdownActive37 ? 'active' : ''}`} ref={dropdownRef37}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-37" className="input-select" onClick={toggleDropdown37}
                        onChange={filterOptions37}
                        value={inputValue37} />

                      <span
                        className={`toggle-icon ${dropdownActive37 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown37}
                      ></span>
                    </div>

                    <ul id="input-select-options-37" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption37(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.15 */}

              <div id="subsection1">

                <span className="subconfig-number">4.15</span>

                <span className="subconfig-name">Default group by?</span>

                <div id="select-38">

                  <div className={`input-select-wrapper ${dropdownActive38 ? 'active' : ''}`} ref={dropdownRef38}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-38" className="input-select" onClick={toggleDropdown38}
                        onChange={filterOptions38}
                        value={inputValue38} />

                      <span
                        className={`toggle-icon ${dropdownActive38 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown38}
                      ></span>
                    </div>

                    <ul id="input-select-options-38" className="input-select-options">

                      {options10.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption38(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 4.16 */}

              <div id="subsection1">

                <span className="subconfig-number">4.16</span>

                <span className="subconfig-name">Automatically merge Global Settings</span>

                <div id="select-39">

                  <div className={`input-select-wrapper ${dropdownActive39 ? 'active' : ''}`} ref={dropdownRef39}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-39" className="input-select" onClick={toggleDropdown39}
                        onChange={filterOptions39}
                        value={inputValue39} />

                      <span
                        className={`toggle-icon ${dropdownActive39 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown39}
                      ></span>
                    </div>

                    <ul id="input-select-options-39" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption39(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.17 */}

              <div id="subsection1">

                <span className="subconfig-number">4.17</span>

                <span className="subconfig-name">Revenue distribution method for fixed price</span>

                <div id="select-40">

                  <div className={`input-select-wrapper ${dropdownActive40 ? 'active' : ''}`} ref={dropdownRef40}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-40" className="input-select" onClick={toggleDropdown40}
                        onChange={filterOptions40}
                        value={inputValue40} />

                      <span
                        className={`toggle-icon ${dropdownActive40 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown40}
                      ></span>
                    </div>

                    <ul id="input-select-options-40" className="input-select-options">

                      {options11.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption40(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.18 */}

              <div id="subsection1">
                <span class="subconfig-number">4.18</span>
                <span class="subconfig-name">Doc Type to use for integration upload</span>
                <div id="select-1">
                  <div class="input-select-wrapper">
                    <input type="text" id="input-select" class="input-select" />
                    <ul class="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 4.19 */}

              <div id="subsection1">

                <span className="subconfig-number">4.19</span>

                <span className="subconfig-name">Refresh calcsheet on answer</span>

                <div id="select-41">

                  <div className={`input-select-wrapper ${dropdownActive41 ? 'active' : ''}`} ref={dropdownRef41}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-41" className="input-select" onClick={toggleDropdown41}
                        onChange={filterOptions41}
                        value={inputValue41} />

                      <span
                        className={`toggle-icon ${dropdownActive41 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown41}
                      ></span>
                    </div>

                    <ul id="input-select-options-41" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption41(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.20 */}

              <div id="subsection1">

                <span className="subconfig-number">4.20</span>

                <span className="subconfig-name">Prepend opportunity name to quote name</span>

                <div id="select-42">

                  <div className={`input-select-wrapper ${dropdownActive42 ? 'active' : ''}`} ref={dropdownRef42}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-42" className="input-select" onClick={toggleDropdown42}
                        onChange={filterOptions42}
                        value={inputValue42} />

                      <span
                        className={`toggle-icon ${dropdownActive42 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown42}
                      ></span>
                    </div>

                    <ul id="input-select-options-42" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption42(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.21 */}

              <div id="subsection1">

                <span className="subconfig-number">4.21</span>

                <span className="subconfig-name">Allow unit list price upate</span>

                <div id="select-43">

                  <div className={`input-select-wrapper ${dropdownActive43 ? 'active' : ''}`} ref={dropdownRef43}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-43" className="input-select" onClick={toggleDropdown43}
                        onChange={filterOptions43}
                        value={inputValue43} />

                      <span
                        className={`toggle-icon ${dropdownActive43 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown43}
                      ></span>
                    </div>

                    <ul id="input-select-options-43" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption43(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.22 */}

              <div id="subsection1">

                <span className="subconfig-number">4.22</span>

                <span className="subconfig-name">Enable Advanced Ratecards</span>

                <div id="select-44">

                  <div className={`input-select-wrapper ${dropdownActive44 ? 'active' : ''}`} ref={dropdownRef44}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-44" className="input-select" onClick={toggleDropdown44}
                        onChange={filterOptions44}
                        value={inputValue44} />

                      <span
                        className={`toggle-icon ${dropdownActive44 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown44}
                      ></span>
                    </div>

                    <ul id="input-select-options-44" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption44(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.23 */}

              <div id="subsection1">

                <span className="subconfig-number">4.23</span>

                <span className="subconfig-name">Limit Rate Card Roles</span>

                <div id="select-45">

                  <div className={`input-select-wrapper ${dropdownActive45 ? 'active' : ''}`} ref={dropdownRef45}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-45" className="input-select" onClick={toggleDropdown45}
                        onChange={filterOptions45}
                        value={inputValue45} />

                      <span
                        className={`toggle-icon ${dropdownActive45 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown45}
                      ></span>
                    </div>

                    <ul id="input-select-options-45" className="input-select-options">

                      {options12.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption45(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.24 */}

              <div id="subsection1">

                <span className="subconfig-number">4.24</span>

                <span className="subconfig-name">Enable Currency Exchange Rate Table</span>

                <div id="select-46">

                  <div className={`input-select-wrapper ${dropdownActive46 ? 'active' : ''}`} ref={dropdownRef46}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-46" className="input-select" onClick={toggleDropdown46}
                        onChange={filterOptions46}
                        value={inputValue46} />

                      <span
                        className={`toggle-icon ${dropdownActive46 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown46}
                      ></span>
                    </div>

                    <ul id="input-select-options-46" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption46(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.25 */}

              <div id="subsection1">

                <span className="subconfig-number">4.25</span>

                <span className="subconfig-name">Use inversions To calculate Currency Exchange Rate</span>

                <div id="select-47">

                  <div className={`input-select-wrapper ${dropdownActive47 ? 'active' : ''}`} ref={dropdownRef47}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-47" className="input-select" onClick={toggleDropdown47}
                        onChange={filterOptions47}
                        value={inputValue47} />

                      <span
                        className={`toggle-icon ${dropdownActive47 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown47}
                      ></span>
                    </div>

                    <ul id="input-select-options-47" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption47(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.26 */}

              <div id="subsection1">

                <span className="subconfig-number">4.26</span>

                <span className="subconfig-name">Use Hops To calculate Currency Exchange Rate</span>

                <div id="select-48">

                  <div className={`input-select-wrapper ${dropdownActive48 ? 'active' : ''}`} ref={dropdownRef48}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-48" className="input-select" onClick={toggleDropdown48}
                        onChange={filterOptions48}
                        value={inputValue48} />

                      <span
                        className={`toggle-icon ${dropdownActive48 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown48}
                      ></span>
                    </div>

                    <ul id="input-select-options-48" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption48(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.27 */}

              <div id="subsection1">

                <span className="subconfig-number">4.27</span>

                <span className="subconfig-name">Warn if manual updates are deleted on Apply?</span>

                <div id="select-49">

                  <div className={`input-select-wrapper ${dropdownActive49 ? 'active' : ''}`} ref={dropdownRef49}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-49" className="input-select" onClick={toggleDropdown49}
                        onChange={filterOptions49}
                        value={inputValue49} />

                      <span
                        className={`toggle-icon ${dropdownActive49 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown49}
                      ></span>
                    </div>

                    <ul id="input-select-options-49" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption49(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.28 */}

              <div id="subsection1">

                <span className="subconfig-number">4.28</span>

                <span className="subconfig-name">Include quote template when exporting a catalog survey?</span>

                <div id="select-50">

                  <div className={`input-select-wrapper ${dropdownActive50 ? 'active' : ''}`} ref={dropdownRef50}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-50" className="input-select" onClick={toggleDropdown50}
                        onChange={filterOptions50}
                        value={inputValue50} />

                      <span
                        className={`toggle-icon ${dropdownActive50 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown50}
                      ></span>
                    </div>

                    <ul id="input-select-options-50" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption50(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.29 */}

              <div id="subsection1">

                <span className="subconfig-number">4.29</span>

                <span className="subconfig-name">Clone using most recent survey template?</span>

                <div id="select-51">

                  <div className={`input-select-wrapper ${dropdownActive51 ? 'active' : ''}`} ref={dropdownRef51}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-51" className="input-select" onClick={toggleDropdown51}
                        onChange={filterOptions51}
                        value={inputValue51} />

                      <span
                        className={`toggle-icon ${dropdownActive51 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown51}
                      ></span>
                    </div>

                    <ul id="input-select-options-51" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption51(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.30 */}

              <div id="subsection1">

                <span className="subconfig-number">4.30</span>

                <span className="subconfig-name">Only merge approved quotes?</span>

                <div id="select-52">

                  <div className={`input-select-wrapper ${dropdownActive52 ? 'active' : ''}`} ref={dropdownRef52}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-52" className="input-select" onClick={toggleDropdown52}
                        onChange={filterOptions52}
                        value={inputValue52} />

                      <span
                        className={`toggle-icon ${dropdownActive52 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown52}
                      ></span>
                    </div>

                    <ul id="input-select-options-52" className="input-select-options">

                      {options14.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption52(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.31 */}

              <div id="subsection1">

                <span className="subconfig-number">4.31</span>

                <span className="subconfig-name">Use clicker for rule conditions and actions?</span>

                <div id="select-53">

                  <div className={`input-select-wrapper ${dropdownActive53 ? 'active' : ''}`} ref={dropdownRef53}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-53" className="input-select" onClick={toggleDropdown53}
                        onChange={filterOptions53}
                        value={inputValue53} />

                      <span
                        className={`toggle-icon ${dropdownActive53 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown53}
                      ></span>
                    </div>

                    <ul id="input-select-options-53" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption53(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.32 */}

              <div id="subsection1">

                <span className="subconfig-number">4.32</span>

                <span className="subconfig-name">Use toJSON when getting values from calcsheet?</span>

                <div id="select-54">

                  <div className={`input-select-wrapper ${dropdownActive54 ? 'active' : ''}`} ref={dropdownRef54}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-54" className="input-select" onClick={toggleDropdown54}
                        onChange={filterOptions54}
                        value={inputValue54} />

                      <span
                        className={`toggle-icon ${dropdownActive54 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown54}
                      ></span>
                    </div>

                    <ul id="input-select-options-54" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption54(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.33 */}

              <div id="subsection1">

                <span className="subconfig-number">4.33</span>

                <span className="subconfig-name">Disable discount override in Quote Header</span>

                <div id="select-55">

                  <div className={`input-select-wrapper ${dropdownActive55 ? 'active' : ''}`} ref={dropdownRef55}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-55" className="input-select" onClick={toggleDropdown55}
                        onChange={filterOptions55}
                        value={inputValue55} />

                      <span
                        className={`toggle-icon ${dropdownActive55 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown55}
                      ></span>
                    </div>

                    <ul id="input-select-options-55" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption55(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.34 */}

              <div id="subsection1">

                <span className="subconfig-number">4.34</span>

                <span className="subconfig-name">Disable Price Modal override on Quote Header</span>

                <div id="select-56">

                  <div className={`input-select-wrapper ${dropdownActive56 ? 'active' : ''}`} ref={dropdownRef56}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-56" className="input-select" onClick={toggleDropdown56}
                        onChange={filterOptions56}
                        value={inputValue56} />

                      <span
                        className={`toggle-icon ${dropdownActive56 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown56}
                      ></span>
                    </div>

                    <ul id="input-select-options-56" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption56(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.35 */}

              <div id="subsection1">

                <span className="subconfig-number">4.35</span>

                <span className="subconfig-name">Disable Org override on Quote Header</span>

                <div id="select-57">

                  <div className={`input-select-wrapper ${dropdownActive57 ? 'active' : ''}`} ref={dropdownRef57}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-57" className="input-select" onClick={toggleDropdown57}
                        onChange={filterOptions57}
                        value={inputValue57} />

                      <span
                        className={`toggle-icon ${dropdownActive57 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown57}
                      ></span>
                    </div>

                    <ul id="input-select-options-57" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption57(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.36 */}

              <div id="subsection1">

                <span className="subconfig-number">4.36</span>

                <span className="subconfig-name">Disable Currency override on Quote Header</span>

                <div id="select-58">

                  <div className={`input-select-wrapper ${dropdownActive58 ? 'active' : ''}`} ref={dropdownRef58}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-58" className="input-select" onClick={toggleDropdown58}
                        onChange={filterOptions58}
                        value={inputValue58} />

                      <span
                        className={`toggle-icon ${dropdownActive58 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown58}
                      ></span>
                    </div>

                    <ul id="input-select-options-58" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption58(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 4.37 */}

              <div id="subsection1">

                <span className="subconfig-number">4.37</span>

                <span className="subconfig-name">Use advanced document export method?</span>

                <div id="select-59">

                  <div className={`input-select-wrapper ${dropdownActive59 ? 'active' : ''}`} ref={dropdownRef59}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-59" className="input-select" onClick={toggleDropdown59}
                        onChange={filterOptions59}
                        value={inputValue59} />

                      <span
                        className={`toggle-icon ${dropdownActive59 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown59}
                      ></span>
                    </div>

                    <ul id="input-select-options-59" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption59(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.38 */}

              <div id="subsection1">

                <span className="subconfig-number">4.38</span>

                <span className="subconfig-name">Enable doc types selector in right side panel?</span>

                <div id="select-60">

                  <div className={`input-select-wrapper ${dropdownActive60 ? 'active' : ''}`} ref={dropdownRef60}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-60" className="input-select" onClick={toggleDropdown60}
                        onChange={filterOptions60}
                        value={inputValue60} />

                      <span
                        className={`toggle-icon ${dropdownActive60 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown60}
                      ></span>
                    </div>

                    <ul id="input-select-options-60" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption60(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 4.39 */}


              <div id="subsection1">

                <span className="subconfig-number">4.39</span>

                <span className="subconfig-name">Enable Reporting Currency</span>

                <div id="select-61">

                  <div className={`input-select-wrapper ${dropdownActive61 ? 'active' : ''}`} ref={dropdownRef61}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-61" className="input-select" onClick={toggleDropdown61}
                        onChange={filterOptions61}
                        value={inputValue61} />

                      <span
                        className={`toggle-icon ${dropdownActive61 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown61}
                      ></span>
                    </div>

                    <ul id="input-select-options-61" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption61(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.40 */}

              <div id="subsection1">

                <span className="subconfig-number">4.40</span>

                <span className="subconfig-name">Enable Word 2007/2008 Backword Compatibility?</span>

                <div id="select-62">

                  <div className={`input-select-wrapper ${dropdownActive62 ? 'active' : ''}`} ref={dropdownRef62}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-62" className="input-select" onClick={toggleDropdown62}
                        onChange={filterOptions62}
                        value={inputValue62} />

                      <span
                        className={`toggle-icon ${dropdownActive62 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown62}
                      ></span>
                    </div>

                    <ul id="input-select-options-62" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption62(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.41 */}

              <div id="subsection1">

                <span className="subconfig-number">4.41</span>

                <span className="subconfig-name">Enable item and Role Mass Edit</span>

                <div id="select-63">

                  <div className={`input-select-wrapper ${dropdownActive63 ? 'active' : ''}`} ref={dropdownRef63}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-63" className="input-select" onClick={toggleDropdown63}
                        onChange={filterOptions63}
                        value={inputValue63} />

                      <span
                        className={`toggle-icon ${dropdownActive63 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown63}
                      ></span>
                    </div>

                    <ul id="input-select-options-63" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption63(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.42 */}

              <div id="subsection1">

                <span className="subconfig-number">4.42</span>

                <span className="subconfig-name">Use advanced Doctypes?</span>

                <div id="select-64">

                  <div className={`input-select-wrapper ${dropdownActive64 ? 'active' : ''}`} ref={dropdownRef64}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-64" className="input-select" onClick={toggleDropdown64}
                        onChange={filterOptions64}
                        value={inputValue64} />

                      <span
                        className={`toggle-icon ${dropdownActive64 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown64}
                      ></span>
                    </div>

                    <ul id="input-select-options-64" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption64(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.43 */}


              <div id="subsection1">

                <span className="subconfig-number">4.43</span>

                <span className="subconfig-name">Enable Override to Ratecards via PCR?</span>

                <div id="select-65">

                  <div className={`input-select-wrapper ${dropdownActive65 ? 'active' : ''}`} ref={dropdownRef65}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-65" className="input-select" onClick={toggleDropdown65}
                        onChange={filterOptions65}
                        value={inputValue65} />

                      <span
                        className={`toggle-icon ${dropdownActive65 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown65}
                      ></span>
                    </div>

                    <ul id="input-select-options-65" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption65(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 4.44 */}


              <div id="subsection1">

                <span className="subconfig-number">4.44</span>

                <span className="subconfig-name">Enable Upload Services from Excel?</span>

                <div id="select-66">

                  <div className={`input-select-wrapper ${dropdownActive66 ? 'active' : ''}`} ref={dropdownRef66}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-66" className="input-select" onClick={toggleDropdown66}
                        onChange={filterOptions66}
                        value={inputValue66} />

                      <span
                        className={`toggle-icon ${dropdownActive66 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown66}
                      ></span>
                    </div>

                    <ul id="input-select-options-66" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption66(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>



            </div>

          </div>
          {/*section 5  */}
          <div>
            <div class="con-sec5" onClick={toggleSection5}>
              <i class="fa fa-angle-down"></i>
              <span class="config-number">5</span>
              <span class="config-name">People</span>
            </div>

            <div id="section5" style={{ display: 'none' }}>

              {/* section 5.1 */}
              <div id="subsection1">

                <span className="subconfig-number">5.1</span>

                <span className="subconfig-name">Allow over-allocation on assignments?</span>

                <div id="select-67">

                  <div className={`input-select-wrapper ${dropdownActive67 ? 'active' : ''}`} ref={dropdownRef67}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-67" className="input-select" onClick={toggleDropdown67}
                        onChange={filterOptions67}
                        value={inputValue67} />

                      <span
                        className={`toggle-icon ${dropdownActive67 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown67}
                      ></span>
                    </div>

                    <ul id="input-select-options-67" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption67(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


            </div>


          </div>

          {/* section 6 */}

          <div>
            <div class="con-sec6" onClick={toggleSection6}>
              <i class="fa fa-angle-down"></i>
              <span class="config-number">6</span>
              <span class="config-name">Approvals</span>
            </div>

            <div id="section6" style={{ display: 'none' }}>

              {/* section 6.1 */}
              <div id="subsection1">

                <span className="subconfig-number">6.1</span>

                <span className="subconfig-name">Can Opportunity Owner approve their own quote if there are no approvers defined?</span>

                <div id="select-68">

                  <div className={`input-select-wrapper ${dropdownActive68 ? 'active' : ''}`} ref={dropdownRef68}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-68" className="input-select" onClick={toggleDropdown68}
                        onChange={filterOptions68}
                        value={inputValue68} />

                      <span
                        className={`toggle-icon ${dropdownActive68 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown68}
                      ></span>
                    </div>

                    <ul id="input-select-options-68" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption68(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 6.2 */}
              <div id="subsection1">

                <span className="subconfig-number">6.2</span>

                <span className="subconfig-name">Allow multi-level approvers?</span>

                <div id="select-69">

                  <div className={`input-select-wrapper ${dropdownActive69 ? 'active' : ''}`} ref={dropdownRef69}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-69" className="input-select" onClick={toggleDropdown69}
                        onChange={filterOptions69}
                        value={inputValue69} />

                      <span
                        className={`toggle-icon ${dropdownActive69 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown69}
                      ></span>
                    </div>

                    <ul id="input-select-options-69" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption69(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 6.3 */}

              <div id="subsection1">

                <span className="subconfig-number">6.3</span>

                <span className="subconfig-name">Only Bid Team members can submit quotes for approval?</span>

                <div id="select-70">

                  <div className={`input-select-wrapper ${dropdownActive70 ? 'active' : ''}`} ref={dropdownRef70}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-70" className="input-select" onClick={toggleDropdown70}
                        onChange={filterOptions70}
                        value={inputValue70} />

                      <span
                        className={`toggle-icon ${dropdownActive70 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown70}
                      ></span>
                    </div>

                    <ul id="input-select-options-70" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption70(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 6.4 */}


              <div id="subsection1">

                <span className="subconfig-number">6.4</span>

                <span className="subconfig-name">Disable document download untill quote is approved?</span>

                <div id="select-71">

                  <div className={`input-select-wrapper ${dropdownActive71 ? 'active' : ''}`} ref={dropdownRef71}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-71" className="input-select" onClick={toggleDropdown71}
                        onChange={filterOptions71}
                        value={inputValue71} />

                      <span
                        className={`toggle-icon ${dropdownActive71 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown71}
                      ></span>
                    </div>

                    <ul id="input-select-options-71" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption71(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 6.5 */}

              <div id="subsection1">

                <span className="subconfig-number">6.5</span>

                <span className="subconfig-name">Lock quote after approval?</span>

                <div id="select-72">

                  <div className={`input-select-wrapper ${dropdownActive72 ? 'active' : ''}`} ref={dropdownRef72}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-72" className="input-select" onClick={toggleDropdown72}
                        onChange={filterOptions72}
                        value={inputValue72} />

                      <span
                        className={`toggle-icon ${dropdownActive72 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown72}
                      ></span>
                    </div>

                    <ul id="input-select-options-72" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption72(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 6.6 */}

              <div id="subsection1">

                <span className="subconfig-number">6.6</span>

                <span className="subconfig-name">Anyone can approve?</span>

                <div id="select-73">

                  <div className={`input-select-wrapper ${dropdownActive73 ? 'active' : ''}`} ref={dropdownRef73}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-73" className="input-select" onClick={toggleDropdown73}
                        onChange={filterOptions73}
                        value={inputValue73} />

                      <span
                        className={`toggle-icon ${dropdownActive73 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown73}
                      ></span>
                    </div>

                    <ul id="input-select-options-73" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption73(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>






            </div>
          </div>

          {/* section 7 */}

          <div>
            <div class="con-sec7" onClick={toggleSection7}>
              <i class="fa fa-angle-down"></i>
              <span class="config-number">7</span>
              <span class="config-name">Security</span>
            </div>

            <div id="section7" style={{ display: 'none' }}>

              {/* section 9.1 */}
              <div id="subsection1">

                <span className="subconfig-number">7.1</span>

                <span className="subconfig-name">Restrict support requests to Administrators?</span>

                <div id="select-74">

                  <div className={`input-select-wrapper ${dropdownActive74 ? 'active' : ''}`} ref={dropdownRef74}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-74" className="input-select" onClick={toggleDropdown74}
                        onChange={filterOptions74}
                        value={inputValue74} />

                      <span
                        className={`toggle-icon ${dropdownActive74 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown74}
                      ></span>
                    </div>

                    <ul id="input-select-options-74" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption74(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 9.2 */}


              <div id="subsection1">

                <span className="subconfig-number">9.2</span>

                <span className="subconfig-name">Default</span>

                <div id="select-75">

                  <div className={`input-select-wrapper ${dropdownActive75 ? 'active' : ''}`} ref={dropdownRef75}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-75" className="input-select" onClick={toggleDropdown75}
                        onChange={filterOptions75}
                        value={inputValue75} />

                      <span
                        className={`toggle-icon ${dropdownActive75 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown75}
                      ></span>
                    </div>

                    <ul id="input-select-options-75" className="input-select-options">

                      {options15.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption75(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>



            </div>


          </div>



          {/* section 8 */}

          <div>
            <div class="con-sec8" onClick={toggleSection8}>
              <i class="fa fa-angle-down"></i>
              <span class="config-number">8</span>
              <span class="config-name">Forecasting</span>
            </div>

            <div id="section8" style={{ display: 'none' }}>

              {/* section 8.1 */}
              <div id="subsection1">

                <span className="subconfig-number">8.1</span>

                <span className="subconfig-name">Forecasting method for opportunities?</span>

                <div id="select-76">

                  <div className={`input-select-wrapper ${dropdownActive76 ? 'active' : ''}`} ref={dropdownRef76}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-76" className="input-select" onClick={toggleDropdown76}
                        onChange={filterOptions76}
                        value={inputValue76} />

                      <span
                        className={`toggle-icon ${dropdownActive76 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown76}
                      ></span>
                    </div>

                    <ul id="input-select-options-76" className="input-select-options">

                      {options16.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption76(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 8.2 */}


              <div id="subsection1">

                <span className="subconfig-number">8.2</span>

                <span className="subconfig-name">Forecasting method for projects?</span>

                <div id="select-77">

                  <div className={`input-select-wrapper ${dropdownActive77 ? 'active' : ''}`} ref={dropdownRef77}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-77" className="input-select" onClick={toggleDropdown77}
                        onChange={filterOptions77}
                        value={inputValue77} />

                      <span
                        className={`toggle-icon ${dropdownActive77 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown77}
                      ></span>
                    </div>

                    <ul id="input-select-options-77" className="input-select-options">

                      {options16.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption77(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 8.3 */}

              <div id="subsection1">

                <span className="subconfig-number">8.3</span>

                <span className="subconfig-name">Forecasting window in years</span>

                <div id="select-78">

                  <div className={`input-select-wrapper ${dropdownActive78 ? 'active' : ''}`} ref={dropdownRef78}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-78" className="input-select" onClick={toggleDropdown78}
                        onChange={filterOptions78}
                        value={inputValue78} />

                      <span
                        className={`toggle-icon ${dropdownActive78 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown78}
                      ></span>
                    </div>

                    <ul id="input-select-options-78" className="input-select-options">

                      {options17.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption78(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 8.4 */}


              <div id="subsection1">

                <span className="subconfig-number">8.4</span>

                <span className="subconfig-name">Number of past years to include in forecast</span>

                <div id="select-79">

                  <div className={`input-select-wrapper ${dropdownActive79 ? 'active' : ''}`} ref={dropdownRef79}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-79" className="input-select" onClick={toggleDropdown79}
                        onChange={filterOptions79}
                        value={inputValue79} />

                      <span
                        className={`toggle-icon ${dropdownActive79 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown79}
                      ></span>
                    </div>

                    <ul id="input-select-options-79" className="input-select-options">

                      {options17.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption79(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 8.5 */}


              <div id="subsection1">

                <span className="subconfig-number">8.5</span>

                <span className="subconfig-name">Enable fiscal view</span>

                <div id="select-80">

                  <div className={`input-select-wrapper ${dropdownActive80 ? 'active' : ''}`} ref={dropdownRef80}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-80" className="input-select" onClick={toggleDropdown80}
                        onChange={filterOptions80}
                        value={inputValue80} />

                      <span
                        className={`toggle-icon ${dropdownActive80 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown80}
                      ></span>
                    </div>

                    <ul id="input-select-options-80" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption80(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 8.6 */}


              <div id="subsection1">

                <span className="subconfig-number">8.6</span>

                <span className="subconfig-name">Fiscal year starting month</span>

                <div id="select-81">

                  <div className={`input-select-wrapper ${dropdownActive81 ? 'active' : ''}`} ref={dropdownRef81}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-81" className="input-select" onClick={toggleDropdown81}
                        onChange={filterOptions81}
                        value={inputValue81} />

                      <span
                        className={`toggle-icon ${dropdownActive81 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown81}
                      ></span>
                    </div>

                    <ul id="input-select-options-81" className="input-select-options">

                      {options18.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption81(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 8.7 */}


              <div id="subsection1">

                <span className="subconfig-number">8.7</span>

                <span className="subconfig-name">Forcast Currency</span>

                <div id="select-82">

                  <div className={`input-select-wrapper ${dropdownActive82 ? 'active' : ''}`} ref={dropdownRef82}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-82" className="input-select" onClick={toggleDropdown82}
                        onChange={filterOptions82}
                        value={inputValue82} />

                      <span
                        className={`toggle-icon ${dropdownActive82 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown82}
                      ></span>
                    </div>

                    <ul id="input-select-options-82" className="input-select-options">

                      {options19.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption82(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>






            </div>


          </div>

          {/* Section 9 */}

          <div>
            <div class="con-sec9" onClick={toggleSection9}>
              <i class="fa fa-angle-down"></i>
              <span class="config-number">9</span>
              <span class="config-name">Catalog</span>
            </div>

            <div id="section9" style={{ display: 'none' }}>

              {/* section 9.1 */}
              <div id="subsection1">

                <span className="subconfig-number">9.1</span>

                <span className="subconfig-name">Enable key word search for templates</span>

                <div id="select-83">

                  <div className={`input-select-wrapper ${dropdownActive83 ? 'active' : ''}`} ref={dropdownRef83}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-83" className="input-select" onClick={toggleDropdown83}
                        onChange={filterOptions83}
                        value={inputValue83} />

                      <span
                        className={`toggle-icon ${dropdownActive83 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown83}
                      ></span>
                    </div>

                    <ul id="input-select-options-83" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption83(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 9.2 */}

              <div id="subsection1">
                <span className="subconfig-number">9.2</span>
                <span className="subconfig-name">Level 1 hierarchy name</span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>


              {/* section 9.3 */}

              <div id="subsection1">
                <span className="subconfig-number">9.3</span>
                <span className="subconfig-name">Level 2 hierarchy name</span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 9.4 */}

              <div id="subsection1">
                <span className="subconfig-number">9.4</span>
                <span className="subconfig-name">Level 3 hierarchy name</span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/*section 9.5  */}

              <div id="subsection1">
                <span className="subconfig-number">9.5</span>
                <span className="subconfig-name">Level 4 hierarchy name</span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 9.6 */}

              <div id="subsection1">
                <span className="subconfig-number">9.6</span>
                <span className="subconfig-name">Asset name</span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 9.7 */}


              <div id="subsection1">
                <span className="subconfig-number">9.7</span>
                <span className="subconfig-name">Category 1 name</span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 9.8 */}

              <div id="subsection1">
                <span className="subconfig-number">9.8</span>
                <span className="subconfig-name">Category 2 name</span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 9.9 */}

              <div id="subsection1">
                <span className="subconfig-number">9.9</span>
                <span className="subconfig-name">Category 3 name</span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 9.10 */}

              <div id="subsection1">
                <span className="subconfig-number">9.10</span>
                <span className="subconfig-name">Category 4 name</span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 9.11 */}

              <div id="subsection1">
                <span className="subconfig-number">9.11</span>
                <span className="subconfig-name">Category 5 name</span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 9.12 */}

              <div id="subsection1">
                <span className="subconfig-number">9.12</span>
                <span className="subconfig-name">Category 6 name</span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 9.13 */}

              <div id="subsection1">
                <span className="subconfig-number">9.13</span>
                <span className="subconfig-name">Visual Ordering title</span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 9.14 */}

              <div id="subsection1">
                <span className="subconfig-number">9.14</span>
                <span className="subconfig-name">Custom item Type Label</span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 9.15 */}
              <div id="subsection1">

                <span className="subconfig-number">9.15</span>

                <span className="subconfig-name">show option to copy Survey with New Question IDs</span>

                <div id="select-84">

                  <div className={`input-select-wrapper ${dropdownActive84 ? 'active' : ''}`} ref={dropdownRef84}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-84" className="input-select" onClick={toggleDropdown84}
                        onChange={filterOptions84}
                        value={inputValue84} />

                      <span
                        className={`toggle-icon ${dropdownActive84 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown84}
                      ></span>
                    </div>

                    <ul id="input-select-options-84" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption84(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>



            </div>


          </div>


          {/* section 10 */}

          <div>
            <div class="con-sec10" onClick={toggleSection10}>
              <i class="fa fa-angle-down"></i>
              <span class="config-number">10</span>
              <span class="config-name">User Access</span>
            </div>

            <div id="section10" style={{ display: 'none' }}>

              {/* section 10.1 */}
              <div id="subsection1">

                <span className="subconfig-number">10.1</span>

                <span className="subconfig-name">Access method?</span>

                <div id="select-85">

                  <div className={`input-select-wrapper ${dropdownActive85 ? 'active' : ''}`} ref={dropdownRef85}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-85" className="input-select" onClick={toggleDropdown85}
                        onChange={filterOptions85}
                        value={inputValue85} />

                      <span
                        className={`toggle-icon ${dropdownActive85 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown85}
                      ></span>
                    </div>

                    <ul id="input-select-options-85" className="input-select-options">

                      {options20.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption85(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 10.2 */}


              <div id="subsection1">

                <span className="subconfig-number">10.2</span>

                <span className="subconfig-name">Identity Provider Type?</span>

                <div id="select-86">

                  <div className={`input-select-wrapper ${dropdownActive86 ? 'active' : ''}`} ref={dropdownRef86}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-86" className="input-select" onClick={toggleDropdown86}
                        onChange={filterOptions86}
                        value={inputValue86} />

                      <span
                        className={`toggle-icon ${dropdownActive86 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown86}
                      ></span>
                    </div>

                    <ul id="input-select-options-86" className="input-select-options">

                      {options21.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption86(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 10.3 */}

              <div id="subsection1">

                <span className="subconfig-number">10.3</span>

                <span className="subconfig-name">Identity Provider Metadata Source</span>

                <div id="select-87">

                  <div className={`input-select-wrapper ${dropdownActive87 ? 'active' : ''}`} ref={dropdownRef87}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-87" className="input-select" onClick={toggleDropdown87}
                        onChange={filterOptions87}
                        value={inputValue87} />

                      <span
                        className={`toggle-icon ${dropdownActive87 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown87}
                      ></span>
                    </div>

                    <ul id="input-select-options-87" className="input-select-options">

                      {options22.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption87(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 10.4 */}


              <div id="subsection1">
                <span className="subconfig-number">10.4</span>
                <span className="subconfig-name"></span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>


              {/* section 10.5 */}


              <div id="subsection1">
                <span className="subconfig-number">10.5</span>
                <span className="subconfig-name">Identity Provider Metadata Url?</span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 10.6 */}


              <div id="subsection1">

                <span className="subconfig-number">10.6</span>

                <span className="subconfig-name">Logout method?</span>

                <div id="select-88">

                  <div className={`input-select-wrapper ${dropdownActive88 ? 'active' : ''}`} ref={dropdownRef88}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-88" className="input-select" onClick={toggleDropdown88}
                        onChange={filterOptions88}
                        value={inputValue88} />

                      <span
                        className={`toggle-icon ${dropdownActive88 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown88}
                      ></span>
                    </div>

                    <ul id="input-select-options-88" className="input-select-options">

                      {options23.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption88(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 10.7 */}

              <div id="subsection1">
                <span className="subconfig-number">10.7</span>
                <span className="subconfig-name"></span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 10.8 */}

              <div id="subsection1">
                <span className="subconfig-number">10.8</span>
                <span className="subconfig-name">SAML Issuer?</span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 10.9 */}

              <div id="subsection1">
                <span className="subconfig-number">10.9</span>
                <span className="subconfig-name">Maximum active session timeout in minutes</span>
                <div id="select-1">
                  <div className="input-select-wrapper">
                    <input type="text" id="input-select" className="input-select" />
                    <ul className="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 10.10 */}


              <div id="subsection1">
                <span className="subconfig-number">10.10</span>
                <span className="subconfig-name">Default role for new users</span>
                <div id="select-89">
                  <div className={`input-select-wrapper ${dropdownActive89 ? 'active' : ''}`} ref={dropdownRef89}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-89" className="input-select" onClick={toggleDropdown89}
                        onChange={filterOptions89}
                        value={inputValue89} />
                      <span
                        className={`toggle-icon ${dropdownActive89 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown89}
                      ></span>
                    </div>
                    <ul id="input-select-options-89" className="input-select-options">

                      {options24.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption89(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 10.11 */}

              <div id="subsection1">

                <span className="subconfig-number">10.11</span>

                <span className="subconfig-name">Allow only SSO login</span>

                <div id="select-90">

                  <div className={`input-select-wrapper ${dropdownActive90 ? 'active' : ''}`} ref={dropdownRef90}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-90" className="input-select" onClick={toggleDropdown90}
                        onChange={filterOptions90}
                        value={inputValue90} />

                      <span
                        className={`toggle-icon ${dropdownActive90 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown90}
                      ></span>
                    </div>

                    <ul id="input-select-options-90" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption90(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 10.12 */}

              <div id="subsection1">

                <span className="subconfig-number">10.12</span>

                <span className="subconfig-name">Show reviewers</span>

                <div id="select-91">

                  <div className={`input-select-wrapper ${dropdownActive91 ? 'active' : ''}`} ref={dropdownRef91}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-91" className="input-select" onClick={toggleDropdown91}
                        onChange={filterOptions91}
                        value={inputValue91} />

                      <span
                        className={`toggle-icon ${dropdownActive91 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown91}
                      ></span>
                    </div>

                    <ul id="input-select-options-91" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption91(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 10.13 */}

              <div id="subsection1">
                <span class="subconfig-number">10.13</span>
                <span class="subconfig-name">Maximum inactive session timeout in minutes</span>
                <div id="select-1">
                  <div class="input-select-wrapper">
                    <input type="text" id="input-select" class="input-select" />
                    <ul class="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 10.14 */}

              <div id="subsection1">

                <span className="subconfig-number">10.14</span>

                <span className="subconfig-name">Show confidential access in preferences</span>

                <div id="select-92">

                  <div className={`input-select-wrapper ${dropdownActive92 ? 'active' : ''}`} ref={dropdownRef92}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-92" className="input-select" onClick={toggleDropdown92}
                        onChange={filterOptions92}
                        value={inputValue92} />

                      <span
                        className={`toggle-icon ${dropdownActive92 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown92}
                      ></span>
                    </div>

                    <ul id="input-select-options-92" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption92(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 10.15 */}

              <div id="subsection1">

                <span className="subconfig-number">10.15</span>

                <span className="subconfig-name">User Identifier</span>

                <div id="select-93">

                  <div className={`input-select-wrapper ${dropdownActive93 ? 'active' : ''}`} ref={dropdownRef93}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-93" className="input-select" onClick={toggleDropdown93}
                        onChange={filterOptions93}
                        value={inputValue93} />

                      <span
                        className={`toggle-icon ${dropdownActive93 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown93}
                      ></span>
                    </div>

                    <ul id="input-select-options-93" className="input-select-options">

                      {options25.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption93(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 10.16 */}

              <div id="subsection1">
                <span class="subconfig-number">10.16</span>
                <span class="subconfig-name">SCIM 2.0 token</span>
                <div id="select-1"  >
                  <div class="input-select-wrapper" >
                    <input type="password" id="password-input" class="input-select" />
                    <button id="toggle-password" class="toggle-password" aria-label="Toggle password visibility" >
                      <i id="psseye" class="far fa-eye"></i>
                    </button>

                    <ul class="input-select-options">

                    </ul>
                  </div>
                </div>
              </div>

              {/* section 10.17 */}

              <div id="subsection1">
                <span class="subconfig-number">10.17</span>
                <span class="subconfig-name"></span>
                <div id="select-1">
                  <div class="input-select-wrapper">
                    <input type="text" id="input-select" class="input-select" />
                    <ul class="input-select-options">
                    </ul>
                  </div>
                </div>
              </div>

              {/* section 10.18 */}

              <div id="subsection1">

                <span className="subconfig-number">10.18</span>

                <span className="subconfig-name">Login Attempts Before Lockout</span>

                <div id="select-94">

                  <div className={`input-select-wrapper ${dropdownActive94 ? 'active' : ''}`} ref={dropdownRef94}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-94" className="input-select" onClick={toggleDropdown94}
                        onChange={filterOptions94}
                        value={inputValue94} />

                      <span
                        className={`toggle-icon ${dropdownActive94 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown94}
                      ></span>
                    </div>

                    <ul id="input-select-options-94" className="input-select-options">

                      {options26.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption94(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>


              {/* section 10.19 */}

              <div id="subsection1">

                <span className="subconfig-number">10.19</span>

                <span className="subconfig-name">Lockout Duration</span>

                <div id="select-95">

                  <div className={`input-select-wrapper ${dropdownActive95 ? 'active' : ''}`} ref={dropdownRef95}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-95" className="input-select" onClick={toggleDropdown95}
                        onChange={filterOptions95}
                        value={inputValue95} />

                      <span
                        className={`toggle-icon ${dropdownActive95 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown95}
                      ></span>
                    </div>

                    <ul id="input-select-options-95" className="input-select-options">

                      {options27.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption95(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>

              {/* section 10.20 */}

              <div id="subsection1">

                <span className="subconfig-number">10.20</span>

                <span className="subconfig-name">Disable inactive user accounts over 90 days</span>

                <div id="select-96">

                  <div className={`input-select-wrapper ${dropdownActive96 ? 'active' : ''}`} ref={dropdownRef96}>
                    <div className="input-select-container">
                      <input type="text" id="input-select-96" className="input-select" onClick={toggleDropdown96}
                        onChange={filterOptions96}
                        value={inputValue96} />

                      <span
                        className={`toggle-icon ${dropdownActive96 ? 'angle-up' : 'angle-down'}`}
                        onClick={toggleDropdown96}
                      ></span>
                    </div>

                    <ul id="input-select-options-96" className="input-select-options">

                      {options.map((option) => (
                        <li
                          key={option.value}
                          data-value={option.value}
                          onClick={() => selectOption96(option.value)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======================= */}
        </div>
      </div>
      
      <div id="save-configuration" style={{marginLeft:'200px'}}>
         <button id="save-configurationbtn" onClick={handleUpdateConfig}>UPDATE</button>
        </div>


    </div>
  </div>
  );
};

export default Config;
