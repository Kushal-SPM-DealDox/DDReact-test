import React, { useEffect, useState } from 'react';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { saveAs } from 'file-saver';
import htmlDocx, { comment } from 'html-docx-js/dist/html-docx';

const Doc = ({keys, onDatafromChild}) => {
    //{keys, onDatafromChild}
    const [editorHtml, setEditorHtml] = useState('');
    //console.log(keys);

    // Handle HTML content changes in the editor
    const handleEditorChange = (html) => {
        setEditorHtml(html);
        // onDatafromChild({
        //         key: keys,
        //         valueHtml: editorHtml,
        // });
        
    };

    // onDatafromChild = () => {
    //     // Here, we use an object to send both the unique dataId and the actual data value
    //     const dataToSend = ;
    //     console.log(dataToSend);
    //     return dataToSend;
    //   };

    useEffect(() => {
        onDatafromChild({
            key: keys,
            valueHtml: editorHtml,
          });
    }, [editorHtml]);

    return (
        <div>
            <FroalaEditorComponent
                model={editorHtml}
                onModelChange={handleEditorChange}
            />
            {/* <button onClick={generateDocx}>Generate and Download</button> */}
        </div>

    );
};

export default Doc;
