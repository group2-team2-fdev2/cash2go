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
        <div className="display-field">
          <div className="arrange-top">
            <p>{title}</p>
            <span>
              {" "}
              <i className="top-icon">
                <BigNoticeIcon />
              </i>
            </span>
          </div>
  
          <h1>{data}</h1>
          <div className="arrange">
            <p>{comparism}</p>
            <p className="status-rejected">
              <SmallNoticeIcon />
              {status}
            </p>
          </div>
        </div>
      </>
    );
  }