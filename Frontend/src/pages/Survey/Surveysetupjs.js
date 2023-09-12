// import { event } from "jquery";

// export function addsec() {
// const mainSection = document.querySelector("#main-section");
// const addSectionBtn = document.querySelector("#add-section-btn");
// const sectionsContainer = document.querySelector("#sections-container");


// let sectionCount = 0;
// let questionCounts = [];
// let idCounter = 0;
// let addQuestionIncrement = 0;
// let addRuleIncrement = 0;
// function updateSectionNumbers() {
//   const sections = sectionsContainer.querySelectorAll(".section");
//   for (let i = 0; i < sections.length; i++) {
//     const section = sections[i];
//     section.querySelector("h3").innerHTML = `${i + 1}`;
//   }
// }

// function updateQuestionNumbers(questionsContainer, sectionIndex) {
//   const questions = questionsContainer.querySelectorAll(".question");
//   for (let i = 0; i < questions.length; i++) {
//     const question = questions[i];
//     question.querySelector("span").innerText = `${sectionIndex + 1}.${i + 1}`;
//   }
// }

// addSectionBtn.addEventListener("click", () => {
//   sectionCount++;
//   if (!questionCounts[sectionCount - 1]) {
//     questionCounts[sectionCount - 1] = 0;
//   }

//   // let currentId = 1;

//   const newSection = document.createElement("div");
//   newSection.classList.add("section");
//   const newSectionDiv = document.createElement("div");
//   newSectionDiv.classList.add("sectionDiv");
//   const sectionIcon = document.createElement("p");
//   sectionIcon.id = "sectionIcon";
//   sectionIcon.innerHTML = `<i class = "fa fa-angle-up"></i>`;
//   const sectionTitle = document.createElement("h3");
//   sectionTitle.setAttribute("id", "section-number");
//   sectionTitle.innerHTML = `${sectionCount}`;
//   const questionsContainer = document.createElement("div");
//   questionsContainer.classList.add("questions-container");

//   // Add input field, checkbox, and delete icon to section
//   const inputField = document.createElement("input");
//   inputField.setAttribute("id", "inputField");
//   inputField.type = "text";
//   inputField.placeholder = "Enter section title";

//   const requiredCheckbox = document.createElement("div");

//   requiredCheckbox.innerHTML = `<input id="hidecheckbox" type="checkbox" />
//       <span id="hlabel">Hide</span>`;

//   const deleteIcon = document.createElement("button");
//   deleteIcon.classList.add("deletesection");
//   deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>';



//   let isDeleteIconHighlighted = false;



//   deleteIcon.addEventListener("click", () => {
//     if (!isDeleteIconHighlighted) {
//       deleteIcon.classList.add("highlight");
//       isDeleteIconHighlighted = true;
//     } else {
//       const sectionIndex = Array.prototype.indexOf.call(sectionsContainer.children, newSection);
//       newSection.remove();
//       questionCounts.splice(sectionIndex, 1);
//       updateSectionNumbers();
//       for (let i = sectionIndex; i < sectionsContainer.children.length; i++) {
//         const section = sectionsContainer.children[i];
//         const questionsContainer = section.querySelector(".questions-container");
//         updateQuestionNumbers(questionsContainer, i);
//       }
//       sectionCount--;
//     }
//   });




//   deleteIcon.addEventListener("dblclick", () => {
//     const sectionIndex = Array.prototype.indexOf.call(sectionsContainer.children, newSection);
//     newSection.remove();
//     questionCounts.splice(sectionIndex, 1);
//   });

//   document.addEventListener("click", (event) => {
//     if (!deleteIcon.contains(event.target)) {
//       deleteIcon.classList.remove("highlight");
//       isDeleteIconHighlighted = false;
//     }
//   });

//   // ------------------------Move Up And Move Down--------------------------------
//   const sectionUpBtn = document.createElement("span");
//   sectionUpBtn.setAttribute("id", "section-up-btn");
//   sectionUpBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
//   sectionUpBtn.addEventListener("click", () => {
//     const prevSection = newSection.previousSibling;
//     if (prevSection) {
//       sectionsContainer.insertBefore(newSection, prevSection);
//       updateSectionNumbers();
//       updateQuestionNumbers();
//     }

//   });

