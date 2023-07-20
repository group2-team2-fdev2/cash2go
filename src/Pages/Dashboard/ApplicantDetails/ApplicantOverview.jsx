import BarChart from "../components/BarChart/BarChart";
import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import PieChart from "../components/PieChart/PieChart";
import SideBar from "../components/Sidebar/SideBar";
import LoanStatus from "../components/ApplicationsSummary";
import CreditUtilization from "../components/ApplicationsSummary";
import OutstandingDebt from "../components/ApplicationsSummary";
import { useLocation, useNavigate } from "react-router-dom";

export default function ApplicantOverview() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedApplicant } = location.state || {};

  console.log(selectedApplicant);

  if (!selectedApplicant) {
    return navigate(-1);
  }

  const { prediction, contact, applicationID } = selectedApplicant;

  const loanDuration = (duration) => {
    const numericValue = parseInt(duration);
    console.log(numericValue);
    if (numericValue < 6) {
      return "Short Term Loan";
    } else {
      return "Long Term Loan";
    }
  };

  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title={`${contact.firstName} ${contact.lastName}`}
          subTitle={`ID ${applicationID}`}
          firstLink="info"
          InfoLink = "/info"
          secondLink="applicant-review"
          firstButtonTitle="Info"
          secondButtonTitle="Review"
          isRegularButton
          contact={contact}
        />
        <div className="applicationsOverview-container">
          <div className="applicationsOverview-wrapper">
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
              description={
                prediction.isApproved
                  ? "Above Average"
                  : prediction.isPending
                  ? "Average"
                  : prediction.isRejected
                  ? "Below Average"
                  : null
              }
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
              description="N/A"
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
            title="Previous Loans"
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
