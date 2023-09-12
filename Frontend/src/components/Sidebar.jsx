import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoBook } from 'react-icons/io5';
import { AiFillDollarCircle } from 'react-icons/ai';
import { MdSupervisorAccount } from 'react-icons/md';
import { GoGraph } from 'react-icons/go';
import { FaEye } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Sidebar = ({ children }) => {
  const location = useLocation();

  const menuItem = [
    {
      path: "/home",
      name: <span style={{ marginLeft: "5px" }}>HOME</span>,
      icon: <AiFillHome style={{ marginLeft: '5px' }} />
    },
    {
      path: "/account",
      name: <span style={{ marginLeft: "-5px" }}>ACCOUNTS</span>,
      icon: <IoBook style={{ marginLeft: '-4px' }} />
    },
    {
      path: "/quotes",
      name: "QUOTES",
      icon: <AiFillDollarCircle />
    },
    {
      path: "/demand",
      name: "DEMAND",
      icon: <MdSupervisorAccount />
    },
    {
      path: "/forecast",
      name: <span style={{ marginLeft: "-3px" }}>FORECAST</span>,
      icon: <GoGraph />
    },
    {
      path: "/rolessetup",
      name: "CATALOG",
      icon: <FaEye />
    },
    {
      path: "/companyprofile",
      name: <span style={{ marginLeft: "5px" }}>ADMIN</span>,
      icon: <FiSettings style={{ marginLeft: '5px' }} />,
    },
  ];

  const isActive = (path) => {
    if (location.pathname === path) {
      return true;
    }

    if (location.pathname === "/createaccount" && path === "/account" || location.pathname === "/opportunities" && path === "/account" || location.pathname === "/opportunitiesdata" && path === "/account" 
    ||location.pathname === "/guidedselling" && path === "/account" ||location.pathname === "/quotecreation" && path === "/account") {
      return true;
    }

    return false;
  };

  return (
    <div className='container'>
      <div className='sidebarfix'>
        <div className="sidebar">
          <div className="top-section"></div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={`link ${isActive(item.path) ? "active" : ""}`}
              activeClassName="active"
            >
              <div className="link_text">
                <div className='icon'>{item.icon}</div>
                <div className='link_text'>{item.name}</div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
