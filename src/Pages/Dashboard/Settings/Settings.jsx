import { useState, useEffect } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import "./Settings.css";
import NotificationSettings from "./NotificationSettings";
import SecurityAndPrivacySettings from "./SecurityAndPrivacySettings";

export default function Settings() {
  const [Notification, setNotification] = useState(false);
  const [securityAndPrivacy, setSecurityAndPrivacy] = useState(false);

  useEffect(() => {
    setNotification(true);
  }, []);

  const handleNotificationClick = () => {
    setSecurityAndPrivacy(false);
    setNotification(true);
  };

  const handleSecurityAndPrivacyClick = () => {
    setNotification(false);
    setSecurityAndPrivacy(true);
  };
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
            <li
              onClick={handleNotificationClick}
              className={
                Notification
                  ? "Settings-Navigation_flex-item active"
                  : "Settings-Navigation_flex-item"
              }
            >
              Notification
            </li>
            <li
              onClick={handleSecurityAndPrivacyClick}
              className={
                securityAndPrivacy
                  ? "Settings-Navigation_flex-item active"
                  : "Settings-Navigation_flex-item"
              }
            >
              Security & Privacy
            </li>
          </ul>
        </nav>
        <section>
          {Notification ? (
            <NotificationSettings />
          ) : securityAndPrivacy ? (
            <SecurityAndPrivacySettings />
          ) : null}
        </section>
      </div>
    </>
  );
}
