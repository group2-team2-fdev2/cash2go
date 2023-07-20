import { useState, useEffect } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import DashboardHeader from "../components/DashboardHeader";
import { Notifications } from "../components/Notifications/NotificationObj";
import ListItem from "../components/Notifications/truncateTextFunction";
import ReadMark from "../components/Notifications/ReadMark";
import BoxIcon from "../components/Notifications/checkIcons";
import OptionsIcon from "../components/Notifications/OptionsIcon";
import PreviousArrow from "../components/Notifications/PreviousArrow";
import NextArrow from "../components/Notifications/NextArrow";

import "./Notification.css";

export default function NotificationPage() {
  const [read, setRead] = useState({});
  const [message, setMessage] = useState(false);

  useEffect(() => {
    // Save read state to local storage
    localStorage.setItem("readState", JSON.stringify(read));
  }, [read]);

  const viewMessage = () => {
    setMessage(!message);
  };

  const onMessageOpen = () => {
    viewMessage();
  };

  const onMarkRead = (id) => {
    setRead((read) => ({
      ...read,
      [id]: true,
    }));
  };

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
        <BreadCrumbs />
        <DashboardHeader
          title="Notifications"
          firstLink="/settings"
          secondLink=""
          firstButtonTitle="Settings"
          secondButtonTitle="Mark All as Read"
        />
        {/* <div className="NotificationPage-display"> </div> */}

        <div className="Notification-notifications-title">
          <h4>All Notifications</h4>
          <p>Sorted by Date</p>
        </div>
        {Notifications.length > 0 ? (
          <>
            <div>
              {currentItems.map((Notifications) => {
                return (
                  <div
                    className="Notification-notifications-list"
                    key={Notifications.id}
                    onClick={() => onMarkRead(Notifications.id)}
                    onDoubleClick={onMessageOpen}
                  >
                    {read[Notifications.id] && message && (
                      <section className="Notification-ViewNotification">
                        <div className="Notification-ViewNotification-overlay"></div>
                        <div className="Notification-ViewNotification-content">
                          <h1>{Notifications.title}</h1>
                          <p>{Notifications.message}</p>
                          <button
                            className="Notification-ViewNotification-close"
                            onClick={onMessageOpen}
                          >
                            {" "}
                            Back
                          </button>
                        </div>
                      </section>
                    )}
                    <div>
                      <div className="Notification-notifications-BoxIcon">
                        <span
                          className={
                            read[Notifications.id]
                              ? "Notification-ViewNotification-ticks"
                              : "Notification-ViewNotification-hide"
                          }
                        >
                          {<ReadMark />}
                        </span>
                        <span
                          className={
                            read[Notifications.id]
                              ? "Notification-ViewNotification-hide"
                              : "none"
                          }
                        >
                          {<BoxIcon />}
                        </span>
                      </div>
                      <div className="Notification-notifications-date">
                        {new Date().toLocaleString()}
                      </div>

                      <div
                        className={
                          read[Notifications.id]
                            ? "Notification-messages-title"
                            : "Notification-messages-title active"
                        }
                      >
                        {Notifications.title}
                      </div>
                      <div
                        className={
                          read[Notifications.id]
                            ? "Notification-messages-boby"
                            : "Notification-messages-body active"
                        }
                      >
                        <ListItem text={Notifications.message} />
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
                  <span className="Notification-footer-previousText"> </span>
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
            </div>{" "}
          </>
        ) : (
          <p className="Notification-noNotifications">No Notification</p>
        )}
      </div>
    </>
  );
}
