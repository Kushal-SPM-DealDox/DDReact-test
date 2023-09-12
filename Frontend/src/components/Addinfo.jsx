import React from 'react'
import '../components/Addinfo.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faAngleUp, faAngleDown, faGear, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
const Addinfo = () => {
    return (
        <div>
            <div id="grid7">
                <div id="additional">
                    <div className="additionalinput" id="additionalbtn" onClick={handleNfdcClick}>
                    <label id='addinfolabel'>ADDITIONAL INFO</label>
                    <i className='fa fa-angle-down' id="infoangle"></i>
                    </div>
                    <label id="define" onClick={handleDefineClick} style={{ display: "none" }}>Define</label>
                    <FontAwesomeIcon icon={faGear} className="gear-icon" id="fagearai" style={{ display: "none" }} />
                    <FontAwesomeIcon icon={faPencilAlt} className="pencil-icon" id="fapenai" style={{ display: "none" }} />
                    </div>
                
            </div>

            <div id="grid9">
                <input id="NCFDinput" type="text" readOnly style={{ display: "none" }} />
                <label id="NCFDlabel" style={{ display: "none" }} >NO CUSTOM FIELDS DEFINED</label>
            </div>

            <div id="grid8">
                <div id="containeraddinfo" class="column-container">
                    <div id="plusiconaddinfo" style={{ display: 'none' }}>
                        <input type="button" id="plusbtn" onClick={addInputSection} value="+" />
                    </div>
                </div>
            </div>
          
        </div>
    )
}

// Additional Info display 

export const handleNfdcClick = () => {
    const Container = document.getElementById("containeraddinfo");
    const plusicon = document.querySelector("#plusiconaddinfo");
    const NCFDInput = document.querySelector("#NCFDinput");
    const NCFDLabel = document.querySelector("#NCFDlabel");
    const define = document.querySelector("#define");
    const infoangle = document.querySelector("#infoangle");
    const gearIcon = document.querySelector("#fagearai");
    const pencilIcon = document.querySelector("#fapenai");

    if (define.style.display === "none") {
      // Toggle sub-sections visibility
      Container.style.display = "block";
      Container.style.display = "grid";
      NCFDInput.style.display = "block";
      NCFDLabel.style.display = "block";
      define.style.display = "block";
      gearIcon.style.display = "block";
      Container.style.gridTemplateColumns = "0.5fr 0.5fr";
      plusicon.style.display = "none";

      // Set angle-down icon
      infoangle.classList.add("fa-angle-up");
      infoangle.classList.remove("fa-angle-down");
    } else {
      // Close sub-sections
      Container.style.display = "none";
      plusicon.style.display = "block";
      NCFDInput.style.display = "none";
      NCFDLabel.style.display = "none";
      define.style.display = "none";
      define.textContent = "Define";
      pencilIcon.style.display = "none";
      gearIcon.style.display = "none";

      // Set angle-up icon
      infoangle.classList.add("fa-angle-down");
      infoangle.classList.remove("fa-angle-up");
    }
  };
  
export const handleDefineClick = () => {
    const define = document.querySelector("#define");
    const plusicon = document.querySelector("#plusiconaddinfo");
    const NCFDInput = document.querySelector("#NCFDinput");
    const NCFDLabel = document.querySelector("#NCFDlabel");
    const gearIcon = document.querySelector("#fagearai");
    const pencilIcon = document.querySelector("#fapenai");
 
    if (define.textContent === "Define") {
        define.textContent = "Data";
        plusicon.style.display = "block";
        NCFDInput.style.display = "none";
        NCFDLabel.style.display = "none";
        gearIcon.style.display = "none";
        pencilIcon.style.display = "block";
      
    } else {
        define.textContent = "Define";
        plusicon.style.display = "none";
        NCFDInput.style.display = "none";
        NCFDLabel.style.display = "none";
        gearIcon.style.display = "block";
        pencilIcon.style.display = "none";
        
    }
};

