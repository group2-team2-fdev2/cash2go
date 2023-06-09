// component
import BigNoticeIcon from "./BigNoticeIcon";
import SmallNoticeIcon from "./SmallNoticeIcon";

export default function PendingLoanDashboard1({ numPending, newPendingDiff }) {
  const title = "Pending Loans";
  const comparism = `+ ${newPendingDiff} from yesterday`;
  const status = "Pending";

  return (
    <div className="dashboard-overview-wrapper">
      <div className="dashboard-overview-heading">
        <p className="dashboard-overview-title">{title}</p>
        <BigNoticeIcon />
      </div>

      <h1 className="dashboard-overview-count">{numPending}</h1>
      <div className="dashboard-overview-footer">
        <p className="dashboard-overview-history">{comparism}</p>
        <div className="dashboard-overview-status-wrapper pending">
          <SmallNoticeIcon />
          <p className="dashboard-overview-status">{status}</p>
        </div>
      </div>
    </div>
  );
}
