import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";

export default function ApplicantReview() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("cashflow");
  }, [navigate]);

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
          <NavLink to="cashflow" className="metric-navigation">
            Cashflow
          </NavLink>
          {/* <NavLink to="" className="metric-navigation">
            
          </NavLink> */}
        </nav>
        <div className="metric-wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
}
