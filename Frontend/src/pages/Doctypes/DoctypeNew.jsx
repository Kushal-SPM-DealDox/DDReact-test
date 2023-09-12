import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import CatalogSidebar from '../../components/CatalogSidebar';
import CatalogBreadCrumb from '../../components/CatalogBreadCrumb';
import './DoctypeNew.css'
import WriteFlexPeople from '../../components/WriteflexPeople';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faClone, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FaWhatsappSquare } from 'react-icons/fa';


function RepeatedDropDown({ name, label_field, textFields, options, handleTextChange, selectedDiv, toggleDropdown, handleCancelSelection, handleSelectOption }) {
    return (
        <div id="contentBV">
            <input type="text"
                name={name}
                value={textFields[name].values}
                onClick={selectedDiv}
                onChange={handleTextChange}
            />
            <i id="toggleArrow" name={name}
                className={`fa fa-caret-${textFields[name].isDropdownOpen ? 'up' : 'down'}`}
                onClick={toggleDropdown}
            ></i>
            <i id="cancelButton" name={name}
                className={`fa fa-times-circle cancelIcon ${textFields[name].selectedOption ? 'active_doc' : 'hidden'}`}
                onClick={handleCancelSelection}
            ></i>
            <label className='label'>{label_field}</label>
            {textFields[name].isDropdownOpen && (
                <ul className="dropdownOptionscatecatalog">
                    {options[name]
                        .filter((option) => option !== textFields[name].selectedOption)
                        .map((option, index) => (
                            <li key={index} name={name} onClick={(e) => handleSelectOption(e, option)}>
                                {option}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
}

function RepeatCheckTickDiv({ name, label_field, textFields, changetickMark }) {
    return (
        <div id="internaltick">
            <input
                className="tick"
                type="checkbox"
                name={name}
                checked={textFields[name].checked}
                onChange={changetickMark}
            />
            <label className="tick">{label_field}</label>
        </div>
    );
}

const handlefileSelection = async (name) => {
    const ele = document.getElementById(name)
}

function RepeatFileDiv({ name, label_field }) {
    // console.log(document.getElementById({ name }))
    return (
        <div id="contentBV">
            <input type="file" name={name} id={name} accept=".doc, .docx" />
            {/* style={{display: 'none'}} or hidden */}
            <i id="fileIcon" className="fa-solid fa-cloud-arrow-up" onClick={() => handlefileSelection(name)} />

            {document.getElementById(name)?.value !== '' ?
                <>
                    <i id="fileIcon" className="fa-solid fa-cloud-arrow-down" />
                    <i id="cancelfileicon" className="fa-solid fa-x" />
                </> : ''
            }
            <label className='label' id='label2'>{label_field}</label>
        </div>
    );
}

function DoctypeNew() {

    const buttonRef = useRef(null);
    const [selectedButton, setSelectedButton] = useState(null);

    const [data, setData] = useState([]);
    const [docId, setDocId] = useState(null);

    // const [initialformData] = useState({
    //     doc_name: '',
    //     catgory: '',
    //     status: '',
    //     purpose: '',
    //     paper_size: '',
    //     watermark: false,
    //     toc: false,
    //     // watermark_file: '',
    //     // template_file: '',
    //     sections: [],
    // })

    //const [formData, setFormData] = useState({});


    const [initialtextFields] = useState({
        doc_name: { values: '' },
        category: { values: '', isDropdownOpen: false, selectedOption: '' },
        status: { values: '', isDropdownOpen: false, selectedOption: '' },
        purpose: { values: '', isDropdownOpen: false, selectedOption: '' },
        paper_size: { values: 'INHERIT FROM WORD TEMPLATE', isDropdownOpen: false, selectedOption: 'INHERIT FROM WORD TEMPLATE' },
        watermark: { checked: false },
        toc: { checked: false },
    })

    const [textFields, settextFields] = useState({ ...initialtextFields });

    // useEffect(() => {
    //     // const initialCopy = JSON.parse(JSON.stringify(textFields));
    //     settextFields({ ...textFields, ...initialtextFields});
    // }, [])

    const [sections, setSections] = useState([]);


    const options = {
        category: ['DBA', 'DSOM', 'DEFAULT', 'EDUCATION', 'IZOT'],
        status: ['IN ACTIVE', 'IN PROGRESS', 'PUBLISHED'],
        purpose: ['DOCUMENT', 'EMAIL', 'MEETING'],
        paper_size: ['INHERIT FROM WORD TEMPLATE', 'LETTER', 'LEGAL'],
    }

    const handleTextChange = (event) => {
        const { name, value } = event.target;
        const passedval = value.trim()?.toUpperCase()
        const flag = (options[name])?.includes(passedval)

        const updatedTextFields = Object.keys(textFields).reduce((acc, key) => {
            if (key === name) {
                if (acc[key]?.hasOwnProperty('isDropdownOpen') && acc[key]?.hasOwnProperty('selectedOption')) {
                    acc[key].values = passedval;
                    acc[key].selectedOption = (flag) ? passedval : '';
                    acc[key].isDropdownOpen = (flag) ? false : true;
                } else {
                    acc[key].values = passedval;
                }
            }
            return acc;
        }, { ...textFields });
        settextFields({ ...textFields, ...updatedTextFields });
    };

    const toggleDropdown = async (e) => {
        const name = e.target.getAttribute('name');
        settextFields((prevState) => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                isDropdownOpen: !prevState[name].isDropdownOpen
            }
        }))
    }

    const selectedDiv = async (e) => {
        const { name } = e.target;
        const updatedTextFields = Object.keys(textFields).reduce((acc, key) => {
            if (key === name && (acc[key]?.isDropdownOpen === false)) {
                acc[key].isDropdownOpen = true;
            } else if (key !== name && acc[key]?.isDropdownOpen === true) {
                acc[key].isDropdownOpen = false;
            }
            return acc;
        }, { ...textFields });
        settextFields({ ...textFields, ...updatedTextFields });
    }

    const handleCancelSelection = async (e) => {
        const name = e.target.getAttribute('name');
        settextFields((prevState) => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                selectedOption: '',
                values: ''
            }
        }))
    };

    const handleSelectOption = (e, option) => {
        const name = e.target.getAttribute('name');
        settextFields((prevState) => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                selectedOption: option,
                values: option,
                isDropdownOpen: false,
            }
        }))
    };

    const changetickMark = (event) => {
        const { name, checked } = event.target;
        settextFields((prevState) => ({
            ...prevState,
            [name]: {
                checked: checked
            }
        }))
    }

    const handleDownloadClick = () => {
        // Set the desired content for the Word document
        // Create a new Blob object with the desired content (e.g., Word document content)
        const wordContent = "This is the content of the Word file.";
        const blob = new Blob([wordContent], { type: 'application/msword' });

        // Create a temporary anchor element to trigger the download
        const anchor = document.createElement('a');
        anchor.href = URL.createObjectURL(blob);
        anchor.download = 'document.doc'; // Set the desired filename with the .doc extension
        anchor.click();

        // Clean up the temporary anchor element
        URL.revokeObjectURL(anchor.href);
        anchor.remove();
    };

    const addSection = () => {
        let index = sections.length;
        // setSections([...sections, { section_name: "", section_tag: "", id: (Date.now()).toString() }]);
        setSections([...sections, { section_name: "", section_tag: "", id : index}]);
    };

    const handleSectionTextChange = (e, id) => {
        const index = sections.findIndex((section) => section.id === id);
        const { value } = e.target;
        const passedval = value.trim()?.toUpperCase()
        const modifiedObject = { ...sections[index], section_name: passedval, section_tag: `SECTIONS_${passedval}` }
        setSections((prevState) => ([
            ...prevState.slice(0, index),
            modifiedObject,
            ...prevState.slice(index + 1),
        ]))
    };

    //console.log(sections);
    const handleButtonClick = async (section) => {
        const {id, section_id, doc_id} = section
        const button = document.getElementById(`delete-button-${id}`);

        if (button && button.classList.contains('highlightedsection')) {
            // Second click, remove section
            setSections(sections.filter((section) => section.id !== id));
            console.log(section.section_id);
            if (section_id) {
                try {
                    const response = await fetch(`http://localhost:4001/api/doctype/deleteSection/${section_id}`, {
                        method: "DELETE",
                    })
                    const res = response.json();
                    console.log(res, response);
                    if (response.status) {
                        fetchData();
                        console.log(data);
                    }
                } catch (err) {
                    console.log(err);
                }
            }
            setSelectedButton(null); // Clear selected button state
        } else {
            // First click, highlight button
            setSelectedButton(id);
        }


        // try {
        //     const templateInput = document.getElementById('templete_file');
        //     const watermarkInput = document.getElementById('watermark_file');
        //     const response = await fetch(`http://localhost:4001/api/doctype/delete/${docId}`, {
        //         method: "DELETE",
        //     })
        //     const res = response.json();
        //     console.log(res, response);
        //     if (response.status) {
        //         handleClick();
        //         templateInput.value = '';
        //         watermarkInput.value = '';
        //     } else {
        //         alert('Error creating Doctype !');
        //     }
        //     fetchData();

        // } catch (err) {
        //     console.log(err);
        // }
    };


    const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setSelectedButton(null); // Clear selected button state
        }
    };

    useEffect(() => {
        // Add event listener when component mounts
        window.addEventListener('click', handleClickOutside);

        // Clean up event listener when component unmounts
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleMoveUp = (id) => {
        const index = sections.findIndex((section) => section.id === id);
        if (index > 0) {
            const updatedSections = [...sections];
            const currentSection = updatedSections[index];
            currentSection.id = id-1;
            const previousSection = updatedSections[index - 1];
            previousSection.id = id;
            updatedSections[index] = previousSection;
            updatedSections[index - 1] = currentSection;
            setSections(updatedSections);
        }
    };

    const handleMoveDown = (id) => {
        const index = sections.findIndex((section) => section.id === id);
        if (index < sections.length - 1) {
            const updatedSections = [...sections];

            updatedSections[index].id = index+1;
            updatedSections[index+1].id = index;
            // Swap the current section with the next section
            [updatedSections[index], updatedSections[index + 1]] = [updatedSections[index + 1], updatedSections[index]];
            setSections(updatedSections);
        }
    };

    const fetchData = async () => {
        try {
            let response = await fetch('http://localhost:4001/api/doctype/get', {
                method: "GET",
            })
            const json = await response.json()
            if (json) {
                const data = json.data.sort((a, b) => b.createdAt - a.createdAt);
                setData(data);
                console.log(json.data.sort((a, b) => b.createdAt - a.createdAt));
                console.log(data.filter(item => item.doc_id===docId ))
                if(docId && data.length>0){
                    handleShow(data.filter(item => item.doc_id===docId)[0]);
                }else{
                    handleShow(data[0]);
                }
            }
        } catch (error) {
            console.error("Error: ", error)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    //console.log(sections);

    const updateDoc = async () => {
        if (!textFields.doc_name.values || !textFields.status.selectedOption) {
            alert('Document Name and Catalog Status are necessary fields !');
            return;
        }
        try {
            const formData = new FormData();
            formData.append('doc_name', textFields.doc_name.values)
            formData.append('category', textFields.category.selectedOption)
            formData.append('paper_size', textFields.paper_size.selectedOption)
            formData.append('purpose', textFields.purpose.selectedOption)
            formData.append('status', textFields.status.selectedOption)
            formData.append('watermark', textFields.watermark.checked)
            formData.append('toc', textFields.toc.checked)
            formData.append('sectionData', JSON.stringify(sections)) // sending this sections array as JSON string, which we will parse in backedn with JSON.parse

            console.log("JSON", JSON.stringify(sections))
            const templateInput = document.getElementById('templete_file');
            if (templateInput.files[0]) {
                formData.append('template_file', templateInput.files[0]);
            }

            const watermarkInput = document.getElementById('watermark_file');
            if (watermarkInput.files[0]) {
                formData.append('watermark_file', watermarkInput.files[0]);
            }

            console.log("form", formData);
            const response = (docId) ?
                await fetch(`http://localhost:4001/api/doctype/update/${docId}`, {
                    method: 'PUT',
                    body: formData,
                }) :
                await fetch('http://localhost:4001/api/doctype/add', {
                    method: 'POST',
                    body: formData,
                })

            const res = response.json();
            console.log(res, response);
            if (response.status) {
                settextFields({ ...initialtextFields });
                setSections([]);
                templateInput.value = '';
                watermarkInput.value = '';
            } else {
                alert('Error creating Doctype !');
            }
            fetchData();
            //handleClick();
            // setErrorMessage("");
            // setErrorMessageRoles("");
        } catch (err) {
            console.log(err);
        }

    }

    const deleteDoc = async () => {
        if (!docId) {
            handleClick();
        } else {
            try {
                const templateInput = document.getElementById('templete_file');
                const watermarkInput = document.getElementById('watermark_file');
                const response = await fetch(`http://localhost:4001/api/doctype/delete/${docId}`, {
                    method: "DELETE",
                })
                const res = response.json();
                console.log(res, response);
                if (response.status) {
                    handleClick();
                    templateInput.value = '';
                    watermarkInput.value = '';
                } else {
                    alert('Error creating Doctype !');
                }
                fetchData();

            } catch (err) {
                console.log(err);
            }
        }

    }

    const handleShow = (datas) => {
        console.log(datas);
        const { doc_id, sections, watermark_file, template_file, ...gotTextData } = datas;
        setDocId(doc_id);
        setSections(sections);
        const updatedTextFields = Object.keys(gotTextData).reduce((updatedFields, key) => {
            console.log("key :", key)
            if (textFields.hasOwnProperty(key)) {
                const updatedField = { ...textFields[key] };
                console.log(updatedField);

                if (textFields[key].hasOwnProperty('selectedOption')) {
                    updatedField.values = gotTextData[key];
                    updatedField.selectedOption = gotTextData[key];
                    updatedField.isDropdownOpen = false;
                } else if (textFields[key].hasOwnProperty('values')) {
                    updatedField.values = gotTextData[key];
                } else if (textFields[key].hasOwnProperty('checked')) {
                    updatedField.checked = gotTextData[key];
                }

                updatedFields[key] = updatedField;
                console.log(updatedFields);
            }
            return updatedFields;
        }, {});
        settextFields({ ...textFields, ...updatedTextFields })

        // let templateInput = document.getElementById("template_file")
        // if(templateInput && template_file){
        //     templateInput.value = template_file;
        // }
        // let watermarkInput = document.getElementById("watermark_file")
        // if(watermarkInput && watermark_file){
        //     watermarkInput.value = watermark_file;
        // }
    }
    console.log("sections :", sections);

    const handleClick = () => {
        setSections([]);
        const resetTextFields = {};
        for (const field in initialtextFields) {
            resetTextFields[field] = { ...initialtextFields[field] };
        }
        settextFields(resetTextFields);
        setDocId(null);
    }

    // console.log(initialtextFields);
    // console.log(textFields);

    return (
        <div class="d-flex flex-column">
            <Navbar />
            <CatalogBreadCrumb page="DOCTYPE" />
            <CatalogSidebar />
            <div className='rowdoctypes'>
                <div className='row1' >
                    <WriteFlexPeople compName="doctypes" data={data} handleShow={handleShow} />
                    <div className="plusiconDoctype1">
                        <i className="fa fa-plus" style={{ cursor: "pointer" }} onClick={handleClick} />
                    </div>
                </div>
                <div className="row2">
                    {/* <form onSubmit={handleSubmit}> */}

                    <div id="header">
                        <a>DOCUMENT TYPES</a>
                        <div className="worddocdowicon" onClick={handleDownloadClick}>
                            <i className="fas fa-file-word"></i>
                            <span id="wordtemplatelabel">BASE TEMPLATE</span>
                        </div>
                    </div>

                    <div className="containerBV">
                        <div id="contentBV">
                            <input type="text"
                                name="doc_name"
                                value={textFields["doc_name"].values}
                                onChange={handleTextChange}
                                onClick={selectedDiv}
                            />
                            <label className='label'>DOCUMENT</label>
                        </div>
                        <RepeatedDropDown name="category"
                            label_field="CATALOG CATEGORY"
                            textFields={textFields}
                            options={options}
                            handleTextChange={handleTextChange}
                            selectedDiv={selectedDiv}
                            toggleDropdown={toggleDropdown}
                            handleCancelSelection={handleCancelSelection}
                            handleSelectOption={handleSelectOption}
                        />
                        <RepeatedDropDown name="status"
                            label_field="CATALOG STATUS"
                            textFields={textFields}
                            options={options}
                            handleTextChange={handleTextChange}
                            selectedDiv={selectedDiv}
                            toggleDropdown={toggleDropdown}
                            handleCancelSelection={handleCancelSelection}
                            handleSelectOption={handleSelectOption}
                        />
                        <RepeatedDropDown name="purpose"
                            label_field="PURPOSE"
                            textFields={textFields}
                            options={options}
                            handleTextChange={handleTextChange}
                            selectedDiv={selectedDiv}
                            toggleDropdown={toggleDropdown}
                            handleCancelSelection={handleCancelSelection}
                            handleSelectOption={handleSelectOption}
                        />
                        <RepeatFileDiv name="templete_file"
                            label_field="TEMPLATE NAME"
                        />
                        <RepeatedDropDown name="paper_size"
                            label_field="PAPER SIZE"
                            textFields={textFields}
                            options={options}
                            handleTextChange={handleTextChange}
                            selectedDiv={selectedDiv}
                            toggleDropdown={toggleDropdown}
                            handleCancelSelection={handleCancelSelection}
                            handleSelectOption={handleSelectOption}
                        />
                        <RepeatFileDiv name="watermark_file"
                            label_field="WATERMARK FILE"
                        />
                        <div id="contentBV" className='checkdiv'>
                            {['watermark', 'toc'].map((item) => {
                                return (
                                    <RepeatCheckTickDiv name={item}
                                        label_field={item.toUpperCase()}
                                        textFields={textFields}
                                        changetickMark={changetickMark}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div id="headersectionDoctype">
                        <a>SECTIONS</a>
                    </div>

                    <div className="containersectionDoc">
                        <label >Reorder Sections</label>
                        <label >Section Name</label>
                        <label >Section Tag</label>
                    </div>

                    {sections?.slice().sort((a, b) => a.id - b.id).map((section, index) => (
                        <div key={section.id}>
                            <div className="addsectionbuttoninput">
                                <div>
                                    <div id="textsection1">
                                        {index > 0 && (
                                            <button id="moveupdoctype"
                                                onClick={() => handleMoveUp(section.id)}
                                            >
                                                MOVEUP
                                            </button>
                                        )}
                                        {index < sections.length - 1 && (
                                            <button
                                                id="movedowndoctype"
                                                className={index === 0 ? 'movedownDoctype' : ''}
                                                onClick={() => handleMoveDown(section.id)}
                                                style={index === 0 ? { marginLeft: '45px' } : {}}
                                            >
                                                MOVEDOWN
                                            </button>

                                        )}
                                    </div>
                                </div>
                                <div id='doctypesectionnmae'>
                                    <input
                                        type="text"
                                        name="section_name"
                                        id={"textsection2"} // Add unique ID for each section
                                        value={section.section_name}
                                        onChange={(event) => handleSectionTextChange(event, section.id)}
                                    />
                                    <i className="fa fa-pencil" aria-hidden="true" id="editsectionDctype" />

                                    <label htmlFor={`textsection2`} id="sectionNAMElabel21">
                                        SECTION NAME
                                    </label>

                                    {/* {sectionErrors[index] && <div className="errormessagedoctype">{sectionErrors[index]}</div>} */}
                                </div>
                                <div className="input-with-copy">
                                    <div>
                                        <input
                                            type="text"
                                            id={`textsection3`}
                                            name="section_tag"
                                            value={section.section_tag === "" ? `SECTIONS_` : section.section_tag}
                                        //value={textFields["section_name"].values}
                                        />
                                        <label htmlFor="textsection3" id="sectionNAMElabel22">SECTION TAG</label>
                                    </div>
                                </div>
                                <div>
                                    {section.textsection2 && (
                                        <button className="copy-buttonsection"
                                        // onClick={() => handleCopy(`Value to be copied: ${section.textsection2}`)}
                                        >
                                            <FontAwesomeIcon icon={faClone} />
                                        </button>
                                    )}
                                </div>
                                <div>
                                    <button id={`delete-button-${section.id}`}
                                        className={`delete-buttonsection ${selectedButton === section.id ? 'highlightedsection' : ''}`}
                                        onClick={() => handleButtonClick(section)}
                                    >
                                        <FontAwesomeIcon icon={faTrashAlt} /></button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div class="buttonsection">
                        <button id="addsectionbuttoncss"
                            onClick={addSection}
                        >
                            + Add Section
                        </button>
                    </div>

                    <div class="buttonsectionUP">
                        <div className='classbtn'>
                            <button id="buttonUpDate" onClick={updateDoc} >UPDATE</button>
                        </div>
                        <div className='classbtn'>
                            <button id="buttonDelete" onClick={deleteDoc}>DELETE</button>
                        </div>
                    </div>

                    {/* </form> */}
                </div>
            </div >
        </div >
    );
}

export default DoctypeNew;