// style
import "../../Dashboard.css";
// component
import ApprovedLoanDashboard from "./ApprovedLoanDashboard";
import PendingLoanDashboard from "./PendingLoanDashboard";
import RejectedLoanDashboard from "./RejectedLoanDashboard";

export default function Display() {
  return (
    <>
      <div className="parentdisplay-field">
        <ApprovedLoanDashboard />
        <PendingLoanDashboard />
        <RejectedLoanDashboard />
      </div>
    </>
  );
}
