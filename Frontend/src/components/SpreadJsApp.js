import React, { useEffect, useRef, useCallback, useState } from 'react';
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css';
import GC from '@grapecity/spread-sheets';
import './styles.css';
// import { useAuthContext } from '../hooks/useAuthContext';
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';
GC.Spread.Sheets.LicenseKey =
  'www.dealdox.io,515561624192531#B1zK3JlZZpGOWZWU8MTTmFVW8AXTPJEWkZ6VSFjaVZkZ9InTzVWQ73UVQdEVyMWUIZFWuhjTPtSOwBzQV3GUUBTMPhUSTFnakZkWW34Si3mbyIWbzxWS6oGO9UkazNHczN6SGhmasx6SiZlTlZUTph6RqZVZntSVJNnMtdDevBjWup7Mlh6UOB7QmZWTQh5UzBVQZpke9UUaZl5dIJDMwFTdiRTQwoFWP9WeMVUTXRlRPNGb9R4U8t6Q5Qma9YnQIVjQNVHVxgUOVpWYzZld5AVY6Rkezo4VnZHVU5mbBhTdQpHOysSQuB7caJWRY9UbSpVQi3UWiojITJCLiUERFlzM6YTMiojIIJCL5MzN7cTNwMTO0IicfJye35XX3JyVUNkWiojIDJCLiYTMuYHITpEIkFWZyB7UiojIOJyebpjIkJHUiwiIxUTNwgDMgEDM9AzMyAjMiojI4J7QiwiIvlmL83GZsFWZk9yd7dnI0IyctRkIsIycll6Zvx6buh6YlRFIsFmYvx6Rg4EUTJiOiEmTDJCLiEzM5ITOxQjM6EjN5UTM5IiOiQWSiwSfdtlOicGbmJCLlNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TP7V4SwJESnRXSHlXcHpnSypERrNVUylVMZ94QIp6QRhDRR36RSpGWspEeEN7dkFVWKZkV6UUSjxUdro7U8IGUIlkapljZyxGTGNEV9wWS7Jnd5EWdrNDdGRUOJJ7VDF6bNw';

const SpreadJSApp = () => {
  let hostStyle = {
    width: '940px',
    height: '400px',
  }

  // const { user } = useAuthContext();
  // console.log(user);

  const user = JSON.parse(localStorage.getItem('user'));
  const {token} = user;

  const spreadRef = useRef(null);

  var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 3 });
  var activeSheet = spread.getActiveSheet();
  activeSheet.autoGenerateColumns = true;

  const initSpread = useCallback((spread) => {
    spreadRef.current = spread;
    var sheet = spread.getSheet(0);

     // Extend the Paste Range if the Paste Range is not enough for pasting
     spread.options.allowExtendPasteRange = true;

     // Else you could bind the Clipboard Pasting Event
     spread.bind(GC.Spread.Sheets.Events.ClipboardPasting, function (sender, args) {
         console.log("Clipboard Pasting Event");
         console.log(args);
         // Add Rows/Column Here before pasting
     });

    sheet.setValue(0, 0, 'Question Position');
    sheet.setValue(0, 1, 'Question');
    sheet.setValue(0, 2, 'Question_Id');
    sheet.setValue(0, 3, 'Answer');
    sheet.setColumnWidth(0, 150);
    sheet.setColumnWidth(1, 300);
    sheet.setColumnWidth(2, 300);
    sheet.setColumnWidth(3, 300);

    // sheet.addRows();
    // sheet.addColumns();

    // spread.suspendPaint();
    var activeSheet = spread.getActiveSheet();
    var row = activeSheet.getRowCount();

    // Add your custom function to each sheet

    // QUESTION_INDEX CUSTOM FUNCTION
    const QuestionIndexFunction = new GC.Spread.CalcEngine.Functions.AsyncFunction("QUESTION_INDEX", 1, 1,
    {
      name: "QUESTION_INDEX",
      description: "Returns The Question From Value By Index"
    });
    QuestionIndexFunction.evaluate = (context, position) => {
      fetch(`/api/spread/display/${position}` , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          context.setAsyncResult(data.data[0].survey_questions_num + "  " + data.data[0].survey_questions_name);
        })
        .catch(error => {
          context.setAsyncResult(`Error: ${error}`);
        });
  
    };
    spread.addCustomFunction(QuestionIndexFunction);

  
    const GetQuestionId = new GC.Spread.CalcEngine.Functions.AsyncFunction("GET_QUESTION_ID", 1, 1, {name: "GET_QUESTION_ID", description: "Returns Question ID From Value By Index"});
    GetQuestionId.evaluate = (context, position) => {
      fetch(`/api/spread/display/${position}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => response.json())
      .then(data => {
        context.setAsyncResult(data.data[0].survey_questions_key);
      })
      .catch(error => {
        context.setAsyncResult(`Error: ${error}`);
      });

    };
    spread.addCustomFunction(GetQuestionId);
    

    // ANSWER_BY_ID CUSTOM FUNCTION

      const AnswerById = new GC.Spread.CalcEngine.Functions.AsyncFunction("ANSWER_BY_ID", 1, 1,
       {  
        name: "Answer_By_ID", 
        description: "Returns Answers From Question ID"});

        AnswerById.evaluate = (context, survey_questions_name) => {
        fetch(`/api/spread/display/answer/${survey_questions_name}`,
        {
          method: "POST",
          headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${user.token}`,
          },
        })
          .then(response => response.json())
          .then(data => {
            context.setAsyncResult(data.answer); // Use lowercase "answer" instead of "Answer"
          })
          .catch(error => {
            context.setAsyncResult(`Error: ${error}`);
          });
      };

    spread.addCustomFunction(AnswerById);


    // spread.resumePaint();
  }, []);

  return (
    <div className="sample-tutorial">
      <div className="sample-spreadsheets">
        <SpreadSheets workbookInitialized={initSpread} hostStyle={hostStyle}>
          {/* <Worksheet /> */}
        </SpreadSheets>
      </div>
    </div>
  );
};

export default SpreadJSApp;

  // GET QUESTION ID CUSTOM FUNCTION

    // const GetQuestionId = new GC.Spread.CalcEngine.Functions.AsyncFunction("GET_QUESTION_ID", 1, 1, {
    //   name: "GET_QUESTION_ID",
    //   description: "Returns Question ID From Value By Index"
    // });
    
    // GetQuestionId.evaluate = async (context, position) => {
    //   try {
    //     const response = await fetch(`http://localhost:4001/api/display/${position}`);
        
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
        
    //     const data = await response.json();
        
    //     if (data && data.data && data.data.length > 0) {
    //       // Assuming the response structure matches the server-side controller
    //       context.setAsyncResult(data.data[0].Question_ID);
    //     } else {
    //       context.setAsyncResult("Question not found");
    //     }
    //   } catch (error) {
    //     context.setAsyncResult(`Error: ${error.message}`);
    //   }
    // };
    
    // spread.addCustomFunction(GetQuestionId);