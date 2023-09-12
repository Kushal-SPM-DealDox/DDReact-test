import React from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import HelpRequest from '../../components/HelpRequest.jsx'

const Demand = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="bread">
        <ul className="breadcrumbs">
          <li className="breadcrumbs--item">
            <a  className="breadcrumbs--link breadcrumbs" style={{display: 'inline', textDecoration: 'none'}}>HOME</a>
          </li>
          <li className="breadcrumbs--item">
            <a href="./" className="breadcrumbs--link breadcrumbs--link--active">DEMAND</a>
            {/* </li> <li class="breadcrumbs--item">
                 <a href="#" class="breadcrumbs--link">QUOTES</a>
             </li> */}
          </li>
        </ul>
        <hr className="hr" />
      </div>
      <HelpRequest />
      {/* -------------------------- */}
     
      </div>
  )
}

export default Demand