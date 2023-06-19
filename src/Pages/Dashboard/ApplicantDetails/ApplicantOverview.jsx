// import axios from "axios";
import ApplicationsOverview from "../components/ApplicationsOverview/ApplicationsOverview";
import BarChart from "../components/BarChart/BarChart";
import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import PieChart from "../components/PieChart/PieChart";
import SideBar from "../components/Sidebar/SideBar";

export default function ApplicantOverview() {

  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title="Ogbeni Mallam"
          subTitle="Loan History and Performance"
          firstLink="info"
          secondLink="applicant-review"
          firstButtonTitle="Info"
          secondButtonTitle="Review"
        />    
        <ApplicationsOverview />
        <div className="chart-wrapper">
          <PieChart />
          <BarChart />
        </div>
      </div>
    </>
  );
}

// export const ApplicantPredictionLoader = async () => {
//   const response = await axios.get(``)
// }
