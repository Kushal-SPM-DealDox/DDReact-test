import React, { useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './GridTemplate.css'; // Import the CSS file for styling

// Define the table header item type
const ItemTypes = {
  TABLE_HEADER: 'tableHeader'
};

// Table Header component
const TableHeader = ({ children, index, moveHeader }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TABLE_HEADER,
    item: { index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  }));

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.TABLE_HEADER,
    hover(item) {
      if (item.index === index) {
        return;
      }
      moveHeader(item.index, index);
      item.index = index;
    }
  }));

  const opacity = isDragging ? 0.5 : 1;

  return (
    <th ref={node => drag(drop(node))} style={{ opacity }}>
      {children}
    </th>
  );
};


const Grid = () => {
        const [headers, setHeaders] = useState([
          'Account Name',
          'Owner',
          'Teritory',
          'Vertical',
          'Industry',
          'xcelaerate partner',
          'Commercial Region',
          'Commercial Sub Region',
          'Vat Number',
          'Delivery Area'
        ]);
      
        const moveHeader = (dragIndex, hoverIndex) => {
          const draggedHeader = headers[dragIndex];
          const updatedHeaders = [...headers];
          updatedHeaders.splice(dragIndex, 1);
          updatedHeaders.splice(hoverIndex, 0, draggedHeader);
          setHeaders(updatedHeaders);
        };

  return (
    <div id="actlist" style={{ paddingTop: '68px' }}>
      <div className="listTemplate">
        <table id="tblStockstemplate" cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr className="ellipsis">
              <TableHeader>Account Name</TableHeader>
              <TableHeader>Owner</TableHeader>
              <TableHeader>Teritory</TableHeader>
              <TableHeader>Vertical</TableHeader>
              <TableHeader>Industry</TableHeader>
              <TableHeader>xcelaerate partner</TableHeader>
              <TableHeader>Commercial Region</TableHeader>
              <TableHeader>Commercial Sub Region</TableHeader>
              <TableHeader>Vat Number</TableHeader>
              <TableHeader>Delivery Area</TableHeader>
            </tr>
            <tr>
              <td>Life HealthCare INC</td>
              <td>A</td>
              <td>35.58</td>
              <td>38.45</td>
              <td>+8.06</td>
              <td>35.58</td>
              <td>38.45</td>
              <td>+8.06</td>
              <td>38.45</td>
              <td>+8.06</td>
            </tr>
            <tr>
              <td>Life HealthCare INC</td>
              <td>A</td>
              <td />
              <td />
              <td>+8.06</td>
              <td>35.58</td>
              <td>38.45</td>
              <td>+8.06</td>
              <td>38.45</td>
              <td>+8.06</td>
            </tr>
            <tr>
              <td>Life HealthCare INC</td>
              <td>A</td>
              <td />
              <td />
              <td>+8.06</td>
              <td>35.58</td>
              <td>38.45</td>
              <td>+8.06</td>
              <td>38.45</td>
              <td>+8.06</td>
            </tr>
            <tr>
              <td>Life HealthCare INC</td>
              <td>A</td>
              <td />
              <td />
              <td>+8.06</td>
              <td>35.58</td>
              <td>38.45</td>
              <td>+8.06</td>
              <td>38.45</td>
              <td>+8.06</td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>
    </div>
  );
};

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
    rows.forEach(function (rowArray) {
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
  
  const DraggableGrid = () => (
    <DndProvider backend={HTML5Backend}>
      <Grid />
    </DndProvider>
  );
  
  export default DraggableGrid;