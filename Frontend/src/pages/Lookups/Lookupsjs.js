export function myFunction2lookups() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearchlookups");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenulookups");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
 
export function myFunctionlookups(){
  var dots=document.getElementById("dotslookups");
  var moreText=document.getElementById("morelookups");
  var btnText=document.getElementById("myBTNlookups");

  if(dots.style.display==="none"){
     dots.style.display="inline";
     btnText.innerHTML="VIEW MORE";
     moreText.style.display="none";
  }
  else{
      dots.style.display="none";
      btnText.innerHTML="VIEW LESS";
      moreText.style.display="inline";
  }
}

 export function lookupsShow() {
    var div = document.getElementById("LookupsShow");
    div.style.display = "block";
}

  export function addLookups() {
    
}
// =======================================================================

