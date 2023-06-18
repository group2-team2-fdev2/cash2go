import { useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import { Notifications } from "../components/Notifications/NotificationObj";
import BoxIcon from "../components/Notifications/checkIcons";
import OptionsIcon from "../components/Notifications/OptionsIcon";
import PreviousArrow from "../components/Notifications/PreviousArrow";
import NextArrow from "../components/Notifications/NextArrow";

import "./Notification.css";

export default function NotificationPage() {
  const isNotifcationPage = true;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the starting and ending index of the items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Notifications.slice(indexOfFirstItem, indexOfLastItem);
  const noOfPages = Math.round(Notifications.length / itemsPerPage);

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(currentPage);

  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
        <div className="NotificationPage-display">
          <BreadCrumbs />
          <DashboardHeader
            title="Notifications"
            firstLink="/settings"
            secondLink="/dashboard"
            firstButtonTitle="Settings"
            secondButtonTitle="Mark All as Read"
            isNotificationPage={isNotifcationPage}
          />

          <div className="Notification-notifications-title">
            <h4>All Notifications</h4>
            <p>Sorted by Date</p>
          </div>
          <div>
            {currentItems.map((Notifications) => {
              return (
                <div
                  className="Notification-notifications-list"
                  key={Notifications.id}
                >
                  <div>
                    <div className="Notification-notifications-BoxIcon">
                      <span>{<BoxIcon />}</span>
                    </div>
                    <div className="Notification-notifications-date">
                      {new Date().toLocaleString()}
                      
                    </div>

                    <div className="Notification-messages-title">
                      {Notifications.title}
                    </div>
                    <div className="Notification-messages-boby">
                      {Notifications.message}
                    </div>
                  </div>
                  <div className="Notification-notifications-OptionsIcon">
                    <span>{<OptionsIcon />}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Notification-footer-navigation">
            <button
              className="Notification-footer-previous"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <div className="Notification-footer-previousSet">
                <span>{<PreviousArrow />}</span>
                <span className="Notification-footer-previousText"> Prev</span>
              </div>
            </button>
            <div className="Notification-footer-pageOptions">
              <div>
                {[...Array(noOfPages)].map((_, index) => (
                  <a
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={
                      currentPage === index + 1
                        ? "Notification-footer-pageList active"
                        : "Notification-footer-pageList"
                    }
                  >
                    <div className="Notification-footer-pageList">
                      {index + 1}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <button
              className="Notification-footer-next"
              disabled={indexOfLastItem >= Notifications.length}
              onClick={() => paginate(currentPage + 1)}
            >
             <span> {<NextArrow />}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
