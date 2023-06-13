import AllApplicantHeading from "../components/ApplicationPage/AllApplicantHeading";
import Table2 from "../components/ApplicationPage/Table2";
import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import "../components/ApplicationPage/Application.css"

export default function Applications() {
  const isApplicationPage = true;
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title="Applications"
          subTitle="View All Loan application"
          link="/Analytics"
          ButtonTitle="Analytics"
          isApplicationPage={isApplicationPage}
        />
        <AllApplicantHeading />
        <Table2 />
      </div>
    </>
  );
}
