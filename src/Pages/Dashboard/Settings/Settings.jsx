import "./Settings.css";
import { useState } from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import ModelSettings from "./ModelSettings";
import NotificationSettings from "./NotificationSettings";
import SecurityAndPrivacySettings from "./SecurityAndPrivacySettings";

export default function Settings() {
  const [activeSection, setActiveSection] = useState("model");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
        <BreadCrumbs />
        {activeSection !== "model" &&
        (activeSection === "notification" ||
          activeSection === "securityAndPrivacy") ? (
          <DashboardHeader
            title="Settings"
            firstButtonTitle="Turn ALL ON"
            secondButtonTitle="Turn ALL OFF"
            isButtonVariant={
              activeSection !== "model" &&
              (activeSection === "notification" ||
                activeSection === "securityAndPrivacy")
            }
          />
        ) : (
          <DashboardHeader
            title="Settings"
            firstButtonTitle="Manage"
            secondButtonTitle="Create New Model"
          />
        )}
        <nav className="Settings-Navigation">
          <ul className="Settings-Navigation_flex-container">
            <li className="Settings-Navigation_flex-item">
              <NavLink
                className={`Settings-Navigation_link ${
                  activeSection === "model" ? "active" : ""
                }`}
                to="model-settings"
                onClick={() => handleSectionChange("model")}
              >
                Model
              </NavLink>
            </li>
            <li className="Settings-Navigation_flex-item">
              <NavLink
                className={`Settings-Navigation_link ${
                  activeSection === "notification" ? "active" : ""
                }`}
                to="notification-settings"
                onClick={() => handleSectionChange("notification")}
              >
                Notification
              </NavLink>
            </li>
            <li className="Settings-Navigation_flex-item">
              <NavLink
                className={`Settings-Navigation_link ${
                  activeSection === "securityAndPrivacy" ? "active" : ""
                }`}
                to="security-&-privacy-settings"
                onClick={() => handleSectionChange("securityAndPrivacy")}
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
