import React from 'react'
import { myFunction2Write, myFunctionWrite } from '../components/WriteFlexjs'
import '../components/WriteFlex.css'
import { FaPlus } from 'react-icons/fa';
import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from 'react';
import { isEmpty, map, size } from "lodash"
import { Link, withRouter, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const WriteFlex = ({ showPlusIcon }) => {
    
    const { user } = useAuthContext();
    console.log(user);

    const navigate = useNavigate();

    const accData = useLocation();
    const accountsData = accData.state;
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
    console.log(accountsData);

    const [accountdata, setAccountData] = useState([]);
    console.log("ACCOUNTDATA" + accountdata);

    useEffect(() => {
        
        const getaccountdata = async () => {
            try {
                const response = await fetch('/api/accounts/get', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`,
                    },

                });
                if (response.ok) {
                    const account = await response.json();
                    console.log(account);
                    console.log(account.data + "-----------------------------------");
                    setAccountData(account.data);
                
                    if(accountsData == null){
                        try{
                            const accDaata = account.data[0];

                           
                            // if(accDaata != null){
                            //     if(window.location.pathname != '/account/create'){
                            //   navigate('/account', {state: { accData} });
                            //     }

                            // }
                            
                        }catch(error){
                            console.log(error);
                        }
                    }

                } else {
                    console.log('Error:', response.statusText);
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (user != "" && user != null) {
            getaccountdata();
        }

    }, [user]);




    return (
        <div>
            <div className="leftwrite" style={{ position: 'fixed' }}>
                <div className="inboxwrite">
                    <i className="fa fa-search" aria-hidden="true" />
                    <input type="text" id="mySearchwrite" onKeyUp={myFunction2Write} title="type in a chategory" />
                </div>
                <div className="dividewrite">
                    <ul id="myMenuwrite">
                        <span id="dotswrite">
                            {/* {accountdata.length} */}
                            {/* {(() => {
                                const arr = [];
                                for (let i = 0; i < accountdata.length; i++) {
                                    arr.push(
                                        <div> */}
                            {/* <li><a href="#">{accountdata[i].accounts}</a></li> */}
                            {/* <li><Link  to="/account" state={accountdata[0]} >{accountdata[i].accounts}</Link></li>
                                
                                        </div>
                                    );
                                }
                                return arr;
                            })()} */}
                            {accountdata ? 
                              accountdata.map((account) => (
                                <li key={account.id}>
                                    <Link to= '/account' state={ account} >
                                        {account.accounts}
                                    </Link>
                                </li>
                             ))
                            :<></>
                            }

                        </span>
                        <span id="morewrite">
                            {/* <li><a href="#">1040Tech LLC</a></li>
                            <li><a href="#">ABB AG</a></li>
                            <li><a href="#">Abbey National Group</a></li>
                            <li><a href="#">Abbott</a></li>
                            <li><a href="#">Abbott Laboratories</a></li>
                            <li><a href="#">ABC Company</a></li>
                            <li><a href="#">ABSA Bank Limited</a></li>
                            <li><a href="#">ACA Pacific Technology</a></li>
                            <li><a href="#">Accenture</a></li>
                            <li><a href="#">Accenture S.P.A</a></li> */}
                        </span>
                        <button onClick={myFunctionWrite} id="myBTNwrite">VIEW MORE</button>
                    </ul>
                </div>
                <div className="plusicon">
          <a href="/account/create"><i className="fa fa-plus" /></a>
        </div>
                {showPlusIcon && (
                    <div className="plus-icon">
                        <FaPlus />
                    </div>
                )}

            </div>
        </div>
    )
}

export default WriteFlex