// style
import "../../Dashboard.css";
// component
import ApprovedLoanDashboard1 from "./ApprovedLoanDashboard1";
import PendingLoanDashboard1 from "./PendingLoanDashboard1";
import RejectedLoanDashboard1 from "./RejectedLoanDashboard1";

export default function DashboardOverview({
  numRejected,
  newRejectedDiff,
  numPending,
  newPendingDiff,
  numApproved,
  newApprovedDiff,
}) {
  return (
    <>
      <div className="dashboard-overview-container">
        <div className="dashboard-overview-approved">
          <ApprovedLoanDashboard1
            numApproved={numApproved}
            newApprovedDiff={newApprovedDiff}
          />
        </div>
        {/* <PendingLoanDashboard1
            numPending={numPending}
            newPendingDiff={newPendingDiff}
          /> */}
        <div className="dashboard-overview-rejected">
          <RejectedLoanDashboard1
            numRejected={numRejected}
            newRejectedDiff={newRejectedDiff}
          />
        </div>
      </div>
    </>
  );
}
