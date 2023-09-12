import $ from 'jquery';
export function myFunction2() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
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


  // show more in account Section
  export function myFunction3(){
    var dots=document.getElementById("dots");
    var moreText=document.getElementById("more");
    var btnText=document.getElementById("myBTN");

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

// -----------------billing,shipping and addinfo address toggle-------------------------

export const myFunctionA = (e) => {
  var tablewrap = document.getElementById('billOne');
  tablewrap.classList.toggle('hidden');
  var angleDown = document.querySelector("#clickme .fa-angle-down");
  angleDown.classList.toggle("fa-angle-up"); // Toggle the class to change the icon direction
  if (tablewrap.classList.contains("hidden")) {
    tablewrap.style.display = "none";
  } else {
    tablewrap.style.display = "block";
  }

};

 export  const myFunctionB = (e) => {
  var tablewrap1 = document.getElementById('ship');
  tablewrap1.classList.toggle('hidden');
  var angleDown = document.querySelector("#clikhere .fa-angle-down");
  angleDown.classList.toggle("fa-angle-up"); // Toggle the class to change the icon direction

  if (tablewrap1.classList.contains("hidden")) {
    tablewrap1.style.display = "none";
  } else {
    tablewrap1.style.display = "block";
  }
};
// -------------------------------------
export  const myFunctionC = (e) => {
  var tablewrapC = document.getElementById('displaytable3');
  tablewrapC.classList.toggle('hidden');
  var angleDown = document.querySelector("#clikhere3 .fa-angle-down");
  angleDown.classList.toggle("fa-angle-up"); // Toggle the class to change the icon direction

  if (tablewrapC.classList.contains("hidden")) {
    tablewrapC.style.display = "none";
  } else {
    tablewrapC.style.display = "block";
  }
};

export function accountList(){
  const list =document.getElementById("actlist");
  const rows =document.getElementById("rows");
   
  if(list.style.display==='none'){
    list.style.display='block';
    rows.style.display='none';
  }else{
    list.style.display='none';
    rows.style.display='block';
  }
}



export function exportData() {
  /* Get the HTML data using Element by Id */
  var table = document.getElementById("tblStocks");

  /* Declaring array variable */
  var rows = [];

  // Iterate through rows of the table
  for (var i = 0; i < table.rows.length; i++) {
    var row = table.rows[i];
    // Get each cell value/column from the row
    var column1 = row.cells[0].innerText;
    var column2 = row.cells[1].innerText;
    var column3 = row.cells[2].innerText;
    var column4 = row.cells[3].innerText;
    var column5 = row.cells[4].innerText;
    var column6 = row.cells[5].innerText;
    var column7 = row.cells[6].innerText;
    var column8 = row.cells[7].innerText;
    var column9 = row.cells[8].innerText;
    var column10 = row.cells[9].innerText;
    /* add a new record to the array */
    rows.push([
      column1,
      column2,
      column3,
      column4,
      column5,
      column6,
      column7,
      column8,
      column9,
      column10
    ]);
  }

  var csvContent = "data:text/csv;charset=utf-8,";
  /* add the column delimiter as comma(,) and each row split by a new line character (\n) */
  rows.forEach(function(rowArray) {
    var row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

  /* create a hidden <a> DOM node and set its download attribute */
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "Deal_Dox_Accounts_info.csv");
  document.body.appendChild(link);
  /* download the data file named "Deal_Dox_Accounts_info.csv" */
  link.click();
}
