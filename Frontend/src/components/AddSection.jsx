import React from 'react'
import '../components/AddSection.css'
import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from 'react';



const AddSection = (props) => {
  const { user } = useAuthContext();
  const survey_data = props.survey_data;
  const surveySectionsData = props.sections_data;
  const surveyQuestionsData = props.questions_data;

  useEffect(() => {
    
  }, [user]);

  if (document.querySelector('#sectionsContainer')) {
    document.querySelector('#sectionsContainer').innerHTML = "";
  }
  if (user) {
    // getSurveySections();
    var data = surveySectionsData;
    if(data){

  
    data.forEach((item, index)=>{
      addSection();
    })

    data.forEach((item, index)=>{
      console.log(index+1)
        var section_container = document.querySelector('.newoptional'+(index+1));
        if(section_container)
        {
            var section_key = section_container.querySelector('input[name="section_key"]');
            section_key.value = item.survey_section_key;
            var section_num = section_container.querySelector('input[name="section_num"]');
            section_num.value = item.survey_section_number;
            var section_title = section_container.querySelector('input[name="section_title"]');
            section_title.value = item.survey_section_title;
          
        }
    })


    // questions
    var sectionData = surveySectionsData;

        var questions_data = surveyQuestionsData;
        console.log(sectionData)
        if(sectionData.length > 0)
        {
            sectionData.forEach((sections, i) => {
              
              questions_data.forEach((questions,j) => {
                  if(sections.survey_section_key == questions.survey_section_key)
                  {
                      document.querySelector('.add_question'+(i+1)).click();
                  }
              })
            })

            sectionData.forEach((sections, i) => {
              var section_container = document.querySelector('.newoptional'+(i+1));
              var ques_num = 0;
              questions_data.forEach((questions,j) => {
                  var question_container = document.querySelector('.questionscontainer_'+(i+1)+'_'+(ques_num+1));
                  // console.log(questions)

                  if(sections.survey_section_key == questions.survey_section_key)
                  {
                       console.log((i+1)+", "+(ques_num+1));

                      if(question_container)
                      {
                          question_container.querySelector('input[name="question_key"]').value = questions.survey_questions_key;
                          question_container.querySelector('input[name="question_name"]').value = questions.survey_questions_name;
                          ques_num = ques_num+1;
                      }
                  }
              })
            })
        }
      }
  }

  // // getSurveySections api function
  // const getSurveySections = async () => {
  //   try {
  //     const response = await fetch('/api/survey/getSurveySections', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${user.token}`,
  //       },
  //       body: JSON.stringify({survey_key : survey_data.survey_key})
  //     });
  //     if (response.ok) {
  //       const survey = await response.json();
  //       if (survey.status == "Success") {

  //         setSurveySectionsData(survey.data);
  //         getSurveyQuestions(survey.data);

         

  //       }
  //     }
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // }

  // // getSurveyQuestions api function
  // const getSurveyQuestions = async (sectionData) => {
  //   try {
  //     const response = await fetch('/api/survey/getSurveyQuestions', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${user.token}`,
  //       },
  //       body: JSON.stringify({survey_key : survey_data.survey_key})
  //     });
  //     if (response.ok) {
  //       const survey = await response.json();
  //       if (survey.status == "Success") {
  //         setSurveyQuestionsData(survey.data);
          
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

        // }
  //     }
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // }

  const sectionSubmit = async (event)=>
  {
      var parentEle = event.target.parentNode.parentNode;
      var section_key = parentEle.querySelector('input[name="section_key"]').value;
      var section_num = parentEle.querySelector('input[name="section_num"]').value;
      
      var survey_key = survey_data.survey_key;

      var field_name = event.target.getAttribute('name');
      var field_value = event.target.value;
      if (field_name == "section_hide") {
        if (event.target.checked) {
          field_value = 1;
          // event.target.checked = true;
          // surveySetup.wide = 1;
        } else {
          field_value = 0;
          // event.target.checked = false;
  
          // surveySetup.wide = 0;
        }
      }
      var section_data = {section_key, section_num, survey_key, field_name, field_value}
      try {
        const response = await fetch('/api/survey/addSurveySections', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
          },
          body: JSON.stringify(section_data)
        });
        if (response.ok) {
          const survey = await response.json();
          if (survey.status == "Success") {
            // alert("SUccess");
            parentEle.querySelector('input[name="section_key"]').value = survey.section_key;
            // setup_key.value = survey.survey_key;
            // getSurvey();
            // setSurveySetup(survey.data);
  
          }
        }
      } catch (error) {
        alert(error);
      }
  
  }
  
  const questionSubmit = async (event)=>
  {
      var sectionParentEle = event.target.parentNode.parentNode.parentNode.parentNode;
      console.log(sectionParentEle)
      var questionParentEle = event.target.parentNode.parentNode;
      console.log(questionParentEle)

      var section_key = sectionParentEle.querySelector('input[name="section_key"]').value;
      var question_key = questionParentEle.querySelector('input[name="question_key"]').value;
      var question_num = questionParentEle.querySelector('input[name="question_num"]').value;
      // var question_name = questionParentEle.querySelector('input[name="question_name"]').value;
      // var question_toggle = questionParentEle.querySelector('input[name="question_toggle"]').value;
      // var question_required = questionParentEle.querySelector('input[name="question_required"]');
      
      var survey_key = survey_data.survey_key;

      var field_name = event.target.getAttribute('name');
      var field_value = event.target.value;
      if (field_name == "question_required") {
        if (event.target.checked) {
          field_value = 1;
          // event.target.checked = true;
          // surveySetup.wide = 1;
        } else {
          field_value = 0;
          // event.target.checked = false;
  
          // surveySetup.wide = 0;
        }
      }
      var section_data = {section_key, survey_key, question_key, question_num, field_name, field_value}
      try {
        const response = await fetch('/api/survey/addSurveyQuestions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
          },
          body: JSON.stringify(section_data)
        });
        if (response.ok) {
          const survey = await response.json();
          if (survey.status == "Success") {
            // alert("SUccess");
            questionParentEle.querySelector('input[name="question_key"]').value = survey.question_key;
            // setup_key.value = survey.survey_key;
            // getSurvey();
            // setSurveySetup(survey.data);
  
          }
        }
      } catch (error) {
        alert(error);
      }
  
  }

  const rulesSubmit = async (event) => {
      var sectionParentEle = event.target.parentNode.parentNode.parentNode.parentNode;
      console.log(sectionParentEle)

      var rulesParentEle = event.target.parentNode.parentNode;
      console.log(rulesParentEle)

      var section_key = sectionParentEle.querySelector('input[name="section_key"]').value;
      var rules_key = rulesParentEle.querySelector('input[name="rules_key"]').value;
      var rules_num = rulesParentEle.querySelector('input[name="rules_num"]').value;

      var survey_key = survey_data.survey_key;

      var field_name = event.target.getAttribute('name');
      var field_value = event.target.value;

      var section_data = {section_key, survey_key, rules_key, rules_num, field_name, field_value}
      try {
        const response = await fetch('/api/survey/addSurveyRules', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
          },
          body: JSON.stringify(section_data)
        });
        if (response.ok) {
        }
      }catch(error){

      }

  }
  
var sectionassetCounter = 1; // Initialize the section counter to 1
var rulesContainerDivCount = 0;
var ruleNumber = rulesContainerDivCount + 1;


