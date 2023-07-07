// import axios from "axios";
// import ApplicationsOverview from "../components/ApplicationsOverview/ApplicationsOverview";
import BarChart from "../components/BarChart/BarChart";
import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import PieChart from "../components/PieChart/PieChart";
import SideBar from "../components/Sidebar/SideBar";
import LoanStatus from "../components/ApplicationsOverview/ApplicationsSummary";
import CreditUtilization from "../components/ApplicationsOverview/ApplicationsSummary";
import OutstandingDebt from "../components/ApplicationsOverview/ApplicationsSummary";
import { useEffect, useRef } from "react";

export default function ApplicantOverview() {
  const scrollableWrapperRef = useRef(null);
  const isRegularButton = true;

  useEffect(() => {
    const scrollableWrapper = scrollableWrapperRef.current;

    const handleScroll = () => {
      if (scrollableWrapper.scrollLeft > 0) {
        scrollableWrapper.classList.add("show-scroll");
      } else {
        scrollableWrapper.classList.remove("show-scroll");
      }
    };

    scrollableWrapper.addEventListener("scroll", handleScroll);

    return () => {
      scrollableWrapper.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          isRegularButton={isRegularButton}
        />
        {/* <ApplicationsOverview /> */}
        <div className="applicationsOverview-container">
          <div
            ref={scrollableWrapperRef}
            className="applicationsOverview-wrapper"
          >
            <LoanStatus
              title="Loan Status"
              score="N 35,000.00"
              description="Short Term Loan"
              status="Approved"
              backgroundColor="#169872"
              color="#F8F9FB"
            />
            <CreditUtilization
              title="Credit Utilization"
              score="18%"
              description="(<30)"
              status="Pending"
              backgroundColor="#C0F5F9"
            />
            <OutstandingDebt
              title="Outstanding Debt"
              score="N 0.00"
              description="(<20% Previous Debt)"
              status="Excellent"
              backgroundColor="#169872"
              color="#F8F9FB"
            />
            {/* <OutstandingDebt
              title="Outstanding Debt"
              score="N 0.00"
              description="(<20% Previous Debt)"
              status="Excellent"
              backgroundColor="#169872"
              color="#F8F9FB"
            /> */}
          </div>
        </div>
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
