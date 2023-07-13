//import AllApplicationLoan from "../components/ApplicationPage/AllApplicationLoan";
import { NavLink, Routes, Route, Navigate} from "react-router-dom";
import ApplicationLoans from "../components/ApplicationPage/ApplicationLoans";
// import ApprovedLoans from "../components/ApplicationPage/ApprovedLoans";

import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import "./Applications.css";
import { useState } from "react";
import AllApplicationLoan from "../components/ApplicationPage/AllApplicationLoan";
import ApprovedLoans from "../components/ApplicationPage/ApprovedLoans";
import PendingLoans from "../components/ApplicationPage/PendingLoans";
import RejectedLoans from "../components/ApplicationPage/RejectedLoans";


export default function Applications() {
  const isRegularButton = true;
  return (
    <>
      <Navbar />
      <SideBar />
      <div className ="Dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title="Applications"
          subTitle="View All Loan application"
          isRegularButton={isRegularButton}
          firstLinklink="/Analytics"
          secondLink="/New"
          firstButtonTitle="Analytics"
          secondButtonTitle="New"
        />
        <hr className="headerhr"/>
           <ApplicationLoans/> 
           {/* <nav className="Application-list-application">
            <NavLink  className='Application-loanButton' to={"all-application"}>All Applications <hr className="applicationhr"/></NavLink>
            <NavLink  className='Application-loanButton' to={"approved"}>Approved <hr className="applicationhr"/></NavLink> 
            <NavLink  className='Application-loanButton' to={"pending"}>Pending <hr className="applicationhr"/></NavLink>
            <NavLink  className='Application-loanButton' to={"rejected"}>Rejected <hr className="applicationhr"/></NavLink>
         </nav>
           
          <Routes>
            <Route path="/" element={<Navigate to="/all-application"/>} />
            <Route path="/all-application" element={<AllApplicationLoan/>}/>
            <Route path="/Approved" element={<ApprovedLoans/>} />
            <Route path="/Pending" element={<PendingLoans/>} />
            <Route path="/Rejected" element={<RejectedLoans/>} />
          </Routes>  */}
      </div> 
    </>
  );
}
