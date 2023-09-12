import { useEffect } from 'react'

export function toggleSection1() {
    var section = document.getElementById("section1");
    var icon = document.querySelector(".con-sec1  i");
  
    if (section.style.display === "none") {
      section.style.display = "block";
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");
    } else {
      section.style.display = "none";
      icon.classList.remove("fa-angle-up");
      icon.classList.add("fa-angle-down");
    }
  }
  
  
  export function toggleSection2() {
    var section = document.getElementById("section2");
    var icon = document.querySelector(".con-sec2 i");
  
    if (section.style.display === "none") {
      section.style.display = "block";
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");
    } else {
      section.style.display = "none";
      icon.classList.remove("fa-angle-up");
      icon.classList.add("fa-angle-down");
    }
  }
  
  
  export function toggleSection3() {
    var section = document.getElementById("section3");
    var icon = document.querySelector(".con-sec3 i");
  
    if (section.style.display === "none") {
      section.style.display = "block";
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");
    } else {
      section.style.display = "none";
      icon.classList.remove("fa-angle-up");
      icon.classList.add("fa-angle-down");
    }
  }
  
  
  export function toggleSection4() {
    var section = document.getElementById("section4");
    var icon = document.querySelector(".con-sec4 i");
  
    if (section.style.display === "none") {
      section.style.display = "block";
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");
    } else {
      section.style.display = "none";
      icon.classList.remove("fa-angle-up");
      icon.classList.add("fa-angle-down");
    }
  }
  
  
  export function toggleSection5() {
    var section = document.getElementById("section5");
    var icon = document.querySelector(".con-sec5 i");
  
    if (section.style.display === "none") {
      section.style.display = "block";
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");
    } else {
      section.style.display = "none";
      icon.classList.remove("fa-angle-up");
      icon.classList.add("fa-angle-down");
    }
  }
  
  
  export function toggleSection6() {
    var section = document.getElementById("section6");
    var icon = document.querySelector(".con-sec6 i");
  
    if (section.style.display === "none") {
      section.style.display = "block";
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");
    } else {
      section.style.display = "none";
      icon.classList.remove("fa-angle-up");
      icon.classList.add("fa-angle-down");
    }
  }
  
  
  export function toggleSection7() {
    var section = document.getElementById("section7");
    var icon = document.querySelector(".con-sec7 i");
  
    if (section.style.display === "none") {
      section.style.display = "block";
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");
    } else {
      section.style.display = "none";
      icon.classList.remove("fa-angle-up");
      icon.classList.add("fa-angle-down");
    }
  }
  
  
  export function toggleSection8() {
    var section = document.getElementById("section8");
    var icon = document.querySelector(".con-sec8 i");
  
    if (section.style.display === "none") {
      section.style.display = "block";
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");
    } else {
      section.style.display = "none";
      icon.classList.remove("fa-angle-up");
      icon.classList.add("fa-angle-down");
    }
  }
  
  
  export function toggleSection9() {
    var section = document.getElementById("section9");
    var icon = document.querySelector(".con-sec9 i");
  
    if (section.style.display === "none") {
      section.style.display = "block";
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");
    } else {
      section.style.display = "none";
      icon.classList.remove("fa-angle-up");
      icon.classList.add("fa-angle-down");
    }
  }
  
  
  export function toggleSection10() {
    var section = document.getElementById("section10");
    var icon = document.querySelector(".con-sec10 i");
  
    if (section.style.display === "none") {
      section.style.display = "block";
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");
    } else {
      section.style.display = "none";
      icon.classList.remove("fa-angle-up");
      icon.classList.add("fa-angle-down");
    }
  }
  
  //   =============================================================================



  export function mn(){
    const inputSelects = document.querySelectorAll(".input-select");
    inputSelects.forEach(inputSelect => {
      
      const inputSelectOptions = inputSelect.nextElementSibling.querySelectorAll("li");
    
      // Show/hide options when input field is clicked/focused
      inputSelect.addEventListener("click", toggleOptions);
      inputSelect.addEventListener("focus", toggleOptions);
    
      function toggleOptions() {
        const optionsList = this.nextElementSibling;
        optionsList.style.display = optionsList.style.display === "block" ? "none" : "block";
        optionsList.style.display = "block";
      }
    // Add the following line to set the initial display property to "block"
    inputSelect.nextElementSibling.style.display = "block";
      // Set selected option when an option is clicked
      inputSelectOptions.forEach(option => {
        option.addEventListener("click", () => {
          const selectedValue = option.getAttribute("data-value");
          inputSelect.value = option.textContent;
          inputSelect.setAttribute("data-value", selectedValue);
    
          // Clear options dropdown
          inputSelect.nextElementSibling.style.display = "none";
        });
      });
    
      // Filter options list based on search query
      inputSelect.addEventListener("input", () => {
        const searchQuery = inputSelect.value.trim().toLowerCase();
    
        inputSelectOptions.forEach(option => {
          const optionText = option.textContent.trim().toLowerCase();
          const optionValue = option.getAttribute("data-value").trim().toLowerCase();
    
          if (optionText.includes(searchQuery) || optionValue.includes(searchQuery)) {
            option.style.display = "block";
          } else {
            option.style.display = "none";
          }
        });
      });
    
      // Close options list when clicking outside of the input field
      document.addEventListener("click", (event) => {
        if (!event.target.closest(".input-select-wrapper")) {
          inputSelect.nextElementSibling.style.display = "none";
        }
      });
    });
    
  }
  