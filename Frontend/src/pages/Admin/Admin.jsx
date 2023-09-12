import React from 'react'
import Navbar from '../../components/Navbar'
import AdminSidebar from '../../components/AdminSidebar'

const Admin = () => {
  return (
    
    <div>
      <Navbar />
      <AdminSidebar />
      <div className="bread">
        <ul className="breadcrumbs">
          <li className="breadcrumbs--item">
            <a  href='/home' className="breadcrumbs--link breadcrumbs" style={{display: 'inline', textDecoration: 'none'}}>HOME</a>
          </li>
          <li className="breadcrumbs--item">
            <a href="" className="breadcrumbs--link breadcrumbs--link--active">ADMIN</a>
            {/* </li> <li class="breadcrumbs--item">
                 <a href="#" class="breadcrumbs--link">QUOTES</a>
             </li> */}
          </li>
        </ul>
        <hr className="hr" />
      </div>
      {/* -------------------------- */}
      </div>
  )
}

export default Admin