//   const sectionDownBtn = document.createElement("span");
//   sectionDownBtn.setAttribute("id", "section-down-btn");
//   sectionDownBtn.innerHTML = `<i class="fa-solid fa-arrow-down"></i>`;
//   sectionDownBtn.addEventListener("click", () => {
//     const nextSection = newSection.nextSibling;
//     if (nextSection) {
//       sectionsContainer.insertBefore(nextSection, newSection);
//       updateSectionNumbers();
//       updateQuestionNumbers();
//     }

//   });

//   function updateSectionNumbers() {
//     const sections = sectionsContainer.querySelectorAll(".section");
//     for (let i = 0; i < sections.length; i++) {
//       const section = sections[i];
//       section.querySelector("h3").innerHTML = `${i + 1}`;
//     }

//   }

//   function updateQuestionNumbers() {
//     const sections = sectionsContainer.querySelectorAll(".section");
//     for (let i = 0; i < sections.length; i++) {
//       const section = sections[i];
//       const questionsContainer = section.querySelector(".questions-container");
//       const questions = questionsContainer.querySelectorAll(".question");
//       for (let j = 0; j < questions.length; j++) {
//         const question = questions[j];
//         question.querySelector("span").innerText = `${i + 1}.${j + 1}`;
//       }
//     }

//   }

//   updateSectionNumbers();
//   updateQuestionNumbers();

//   // -----------------------------------------------


//   newSectionDiv.appendChild(sectionIcon);
//   newSectionDiv.appendChild(sectionTitle);
//   newSectionDiv.appendChild(inputField);
//   newSectionDiv.appendChild(sectionUpBtn);
//   newSectionDiv.appendChild(sectionDownBtn);
//   newSectionDiv.appendChild(requiredCheckbox);
//   newSectionDiv.appendChild(deleteIcon);
//   // newSectionDiv.appendChild(sectionTitle);
//   newSection.appendChild(newSectionDiv);
//   sectionsContainer.appendChild(newSection);

//   idCounter++;
//   const questionRule = document.createElement("div");
//   const elementId = `questionRule${idCounter}`;
//   questionRule.id = elementId;

//   const qbtn = document.createElement("div");
//   qbtn.setAttribute("id", "qbtn");

//   const questionBtn = document.createElement("button");
//   questionBtn.setAttribute("id", "question");
//   questionBtn.innerText = "QUESTION";
//   questionBtn.style.background = "#216c98";
//   questionBtn.style.color = "white";

//   const ruleBtn = document.createElement("button");
//   ruleBtn.setAttribute("id", "rule");
//   ruleBtn.innerText = "RULES";
//   ruleBtn.innerText = "RULES";
//   ruleBtn.style.color = "black";

//   // js for toggle questions and rules
//   // const rules = document.getElementById('rule');
//   // const qtn = document.getElementById('question');

//   questionBtn.addEventListener("click", function () {
//     questionBtn.style.background = "#216c98";
//     questionBtn.style.color = "white";

//     ruleBtn.style.background = "white";
//     ruleBtn.style.color = "black";

//     addQuestionBtn.style.display = "block";
//     addRuleBtn.style.display = "none";
//     questionsContainer.style.display = "block";
//   });

//   ruleBtn.addEventListener("click", function () {
//     ruleBtn.style.background = "#216c98";
//     ruleBtn.style.color = "white";


//     questionBtn.style.background = "white";
//     questionBtn.style.color = "black";


//     addRuleBtn.style.display = "block";
//     addQuestionBtn.style.display = "none";
//     questionsContainer.style.display = "none";

//   })

//   addQuestionIncrement++;
//   const addQuestionBtn = document.createElement("button");
//   addQuestionBtn.setAttribute("class", "addQuestion");
//   const addQuestionId = `addQuestion${addQuestionIncrement}`;
//   addQuestionBtn.id = addQuestionId;
//   addQuestionBtn.innerText = "+ADD QUESTION";

//   addRuleIncrement++;
//   const addRuleBtn = document.createElement("button");
//   addRuleBtn.setAttribute("class", "addRule");
//   const addRuleId = `addRule${addRuleIncrement}`;
//   addRuleBtn.id = addRuleId;
//   addRuleBtn.innerText = "+ADD RULE";

//   // ....................Question and Rule Hidden JS........................

//   function sectionHideShow() {
//     const element = document.getElementById(elementId);
//     const addId = document.getElementById(addQuestionId);
//     const ruleId = document.getElementById(addRuleId);


