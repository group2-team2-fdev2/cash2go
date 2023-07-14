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
import { useLocation } from "react-router-dom";

export default function ApplicantOverview() {
  const scrollableWrapperRef = useRef(null);

  const location = useLocation();
  const { selectedApplicant } = location.state || {};

  console.log(selectedApplicant);

  const { prediction, contact } =
    selectedApplicant;

  // console.log(prediction);
  // console.log(contact);
  // console.log(applicationID);
  // console.log(applicationDate);

  const loanDuration = (duration) => {
    const numericValue = parseInt(duration);
    if (numericValue > 6) {
      return "Long Term Loan";
    } else {
      return "Short Term Loan";
    }
  };

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

  if (!selectedApplicant) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title={`${contact.firstName} ${contact.lastName}`}
          subTitle="Loan History and Performance"
          firstLink="info"
          secondLink="applicant-review"
          firstButtonTitle="Info"
          secondButtonTitle="Review"
          isRegularButton
          contact={contact}
        />
        {/* <ApplicationsOverview /> */}
        <div className="applicationsOverview-container">
          <div
            ref={scrollableWrapperRef}
            className="applicationsOverview-wrapper"
          >
            <LoanStatus
              title="Loan Request"
              score={Number(prediction.loanRequestAmount).toLocaleString()}
              description={loanDuration(prediction.loanDuration)}
              status={
                prediction.isApproved
                  ? "Approved"
                  : prediction.isPending
                  ? "Pending"
                  : prediction.isRejected
                  ? "Rejected"
                  : null
              }
              backgroundColor={
                prediction.isApproved
                  ? "#169872"
                  : prediction.isPending
                  ? "#C0F5F9"
                  : prediction.isRejected
                  ? "#FD3D39"
                  : null
              }
              color={
                prediction.isApproved
                  ? "#F8F9FB"
                  : prediction.isPending
                  ? "#000000"
                  : prediction.isRejected
                  ? "#F8F9FB"
                  : null
              }
            />
            <CreditUtilization
              title="Credit Utilization"
              score={prediction.creditUtilization}
              description="(<30)"
              status={
                prediction.isApproved
                  ? "Approved"
                  : prediction.isPending
                  ? "Pending"
                  : prediction.isRejected
                  ? "Rejected"
                  : null
              }
              backgroundColor={
                prediction.isApproved
                  ? "#169872"
                  : prediction.isPending
                  ? "#C0F5F9"
                  : prediction.isRejected
                  ? "#FD3D39"
                  : null
              }
              color={
                prediction.isApproved
                  ? "#F8F9FB"
                  : prediction.isPending
                  ? "#000000"
                  : prediction.isRejected
                  ? "#F8F9FB"
                  : null
              }
            />
            <OutstandingDebt
              title="Outstanding Debt"
              score="N 0.00"
              description="(<20% Previous Debt)"
              status={
                prediction.isApproved
                  ? "Approved"
                  : prediction.isPending
                  ? "Pending"
                  : prediction.isRejected
                  ? "Rejected"
                  : null
              }
              backgroundColor={
                prediction.isApproved
                  ? "#169872"
                  : prediction.isPending
                  ? "#C0F5F9"
                  : prediction.isRejected
                  ? "#FD3D39"
                  : null
              }
              color={
                prediction.isApproved
                  ? "#F8F9FB"
                  : prediction.isPending
                  ? "#000000"
                  : prediction.isRejected
                  ? "#F8F9FB"
                  : null
              }
            />
          </div>
        </div>
        <div className="chart-wrapper">
          <PieChart
            creditScore={prediction.creditScore}
            status={
              prediction.isApproved
                ? "Approved"
                : prediction.isPending
                ? "Pending"
                : prediction.isRejected
                ? "Rejected"
                : null
            }
            backgroundColor={
              prediction.isApproved
                ? "#169872"
                : prediction.isPending
                ? "#C0F5F9"
                : prediction.isRejected
                ? "#FD3D39"
                : null
            }
            color={
              prediction.isApproved
                ? "#F8F9FB"
                : prediction.isPending
                ? "#000000"
                : prediction.isRejected
                ? "#F8F9FB"
                : null
            }
          />
          <BarChart
            title="Loan Requested"
            score={Number(prediction.loanRequestAmount).toLocaleString()}
          />
        </div>
      </div>
    </>
  );
}

// export const ApplicantPredictionLoader = async () => {
//   const response = await axios.get(``)
// }
