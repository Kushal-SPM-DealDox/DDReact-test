import React from 'react'
import Navbar from '../../components/Navbar';
import AdminSidebar from '../../components/AdminSidebar';
import HelpRequest from '../../components/HelpRequest';
import WriteFlex from '../../components/WriteFlex';
import { useState } from 'react';
import "../Security/Securityold.css";

const Securityold = () => {
  const [inputValueSecurity, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChangeSecurity = (event) => {
    const securityLabel = document.getElementById('securitylabel');
    const inputField = event.target;
    const value = inputField.value;
    setInputValue(value);
    if (value.length > 0) {
      setErrorMessage("");
      securityLabel.style.display = "block";
      inputField.style.outlineColor = "#0f6b93";
    } else {
      setErrorMessage("TITLE IS A REQUIRED FIELD");
      securityLabel.style.display = "none";
      inputField.style.outlineColor = "red";
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValueSecurity.length === 0) {
      setErrorMessage("TITLE IS A REQUIRED FIELD");

    }
    else {
      // Proceed with form submission or further processing
    }
  };



  const [inputValueSecurityRoles, setInputValueRoles] = useState("");
  const [errorMessageroles, setErrorMessageRoles] = useState("");
  const handleChangeSecurityRoles = (event) => {
    const roleslabel = document.getElementById('roleslabel');
    const inputField = event.target;
    const value = inputField.value;
    setInputValueRoles(value);
    if (value.length > 0) {
      setErrorMessageRoles("");
      roleslabel.style.display = "block";
      inputField.style.outlineColor = "#0f6b93";
    } else {
      setErrorMessageRoles("TITLE IS A REQUIRED FIELD");
      roleslabel.style.display = "none";
      inputField.style.outlineColor = "red";
    }
  };
  const handleSubmitRoles = (event) => {
    event.preventDefault();
    if (inputValueSecurityRoles.length === 0) {
      setErrorMessageRoles("TITLE IS A REQUIRED FIELD");

    }
    else {
      // Proceed with form submission or further processing
    }
  };




  return (
    <div>
      <Navbar />
      <AdminSidebar />
      <div className="bread">
        <ul className="breadcrumbs">
          <li className="breadcrumbs--item">
            <a href='/home' className="breadcrumbs--link breadcrumbs" style={{ display: 'inline', textDecoration: 'none' }}>HOME</a>
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
        <WriteFlex />
        {/* -------------------------- */}
        <div className="plusiconsecurity">
          <i className="fa fa-plus" id="plusiconsecure" onClick={hideshowplusiconsecurity} />
        </div>
        <div className="rightsecurity">
          <div id="headersecurity"><a>SECURITY ROLES</a></div>
          <div id="securitytmsgdiv">
            <label id="securitytmsg">
              NO SECURITY FOUND. PLEASE USE + TO ADD A NEW SECURITY
            </label>
          </div>

          <div id="securitycontentshow" style={{ display: "none" }}>
            <div className='securityrolediv'>
              <div id="secutityinputdiv">

                <form onSubmit={handleSubmit}>
                  <input
                    id="securityinput"
                    type="text"
                    value={inputValueSecurity}
                    onChange={handleChangeSecurity}
                    placeholder="Enter title"

                  />
                  <label id="securitylabel">SECURITY ROLE NAME  </label>
                  {errorMessage && <label id="reqmsg">{errorMessage}</label>}
                </form>
              </div>
              <div id="rolesinputdiv">

                <form onSubmit={handleSubmitRoles}>
                  <input
                    id="roleinput"
                    type="text"
                    value={inputValueSecurityRoles}
                    onChange={handleChangeSecurityRoles}
                    placeholder="Enter title"
                  />
                  <label id="roleslabel">ROLES DESCRIPTION  </label>
                  {errorMessageroles && <label id="reqmsgroles">{errorMessageroles}</label>}
                </form>
              </div>
            </div>
            <label id="labelline">options are grey are not yet avaliable</label>
            {/* static contaioner header */}
            <div class="staticcontaionerheader">
              <div id="page">
                <label id="pagelabel">Page</label>
              </div>
              <div id="none">
                <label id="nonelabel">None</label>
              </div>
              <div id="readonly">
                <label id="readonlylabel">Read only</label>
              </div>
              <div id="acess">
                <label id="acesslabel">Acess</label>
              </div>
            </div>


            {/* ----------------------------------------- */}
            <div class="staticcontaioneraccount">
              <div id="pageaccount">
                <label id="accountlabel">Account</label>
              </div>
              <div id="noneaccount">
                <input type="checkbox" id="accountcb1" />
              </div>
              <div id="readonlyaccount">
                <input type="checkbox" id="accountcb2" />
              </div>
              <div id="acessaccount">
                <input type="checkbox" id="accountcb3" />
              </div>
            </div>
            {/* ----------------Opportunity------------------------ */}
            <div class="staticcopportunity">
              <div id="pageopportunity">
                <label id="opporlabel">Opportunity</label>
              </div>
              <div id="noneopportunity">
                <input type="checkbox" id="opportunitycb1" />
              </div>
              <div id="readonlyopportunity">
                <input type="checkbox" id="opportunitycb2" />
              </div>
              <div id="acessopportunity">
                <input type="checkbox" id="opportunitycb3" />
              </div>
            </div>
            {/* ----------------Opportunity-Stage------------------ */}
            <div class="opportunity-stage">
              <div id="pageopportunity-stage">
                <label id="opporstagelabel">Opportunity-Stage</label>
              </div>
              <div id="noneopportunity-stage">
                <input type="checkbox" id="opportunitystagecb1" />
              </div>
              <div id="readonlyopportunity-stage">
                <input type="checkbox" id="opportunitystagecb2" />
              </div>
              <div id="acessopportunity-stage">
                <input type="checkbox" id="opportunitystagecb3" />
              </div>
            </div>
            {/* ----------------Opportunity-Survey-------------- */}
            <div class="opportunity-survey">
              <div id="pageopportunity-survey">
                <label id="opporsurveylabel">Opportunity-Survey</label>
              </div>
              <div id="noneopportunity-survey">
                <input type="checkbox" id="opportunitysurveycb1" />
              </div>
              <div id="readonlyopportunity-survey">
                <input type="checkbox" id="opportunitysurveycb2" />
              </div>
              <div id="acessopportunity-survey">
                <input type="checkbox" id="opportunitysurveycb3" />
              </div>
            </div>
            {/* ---------------------Quote----------------------- */}
            <div class="staticquote">
              <div id="pagequote">
                <label id="staticquotelabel">Quote</label>
              </div>
              <div id="nonequote">
                <input type="checkbox" id="quotecb1" />
              </div>
              <div id="readonlyquote">
                <input type="checkbox" id="quotecb2" />
              </div>
              <div id="acessquote">
                <input type="checkbox" id="quotecb3" />
              </div>
            </div>


            {/* ------------------->Quote-Add<------------------------------- */}
            <div class="quote-add">
              <div id="pagequote-add">
                <label id="quotelabel-add">Quote-Add</label>
              </div>
              <div id="nonequote-add">
                <input type="checkbox" id="quotecb1-add" />
              </div>
              <div id="readonlyquote-add">
                <input type="checkbox" id="quotecb2-add" />
              </div>
              <div id="acessquote-add">
                <input type="checkbox" id="quotecb3-add" />
              </div>
            </div>


            {/* -----------------Quote-Approval-------------- */}
            <div class="quote-approval">
              <div id="pagequote-approval">
                <label id="quotelabel-approval">Quote-Approval</label>
              </div>
              <div id="nonequote-approval">
                <input type="checkbox" id="quotecb1-approval" />
              </div>
              <div id="readonlyquote-approval">
                <input type="checkbox" id="quotecb2-approval" />
              </div>
              <div id="acessquote-approval">
                <input type="checkbox" id="quotecb3-approval" />
              </div>
            </div>

            {/* -------------Quote-Guidedselling-Answer-------- */}
            <div class="quote-guidedselling-answer">
              <div id="pagequote-guidedselling">
                <label id="quotelabel-guidedselling">Quote-Guidedselling-Answer</label>
              </div>
              <div id="nonequote-guidedselling">
                <input type="checkbox" id="quotecb1-guidedselling" />
              </div>
              <div id="readonlyquote-guidedselling">
                <input type="checkbox" id="quotecb2-guidedselling" />
              </div>
              <div id="acessquote-guidedselling">
                <input type="checkbox" id="quotecb3-guidedselling" />
              </div>
            </div>


            {/* -----------Quote-Guidedselling-Design----------- */}
            <div class="quote-guidedselling-design ">
              <div id="pagequote-design">
                <label id="quotelabel-guidedselling">Quote-Guidedselling-Design</label>
              </div>
              <div id="nonequote-design">
                <input type="checkbox" id="quotecb1-design" />
              </div>
              <div id="readonlyquote-design">
                <input type="checkbox" id="quotecb2-design" />
              </div>
              <div id="acessquote-design">
                <input type="checkbox" id="quotecb3-design" />
              </div>
            </div>



            {/* --------------Quote Listing------------------- */}
            <div class="quote-listing ">
              <div id="pagequote-listing">
                <label id="quotelabel-listing">Quote Listing</label>
              </div>
              <div id="nonequote-listing">
                <input type="checkbox" id="quotecb1-listing" />
              </div>
              <div id="readonlyquote-listing">
                <input type="checkbox" id="quotecb2-listing" />
              </div>
              <div id="acessquote-listing">
                <input type="checkbox" id="quotecb3-listing" />
              </div>
            </div>


            {/* ----------------Project---------------------- */}
            <div class="staticproject">
              <div id="pageproject">
                <label id="staticprojectlabel">Project</label>
              </div>
              <div id="noneproject">
                <input type="checkbox" id="projectcb1" />
              </div>
              <div id="readonlyproject">
                <input type="checkbox" id="projectcb2" />
              </div>
              <div id="acessproject">
                <input type="checkbox" id="projectcb3" />
              </div>
            </div>



            {/* -------------Demand-Workbench--------------- */}
            <div class="demand-workbench">
              <div id="pagedemand-workbench">
                <label id="demandlabel-workbench">Demand-Workbench</label>
              </div>
              <div id="nonedeman-workbench">
                <input type="checkbox" id="demandcb1-workbench" />
              </div>
              <div id="readonlydemand-workbench">
                <input type="checkbox" id="demancb2-workbench" />
              </div>
              <div id="acessdemand-workbench">
                <input type="checkbox" id="demandcb3-workbench" />
              </div>
            </div>



            {/* --------------Demand-Utilization---------- */}
            <div class="demand-utilization">
              <div id="pagedemand-utilization">
                <label id="demandlabel-utilization">Demand-Utilization</label>
              </div>
              <div id="nonedeman-utilization">
                <input type="checkbox" id="demandcb1-utilization" />
              </div>
              <div id="readonlydemand-utilization">
                <input type="checkbox" id="demancb2-utilization" />
              </div>
              <div id="acessdemand-utilization">
                <input type="checkbox" id="demandcb3-utilization" />
              </div>
            </div>


            {/* --------------Demand-People-------------- */}
            <div class="demand-people">
              <div id="pagedemand-people">
                <label id="demandlabel-people">Demand-People</label>
              </div>
              <div id="nonedeman-people">
                <input type="checkbox" id="demandcb1-people" />
              </div>
              <div id="readonlydemand-people">
                <input type="checkbox" id="demancb2-people" />
              </div>
              <div id="acessdemand-people">
                <input type="checkbox" id="demandcb3-people" />
              </div>
            </div>

            {/* --------------Demand-People-Listing-------------- */}
            <div class="demand-people-listing">
              <div id="pagedemand-listing">
                <label id="demandlabel-listing">Demand-People-Listing</label>
              </div>
              <div id="nonedeman-listing">
                <input type="checkbox" id="demandcb1-listing" />
              </div>
              <div id="readonlydemand-listing">
                <input type="checkbox" id="demancb2-listing" />
              </div>
              <div id="acessdemand-listing">
                <input type="checkbox" id="demandcb3-listing" />
              </div>
            </div>



            {/* ------------Forecast-------------- */}
            <div class="staticforecast">
              <div id="pageforecast">
                <label id="staticforecastlabel">Forecast</label>
              </div>
              <div id="noneforecast">
                <input type="checkbox" id="forecastcb1" />
              </div>
              <div id="readonlyforecast">
                <input type="checkbox" id="forecastcb2" />
              </div>
              <div id="acessforecast">
                <input type="checkbox" id="forecastcb3" />
              </div>
            </div>


            {/* ----------Forecast-update----------- */}
            <div class="staticforecast-update">
              <div id="pageforecast-update">
                <label id="forecastlabel-update">Forecast-update</label>
              </div>
              <div id="noneforecast-update">
                <input type="checkbox" id="forecastcb1-update" />
              </div>
              <div id="readonlyforecast-update">
                <input type="checkbox" id="forecastcb2-update" />
              </div>
              <div id="acessforecast-update">
                <input type="checkbox" id="forecastcb3-update" />
              </div>
            </div>

            {/* ------------Catalog------------------- */}
            <div class="staticcatalog">
              <div id="pagecatalog">
                <label id="staticcataloglabel">Catalog</label>
              </div>
              <div id="nonecatalog">
                <input type="checkbox" id="catalogcb1" />
              </div>
              <div id="readonlycatalog">
                <input type="checkbox" id="catalogcb2" />
              </div>
              <div id="acesscatalog">
                <input type="checkbox" id="catalogcb3" />
              </div>
            </div>


            {/* --------------Catalog-Roles--------------- */}
            <div class="staticcatalog-roles">
              <div id="pagecatalog-roles">
                <label id="cataloglabel-roles">Catalog-Roles</label>
              </div>
              <div id="nonecatalog-roles">
                <input type="checkbox" id="catalogcb1-roles" />
              </div>
              <div id="readonlycatalog-roles">
                <input type="checkbox" id="catalogcb2-roles" />
              </div>
              <div id="acesscatalog-roles">
                <input type="checkbox" id="catalogcb3-roles" />
              </div>
            </div>

            {/* ----------------Catalog-Ratecard---------------- */}
            <div class="staticcatalog-ratecards">
              <div id="pagecatalog-ratecards">
                <label id="cataloglabel-ratecards">Catalog-Ratecard</label>
              </div>
              <div id="nonecatalog-ratecards">
                <input type="checkbox" id="catalogcb1-ratecards" />
              </div>
              <div id="readonlycatalog-ratecards">
                <input type="checkbox" id="catalogcb2-ratecards" />
              </div>
              <div id="acesscatalog-ratecards">
                <input type="checkbox" id="catalogcb3-ratecards" />
              </div>
            </div>


            {/* ------------>Catalog-Ratecard-Config<------------- */}
            <div class="staticcatalog-config">
              <div id="pagecatalog-config">
                <label id="cataloglabel-config">Catalog-Ratecard-Config</label>
              </div>
              <div id="nonecatalog-config">
                <input type="checkbox" id="catalogcb1-config" />
              </div>
              <div id="readonlycatalog-config">
                <input type="checkbox" id="catalogcb2-config" />
              </div>
              <div id="acesscatalog-config">
                <input type="checkbox" id="catalogcb3-config" />
              </div>
            </div>


            {/* ------------Catalog-Excahnge-------------- */}
            <div class="staticcatalog-excahnge">
              <div id="pagecatalog-excahnge">
                <label id="cataloglabel-excahnge">Catalog-Excahnge</label>
              </div>
              <div id="nonecatalog-excahnge">
                <input type="checkbox" id="catalogcb1-excahnge" />
              </div>
              <div id="readonlycatalog-excahnge">
                <input type="checkbox" id="catalogcb2-excahnge" />
              </div>
              <div id="acesscatalog-excahnge">
                <input type="checkbox" id="catalogcb3-excahnge" />
              </div>
            </div>

            {/* --------------Catalog-Items----------------- */}
            <div class="staticcatalog-items">
              <div id="pagecatalog-items">
                <label id="cataloglabel-items">Catalog-Items</label>
              </div>
              <div id="nonecatalog-items">
                <input type="checkbox" id="catalogcb1-items" />
              </div>
              <div id="readonlycatalog-items">
                <input type="checkbox" id="catalogcb2-items" />
              </div>
              <div id="acesscatalog-items">
                <input type="checkbox" id="catalogcb3-items" />
              </div>
            </div>

            {/* -------------Catalog-Content---------------- */}
            <div class="staticcatalog-content">
              <div id="pagecatalog-content">
                <label id="cataloglabel-content">Catalog-Content</label>
              </div>
              <div id="nonecatalog-content">
                <input type="checkbox" id="catalogcb1-content" />
              </div>
              <div id="readonlycatalog-content">
                <input type="checkbox" id="catalogcb2-content" />
              </div>
              <div id="acesscatalog-content">
                <input type="checkbox" id="catalogcb3-content" />
              </div>
            </div>


            {/* ------------Catalog-Assets--------------- */}
            <div class="staticcatalog-assets">
              <div id="pagecatalog-assets">
                <label id="cataloglabel-assets">Catalog-Assets</label>
              </div>
              <div id="nonecatalog-assets">
                <input type="checkbox" id="catalogcb1-assets" />
              </div>
              <div id="readonlycatalog-assets">
                <input type="checkbox" id="catalogcb2-assets" />
              </div>
              <div id="acesscatalog-assets">
                <input type="checkbox" id="catalogcb3-assets" />
              </div>
            </div>


            {/* -------------------Catalog--Catalog------------------------------ */}
            <div class="staticcatalog-templates">
              <div id="pagecatalog-templates">
                <label id="cataloglabel-templates">Catalog-Catalog</label>
              </div>
              <div id="nonecatalog-templates">
                <input type="checkbox" id="catalogcb1-templates" />
              </div>
              <div id="readonlycatalog-templates">
                <input type="checkbox" id="catalogcb2-templates" />
              </div>
              <div id="acesscatalog-templates">
                <input type="checkbox" id="catalogcb3-templates" />
              </div>
            </div>


            {/* -----------------Catalog-Surevys-------------------------------- */}
            <div class="staticcatalog-surveys">
              <div id="pagecatalog-surveys">
                <label id="cataloglabel-surveys">Catalog-Surevys</label>
              </div>
              <div id="nonecatalog-surveys">
                <input type="checkbox" id="catalogcb1-surveys" />
              </div>
              <div id="readonlycatalog-surveys">
                <input type="checkbox" id="catalogcb2-surveys" />
              </div>
              <div id="acesscatalog-surveys">
                <input type="checkbox" id="catalogcb3-surveys" />
              </div>
            </div>

            {/* -----------Catalog-Surevys-Whereused----------- */}
            <div class="staticcatalog-surveys-whereused">
              <div id="pagecatalog-whereused">
                <label id="cataloglabel-surveys">Catalog-Surevys-Whereused</label>
              </div>
              <div id="nonecatalog-whereused">
                <input type="checkbox" id="catalogcb1-whereused" />
              </div>
              <div id="readonlycatalog-whereused">
                <input type="checkbox" id="catalogcb2-whereused" />
              </div>
              <div id="acesscatalog-whereused">
                <input type="checkbox" id="catalogcb3-whereused" />
              </div>
            </div>

            {/* -----------------Catalog-doctypes--------------- */}
            <div class="staticcatalog-doctypes">
              <div id="pagecatalog-doctypes">
                <label id="cataloglabel-doctypes">Catalog-doctypes</label>
              </div>
              <div id="nonecatalog-doctypes">
                <input type="checkbox" id="catalogcb1-doctypes" />
              </div>
              <div id="readonlycatalog-doctypes">
                <input type="checkbox" id="catalogcb2-doctypes" />
              </div>
              <div id="acesscatalog-doctypes">
                <input type="checkbox" id="catalogcb3-doctypes" />
              </div>
            </div>

            {/* ----------------Notes------------------- */}
            <div class="staticnotes">
              <div id="pagenotes">
                <label id="staticnoteslabel">Notes</label>
              </div>
              <div id="nonenotes">
                <input type="checkbox" id="notescb1" />
              </div>
              <div id="readonlynotes">
                <input type="checkbox" id="notescb2" />
              </div>
              <div id="acessnotes">
                <input type="checkbox" id="notescb3" />
              </div>
            </div>

            {/* ---------------Files------------------- */}
            <div class="staticfiles">
              <div id="pagefiles">
                <label id="staticfileslabel">Files</label>
              </div>
              <div id="nonefiles">
                <input type="checkbox" id="filescb1" />
              </div>
              <div id="readonlyfiles">
                <input type="checkbox" id="filescb2" />
              </div>
              <div id="acessfiles">
                <input type="checkbox" id="filescb3" />
              </div>
            </div>

            {/* ---------------Admin------------------- */}
            <div class="staticadmin">
              <div id="pageadmin">
                <label id="staticadminlabel">Admin</label>
              </div>
              <div id="noneadmin">
                <input type="checkbox" id="admincb1" />
              </div>
              <div id="readonlyadmin">
                <input type="checkbox" id="admincb2" />
              </div>
              <div id="acessadmin">
                <input type="checkbox" id="admincb3" />
              </div>
            </div>

            {/* ------------------------Admin-Admin------------------------- */}
            <div class="staticadmin-company">
              <div id="pageadmin-company">
                <label id="adminlabel-company">Admin-Admin</label>
              </div>
              <div id="noneadmin-company">
                <input type="checkbox" id="admincb1-company" />
              </div>
              <div id="readonlyadmin-company">
                <input type="checkbox" id="admincb2-company" />
              </div>
              <div id="acessadmin-company">
                <input type="checkbox" id="admincb3-company" />
              </div>
            </div>

            {/* ---------------------Admin-People---------------------------- */}
            <div class="staticadmin-people">
              <div id="pageadmin-people">
                <label id="adminlabel-people">Admin-People</label>
              </div>
              <div id="noneadmin-people">
                <input type="checkbox" id="admincb1-people" />
              </div>
              <div id="readonlyadmin-people">
                <input type="checkbox" id="admincb2-people" />
              </div>
              <div id="acessadmin-people">
                <input type="checkbox" id="admincb3-people" />
              </div>
            </div>
            {/* --------------------Admin-Acess----------------------------- */}
            <div class="staticadmin-acess">
              <div id="pageadmin-acess">
                <label id="adminlabel-acess">Admin-Acess</label>
              </div>
              <div id="noneadmin-acess">
                <input type="checkbox" id="admincb1-acess" />
              </div>
              <div id="readonlyadmin-acess">
                <input type="checkbox" id="admincb2-acess" />
              </div>
              <div id="acessadmin-acess">
                <input type="checkbox" id="admincb3-acess" />
              </div>
            </div>

            {/* -------------------Admin-Config------------------------------ */}
            <div class="staticadmin-config">
              <div id="pageadmin-config">
                <label id="adminlabel-config">Admin-Config</label>
              </div>
              <div id="noneadmin-config">
                <input type="checkbox" id="admincb1-config" />
              </div>
              <div id="readonlyadmin-config">
                <input type="checkbox" id="admincb2-config" />
              </div>
              <div id="acessadmin-config">
                <input type="checkbox" id="admincb3-config" />
              </div>
            </div>
            {/* -------------------Admin-Lookups------------------------------ */}
            <div class="staticadmin-lookups">
              <div id="pageadmin-lookups">
                <label id="adminlabel-lookups">Admin-Lookups</label>
              </div>
              <div id="noneadmin-lookups">
                <input type="checkbox" id="admincb1-lookups" />
              </div>
              <div id="readonlyadmin-lookups">
                <input type="checkbox" id="admincb2-lookups" />
              </div>
              <div id="acessadmin-lookups">
                <input type="checkbox" id="admincb3-lookups" />
              </div>
            </div>

            {/* ---------------Admin-Security---------------------------------- */}
            <div class="staticadmin-security">
              <div id="pageadmin-lookups">
                <label id="adminlabel-security">Admin-Security</label>
              </div>
              <div id="noneadmin-security">
                <input type="checkbox" id="admincb1-security" />
              </div>
              <div id="readonlyadmin-lookups">
                <input type="checkbox" id="admincb2-security" />
              </div>
              <div id="acessadmin-security">
                <input type="checkbox" id="admincb3-security" />
              </div>
            </div>

            {/* ---------------Admin-Alerts---------------------------------- */}
            <div class="staticadmin-alerts">
              <div id="pageadmin-alerts">
                <label id="adminlabel-alerts">Admin-Alerts</label>
              </div>
              <div id="noneadmin-alerts">
                <input type="checkbox" id="admincb1-alerts" />
              </div>
              <div id="readonlyadmin-alerts">
                <input type="checkbox" id="admincb2-alerts" />
              </div>
              <div id="acessadmin-alerts">
                <input type="checkbox" id="admincb3-alerts" />
              </div>
            </div>


            {/* ---------------Admin-imports---------------------------------- */}
            <div class="staticadmin-imports">
              <div id="pageadmin-imports">
                <label id="adminlabel-imports">Admin-Imports</label>
              </div>
              <div id="noneadmin-imports">
                <input type="checkbox" id="admincb1-imports" />
              </div>
              <div id="readonlyadmin-imports">
                <input type="checkbox" id="admincb2-imports" />
              </div>
              <div id="acessadmin-imports">
                <input type="checkbox" id="admincb3-imports" />
              </div>
            </div>


            {/* ---------------Admin-hooks -status---------------------------------- */}
            <div class="staticadmin-hooks-status">
              <div id="pageadmin-hooks-status">
                <label id="adminlabel-hooks-status">Admin-Hooks-Status</label>
              </div>
              <div id="noneadmin-hooks-status">
                <input type="checkbox" id="admincb1-hooks-status" />
              </div>
              <div id="readonlyadmin-hooks-status">
                <input type="checkbox" id="admincb2-hooks-status" />
              </div>
              <div id="acessadmin-hooks-status">
                <input type="checkbox" id="admincb3-hooks-status" />
              </div>
            </div>

            {/* ---------------Admin-hooks -config---------------------------------- */}
            <div class="staticadmin-hooks-config">
              <div id="pageadmin-hooks-config">
                <label id="adminlabel-hooks-status">Admin-Hooks-config</label>
              </div>
              <div id="noneadmin-hooks-config">
                <input type="checkbox" id="admincb1-hooks-config" />
              </div>
              <div id="readonlyadmin-hooks-config">
                <input type="checkbox" id="admincb2-hooks-config" />
              </div>
              <div id="acessadmin-hooks-config">
                <input type="checkbox" id="admincb3-hooks-config" />
              </div>
            </div>
            <div id="deletesecurity">
              <button type="button" id="deletesecurityrole"  >Delete Security Role</button>
            </div>
          </div>
        </div>

      </div >
    </div >
  );
}
export function hideshowplusiconsecurity() {
  var headerSecurity = document.getElementById("headersecurity");
  headerSecurity.innerHTML = `ADD SECURITY ROLE`;
  const securitytmsg = document.getElementById("securitytmsg");
  const securityContentShow = document.getElementById("securitycontentshow");
  if (securityContentShow.style.display === "none") {
    securitytmsg.style.display = "none";
    securityContentShow.style.display = "block";
  } else {
    securityContentShow.style.display = "none";
    securitytmsg.style.display = "block";
  }
}
export default Securityold