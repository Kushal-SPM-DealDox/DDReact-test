// FOR TOP-BAR FEATUARES USE IN ALL PAGES



// PROFILE ICON JS

//  export function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show"); 
//     var profile=document.getElementById("profile");
//     if (document.getElementById("myDropdown").classList.contains("show")) {
//       profile.style.color = '#216c98';
//     } else {
//       profile.style.color = 'white';
//     }     
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
 
//       if (!event.target.matches('.fa-user')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         for (var i = 0; i < dropdowns.length; i++) {
//           var openDropdown = dropdowns[i];
//           var profile=document.getElementById("profile");
//           if (openDropdown.classList.contains('show')) {
//             openDropdown.classList.remove('show');
//             profile.style.color = 'white';
//           }
//         }
      
//   }
//   }

  

// //   SEARCH ICON JS USE IN ALL PAGES

// const icon=document.querySelector('.icon');
// const search=document.querySelector('.search');
// icon.onclick=function(){
//     search.classList.toggle('active')
//    icon.style.backgroundColor="white";
// }

// // --------clock icon js-----------

// function myClockFunction() {
//   document.getElementById("mydropclock").classList.toggle("shows");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (event.target.matches('fas fa-clock')) {
//     var dropdowns = document.getElementsByClassName("dropclock-content");
//     var i;
//     for (i = 0; i< dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (!openDropdown.classList.contains('shows')) {
//        openDropdown.classList.remove('shows');
//       }
      
//     }
//   }
// }

// // --------------search and showmore in clock----------------

// function myFunctionClock() {
//   var input, filter, ul, li, a, i;
//   input = document.getElementById("mySearchclock");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myMenuclock");
//   li = ul.getElementsByTagName("li");
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }


// function myClockShowmoreFunction() {
//   var dots = document.getElementById("dotsclock");
//   var moreText = document.getElementById("moreclock");
//   var btnText = document.getElementById("myBTNclock");

//   if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "SHOW MORE";
//       moreText.style.display = "none";
//   }
//   else {
//       dots.style.display = "none";
//       btnText.innerHTML = "SHOW LESS";
//       moreText.style.display = "inline";
//   }
// }
