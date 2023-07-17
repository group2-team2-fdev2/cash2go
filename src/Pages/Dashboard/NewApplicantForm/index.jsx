import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import ContactInfo from "./ContactInfo";
import PredictionInfo from "./PredictionInfo";
import "./styles/NewApplicantForm.css";

export default function NewApplicantForm() {
  return (
    <div>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title="New Applications"
          isNoButton
          paddingBottom="32px"
          borderBottom="1px solid #5f6d7e"
        />
        <header className="NewApplicantForm-Navigation">
          <nav className="NewApplicantForm-Navigation_flex-container">
            <NavLink
              to="contact-info"
              activeClassName="active"
              className="NewApplicantForm-Navigation_flex-item NewApplicantForm-Navigation_link"
            >
              Contact Info
            </NavLink>
            <NavLink
              to="prediction-info"
              activeClassName="active"
              className="NewApplicantForm-Navigation_flex-item NewApplicantForm-Navigation_link"
            >
              Prediction Info
            </NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Navigate to="contact-info" />} />
          <Route path="contact-info" element={<ContactInfo />} />
          <Route path="prediction-info" element={<PredictionInfo />} />
        </Routes>
      </div>
    </div>
  );
}