//     if (element.style.display === 'none' && addId.style.display === "none" && ruleId.style.display === "none") {
//       element.style.display = 'block';
//       addId.style.display = 'block';
//       ruleId.style.display = 'none';
//       sectionIcon.innerHTML = `<i class="fa fa-angle-up"> </i>`;
//     } else {
//       element.style.display = 'none';
//       addId.style.display = 'none';
//       ruleId.style.display = 'none';
//       sectionIcon.innerHTML = `<i class="fa fa-angle-down"> </i>`;
//     }
//   }

//   sectionTitle.addEventListener("click", sectionHideShow);
//   sectionIcon.addEventListener("click", sectionHideShow);


//   newSection.appendChild(questionRule);
//   questionRule.appendChild(qbtn);
//   qbtn.appendChild(questionBtn);
//   qbtn.appendChild(ruleBtn);
//   questionRule.appendChild(questionsContainer)
//   newSection.appendChild(addQuestionBtn);
//   newSection.appendChild(addRuleBtn);

// });







// sectionsContainer.addEventListener("click", (event) => {
//   if (
//     event.target.tagName === "BUTTON" &&
//     event.target.innerText === "+ADD QUESTION"
//   ) {
//     // Add question logic
//     const section = event.target.parentNode;
//     const sectionIndex = Array.prototype.indexOf.call(
//       sectionsContainer.children,
//       section
//     );
//     const questionsContainer = section.querySelector(".questions-container");
//     let questionCount = questionCounts[sectionIndex];
//     if (!questionCount) {
//       questionCount = 0;
//     }
//     questionCounts[sectionIndex] = questionCount + 1;
//     // updateQuestionNumbers(questionsContainer, sectionIndex);

//     const newQuestion = document.createElement("div");
//   newQuestion.classList.add("question");
//       newQuestion.innerHTML = `
//        <div class="arrow-down"></div>
//        <span class="subSection question-number">${sectionIndex + 1}.${questionCount + 1}</span>
//        <input type="text" placeholder="Enter your question" />
//        <button class="infoicon-btn"><i id="infoqsticon" class="fa fa-info-circle"></i></button>
//        <div id="questionlabel">
//         <input id="checkboxquestion" type="checkbox" />
//         <span id="required">Required</span>
//        </div>
//        <select id="questionSelect" class="questionSelect custom-form">
//         <option value="toggle">toggle</option>
//         <option value="childLookup">Child lookup</option>
//         <option value="countries">Countries</option>
//         <option value="yes/no">Yes/No</option>
//         <option value="customform">Custom form</option>
//         <option value="date">date</option>
//         <option value="textarea">textarea</option>
//         <option value="multitext">multitext</option>
//        </select>
//        <button class="copyicon-btn"><i class="fa fa-clone"></i></button>
//        <button class="delete-btn"><i class="far fa-trash-alt" id="qDel"></i></button>
//       `;
 
//       const informationSection = document.createElement('div');
//       informationSection.classList.add('information-section');
//       informationSection.setAttribute("id","inf");
//       informationSection.style.display = 'none';
//       informationSection.innerHTML = `
//       <div> <input id="infoinput1" type="text" placeholder="" /><label Id="infonote">NOTE</label></div>
//       <div><input id="infoinput2" type="text" placeholder="" /><label Id="infocategory">CATEGORY</label></div>
//       <div> <input id="infoinput3" type="text" placeholder="" /><label Id="infoid">EXTERNAL REFERENCE ID</label></div>
//       `;
     
//       const ifq = newQuestion.querySelector('.infoicon-btn');
//       newQuestion.querySelector('.infoicon-btn').addEventListener('click', function () {
//        if (informationSection.style.display === 'none') {
//         informationSection.style.display = 'grid';
//         informationSection.style.gridTemplateColumns='1fr 1fr 1fr 1fr';
//         ifq.style.color = 'green';
//        } else {
//         informationSection.style.display = 'none';
//         informationSection.style.gridTemplateColumns='2fr 1fr 1fr';
//         ifq.style.color = '#216c98';
//        }
//       });
//       newQuestion.querySelector('#questionSelect').addEventListener('change', function() {
//        const selectedOption = this.value;
//        const additionalInput = informationSection.querySelector('.additional-input');
//        if (selectedOption === 'childLookup') {
//         informationSection.style.gridTemplateColumns='1fr 1fr 1fr 1fr';
//         if (additionalInput) {
//          additionalInput.style.display = 'grid';
//          informationSection.style.gridTemplateColumns='1fr 1fr 1fr 1fr';
         
