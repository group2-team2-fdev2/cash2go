import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import LineChart from "../components/LineChart/LineChart";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import { getMonthsBackwards } from "../utils/getMonthsBackwards";
import { useSelector } from "react-redux";

export default function ApplicantReview() {
  const selectedApplicant = useSelector(
    (state) => state.applicant.selectedApplicant
  );
  const numMonths = 6;
  const monthsBackwards = getMonthsBackwards(numMonths);

  console.log(selectedApplicant);

  const { prediction, contact, applicationID } = selectedApplicant;

  console.log(contact);

  const { firstName, lastName } = contact;

  const data = {
    labels: monthsBackwards,
    datasets: [
      {
        label: "Cashflow",
        data: [0, 0, 0, 0, 0, 0],
        backgroundColor: prediction.isApproved
          ? "#169872"
          : prediction.isPending
          ? "#C0F5F9"
          : prediction.isRejected
          ? "#FD3D39"
          : null,
        borderColor: prediction.isApproved
          ? "#169872"
          : prediction.isPending
          ? "#C0F5F9"
          : prediction.isRejected
          ? "#FD3D39"
          : null,
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title={`${firstName} ${lastName}`}
          subTitle={`ID ${applicationID}`}
          isNoButton
          firstButtonTitle="Contact"
          secondButtonTitle="Message"
          borderBottom="1px solid #D1D9E2"
          paddingBottom="20px"
        />
        <nav className="metric-navigationWrapper">
          <NavLink to="cashflow" className="metric-navigation">
            Cashflow
          </NavLink>
          <NavLink to="previous-loans" className="metric-navigation">
            Previous Loans
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="cashflow" />} />
          <Route path="/cashflow" element={<LineChart data={data} />} />
          <Route path="/previous-loans" element={""} />
        </Routes>
      </div>
    </>
  );
}
