// component
import BigStopCircleIcon from "./BigStopCircleIcon";
import SmallStopCircleIcon from "./SmallStopCircleIcon";

export default function RejectedLoanDashboard1({
  numRejected,
  newRejectedDiff,
}) {
  const title = "Rejected";
  const comparism = `+ ${newRejectedDiff} from yesterday`;
  const status = "rejected";

  return (
    <div className="dashboard-overview-wrapper">
      <div className="dashboard-overview-heading">
        <p className="dashboard-overview-title">{title}</p>
        <BigStopCircleIcon />
      </div>

      <p className="dashboard-overview-count">{numRejected}</p>

      <div className="dashboard-overview-footer">
        <p className="dashboard-overview-history">{comparism}</p>
        <div className="dashboard-overview-status-wrapper rejected">
          <SmallStopCircleIcon />
          <p className="dashboard-overview-status">{status}</p>
        </div>
      </div>
    </div>
  );
}
