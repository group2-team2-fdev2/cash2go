
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import "./Settings.css";
import ModelSettings from "./ModelSettings";
import NotificationSettings from "./NotificationSettings";
import SecurityAndPrivacySettings from "./SecurityAndPrivacySettings";

export default function Settings() {
  const isNoButton = true;
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title="Settings"
          isNoButton={isNoButton}
          paddingBottom="32px"
          borderBottom="1px solid #D1D9E2"
        />
        <nav className="Settings-Navigation">
          <ul className="Settings-Navigation_flex-container">
            <li className="Settings-Navigation_flex-item">
              <NavLink
                className="Settings-Navigation_link"
                activeclassName="active"
                to="model-settings"
              >
                Model
              </NavLink>
            </li>
            <li className="Settings-Navigation_flex-item">
              <NavLink
                className="Settings-Navigation_link"
                activeclassName="active"
                to="notification-settings"
              >
                Notification
              </NavLink>
            </li>
            <li className="Settings-Navigation_flex-item">
              <NavLink
                className="Settings-Navigation_link"
                activeclassName="active"
                to="security-&-privacy-settings"
              >
                Security & Privacy
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="model-settings" />} />
          <Route path="/model-settings" element={<ModelSettings />} />
          <Route
            path="/notification-settings"
            element={<NotificationSettings />}
          />
          <Route
            path="/security-&-privacy-settings"
            element={<SecurityAndPrivacySettings />}
          />
        </Routes>
      </div>
    </>
  );
}
