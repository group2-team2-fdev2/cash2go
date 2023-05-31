import "./display.css";
import {
  BigNoticeIcon,
  SmallNoticeIcon,
  BigIconRight,
  SmallIconRight,
} from "./icons";

export function ApprovedDisplay() {
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

export function PendingDisplay() {
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
            {" "}
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

export function RejectedDisplay() {
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
