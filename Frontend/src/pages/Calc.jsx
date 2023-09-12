import React from 'react'
import "../pages/Calc.css";

const Calc = () => {

    const renderTable = () => {
        const rows = [];
        for (let i = 1; i <= 10; i++) {
          const cells = [];
          cells.push(<td key={0}>{i}</td>);
          for (let j = 0; j < 10; j++) {
            const cellValue = String.fromCharCode(65 + j) + i;
            cells.push(<td key={j + 1}><input type="text" /></td>);
          }
          rows.push(<tr key={i}>{cells}</tr>);
        }
        return rows;
      };
    return (

        <div>
            <div id="calcheader">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>A</th>
                            <th>B</th>
                            <th>C</th>
                            <th>D</th>
                            <th>E</th>
                            <th>F</th>
                            <th>G</th>
                            <th>H</th>
                            <th>I</th>
                            <th>J</th>
                        </tr>
                    </thead>
                    <tbody>{renderTable()}</tbody>
                </table>
            </div>


        </div>
    )
}

export default Calc 