//         } else {
//          const newAdditionalInput = document.createElement('div');
//          newAdditionalInput.classList.add('additional-input');
//          newAdditionalInput.innerHTML = `
//         <div><input id="infoinput4" type="text" placeholder="" /><label Id="infoid">PARENT LOOKUP</label></div>
//          `;
//          informationSection.appendChild(newAdditionalInput);
//         }
//        } else {
//         if (additionalInput) {
//          additionalInput.style.display = 'none';
//          informationSection.style.gridTemplateColumns='2fr 1fr 1fr';
//         }
//        }
//       });
//       questionsContainer.appendChild(newQuestion);
//      questionsContainer.appendChild(informationSection);
//     // ----------------------------------------

//     //  questionsContainer.appendChild(newCustomesection);

//     // ---------------------------------------
//     const questionNumber = newQuestion.querySelector(".question-number");
//     const select = newQuestion.querySelector(".questionSelect.custom-form");
//     const arrowDown = newQuestion.querySelector(".arrow-down");




//     arrowDown.addEventListener("click", () => {
//       arrowDown.classList.toggle("show-arrow-up");
//       const currentQuestion = arrowDown.parentNode;
//       const checkboxDiv = currentQuestion.nextElementSibling;

//       if (arrowDown.classList.contains("show-arrow-up")) {
//         // Check if the checkbox div already exists
//         if (!checkboxDiv || !checkboxDiv.classList.contains("checkbox-container")) {
//           // Create the div with the checkboxes
//           const checkboxDiv = document.createElement("div");
//           checkboxDiv.setAttribute("id", "custom");
//           checkboxDiv.classList.add("checkbox-container");
//           checkboxDiv.innerHTML = `
//     <div class="grid-container">
//     <p id="customp">DEFINE CUSTOME FORM</p>
//     <span id="spancheck1"><input type="checkbox" id="checkbox1"  value="check1" />LAYOUT</span>
//     <span id="spancheck1"><input type="checkbox" id="checkbox1"  value="check2" />POPUP</span>
//     <span id="spancheck1"><input type="checkbox" id="checkbox1"  value="check3" />&nbspWIDE&nbsp</span>
//     <span id="spancheck1"><input type="checkbox" id="checkbox1"  value="check4" />&nbspFILES&nbsp</span>
//   </div>
//  <div class="instruction-container">
//  <span class="arrow-up"><i class="fa fa-angle-up"> </i></span>
//  <p class="instruction">INSTRUCTIONS</P>
//  </div>
//  <div class="text-container">
//  <textarea id="textbox" rows="1" cols=""></textarea>
//  </div>

//  <div id="custom-container"></div>
//  <button id="addcustom-container">+ Add Section</button>
//   `
//             ;
//           //Custom form's add section
//           // initialize section counter
//           let sectionCounter = 1;

//           // add click event listener to the add section button

//           const addSectionButton = checkboxDiv.querySelector('#addcustom-container');
//           addSectionButton.addEventListener('click', () => {
//             const sectionDiv = document.createElement('div');
//             sectionDiv.classList.add('customsection-container');

//             // add arrowup icon
//             const upArrowIcon = document.createElement('i');
//             upArrowIcon.setAttribute("id", "upArrowIcon");
//             upArrowIcon.classList.add('fa', 'fa-angle-down');
//             upArrowIcon.addEventListener('click', () => {
//             //   upArrowIcontoggle.classList.toggle('fa-angle-down');
//             //   upArrowIcontoggle.classList.toggle('fa-angle-up');
//             });
//             sectionDiv.appendChild(upArrowIcon);
//             //  -----------------------------------------------------
//             const customsubsection = document.getElementById("custom-container")

//             // add subsection when up arrow icon is clicked
//             const addSubsection = () => {
//               const subsectionDiv = document.createElement('div');
//               subsectionDiv.classList.add('subsection-container');

//               // add "Add Row" button for subsection
//               const addRowButton = document.createElement('button');
//               addRowButton.setAttribute("id", "addrow");
//               addRowButton.textContent = '+ Add Row';

//               addRowButton.addEventListener('click', () => {
//                 const rowContainer = document.createElement('div');
//                 rowContainer.classList.add('row-container');

