import LoanStatus from "./ApplicationsSummary";
import CreditUtilization from "./ApplicationsSummary";
import OutstandingDebt from "./ApplicationsSummary";

export default function ApplicationsOverview() {
  return (
    <div className="applicationsOverview-container">
      <LoanStatus
        title="Loan Status"
        score="N 35,000.00"
        description="Short Term Loan"
        status="Approved"
        backgroundColor="#169872"
        color="#F8F9FB"
      />
      <CreditUtilization
        title="Credit Utilization"
        score="18%"
        description="(<30)"
        status="Pending"
        backgroundColor="#C0F5F9"
      />
      <OutstandingDebt
        title="Outstanding Debt"
        score="N 0.00"
        description="(<20% Previous Debt)"
        status="Excellent"
        backgroundColor="#169872"
        color="#F8F9FB"
      />
    </div>
  );
}
