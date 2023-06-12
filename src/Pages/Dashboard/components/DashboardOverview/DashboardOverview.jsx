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
        <div className="dashboard-overview">
          <ApprovedLoanDashboard1
            numApproved={numApproved}
            newApprovedDiff={newApprovedDiff}
          />
          <PendingLoanDashboard1
            numPending={numPending}
            newPendingDiff={newPendingDiff}
          />
          <RejectedLoanDashboard1
            numRejected={numRejected}
            newRejectedDiff={newRejectedDiff}
          />
        </div>
      </div>
    </>
  );
}