//                 // add section number for row
//                 const rowNumber = document.createElement('p');
//                 rowNumber.classList.add('row-number');

//                 // update row number for all rows in the subsection
//                 const rows = subsectionDiv.querySelectorAll('.row-container');

//                 const currentRowCount = rows.length;
//                 for (let i = 0; i < currentRowCount; i++) {
//                   const currentRowNumber = i + 1;
//                   const currentRow = rows[i];
//                   currentRow.querySelector('.row-number').textContent = `${sectionIndex + 1}.${questionCount + 1}.${currentSectionCount + 1}.${currentRowNumber}`;
//                 }

//                 rowNumber.textContent = `${sectionIndex + 1}.${questionCount + 1}.${currentSectionCount + 1}.${currentRowCount + 1}`;
//                 rowContainer.appendChild(rowNumber);

//                 // add input field for row
//                 const inputField = document.createElement('input');
//                 inputField.setAttribute("id", "subsectionInput")
//                 inputField.setAttribute('type', 'text');
//                 inputField.setAttribute('placeholder', 'Enter row title');
//                 rowContainer.appendChild(inputField);

//                 // add information icon
//                 const subinfoicon = document.createElement('i');
//                 subinfoicon.setAttribute("id", "subInfoIcon");
//                 subinfoicon.classList.add('fa', 'fa-info-circle');
//                 rowContainer.appendChild(subinfoicon);
//                 // Get the element to show/hide
//                 // Add click event listener to the information icon
//                 subinfoicon.addEventListener('click', function () {
//                   if (maininfo.style.display === 'block') {
//                     maininfo.style.display = 'none';
//                     subinfoicon.style.color = '#216c98';
//                   } else {
//                     maininfo.style.display = 'block';
//                     subinfoicon.style.color = 'green';
//                   }
//                 });
//                 const maininfo = document.createElement('div');
//                 maininfo.setAttribute("id", "maininfoicon")
//                 const infoSection = document.createElement('div');
//                 infoSection.classList.add('info-section');

//                 // ------i-----
//                 const infofirstinput = document.createElement('div');
//                 infofirstinput.classList.add('info-infofirstinput');
//                 const firstInput = document.createElement('input');
//                 firstInput.setAttribute('type', 'text');
//                 firstInput.setAttribute('placeholder', '');
//                 firstInput.setAttribute('id', 'firstInput');
//                 const noteLabel = document.createElement('label');
//                 noteLabel.id = 'notelabel';
//                 noteLabel.innerText = 'NOTE';
//                 infoSection.appendChild(infofirstinput);
//                 infofirstinput.appendChild(firstInput);
//                 infofirstinput.appendChild(noteLabel);

//                 const infosecondinput = document.createElement('div');
//                 infosecondinput.classList.add('info-infosecondinput');
//                 const secondinput = document.createElement('input');
//                 secondinput.setAttribute('type', 'text');
//                 secondinput.setAttribute('placeholder', '');
//                 secondinput.setAttribute('id', 'secondinput');
//                 const catlabel = document.createElement('label');
//                 catlabel.id = 'catlabel';
//                 catlabel.innerText = 'CATEGORY 1';
//                 infoSection.appendChild(infosecondinput);
//                 infosecondinput.appendChild(secondinput);
//                 infosecondinput.appendChild(catlabel);


//                 const infolastinput = document.createElement('div');
//                 infolastinput.classList.add('info-infolastinput');
//                 const lastInput = document.createElement('input');
//                 lastInput.setAttribute('type', 'text');
//                 lastInput.setAttribute('placeholder', '');
//                 lastInput.setAttribute('id', 'lastInput');
//                 const externallabel = document.createElement('label');
//                 externallabel.id = 'externallabel';
//                 externallabel.innerText = 'EXTERNAL REFERENCE ID';
//                 infoSection.appendChild(infolastinput);
//                 infolastinput.appendChild(lastInput);
//                 infolastinput.appendChild(externallabel);

//                 // -----i----
//                 // add checkboxes for row
//                 const checkboxContainer = document.createElement('div');
//                 checkboxContainer.classList.add('checkbox-container');
//                 checkboxContainer.innerHTML = `
//     <input id="subSectioncheckBox" type="checkbox"  /><label id="subsectionlabel">Required</label>
//   `;
//                 rowContainer.appendChild(checkboxContainer);

