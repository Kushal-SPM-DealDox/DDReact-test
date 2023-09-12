import React from 'react'
import Navbar from '../../components/Navbar'
import AdminSidebar from '../../components/AdminSidebar'
import '../Lookups/Lookups.css'
import { addLookups, lookupsShow, section } from '../Lookups/Lookupsjs';
import Sidebar_content from '../../components/Admin/Lookups/Sidebar_content';
import HelpRequest from '../../components/HelpRequest';
import { useState, useEffect, useRef } from 'react';
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link, withRouter, useLocation } from "react-router-dom";

import { AvForm, AvField } from "availity-reactstrap-validation"


const Lookups = (props) => {
    const [inputSections, setInputSections] = useState([]);
    const { user } = useAuthContext();
    const [lookupsData, setlookupsData] = useState([]);
    const [lookups_dataData, setlookups_dataData] = useState([]);
    // const [input_fields, setlookups_dataData] = useState([]);

    // const handleInputChange = (e) => {
    //     console.log(e,'e')
    //         this.setState({
    //             [e.target.name]: e.target.value
    //         });
    // }
    const Data = useLocation();

    var [lookups, set_lookups] = useState({});
    // console.log("---+----------+---")
    // // console.log(Data.state)

    if(Data)
    {
        if(Data){
            // // console.log(Data.state)
            if(JSON.stringify(lookups) != JSON.stringify(Data.state)){
                set_lookups(Data.state)
                setlookups_dataData([]);
                
                // getLookupsData()
            }else{
                // if(lookupsData[lookupsData.length-1] && (lookups==null || lookups == "")){
                //     set_lookups(lookupsData[lookupsData.length-1])
                // }
            }
        }else{
            if(lookupsData.length > 0){
               set_lookups(lookupsData[0]);
               setlookups_dataData([]);
               
            //    getLookupsData();
            }
        }
    }else{
        if(lookupsData.length > 0){
           set_lookups(lookupsData[0]);
           setlookups_dataData([]);
           
        //    getLookupsData();
        }
    }
    
    const addNewSection = () => {
        setInputSections(prevSections => [
            ...prevSections,
            {
                id: inputSections.length + 1,

            }
        ]);
    };

    const deleteSection = (event, id) => {
        setInputSections(prevSections =>
            prevSections.filter(section => section.id !== id)
        );
    };


    const [checkedSections, setCheckedSections] = useState([]);

   


    useEffect(() => {
        if (user != "" && user != null) {  
            
                    // var inputsec2 = document.querySelectorAll('.inputSection');
                    // console.log(inputsec2.length)
                    // if(inputsec2.length > 0){
                    //     for(var i=0; i<inputsec2.length-1;i++)
                    //     {
                    //         console.log(inputsec2[i])
                    //         deleteSection(i)
                    //         // inputsec2[i].removeChild();
                    //     }
                    // }
                
            getLookups();
        }

    },[user])

    // lookups api function
    const getLookups = async () => {
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
            // console.log(error);
        }
    }

    // lookups data api function
    const getLookupsData = async () => {
        // console.log(lookups.class_name)
        try {
            const response = await fetch('/api/lookups_data/get', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },
                body: JSON.stringify({lookups_accesskey:lookups.lookups_accesskey})

            });
            if (response.ok) {
                const lookups = await response.json();
                // console.log("-=-=-=-=-=-=-")

                // console.log(lookups)
                if(lookups.status == "Success")
                {
                    setInputSections([])

                    setlookups_dataData(lookups.data);
                    
                }
            }
        } catch (error) {
            // console.log(error);
        }
    }
    
    
    // get lookups Data after page loaded
    if(JSON.stringify(lookups) == JSON.stringify(Data.state)){

        if(lookups_dataData.length == 0){
            getLookupsData();
        }
    }
    
    const updateLookups = async () => {

        if(user){
            var class_name = document.querySelector('input[name=class_name]').value
              if(class_name)
              {    
                  try {
                      const response = await fetch('/api/lookups/update', {
                          method: 'POST',
                          headers: {
                              'Content-Type': 'application/json',
                              'Authorization': `Bearer ${user.token}`,
                          },
                          body: JSON.stringify({class_name:class_name, lookups_accesskey: lookups.lookups_accesskey})
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

    const toggleCheckmark = async (event, sectionId) => {

        var node = event.currentTarget.parentNode.parentNode;
            var lookups_name = node.querySelector('input[name="lookups_name"]').value;
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
            var lookups_accesskey = lookups.lookups_accesskey;
            var access_key_id = event.currentTarget.getAttribute("data-lookupsdata");
            var disable = 1;
            if (node.querySelector('input[name="disable"]').checked == true) {
                disable = 2;
            }
            var lookups_data = {
                lookups_name: lookups_name,
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

    //   var inputsec = document.querySelectorAll(".inputSection");
    //             if(inputsec){
    //                 for(var i=0; i<inputsec.length;i++)
    //                 {
    //                     console.log(inputsec[i])
    //                     inputsec[i].remove();
    //                 }
    //             }
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
                    <AvForm>

                    <div id="LookupsShow" style={{ display: 'block' }}>
                        {/* -------------creating lookups------------ */}
                        <div id="lookupsradio" style={{display:"flex"}}>
                            <AvField type="radio" id="all" name="a" defaultValue />
                            <label htmlFor="all">ALL</label>
                            <AvField type="radio" id="enabled" name="a" defaultValue />
                            <label htmlFor="enabled">ENABLED</label>
                            <AvField type="radio" id="disabled" name="a" defaultValue />
                            <label htmlFor="disabled">DISABLED</label>
                        </div>
                        <div id="headerlookups"><a>LOOKUPS</a></div>
                        <div id="classname">
                            <AvField type="text" name="class_name" id="class_name" onBlur={updateLookups} value={lookups?lookups.class_name:""} />
      
                            <label>CLASS NAME</label>
                        </div>
                        <div id="removeandadd" style={{ display: 'none' }}>
                            <button id="removelookups" type="reset" style={{ color: 'red' }}>CANCEL</button>
                            <button id="addlookups" type="submit" style={{ color: 'rgb(0, 79, 128)' }} onClick={addLookups}>ADD</button>
                        </div>
                    </div>
                    <div id="add-lookup" style={{ display: 'block' }}>
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
                            <div id="contentL6">
                                <label className='lookupscontainerlabel'>DISABLE</label>
                            </div>
                            <div id="contentL7">
                                <label className='lookupscontainerlabel'>Action</label>
                            </div>
                        </div>

                        <div id="inputdivSections">

                        {lookups_dataData.map((lookups_data,i) =>(
                                <div key={i} className="inputSection" >
                                    <AvField type="text" name="lookups_name" value={lookups_data.lookups_name}/>
                                    <AvField type="text" name="code" value={lookups_data.code}/>
                                    <AvField type="text" name="value1" value={lookups_data.value1}/>
                                    <AvField type="text" name="value2" value={lookups_data.value2}/>
                                    <select name="parentlookup" id="parentlookup">
                                    </select>
                                    <AvField type="checkbox" name="disable" value="1"/>
                                    <div>
                                        <i className="fa fa-xmark" onClick={(event) => deleteSection(event,i)}></i>
                                        <i className={checkedSections.includes(i) ? 'fa fa-check-circle' : 'fa fa-circle'}
                                           id="checkmark" data-lookupsdata={lookups_data.lookups_data_accesskey} onClick={(event) => toggleCheckmark(event,i)}></i>
                                    </div>
                                </div>
                            ))}
                            
      {inputSections.map((section) => (
        <div key={section.id} className="inputSection">
                {/* Render input fields and other elements */}
                <input type="text" name="lookups_name" />
                <input type="text" name="code" />
                <input type="text" name="value1" />
                <input type="text" name="value2"/>
                <select name="parentlookup" id="parentlookup"></select>
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
                    </AvForm>

                </div>
            </div>
        </div>
    )
};

export default Lookups;