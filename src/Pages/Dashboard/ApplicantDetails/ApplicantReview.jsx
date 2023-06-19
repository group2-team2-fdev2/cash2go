import { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import LineChart from "../components/LineChart/LineChart";

export default function ApplicantReview() {
  const [cashflowPage, setCashflowPage] = useState(false);
  const [previousLoansPage, setpreviousLoansPage] = useState(false);

  useEffect(() => {
    setCashflowPage(true);
  }, []);

  const handleCashflowClick = () => {
    setpreviousLoansPage(false);
    setCashflowPage(true);
  }

  const handlePreviousLoanClick = () => {
    setCashflowPage(false);
    setpreviousLoansPage(true);
  };

  const isTrue = true;
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title="Ogbeni Mallam"
          subTitle="ID 20239076"
          isTrue={isTrue}
          firstButtonTitle="Contact"
          secondButtonTitle="Message"
          borderBottom="1px solid #D1D9E2"
          paddingBottom="20px"
        />
        <nav className="metric-navigationWrapper">
          {/* <NavLink to="cashflow" className="metric-navigation">
            Cashflow
          </NavLink> */}
          {/* <NavLink to="" className="metric-navigation">
          </NavLink> */}
          <div onClick={handleCashflowClick} className="metric-navigation">Cashflow</div>
          <div onClick={handlePreviousLoanClick} className="metric-navigation">
            Previous Loans
          </div>
        </nav>
        <div className="metric-wrapper">
          {cashflowPage ? (
            <LineChart />
          ) : previousLoansPage ? (
            ""
          ) : null}
        </div>
      </div>
    </>
  );
}
