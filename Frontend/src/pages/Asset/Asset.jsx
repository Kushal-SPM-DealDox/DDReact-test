import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import CatalogSidebar from '../../components/CatalogSidebar'
import HelpRequest from '../../components/HelpRequest'

const Asset = () => {
  return (
    <div>
        <div>
      <Navbar />
      <CatalogSidebar />
      <div className="bread">
        <ul className="breadcrumbs">
        <li className="breadcrumbs--item">
            <a href='/home' className="breadcrumbs--link breadcrumbs" style={{display: 'inline', textDecoration: 'none'}}>HOME</a>
          </li>
          <li className="breadcrumbs--item">
            <a href='#' className="breadcrumbs--link breadcrumbs" style={{display: 'inline', textDecoration: 'none'}}>CATALOG</a>
          </li>
          <li className="breadcrumbs--item">
            <a href="" className="breadcrumbs--link breadcrumbs--link--active">ASSET</a>
          </li>
        </ul>
        <hr className="hr" />
      </div>
      <HelpRequest/>
      {/* -------------------------- */}
     
      </div>
    </div>
  )
}

export default Asset;