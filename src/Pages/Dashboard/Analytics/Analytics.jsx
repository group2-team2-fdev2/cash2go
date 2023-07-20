import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader";
import LineChart from "../components/LineChart/LineChart";
import PieChart from "../components/PieChart/PieChart";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import BarChart from "../components/BarChart/BarChart";
// import LoanStatus from "../components/ApplicationsOverview/ApplicationsSummary";
// import CreditUtilization from "../components/ApplicationsOverview/ApplicationsSummary";
// import OutstandingDebt from "../components/ApplicationsOverview/ApplicationsSummary";

// import { useEffect, useRef } from "react";

export default function Analytics() {
  // const scrollableWrapperRef = useRef(null);
  const isOneButton = true;

  // useEffect(() => {
  //   const scrollableWrapper = scrollableWrapperRef.current;

  //   const handleScroll = () => {
  //     if (scrollableWrapper.scrollLeft > 0) {
  //       scrollableWrapper.classList.add("show-scroll");
  //     } else {
  //       scrollableWrapper.classList.remove("show-scroll");
  //     }
  //   };

  //   scrollableWrapper.addEventListener("scroll", handleScroll);

  //   return () => {
  //     scrollableWrapper.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Approved",
        data: [50, 25, 75, 90, 25, 75],
        backgroundColor: "#169872",
        borderColor: "#169872",
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Declined",
        data: [75, 25, 90, 75, 25, 50],
        backgroundColor: "#FF6F5A",
        borderColor: "#FF6F5A",
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title="Analytics"
          subTitle="Loan Performance and Dashboard"
          link="/applications"
          isOneButton={isOneButton}
          ButtonTitle="Applicants"
          paddingBottom="20px"
        />

        {/* <div className="applicationsOverview-container">
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
            <OutstandingDebt
              title="Outstanding Debt"
              score="N 0.00"
              description="(<20% Previous Debt)"
              status="Excellent"
              backgroundColor="#169872"
              color="#F8F9FB"
            />
          </div>
        </div> */}
        <LineChart
          title="Total Loans: Approved vs Declined"
          duration="Jan - Mar 2023"
          data={data}
        />
        <div className="chart-wrapper">
          <PieChart />
          <BarChart title="Average Loan Requested" score="1,750,654" />
        </div>
      </div>
    </>
  );
}
