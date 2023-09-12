// export function showContent() {
    
//     var div = document.getElementById("createcontent");
//     if (div.style.display === "none") {
        
//         div.style.display = "block";
//     } else {
//         div.style.display = "none";
//     }
// }

// ---------wordpad----------------
export function enableEditing() {
    var editableContent = document.getElementById("editableContent");

    // Restore previous content from local storage
    // if (localStorage.getItem("myDivContent")) {
    //   editableContent.innerHTML = localStorage.getItem("myDivContent");
    // }

    // Enable autosave on input
  //   editableContent.addEventListener("input", function() {
  //     localStorage.setItem("myDivContent", editableContent.innerHTML);
  //   });
   }
export  function shadetext(){
    var color = document.getElementById("color-picker").value;
    document.execCommand("forecolor",false, color);
  }
  enableEditing();