// component
import BigIconRight from "./BigNoticeIcon";
import SmallIconRight from "./SmallNoticeIcon";

export default function ApprovedLoanDashboard() {
  const title = "Approved Loans";
  const data = "104";
  const comparism = "+ 10 from yesterday";
  const status = "Approved";

  return (
    <>
      <div className="display-field">
        <div className="arrange-top">
          <p>{title}</p>
          <span>
            {" "}
            <i className="top-icon">
              <BigIconRight />
            </i>
          </span>
        </div>

        <h1>{data}</h1>
        <div className="arrange">
          <p>{comparism}</p>
          <p className="status-approved">
            <SmallIconRight />
            {status}
          </p>
        </div>
      </div>
    </>
  );
}
