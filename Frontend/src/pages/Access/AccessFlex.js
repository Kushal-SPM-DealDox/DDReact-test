export function myFunction2Access() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearchaccess");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenuaccess");
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


//   access show more 

export function myFunctionAccess(){
    var dots=document.getElementById("dotsaccess");
    var moreText=document.getElementById("moreaccess");
    var btnText=document.getElementById("myBTNaccess");

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