function addSection() {


  // Create a new section element
  sectionassetCounter = document.querySelectorAll('.optionalsection').length+1;
  console.log(sectionassetCounter)

  var sectionGlobeAsset = document.createElement("div");
  sectionGlobeAsset.id = "sectionglobeasset";
  sectionGlobeAsset.className = "sectionglobeassetclass";


  // Create an icon element for the section
  var iconAngleUpasset = document.createElement("i");
  iconAngleUpasset.className = "fa fa-angle-up";
  iconAngleUpasset.id = "angleupiconasset";



  iconAngleUpasset.addEventListener("click", function () {
    if (buttonsContainer.style.display === "none") {
      addQuestionBtn.style.display = "block";
      addRuleBtnAsset.style.display = "block";
      buttonsContainer.style.display = "block";
      questionsContainerAsset.style.display = "block";
      rulesContainerAsset.style.display = "block";
      iconAngleUpasset.className = "fa fa-angle-down";



    } else {
      buttonsContainer.style.display = "none";
      addQuestionBtn.style.display = "none";
      addRuleBtnAsset.style.display = "none";
      questionsContainerAsset.style.display = "none";
      rulesContainerAsset.style.display = "none";
      iconAngleUpasset.className = "fa fa-angle-up";
    }

  });




  // Create a label element for the section
  var labelassetglobe = document.createElement("label");
  labelassetglobe.htmlFor = "assetsectioninput";
  labelassetglobe.id = "labelsectionasset";
  labelassetglobe.innerHTML = "" + sectionassetCounter;

  // Create an input element for the section

  // Create a label element for the section
  var inputhiddenassetglobe = document.createElement("input");
  inputhiddenassetglobe.type = "hidden";
  inputhiddenassetglobe.name = "section_num";
  inputhiddenassetglobe.value = "" + sectionassetCounter;

// Create an input element for the section

// Create a label element for the section
  var inputhiddenassetkey = document.createElement("input");
  inputhiddenassetkey.type = "hidden";
  inputhiddenassetkey.name = "section_key";
  inputhiddenassetkey.value = "";

  // Create an input element for the section
  var inputassetglobe = document.createElement("input");
  inputassetglobe.type = "text";
  inputassetglobe.id = "assetsectioninput";
  inputassetglobe.name = "section_title";
  inputassetglobe.className = "assetsectioninputclass";
  inputassetglobe.placeholder = "Enter Section Title"
  inputassetglobe.onblur = (event)=>{sectionSubmit(event)}

  // / Create a paragraph element for the error message
  var sectionErrorDiv = document.createElement("div");
  sectionErrorDiv.id = "sectionerror";


  const errorLabel = document.createElement('label');
  errorLabel.innerHTML = "Section is required";
  errorLabel.id = 'errorlabelid';
  errorLabel.style.display = 'none';



  inputassetglobe.addEventListener('input', function () {
    if (inputassetglobe.value === '') {
      errorLabel.style.display = 'block';
      errorLabel.style.color = 'red';
      sectionErrorDiv.style.border = '2px solid red';

    } else {
      errorLabel.style.display = 'none';
      sectionErrorDiv.style.border = 'none';
      // sectionErrorDiv.style.borderLeft = '3px solid #216c98';
      // sectionErrorDiv.style.border = '1px solid #ccc';

    }
  });
  sectionErrorDiv.appendChild(inputassetglobe);
  sectionErrorDiv.appendChild(errorLabel);


  // Create a move-up element for the section
  var moveupAssetBtn = document.createElement("input");
  moveupAssetBtn.type = "button";
  moveupAssetBtn.id = "moveupassetbtn";
  moveupAssetBtn.value = "MOVEUP";
  moveupAssetBtn.style.display = "none";




  // Create a move-down element for the section
  var movedownAssetBtn = document.createElement("input");
  movedownAssetBtn.type = "button";
  movedownAssetBtn.id = "movedownassetbtn";
  movedownAssetBtn.value = "MOVEDOWN";
  movedownAssetBtn.style.display = "none";


  // Create a checkbox element for the section
  var checkBoxAssetSectionDiv = document.createElement("div");
  checkBoxAssetSectionDiv.id = "checkboxassetsectiondiv";

  var checkBoxAssetSection = document.createElement("input");
  checkBoxAssetSection.type = "checkbox";
  checkBoxAssetSection.value = "1";
  checkBoxAssetSection.id = "checkboxassetsection";
  checkBoxAssetSection.name = "section_hide";
  checkBoxAssetSection.onchange = (event)=>{sectionSubmit(event)}

  var checkBoxAssetSectionLabel = document.createElement("label");
  checkBoxAssetSectionLabel.id = "checkboxassetsectionlabel";
  checkBoxAssetSectionLabel.innerHTML = "Hide";

  checkBoxAssetSectionDiv.appendChild(checkBoxAssetSection)
  checkBoxAssetSectionDiv.appendChild(checkBoxAssetSectionLabel)

  // Create a delete button element for the section
  var deleteAssetGlobe = document.createElement("i");
  deleteAssetGlobe.className = "fa-regular fa-trash-can";
  deleteAssetGlobe.id = "deleteassetglobe";
  deleteAssetGlobe.onclick = function () {

  };

  // Create a parent div for the buttons
  const buttonsContainer = document.createElement("div");
  buttonsContainer.id = "buttonscontainer"

  // Create a "Question" button element for the section
  var questionAssetBtn = document.createElement("input");
  questionAssetBtn.type = "button";
  questionAssetBtn.id = "questionassetbtn";
  questionAssetBtn.value = "Question";







  var rulesAssetBtn = document.createElement("input");
  rulesAssetBtn.type = "button";
  rulesAssetBtn.id = "rulesassetbtn";
  rulesAssetBtn.value = "Rules";




  // Create the "Add section" button element
  var addRuleBtnAsset = document.createElement("input");
  addRuleBtnAsset.type = "button";
  addRuleBtnAsset.id = "addrulebtn";
  addRuleBtnAsset.value = "+ Add Rule";

  addRuleBtnAsset.style.display = "none"; // Hide the button initially


  rulesAssetBtn.addEventListener("click", function () {
    addRuleBtnAsset.style.display = "block";
    questionsContainerAsset.style.display = "none";
    rulesContainerAsset.style.display = "block";
    addQuestionBtn.style.display = "none";
    rulesAssetBtn.style.backgroundColor = "#216c98";
    rulesAssetBtn.style.color = "white";
    questionAssetBtn.style.backgroundColor = "white";
    questionAssetBtn.style.color = "black";




  });

  // --------------------------------------------Rules start------------------------------------------------------------------

  // Create a new div to contain the input fields
  var rulesContainerAsset = document.createElement("div");
  rulesContainerAsset.id = "rulescontainerasset";
  rulesContainerAsset.dataset.sectionNumber = sectionassetCounter;

  // Count variable to keep track of rulesContainerDiv count

  var rulesContainerDivCount = 0;


  // Add event listener to the "Add Rule" button
  addRuleBtnAsset.addEventListener("click", function () {
    var sectionNumber = rulesContainerAsset.dataset.sectionNumber;
    var ruleNumber = rulesContainerDivCount + 1;

    // Create a new div to contain the rule and condition
    var ruleConditionContainerDiv = document.createElement("div");
    ruleConditionContainerDiv.classList.add("rule-condition-container");

    // Create a new div to contain the input fields
    var rulesContainerDiv = document.createElement("div");
    rulesContainerDiv.id = "rulescontainerdiv"; // Append ruleNumber to make it unique
    rulesContainerDiv.className = "rulescontainerdivclass";


    var inputFieldRules = document.createElement("input");
    inputFieldRules.type = "text";
    inputFieldRules.placeholder = "";
    inputFieldRules.id = "inputfieldrules"; // Append ruleNumber to make it unique
    inputFieldRules.onblur = (event)=>{rulesSubmit(event)}
    inputFieldRules.name = "inputfieldrules_"+sectionNumber+"_"+ruleNumber; // Append ruleNumber to make it unique


    var rulesKeyField = document.createElement("input");
    rulesKeyField.type = "hidden";
    rulesKeyField.name = "rules_key";
    rulesKeyField.value = "";

    var rulesNumField = document.createElement("input");
    rulesNumField.type = "hidden";
    rulesNumField.name = "rules_num";
    rulesNumField.value = sectionNumber + "." +ruleNumber;

    // Create an icon element for the section
    var iconAngleUpRule = document.createElement("i");
    iconAngleUpRule.className = "fa fa-angle-up";
    iconAngleUpRule.id = "iconangleuprule";

    var subSectionLabelRules = document.createElement("label");
    subSectionLabelRules.id = "subSectionlabelrules"
    subSectionLabelRules.innerHTML = "Rule" + sectionNumber + "." + ruleNumber;





    var moveupAssetRules = document.createElement("input");
    moveupAssetRules.type = "button";
    moveupAssetRules.id = "moveupassetrules";
    moveupAssetRules.value = "MOVEUP";

    // Add event listener to the "Move Up" button
    moveupAssetRules.addEventListener("click", function () {
      var currentRuleContainer = moveupAssetRules.parentNode.parentNode; // Get the current rule container
      var previousRuleContainer = currentRuleContainer.previousElementSibling; // Get the previous rule container

      if (previousRuleContainer) {
        // Swap the positions of the current rule container and the previous rule container
        rulesContainerAsset.insertBefore(currentRuleContainer, previousRuleContainer);
        updateMoveButtonsRules();


      }


      updateSectionAndQuestionNumbering();




    });


    // updateActionNumbering();

    var movedownAssetRules = document.createElement("input");
    movedownAssetRules.type = "button";
    movedownAssetRules.id = "movedownassetrules";
    movedownAssetRules.value = "MOVEDOWN";
    // Add event listener to the "Move Down" button
    movedownAssetRules.addEventListener("click", function () {
      var currentRuleContainer = movedownAssetRules.parentNode.parentNode; // Get the current rule container
      var nextRuleContainer = currentRuleContainer.nextElementSibling; // Get the next rule container

      if (nextRuleContainer) {
        // Swap the positions of the current rule container and the next rule container
        rulesContainerAsset.insertBefore(nextRuleContainer, currentRuleContainer);
        updateMoveButtonsRules();
      }

      updateSectionAndQuestionNumbering();

    });



    // Create a trash element for the rules
    var iconTrashRules = document.createElement("i");
    iconTrashRules.className = "fa-regular fa-trash-can";
    iconTrashRules.id = "icontrashrules";

    // Create a copy element for the section
    var iconCopyRules = document.createElement("i");
    iconCopyRules.className = "fa-regular fa-clone";
    iconCopyRules.id = "iconcopyrules";



    rulesContainerDiv.appendChild(iconAngleUpRule);
    rulesContainerDiv.appendChild(subSectionLabelRules);
    rulesContainerDiv.appendChild(rulesKeyField);
    rulesContainerDiv.appendChild(rulesNumField);

    rulesContainerDiv.appendChild(inputFieldRules);
    rulesContainerDiv.appendChild(moveupAssetRules);
    rulesContainerDiv.appendChild(movedownAssetRules);
    rulesContainerDiv.appendChild(iconCopyRules);
    rulesContainerDiv.appendChild(iconTrashRules);


    // -----------------------------condition start-------------------------------------------




    var conditionContainerDivAsset = document.createElement("div");
    conditionContainerDivAsset.id = "conditioncontainerdivasset"

    var conditionContainerDivGrid = document.createElement("div");
    conditionContainerDivGrid.id = "conditioncontainerdivassetgrid"

    var conditionContainerDiv = document.createElement("div");
    conditionContainerDiv.id = "conditioncontainerdiv"
    conditionContainerDiv.className = "conditioncontainerdivclass"

    var conditionInputAsset = document.createElement("input");
    conditionInputAsset.type = "text";
    conditionInputAsset.id = "conditioninputasset";
    conditionInputAsset.value = "(Always)"
    conditionContainerDivAsset.style.display = "none";

    // conditionInputAsset.readOnly = true;

    var conditionLabelAsset = document.createElement("label");
    conditionLabelAsset.id = "conditionlabelasset"


    var conditionAngleUp = document.createElement("i");
    conditionAngleUp.className = "fa fa-angle-up"
    conditionAngleUp.id = "conditionangleup"

    iconAngleUpRule.addEventListener("click", function () {
      if (conditionContainerDivAsset.style.display === "none") {
        conditionContainerDivAsset.style.display = "block";
        mainActionContainerDiv.style.display = "block";
        iconAngleUpRule.className = "fa fa-angle-down";
        conditionLabelAsset.innerHTML = "Condition " + sectionNumber + "." + ruleNumber;
        assetAddAction.style.display = "block";
      } else {
        conditionContainerDivAsset.style.display = "none";
        mainActionContainerDiv.style.display = "none";
        iconAngleUpRule.className = "fa fa-angle-up";
        assetAddAction.style.display = "block";

      }

      updateSectionAndQuestionNumbering();


    });
    // Append the conditionInput after the rulesContainerAsset
    conditionContainerDiv.appendChild(conditionAngleUp);
    conditionContainerDiv.appendChild(conditionLabelAsset);
    conditionContainerDiv.appendChild(conditionInputAsset);


    var actionCounter = 1; // Reset action counter for each new rule

    const assetAddAction = document.createElement("input");
    assetAddAction.type = "button";
    assetAddAction.value = "+Add Action";
    assetAddAction.id = "assetAddAction";
    assetAddAction.style.display = " none";



    //Creating action div
    var mainActionContainerDiv = document.createElement('div');
    mainActionContainerDiv.id = "mainactioncontainerdiv "
    mainActionContainerDiv.style.display = "none";


    // Add a click event listener to the assetAddAction button
    assetAddAction.addEventListener("click", function () {
      if (mainActionContainerDiv.style.display === "none") {
        mainActionContainerDiv.style.display = "block";


      }

      // action start
      var actionContainDropdownDiv = document.createElement('div');
      actionContainDropdownDiv.id = "actioncontaindropdowndiv"

      var actionContainerDiv = document.createElement('div');
      actionContainerDiv.id = 'actiondiv';
      actionContainerDiv.className = "actionglobeassetClass"


      // Create an icon element for the section
      var actionAngleUpasset = document.createElement("i");
      actionAngleUpasset.className = "fa fa-angle-up";
      actionAngleUpasset.id = "actionangleupasset";
      //Input for action

      const actionContainerLabel = document.createElement('label')
      actionContainerLabel.innerHTML = 'ACTION';
      actionContainerLabel.id = 'actioncontainerlabel';
      actionContainerLabel.textContent = `Action ${sectionNumber}.${ruleNumber}.${actionCounter}`;


      var actionInput = document.createElement('input');
      actionInput.type = "text"
      actionInput.id = "actioninput"
      actionInput.className = "actionInputClass"

      actionContainerDiv.appendChild(actionAngleUpasset);
      actionContainerDiv.appendChild(actionContainerLabel);

      actionContainerDiv.appendChild(actionInput);

      // action end



      // action drop down
      const actionDropDownMainDiv = document.createElement('div');
      actionDropDownMainDiv.id = "actiondropdownmaindiv";
      actionDropDownMainDiv.style.display = "none";

      const actionDropDownMainSubDiv = document.createElement('div');
      actionDropDownMainSubDiv.id = "actiondropdownmaindsubiv";






      actionAngleUpasset.addEventListener("click", function () {
        if (actionDropDownMainDiv.style.display === "none") {
          actionDropDownMainDiv.style.display = "block";
          actionAngleUpasset.className = "fa fa-angle-down"
        }
        else {
          actionDropDownMainDiv.style.display = "none";
          actionAngleUpasset.className = "fa fa-angle-up"


        }

      })


      const actionDropDownDiv = document.createElement('div');
      actionDropDownDiv.id = 'actiondropdowndiv';

      var actionDropDownInput = document.createElement("input");
      actionDropDownInput.type = "text";
      actionDropDownInput.id = "actiondropdowninput";


      var actionDropDownAngleUp = document.createElement("i");
      actionDropDownAngleUp.className = "fa-solid fa-caret-up";
      actionDropDownAngleUp.id = "actionAngleUp";


      const actionDropDownLabel = document.createElement('label')
      actionDropDownLabel.innerHTML = 'ACTION';
      actionDropDownLabel.id = 'actiondropdownlabel';

      var actionDropDownList = document.createElement("ul");
      actionDropDownList.id = "actiondropdownlist"
      actionDropDownList.style.display = "none";

      // Create list items

      var showSection = document.createElement("li");
      showSection.textContent = "SHOW SECTION";
      showSection.className = "actioninputlistitems"
      showSection.id = "showsection"



      var showQuestion = document.createElement("li");
      showQuestion.textContent = "SHOW QUESTION";
      showQuestion.className = "actioninputlistitems"
      showQuestion.id = "showquestion"


      var hideSection = document.createElement("li");
      hideSection.textContent = "HIDE SECTION";
      hideSection.className = "actioninputlistitems"
      hideSection.id = "hidesection"

      var hideQuestion = document.createElement("li");
      hideQuestion.textContent = "HIDE QUESTION";
      hideQuestion.className = "actioninputlistitems"
      hideQuestion.id = "hideQuestion"


      var templateMerge = document.createElement("li");
      templateMerge.textContent = "TEMPLATE MERGE";
      templateMerge.className = "actioninputlistitems"
      templateMerge.id = "templatemerge"

      var replaceTaggedContent = document.createElement("li");
      replaceTaggedContent.textContent = "CONTENT: REPLACE TAGGED CONTENT";
      replaceTaggedContent.className = "actioninputlistitems";
      replaceTaggedContent.id = "replacetaggedcontent";



      // Create a list item for "No result found"
      var noResultDropDown = document.createElement("li");
      noResultDropDown.textContent = "No result found";
      noResultDropDown.id = "noresultfound"
      noResultDropDown.style.display = "NONE";


      //  show section start

      const showSectionDiv = document.createElement('div');
      showSectionDiv.id = 'showsectiondiv';
      showSectionDiv.style.display = "none";

      const showSectionInput = document.createElement('input');
      showSectionInput.id = 'showsectioninput';

      const showSectionLabel = document.createElement('label');
      showSectionLabel.id = 'showquestionlabel';
      showSectionLabel.textContent = "Section";

      var showSectionAngleUp = document.createElement("i");
      showSectionAngleUp.className = "fa-solid fa-caret-up";
      showSectionAngleUp.id = "showAngleUp";


      // Create a list
      var showSectionList = document.createElement("ul");
      showSectionList.id = "showSectionlist"



      // Create list items
      var ssitem1 = document.createElement("li");
      ssitem1.textContent = "Accounts";
      ssitem1.id = "ssitem1"
      ssitem1.className = "ssitems"

      var ssitem2 = document.createElement("li");
      ssitem2.textContent = "Opportunity";
      ssitem2.id = "ssitem2"
      ssitem2.className = "ssitems"


      var ssitem3 = document.createElement("li");
      ssitem3.textContent = "Quote";
      ssitem3.id = "ssitem3"
      ssitem3.className = "ssitems"

      // Create a list item for "No result found"
      var noResultShowSection = document.createElement("li");
      noResultShowSection.textContent = "No result found";
      noResultShowSection.id = "noresultfound"
      noResultShowSection.style.display = "none";





      var selectedInputValueShowSection = "";


      showSectionInput.addEventListener("click", function () {
        if (showSectionList.style.display === "none") {
          showSectionList.style.display = "block";
          showSectionInput.value = "";
          showSectionInput.readOnly = false;
          showSectionAngleUp.className = "fa-solid fa-caret-down";
          if (noResultShowSection.style.display === "block") {
            const listItems = showSectionList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            });
          } else {
            noResultShowSection.style.display = "none";
          }

        } else {
          showSectionList.style.display = "none";
          showSectionInput.value = selectedInputValueShowSection;
          showSectionInput.readOnly = true;
          showSectionAngleUp.className = "fa-solid fa-caret-up";


        }

      })



      ssitem1.addEventListener("click", function () {
        selectedInputValueShowSection = ssitem1.textContent
        showSectionInput.value = selectedInputValueShowSection


        showSectionList.style.display = "none";
      })

      ssitem2.addEventListener("click", function () {
        selectedInputValueShowSection = ssitem2.textContent
        showSectionInput.value = selectedInputValueShowSection
        showSectionList.style.display = "none";
      })

      ssitem3.addEventListener("click", function () {
        selectedInputValueShowSection = ssitem3.textContent
        showSectionInput.value = selectedInputValueShowSection

        showSectionList.style.display = "none";
      })


      showSectionList.appendChild(ssitem1);
      showSectionList.appendChild(ssitem2);
      showSectionList.appendChild(ssitem3);

      showSectionList.appendChild(noResultShowSection);






      const handleShowSectionInput = () => {
        const filter = showSectionInput.value.toUpperCase();
        const listItems = showSectionList.querySelectorAll("li");

        let itemSelected = false;


        listItems.forEach(function (item) {
          const text = item.textContent.toUpperCase();
          if (text.indexOf(filter) > -1) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
        if (!itemSelected || filter === "") {
          noResultShowSection.style.display = "block";

        } else {
          noResultShowSection.style.display = "none";
          showSectionInput.style.display = "block";
        }
      };

      // ENTER key handling
      const handleShowSectionKeydown = (event) => {
        if (event.keyCode === 13) {
          const visibleItem = showSectionList.querySelector("li:not([style*='display: none'])");
          if (visibleItem) {
            showSectionInput.value = visibleItem.textContent;
            showSectionList.style.display = "none";
          }
        }
      };

      // Add window outside click event listener to the document

      window.addEventListener("click", function (event) {
        var isClickInside = showSectionList.contains(event.target) || showSectionInput.contains(event.target);
        if (!isClickInside) {
          showSectionList.style.display = "none";
          showSectionInput.value = selectedInputValueShowSection

          // If "No result found" is clicked, show all items again
          if (noResultShowSection.style.display === "block") {
            const listItems = showSectionList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            });
            noResultShowSection.style.display = "none";
          }
        }
      });
      showSectionInput.addEventListener("input", handleShowSectionInput);
      showSectionInput.addEventListener("keydown", handleShowSectionKeydown);


      showSectionDiv.appendChild(showSectionInput);
      showSectionDiv.appendChild(showSectionLabel);
      showSectionDiv.appendChild(showSectionAngleUp);



      showSectionDiv.appendChild(showSectionList);




      //  show section end


      //  show question start

      const showQuestionDiv = document.createElement('div');
      showQuestionDiv.id = 'showquestiondiv';
      showQuestionDiv.style.display = "none";

      const showQuestionInput = document.createElement('input');
      showQuestionInput.id = 'showquestioninput';

      const showQuestionLabel = document.createElement('label');
      showQuestionLabel.id = 'showquestionlabel';
      showQuestionLabel.textContent = "Question";

      var showQuestionAngleUp = document.createElement("i");
      showQuestionAngleUp.className = "fa-solid fa-caret-up";
      showQuestionAngleUp.id = "showAngleUp";
      // Create a list
      var showQuestionList = document.createElement("ul");
      showQuestionList.id = "showQuestionlist"



      // Create list items
      var sqitem1 = document.createElement("li");
      sqitem1.textContent = "Accounts";
      sqitem1.id = "sqitem1"
      sqitem1.className = "sqitems"

      var sqitem2 = document.createElement("li");
      sqitem2.textContent = "Opportunity";
      sqitem2.id = "sqitem2"
      sqitem2.className = "sqitems"


      var sqitem3 = document.createElement("li");
      sqitem3.textContent = "Quote";
      sqitem3.id = "sqitem3"
      sqitem3.className = "sqitems"

      // Create a list item for "No result found"
      var noResultShowQuestion = document.createElement("li");
      noResultShowQuestion.textContent = "No result found";
      noResultShowQuestion.id = "noresultfound"
      noResultShowQuestion.style.display = "none";



      var selectedInputValueShowQuestion = "";


      showQuestionInput.addEventListener("click", function () {
        if (showQuestionList.style.display === "none") {
          showQuestionList.style.display = "block";
          showQuestionInput.value = "";
          showQuestionInput.readOnly = false;
          showQuestionAngleUp.className = "fa-solid fa-caret-down";

          if (noResultShowQuestion.style.display === "block") {
            const listItems = showQuestionList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            });
          } else {
            noResultShowQuestion.style.display = "none";
          }

        } else {
          showQuestionList.style.display = "none";
          showQuestionInput.value = selectedInputValueShowQuestion;
          showQuestionInput.readOnly = true;
          showQuestionAngleUp.className = "fa-solid fa-caret-up";


        }

      })



      sqitem1.addEventListener("click", function () {
        selectedInputValueShowQuestion = sqitem1.textContent
        showQuestionInput.value = selectedInputValueShowQuestion


        showQuestionList.style.display = "none";
      })

      sqitem2.addEventListener("click", function () {
        selectedInputValueShowQuestion = ssitem2.textContent
        showQuestionInput.value = selectedInputValueShowQuestion
        showQuestionList.style.display = "none";
      })

      sqitem3.addEventListener("click", function () {
        selectedInputValueShowQuestion = ssitem3.textContent
        showQuestionInput.value = selectedInputValueShowQuestion

        showQuestionList.style.display = "none";
      })


      showQuestionList.appendChild(sqitem1);
      showQuestionList.appendChild(sqitem2);
      showQuestionList.appendChild(sqitem3);

      showQuestionList.appendChild(noResultShowQuestion);



      const handleShowQuestionInput = () => {
        const filter = showQuestionInput.value.toUpperCase();
        const listItems = showQuestionList.querySelectorAll("li");

        let itemSelected = false;


        listItems.forEach(function (item) {
          const text = item.textContent.toUpperCase();
          if (text.indexOf(filter) > -1) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
        if (!itemSelected || filter === "") {
          noResultShowQuestion.style.display = "block";

        } else {
          noResultShowQuestion.style.display = "none";
          showQuestionInput.style.display = "block";
        }
      };

      // ENTER key handling
      const handleShowQuestionKeydown = (event) => {
        if (event.keyCode === 13) {
          const visibleItem = showQuestionList.querySelector("li:not([style*='display: none'])");
          if (visibleItem) {
            showQuestionInput.value = visibleItem.textContent;
            showQuestionList.style.display = "none";
          }
        }
      };

      // Add window outside click event listener to the document

      window.addEventListener("click", function (event) {
        var isClickInside = showQuestionList.contains(event.target) || showQuestionInput.contains(event.target);
        if (!isClickInside) {
          showQuestionList.style.display = "none";
          showQuestionInput.value = selectedInputValueShowQuestion

          // If "No result found" is clicked, show all items again
          if (noResultShowQuestion.style.display === "block") {
            const listItems = showQuestionList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            });
            noResultShowQuestion.style.display = "none";
          }
        }
      });

      showQuestionInput.addEventListener("input", handleShowQuestionInput);
      showQuestionInput.addEventListener("keydown", handleShowQuestionKeydown);

      showQuestionDiv.appendChild(showQuestionInput);
      showQuestionDiv.appendChild(showQuestionLabel);
      showQuestionDiv.appendChild(showQuestionAngleUp);
      showQuestionDiv.appendChild(showQuestionList);


      //  show question end

      //  hide section start

      const hideSectionDiv = document.createElement('div');
      hideSectionDiv.id = 'hidesectiondiv';
      hideSectionDiv.style.display = "none";

      const hideSectionInput = document.createElement('input');
      hideSectionInput.id = 'hidesectioninput';

      const hideSectionLabel = document.createElement('label');
      hideSectionLabel.id = 'hidesectionlabel';
      hideSectionLabel.textContent = "Hide Section";

      var hideSectionAngleUp = document.createElement("i");
      hideSectionAngleUp.className = "fa-solid fa-caret-up";
      hideSectionAngleUp.id = "showAngleUp";

      // Create a list
      var hideSectionList = document.createElement("ul");
      hideSectionList.id = "hidesectionlist"


      // Create list items
      var hsitem1 = document.createElement("li");
      hsitem1.textContent = "Accounts";
      hsitem1.id = "hsitem1"
      hsitem1.className = "hsitems"

      var hsitem2 = document.createElement("li");
      hsitem2.textContent = "Opportunity";
      hsitem2.id = "hsitem2"
      hsitem2.className = "hsitems"


      var hsitem3 = document.createElement("li");
      hsitem3.textContent = "Quote";
      hsitem3.id = "hsitem3"
      hsitem3.className = "hsitems"

      // Create a list item for "No result found"
      var noResultHideSection = document.createElement("li");
      noResultHideSection.textContent = "No result found";
      noResultHideSection.id = "noresultfound"
      noResultHideSection.style.display = "none";



      var selectedInputValueHideSection = "";


      hideSectionInput.addEventListener("click", function () {
        if (hideSectionList.style.display === "none") {
          hideSectionList.style.display = "block";
          hideSectionInput.value = "";
          hideSectionInput.readOnly = false;
          hideSectionAngleUp.className = "fa-solid fa-caret-up";

          if (noResultHideSection.style.display === "block") {
            const listItems = hideSectionList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            });
          } else {
            noResultHideSection.style.display = "none";
          }

        } else {
          hideSectionList.style.display = "none";
          hideSectionInput.value = selectedInputValueHideSection;
          hideSectionInput.readOnly = true;
          hideSectionAngleUp.className = "fa-solid fa-caret-up";


        }

      })



      hsitem1.addEventListener("click", function () {
        selectedInputValueHideSection = sqitem1.textContent
        hideSectionInput.value = selectedInputValueHideSection


        hideSectionList.style.display = "none";
      })

      hsitem2.addEventListener("click", function () {
        selectedInputValueHideSection = ssitem2.textContent
        hideSectionInput.value = selectedInputValueHideSection
        hideSectionList.style.display = "none";
      })

      hsitem3.addEventListener("click", function () {
        selectedInputValueHideSection = ssitem3.textContent
        hideSectionInput.value = selectedInputValueHideSection

        hideSectionList.style.display = "none";
      })


      hideSectionList.appendChild(hsitem1);
      hideSectionList.appendChild(hsitem2);
      hideSectionList.appendChild(hsitem3);

      hideSectionList.appendChild(noResultHideSection);



      const handlehideSectionInput = () => {
        const filter = hideSectionInput.value.toUpperCase();
        const listItems = hideSectionList.querySelectorAll("li");

        let itemSelected = false;


        listItems.forEach(function (item) {
          const text = item.textContent.toUpperCase();
          if (text.indexOf(filter) > -1) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
        if (!itemSelected || filter === "") {
          noResultHideSection.style.display = "block";

        } else {
          noResultHideSection.style.display = "none";
          hideSectionInput.style.display = "block";
        }
      };

      // ENTER key handling
      const handleHideSectionKeydown = (event) => {
        if (event.keyCode === 13) {
          const visibleItem = hideSectionList.querySelector("li:not([style*='display: none'])");
          if (visibleItem) {
            hideSectionInput.value = visibleItem.textContent;
            hideSectionInput.style.display = "none";
          }
        }
      };

      // Add window outside click event listener to the document

      window.addEventListener("click", function (event) {
        var isClickInside = hideSectionList.contains(event.target) || hideSectionInput.contains(event.target);
        if (!isClickInside) {
          hideSectionList.style.display = "none";
          hideSectionInput.value = selectedInputValueHideSection

          // If "No result found" is clicked, show all items again
          if (noResultHideSection.style.display === "block") {
            const listItems = hideSectionList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            });
            noResultHideSection.style.display = "none";
          }
        }
      });

      hideSectionInput.addEventListener("input", handlehideSectionInput);
      hideSectionInput.addEventListener("keydown", handleHideSectionKeydown);

      hideSectionDiv.appendChild(hideSectionInput);
      hideSectionDiv.appendChild(hideSectionLabel);
      hideSectionDiv.appendChild(hideSectionAngleUp);
      hideSectionDiv.appendChild(hideSectionList);
      // hide section end


      //  hide question start

      const hideQuestionDiv = document.createElement('div');
      hideQuestionDiv.id = 'hidequestiondiv';
      hideQuestionDiv.style.display = "none";

      const hideQuestionInput = document.createElement('input');
      hideQuestionInput.id = 'hidequestioninput';

      const hideQuestionLabel = document.createElement('label');
      hideQuestionLabel.id = 'hidequestionlabel';
      hideQuestionLabel.textContent = "Hide Question";


      var hideQuestionAngleUp = document.createElement("i");
      hideQuestionAngleUp.className = "fa-solid fa-caret-up";
      hideQuestionAngleUp.id = "showAngleUp";

      // Create a list
      var hideQuestionList = document.createElement("ul");
      hideQuestionList.id = "hideQuestionlist"



      // Create list items
      var hqitem1 = document.createElement("li");
      hqitem1.textContent = "Accounts";
      hqitem1.id = "hqitem1"
      hqitem1.className = "hqitems"

      var hqitem2 = document.createElement("li");
      hqitem2.textContent = "Opportunity";
      hqitem2.id = "hqitem2"
      hqitem2.className = "hqitems"


      var hqitem3 = document.createElement("li");
      hqitem3.textContent = "Quote";
      hqitem3.id = "hqitem3"
      hqitem3.className = "hqitems"


      // Create a list item for "No result found"
      var noResultHideQuestion = document.createElement("li");
      noResultHideQuestion.textContent = "No result found";
      noResultHideQuestion.id = "noresultfound"
      noResultHideQuestion.style.display = "none";


      var selectedInputValueHideQuestion = "";


      hideQuestionInput.addEventListener("click", function () {
        if (hideQuestionList.style.display === "none") {
          hideQuestionList.style.display = "block";
          hideQuestionInput.value = "";
          hideQuestionInput.readOnly = false;
          hideQuestionAngleUp.className = "fa-solid fa-caret-down";

          if (noResultHideQuestion.style.display === "block") {
            const listItems = hideQuestionList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            });
          } else {
            noResultHideQuestion.style.display = "none";
          }
        }
        else {
          hideQuestionList.style.display = "none";
          hideQuestionInput.value = selectedInputValueHideQuestion;
          hideQuestionInput.readOnly = true;
          hideQuestionAngleUp.className = "fa-solid fa-caret-up";

        }
      });



      hqitem1.addEventListener("click", function () {
        selectedInputValueHideQuestion = hqitem1.textContent
        hideQuestionInput.value = selectedInputValueHideQuestion

        hideQuestionList.style.display = "none";
      })

      hqitem2.addEventListener("click", function () {
        selectedInputValueHideQuestion = hqitem2.textContent
        hideQuestionInput.value = selectedInputValueHideQuestion

        hideQuestionList.style.display = "none";
      })

      hqitem3.addEventListener("click", function () {
        selectedInputValueHideQuestion = hqitem3.textContent
        hideQuestionInput.value = selectedInputValueHideQuestion
        hideQuestionList.style.display = "none";
      })

      const handleHideQuestionInput = () => {
        const filter = hideQuestionInput.value.toUpperCase();
        const listItems = showSectionList.querySelectorAll("li");

        let itemSelected = false;


        listItems.forEach(function (item) {
          const text = item.textContent.toUpperCase();
          if (text.indexOf(filter) > -1) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
        if (!itemSelected || filter === "") {
          noResultHideQuestion.style.display = "block";

        } else {
          noResultHideQuestion.style.display = "none";
          hideQuestionInput.style.display = "block";
        }
      };


      // Add window outside click event listener to the document

      window.addEventListener("click", function (event) {
        var isClickInside = hideQuestionList.contains(event.target) || hideQuestionInput.contains(event.target);
        if (!isClickInside) {
          hideQuestionList.style.display = "none";
          hideQuestionInput.value = selectedInputValueHideQuestion

          // If "No result found" is clicked, show all items again
          if (noResultHideQuestion.style.display === "block") {
            const listItems = hideQuestionList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            });
            noResultHideQuestion.style.display = "none";
          }
        }
      });
      hideQuestionList.appendChild(hqitem1);
      hideQuestionList.appendChild(hqitem2);
      hideQuestionList.appendChild(hqitem3);
      hideQuestionList.appendChild(noResultHideQuestion);

      hideQuestionInput.addEventListener("input", handleHideQuestionInput);


      hideQuestionDiv.appendChild(hideQuestionInput);
      hideQuestionDiv.appendChild(hideQuestionLabel);
      hideQuestionDiv.appendChild(hideQuestionAngleUp);
      hideQuestionDiv.appendChild(hideQuestionList);






      //  hide question end

      //   template Merge  start

      const templateMergeDiv = document.createElement('div');
      templateMergeDiv.id = 'templatemergediv';
      templateMergeDiv.style.display = "none";

      const templateMergeInput = document.createElement('input');
      templateMergeInput.id = 'templatemergeinput';

      const templateMergeLabel = document.createElement('label');
      templateMergeLabel.id = 'templatemergelabel';
      templateMergeLabel.textContent = "Template Merge ";


      var TemplateMergeAngleUp = document.createElement("i");
      TemplateMergeAngleUp.className = "fa-solid fa-caret-up";
      TemplateMergeAngleUp.id = "showAngleUp";

      // Create a list
      var templateMergeList = document.createElement("ul");
      templateMergeList.id = "templateMergelist"


      // Create list items
      var tmitem1 = document.createElement("li");
      tmitem1.textContent = "Accounts";
      tmitem1.id = "tmitem1"
      tmitem1.className = "tmitems"

      var tmitem2 = document.createElement("li");
      tmitem2.textContent = "Opportunity";
      tmitem2.id = "hsitem2"
      tmitem2.className = "tmitems"


      var tmitem3 = document.createElement("li");
      tmitem3.textContent = "Quote";
      tmitem3.id = "hsitem3"
      tmitem3.className = "tmitems"

      // Create a list item for "No result found"
      var noResultTemplateMerge = document.createElement("li");
      noResultTemplateMerge.textContent = "No result found";
      noResultTemplateMerge.id = "noresultfound"
      noResultTemplateMerge.style.display = "none";



      var selectedInputValueTemplateMerge = "";


      templateMergeInput.addEventListener("click", function () {
        if (templateMergeList.style.display === "none") {
          templateMergeList.style.display = "block";
          templateMergeInput.value = "";
          templateMergeInput.readOnly = false;
          TemplateMergeAngleUp.className = "fa-solid fa-caret-down";

          if (noResultTemplateMerge.style.display === "block") {
            const listItems = templateMergeList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";

            });
          } else {
            noResultTemplateMerge.style.display = "none";
          }

        } else {
          templateMergeList.style.display = "none";
          templateMergeInput.value = selectedInputValueTemplateMerge;
          templateMergeInput.readOnly = true;

          TemplateMergeAngleUp.className = "fa-solid fa-caret-up";

        }

      })



      tmitem1.addEventListener("click", function () {
        selectedInputValueTemplateMerge = tmitem1.textContent
        templateMergeInput.value = selectedInputValueTemplateMerge


        templateMergeList.style.display = "none";
      })

      tmitem2.addEventListener("click", function () {
        selectedInputValueTemplateMerge = tmitem2.textContent
        templateMergeInput.value = selectedInputValueTemplateMerge
        templateMergeList.style.display = "none";
      })

      tmitem3.addEventListener("click", function () {
        selectedInputValueTemplateMerge = tmitem3.textContent
        templateMergeInput.value = selectedInputValueTemplateMerge

        templateMergeList.style.display = "none";
      })


      templateMergeList.appendChild(tmitem1);
      templateMergeList.appendChild(tmitem2);
      templateMergeList.appendChild(tmitem3);

      templateMergeList.appendChild(noResultTemplateMerge);



      const handleTemplateMergeInput = () => {
        const filter = templateMergeInput.value.toUpperCase();
        const listItems = templateMergeList.querySelectorAll("li");

        let itemSelected = false;


        listItems.forEach(function (item) {
          const text = item.textContent.toUpperCase();
          if (text.indexOf(filter) > -1) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
        if (!itemSelected || filter === "") {
          noResultTemplateMerge.style.display = "block";

        } else {
          noResultTemplateMerge.style.display = "none";
          templateMerge.style.display = "block";
        }
      };

      // ENTER key handling
      const handleTemplateMergeKeydown = (event) => {
        if (event.keyCode === 13) {
          const visibleItem = templateMergeList.querySelector("li:not([style*='display: none'])");
          if (visibleItem) {
            templateMergeInput.value = visibleItem.textContent;
            templateMergeInput.style.display = "none";
          }
        }
      };

      // Add window outside click event listener to the document

      window.addEventListener("click", function (event) {
        var isClickInside = templateMergeList.contains(event.target) || templateMergeInput.contains(event.target);
        if (!isClickInside) {
          templateMergeList.style.display = "none";
          templateMergeInput.value = selectedInputValueTemplateMerge;

          // If "No result found" is clicked, show all items again
          if (noResultTemplateMerge.style.display === "block") {
            const listItems = templateMergeList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            });
            noResultTemplateMerge.style.display = "none";
          }
        }
      });

      templateMergeInput.addEventListener("input", handleTemplateMergeInput);
      templateMergeInput.addEventListener("keydown", handleTemplateMergeKeydown);

      templateMergeDiv.appendChild(templateMergeInput);
      templateMergeDiv.appendChild(templateMergeLabel);
      templateMergeDiv.appendChild(TemplateMergeAngleUp);
      templateMergeDiv.appendChild(templateMergeList);


      //   template Merge   end

      // replace tagged content start

      const replaceTaggedContentDiv = document.createElement('div');
      replaceTaggedContentDiv.id = 'replacetaggedcontentdiv';
      replaceTaggedContentDiv.style.display = "none";

      const replaceTaggedContentDivGrid = document.createElement('div');
      replaceTaggedContentDivGrid.id = "replacetaggedcontentdivgrid"


      const replaceTaggedContentInput = document.createElement('input');
      replaceTaggedContentInput.id = 'replacetaggedcontentinput';



      const replaceTaggedContentLabel = document.createElement('label');
      replaceTaggedContentLabel.id = 'replacetaggedcontentlabel';
      replaceTaggedContentLabel.textContent = "FIND TAG";




      replaceTaggedContentDiv.appendChild(replaceTaggedContentInput);
      replaceTaggedContentDiv.appendChild(replaceTaggedContentLabel);



      // replaceTaggedAnsToQuesDiv start

      const replaceTaggedAnsToQuesDiv = document.createElement('div');
      replaceTaggedAnsToQuesDiv.id = "replacetaggedanstoquesdiv";
      replaceTaggedAnsToQuesDiv.style.display = "none";


      const replaceTaggedContentSubDiv = document.createElement('div');
      replaceTaggedContentSubDiv.id = "replacetaggedcontentsubdiv"

      const replaceTaggedContentSubInput = document.createElement("input");
      replaceTaggedContentSubInput.id = "replacetaggedcontentsubinput";
      replaceTaggedContentSubInput.readOnly = true;

      const replaceTaggedContentSubUl = document.createElement('ul');
      replaceTaggedContentSubUl.id = "replacetaggedcontentsubul"
      replaceTaggedContentSubUl.style.display = "none";




      // Create list items
      var replaceTaggedContentAnsToQuest = document.createElement("li");
      replaceTaggedContentAnsToQuest.textContent = "ANSWER TO QUESTION";
      replaceTaggedContentAnsToQuest.id = "replacetaggedcontentanstoquest"
      replaceTaggedContentAnsToQuest.className = "replacecontentsublist";

      var replaceTaggedContentValue = document.createElement("li");
      replaceTaggedContentValue.textContent = "VALUE";
      replaceTaggedContentValue.id = "replacetaggedcontentvalue"
      replaceTaggedContentValue.className = "replacecontentsublist"


      var replaceTaggedContentCalcSheet = document.createElement("li");
      replaceTaggedContentCalcSheet.textContent = "CALCSHEET POINTER";
      replaceTaggedContentCalcSheet.id = "replacetaggedcontentcalsheet"
      replaceTaggedContentCalcSheet.className = "replacecontentsublist"

      replaceTaggedContentSubUl.appendChild(replaceTaggedContentAnsToQuest);
      replaceTaggedContentSubUl.appendChild(replaceTaggedContentValue);
      replaceTaggedContentSubUl.appendChild(replaceTaggedContentCalcSheet);

      replaceTaggedContentSubDiv.appendChild(replaceTaggedContentSubInput);
      replaceTaggedContentSubDiv.appendChild(replaceTaggedContentSubUl);



      var selectedReplacetValue = "";

      replaceTaggedContentSubInput.addEventListener("click", function () {
        if (replaceTaggedContentSubUl.style.display === "none") {
          replaceTaggedContentSubUl.style.display = "block";
          replaceTaggedContentSubInput.value = ""
        } else {
          replaceTaggedContentSubUl.style.display = "none";
          replaceTaggedContentSubInput.value = selectedReplacetValue;


        }
      })
      // answert to question

      replaceTaggedContentAnsToQuest.addEventListener("click", function () {
        replaceAnsToQuestDiv.style.display = "block";
        replaceTaggedContentSubUl.style.display = "none"
        replaceValueDiv.style.display = "none";
        replaceCalcSubDiv1.style.display = "none";
        replaceCalcSubDiv2.style.display = "none";

      });

      // value
      replaceTaggedContentValue.addEventListener("click", function () {


        replaceAnsToQuestDiv.style.display = "none";
        replaceTaggedContentSubUl.style.display = "none";
        replaceCalcSubDiv1.style.display = "none";
        replaceCalcSubDiv2.style.display = "none";

        replaceValueDiv.style.display = "block";



      });
      // calc sheet
      replaceTaggedContentCalcSheet.addEventListener("click", function () {


        replaceAnsToQuestDiv.style.display = "none";
        replaceValueDiv.style.display = "none";
        replaceAnsToQuestDiv.style.display = "none";
        replaceTaggedContentSubUl.style.display = "none";
        replaceCalcSubDiv1.style.display = "block";
        replaceCalcSubDiv2.style.display = "block";

      });
      // Add window outside click event listener to the document

      window.addEventListener("click", function (event) {
        var isClickInside = replaceTaggedContentSubUl.contains(event.target) || replaceTaggedContentSubInput.contains(event.target);
        if (!isClickInside) {
          replaceTaggedContentSubUl.style.display = "none";
        }
      });













      // // replaceTaggedAnsToQuesDiv end


      const replaceAnsToQuestValueCalcDiv = document.createElement('div');
      replaceAnsToQuestValueCalcDiv.id = "replaceanstoquestvaluecalcdiv";


      const replaceAnsToQuestDiv = document.createElement('div');
      replaceAnsToQuestDiv.id = "replaceanstoquestdiv";



      // Answer to Question start
      const replaceAnsToQuestInput = document.createElement('input');
      replaceAnsToQuestInput.id = "replaceanstoquestinput";
      replaceAnsToQuestInput.placeholder = "ANSWER TO QUESTIION";


      const replaceLabelAnsToQuest = document.createElement("label");
      replaceLabelAnsToQuest.id = "replaceLabelAnsToQuest";
      replaceLabelAnsToQuest.textContent = "REPLACE WITH FROM QUESTION";

      var replaceTaggedAngleUp = document.createElement("i");
      replaceTaggedAngleUp.className = "fa-solid fa-caret-up";
      replaceTaggedAngleUp.id = "replaceAngleUp";


      var replaceTaggedContentRepInputList = document.createElement("ul");
      replaceTaggedContentRepInputList.id = "replacetaggedcontentrepinputlist"

      // Create list items

      var rtitem1 = document.createElement("li");
      rtitem1.textContent = "Accounts";
      rtitem1.id = "rtitem1"
      rtitem1.className = "rtitems"

      var rtitem2 = document.createElement("li");
      rtitem2.textContent = "Opportunity";
      rtitem2.id = "rtitem2"
      rtitem2.className = "rtitems"

      var rtitem3 = document.createElement("li");
      rtitem3.textContent = "Quote";
      rtitem3.id = "rtitem3"
      rtitem3.className = "rtitems"

      // Create a list item for "No result found"

      var noResultReplaceTaggedContent = document.createElement("li");
      noResultReplaceTaggedContent.textContent = "No result found";
      noResultReplaceTaggedContent.id = "noresultfound"
      noResultReplaceTaggedContent.style.display = "none";

      var selectedInputAnsToQues = "";





      replaceAnsToQuestInput.addEventListener("click", function () {
        if (replaceTaggedContentRepInputList.style.display === "none") {
          replaceTaggedContentRepInputList.style.display = "block";
          replaceAnsToQuestInput.value = "";
          replaceAnsToQuestInput.readOnly = false;
          replaceTaggedAngleUp.className = "fa-solid fa-caret-down";


          if (noResultReplaceTaggedContent.style.display === "block") {
            const listItems = replaceTaggedContentRepInputList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            });
          } else {
            noResultReplaceTaggedContent.style.display = "none";
          }
        } else {
          replaceTaggedContentRepInputList.style.display = "none";
          replaceAnsToQuestInput.value = selectedInputAnsToQues;
          replaceAnsToQuestInput.readOnly = true;
          replaceTaggedAngleUp.className = "fa-solid fa-caret-up";

        }
      });


      rtitem1.addEventListener("click", function () {
        selectedInputAnsToQues = rtitem1.textContent
        replaceAnsToQuestInput.value = selectedInputAnsToQues
        replaceTaggedContentRepInputList.style.display = "none";
      })



      rtitem2.addEventListener("click", function () {
        selectedInputAnsToQues = rtitem2.textContent
        replaceAnsToQuestInput.value = selectedInputAnsToQues
        replaceTaggedContentRepInputList.style.display = "none";
      })



      rtitem3.addEventListener("click", function () {
        selectedInputAnsToQues = rtitem3.textContent
        replaceAnsToQuestInput.value = selectedInputAnsToQues
        replaceTaggedContentRepInputList.style.display = "none";
      })

      const handleReplaceTaggedContentRepInput = () => {
        const filter = replaceAnsToQuestInput.value.toUpperCase();
        const listItems = replaceTaggedContentRepInputList.querySelectorAll("li");
        let itemSelected = false;
        listItems.forEach(function (item) {
          const text = item.textContent.toUpperCase();
          if (text.indexOf(filter) > -1) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
        if (!itemSelected || filter === "") {
          noResultReplaceTaggedContent.style.display = "block";
        } else {
          noResultReplaceTaggedContent.style.display = "none";
          replaceTaggedContent.style.display = "block";
        }
      };



      // ENTER key handling

      const handleReplaceTaggedContentKeydown = (event) => {
        if (event.keyCode === 13) {
          const visibleItem = replaceTaggedContentRepInputList.querySelector("li:not([style*='display: none'])");
          if (visibleItem) {
            replaceAnsToQuestInput.value = visibleItem.textContent;
            replaceAnsToQuestInput.style.display = "none";
          }
        }
      };


      replaceTaggedContentRepInputList.appendChild(rtitem1);
      replaceTaggedContentRepInputList.appendChild(rtitem2);
      replaceTaggedContentRepInputList.appendChild(rtitem3);
      replaceTaggedContentRepInputList.appendChild(noResultReplaceTaggedContent);



      // Add window outside click event listener to the document



      window.addEventListener("click", function (event) {
        var isClickInside = replaceTaggedContentRepInputList.contains(event.target) || replaceAnsToQuestInput.contains(event.target);
        if (!isClickInside) {
          replaceTaggedContentRepInputList.style.display = "none";
          // If "No result found" is clicked, show all items again
          if (noResultReplaceTaggedContent.style.display === "block") {
            const listItems = replaceTaggedContentRepInputList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            })
            noResultReplaceTaggedContent.style.display = "none";
          }
        }
      });
      replaceAnsToQuestInput.addEventListener("input", handleReplaceTaggedContentRepInput);
      replaceAnsToQuestInput.addEventListener("keydown", handleReplaceTaggedContentKeydown);




      replaceAnsToQuestDiv.appendChild(replaceAnsToQuestInput);
      replaceAnsToQuestDiv.appendChild(replaceLabelAnsToQuest);
      replaceAnsToQuestDiv.appendChild(replaceTaggedAngleUp);
      replaceAnsToQuestDiv.appendChild(replaceTaggedContentRepInputList);



      // Answer to Question end

      replaceAnsToQuestValueCalcDiv.appendChild(replaceAnsToQuestDiv);



      // // value start
      const replaceValueDiv = document.createElement('div');
      replaceValueDiv.id = "replacevaluediv";
      replaceValueDiv.style.display = "none";


      const replaceValueInput = document.createElement('input');
      replaceValueInput.id = "replacevalueinput";
      replaceValueInput.placeholder = "VALUE";

      const replaceLabelvalue = document.createElement("label");
      replaceLabelvalue.id = "replaceLabelValue";
      replaceLabelvalue.textContent = "REPLACE WITH VALUE";


      replaceValueDiv.appendChild(replaceValueInput);
      replaceValueDiv.appendChild(replaceLabelvalue);


      replaceAnsToQuestValueCalcDiv.appendChild(replaceValueDiv);
      // value end




      // // calc start


      const replaceCalcSubDiv1 = document.createElement('div');
      replaceCalcSubDiv1.id = "replacecalcsubdiv1"
      replaceCalcSubDiv1.style.display = "none";

      const replaceCalcSubInput1 = document.createElement('input');
      replaceCalcSubInput1.id = "replacecalcsubinput1";

      const replaceLabelCalc = document.createElement("label");
      replaceLabelCalc.id = "replaceLabelCalc";
      replaceLabelCalc.textContent = "REPLACE WITH TAB";

      var replaceTaggedCalcTabList = document.createElement("ul");
      replaceTaggedCalcTabList.id = "replaceTaggedCalcTabList"

      // Create list items

      var calcTab1 = document.createElement("li");
      calcTab1.textContent = "Accounts";
      calcTab1.id = "calcTab1"
      calcTab1.className = "calcTabs"

      var calcTab2 = document.createElement("li");
      calcTab2.textContent = "Opportunity";
      calcTab2.id = "calcTab2"
      calcTab2.className = "calcTabs"


      var calcTab3 = document.createElement("li");
      calcTab3.textContent = "Quote";
      calcTab3.id = "calcTab3"
      calcTab3.className = "calcTabs"

      // Create a list item for "No result found"

      var noResultReplaceCalcTab = document.createElement("li");
      noResultReplaceCalcTab.textContent = "No result found";
      noResultReplaceCalcTab.id = "noresultfound"
      noResultReplaceCalcTab.style.display = "none";

      var selectedInputValueCalcTab = "";

      replaceCalcSubInput1.addEventListener("click", function () {
        if (replaceTaggedCalcTabList.style.display === "none") {
          replaceTaggedCalcTabList.style.display = "block";
          replaceCalcSubInput1.value = "";
          replaceCalcSubInput1.readOnly = false;

          if (noResultReplaceCalcTab.style.display === "block") {
            const listItems = replaceTaggedCalcTabList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            });
          } else {
            noResultReplaceCalcTab.style.display = "none";
          }
        } else {
          replaceTaggedCalcTabList.style.display = "none";
          replaceCalcSubInput1.value = selectedInputValueCalcTab;
          replaceCalcSubInput1.readOnly = true;
        }
      });

      calcTab1.addEventListener("click", function () {
        selectedInputValueCalcTab = calcTab1.textContent
        replaceCalcSubInput1.value = selectedInputValueCalcTab
        replaceTaggedCalcTabList.style.display = "none";
      })



      calcTab2.addEventListener("click", function () {
        selectedInputValueCalcTab = calcTab2.textContent
        replaceCalcSubInput1.value = selectedInputValueCalcTab
        replaceTaggedCalcTabList.style.display = "none";
      })



      calcTab3.addEventListener("click", function () {
        selectedInputValueCalcTab = calcTab3.textContent
        replaceCalcSubInput1.value = selectedInputValueCalcTab
        replaceTaggedCalcTabList.style.display = "none";
      })


      const handleReplaceCalTabInput = () => {
        const filter = replaceCalcSubInput1.value.toUpperCase();
        const listItems = replaceTaggedCalcTabList.querySelectorAll("li");
        let itemSelected = false;
        listItems.forEach(function (item) {
          const text = item.textContent.toUpperCase();
          if (text.indexOf(filter) > -1) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
        if (!itemSelected || filter === "") {
          noResultReplaceCalcTab.style.display = "block";
        } else {
          noResultReplaceCalcTab.style.display = "none";
          // replaceTaggedContent.style.display = "block";
        }
      };



      // ENTER key handling

      const handleReplaceCalTabKeydown = (event) => {
        if (event.keyCode === 13) {
          const visibleItem = replaceTaggedCalcTabList.querySelector("li:not([style*='display: none'])");
          if (visibleItem) {
            replaceAnsToQuestInput.value = visibleItem.textContent;
            replaceAnsToQuestInput.style.display = "none";
          }
        }
      };


      replaceTaggedCalcTabList.appendChild(calcTab1);
      replaceTaggedCalcTabList.appendChild(calcTab2);
      replaceTaggedCalcTabList.appendChild(calcTab3);
      replaceTaggedCalcTabList.appendChild(noResultReplaceCalcTab);



      // Add window outside click event listener to the document



      window.addEventListener("click", function (event) {
        var isClickInside = replaceTaggedCalcTabList.contains(event.target) || replaceCalcSubInput1.contains(event.target);
        if (!isClickInside) {
          replaceTaggedCalcTabList.style.display = "none";
          // If "No result found" is clicked, show all items again
          if (noResultReplaceCalcTab.style.display === "block") {
            const listItems = replaceTaggedCalcTabList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            })
            noResultReplaceCalcTab.style.display = "none";
          }
        }
      });
      replaceCalcSubInput1.addEventListener("input", handleReplaceCalTabInput);
      replaceCalcSubInput1.addEventListener("keydown", handleReplaceCalTabKeydown);





      replaceCalcSubDiv1.appendChild(replaceCalcSubInput1);
      replaceCalcSubDiv1.appendChild(replaceLabelCalc);
      replaceCalcSubDiv1.appendChild(replaceTaggedCalcTabList);






      const replaceCalcSubDiv2 = document.createElement('div');
      replaceCalcSubDiv2.id = "replacecalcsubdiv2";
      replaceCalcSubDiv2.style.display = "none";

      const replaceCalcSubInput2 = document.createElement('input');
      replaceCalcSubInput2.id = "replacecalcsubinput2";


      const replaceLabelSubCalc2 = document.createElement("label");
      replaceLabelSubCalc2.id = "replaceLabelSubCalc2";
      replaceLabelSubCalc2.textContent = "REPLACE WITH CELL";


      replaceCalcSubDiv2.appendChild(replaceCalcSubInput2);
      replaceCalcSubDiv2.appendChild(replaceLabelSubCalc2);



      replaceAnsToQuestValueCalcDiv.appendChild(replaceCalcSubDiv1);


      // calc end














      replaceTaggedContentDivGrid.appendChild(replaceTaggedContentSubDiv);
      replaceTaggedContentDivGrid.appendChild(replaceAnsToQuestValueCalcDiv);
      replaceTaggedContentDivGrid.appendChild(replaceCalcSubDiv2);




      replaceTaggedAnsToQuesDiv.appendChild(replaceTaggedContentDivGrid);



      replaceTaggedContentDiv.appendChild(replaceTaggedContentInput);
      replaceTaggedContentDiv.appendChild(replaceTaggedContentLabel);
      replaceTaggedContentDiv.appendChild(replaceTaggedAnsToQuesDiv);





      // replace tagged content end



      var selectedInputValue = "";

      actionDropDownDiv.addEventListener('click', () => {
        if (actionDropDownList.style.display === 'none') {
          actionDropDownList.style.display = 'block';
          actionDropDownInput.value = "";
          actionDropDownInput.readOnly = false;
          actionDropDownAngleUp.className = "fa-solid fa-caret-down";

          if (noResultDropDown.style.display === "block") {
            const listItems = actionDropDownList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            });
          } else {
            noResultDropDown.style.display = "none";
          }

        } else {
          actionDropDownList.style.display = 'none';
          actionDropDownInput.value = selectedInputValue;
          actionDropDownInput.readOnly = true;
          actionDropDownAngleUp.className = "fa-solid fa-caret-up";


        }
      });
      // Event listener for item click
      showSection.addEventListener("click", function () {
        selectedInputValue = showSection.textContent;
        actionDropDownInput.value = selectedInputValue;
        actionInput.value = showSection.textContent;
        actionDropDownList.style.display = 'none';
        showActionDiv.style.display = "none";
        showSectionDiv.style.display = "block";
        showQuestionDiv.style.display = "none";
        hideSectionDiv.style.display = "none";
        hideQuestionDiv.style.display = "none";
        templateMergeDiv.style.display = "none"
        replaceTaggedContentDiv.style.display = "none"
        replaceAnsToQuestDiv.style.display = "none";
        replaceTaggedAnsToQuesDiv.style.display = "none";
      });

      showQuestion.addEventListener("click", function () {
        selectedInputValue = showQuestion.textContent;
        actionDropDownInput.value = selectedInputValue;
        actionInput.value = showQuestion.textContent;
        actionDropDownList.style.display = 'none';
        showActionDiv.style.display = "none";
        showSectionDiv.style.display = "none";
        showQuestionDiv.style.display = "block"
        hideSectionDiv.style.display = "none";
        hideQuestionDiv.style.display = "none";
        templateMergeDiv.style.display = "none"
        replaceTaggedContentDiv.style.display = "none"
        replaceAnsToQuestDiv.style.display = "none";
        replaceTaggedAnsToQuesDiv.style.display = "none";
      });

      hideSection.addEventListener("click", function () {
        selectedInputValue = hideSection.textContent;
        actionDropDownInput.value = selectedInputValue;
        actionInput.value = hideSection.textContent;
        actionDropDownList.style.display = 'none';
        showActionDiv.style.display = "none";
        showSectionDiv.style.display = "none";
        showQuestionDiv.style.display = "none"
        hideSectionDiv.style.display = "block";
        hideQuestionDiv.style.display = "none";
        templateMergeDiv.style.display = "none"
        replaceTaggedContentDiv.style.display = "none"
        replaceAnsToQuestDiv.style.display = "none";
        replaceTaggedAnsToQuesDiv.style.display = "none";


      });

      hideQuestion.addEventListener("click", function () {
        selectedInputValue = hideQuestion.textContent;
        actionDropDownInput.value = selectedInputValue;
        actionInput.value = hideQuestion.textContent;
        actionDropDownList.style.display = 'none';
        showActionDiv.style.display = "none";
        showSectionDiv.style.display = "none";
        showQuestionDiv.style.display = "none"
        hideSectionDiv.style.display = "none";
        hideQuestionDiv.style.display = "block";
        templateMergeDiv.style.display = "none"
        replaceTaggedContentDiv.style.display = "none"
        replaceAnsToQuestDiv.style.display = "none";
        replaceTaggedAnsToQuesDiv.style.display = "none";

      });


      templateMerge.addEventListener("click", function () {
        selectedInputValue = templateMerge.textContent;
        actionDropDownInput.value = selectedInputValue;
        actionInput.value = templateMerge.textContent;
        actionDropDownList.style.display = 'none';
        showActionDiv.style.display = "none";
        showSectionDiv.style.display = "none";
        showQuestionDiv.style.display = "none"
        hideSectionDiv.style.display = "none";
        hideQuestionDiv.style.display = "none";
        replaceTaggedContentDiv.style.display = "none"
        replaceAnsToQuestDiv.style.display = "none";
        replaceTaggedAnsToQuesDiv.style.display = "none";

        templateMergeDiv.style.display = "block"

      });

      replaceTaggedContent.addEventListener("click", function () {
        selectedInputValue = replaceTaggedContent.textContent;
        actionDropDownInput.value = selectedInputValue;
        actionDropDownList.style.display = 'none';
        showActionDiv.style.display = "none";
        showActionDiv.style.display = "none";
        showSectionDiv.style.display = "none";
        showQuestionDiv.style.display = "none"
        hideSectionDiv.style.display = "none";
        hideQuestionDiv.style.display = "none";
        templateMergeDiv.style.display = "none";
        actionDropDownTrash.style.display = "none"

        replaceTaggedContentDiv.style.display = "block";
        replaceTaggedAnsToQuesDiv.style.display = "block";
        replaceAnsToQuestDiv.style.display = "block";

      });



      // Search filter
      const handleActionDropDOwnInput = () => {
        const filter = actionDropDownInput.value.toUpperCase();
        const listItems = actionDropDownList.querySelectorAll("li");

        let itemSelected = false;


        listItems.forEach(function (item) {
          const text = item.textContent.toUpperCase();
          if (text.indexOf(filter) > -1) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
        if (!itemSelected || filter === "") {
          noResultDropDown.style.display = "block";

        } else {
          noResultDropDown.style.display = "none";
          actionDropDownList.style.display = "block";
        }
      };


      // ENTER key handling
      const handlewhenfirstInputKeydown = (event) => {
        if (event.keyCode === 13) {
          const visibleItem = actionDropDownList.querySelector("li:not([style*='display: none'])");
          if (visibleItem) {
            actionDropDownDiv.value = visibleItem.textContent;
            actionDropDownList.style.display = "none";
          }
        }
      };

      // Add window outside click event listener to the document

      window.addEventListener("click", function (event) {
        var isClickInside = actionDropDownList.contains(event.target) || actionDropDownDiv.contains(event.target);
        if (!isClickInside) {
          actionDropDownList.style.display = "none";
          actionDropDownInput.value = selectedInputValue;

          // If "No result found" is clicked, show all items again
          if (noResultDropDown.style.display === "block") {
            const listItems = actionDropDownList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            });
            noResultDropDown.style.display = "none";
          }
        }
      });

      actionDropDownDiv.addEventListener("input", handleActionDropDOwnInput);
      actionDropDownDiv.addEventListener("keydown", handlewhenfirstInputKeydown);



      actionDropDownList.appendChild(showSection);
      actionDropDownList.appendChild(showQuestion);
      actionDropDownList.appendChild(hideSection);
      actionDropDownList.appendChild(hideQuestion);
      actionDropDownList.appendChild(templateMerge);
      actionDropDownList.appendChild(replaceTaggedContent);
      actionDropDownList.appendChild(noResultDropDown);








      var deleteActions = 'false';
      var actionDropDownTrash = document.createElement('i');
      actionDropDownTrash.className = 'fa-regular fa-trash-can';
      actionDropDownTrash.id = 'actiondropdowntrash';
      actionDropDownTrash.addEventListener('click', function () {
        deleteAction(actionDropDownTrash);
      })


      // Add event listener to the window to reset the delete icon click state on outside click
      window.addEventListener("click", function (event) {
        if (!actionDropDownTrash.contains(event.target)) {

          if (deleteActions) {
            actionDropDownTrash.style.backgroundColor = "";
            actionDropDownTrash.style.color = "red";

            deleteActions = false;
          }
        }
      });



      function deleteAction(actionDropDownTrash) {
        if (!deleteActions) {
          actionDropDownTrash.style.backgroundColor = 'red';
          actionDropDownTrash.style.color = 'white';

        } else {
          actionContainerDiv.remove();
          actionDropDownMainDiv.remove();

        }
        deleteActions = !deleteActions;
        // After deleting the action, update the action numbering
        updateSectionAndQuestionNumbering();

      }





      actionDropDownDiv.appendChild(actionDropDownInput);
      actionDropDownDiv.appendChild(actionDropDownLabel);
      actionDropDownDiv.appendChild(actionDropDownAngleUp);






      const showActionDiv = document.createElement('div');
      showActionDiv.id = "showactiondiv";
      var showActionInput = document.createElement("input");
      showActionInput.type = "text";
      showActionInput.id = "showActioninput";






      showActionDiv.appendChild(showActionInput)







      actionDropDownMainSubDiv.appendChild(actionDropDownDiv);
      actionDropDownMainSubDiv.appendChild(showActionDiv);
      actionDropDownMainSubDiv.appendChild(showSectionDiv);
      actionDropDownMainSubDiv.appendChild(showQuestionDiv);
      actionDropDownMainSubDiv.appendChild(hideSectionDiv);
      actionDropDownMainSubDiv.appendChild(hideQuestionDiv);
      actionDropDownMainSubDiv.appendChild(templateMergeDiv);
      actionDropDownMainSubDiv.appendChild(replaceTaggedContentDiv);








      actionDropDownMainSubDiv.appendChild(actionDropDownTrash);


      actionDropDownMainDiv.appendChild(actionDropDownMainSubDiv);
      actionDropDownMainDiv.appendChild(replaceTaggedAnsToQuesDiv);
      actionDropDownMainDiv.appendChild(actionDropDownList);


      // actionDropDownMainDiv.appendChild(showSectionList);




      actionContainDropdownDiv.appendChild(actionContainerDiv);
      actionContainDropdownDiv.appendChild(actionDropDownMainDiv);
      mainActionContainerDiv.appendChild(actionContainDropdownDiv);



      actionCounter++;


    });


    updateSectionAndQuestionNumbering();

    //---------------------------- Condition Drop down start-------------------------------------

    var conditionDropDownDiv = document.createElement("div");
    conditionDropDownDiv.id = "conditiondropdowndiv"
    conditionDropDownDiv.style.display = "none"


    var conditionDropDownInput = document.createElement("input");
    conditionDropDownInput.type = "text";
    conditionDropDownInput.id = "conditiondropdowninput";
    conditionDropDownInput.value = "always"



    var conditionDropDownInputicon = document.createElement("i");
    conditionDropDownInputicon.className = "fa fa-angleup";
    conditionDropDownInputicon.id = "conditiondropdowninputiconid"





    var conditionDropDownInputLabel = document.createElement("label");
    conditionDropDownInputLabel.id = "conditiondropdowninputlabel";
    conditionDropDownInputLabel.textContent = "condition"
    conditionDropDownInputLabel.style.display = "none";


    var conditionDropList = document.createElement("ul");
    conditionDropList.id = "conditiondroplist"
    conditionDropList.style.display = "none";



    // Create conditionDropList items
    var when = document.createElement("li");
    when.textContent = "When";
    when.id = "whenlist"
    var always = document.createElement("li");
    always.textContent = "Aways";
    always.id = "alwayslist"
    var complex = document.createElement("li");
    complex.textContent = "Complex";
    complex.id = "complexlist"

    conditionDropList.appendChild(when);
    conditionDropList.appendChild(always);
    conditionDropList.appendChild(complex);




    // ---------------------------------when  questiion and answer field------------------------------------------------------------

    var Mainwhenfield = document.createElement("div");
    Mainwhenfield.classList.add("mainwhenfield");


    var whenQuestAnsDiv = document.createElement("div");
    whenQuestAnsDiv.id = "whenquestansdiv";

    var whenQuestAns = document.createElement("input");
    whenQuestAns.type = "text";
    whenQuestAns.id = "whenquestans";
    whenQuestAns.placeholder = "Answer To Question"
    whenQuestAns.readOnly = true;


    var whenQuestAnsLabel = document.createElement("label");
    whenQuestAnsLabel.id = "whenquestanslabel";
    whenQuestAnsLabel.textContent = "Question or Value";
    // whenQuestAnsLabel.style.display="none";



    var whenQuestAnsAngleUp = document.createElement("i");
    whenQuestAnsAngleUp.className = "fa-solid fa-caret-up";
    whenQuestAnsAngleUp.id = "AngleUp";

    // Create a list item for "No result found"
    var noResultWhenQuesAns = document.createElement("li");
    noResultWhenQuesAns.textContent = "No result found";
    noResultWhenQuesAns.id = "noresultfound"
    noResultWhenQuesAns.style.display = "NONE";

    whenQuestAnsDiv.appendChild(whenQuestAns);
    whenQuestAnsDiv.appendChild(whenQuestAnsLabel);
    whenQuestAnsDiv.appendChild(whenQuestAnsAngleUp);





    var wheniFrstList = document.createElement("ul");
    wheniFrstList.id = "whenfirstlist";
    wheniFrstList.style.display = "none";

    // Create list items
    var whenList1 = document.createElement("li");
    whenList1.textContent = "Item 1";
    whenList1.id = "whenlist1";
    whenList1.className = "whenlistitem1";

    var whenList2 = document.createElement("li");
    whenList2.textContent = "Item 2";
    whenList2.id = "whenlist2";
    whenList2.className = "whenlistitem1";

    var whenList3 = document.createElement("li");
    whenList3.textContent = "Item 3";
    whenList3.id = "whenlist3";
    whenList3.className = "whenlistitem1";



    // Append input and list to the inputContainer

    // Append list items to the list
    wheniFrstList.appendChild(whenList1);
    wheniFrstList.appendChild(whenList2);
    wheniFrstList.appendChild(whenList3);
    wheniFrstList.appendChild(noResultWhenQuesAns);



    var selectedValueQueAns = "";
    // Event listener for input field click
    whenQuestAnsDiv.addEventListener("click", function () {
      // Toggle display of the list
      if (wheniFrstList.style.display === "none") {
        wheniFrstList.style.display = "block";
        whenQuestAnsAngleUp.className = "fa-solid fa-caret-down";

        whenQuestAns.value = "";
        whenQuestAns.readOnly = false;




        if (noResultWhenQuesAns.style.display === "block") {
          const listItems = wheniFrstList.querySelectorAll("li");
          listItems.forEach(function (item) {
            item.style.display = "";
          });
        } else {
          noResultWhenQuesAns.style.display = "none";
        }


      } else {
        wheniFrstList.style.display = "none";
        whenQuestAns.value = selectedValueQueAns;
        whenQuestAnsAngleUp.className = "fa-solid fa-caret-up";
        whenQuestAns.readOnly = true;

      }
    });

    // Event listener for item click
    whenList1.addEventListener("click", function () {
      selectedValueQueAns = whenList1.textContent;
      whenQuestAns.value = selectedValueQueAns;
      wheniFrstList.style.display = "none";
      whenQuestAns.style.borderLeft = "none";
    });

    whenList2.addEventListener("click", function () {
      selectedValueQueAns = whenList2.textContent;
      whenQuestAns.value = selectedValueQueAns;
      wheniFrstList.style.display = "none";
      whenQuestAns.style.borderLeft = "none";

    });

    whenList3.addEventListener("click", function () {
      selectedValueQueAns = whenList3.textContent;
      wheniFrstList.style.display = "none";
      whenQuestAns.value = selectedValueQueAns;
      whenQuestAns.style.border = '1px solid #ccc';
    });



    // Search filter
    const handlewhenfirstInput = () => {
      const filter = whenQuestAns.value.toUpperCase();
      const listItems = wheniFrstList.querySelectorAll("li");

      let itemSelected = false;


      listItems.forEach(function (item) {
        const text = item.textContent.toUpperCase();
        if (text.indexOf(filter) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
      if (!itemSelected || filter === "") {
        noResultWhenQuesAns.style.display = "block";

      } else {
        noResultWhenQuesAns.style.display = "none";
        wheniFrstList.style.display = "block";
      }
    };


    // ENTER key handling
    const handlewhenfirstInputKeydown = (event) => {
      if (event.keyCode === 13) {
        const visibleItem = wheniFrstList.querySelector("li:not([style*='display: none'])");
        if (visibleItem) {
          whenQuestAns.value = visibleItem.textContent;
          wheniFrstList.style.display = "none";
        }
      }
    };

    // Click outside handling
    const handlewhenfirstOutsideClick = (event) => {
      if (!whenQuestAns.contains(event.target)) {
        wheniFrstList.style.display = "none";
        whenQuestAns.value = selectedValueQueAns;
        // If "No result found" is clicked, show all items again
        if (noResultWhenQuesAns.style.display === "block") {
          const listItems = wheniFrstList.querySelectorAll("li");
          listItems.forEach(function (item) {
            item.style.display = "";
          });
          noResultWhenQuesAns.style.display = "none";
        }
      }
    };

    whenQuestAnsDiv.addEventListener("input", handlewhenfirstInput);
    whenQuestAnsDiv.addEventListener("keydown", handlewhenfirstInputKeydown);
    window.addEventListener("click", handlewhenfirstOutsideClick);

    whenQuestAnsDiv.appendChild(whenQuestAns);
    whenQuestAnsDiv.appendChild(whenQuestAnsLabel);
    whenQuestAnsDiv.appendChild(wheniFrstList);


    // ---------------------------------when  questiion and answer field------------------------------------------------------------


    // --------------------when operations start------------------------------------------------------------

    var whenOperationDiv = document.createElement("div");
    whenOperationDiv.id = "whenoperationdiv";

    var whenOperation = document.createElement("input");
    whenOperation.type = "text";
    whenOperation.id = "whenoperation";
    whenOperation.placeholder = "Operations"
    whenOperation.readOnly = true;

    var whenOperationDiv = document.createElement("div");
    whenOperationDiv.id = "whenoperationdiv";

    var whenOperationLabel = document.createElement("label");
    whenOperationLabel.id = "whenoperationlabel";
    whenOperationLabel.textContent = "Operations";


    var whenOperationAngleUp = document.createElement("i");
    whenOperationAngleUp.className = "fa-solid fa-caret-up";
    whenOperationAngleUp.id = "AngleUp";

    // Create a list item for "No result found"
    var noResultwhenOperation = document.createElement("li");
    noResultwhenOperation.textContent = "No result found";
    noResultwhenOperation.id = "noresultfound"
    noResultwhenOperation.style.display = "none";




    var list = document.createElement("ul");
    list.id = "whensecondlist";
    list.style.display = "none";

    // Create list items
    var lesserThan = document.createElement("li");
    lesserThan.textContent = "<";
    lesserThan.id = "lesserthan";
    lesserThan.className = "operatorlistvalues";

    list.appendChild(lesserThan);

    var lesserThanEqual = document.createElement("li");
    lesserThanEqual.textContent = "<=";
    lesserThanEqual.id = "lesserthanequal";
    lesserThanEqual.className = "operatorlistvalues";

    list.appendChild(lesserThanEqual);

    var greaterThan = document.createElement("li");
    greaterThan.textContent = ">";
    greaterThan.id = "greaterthan";
    greaterThan.className = "operatorlistvalues";


    list.appendChild(greaterThan);

    var greaterThanEqual = document.createElement("li");
    greaterThanEqual.textContent = ">=";
    greaterThanEqual.id = "greaterthanequal";
    greaterThanEqual.className = "operatorlistvalues";

    list.appendChild(greaterThanEqual);

    var BETWEEN = document.createElement("li");
    BETWEEN.textContent = "BETWEEN";
    BETWEEN.id = "whenlist5";
    BETWEEN.className = "operatorlistvalues";
    list.appendChild(BETWEEN);

    var CHANGED = document.createElement("li");
    CHANGED.textContent = "CHANGED";
    CHANGED.id = "whenlist6";
    CHANGED.className = "operatorlistvalues";

    list.appendChild(CHANGED);

    var CONTAIN = document.createElement("li");
    CONTAIN.textContent = "CONTAIN";
    CONTAIN.id = "whenlist7";
    CONTAIN.className = "operatorlistvalues";

    list.appendChild(CONTAIN);

    var EMPTY = document.createElement("li");
    EMPTY.textContent = "EMPTY";
    EMPTY.id = "whenlist8";
    EMPTY.className = "operatorlistvalues";

    list.appendChild(EMPTY);

    var EQUAL = document.createElement("li");
    EQUAL.textContent = "EQUAL";
    EQUAL.id = "whenlist9";
    EQUAL.className = "operatorlistvalues";

    list.appendChild(EQUAL);

    var NOTCONTAIN = document.createElement("li");
    NOTCONTAIN.textContent = "NOT CONTAIN";
    NOTCONTAIN.id = "whenlist10";
    NOTCONTAIN.className = "operatorlistvalues";

    list.appendChild(NOTCONTAIN);

    var NOTEMPTY = document.createElement("li");
    NOTEMPTY.textContent = "NOT EMPTY";
    NOTEMPTY.id = "whenlist11";
    NOTEMPTY.className = "operatorlistvalues";
    list.appendChild(NOTEMPTY);

    var NOTEQUAL = document.createElement("li");
    NOTEQUAL.textContent = "NOT EQUAL";
    NOTEQUAL.id = "whenlist12";
    NOTEQUAL.className = "operatorlistvalues";
    list.appendChild(NOTEQUAL);


    // Append list items to the list
    list.appendChild(lesserThan);
    list.appendChild(lesserThanEqual);
    list.appendChild(greaterThan);
    list.appendChild(greaterThanEqual);
    list.appendChild(BETWEEN);
    list.appendChild(CHANGED);
    list.appendChild(CONTAIN);
    list.appendChild(EMPTY);
    list.appendChild(EQUAL);
    list.appendChild(NOTCONTAIN);
    list.appendChild(NOTEMPTY);
    list.appendChild(NOTEQUAL);
    list.appendChild(noResultwhenOperation);

    var selectedValueWhenOperation = "";

    // Event listener for input field click
    whenOperation.addEventListener("click", function () {
      // Toggle display of the list
      if (list.style.display === "none") {
        list.style.display = "block";
        whenOperation.value = "";
        whenOperation.readOnly = false;
        whenOperationAngleUp.className = "fa-solid fa-caret-down";


        if (noResultwhenOperation.style.display === "block") {
          const listItems = list.querySelectorAll("li");
          listItems.forEach(function (item) {
            item.style.display = "";
          });
        } else {
          noResultwhenOperation.style.display = "none";
        }


      } else {
        list.style.display = "none";
        whenOperation.value = selectedValueWhenOperation;
        whenOperation.readOnly = true;
        whenOperationAngleUp.className = "fa-solid fa-caret-up";

      }

    });

    // Event listener for item click
    lesserThan.addEventListener("click", function () {
      selectedValueWhenOperation = lesserThan.textContent;
      whenOperation.value = selectedValueWhenOperation;
      list.style.display = "none";
      whenValueDiv1.style.display = "none"; // Hide newInput4
      whenValueDiv.style.display = "block"; // Hide newInput4
      whenOperation.style.borderLeft = 'none';


      // inputContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
    });

    lesserThanEqual.addEventListener("click", function () {
      selectedValueWhenOperation = lesserThanEqual.textContent;
      whenOperation.value = selectedValueWhenOperation;
      list.style.display = "none";
      whenValueDiv1.style.display = "none"; // Hide newInput4
      whenValue.style.display = "block"; // Hide newInput4
      whenOperation.style.borderLeft = 'none';

    });

    greaterThan.addEventListener("click", function () {
      selectedValueWhenOperation = greaterThan.textContent;
      whenOperation.value = selectedValueWhenOperation;
      list.style.display = "none";
      whenValueDiv1.style.display = "none"; // Hide newInput4
      whenValueDiv.style.display = "block"; // Hide newInput4
      whenOperation.style.borderLeft = 'none';


    });
    greaterThanEqual.addEventListener("click", function () {
      whenOperation.value = greaterThanEqual.textContent;
      list.style.display = "none";
      whenValueDiv.style.display = "block"; // Hide newInput4

      whenValueDiv1.style.display = "none"; // Hide newInput4
      whenOperation.style.borderLeft = 'none';


      // inputContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
    });
    BETWEEN.addEventListener("click", function () {
      selectedValueWhenOperation = BETWEEN.textContent;
      whenOperation.value = selectedValueWhenOperation;

      list.style.display = "none";
      whenValueDiv1.style.display = "block"; // Hide newInput4
      whenValueDiv.style.display = "block"; // Hide newInput4
      if (whenOperation.value === "BETWEEN") {
        whenValueDiv1.style.display = "block"; // Show newInput4

        whenOperation.style.borderLeft = 'none';
        whenValueLabel1.textContent = "value1"
      }
      else {
        whenValueDiv1.style.display = "none"; // Hide newInput4
        whenValueLabel.textContent = "value"
      }
      // inputContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
    });
    CHANGED.addEventListener("click", function () {
      selectedValueWhenOperation = CHANGED.textContent;
      whenOperation.value = selectedValueWhenOperation;
      list.style.display = "none";
      whenValueDiv1.style.display = "none"; // Hide newInput4
      whenValueDiv.style.display = "none"; // Hide newInput4
      whenOperation.style.borderLeft = 'none';
    });

    CONTAIN.addEventListener("click", function () {
      selectedValueWhenOperation = CONTAIN.textContent;
      whenOperation.value = selectedValueWhenOperation;

      list.style.display = "none";
      whenValueDiv1.style.display = "none"; // Hide newInput4
      whenValueDiv.style.display = "block"; // Hide newInput4
      whenOperation.style.borderLeft = 'none';



      // inputContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
    });
    EQUAL.addEventListener("click", function () {
      selectedValueWhenOperation = EQUAL.textContent;
      whenOperation.value = selectedValueWhenOperation;

      list.style.display = "none";
      whenValue1.style.display = "none"; // Hide newInput4
      whenValueDiv.style.display = "none"; // Hide newInput4
      whenOperation.style.borderLeft = 'none';

    });
    EMPTY.addEventListener("click", function () {
      selectedValueWhenOperation = EMPTY.textContent;
      whenOperation.value = selectedValueWhenOperation;

      list.style.display = "none";
      whenValueDiv1.style.display = "none"; // Hide newInput4
      whenValueDiv.style.display = "block"; // Hide newInput4
      whenOperation.style.borderLeft = 'none';


      // inputContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
    });
    NOTCONTAIN.addEventListener("click", function () {
      selectedValueWhenOperation = NOTCONTAIN.textContent;
      whenOperation.value = selectedValueWhenOperation;
      list.style.display = "none";
      whenValueDiv1.style.display = "none"; // Hide newInput4
      whenValueDiv.style.display = "block"; // Hide newInput4
      whenOperation.style.borderLeft = 'none';


      // inputContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
    });
    NOTEMPTY.addEventListener("click", function () {
      selectedValueWhenOperation = NOTEMPTY.textContent;
      whenOperation.value = selectedValueWhenOperation;
      list.style.display = "none";
      whenValue1.style.display = "none"; // Hide newInput4
      whenValueDiv.style.display = "none"; // Hide newInput4
      whenOperation.style.borderLeft = 'none';
    });
    NOTEQUAL.addEventListener("click", function () {
      selectedValueWhenOperation = NOTEQUAL.textContent;
      whenOperation.value = selectedValueWhenOperation;
      list.style.display = "none";
      whenValueDiv1.style.display = "none"; // Hide newInput4
      whenValueDiv.style.display = "block"; // Hide newInput4
      whenOperation.style.borderLeft = 'none';
    });

    // Search filter
    const handlewhenInput = () => {
      const filter = whenOperation.value.toUpperCase();
      const listItems = list.querySelectorAll("li");
      let itemSelected = false;

      listItems.forEach(function (item) {
        const text = item.textContent.toUpperCase();
        if (text.indexOf(filter) > -1) {
          item.style.display = "";

          if (noResultwhenOperation.style.display === "block") {
            const listItems = list.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            });
          }

        } else {
          item.style.display = "none";
        }
      });
      // Show "No result found" if no match is found or the input is empty
      if (!itemSelected || filter === "") {
        noResultwhenOperation.style.display = "block";

      } else {
        noResultwhenOperation.style.display = "none";
        list.style.display = "block";

      }
    };

    // ENTER key handling
    const handlewhenInputKeydown = (event) => {
      if (event.keyCode === 13) {
        const visibleItem = list.querySelector("li:not([style*='display: none'])");
        if (visibleItem) {
          whenOperation.value = visibleItem.textContent;
          list.style.display = "none";
        }
      }
    };

    // Click outside handling
    const handlewhenOutsideClick = (event) => {
      if (!whenOperation.contains(event.target)) {
        list.style.display = "none";
        whenOperation.value = selectedValueWhenOperation;
        // If "No result found" is clicked, show all items again
        if (noResultwhenOperation.style.display === "block") {
          const listItems = list.querySelectorAll("li");
          listItems.forEach(function (item) {
            item.style.display = "";
          });
          noResultwhenOperation.style.display = "none";
        }
      }
    };

    whenOperation.addEventListener("input", handlewhenInput);
    whenOperation.addEventListener("keydown", handlewhenInputKeydown);
    window.addEventListener("click", handlewhenOutsideClick);


    whenOperationDiv.appendChild(whenOperation);
    whenOperationDiv.appendChild(whenOperationLabel);
    whenOperationDiv.appendChild(whenOperationAngleUp);
    whenOperationDiv.appendChild(list);

    // --------------------when operations enmd------------------------------------------------------------

    // --------------------when value start------------------------------------------------------------


    var whenValueDiv = document.createElement("div");
    whenValueDiv.id = "whenvaluediv";;

    var whenValue = document.createElement("input");
    whenValue.type = "text";
    whenValue.id = "whenvalue";

    var whenValueLabel = document.createElement("label");
    whenValueLabel.id = "whenvaluelabel";
    whenValueLabel.textContent = "Value";

    var ValuePenIcon = document.createElement("i");
    ValuePenIcon.className = "fa fa-pen";
    ValuePenIcon.id = "Valuepenicon";


    whenValue.addEventListener('input', function () {
      if (whenValue.value === '') {
        whenValue.style.borderLeft = 'none';
      } else {
        whenValue.style.borderLeft = 'none';
      }
    });




    whenValueDiv.appendChild(whenValue);
    whenValueDiv.appendChild(whenValueLabel);
    whenValueDiv.appendChild(ValuePenIcon);

    // -----------value --------------------

    var whenValueDiv1 = document.createElement("div");
    whenValueDiv1.id = "whenvaluediv1";
    whenValueDiv1.style.display = "none"; // Set initial display to none


    var whenValue1 = document.createElement("input");
    whenValue1.type = "text";
    whenValue1.id = "whenvalue1";


    var whenValueLabel1 = document.createElement("label");
    whenValueLabel1.id = "whenvaluelabel1";
    whenValueLabel1.textContent = "Value2";


    var ValuePenIcon1 = document.createElement("i");
    ValuePenIcon1.className = "fa fa-pen";
    ValuePenIcon1.id = "Valuepenicon1";

    whenValue1.addEventListener('input', function () {
      if (whenValue1.value === '') {
        whenValue1.style.borderLeft = 'none';
      } else {
        whenValue1.style.borderLeft = 'none';
      }
    });



    whenValueDiv1.appendChild(whenValue1);
    whenValueDiv1.appendChild(whenValueLabel1);
    whenValueDiv1.appendChild(ValuePenIcon1);




    Mainwhenfield.style.display = "none";
    // --------------------when value end------------------------------------------------------------


    // ===========================Complex=========================================

    var Mainwhenfield1 = document.createElement("div");
    Mainwhenfield1.classList.add("mainwhenfield1");

    // ===========================Complex questiona  nd answer start=========================================



    var complexFirstDiv = document.createElement("div");
    complexFirstDiv.classList.add("complexfirstdiv");

    var complexInputFirst = document.createElement("input");
    complexInputFirst.type = "text";
    complexInputFirst.classList.add("complexinputfirst");
    complexInputFirst.placeholder = "Answer To Question";
    complexInputFirst.readOnly = true;


    var complexFirstLabel = document.createElement("label");
    complexFirstLabel.textContent = "Question Or value";
    complexFirstLabel.id = "complexfirstlabel"



    var complexFirstAngleUp = document.createElement("i");
    complexFirstAngleUp.className = "fa-solid fa-caret-up";
    complexFirstAngleUp.id = "AngleUp";


    // Create a list item for "No result found"
    var noResultComplexFirst = document.createElement("li");
    noResultComplexFirst.textContent = "No result found";
    noResultComplexFirst.id = "noresultfound";
    noResultComplexFirst.style.display = "none";




    var complexFirstList = document.createElement("ul");
    complexFirstList.id = "complexfirstlist";
    complexFirstList.style.display = "none";

    // Create list items
    var complexFirstList1 = document.createElement("li");
    complexFirstList1.textContent = "Item 1";
    complexFirstList1.className = "complexfirstlist1";
    complexFirstList1.id = "complexlist1";

    var complexFirstList2 = document.createElement("li");
    complexFirstList2.textContent = "Item 2";
    complexFirstList2.className = "complexfirstlist1";
    complexFirstList2.id = "complexlist2";

    var complexFirstList3 = document.createElement("li");
    complexFirstList3.textContent = "Item 3";
    complexFirstList3.className = "complexfirstlist1";
    complexFirstList3.id = "complexlist3";

    // Append input and list to the inputContainer

    Mainwhenfield1.appendChild(complexFirstDiv);
    Mainwhenfield1.appendChild(complexFirstList);

    // Append list items to the list

    complexFirstList.appendChild(complexFirstList1);
    complexFirstList.appendChild(complexFirstList2);
    complexFirstList.appendChild(complexFirstList3);
    complexFirstList.appendChild(noResultComplexFirst);


    var selectedValueComplexFirst = "";

    // Event listener for input field click
    complexInputFirst.addEventListener("click", function () {
      // Toggle display of the list
      if (complexFirstList.style.display === "none") {
        complexFirstList.style.display = "block";
        complexInputFirst.value = "";
        complexInputFirst.readOnly = false;

        complexFirstAngleUp.className = "fa-solid fa-caret-down";

        if (noResultComplexFirst.style.display === "block") {
          const listItems = complexFirstList.querySelectorAll("li");
          listItems.forEach(function (item) {
            item.style.display = "";
          });
        } else {
          noResultComplexFirst.style.display = "none";
        }

      } else {
        complexFirstList.style.display = "none";
        complexInputFirst.value = selectedValueComplexFirst;
        complexInputFirst.readOnly = true;
        complexFirstAngleUp.className = "fa-solid fa-caret-up";


      }
    });

    // Event listener for item click
    complexFirstList1.addEventListener("click", function () {
      selectedValueComplexFirst = complexFirstList1.textContent;
      complexInputFirst.value = selectedValueComplexFirst;

      complexFirstList.style.display = "none";
      complexInputFirst.style.borderLeft = 'none';

    });

    complexFirstList2.addEventListener("click", function () {
      selectedValueComplexFirst = complexFirstList2.textContent;
      complexInputFirst.value = selectedValueComplexFirst;

      complexFirstList.style.display = "none";
      complexInputFirst.style.borderLeft = 'none';


    });

    complexFirstList3.addEventListener("click", function () {
      selectedValueComplexFirst = complexFirstList3.textContent;
      complexInputFirst.value = selectedValueComplexFirst;
      complexFirstList.style.display = "none";
      complexInputFirst.style.borderLeft = 'none';


    });

    // Search filter
    const handlecomplexfirstInput = () => {
      const filter = complexInputFirst.value.toUpperCase();
      const listItems = complexFirstList.querySelectorAll("li");

      let itemSelected = false;

      listItems.forEach(function (item) {
        const text = item.textContent.toUpperCase();
        if (text.indexOf(filter) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
      // Show "No result found" if no match is found or the input is empty
      if (!itemSelected || filter === "") {
        noResultComplexFirst.style.display = "block";

      } else {
        noResultComplexFirst.style.display = "none";
        complexFirstList.style.display = "block";

      }
    };

    // ENTER key handling
    const handlecomplefirstInputKeydown = (event) => {
      if (event.keyCode === 13) {
        const visibleItem = complexFirstList.querySelector("li:not([style*='display: none'])");
        if (visibleItem) {
          complexInputFirst.value = visibleItem.textContent;
          complexFirstList.style.display = "none";
        }
      }
    };

    // Click outside handling
    const handlecomplexfirstOutsideClick = (event) => {
      if (!complexInputFirst.contains(event.target)) {
        complexFirstList.style.display = "none";
        complexInputFirst.value = selectedValueComplexFirst;




        if (noResultComplexFirst.style.display === "block") {
          const listItems = complexFirstList.querySelectorAll("li");
          listItems.forEach(function (item) {
            item.style.display = "";

          });
          noResultComplexFirst.style.display = "none";
        }
      }
    };
    complexInputFirst.addEventListener("input", handlecomplexfirstInput);
    complexInputFirst.addEventListener("keydown", handlecomplefirstInputKeydown);
    window.addEventListener("click", handlecomplexfirstOutsideClick);


    complexFirstDiv.appendChild(complexInputFirst);
    complexFirstDiv.appendChild(complexFirstLabel);
    complexFirstDiv.appendChild(complexFirstAngleUp);
    complexFirstDiv.appendChild(complexFirstList);

    // ===========================Complex questiona  nd answer end=========================================

    //     // ===========================Complex operations start=========================================



    var compOperationDiv = document.createElement("div");
    compOperationDiv.classList.add("compoperationdiv");


    var compOperationInput = document.createElement("input");
    compOperationInput.type = "text";
    compOperationInput.classList.add("compoperationinput");
    compOperationInput.placeholder = "operations";
    compOperationInput.readOnly = true;


    var complexOperationAngleUp = document.createElement("i");
    complexOperationAngleUp.className = "fa-solid fa-caret-up";
    complexOperationAngleUp.id = "AngleUp";


    var compOperationLabel = document.createElement("label");
    compOperationLabel.textContent = "OPERATORS";
    compOperationLabel.id = "compoperationlabel"

    // Create a list item for "No result found"
    var noResultcompOperation = document.createElement("li");
    noResultcompOperation.textContent = "No result found";
    noResultcompOperation.id = "noresultfound";
    noResultcompOperation.style.display = "none";



    var compOperationList = document.createElement("ul");
    compOperationList.id = "complexsecondlist";
    compOperationList.style.display = "none";

    // Create list3 items
    var item19 = document.createElement("li");
    item19.textContent = "<";
    item19.id = "complexlist1";
    item19.className = "complexListValue"
    compOperationList.appendChild(item19);

    var item20 = document.createElement("li");
    item20.textContent = "<=";
    item20.id = "complexlist2";
    item20.className = "complexListValue"
    compOperationList.appendChild(item20);

    var item21 = document.createElement("li");
    item21.textContent = ">";
    item21.id = "complexlist3";
    item21.className = "complexListValue"
    compOperationList.appendChild(item21);

    var item22 = document.createElement("li");
    item22.textContent = ">=";
    item22.className = "complexListValue"
    item22.id = "complexlist4";
    compOperationList.appendChild(item22);

    var item23 = document.createElement("li");
    item23.textContent = "BETWEEN";
    item23.className = "complexListValue"
    item23.id = "complexlist5";
    compOperationList.appendChild(item23);

    var item24 = document.createElement("li");
    item24.className = "complexListValue"
    item24.textContent = "CHANGED";
    item24.id = "complexlist6";

    compOperationList.appendChild(item24);
    var item25 = document.createElement("li");
    item25.textContent = "CONTAIN";
    item25.id = "complexlist7";
    item25.className = "complexListValue"
    compOperationList.appendChild(item25);

    var item26 = document.createElement("li");
    item26.className = "complexListValue"
    item26.textContent = "EMPTY";
    item26.id = "complexlist8";
    compOperationList.appendChild(item26);

    var item27 = document.createElement("li");
    item27.className = "complexListValue"
    item27.textContent = "EQUAL";
    item27.id = "complexlist9";
    compOperationList.appendChild(item27);

    var item28 = document.createElement("li");
    item28.className = "complexListValue"
    item28.textContent = "NOT CONTAIN";
    item28.id = "complexlist10";
    compOperationList.appendChild(item28);

    var item29 = document.createElement("li");
    item29.className = "complexListValue"
    item29.textContent = "NOT EMPTY";
    item29.id = "complexlist11";
    compOperationList.appendChild(item29);

    var item30 = document.createElement("li");
    item30.className = "complexListValue"
    item30.textContent = "NOT EQUAL";
    item30.id = "complexlist12";
    compOperationList.appendChild(item30);




    // Append list3 items to the list3

    compOperationList.appendChild(item19);
    compOperationList.appendChild(item20);
    compOperationList.appendChild(item21);
    compOperationList.appendChild(item22);
    compOperationList.appendChild(item23);
    compOperationList.appendChild(item24);
    compOperationList.appendChild(item25);
    compOperationList.appendChild(item26);
    compOperationList.appendChild(item27);
    compOperationList.appendChild(item28);
    compOperationList.appendChild(item29);
    compOperationList.appendChild(item30);
    compOperationList.appendChild(noResultcompOperation);


    var selectedValueCompOperation = "";

    // Event listener for input field click
    compOperationInput.addEventListener("click", function () {
      // Toggle display of the list3
      if (compOperationList.style.display === "none") {
        compOperationList.style.display = "block";
        compOperationInput.value = "";
        compOperationInput.readOnly = false;
        complexOperationAngleUp.className = "fa-solid fa-caret-down";


        if (noResultcompOperation.style.display === "block") {
          const listItems = compOperationList.querySelectorAll("li");
          listItems.forEach(function (item) {
            item.style.display = "";
          });
        }

      } else {
        compOperationList.style.display = "none";
        compOperationInput.value = selectedValueCompOperation;
        compOperationInput.readOnly = true;
        complexOperationAngleUp.className = "fa-solid fa-caret-up";

      }


    });

    // Event listener for item click
    item19.addEventListener("click", function () {
      selectedValueCompOperation = item19.textContent;
      compOperationInput.value = selectedValueCompOperation;
      compOperationList.style.display = "none";
      complexValueDiv1.style.display = "none"; // Hide newInput4
      complexValueDiv.style.display = "block"; // Hide newInput4
      compOperationInput.style.borderLeft = 'none';



    });

    item20.addEventListener("click", function () {

      selectedValueCompOperation = item20.textContent;
      compOperationInput.value = selectedValueCompOperation;


      compOperationList.style.display = "none";
      complexValueDiv1.style.display = "none"; // Hide newInput4
      complexValueDiv.style.display = "block"; // Hide newInput4
      compOperationInput.style.borderLeft = 'none';



    });

    item21.addEventListener("click", function () {

      selectedValueCompOperation = item21.textContent;
      compOperationInput.value = selectedValueCompOperation;

      compOperationList.style.display = "none";
      complexValueDiv1.style.display = "none"; // Hide newInput4
      complexValueDiv.style.display = "block"; // Hide newInput4

      compOperationInput.style.borderLeft = 'none';



    });
    item22.addEventListener("click", function () {

      selectedValueCompOperation = item22.textContent;
      compOperationInput.value = selectedValueCompOperation;

      compOperationList.style.display = "none";
      complexValueDiv1.style.display = "none"; // Hide newInput4
      complexValueDiv.style.display = "block"; // Hide newInput4


      compOperationInput.style.borderLeft = 'none';


    });
    item23.addEventListener("click", function () {
      selectedValueCompOperation = item23.textContent;
      compOperationInput.value = selectedValueCompOperation;

      compOperationList.style.display = "none";
      complexValueDiv1.style.display = "block"; // Hide newInput4
      complexValueDiv.style.display = "block"; // Hide newInput4

      if (compOperationInput.value === "BETWEEN") {
        complexValueDiv1.style.display = "block"; // Show newInput4

        complexValueDiv1.style.borderLeft = 'none';
        complexValueLabel1.textContent = "value1"


      }
      else {
        complexValueDiv1.style.display = "none"; // Hide newInput4

        complexValueLabel.textContent = "value";



      }

    });
    item24.addEventListener("click", function () {
      selectedValueCompOperation = item24.textContent;
      compOperationInput.value = selectedValueCompOperation;

      compOperationList.style.display = "none";
      complexValueDiv1.style.display = "none"; // Hide newInput4
      complexValueDiv.style.display = "none"; // Hide newInput4

      compOperationInput.style.borderLeft = 'none';



    });
    item25.addEventListener("click", function () {
      selectedValueCompOperation = item25.textContent;
      compOperationInput.value = selectedValueCompOperation;


      compOperationList.style.display = "none";
      complexValueDiv1.style.display = "none"; // Hide newInput4
      complexValueDiv.style.display = "block"; // Hide newInput4
      compOperationInput.style.borderLeft = 'none';




    });
    item26.addEventListener("click", function () {
      selectedValueCompOperation = item26.textContent;
      compOperationInput.value = selectedValueCompOperation;

      compOperationList.style.display = "none";
      complexValueDiv1.style.display = "none"; // Hide newInput4
      complexValueDiv.style.display = "none"; // Hide newInput4

      complexInputValue.style.borderLeft = 'none';


    });
    item27.addEventListener("click", function () {
      selectedValueCompOperation = item27.textContent;
      compOperationInput.value = selectedValueCompOperation;

      compOperationList.compOperationInput.display = "none";
      complexValueDiv1.style.display = "none"; // Hide newInput4
      complexValueDiv.style.display = "block"; // Hide newInput4
      compOperationInput.style.borderLeft = 'none';




    });
    item28.addEventListener("click", function () {
      selectedValueCompOperation = item28.textContent;
      compOperationInput.value = selectedValueCompOperation;

      compOperationList.style.display = "none";
      complexValueDiv1.style.display = "none"; // Hide newInput4
      complexValueDiv.style.display = "block"; // Hide newInput4
      compOperationInput.style.borderLeft = 'none';
    });

    item29.addEventListener("click", function () {
      selectedValueCompOperation = item29.textContent;
      compOperationInput.value = selectedValueCompOperation;

      compOperationList.style.display = "none";
      complexValueDiv1.style.display = "none"; // Hide newInput4
      compOperationInput.style.borderLeft = 'none';
    });
    item30.addEventListener("click", function () {
      selectedValueCompOperation = item30.textContent;
      compOperationInput.value = selectedValueCompOperation;

      compOperationList.style.display = "none";
      complexValueDiv1.style.display = "none"; // Hide newInput4
      complexValueDiv.style.display = "block"; // Hide newInput4
      compOperationInput.style.borderLeft = 'none';


    });
    // Search filter
    const handlecomplexsecondInput = () => {
      const filter = compOperationInput.value.toUpperCase();
      const listItems = compOperationList.querySelectorAll("li");

      let itemSelected = false;

      listItems.forEach(function (item) {
        const text = item.textContent.toUpperCase();
        if (text.indexOf(filter) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
      // Show "No result found" if no match is found or the input is empty
      if (!itemSelected || filter === "") {
        noResultcompOperation.style.display = "block";

      } else {
        noResultcompOperation.style.display = "none";
        compOperationInput.style.display = "block";

      }
    };

    // ENTER key handling
    const handlecomplexsecondInputKeydown = (event) => {
      if (event.keyCode === 13) {
        const visibleItem = compOperationList.querySelector("li:not([style*='display: none'])");
        if (visibleItem) {
          compOperationInput.value = visibleItem.textContent;
          compOperationList.style.display = "none";
        }
      }
    };

    // Click outside handling
    const handlecomplexsecondOutsideClick = (event) => {
      if (!compOperationInput.contains(event.target)) {
        compOperationList.style.display = "none";
        compOperationInput.value = selectedValueCompOperation;

        // If "No result found" is clicked, show all items again
        if (noResultcompOperation.style.display === "block") {
          const listItems = compOperationList.querySelectorAll("li");
          listItems.forEach(function (item) {
            item.style.display = "";
          });
          noResultcompOperation.style.display = "none";
        }
      }
    };

    compOperationInput.addEventListener("input", handlecomplexsecondInput);
    compOperationInput.addEventListener("keydown", handlecomplexsecondInputKeydown);
    window.addEventListener("click", handlecomplexsecondOutsideClick);

    compOperationDiv.appendChild(compOperationInput);
    compOperationDiv.appendChild(compOperationLabel);
    compOperationDiv.appendChild(complexOperationAngleUp);
    compOperationDiv.appendChild(compOperationList);


    // Show the list3 when newInput1 is clicked
    Mainwhenfield1.appendChild(compOperationDiv);

    //     // ===========================Complex operations end=========================================

    //     // ===========================Complex value start=========================================


    var complexValueDiv = document.createElement("div");
    complexValueDiv.classList.add("complexvaluediv");



    var complexInputValue = document.createElement("input");
    complexInputValue.type = "text";
    complexInputValue.classList.add("complexinputvalue");

    var complexValueLabel = document.createElement("label");
    complexValueLabel.textContent = "Value";
    complexValueLabel.id = "complexvaluelabel"

    var CompValuePenIcon = document.createElement("i");
    CompValuePenIcon.className = "fa fa-pen";
    CompValuePenIcon.id = "compvaluepenicon";




    complexInputValue.addEventListener('input', function () {
      if (complexInputValue.value === '') {

        complexInputValue.style.borderLeft = 'none';

      } else {
        complexInputValue.style.borderLeft = 'none';

      }
    });

    complexValueDiv.appendChild(complexInputValue);
    complexValueDiv.appendChild(complexValueLabel);
    complexValueDiv.appendChild(CompValuePenIcon);


    // =--------------------------------------
    var complexValueDiv1 = document.createElement("div");
    complexValueDiv1.classList.add("complexvaluediv1");
    complexValueDiv1.style.display = "none"; // Hide the border



    var complexInputValue1 = document.createElement("input");
    complexInputValue1.type = "text";
    complexInputValue1.classList.add("complexinputvalue1");

    var complexValueLabel1 = document.createElement("label");
    complexValueLabel1.textContent = "Value1";
    complexValueLabel1.id = "complexvaluelabel1"

    var CompValuePenIcon1 = document.createElement("i");
    CompValuePenIcon1.className = "fa fa-pen";
    CompValuePenIcon1.id = "CompValuepenicon1";



    complexInputValue1.addEventListener('input', function () {
      if (complexInputValue1.value === '') {

        complexInputValue1.style.borderLeft = 'none';


      } else {
        complexInputValue1.style.borderLeft = 'none';

        // sectionErrorDiv.style.borderLeft = '3px solid #216c98';
        // sectionErrorDiv.style.border = '1px solid #ccc';

      }
    });
    complexValueDiv1.appendChild(complexInputValue1);
    complexValueDiv1.appendChild(complexValueLabel1);
    complexValueDiv1.appendChild(CompValuePenIcon1);






    Mainwhenfield1.appendChild(complexValueDiv);
    Mainwhenfield1.appendChild(complexValueDiv1);

    Mainwhenfield1.style.display = "none";
    //     // ===========================Complex value end=========================================

    // ===================================================================

    conditionAngleUp.addEventListener("click", function () {

      if (conditionDropDownDiv.style.display === "none") {
        conditionDropDownInput.style.display = "block";
        conditionDropDownDiv.style.display = "block";
        conditionDropDownInputLabel.style.display = "block";
        conditionAngleUp.className = "fa fa-angle-down";
        conditionAngleUp.id = "conditionangleup";
      }
      else {
        conditionDropDownInput.style.display = "none";
        conditionDropDownDiv.style.display = "none";
        conditionDropDownInputLabel.style.display = "none";
        conditionAngleUp.className = "fa fa-angle-up";
        conditionAngleUp.id = "conditionangledown";


      }
    });


    conditionDropDownInput.addEventListener("click", function () {
      conditionDropList.style.display = conditionDropList.style.display === "none" ? "block" : "none";



      // WINDOWS CLICK
      const handleconditionOutsideClick = (event) => {
        if (!conditionDropDownInput.contains(event.target)) {
          conditionDropList.style.display = "none";
        }
      };




      window.addEventListener("click", handleconditionOutsideClick);

      // Event listener for item1 click
      when.addEventListener("click", function () {
        // Display item1 in the input field
        conditionDropDownInput.value = when.textContent;
        conditionInputAsset.value = "(" + when.textContent + ")";
        Mainwhenfield1.style.display = "none";
        Mainwhenfield.style.display = "grid";
        conditionDropList.style.display = "none";

      });


      // Event listener for item2 click
      always.addEventListener("click", function () {
        // Display item2 in the input field
        conditionDropDownInput.value = "Always";
        conditionInputAsset.value = "(Always)";
        Mainwhenfield1.style.display = "none";
        Mainwhenfield.style.display = "none";
        conditionDropList.style.display = "none";

      });

      // Event listener for item3 click
      complex.addEventListener("click", function () {
        // Display item3 in the input field
        conditionDropDownInput.value = complex.textContent;
        conditionInputAsset.value = "(" + complex.textContent + ")";
        Mainwhenfield1.style.display = "grid";
        Mainwhenfield.style.display = "none";
        conditionDropList.style.display = "none";

      });






    });








    // Mainwhenfield.appendChild(whenQuestAnsLabel);
    Mainwhenfield.appendChild(whenQuestAnsDiv);
    Mainwhenfield.appendChild(whenOperationDiv);
    Mainwhenfield.appendChild(whenValueDiv);
    Mainwhenfield.appendChild(whenValueDiv1);

    // conditionDropDownInput.appendChild(conditionDropDownInputLabel);

    conditionDropDownDiv.appendChild(conditionDropDownInput);
    // conditionDropDownDiv.appendChild(conditionDropDownInputLabel);






    conditionDropDownDiv.appendChild(conditionDropDownInputLabel);

    conditionDropDownDiv.appendChild(Mainwhenfield)
    conditionDropDownDiv.appendChild(Mainwhenfield1)



    conditionContainerDiv.appendChild(conditionContainerDivGrid)


    conditionContainerDivAsset.appendChild(conditionContainerDiv);
    conditionContainerDivAsset.appendChild(conditionDropDownDiv);
    conditionContainerDivAsset.appendChild(conditionDropList);


    // ===================complex end ====================================

    var deleteIconClicked = false; // Flag variable to keep track of delete icon click

    // Add event listener to the trash icon to delete the rule and condition containers
    iconTrashRules.addEventListener("click", function () {
      deleteRuleAndConditionContainer(iconTrashRules);
    });

    // Add event listener to the window to reset the delete icon click state on outside click
    window.addEventListener("click", function (event) {
      if (!iconTrashRules.contains(event.target)) {
        // Click occurred outside the iconTrashRules element
        if (deleteIconClicked) {
          // Reset the background color and delete flag
          iconTrashRules.style.backgroundColor = "";
          iconTrashRules.style.color = "red";
          deleteIconClicked = false;
        }
      }
    });


    function deleteRuleAndConditionContainer(iconTrashRules) {
      var ruleConditionContainerDiv = iconTrashRules.parentNode.parentNode; // Get the rule-condition-container div

      if (!deleteIconClicked) {
        // First click: Change background color to red
        iconTrashRules.style.backgroundColor = "red";
        iconTrashRules.style.color = "white";
      } else {
        // Second click: Perform delete functionality
        rulesContainerAsset.removeChild(ruleConditionContainerDiv);
        iconTrashRules.style.backgroundColor = ""; // Reset background color
        updateMoveButtonsRules();

      }



      deleteIconClicked = !deleteIconClicked; // Toggle the flag for the next click

    }




    // Append the rule and condition divs to the container
    ruleConditionContainerDiv.appendChild(rulesContainerDiv);
    ruleConditionContainerDiv.appendChild(conditionContainerDivAsset);
    ruleConditionContainerDiv.appendChild(mainActionContainerDiv);
    ruleConditionContainerDiv.appendChild(assetAddAction);




    rulesContainerAsset.appendChild(ruleConditionContainerDiv);
    // rulesContainerAsset.appendChild(assetAddAction);




    rulesContainerDivCount++;



    updateSectionAndQuestionNumbering();




    // Function to update the "Move Up" and "Move Down" buttons visibility
    function updateMoveButtonsRules() {
      var ruleConditionDivs = rulesContainerAsset.querySelectorAll(".rule-condition-container");

      ruleConditionDivs.forEach(function (ruleConditionDiv, index) {
        var moveupAssetRules = ruleConditionDiv.querySelector("#moveupassetrules");
        var movedownAssetRules = ruleConditionDiv.querySelector("#movedownassetrules");
        var iconCopyRules = ruleConditionDiv.querySelector("#iconcopyrules");

        var ruleConditionGrid = ruleConditionDiv.querySelector(".rulescontainerdivclass")

        if (index === 0) {
          // First rule, show only "Move Down" button
          moveupAssetRules.style.display = "none";
          movedownAssetRules.style.display = "block";
          ruleConditionGrid.style.gridTemplateColumns = "0.1fr 0.1fr 0.6fr 0.1fr 0.1fr 0.1fr";
        } else if (index === ruleConditionDivs.length - 1) {
          // Last rule, show only "Move Up" button
          moveupAssetRules.style.display = "block";
          movedownAssetRules.style.display = "none";
          ruleConditionGrid.style.gridTemplateColumns = "0.1fr 0.1fr 0.6fr 0.1fr 0.1fr 0.1fr";
          inputFieldRules.borderBottom = "px solid #ccc"
        } else {
          // Any other rule, show both "Move Up" and "Move Down" buttons
          moveupAssetRules.style.display = "block";
          movedownAssetRules.style.display = "block";
          ruleConditionGrid.style.gridTemplateColumns = "0.1fr 0.1fr 0.5fr 0.1fr 0.1fr 0.1fr 0.1fr";
          iconCopyRules.style.right = "20px";

        }

      });
    }



    updateMoveButtonsRules();
  });



  // ------------------------------------------Rules end--------------------------------------------------------------------
  // ADD QUESTION

  // Create the "Add section" button element
  var addQuestionBtn = document.createElement("input");
  addQuestionBtn.type = "button";
  addQuestionBtn.className = "add_question"+sectionassetCounter;
  addQuestionBtn.id = "addquestionbtn";
  addQuestionBtn.value = "+ Add Question";


  // Add event listener to the "Question" button
  questionAssetBtn.addEventListener("click", function () {

    addQuestionBtn.style.display = "block"; // Show the "Add section" button
    questionsContainerAsset.style.display = "block";
    addRuleBtnAsset.style.display = "none";

    rulesContainerAsset.style.display = "none";
    questionAssetBtn.style.backgroundColor = "#216c98";
    questionAssetBtn.style.color = "white";
    rulesAssetBtn.style.color = "black";
    rulesAssetBtn.style.backgroundColor = "white";

  });

  // Create a new div to contain the input fields
  var questionsContainerAsset = document.createElement("div");
  questionsContainerAsset.id = "questionscontainerasset";
  questionsContainerAsset.dataset.sectionNumber = sectionassetCounter;

  // Add event listener to the "Add Question" button
  addQuestionBtn.addEventListener("click", function () {
    var sectionNumber = questionsContainerAsset.dataset.sectionNumber;
    // If this is the first element, show only moveupAssetQuestion button


    var questionsContainerWholeDiv = document.createElement("div");
    questionsContainerWholeDiv.id = "questionscontainerwholediv";
    questionsContainerWholeDiv.className = "questionscontainer_"+sectionNumber + "_" + (questionsContainerAsset.childElementCount + 1);



    // Create an icon element for the section
    var iconAngleUpquestion = document.createElement("i");
    iconAngleUpquestion.className = "fa fa-angle-up";
    iconAngleUpquestion.id = "iconAngleUpquestion";

    // Create a new div to contain the input fields
    var questionsContainerDiv = document.createElement("div");
    questionsContainerDiv.id = "questionscontainerdiv";


    var inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = "question_name";
    inputField.placeholder = "Enter Your Question";
    inputField.id = "inputfield";
    inputField.onblur = (event)=>{questionSubmit(event)}
    inputField.style.display = "block"; // Display the input field

    // Create a label for the sub-section number
    var subSectionLabel = document.createElement("label");
    subSectionLabel.id = "subSectionlabel"
    subSectionLabel.innerHTML = sectionNumber + "." + (questionsContainerAsset.childElementCount + 1);

    var questionKeyField = document.createElement("input");
    questionKeyField.type = "hidden";
    questionKeyField.name = "question_key";
    questionKeyField.value = "";

    var questionNumField = document.createElement("input");
    questionNumField.type = "hidden";
    questionNumField.name = "question_num";
    questionNumField.value = sectionNumber + "." + (questionsContainerAsset.childElementCount + 1);;
    // ----------------------------------I ICON SUB FIELD START----------------------------------------------------------------------------------------
    // Create an icon element for the section
    var iconIconquestion = document.createElement("i");
    iconIconquestion.className = "fa fa-info-circle";
    iconIconquestion.id = "iconiconquestion";



    iconIconquestion.addEventListener("click", function () {
      iiconinputFieldDiv.style.display = iiconinputFieldDiv.style.display === "none" ? "block" : "none";
    })

    var iiconinputFieldDiv = document.createElement("div");
    iiconinputFieldDiv.id = "iiconfieldid";
    iiconinputFieldDiv.style.display = "none";



    var iiconinputFieldDiv2 = document.createElement("div");
    iiconinputFieldDiv2.id = "iiconfieldiddiv2";

    // ----------iiconinputSubField1  and  iiconinputSubField2 start
    var iiconinputSubField1 = document.createElement("input");
    iiconinputSubField1.type = "text";
    iiconinputSubField1.id = "iiconinputsubFieldid1";
    iiconinputSubField1.readOnly = true;

    var iiconinputSubField2 = document.createElement("input");
    iiconinputSubField2.type = "text";
    iiconinputSubField2.id = "iiconinputsubFieldid2";
    iiconinputSubField2.readOnly = true;


    // ----------iiconinputSubField1  and  iiconinputSubField2 end


    // ----------iiconinputFieldNoteDiv start
    var iiconinputFieldNoteDiv = document.createElement("div");

    var iiconinputFieldNote = document.createElement("input");
    iiconinputFieldNote.type = "text";
    iiconinputFieldNote.id = "iiconinputFieldid";

    var iiconinputFieldNoteLabel = document.createElement("label");
    iiconinputFieldNoteLabel.innerText = "NOTE";
    iiconinputFieldNoteLabel.id = "iiconinputfieldnotelabel";

    iiconinputFieldNoteDiv.appendChild(iiconinputFieldNote);
    iiconinputFieldNoteDiv.appendChild(iiconinputFieldNoteLabel);

    // iiconinputFieldNoteDiv end----------------------------------
    // ----------------iiconinputFieldCategoryDiv start----------------------

    var iiconinputFieldCategoryDiv = document.createElement("div");
    iiconinputFieldCategoryDiv.id = "iiconinputfieldcategorydiv";

    var iiconinputFieldCategory = document.createElement("input");
    iiconinputFieldCategory.id = "iiconinputFieldcategoryid";

    var iiconinputFieldCategoryLabel = document.createElement("label");
    iiconinputFieldCategoryLabel.innerText = "CATEGORY1";
    iiconinputFieldCategoryLabel.id = "iiconinputfieldcategorylabel";


    var iiconinputFieldCategoryList = document.createElement("ul");
    iiconinputFieldCategoryList.id = "iiconinputfieldcategorylist"
    iiconinputFieldCategoryList.style.display = "none";

    // Create a list item for "No result found"
    var noResultItemiiconinputField = document.createElement("li");
    noResultItemiiconinputField.textContent = "No result found";
    noResultItemiiconinputField.id = "noresultfound"
    noResultItemiiconinputField.style.display = "none"; // Initially hide it



    var iiconFieldCategoryListvalue = document.createElement("li");
    iiconFieldCategoryListvalue.textContent = "itemsfield1";
    iiconFieldCategoryListvalue.className = "itemfiedcat1"

    iiconinputFieldCategoryList.appendChild(iiconFieldCategoryListvalue);
    iiconinputFieldCategoryList.appendChild(noResultItemiiconinputField);



    iiconFieldCategoryListvalue.addEventListener("click", function () {
      selectedValueiiconFieldCategory = iiconFieldCategoryListvalue.textContent;
      iiconinputFieldCategory.value = selectedValueiiconFieldCategory;
      iiconinputFieldCategoryList.style.display = "none";
    })



    var selectedValueiiconFieldCategory = "";


    iiconinputFieldCategory.addEventListener("click", function () {
      if (iiconinputFieldCategoryList.style.display === "none") {
        iiconinputFieldCategoryList.style.display = "block";
        noResultItemiiconinputField.style.display = "none";
        iiconinputFieldCategory.value = "";
        if (noResultItemiiconinputField.style.display === "block") {
          const listItems = iiconinputFieldCategoryList.querySelectorAll("li");
          listItems.forEach(function (item) {
            item.style.display = "";
          });
          noResultItemiiconinputField.style.display = "none";
        }
      } else {
        iiconinputFieldCategoryList.style.display = "none";
        iiconinputFieldCategory.value = selectedValueiiconFieldCategory;

      }
    });


    iiconinputFieldCategory.addEventListener("blur", function () {
      selectedValueiiconFieldCategory = iiconinputFieldCategory.value;
    })

    // Input event for filtering
    iiconinputFieldCategory.addEventListener("input", function () {
      const filterInput = iiconinputFieldCategory.value.toUpperCase();
      const listItems = iiconinputFieldCategoryList.querySelectorAll("li");

      let itemSelected = false;

      listItems.forEach(function (item) {
        const text = item.textContent.toUpperCase();
        if (text.indexOf(filterInput) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
      // Show "No result found" if no match is found or the input is empty
      if (!itemSelected || filterInput === "") {
        noResultItemiiconinputField.style.display = "block";

      } else {
        noResultItemiiconinputField.style.display = "none";
        iiconinputFieldCategoryList.style.display = "block";

      }
    });

    // Click event outside the input field
    window.addEventListener("click", function (event) {
      if (!iiconinputFieldCategoryDiv.contains(event.target)) {
        iiconinputFieldCategoryList.style.display = "none";
        // If "No result found" is clicked, show all items again
        if (noResultItemiiconinputField.style.display === "block") {
          const listItems = iiconinputFieldCategoryList.querySelectorAll("li");
          listItems.forEach(function (item) {
            item.style.display = "";
          });
          noResultItemiiconinputField.style.display = "none";
        }



      }
    });


    iiconinputFieldCategoryDiv.appendChild(iiconinputFieldCategory);
    iiconinputFieldCategoryDiv.appendChild(iiconinputFieldCategoryLabel);


    // ----------iiconinputFieldCategoryDiv end--------------

    // ----------iiconinputFieldexternalDiv start--------------


    var iiconinputFieldexternalDiv = document.createElement("div");
    iiconinputFieldexternalDiv.id = "iiconinputfieldexternaldiv";


    var iiconInputFieldExternal = document.createElement("input");
    iiconInputFieldExternal.type = "text";
    iiconInputFieldExternal.id = "iiconinputFieldexternalid";
    iiconInputFieldExternal.innerHTML = "EXTERNAL REFERENCE ID";

    var iiconInputFieldExternalLabel = document.createElement("label");
    iiconInputFieldExternalLabel.innerText = "REFERENCE EXTERNAL ID";
    iiconInputFieldExternalLabel.id = "iiconinputfieldexternallabel";

    iiconinputFieldexternalDiv.appendChild(iiconInputFieldExternal);
    iiconinputFieldexternalDiv.appendChild(iiconInputFieldExternalLabel);
    // ----------iiconinputFieldexternalDiv start--------------


    iiconinputFieldDiv2.appendChild(iiconinputSubField1)
    iiconinputFieldDiv2.appendChild(iiconinputFieldNoteDiv);
    iiconinputFieldDiv2.appendChild(iiconinputFieldCategoryDiv);
    iiconinputFieldDiv2.appendChild(iiconinputFieldexternalDiv);
    iiconinputFieldDiv2.appendChild(iiconinputSubField2)

    iiconinputFieldDiv.appendChild(iiconinputFieldDiv2);


    // ----------------------------------I ICON SUB FIELD END----------------------------------------------------------------------------------------

    // ----------------------------------INPUT TOGGLE FIELD LIST START----------------------------------------------------------------------------------------

    // Create the input  toggle fields

    var inputToggleField = document.createElement("input");
    inputToggleField.type = "text";
    inputToggleField.id = "inputtogglefield";
    inputToggleField.value = "Toggle";
    inputToggleField.name = "question_toggle"
    inputToggleField.onchange = (event)=>{questionSubmit(event)}



    var inputToggleFieldList = document.createElement("ul");
    inputToggleFieldList.id = "inputtogglefieldlist"
    inputToggleFieldList.style.display = "none";


    // Create a list item for "No result found"
    var noResultIteminputToggleField = document.createElement("li");
    noResultIteminputToggleField.textContent = "No result found";
    noResultIteminputToggleField.id = "noresultfound";
    noResultIteminputToggleField.style.display = "none";

    // Initially hide it


    // Create list items

    var item1 = document.createElement("li");
    item1.textContent = "TOGGLE";
    item1.className = "listitem1"
    item1.id = "ailist1"
    var item2 = document.createElement("li");
    item2.textContent = "COUNTRIES";
    item2.className = "listitem"
    item2.id = "ailist2"
    var item3 = document.createElement("li");
    item3.textContent = "CUSTOM FORM";
    item3.className = "listitem"
    item3.id = "ailist3"
    var item4 = document.createElement("li");
    item4.textContent = "TEXTAREA";
    item4.className = "listitem"
    item4.id = "ailist4"
    var item5 = document.createElement("li");
    item5.textContent = "MULTITEXTAREA"
    item5.className = "listitem"
    item5.id = "ailist5"
    var item6 = document.createElement("li");
    item6.textContent = "DATE";
    item6.className = "listitem"
    item6.id = "ailist6"


    var selectedValue = "";

    inputToggleField.addEventListener("click", function () {
      if (inputToggleFieldList.style.display === "none") {
        inputToggleFieldList.style.display = "block";
        inputToggleField.value = "";
        // If "No result found" is clicked, show all items again
        if (noResultIteminputToggleField.style.display === "block") {
          const listItems = inputToggleFieldList.querySelectorAll("li");
          listItems.forEach(function (item) {
            item.style.display = "";
          });
        } else {
          noResultIteminputToggleField.style.display = "none";
        }

        // Set the input field value to the selected value
      } else {
        inputToggleFieldList.style.display = "none";
        inputToggleField.value = selectedValue;

      }



      item1.addEventListener("click", function () {
        selectedValue = item1.textContent;
        inputToggleField.value = selectedValue;
        inputToggleFieldList.style.display = "none";

      })
      item2.addEventListener("click", function () {
        selectedValue = item2.textContent;
        inputToggleField.value = selectedValue;
        inputToggleFieldList.style.display = "none";

      })
      item3.addEventListener("click", function () {
        selectedValue = item3.textContent;
        inputToggleField.value = selectedValue;
        inputToggleFieldList.style.display = "none";


      })
      item4.addEventListener("click", function () {
        selectedValue = item4.textContent;
        inputToggleField.value = selectedValue;
        inputToggleFieldList.style.display = "none";


      })
      item5.addEventListener("click", function () {
        selectedValue = item5.textContent;
        inputToggleField.value = selectedValue;
        inputToggleFieldList.style.display = "none";


      })
      item6.addEventListener("click", function () {
        selectedValue = item6.textContent;
        inputToggleField.value = selectedValue;
        inputToggleFieldList.style.display = "none";


      })
      inputToggleField.addEventListener("blur", function () {
        selectedValue = inputToggleField.value;
      })

      // ENTER
      const handleInputToggleKeydown = (event) => {
        if (event.keyCode === 13) {
          const visibleItem = inputToggleFieldList.querySelector("li:not([style*='display: none'])");
          if (visibleItem) {
            inputToggleFieldList.value = visibleItem.textContent;
            inputToggleFieldList.style.display = "none";
          }
        }
      }


      inputToggleField.addEventListener("input", function () {
        const filterInput = inputToggleField.value.toUpperCase();
        const listItems = inputToggleFieldList.querySelectorAll("li");

        let itemSelected = false;

        listItems.forEach(function (item) {
          const text = item.textContent.toUpperCase();
          if (text.indexOf(filterInput) > -1) {
            item.style.display = "";
            if (inputToggleField.value === text) {
              itemSelected = true;

            }
          } else {
            item.style.display = "none";
          }
        });
        // Show "No result found" if no match is found or the input is empty
        if (!itemSelected || filterInput === "") {
          noResultIteminputToggleField.style.display = "block";

        } else {
          noResultIteminputToggleField.style.display = "none";
          inputToggleFieldList.style.display = "block";

        }
      });



      window.addEventListener("click", function (event) {
        if (!inputToggleField.contains(event.target)) {
          inputToggleFieldList.style.display = "none";

          // If "No result found" is clicked, show all items again
          if (noResultIteminputToggleField.style.display === "block") {
            const listItems = inputToggleFieldList.querySelectorAll("li");
            listItems.forEach(function (item) {
              item.style.display = "";
            });
            noResultIteminputToggleField.style.display = "none";
          }
        }
      });


      inputToggleField.addEventListener("inputtogglefield", handleInputToggleKeydown);



    })
    inputToggleFieldList.appendChild(item1);
    inputToggleFieldList.appendChild(item2);
    inputToggleFieldList.appendChild(item3);
    inputToggleFieldList.appendChild(item4);
    inputToggleFieldList.appendChild(item5);
    inputToggleFieldList.appendChild(item6);
    inputToggleFieldList.appendChild(noResultIteminputToggleField);


    // ----------------------------------INPUT TOGGLE FIELD LIST END----------------------------------------------------------------------------------------

    // Create an copy element for the section
    var iconcopyquestion = document.createElement("i");
    iconcopyquestion.className = "fa-regular fa-clone";
    iconcopyquestion.id = "iconcopyquestion";


    // Create an trash element for the section
    var icontrashquestion = document.createElement("i");
    icontrashquestion.className = "fa-regular fa-trash-can";
    icontrashquestion.id = "icontrashquestion";


    // questionsContainerDiv.appendChild(deleteIcon);  // Create a checkbox element for the section
    var checkBoxAssetQuestionDiv = document.createElement("div");
    var checkBoxAssetQuestion = document.createElement("input");
    checkBoxAssetQuestion.type = "checkbox";
    checkBoxAssetQuestion.id = "checkboxassetquestion";
    checkBoxAssetQuestion.name = "question_required";
    checkBoxAssetQuestion.onchange = (event)=>{questionSubmit(event)}

    checkBoxAssetQuestionDiv.id = "checkboxassetquestionDiv"

    var checkBoxAssetQuestionlabel = document.createElement("label");
    checkBoxAssetQuestionlabel.innerText = "Required";
    checkBoxAssetQuestionlabel.id = "checkboxassetquestionlabel"



    checkBoxAssetQuestionDiv.appendChild(checkBoxAssetQuestion)
    checkBoxAssetQuestionDiv.appendChild(checkBoxAssetQuestionlabel)

    // questionsContainerDiv.appendChild(deleteIcon);  // Create a checkbox element for the section
    var moveupAssetQuestion = document.createElement("input");
    moveupAssetQuestion.type = "button";
    moveupAssetQuestion.id = "moveupassetquestion";
    moveupAssetQuestion.value = "MOVEUP"
    // Add event listener to the "Move Up" button
    moveupAssetQuestion.addEventListener("click", function () {
      // Get the parent questionsContainerWholeDiv element
      var currentDiv = this.closest("#questionscontainerwholediv");

      // Get the previous sibling of the currentDiv
      var prevDiv = currentDiv.previousElementSibling;

      if (prevDiv !== null) {
        // Get the content elements of currentDiv and prevDiv
        var currentContent = currentDiv.querySelector("#questionscontainerdiv");
        var currentIIconField = currentDiv.querySelector("#iiconfieldid");

        var prevContent = prevDiv.querySelector("#questionscontainerdiv");
        var prevIIconField = prevDiv.querySelector("#iiconfieldid");

        // Swap the content elements between currentDiv and prevDiv
        currentDiv.removeChild(currentContent);
        currentDiv.removeChild(currentIIconField);

        prevDiv.removeChild(prevContent);
        prevDiv.removeChild(prevIIconField);

        currentDiv.appendChild(prevContent);
        currentDiv.appendChild(prevIIconField);

        prevDiv.appendChild(currentContent);
        prevDiv.appendChild(currentIIconField);

        // Update the "Move Up" and "Move Down" buttons visibility after swapping
        updateMoveButtonsQuestions();
      }
      updateSectionAndQuestionNumbering();
    });




    var movedownAssetQuestion = document.createElement("input");
    movedownAssetQuestion.type = "button";
    movedownAssetQuestion.id = "movedownassetquestion";
    movedownAssetQuestion.value = "MOVEDOWN"


    // Add event listener to the "Move Down" button
    movedownAssetQuestion.addEventListener("click", function () {
      // Get the parent questionsContainerWholeDiv element
      var currentDiv = this.closest("#questionscontainerwholediv");

      // Get the next sibling of the currentDiv
      var nextDiv = currentDiv.nextElementSibling;

      if (nextDiv !== null) {
        // Get the content elements of currentDiv and nextDiv
        var currentContent = currentDiv.querySelector("#questionscontainerdiv");
        var currentIIconField = currentDiv.querySelector("#iiconfieldid");

        var nextContent = nextDiv.querySelector("#questionscontainerdiv");
        var nextIIconField = nextDiv.querySelector("#iiconfieldid");

        // Swap the content elements between currentDiv and nextDiv
        currentDiv.removeChild(currentContent);
        currentDiv.removeChild(currentIIconField);

        nextDiv.removeChild(nextContent);
        nextDiv.removeChild(nextIIconField);

        currentDiv.appendChild(nextContent);
        currentDiv.appendChild(nextIIconField);

        nextDiv.appendChild(currentContent);
        nextDiv.appendChild(currentIIconField);

        // Update the "Move Up" and "Move Down" buttons visibility after swapping
        updateMoveButtonsQuestions();

      }
      updateSectionAndQuestionNumbering();

    });





    // questionsContainerDiv.appendChild(iconAngleUpquestion);
    questionsContainerDiv.appendChild(subSectionLabel);
    questionsContainerDiv.appendChild(inputField);
    questionsContainerDiv.appendChild(questionKeyField);
    questionsContainerDiv.appendChild(questionNumField);

    questionsContainerDiv.appendChild(iconIconquestion);
    questionsContainerDiv.appendChild(checkBoxAssetQuestionDiv);
    questionsContainerDiv.appendChild(inputToggleField);
    questionsContainerDiv.appendChild(moveupAssetQuestion);
    questionsContainerDiv.appendChild(movedownAssetQuestion);
    questionsContainerDiv.appendChild(iconcopyquestion);
    questionsContainerDiv.appendChild(icontrashquestion);


    questionsContainerWholeDiv.appendChild(questionsContainerDiv);
    questionsContainerWholeDiv.appendChild(inputToggleFieldList);
    questionsContainerWholeDiv.appendChild(iiconinputFieldDiv);
    questionsContainerWholeDiv.appendChild(iiconinputFieldCategoryList);










    // Function to update the "Move Up" and "Move Down" buttons visibility
    function updateMoveButtonsQuestions() {
      var questionDivs = questionsContainerAsset.querySelectorAll("#questionscontainerdiv");

      questionDivs.forEach(function (questionDiv, index) {
        var moveupAssetQuestion = questionDiv.querySelector("#moveupassetquestion");
        var movedownAssetQuestion = questionDiv.querySelector("#movedownassetquestion");
        var iconCopyQuestion = questionDiv.querySelector("#iconcopyquestion");
        var iconTrashQuestion = questionDiv.querySelector("#icontrashquestion");


        if (index === 0) {
          // First question, show only "Move Down" button
          moveupAssetQuestion.style.display = "none";
          movedownAssetQuestion.style.display = "block";
          questionDiv.style.gridTemplateColumns = "0.1fr 37.7% 5% 7.6% 0.7fr 0.4fr 0.3fr 0.3fr";
          iconCopyQuestion.style.left = "6px"
          iconTrashQuestion.style.left = "17px";

        } else if (index === questionDivs.length - 1) {
          // Last question, show only "Move Up" button
          moveupAssetQuestion.style.display = "block";
          movedownAssetQuestion.style.display = "none";
          questionDiv.style.gridTemplateColumns = "0.1fr 37.7% 5% 7.6% 0.7fr 0.4fr 0.3fr 0.3fr";
          iconTrashQuestion.style.left = "17px";
          iconCopyQuestion.style.left = "8px"


        } else {
          // Any other question, show both "Move Up" and "Move Down" buttons
          moveupAssetQuestion.style.display = "block";
          movedownAssetQuestion.style.display = "block";
          questionDiv.style.gridTemplateColumns = "0.1fr 37.7% 5% 7.6% 0.84fr 0.3fr 0.3fr 0.3fr 0.3fr";
          iconTrashQuestion.style.left = "0px";
          iconCopyQuestion.style.left = "-20px";


        }
      });
    }


    // Variable to keep track of the delete button state
    var deleteButtonClicked = false;

    // Add event listener to the "icontrashquestion" button
    icontrashquestion.onclick = function () {
      if (!deleteButtonClicked) {
        // First click: Change background color to red
        icontrashquestion.style.backgroundColor = "red";
        icontrashquestion.style.color = "white";
        deleteButtonClicked = true;
      } else {
        // Second click: Perform delete action
        // Get the parent questionsContainerWholeDiv element
        var parentDiv = this.closest("#questionscontainerwholediv");

        // Remove the parentDiv from its parent (questionsContainerAsset)
        if (parentDiv) {
          questionsContainerAsset.removeChild(parentDiv);
        }

        // Update the sub-section numbers for the remaining subsections
        var remainingDivs = questionsContainerAsset.querySelectorAll("#questionscontainerwholediv");
        for (var i = 0; i < remainingDivs.length; i++) {
          var subSectionLabel = remainingDivs[i].querySelector("#subSectionlabel");
          subSectionLabel.innerHTML = sectionNumber + "." + (i + 1);
        }

        updateMoveButtonsQuestions();

        // Reset the delete button state
        deleteButtonClicked = false;
        icontrashquestion.style.backgroundColor = "";
        icontrashquestion.style.color = "red";
      }

    };

    // Add a click event listener to the entire window
    window.addEventListener("click", function (event) {
      // Check if the clicked element is not the deleteAssetGlobe
      if (!event.target.matches("#icontrashquestion")) {
        // Reset the state of the delete button and remove the red background color
        deleteButtonClicked = false;
        icontrashquestion.style.backgroundColor = "";
        icontrashquestion.style.color = "red";
      }

    });

    questionsContainerAsset.appendChild(questionsContainerWholeDiv);

    // Update the "Move Up" and "Move Down" buttons visibility after adding a new question
    updateMoveButtonsQuestions();


  });








  // --------------------------Add question end------------------------------------------------------------------------------------




  // Add event listener to the "Move Up" button section
  moveupAssetBtn.addEventListener("click", function () {
    var currentOptionalDiv = optionalDiv;
    var previousOptionalDiv = currentOptionalDiv.previousElementSibling;

    if (previousOptionalDiv && currentOptionalDiv !== previousOptionalDiv) {
      // Swap the positions of the current and previous optional divs
      sectionsContainer.insertBefore(currentOptionalDiv, previousOptionalDiv);
      updateMoveButtons();
    }
    updateSectionAndQuestionNumbering();
  });

  // Add event listener to the "Move Down" button
  movedownAssetBtn.addEventListener("click", function () {
    var currentOptionalDiv = optionalDiv;
    var nextOptionalDiv = currentOptionalDiv.nextElementSibling;

    if (nextOptionalDiv && currentOptionalDiv !== nextOptionalDiv) {
      // Swap the positions of the current and next optional divs
      sectionsContainer.insertBefore(nextOptionalDiv, currentOptionalDiv);
      updateMoveButtons();
    }
    updateSectionAndQuestionNumbering();
  });



  // Append the buttons to the container

  buttonsContainer.appendChild(questionAssetBtn);
  buttonsContainer.appendChild(addQuestionBtn);
  buttonsContainer.appendChild(rulesAssetBtn);
  buttonsContainer.appendChild(addRuleBtnAsset);




  let deleteButtonClicked = false;

  deleteAssetGlobe.onclick = function () {
    if (deleteButtonClicked) {
      // Execute the delete functionality
      var optionalDivToDelete = deleteAssetGlobe.closest("#optionaldiv");
      var sectionsContainer = document.querySelector("#sectionsContainer");

      // Check if optionalDivToDelete is a child of sectionsContainer before removing it
      if (sectionsContainer.contains(optionalDivToDelete)) {
        // Remove the optionalDiv from the sectionsContainer
        sectionsContainer.removeChild(optionalDivToDelete);

        // Update the section and question numbering after removing the optionalDiv
      }

      // Reset the state of the delete button
      deleteButtonClicked = false;
    } else {
      // First click: Add the red background color
      deleteAssetGlobe.style.backgroundColor = "red";
      deleteAssetGlobe.style.color = "white";

      // Set the delete button state to true for the next click
      deleteButtonClicked = true;
    }


  };

  // Add a click event listener to the entire window
  window.addEventListener("click", function (event) {
    // Check if the clicked element is not the deleteAssetGlobe
    if (!event.target.matches("#deleteassetglobe")) {
      // Reset the state of the delete button and remove the red background color
      deleteButtonClicked = false;
      deleteAssetGlobe.style.backgroundColor = "";
      deleteAssetGlobe.style.color = "red";

    }
    updateSectionAndQuestionNumbering();

  });






  function updateSectionAndQuestionNumbering() {
    var sectionsContainer = document.querySelector("#sectionsContainer");
    if (!sectionsContainer) {
      return; // Return if sectionsContainer is not found
    }

    var optionalDivs = sectionsContainer.querySelectorAll("#optionaldiv");

    // Reset sectionassetCounter to 1 when all sections are deleted
    if (optionalDivs.length === 0) {
      sectionassetCounter = 1;
    }

    optionalDivs.forEach(function (optionalDiv, sectionIndex) {
      var sectionNumber = sectionIndex + 1;
      var label = optionalDiv.querySelector("#labelsectionasset");
      if (label) {
        label.innerText = "" + sectionNumber;
      }

      // Update the question numbering within each section
      var questionsContainerAsset = optionalDiv.querySelector("#questionscontainerasset");
      if (questionsContainerAsset) {
        questionsContainerAsset.dataset.sectionNumber = sectionNumber;

        var questionDivs = questionsContainerAsset.querySelectorAll("#questionscontainerdiv");
        questionDivs.forEach(function (questionDiv, questionIndex) {
          var subSectionLabel = questionDiv.querySelector("#subSectionlabel");
          if (subSectionLabel) {
            subSectionLabel.innerText = sectionNumber + "." + (questionIndex + 1);
          }
        });
      }

      // Update the rule numbering within each section
      var rulesContainerAsset = optionalDiv.querySelector("#rulescontainerasset");
      if (rulesContainerAsset) {
        rulesContainerAsset.dataset.sectionNumber = sectionNumber;

        var ruleDivs = rulesContainerAsset.querySelectorAll("#rulescontainerdiv");
        ruleDivs.forEach(function (ruleDiv, ruleIndex) {
          var subSectionLabelRules = ruleDiv.querySelector("#subSectionlabelrules");
          if (subSectionLabelRules) {
            subSectionLabelRules.innerText = "Rule" + sectionNumber + "." + (ruleIndex + 1);
          }
        });
      }



      var ruleConditionContainers = rulesContainerAsset.querySelectorAll(".rule-condition-container");

      ruleConditionContainers.forEach(function (ruleConditionContainer, index) {
        var conditionLabelAsset = ruleConditionContainer.querySelector("#conditionlabelasset");
        conditionLabelAsset.innerHTML = "Condition " + sectionNumber + "." + (index + 1);
        // You can similarly update other numbering here if needed
      });
      var mainActionContainerDiv = optionalDiv.querySelector("#mainactioncontainerdiv");
      if (mainActionContainerDiv) {
        var actionContainerDivs = mainActionContainerDiv.querySelectorAll(".actionglobeassetClass");
        actionContainerDivs.forEach(function (actionContainerDiv, actionIndex) {
          var actionContainerLabel = actionContainerDiv.querySelector("#actioncontainerlabel");
          if (actionContainerLabel) {
            actionContainerLabel.textContent = `Action ${sectionNumber}.${ruleNumber}.${actionIndex + 1}`;
          }
        });
      }


      // Update sectionassetCounter to the number of sections currently displayed
      sectionassetCounter = optionalDivs.length + 1;

    });

    updateMoveButtons();
  }









  const sectionsContainer = document.querySelector("#sectionsContainer");
  // Append the input elements to the section

  sectionGlobeAsset.appendChild(iconAngleUpasset);
  sectionGlobeAsset.appendChild(labelassetglobe);
  sectionGlobeAsset.appendChild(inputhiddenassetkey);
  sectionGlobeAsset.appendChild(inputhiddenassetglobe);
  sectionGlobeAsset.appendChild(sectionErrorDiv);
  sectionGlobeAsset.appendChild(moveupAssetBtn);
  sectionGlobeAsset.appendChild(movedownAssetBtn);
  sectionGlobeAsset.appendChild(checkBoxAssetSectionDiv);


  sectionGlobeAsset.appendChild(deleteAssetGlobe);





  // Create the optional div and set its id
  var optionalDiv = document.createElement("div");
  optionalDiv.className = "optionalsection newoptional"+sectionassetCounter;
  optionalDiv.id = "optionaldiv";

  // Append the elements to the optional div
  optionalDiv.appendChild(sectionGlobeAsset);
  optionalDiv.appendChild(buttonsContainer);
  optionalDiv.appendChild(questionsContainerAsset);
  optionalDiv.appendChild(addQuestionBtn);
  optionalDiv.appendChild(rulesContainerAsset);
  // optionalDiv.appendChild(mainActionContainerDiv);




  optionalDiv.appendChild(addRuleBtnAsset);



  // Append the optional div to the sectionsContainer
  sectionsContainer.appendChild(optionalDiv);

  // Increment the sectionassetCounter when adding a new section
  sectionassetCounter++;
  // Show or hide the "Move Up" and "Move Down" buttons based on section positions
  updateMoveButtons();
  updateSectionAndQuestionNumbering();

}
function updateMoveButtons() {
  var optionalDivs = document.querySelectorAll("#optionaldiv");
  optionalDivs.forEach(function (div, index) {
    var moveupBtn = div.querySelector("#moveupassetbtn");
    var movedownBtn = div.querySelector("#movedownassetbtn");
    var sectionGlobeAsset = div.querySelector("#sectionglobeasset");
    var checkBoxAssetSectionDiv = div.querySelector("#checkboxassetsectiondiv");
    var deleteAssetGlobe = div.querySelector("#deleteassetglobe");

    if (index === 0) {
      // First section, hide "Move Up" button
      moveupBtn.style.display = "none";
      sectionGlobeAsset.style.gridTemplateColumns = "0.1fr 0.1fr 2fr 0.3fr 0.3fr 0.3fr"
      checkBoxAssetSectionDiv.style.left = "18px";
      checkBoxAssetSectionDiv.style.width = "62%";
      deleteAssetGlobe.style.left = "10px";
    } else {
      // Not the first section, show "Move Up" button
      moveupBtn.style.display = "block";
      sectionGlobeAsset.style.gridTemplateColumns = " 0.1fr 0.1fr 2fr 0.3fr 0.3fr 0.3fr 0.3fr"
      checkBoxAssetSectionDiv.style.left = "1px";
      deleteAssetGlobe.style.left = "1px";
    }

    if (index === optionalDivs.length - 1) {
      // Last section, hide "Move Down" button
      movedownBtn.style.display = "none";
      sectionGlobeAsset.style.gridTemplateColumns = "0.1fr 0.1fr 2fr 0.3fr 0.3fr 0.3fr"
      checkBoxAssetSectionDiv.style.left = "18px";
      checkBoxAssetSectionDiv.style.width = "62%";
      deleteAssetGlobe.style.left = "10px";
    } else {
      // Not the last section, show "Move Down" button
      movedownBtn.style.display = "block";
    }
  });

}
    

  return (
    <div>
      <div id="sectionsContainer"></div>
      <button id="addSectionAsset" onClick={addSection}>+ Add Section</button>
    </div>
  )
}


export default AddSection