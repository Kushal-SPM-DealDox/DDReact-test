export function exportData1(){
    /* Get the HTML data using Element by Id */
    var table = document.getElementById("tblStocksQuotes");
 
    /* Declaring array variable */
    var rows =[];
 
      //iterate through rows of table
    for(var i=0,row; row = table.rows[i];i++){
        //rows would be accessed using the "row" variable assigned in the for loop
        //Get each cell value/column from the row
       const column1 = row.cells[0].innerText;
       const column2 = row.cells[1].innerText;
       const column3 = row.cells[2].innerText;
       const  column4 = row.cells[3].innerText;
       const column5 = row.cells[4].innerText;
       const column6 = row.cells[5].innerText;
       const column7 = row.cells[6].innerText;
       const column8 = row.cells[7].innerText;
        // column9 = row.cells[8].innerText;
        // column10 = row.cells[9].innerText;
       

 
    /* add a new records in the array */
        rows.push(
            [
                column1,
                column2,
                column3,
                column4,
                column5,
                column6,
                column7,
                column8
                // column9
                // column10
            ]
        );
        }
     var  csvContent = "data:text/csv;charset=utf-8,";
         /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
        rows.forEach(function(rowArray){
            row = rowArray.join(",");
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

export function myfunctionData() {
    var tablewrap5 = document.getElementById('oppodetails');
    tablewrap5.classList.toggle('hidden1');
    var angleDown = document.querySelector("#clickmedetails .fa-angle-down");
    angleDown.classList.toggle("fa-angle-up"); // Toggle the class to change the icon direction
  
    if (tablewrap5.classList.contains("hidden1")) {
      tablewrap5.style.display = "none";
    } else {
      tablewrap5.style.display = "block";
    }
  };


  // ----------------------
  export function handleOpenCloseOppo () {
    var sidebar = document.getElementById("mySidebar");
          var main = document.getElementById("mainsidebaroppo");
          var mainpage =document.getElementById('mainpage');
          var icon = main.querySelector("i");
          
          if (sidebar.style.width === "250px") {
           sidebar.style.width = "0";
           main.style.marginRight = "0px";
           mainpage.style.width='100%';
           mainpage.style.transition='0.5s ease'
           icon.classList.remove("fa-greater-than");
           icon.classList.add("fa-less-than");
          } else {
           sidebar.style.width = "250px";
           main.style.marginRight = "250px";
           mainpage.style.width='81%';
           mainpage.style.transition='0.5s ease'
           icon.classList.remove("fa-less-than");
           icon.classList.add("fa-greater-than");
          }
           };