export const addInputSection = () => {
    // Create a new input section
    var inputSection = document.createElement("div");
    inputSection.className = "input-section";
    inputSection.id = "inputsectionid";

    // Create an input field
    var input = document.createElement("input");
    input.type = "text";
    input.id = "ailistinput";


    var input = document.createElement("input");
    input.type = "text";
    input.id = "ailistinput";

    var editableinput = document.createElement("input");
    editableinput.type = "text";
    editableinput.id = "editable";
    editableinput.placeholder = "Enter Field Name";

    var movePrevBtn = document.createElement("button");
    movePrevBtn.textContent = "Move Previous";
    movePrevBtn.id = "moveprevbtn";

    movePrevBtn.addEventListener("click", function () {
        var currentInputValue = input.value; // Get the value of the current input
        var currentEditableInputValue = editableinput.value; // Get the value of the current editable input
        var previousInputSection = inputSection.previousElementSibling; // Get the previous input section
        var previousInput = previousInputSection.querySelector("input[type='text']"); // Get the input element of the previous input section
        var previousEditableInput = previousInputSection.querySelector("#editable"); // Get the editable input element of the previous input section
        var previousInputValue = previousInput.value; // Get the value of the previous input
        var previousEditableInputValue = previousEditableInput.value; // Get the value of the previous editable input
        input.value = previousInputValue; // Set the value of the current input as the value of the previous input
        editableinput.value = previousEditableInputValue; // Set the value of the current editable input as the value of the previous editable input
        previousInput.value = currentInputValue; // Set the value of the previous input as the value of the current input
        previousEditableInput.value = currentEditableInputValue; // Set the value of the previous editable input as the value of the current editable input
    });



    movePrevBtn.addEventListener("mouseover", () => {
        inputSection.classList.add("show-move-prev");
    });

    movePrevBtn.addEventListener("mouseout", () => {
        inputSection.classList.remove("show-move-prev");
    });

    // Append the "Move Previous" button to the input section
    inputSection.appendChild(movePrevBtn)

    var moveNextBtn = document.createElement("button");
    moveNextBtn.textContent = "Move Next";
    moveNextBtn.id = "movenextbtn";

    // Event listener for "Move Next" button click
    moveNextBtn.addEventListener("click", function () {
        var currentInput = inputSection.querySelector("input[type='text']"); // Get the current input element
        var currentEditableInput = inputSection.querySelector("input[type='text'][id='editable']"); // Get the current editable input element

        // Get the next input section
        var nextInputSection = inputSection.nextElementSibling;
        if (nextInputSection && nextInputSection.classList.contains("input-section")) {
            var nextInput = nextInputSection.querySelector("input[type='text']"); // Get the input element in the next section
            var nextEditableInput = nextInputSection.querySelector("input[type='text'][id='editable']"); // Get the editable input element in the next section

            // Swap the data between the current input and the next input
            var tempInputValue = currentInput.value;
            currentInput.value = nextInput.value;
            nextInput.value = tempInputValue;

            // Swap the data between the current editable input and the next editable input
            var tempEditableInputValue = currentEditableInput.value;
            currentEditableInput.value = nextEditableInput.value;
            nextEditableInput.value = tempEditableInputValue;

            // Move the current input section to the next input section
            inputSection.parentNode.insertBefore(nextInputSection, inputSection.nextSibling);
        }
    });

    moveNextBtn.addEventListener("mouseover", () => {
        inputSection.classList.add("show-move-next");
    });

    moveNextBtn.addEventListener("mouseout", () => {
        inputSection.classList.remove("show-move-next");
    });

    // Append the "Move Next" button to the input section
    inputSection.appendChild(moveNextBtn);

    inputSection.appendChild(input);
    inputSection.appendChild(editableinput);
    // <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
    // Create a list
    var list = document.createElement("ul");
    list.id = "additionalinfolist"
    list.style.display = "none";


    // Create list items
    var item1 = document.createElement("li");
    item1.textContent = "Item 1";
    item1.id = "ailist1"
    var item2 = document.createElement("li");
    item2.textContent = "Item 2";
    item2.id = "ailist2"
    var item3 = document.createElement("li");
    item3.textContent = "Item 3";
    item3.id = "ailist3"



    // Event listener for input field click
    input.addEventListener("click", function () {
        const checkboxpoa = document.querySelector("#checkboxpoa");
        const checkboxpoalabel = document.querySelector("#checkboxpoalabel");
        const checkboxao = document.querySelector("#checkboxao");
        const checkboxaolabel = document.querySelector("#checkboxaolabel");
        const checkboxro = document.querySelector("#checkboxro");
        const checkboxrolabel = document.querySelector("#checkboxrolabel");
        const inputSection = document.querySelector(".input-section");
        const trashbtn = document.querySelector("#trashbtn");
        const editable = document.querySelector("#editable");
        const additionalinfolist = document.querySelector("#additionalinfolist");

        // const moveNextBtn = document.getElementById("#movenextbtn");
        // const movePrevBtn = document.getElementById("#moveprevbtn");



        // Toggle display of the list
        if (list.style.display === "none") {
            list.style.display = "block";

        } else {
            list.style.display = "none";
            // checkboxpoa.style.display = "block"
            // checkboxpoa.style.top = "-78px";
            // checkboxpoa.style.left = "33px";
            // checkboxpoalabel.style.top = "-80px";
            // checkboxpoalabel.style.left = "13px";
            // checkboxao.style.top = "-78px";
            // checkboxaolabel.style.top = "-80px";
            // checkboxro.style.top = "-78px";
            // checkboxrolabel.style.top = "-80px";
            // trashbtn.style.top = "block";
            // trashbtn.style.top = "-54px";
            // trashbtn.style.left = "426px";
            // trashbtn.style.width = "25px";
            // trashbtn.style.display = "block";
            // editable.style.display = "block";
            // editable.style.top = "-60px";
            // editable.style.left = "15px";
        }

        // Event listener for item1 click
        item1.addEventListener("click", function () {
            // Display item1 in the input field
            input.value = item1.textContent;
        });

        // Event listener for item2 click
        item2.addEventListener("click", function () {
            // Display item2 in the input field
            input.value = item2.textContent;
        });

        // Event listener for item3 click
        item3.addEventListener("click", function () {
            // Display item3 in the input field
            input.value = item3.textContent;
        });




        // search filter
        const handleAiInput = () => {
            // const additionalinfoList = document.querySelector("#additionalinfolist")
            const filter = input.value.toUpperCase();
            const listItems = list.querySelectorAll("li");



            listItems.forEach(function (item) {
                const text = item.textContent.toUpperCase();
                if (text.indexOf(filter) > -1) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            });
        }

        // ENTER
        const handleAiinputKeydown = (event) => {
            if (event.keyCode === 13) {
                const visibleItem = list.querySelector("li:not([style*='display: none'])");
                if (visibleItem) {
                    input.value = visibleItem.textContent;
                    list.style.display = "none";
                }
            }
        }

        // WINDOWS CLICK
        const handleAiOutsideClick = (event) => {
            if (!input.contains(event.target)) {
                list.style.display = "none";
            }
        };



        input.addEventListener("input", handleAiInput);
        input.addEventListener("keydown", handleAiinputKeydown);
        window.addEventListener("click", handleAiOutsideClick);
    });


    // Append input and list to the input section
    inputSection.appendChild(input);
    inputSection.appendChild(list);
    // Append list items to the list
    list.appendChild(item1);
    list.appendChild(item2);
    list.appendChild(item3);





    var checkboxai1 = document.createElement("input");
    checkboxai1.type = "checkbox";
    checkboxai1.id = "checkboxpoa";
    checkboxai1.value = "Persist on Apply";
    
    var labelorg1 = document.createElement("label");
    labelorg1.id = "checkboxpoalabel";
    labelorg1.setAttribute("for", checkboxai1.id);
    labelorg1.innerText = "Persist on Apply";
    
    
    var checkboxai2 = document.createElement("input");
    checkboxai2.type = "checkbox";
    checkboxai2.id = "checkboxao";
    checkboxai2.value = "Admin Only";
    
    
    var labelorg2 = document.createElement("label");
    labelorg2.id = "checkboxaolabel";
    labelorg2.setAttribute("for", checkboxai2.id);
    labelorg2.innerText = "Admin Only";
    
    var checkboxai3 = document.createElement("input");
    checkboxai3.type = "checkbox";
    checkboxai3.value = "Read Only";
    checkboxai3.id = "checkboxro";
    
    
    var labelorg3 = document.createElement("label");
    labelorg3.id = "checkboxrolabel";
    labelorg3.setAttribute("for", checkboxai3.id);
    labelorg3.innerText = "Read Only";
    
    
    // Create a delete button
    var deleteBtn = document.createElement("i");
    deleteBtn.className = "fas fa-trash-alt";
    deleteBtn.id = "trashbtn";
    
    deleteBtn.dataset.clickCount = 0; // Set initial click count to 0
    
    deleteBtn.addEventListener("click", function () {
        const trashbtn = document.getElementById("trashbtn")
        var clickCount = parseInt(deleteBtn.dataset.clickCount); // Get the current click count
    
        if (clickCount === 0) {
            deleteBtn.style.backgroundColor = "red";
            deleteBtn.style.color = "white";
            deleteBtn.style.width='25px';
            deleteBtn.style.height='64px';
            deleteBtn.style.top='-65px';
            deleteBtn.style.paddingTop='23px';
            deleteBtn.style.paddingLeft='5px';
            deleteBtn.style.right='-6px';
            
        } else if (clickCount === 1) {
            inputSection.remove(); // Remove the input section on the second click
        }
    
        clickCount++; // Increment the click count
        deleteBtn.dataset.clickCount = clickCount; // Update the click count attribute
    });
    
    
    // Create a div for checkboxes
    var checkboxDiv = document.createElement("div");
    checkboxDiv.setAttribute("id","checkboxDiv");
    // Append checkboxes and labels to the div
    checkboxDiv.appendChild(checkboxai1);
    checkboxDiv.appendChild(labelorg1);
    checkboxDiv.appendChild(checkboxai2);
    checkboxDiv.appendChild(labelorg2);
    checkboxDiv.appendChild(checkboxai3);
    checkboxDiv.appendChild(labelorg3);
    
    // Append the input, delete button, and checkbox div to the input section
    inputSection.appendChild(deleteBtn);
    inputSection.appendChild(checkboxDiv);
    inputSection.appendChild(editableinput);
    
    // Append the input section to the container
    var container = document.getElementById("containeraddinfo");
    container.appendChild(inputSection);
    
    // Move the plusbtn to the last input section
    container.appendChild(document.getElementById("plusiconaddinfo"));
    
};


// Additional Info display end

export default Addinfo