//                 const selectContainer = document.createElement('div');
//                 selectContainer.classList.add('select-container');
//                 selectContainer.innerHTML = `
//   <select id="subquestionContainer">
//   <option value="option1">TOGGLE</option>
//   <option value="option2">Yes/No</option>
//   <option value="option3">date</option>
//   <option value="option4">textarea</option>
//   <option value="option5">multitext</option>
// </select>
//   `;
//                 rowContainer.appendChild(selectContainer);


//                 // add delete icon for row
//                 const deleteIconSub = document.createElement('i');
//                 deleteIconSub.setAttribute("id", "subDeleteIcon")
//                 deleteIconSub.classList.add('far', 'fa-trash-alt');
//                 deleteIconSub.addEventListener('click', () => {
//                   if (deleteIconSub.classList.contains('highlightcustomsub')) {
//                     // remove element if already highlighted
//                     rowContainer.remove();
//                     maininfo.remove();
//                   } else {
//                     // highlight element on first click
//                     deleteIconSub.classList.add('highlightcustomsub');
//                   }
//                   // listen for click event on document to remove highlight when clicking outside
//                   document.addEventListener('click', (event) => {
//                     const isDeleteIcon = event.target === deleteIconSub || deleteIconSub.contains(event.target);
//                     if (!isDeleteIcon) {
//                       deleteIconSub.classList.remove('highlightcustomsub');
//                     }
//                   });
//                   // update row number for all remaining rows in the subsection
//                   const remainingRows = subsectionDiv.querySelectorAll('.row-container');
//                   const remainingRowCount = remainingRows.length;
//                   for (let i = 0; i < remainingRowCount; i++) {
//                     const currentRowNumber = i + 1;
//                     const currentRow = remainingRows[i];
//                     currentRow.querySelector('.row-number').textContent = `${sectionIndex + 1}.${questionCount + 1}.${currentSectionCount + 1}.${currentRowNumber}`;
//                   }
//                 });
//                 rowContainer.appendChild(deleteIconSub);


//                 // append row to subsection
//                 subsectionDiv.appendChild(rowContainer);

//                 // insert the add row button after the row container
//                 subsectionDiv.insertBefore(addRowButton, rowContainer.nextSibling);
//                 subsectionDiv.appendChild(maininfo);
//                 maininfo.appendChild(infoSection);
//               });


//               // append subsection to section
//               customsubsection.appendChild(subsectionDiv);
//               subsectionDiv.appendChild(addRowButton);


//             };

//             // add click event listener to up arrow icon to toggle display of subsection and add subsection
//             let subsectionAdded = false;
//             upArrowIcon.addEventListener('click', () => {
//               const subsectionContainer = sectionDiv.querySelector('.subsection-container');
//               if (subsectionContainer) {
//                 subsectionContainer.style.display = subsectionContainer.style.display === 'block' ? 'none' : 'block';
//               } else {
//                 if (!subsectionAdded) {
//                   addSubsection();
//                   subsectionAdded = true;
//                 }
//               }
//             });

//             // ------------------------------------------------------
//             // add section number custom section
//             const sectionNumber = document.createElement('p');
//             sectionNumber.setAttribute("id", "customsectionnumber")
//             sectionNumber.classList.add('section-number');
//             const currentSectionCount = checkboxDiv.querySelectorAll('.customsection-container').length;
//             sectionNumber.textContent = `${sectionIndex + 1}.${questionCount + 1}.${currentSectionCount + 1}`;
//             sectionDiv.appendChild(sectionNumber);


//             // add input field custom section
//             const inputField = document.createElement('input');
//             inputField.setAttribute('type', 'text');
//             inputField.setAttribute("id", "custominput")
//             inputField.setAttribute('placeholder', 'Enter section title');
//             sectionDiv.appendChild(inputField);


//             // add checkboxes in custom section
//             const checkboxContainer = document.createElement('div');
//             checkboxContainer.classList.add('checkbox-container');
//             checkboxContainer.innerHTML = `
//   <div id="checkcustom"><input type="checkbox" id="customcheckbox" value="" /><label id="optionlabel">OPTIONS</label></div>
//  `;

//             sectionDiv.appendChild(checkboxContainer);

