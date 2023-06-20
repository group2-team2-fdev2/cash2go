import AllApplicationLoan from "../components/ApplicationPage/AllApplicationLoan";
import ApplicationLoans from "../components/ApplicationPage/ApplicationLoans";
import ApprovedLoans from "../components/ApplicationPage/ApprovedLoans";
 import BreadCrumbs from "../components/BreadCrumbs";
 import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import "./Applications.css"

export default function Applications() {
  const isApplicationPage = true;
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Application-dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title="Applications"
          subTitle="View All Loan application"
          link="/Analytics"
          ButtonTitle="Analytics"
          isApplicationPage={isApplicationPage}
        /> 
        <ApplicationLoans />
      </div>
    </>
  );
}
