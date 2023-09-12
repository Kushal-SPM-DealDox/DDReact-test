// import { Grid } from 'ag-grid-community';

// // survey type 
// export function toggleDropdown() {
//     var dropdownOptions = document.getElementById("dropdownOptions");
//     dropdownOptions.style.display = dropdownOptions.style.display === "none" ? "block" : "none";
// }

// export function selectOption(event) {
//     var option = event.target.textContent;
//     var header = document.querySelector(".dropdown-header span");
//     header.textContent = option;
//     toggleDropdown();
// }

// export function filterOptions(event) {
//     var input = event.target.value.toUpperCase();
//     var options = document.querySelectorAll(".dropdown-options li");

//     for (var i = 0; i < options.length; i++) {
//         var optionText = options[i].textContent.toUpperCase();
//         if (optionText.indexOf(input) > -1) {
//             options[i].style.display = "";
//         } else {
//             options[i].style.display = "none";
//         }
//     }
// }

// // ========================

// export function exportDataWhereUsed() {
//     // get the grid api instance
//     var params = {
//     suppressQuotes: true,
//     fileName: 'survey where used.xlsx',
//     };
//     gridOptions.api.exportDataAsExcel(params);
//     }



//     // GRID OPEN JS 
// const filterParams = {
//     comparator: (filterLocalDateAtMidnight, cellValue) => {
//       var dateAsString = cellValue;
//       if (dateAsString == null) return -1;
//       var dateParts = dateAsString.split('/');
//       var cellDate = new Date(
//         Number(dateParts[2]),
//         Number(dateParts[1]) - 1,
//         Number(dateParts[0])
//       );
  
//       if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
//         return 0;
//       }
  
//       if (cellDate < filterLocalDateAtMidnight) {
//         return -1;
//       }
  
//       if (cellDate > filterLocalDateAtMidnight) {
//         return 1;
//       }
//       return 0;
//     },
//   };
//   const gridOptions = {
//             columnDefs: [
//                 { field: 'QUOTE', minWidth: 100, filter: 'agTextColumnFilter', lockPosition: "left", lockVisible: true,sort: 'desc',lockPinned:true },
//                 { field: 'ACCOUNT',  filter: 'agTextColumnFilter',lockPinned:true},
//                 { field: 'OPPORTUNITY', filter: 'agTextColumnFilter', minWidth: 200,lockPinned:true},
//                 { field: 'CREATED BY', filter: 'agTextColumnFilter',lockPinned:true},
//                 { field: 'QUOTE CREATED DATE', minWidth: 180, filter: 'agDateColumnFilter', filterParams: filterParams,lockPinned:true },
//                 { field: 'QUOTE LAST MODIFIED', filter: 'agDateColumnFilter', filterParams: filterParams,lockPinned:true  },
//                 { field: 'QUOTE STATUS', filter:false,lockPinned:true},
//                 { field: 'SURVEY NAME', filter: 'agTextColumnFilter', minWidth: 100,lockPinned:true },
//                 { field: 'SURVEY ID', filter: 'agTextColumnFilter', minWidth: 100,lockPinned:true },
//                 { field: 'SURVEY REVISION', filter: 'agTextColumnFilter', minWidth: 100,lockPinned:true },
               
//             ],
            
//             defaultColDef: {
//                 // enablePinning:false,
//                 flex: 1,
//                 minWidth: 100,
//                 filter: true,
//                 resizable: true,
//                 sortable : true,
                
//             },

//         };

// // // setup the grid after the page has finished loading
// //         document.addEventListener('DOMContentLoaded', function () {
// //             var gridDiv = document.querySelector('#myGrid');
// //             new agGrid.Grid(gridDiv, gridOptions);

// //             fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
// //                 .then((response) => response.json())
// //                 .then((data) => gridOptions.api.setRowData(data));
// //         });
// // setup the grid after the page has finished loading
// document.addEventListener('DOMContentLoaded', function () {
//     var gridDiv = document.querySelector('#myGrid');
//     new Grid(gridDiv, gridOptions); // Use the imported Grid component
  
//     fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
//       .then((response) => response.json())
//       .then((data) => gridOptions.api.setRowData(data));
//   });