//             // add clone in custom section
//             const iconContainer = document.createElement('div');
//             iconContainer.classList.add('icon-container');
//             const cloneIcon = document.createElement('i');
//             cloneIcon.classList.add('fa', 'fa-clone');
//             iconContainer.appendChild(cloneIcon);

//             // add  delete icons in custom section
//             const icondelete = document.createElement('div');
//             icondelete.classList.add('icondelete-container');
//             const deleteIcon = document.createElement('i');
//             deleteIcon.classList.add('far', 'fa-trash-alt');
//             deleteIcon.id = "cDel";
//             icondelete.appendChild(deleteIcon)
//             sectionDiv.appendChild(iconContainer);
//             sectionDiv.appendChild(icondelete);

//             // add click event listener to the clone icon custom section
//             cloneIcon.addEventListener('click', () => {
//               // const clonedSection = sectionDiv.cloneNode(true);
//               sectionDiv.parentNode.insertBefore( sectionDiv.nextSibling);
//               updateSectionNumbers();
//             });

//             // add click event listener to the delete icon in custom section
//             document.addEventListener("click", (event) => {
//               const qDel = document.querySelectorAll("#cDel");
//               qDel.forEach((i) => {
//                 if (i !== event.target) {
//                   i.classList.remove("highlightcustom");
//                 }
//               });
//             });
//             // add click event listener to the delete icon

//             deleteIcon.addEventListener('click', () => {
//               if (!deleteIcon.classList.contains('highlightcustom')) {
//                 deleteIcon.classList.add('highlightcustom');
//               } else {
//                 const parentDiv = sectionDiv.parentNode;
//                 const siblingDiv = sectionDiv.nextSibling;
//                 parentDiv.removeChild(sectionDiv);
//                 if (siblingDiv.classList.contains('subsection-container')) {
//                   parentDiv.removeChild(siblingDiv);
//                 }
//                 updateSectionNumbers();
//               }

//             });



//             // add section div to the custom container

//             const customContainer = checkboxDiv.querySelector('#custom-container');
//             customContainer.appendChild(sectionDiv);
//             sectionCounter++; // increment section counter

//           });

//           //custom sections update section numbers function-----

//           function updateSectionNumbers() {
//             const sectionContainers = checkboxDiv.querySelectorAll('.customsection-container');
//             sectionContainers.forEach((section, index) => {
//               const sectionNumber = section.querySelector('.section-number');
//               sectionNumber.textContent = `${sectionIndex + 1}.${questionCount + 1}.${index + 1}`;
//             });

//           }

//           // add checkboxDiv to the document body
//           document.body.appendChild(checkboxDiv);


//           const arrowUp = checkboxDiv.querySelector('.arrow-up');
//           const textContainer = checkboxDiv.querySelector('.text-container');
//           textContainer.classList.add("hidden");
//           arrowUp.addEventListener('click', () => {
//             textContainer.classList.toggle('hidden');
//             arrowUp.querySelector('i').classList.toggle('fa-angle-down');
//             arrowUp.querySelector('i').classList.toggle('fa-angle-up');

//           });

//           //  add ckeckboxDiv to the document body
//           document.body.appendChild(checkboxDiv);

//           // Insert the div after the current question
//           currentQuestion.insertAdjacentElement("afterend", checkboxDiv);
//         } else {
//           // Show the checkbox div if it already exists
//           checkboxDiv.style.display = "block";
//           checkboxDiv.style.display = "grid";
//           checkboxDiv.style.display.gridTemplateColumns = "5fr 0.4fr 0.4fr 0.4fr 0.4fr"
//         }
//       } else {
//         // Hide the checkbox div
//         if (checkboxDiv && checkboxDiv.classList.contains("checkbox-container")) {
//           checkboxDiv.style.display = "none";
//           updateQuestionNumbers(questionsContainer, sectionIndex);
//         }
//       }
//     });


//     // code for select when custom form is selected
//     select.addEventListener("change", (event) => {
//       if (event.target.value === "customform") {
//         questionNumber.classList.add("show-arrow-down");
//         arrowDown.style.display = "block";
//         newQuestion.style.display = "grid";
//         newQuestion.style.gridTemplateColumns = " 0.1fr 0.5fr 5fr 1fr 1fr 4fr 0.5fr 1.1fr 0.35fr 0.35fr";


