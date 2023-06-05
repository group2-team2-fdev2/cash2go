// component
import BigNoticeIcon from "./BigNoticeIcon";
import SmallNoticeIcon from "./SmallNoticeIcon";

export default function PendingLoanDashboard() {
    const title = "Pending Loans";
    const data = "81";
    const comparism = "+ 5 from yesterday";
  
    const status = "Pending";
  
    return (
      <>
        <div className="dashboard-overview-wrapper">
          <div className="dashboard-overview-heading">
            <p className="dashboard-overview-title">{title}</p>
                <BigNoticeIcon />
          </div>
  
          <h1 className="dashboard-overview-count">{data}</h1>
          <div className="dashboard-overview-footer">
            <p className="dashboard-overview-history">{comparism}</p>
            <div className="dashboard-overview-status-wrapper pending">
              <SmallNoticeIcon />
              <p className="dashboard-overview-status">{status}</p>
            </div>
          </div>
        </div>
      </>
    );
  }