// style
import "../../Dashboard.css";
// component
import ApprovedLoanDashboard from "./ApprovedLoanDashboard";
import PendingLoanDashboard from "./PendingLoanDashboard";
import RejectedLoanDashboard from "./RejectedLoanDashboard";

export default function DashboardOverview() {
  return (
    <>
      <div className="dashboard-overview-container">
        <div className="dashboard-overview">
          <ApprovedLoanDashboard />
          <PendingLoanDashboard />
          <RejectedLoanDashboard />
        </div>
      </div>
    </>
  );
}
