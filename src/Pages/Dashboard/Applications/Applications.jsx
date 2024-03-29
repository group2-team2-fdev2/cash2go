import { NavLink, Routes, Route, Navigate} from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import "./Applications.css";
import AllApplicationLoan from "../components/ApplicationPage/AllApplicationLoan";
import ApprovedLoans from "../components/ApplicationPage/ApprovedLoans";
import PendingLoans from "../components/ApplicationPage/PendingLoans";
import RejectedLoans from "../components/ApplicationPage/RejectedLoans";



export default function Applications() {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className ="Dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title="Applications"
          subTitle="View All Loan application"
          isRegularButton
          firstLink="/Analytics"
          secondLink="/New"
          firstButtonTitle="Analytics"
          secondButtonTitle="New"
          paddingBottom="32px"
          borderBottom="1px solid #5f6d7e"
        />
        <header className="Application-Navigation">
        <nav className="Application-Navigation_flex-container">
            <NavLink to="all-application" className="Settings-Navigation_flex-item Settings-Navigation_link">All Applications</NavLink>
            <NavLink to="approved" className="Settings-Navigation_flex-item Settings-Navigation_link">Approved</NavLink>
            {/* <NavLink to="pending" className="Settings-Navigation_flex-item Settings-Navigation_link">Pending</NavLink> */}
            <NavLink to="rejected" className="Settings-Navigation_flex-item Settings-Navigation_link">Rejected</NavLink>
          </nav>
          </header>

          <Routes>
            <Route path="/" element={<Navigate to="all-application"/>} />
            <Route path="all-application" element={<AllApplicationLoan/>}/>
            <Route path="approved" element={<ApprovedLoans/>} />
            {/* <Route path="pending" element={<PendingLoans/>} /> */}
            <Route path="rejected" element={<RejectedLoans/>} />
          </Routes> 
      </div> 
    </>
  );
}
