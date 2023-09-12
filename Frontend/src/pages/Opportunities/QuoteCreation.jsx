import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import '../Opportunities/QuoteCreation.css';
import HelpRequest from '../../components/HelpRequest';
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link, withRouter, useLocation } from "react-router-dom";


const QuoteCreation = () => {

  const { user } = useAuthContext();
  console.log(user);

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    showOptions();
  };
  
  const isCreateButtonDisabled = selectedOption === '';


  //API to get data of servey from DB
  const [surveyNames, setSurveyNames] = useState([]);
  useEffect(() => {

    const getServeyNames = async () => {
      try {
        const response = await fetch('/api/survey/getSurveyGuidedSelling', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
          },
        });
        if (response.ok) {
          const surveyNames = await response.json();
          console.log('Surveys: ' + surveyNames);
          console.log('surveyNames.data: ' + surveyNames.data);
          setSurveyNames(surveyNames.data);
        } else {
          console.log('Error: ', response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (user != "" && user != null) {
      getServeyNames();
    }
  }, [user]);

  console.log(surveyNames);




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
        </ul>
        <hr className="hr" />
      </div>
      <HelpRequest />
      <div className="flex-containerquote">
        <div className="row-newquote">
          <div className="left-newquote">
            <div className="ugs">
              <a href="NewQuote.html" style={{ color: 'white', textDecoration: 'none' }}>
              </a><header><a href="NewQuote.html" style={{ color: 'white', textDecoration: 'none' }}>
                <i className="fa-solid fa-less-than" style={{ paddingRight: '30px', paddingLeft: '-7px' }} /></a>USE GUIDED SELLLING</header>
            </div>
            <div className="template">
              {/* <form action="./guidedselling"> */}
                <select name="template-type" id="temp" required onClick={showOptions} onChange={handleSelectChange}>
                  <option value="" hidden id="dable">
                    Select Guided Selling Template
                  </option>
                  {surveyNames.length > 0 && 
                    surveyNames.map((survey, index) => (
                      <option key={index} value={survey.survey_key}>
                        {survey.title}
                      </option>
                    ))}
                </select>
                <label id="l7" htmlFor="temp">GUIDED SELLING TEMPLATE</label>
              

<button  id="create" disabled={isCreateButtonDisabled} ><Link to="/guidedselling" state={selectedOption} id='create_link' >CREATE</Link></button>
              {/* </form> */}
            </div>
          </div>
          {/* End of left Section */}
        </div>
      </div>
    </div>
  );
};
export function showOptions() {
  
  var selectElement = document.getElementById("temp");
  if(selectElement.options[1]){
  selectElement.options[1].style.display ="block"; // Display the first option
 
  }
  if(selectElement.options[2]){
    
    selectElement.options[2].style.display = "block"; // Display the second option
    }
}
export default QuoteCreation;


//console.log(selectedOption) => the selected survey is being saved in the mentioned useState.