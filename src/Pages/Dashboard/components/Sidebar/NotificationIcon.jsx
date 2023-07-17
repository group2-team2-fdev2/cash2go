// import { Notifications } from "../Notifications/NotificationObj";
import "../../Dashboard.css";

import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NotificationIcon() {
  const [notificationClick, setIsClicked] = useState(false);

  const notificationCount = " ";
  const clickNotification = () => {
    setIsClicked(true);
  };

  return (
    <>
      <NavLink
        style={{ color: "currentColor" }}
        className="sidebar-icon-wrapper"
        activeclassName="active"
        to="/notification"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="sidebar-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        
        <p onClick={clickNotification}className="sidebar-navigation">Notification</p>
        <p
          
          className={
            notificationClick
              ? "notificationBell-hide"
              : "notificationBell side-bell"
          }
        >
          
          {notificationCount}
        </p>
        
      </NavLink>
    </>
  );
}
