import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Auth from './pages/Login/Auth';
import Forgotpassword from './pages/Login/Forgotpassword';
import Resetpassword from './pages/Login/Resetpassword';
import Home from './pages/Home/Home';
import Account from './pages/Accounts/Accounts';
import Quotes from './pages/Quotes/Quotes';
import Demand from './pages/Demand/Demand';
import Forecast from './pages/Forecast/Forecast';
import Admin from './pages/Admin/Admin';
import Opportunities from './pages/Opportunities/Opportunities';
import People from './pages/People/People';
import Access from './pages/Access/Access';
import Items from './pages/Items/Items';
import Content from './pages/Content/Content';
import ContentEdit from './pages/Content/ContentEdit';
import Asset from './pages/Asset/Asset';
import CreateAccount from './pages/Accounts/CreateAccount';
import Lookups from './pages/Lookups/Lookups.jsx';
import Config from './pages/Config/Config';
import OpportunitiesData from './pages/Opportunities/OpportunitiesData';
import QuoteCreation from './pages/Opportunities/QuoteCreation';
import GuidedSelling from './pages/GuidedSelling/GuidedSelling';
import Doctypes from './pages/Doctypes/Doctypes';
import Templates from './pages/Templates/Templates';
import Surveysetup from './pages/Survey/Surveysetup';
import Security from './pages/Security/Security';
import Alert from './pages/Alert/Alert';
import Imports from './pages/Imports/Imports'
import Myprofile from './pages/Myprofile/Myprofilejs';
import Rolessetup from './pages/Roles/Rolessetup';
import Rolesratecards from './pages/Roles/Rolesratecards';
import Rolesexchange from './pages/Roles/rolesexchange';
import Comapnyprofile from './pages/Company/CompanyProfile'
import Comapnyorgs from './pages/Company/CompanyOrgs'
import Whereused from './pages/Survey/Whereused';
import WriteFlexSecurity from './components/WriteFlexSecurity';
import RolessetupEdit from './pages/Roles/RolessetupEdit';
import SetupCreate from './pages/Survey/SurveysetupCreate';
import DoctypeNew from './pages/Doctypes/DoctypeNew';
import Calc from './pages/GuidedSelling/Calc';
function App() {

  // localStorage.setItem('user', '');
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : "";

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
          {/* <Route path="/logout" element={user ? <Navigate to="/home" /> : <Login />} /> */}
          <Route path="/register" element={user ? <Navigate to="/home" /> : <Register />} />
          <Route path='/auth' element={user ? <Navigate to="/home" /> : <Auth />} />
          <Route path='/forgotpassword' element={user ? <Navigate to="/home" /> : <Forgotpassword />} />
          <Route path='/resetpassword' element={user ? <Navigate to="/home" /> : <Resetpassword />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
          <Route path="/account" element={user ? <Account /> : <Navigate to="/" />} />
          <Route path="/quotes" element={user ? <Quotes /> : <Navigate to="/" />} />
          <Route path="/demand" element={user ? <Demand /> : <Navigate to="/" />} />
          <Route path="/forecast" element={user ? <Forecast /> : <Navigate to="/" />} />
          <Route path="/admin" element={user ? <Admin /> : <Navigate to="/" />} />
          <Route path="/people" element={user ? <People /> : <Navigate to="/" />} />
          <Route path="/access" element={user ? <Access /> : <Navigate to="/" />} />
          <Route path="/access" element={user ? <Access /> : <Navigate to="/" />} />
          <Route path="/items" element={user ? <Items /> : <Navigate to="/" />} />
          <Route path="/content" element={user ? <Content /> : <Navigate to="/" />} />
          <Route path='/contentEdit' element={user ? <ContentEdit /> : <Navigate to="/" />} />
          <Route path="/asset" element={user ? <Asset /> : <Navigate to="/" />} />
          <Route path="/lookups" element={user ? <Lookups /> : <Navigate to="/" />} />
          <Route path="/config" element={user ? <Config /> : <Navigate to="/" />} />
          {/* <Route path="/doctypes" element={user ? <Doctypes /> : <Navigate to="/" />} /> */}
          <Route path="/doctypesOld" element={user ? <Doctypes /> : <Navigate to="/" />} />
          <Route path="/doctypes" element={user ? <DoctypeNew /> : <Navigate to="/" /> }/>
          <Route path="/setup/:id" element={user ? <Surveysetup /> : <Navigate to="/" />} />
          <Route path="/setup" element={user ? <Surveysetup /> : <Navigate to="/" />} />
          <Route path="/setup/create" element={user ? <SetupCreate /> : <Navigate to="/" />} />
          <Route path="/Whereused" element={user ? <Whereused /> : <Navigate to="/" />} />
          <Route path="/templates" element={user ? <Templates /> : <Navigate to="/" />} />
          <Route path="/alert" element={user ? <Alert /> : <Navigate to="/" />} />
          <Route path="/security" element={user ? <Security /> : <Navigate to="/" />} />
          <Route path="/imports" element={user ? <Imports /> : <Navigate to="/" />} />
          <Route path="/myprofile" element={user ? <Myprofile /> : <Navigate to="/" />} />
          <Route path="/rolessetup" element={user ? <Rolessetup /> : <Navigate to="/" />} />
          <Route path="/rolessetupedit" element={user ? <RolessetupEdit /> : <Navigate to="/" />} />
          <Route path="/companyprofile" element={user ? <Comapnyprofile /> : <Navigate to="/" />} />          
          <Route path="/companyorgs" element={user ? <Comapnyorgs /> : <Navigate to="/" />} />
          <Route path="/rolesratecards" element={user ? <Rolesratecards /> : <Navigate to="/" />} />
          <Route path="/rolesexchange" element={user ? <Rolesexchange /> : <Navigate to="/" />} />
          <Route path="/guidedselling" element={user ? <GuidedSelling /> : <Navigate to="/" />} />
          <Route path="/quotecreation" element={user ? <QuoteCreation /> : <Navigate to="/" />} />
          <Route path="/opportunitiesdata" element={user ? <OpportunitiesData /> : <Navigate to="/" />} />
          <Route path="/account/create" element={user ? <CreateAccount /> : <Navigate to="/" />} />
          <Route path='/opportunities' element={user ? <Opportunities /> : <Navigate to="/" />} />
          <Route path='/calc' element={user ? <Calc /> : <Navigate to="/" />} />
          {/* <Route path='/auth' element={<Auth />} /> */}

        </Routes>
      </>
    </BrowserRouter>
  );
}


export default App;
