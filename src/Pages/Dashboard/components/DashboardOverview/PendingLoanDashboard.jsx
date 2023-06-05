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
        <div className="display-field">
          <div className="arrange-top">
            <p>{title}</p>
            <span>
              <i className="top-icon">
                <BigNoticeIcon />
              </i>
            </span>
          </div>
  
          <h1>{data}</h1>
          <div className="arrange">
            <p>{comparism}</p>
            <p className="status-pending">
              <SmallNoticeIcon />
              {status}
            </p>
          </div>
        </div>
      </>
    );
  }