//       } else {
//         questionNumber.classList.remove("show-arrow-down");
//         arrowDown.style.display = "none";
//         newQuestion.style.display = "grid";
//         newQuestion.style.gridTemplateColumns = " 0.5fr 5fr 1fr 1fr 4fr 0.5fr 1.1fr 0.35fr 0.35fr";
//         const checkboxDiv = newQuestion.nextElementSibling;
//         if (checkboxDiv && checkboxDiv.classList.contains("checkbox-container")) {
//           checkboxDiv.style.display = "none";
//         }
//         // Show arrow down
//         arrowDown.classList.remove("show-arrow-up");
//       }
//     });
//     arrowDown.style.display = "none";

//     // ---------moveup and movedown in question section---------------

//     const questionUpBtn = document.createElement("span");
//     questionUpBtn.setAttribute("id", "section-up-btn");
//     questionUpBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
//     questionUpBtn.addEventListener("click", () => {
//       const prevQuestion = newQuestion.previousSibling;
//       if (prevQuestion) {
//         questionsContainer.insertBefore(newQuestion, prevQuestion);
//         updateQuestionNumbers();
//       }
//     });

//     const questionDownBtn = document.createElement("span");
//     questionDownBtn.setAttribute("id", "section-down-btn");
//     questionDownBtn.innerHTML = `<i class="fa-solid fa-arrow-down"></i>`;
//     questionDownBtn.addEventListener("click", () => {
//       const nextQuestion = newQuestion.nextSibling;
//       if (nextQuestion) {
//         questionsContainer.insertBefore(nextQuestion, newQuestion);

//         updateQuestionNumbers();
//       }
//     });

//     function updateSectionNumbers() {
//       const sections = sectionsContainer.querySelectorAll(".section");
//       for (let i = 0; i < sections.length; i++) {
//         const section = sections[i];
//         section.querySelector("h3").innerHTML = `${i + 1}`;
//       }
//     }

//     function updateQuestionNumbers() {
//       const sections = sectionsContainer.querySelectorAll(".section");
//       for (let i = 0; i < sections.length; i++) {
//         const section = sections[i];
//         const questionsContainer = section.querySelector(".questions-container");
//         const questions = questionsContainer.querySelectorAll(".question");
//         for (let j = 0; j < questions.length; j++) {
//           const question = questions[j];
//           question.querySelector("span").innerText = `${i + 1}.${j + 1}`;
//         }
//       }
//     }

//     updateSectionNumbers();
//     updateQuestionNumbers();

//     // -------------------------------------------------------------
//     newQuestion.appendChild(questionUpBtn);
//     newQuestion.appendChild(questionDownBtn);

//     // questionsContainer.appendChild(newQuestion);
  

//     document.addEventListener("click", (event) => {
//       const qDel = document.querySelectorAll("#qDel");
//       qDel.forEach((i) => {
//         if (i !== event.target) {
//           i.classList.remove("highlighted");
//         }
//       });
//     });

//     // Update question numbers for subsequent questions in the same section
//     for (let i = questionCount; i < questionsContainer.children.length; i++) {
//       const question = questionsContainer.children[i];

//     }
//   } 

//   else if (event.target.closest("#qDel")) {
//     const question = event.target.closest(".question");
//     const section = event.target.closest(".section");
//     const qDel = event.target;
    
//     if (qDel.classList.contains("highlighted")) {
//       // If the delete button is already highlighted, remove the question
//       const sectionIndex = Array.prototype.indexOf.call(sectionsContainer.children, section);
//       // const informationSection =document.querySelector('.information-section')
//       //to delete the checkbox container
//       const checkboxDiv = question.nextElementSibling;
//       if (checkboxDiv && checkboxDiv.classList.contains("checkbox-container")) {
//         checkboxDiv.remove();
//       }
//       const inse = question.nextElementSibling;
//       if (inse && inse.classList.contains("information-section")) {
//         inse.remove();
//       }
//       question.remove();
//       questionCounts[sectionIndex]--;
//       const questionsContainer = section.querySelector(".questions-container");
//       const questions = questionsContainer.querySelectorAll(".question");
//       for (let i = 0; i < questions.length; i++) {
//         const question = questions[i];
//         question.querySelector("span").innerText = `${sectionIndex + 1}.${i + 1}`;
//       }
//       qDel.classList.remove("highlighted");
//     } else {
//       // If the delete button is not highlighted, add the "highlighted" class
//       qDel.classList.add("highlighted");
//     }
//   }
// });
// };
