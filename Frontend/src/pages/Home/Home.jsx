import React from 'react';
import Navbar from '../../components/Navbar.jsx';
import "../Home/Home.css";
import  "./Homejs.js";
import Sidebar from '../../components/Sidebar.jsx';
import HelpRequest from '../../components/HelpRequest.jsx';
import { handleClick1, handleClick2, handleSidebarToggle } from './Homejs.js';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="bread">
        <ul className="breadcrumbs">
          {/* <li className="breadcrumbs--item">
            <a  className="breadcrumbs--link breadcrumbs" style={{display: 'inline', textDecoration: 'none'}}>HOME</a>
          </li> */}
          <li className="breadcrumbs--item">
            <a href="./home" className="breadcrumbs--link breadcrumbs--link--active">HOME</a>
            {/* </li> <li class="breadcrumbs--item">
                 <a href="#" class="breadcrumbs--link">QUOTES</a>
             </li> */}
          </li>
        </ul> 
        <hr className="hr" />
      </div>
      <HelpRequest />
      {/* -------------------------- */}
      <div className="containerhome">
        <div className="main-contenthome">
          <div id="grid">
            <div className="red">
              <div className="btn">
                <a href="#"><button className="bt activeH" onClick={handleClick1} style={{marginLeft: '30px'}}>MY RECENT QUOTES</button></a>
                <a href="#"><button className="bt" onClick={handleClick1}>ALL RECENT</button></a>
              </div>
              <div className="textData">
                <textarea name="recent" id="box-1" cols={30} rows={10} defaultValue={""} />
              </div>
            </div>
            <div className="green">
              <div className="btn">
                <a href="#"><button className="btn2" style={{width: '50px', marginLeft: '140px'}}>ALERTS</button></a>
              </div>
              <div className="textData">
                <textarea name="recent" id="box-2" cols={30} rows={10} defaultValue={""} />
              </div>
            </div>
            <div className="blue">
              <div className="btn">
                <a href="#"><button className="bts activ" onClick={handleClick2} style={{marginLeft: '20px'}}>REQUEST MY APPROVAL</button></a>
                <a href="#"><button className="bts" onClick={handleClick2}>MY SUBMISSIONS</button></a>
              </div>
              <div className="textData">
                <textarea name="recent" id="box-3" cols={30} rows={10} defaultValue={""} />
              </div>
            </div>
            <div className="gray">
              <div className="btn">
                <a href="#"><button className="btn2">MY RECENT OPPORTUNITIES</button></a>
              </div>
              <div className="textData">
                <textarea name="recent" id="box-4" cols={30} rows={10} defaultValue={""} />
              </div>
            </div>
          </div>
          <button className="sidebarhome-toggle" onClick={handleSidebarToggle}>
            &lt;
          </button>
        </div>
        <div className="sidebarhome">
          <h2>Sidebar Content</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
