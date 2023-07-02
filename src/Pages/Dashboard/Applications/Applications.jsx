// import AllApplicationLoan from "../components/ApplicationPage/AllApplicationLoan";
import ApplicationLoans from "../components/ApplicationPage/ApplicationLoans";
// import ApprovedLoans from "../components/ApplicationPage/ApprovedLoans";

import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import "./Applications.css";

export default function Applications() {
  const isOneButton = true;
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
          isOneButton={isOneButton}
          ButtonTitle="Analytics"
        />
        <ApplicationLoans />
        {/* <AllApplicantHeading />
        <Table2 /> */}
      </div>
    </>
  );
}
