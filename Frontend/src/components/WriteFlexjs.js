export function myFunction2Write() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearchwrite");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenuwrite");
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


//   write show more 

export function myFunctionWrite(){
    var dots=document.getElementById("dotswrite");
    var moreText=document.getElementById("morewrite");
    var btnText=document.getElementById("myBTNwrite");

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