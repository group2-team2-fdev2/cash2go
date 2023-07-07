// component
import BigNoticeIcon from "./BigNoticeIcon";
import SmallNoticeIcon from "./SmallNoticeIcon";
  
export default function RejectedLoanDashboard() {
    const title = "Rejected";
    const data = "20";
    const comparism = "+ 1 from yesterday";
    const status = "Rejected";
  
    return (
      <>
        <div className="dashboard-overview-wrapper">
          <div className="dashboard-overview-heading">
            <p className="dashboard-overview-title">{title}</p>
                <BigNoticeIcon />
          </div>
  
          <p className="dashboard-overview-count">{data}</p>
          
          <div className="dashboard-overview-footer">
            <p className="dashboard-overview-history">{comparism}</p>
            <div className="dashboard-overview-status-wrapper rejected">
              <SmallNoticeIcon />
              <p className="dashboard-overview-status">{status}</p>
            </div>
          </div>
        </div>
      </>
    );
  }