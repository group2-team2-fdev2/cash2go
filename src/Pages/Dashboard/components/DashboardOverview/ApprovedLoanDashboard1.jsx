// component
import BigIconRight from "./BigNoticeIcon";
import SmallIconRight from "./SmallNoticeIcon";

export default function ApprovedLoanDashboard1({
  numApproved,
  newApprovedDiff,
}) {
  const title = "Approved Loans";
  const comparism = `+ ${newApprovedDiff} from yesterday`;
  const status = "Approved";

  return (
    <div className="dashboard-overview-wrapper">
      <div className="dashboard-overview-heading">
        <p className="dashboard-overview-title">{title}</p>
        <BigIconRight />
      </div>

      <p className="dashboard-overview-count">{numApproved}</p>

      <div className="dashboard-overview-footer">
        <p className="dashboard-overview-history">{comparism}</p>
        <div className="dashboard-overview-status-wrapper approved">
          <SmallIconRight />
          <p className="dashboard-overview-status">{status}</p>
        </div>
      </div>
    </div>
  );
}
