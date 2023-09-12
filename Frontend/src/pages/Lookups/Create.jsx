import React from 'react'
import Navbar from '../../components/Navbar'
import AdminSidebar from '../../components/AdminSidebar'
import '../Lookups/Lookups.css'
import { useAuthContext } from "../../hooks/useAuthContext";
// import { addLookups, lookupsShow, section } from './Lookupsjs';
import Sidebar_content from '../../components/Admin/Lookups/Sidebar_content';
import HelpRequest from '../../components/HelpRequest';
import { useState, useEffect } from 'react';
import { Link, withRouter, useLocation } from "react-router-dom";


const LookupsCreate = () => {
    const [inputSections, setInputSections] = useState([]);
    const [lookupsData, setlookupsData] = useState([]);

    const { user } = useAuthContext();

    const addNewSection = () => {
        setInputSections(prevSections => [
            ...prevSections,
            {
                id: inputSections.length + 1,

            }
        ]);
    };

    useEffect(() => {
        if (user) {
            
            getLookupsdata();
        
        

         if(document.getElementById('addlookups')){
            document.getElementById('addlookups').addEventListener("click", async function () {
              
            })
          }
        }
    },[user])
    
    const getLookupsdata = async () => {
        try {
            const response = await fetch('/api/lookups/get', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },

            });
            if (response.ok) {
                const lookups = await response.json();
                if(lookups.status == "Success")
                {
                    setlookupsData(lookups.data);
                }

            }
        } catch (error) {
            console.log(error);
        }
    }
    
    const deleteSection = (event, id) => {
        setInputSections(prevSections =>
            prevSections.filter(section => section.id !== id)
        );
    };


    const [checkedSections, setCheckedSections] = useState([]);

   
    const toggleCheckmark = async (event, sectionId) => {

        var node = event.currentTarget.parentNode.parentNode;
            var lookups = node.querySelector('input[name="lookups_name"]').value;
            var code = node.querySelector('input[name="code"]').value;
            var parentlookup = node.querySelector('select[name="parentlookup"]').value;

            if (code.length < 3) {
                alert("Code Length should be atleast 3 characters.")
                return
            }
            var value1 = node.querySelector('input[name="value1"]').value;
            var regex = /^[0-9]+$/; // Regular expression to match only numeric characters
            if (!regex.test(value1)) {
            alert("Value1 should only contain numbers.");
            return;
                    }
            
            var value2 = node.querySelector('input[name="value2"]').value;
            var lookups_accesskey = document.getElementById('class_name_id').value;
            var access_key_id = event.currentTarget.getAttribute("data-id");
            var disable = 1;
            if (node.querySelector('input[name="disable"]').checked == true) {
                disable = 2;
            }
            var lookups_data = {
                lookups_name: lookups,
                code: code,
                value1: value1,
                value2: value2,
                disable: disable,
                lookups_accesskey: lookups_accesskey,
                access_key_id: access_key_id,
                parent_lookups_data:parentlookup
            }
            console.log(lookups_data)

            try {
                const response = await fetch('/api/lookups_data/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`,
                    },
                    body: JSON.stringify(lookups_data)
                });
                if(response.ok)
                {
                    const lookups = await response.json();
                    if(lookups.status == "Success")
                    {
                        alert(lookups.message)
                    }else{
                        alert(lookups.message)

                    }
                }else{
                    alert("Failed")

                }
            }
            catch(error){
                alert(error)

            }
        setCheckedSections((prevCheckedSections) => {
          if (prevCheckedSections.includes(sectionId)) {
            return prevCheckedSections.filter((id) => id !== sectionId);
          } else {
            return [...prevCheckedSections, sectionId];
          }
        });
      };

    const addLookups = async () => {

        if(user){
            var class_name = document.querySelector('input[name=class_name]').value
              if(class_name)
              {
                  try {
                      const response = await fetch('/api/lookups/add', {
                          method: 'POST',
                          headers: {
                              'Content-Type': 'application/json',
                              'Authorization': `Bearer ${user.token}`,
                          },
                          body: JSON.stringify({class_name})
                      });
                      if(response.ok)
                      {
                          const lookups = await response.json();
                          if(lookups.status == "Success")
                          {
                              console.log(lookups.data)
                            //   alert(lookups.message)
                              document.querySelector('input[name=class_name_id').value = lookups.data.lookups_accesskey;
                              let addLookup = document.getElementById("add-lookup");
                              let savCan = document.getElementById("removeandadd")
                              addLookup.style.display = "block";
                              addLookup.style.marginTop = "50px";
                              savCan.style.display="none";
                            //   var link_element = document.getElementById('redirectLink');
                            //   link_element.setAttribute('state',lookups.data);
                            //   link_element.click();
                          }else{
                               console.log(1)

                              alert(lookups.message)
                          }
                      }else{
                          console.log(2)

                          alert("Failed to add")
                      }
                  }catch(error)
                  {
                    console.log(3)

                      alert(error)
                  }
            }
        }
    }

    return (
        <div>
            <input type="hidden" name="class_name_id" id="class_name_id"/>
            <Navbar />
            <AdminSidebar />
            <div className="bread">
                <ul className="breadcrumbs">
                    <li className="breadcrumbs--item">
                        <a href='/' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>HOME</a>
                    </li>
                    <li className="breadcrumbs--item">
                        <a href='/catalog' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>ADMIN</a>
                    </li>
                    <li className="breadcrumbs--item">
                        <a href="" className="breadcrumbs--link breadcrumbs--link--active">LOOKUPS</a>
                    </li>
                </ul>
                <hr className="hr" />
            </div>
            <HelpRequest />
            {/* -------------------------- */}
            <div className="rowlookups">

                <Sidebar_content data={lookupsData}/>

                <div className="rightlookups">
                    <div id="LookupsShow" style={{ display: 'block' }}>
                        {/* -------------creating lookups------------ */}
                        <div id="lookupsradio" style={{display:"flex"}}>
                           <input type="radio" id="all" name="a" value="0" checked required/>
                           <label for="all">ALL</label>
                            <input type="radio" id="enabled" name="a" value="1" required/>
                            <label for="enabled">ENABLED</label>
                            <input type="radio" id="disabled" name="a" value="2" required/>
                            <label for="disabled">DISABLED</label>
                        </div>
                        <div id="headerlookups"><a>LOOKUPS</a></div>
                        <div id="classname">
                            <input type="text" name="class_name" id="class_name" />
      
                            <label>CLASS NAME</label>
                        </div>
                        <div id="removeandadd" style={{ display: 'block' }}>
                            <button id="removelookups" type="reset" style={{ color: 'red' }}>CANCEL</button>
                            <button id="addlookups" type="submit" style={{ color: 'rgb(0, 79, 128)' }} onClick={addLookups}>ADD</button>
                        </div>
                    </div>
                    <div id="add-lookup" style={{ display: 'none' }}>
                        <div className="lookupscontainer">
                            <div id="contentL1">
                                <label className='lookupscontainerlabel'>LOOKUPS</label>
                            </div>
                            <div id="contentL2">
                                <label className='lookupscontainerlabel'>CODE</label>
                            </div>
                            <div id="contentL3">
                                <label className='lookupscontainerlabel'>VALUE1</label>
                            </div>
                            <div id="contentL4">
                                <label className='lookupscontainerlabel'>VALUE2</label>
                            </div>
                            <div id="contentL5">
                                <label className='lookupscontainerlabel'>Parent Lookups</label>
                            </div>
                            <div id="contentL4">
                                <label className='lookupscontainerlabel'>DISABLE</label>
                            </div>
                        </div>

                        <div>
      {inputSections.map((section) => (
        <div key={section.id} className="inputSection">
          {/* Render input fields and other elements */}
          <input type="text" name="lookups_name"/>
          <input type="text" name="code"/>
          <input type="text" name="value1"/>
          <input type="text" name="value2"/>
          <select name="parentlookup" id="parentlookup">
          </select>
          <input type="checkbox" name="disable" value="1"/>
            <div>
                <i className="fa fa-xmark" onClick={(event) => deleteSection(event,section.id)}></i>
                <i className={checkedSections.includes(section.id) ? 'fa fa-check-circle' : 'fa fa-circle'} id="checkmark" onClick={(event) => toggleCheckmark(event, section.id)}></i>
             </div>
         
        </div>
      ))}
    </div>
                        <button id="toggleButton" onClick={addNewSection}><i className="fa fa-plus" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LookupsCreate;