import React from 'react'
import Navbar from '../../components/Navbar';
import AdminSidebar from '../../components/AdminSidebar';
import HelpRequest from '../../components/HelpRequest';
import { useState, useEffect} from 'react';
import "../Security/Security.css";
import WriteFlexSecurity from '../../components/WriteFlexSecurity';


const Security = () => {

  const [showAnotherComponent, setShowAnotherComponent] = useState(false);
  const [writeFormData, setWriteFormData] = useState(false);
  const [roleId, setRoleId] = useState(null);

  const [inputValueSecurity, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValueSecurityRoles, setInputValueRoles] = useState("");
  const [errorMessageroles, setErrorMessageRoles] = useState("");

  let role = inputValueSecurity;
  let description = inputValueSecurityRoles;
  const twoData = { role, description };

  const [dataVal, setDataval] = useState([]);

  const [initialData, setInitialData] = useState([
    { page: 'Account', name: 'account', none: false, readOnly: false, access: false },
    { page: 'Opportunity', name: 'opportunity', none: false, readOnly: false, access: false },
    { page: 'Opportunity-Stage', name: 'opportunity_stage', none: false, readOnly: false, access: false },
    { page: 'Quote', none: false, name: 'quote', readOnly: false, access: false },
    { page: 'Quote Add', none: false, name: 'quote_add', readOnly: false, access: false },
    { page: 'Quote Guidedselling Answer', name: 'quote_guideselling_answer', none: false, readOnly: false, access: false },
    { page: 'Quote Guidedselling Design', name: 'quote_guideselling_design', none: false, readOnly: false, access: false },
    { page: 'Catalog', name: 'catalog', none: false, readOnly: false, access: false },
    { page: 'Catalog Roles', name: 'catalog_roles', none: false, readOnly: false, access: false }
  ]);

  const [data, setData] = useState(initialData);

  const sendArray = {
    twoData: twoData,
    data: data
  }
  console.log("sendArray: ", sendArray);

  const handleShowClick = () => {
    setRoleId(null);
    if (!writeFormData) {
      if (showAnotherComponent) {
        setShowAnotherComponent(false);
        setData(initialData);
        setInputValue("");
        setInputValueRoles("");
        setErrorMessage("");
        setErrorMessageRoles("");
      } else {
        setShowAnotherComponent(true);
      }
    } else {
      if (!showAnotherComponent) {
        setShowAnotherComponent(true);
      } else {
        setData(initialData);
        setInputValue("");
        setInputValueRoles("");
        setErrorMessage("");
        setErrorMessageRoles("");
        setWriteFormData(false);
      }
    }
  };

  const handleShow = (datas) => {
    setShowAnotherComponent(true);
    setWriteFormData(true);
    const { role_id, updatedAt, createdAt, role, description, ...rest } = datas;

    setInputValue(role);
    setInputValueRoles(description);
    setErrorMessage("");
    setErrorMessageRoles("");

    const updatedData = initialData.map((item) => {
      let categoryName = rest[item.name];
      console.log("category: ", categoryName);
      if (categoryName) {
        console.log(categoryName, item[categoryName]);
        return { ...item, [categoryName]: true };
      }
      return item;
    })
    setData(updatedData);
    setRoleId(role_id);
  }

  function handleInputChange(page, property, property1, property2, value) {
    const updatedData = data.map((item) => {
      if (item.page === page) {
        return { ...item, [property]: value, [property1]: false, [property2]: false };
      }
      return item;
    });
    setData(updatedData);
    console.log(updatedData);
  };


  const handleChangeSecurity = (event) => {
    const securityLabe = document.querySelectorAll('#reqmsgs');
    const securityLabel = [...securityLabe];
    console.log("securitylabel : ", securityLabel);
    const inputField = event.target;
    const value = inputField.value;
    setInputValue(value);
    if (value.length > 0) {
      setErrorMessage("");
      securityLabel[0].style.display = "block";
      inputField.style.outlineColor = "#0f6b93";
    } else {
      setErrorMessage("SECURITY ROLE IS A REQUIRED FIELD");
      securityLabel[0].style.display = "block";
      inputField.style.outlineColor = "red";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValueSecurity.length === 0) {
      setErrorMessage("TITLE IS A REQUIRED FIELD");
    }
    else {
      // Proceed with form submission or further processing
    }
  };

  const handleChangeSecurityRoles = (event) => {
    const roleslabe = document.querySelectorAll('#reqmsgrole');
    const roleslabel = [...roleslabe];
    console.log("roleslabel: ", roleslabel);
    const inputField = event.target;
    const value = inputField.value;
    setInputValueRoles(value);
    if (value.length > 0) {
      setErrorMessageRoles("");
      roleslabel[0].style.display = "block";
      inputField.style.outlineColor = "#0f6b93";
    } else {
      setErrorMessageRoles("ROLE DESCRIPTION IS A REQUIRED FIELD");
      roleslabel[0].style.display = "block";
      inputField.style.outlineColor = "red";
    }
  };

  const handleSubmitRoles = async (e) => {
    e.preventDefault();
    if (inputValueSecurityRoles.length === 0) {
      setErrorMessageRoles("TITLE IS A REQUIRED FIELD");

    }
    else {
      // Proceed with form submission or further processing
    }
  };


  const fetchData = async () => {
    try {
      let response = await fetch('http://localhost:4001/api/security/', {
        method: "GET",
      })
      const json = await response.json()
      if (json) {
        setDataval(json.data);
      }
    } catch (error) {
      console.error("Error: ", error)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const sendArrayData = async () => {
    if (!twoData.role || !twoData.description) {
      alert('Role and description is required !');
      return;
    }
    try {
      console.log("data1 :", data);
      const result = data.reduce((acc, obj) => {
        const { page, name, ...rest } = obj;
        for (const key in rest) {
          if (rest[key] === true) {
            acc[name] = key;
            break; // Assuming only one true value per object
          }
        }
        return acc;
      }, {});

      const sendData = {
        ...twoData,
        ...result,
      };
      console.log("senddata : ", sendData);

      const response = (roleId) ?
        await fetch(`http://localhost:4001/api/security/update/${roleId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sendData),
        })
        : await fetch('http://localhost:4001/api/security/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sendData),
        })

      console.log("response : ", response);

      if (response.ok) {
        if (!roleId) {
          alert('Security role created successfully!');
          setData(initialData);
          setInputValue("");
          setInputValueRoles("");
        } else {
          alert('Security role updated successfully!');
        }
        fetchData();
        setErrorMessage("");
        setErrorMessageRoles("");
      } else {
        alert('Unable to create security role!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async () => {
    const response = (roleId) ?
      await fetch(`http://localhost:4001/api/security/delete/${roleId}`, {
        method: 'DELETE',
      }) : ''

    if(response.ok) alert('Security Role deleted successfully!')
    fetchData();
    setData(initialData);
    setInputValue("");
    setInputValueRoles("");
    setErrorMessage("");
    setErrorMessageRoles("");
  }

  return (
    <div>
      <Navbar />
      <AdminSidebar />
      <div className="bread">
        <ul className="breadcrumbs">
          <li className="breadcrumbs--item">
            <a href='/' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>HOME</a>
          </li>
          <li className="breadcrumbs--item">
            <a href='/' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>ADMIN</a>
          </li>
          <li className="breadcrumbs--item">
            <a href="" className="breadcrumbs--link breadcrumbs--link--active">SECURITY</a>
          </li>
        </ul>
        <hr className="hr" />
      </div>
      <HelpRequest />
      <div className="rowsecurity" id="rowssecurity">
        <WriteFlexSecurity compName="Security" data={dataVal} handleShow={handleShow} />

        {/* -------------------------- */}
        <div className="plusiconsecurity">
          <i className="fa fa-plus" id="plusiconsecure" onClick={handleShowClick} />
        </div>
        <div className="rightsecurity">

          <div id="headersecurity">
            {!showAnotherComponent ? `SECURITY ROLES` : writeFormData ? `UPDATE SECURITY ROLES` : `ADD SECURITY ROLES`}
          </div>

          {!showAnotherComponent &&
            <div id="securitytmsgdiv">
              <label id="securitytmsg">
                NO SECURITY FOUND. PLEASE USE + TO ADD A NEW SECURITY
              </label>
            </div>
          }

          {showAnotherComponent &&
            <div id="securitycontentshow">
              <div className='securityrolediv class1'>
                <div id="secutityinputdiv">

                  <form onSubmit={handleSubmit}>
                    <input
                      id="securityinput"
                      type="text"
                      value={inputValueSecurity}
                      onChange={handleChangeSecurity}
                      placeholder="Enter Security Role"

                    />
                    {errorMessage ?
                      <label id="reqmsgs" className='reqmsglabel'>{errorMessage}</label> :
                      <label id="reqmsgs" className="rolelabel"> SECURITY ROLE NAME   </label>
                    }
                  </form>
                </div>
                <div id="rolesinputdiv">

                  <form onSubmit={handleSubmitRoles}>
                    <input
                      id="roleinput"
                      type="text"
                      value={inputValueSecurityRoles}
                      onChange={handleChangeSecurityRoles}
                      placeholder="Enter Role Description"
                    />
                    {errorMessageroles ?
                      <label id="reqmsgrole" className='reqmsglabel'>{errorMessageroles}</label> :
                      <label id="reqmsgrole" className="rolelabel"> ROLES DESCRIPTION  </label>
                    }
                  </form>
                </div>
              </div>
              <label id="label1">options are grey are not yet avaliable</label>
              {/* static contaioner header */}
              <div className="staticcontaionerheader class1">
                <div className='class2'>
                  <label>Page</label>
                </div>
                <div className='class2'>
                  <label>None</label>
                </div>
                <div className='class2'>
                  <label>Read only</label>
                </div>
                <div className='class2'>
                  <label>Access</label>
                </div>
              </div>

              {data.map((item) => {
                return (
                  <div className="class1">
                    <div id={``} className='class2'>
                      {/* <input type="text" value= {item.page} readOnly /> */}
                      <label>{item.page}</label>
                    </div>
                    <div className='class2'>
                      <input
                        type="checkbox"
                        name={`none-${item.name}`}
                        onChange={(event) => {
                          return (
                            handleInputChange(item.page, 'none', 'readOnly', 'access', event.target.checked)
                          );
                        }}
                        //onChange={(event) => { item.none = event.target.checked }}
                        checked={item.none} />
                    </div>
                    <div className='class2'>
                      <input
                        type="checkbox"
                        name={`readonly-${item.name}`}
                        onChange={(event) => {
                          return (
                            handleInputChange(item.page, 'readOnly', 'none', 'access', event.target.checked)
                          );
                        }}
                        // onChange={(event) => { item.readOnly = event.target.checked }}
                        checked={item.readOnly} />
                    </div>
                    <div className='class2'>
                      <input type="checkbox"
                        name={`access-${item.name}`}
                        onChange={(event) => {
                          return (
                            handleInputChange(item.page, 'access', 'none', 'readOnly', event.target.checked)
                          );
                        }}
                        checked={item.access} />
                    </div>
                  </div>
                );
              })}

              <div id="deletesecurity" className='classbutton'>
                <div className='classbuttondiv'></div>
                <button type="button" id="savebutton" className='classbuttondiv' onClick={sendArrayData}>Save Security Role</button>
                <button type="button" id="deletebutton" className='classbuttondiv' onClick={deleteData} >Delete Security Role</button>
                <div className='classbuttondiv'></div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
export default Security;