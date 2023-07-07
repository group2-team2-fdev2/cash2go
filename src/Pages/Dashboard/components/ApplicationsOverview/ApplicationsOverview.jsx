import LoanStatus from "./ApplicationsSummary";
import CreditUtilization from "./ApplicationsSummary";
import OutstandingDebt from "./ApplicationsSummary";
import { useEffect, useRef } from "react";

export default function ApplicationsOverview() {
  const scrollableWrapperRef = useRef(null);

  useEffect(() => {
    const scrollableWrapper = scrollableWrapperRef.current;

    const handleScroll = () => {
      if (scrollableWrapper.scrollLeft > 0) {
        scrollableWrapper.classList.add("show-scroll");
      } else {
        scrollableWrapper.classList.remove("show-scroll");
      }
    };

    scrollableWrapper.addEventListener("scroll", handleScroll);

    return () => {
      scrollableWrapper.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="applicationsOverview-container">
      <div ref={scrollableWrapperRef} className="applicationsOverview-wrapper">
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
        {/* <OutstandingDebt
              title="Outstanding Debt"
              score="N 0.00"
              description="(<20% Previous Debt)"
              status="Excellent"
              backgroundColor="#169872"
              color="#F8F9FB"
            /> */}
      </div>
    </div>
  );
}
