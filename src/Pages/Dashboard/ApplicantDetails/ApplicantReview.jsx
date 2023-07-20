
import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import LineChart from "../components/LineChart/LineChart";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";

export default function ApplicantReview() {

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Approved",
        data: [50, 25, 75, 90, 25, 75],
        backgroundColor: "#169872",
        borderColor: "#169872",
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Declined",
        data: [75, 25, 90, 75, 25, 50],
        backgroundColor: "#FF6F5A",
        borderColor: "#FF6F5A",
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  const isNoButton = true;
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title="Ogbeni Mallam"
          subTitle="ID 20239076"
          isNoButton={isNoButton}
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
