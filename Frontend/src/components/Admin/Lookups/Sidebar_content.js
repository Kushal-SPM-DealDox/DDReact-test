import React from 'react'
import { myFunction2Write, myFunctionWrite } from '../../WriteFlexjs'
import '../../../components/WriteFlex.css'
import { FaPlus } from 'react-icons/fa';
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useState, useEffect } from 'react';
import { isEmpty, map, size } from "lodash"
import { Link, withRouter, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Sidebar_content = (props, { showPlusIcon }) => {

    const { user } = useAuthContext();
    // console.log(user);

    const navigate = useNavigate();

    const Data = useLocation();
    const lookups_data = Data.state;
    // console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
    // console.log(lookups_data);

    const lookupsData = props.data;


    return (
        <div>
            <div className="leftwrite" style={{ position: 'fixed' }}>
                <div className="inboxwrite">
                    <i className="fa fa-search" aria-hidden="true" />
                    <input type="text" id="mySearchwrite" onKeyUp={myFunction2Write} title="type in a chategory" />
                </div>
                <div className="dividewrite" style={{ height: "70%" }}>
                    <ul id="myMenuwrite">
                        <span id="dotswrite">

                            {lookupsData.map((lookups) => (
                                <li key={lookups.id}>
                                    <Link to='/lookups' state={lookups} >
                                        {lookups.class_name}
                                    </Link>
                                </li>
                            ))}

                        </span>

                        <button onClick={myFunctionWrite} id="myBTNwrite">VIEW MORE</button>
                    </ul>
                </div>
                {/* {showPlusIcon && ( */}
                <div class="plusiconlookups" style={{ marginTop: "0px" }}>
                    <Link to='/lookups/create'><i class="fa fa-plus"></i></Link>
                </div>
                {/* )} */}

            </div>
        </div>
    )
}

export default Sidebar_content
