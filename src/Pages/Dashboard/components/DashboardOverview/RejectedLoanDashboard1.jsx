// component
import BigStopCircleIcon from "./BigStopCircleIcon";
import SmallStopCircleIcon from "./SmallStopCircleIcon";

export default function RejectedLoanDashboard1({
  // eslint-disable-next-line react/prop-types
  numRejected,
  // eslint-disable-next-line react/prop-types
  newRejectedDiff,
}) {
  const title = "Rejected Loans";
  const comparism = `+ ${newRejectedDiff} from yesterday`;
  const status = "Rejected";

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
