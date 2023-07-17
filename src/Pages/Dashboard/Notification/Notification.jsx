import { useState, useEffect } from "react";
// import { nanoid } from 'nanoid'
import BreadCrumbs from "../components/BreadCrumbs";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
// import { Notifications } from "../components/Notifications/NotificationObj";
import ListItem from "../components/Notifications/truncateTextFunction";
import ReadMark from "../components/Notifications/ReadMark";
import BoxIcon from "../components/Notifications/checkIcons";
import OptionsIcon from "../components/Notifications/OptionsIcon";
import PreviousArrow from "../components/Notifications/PreviousArrow";
import NextArrow from "../components/Notifications/NextArrow";

import "./Notification.css";

export default function NotificationPage( id, title, message) {

  // const Notification = [{
  //   id: nanoid(),
  //   title:title,
  //   message:message
  // }]

  const [read, setRead] = useState({});
  const [messageView, setmessageView] = useState(false);


  useEffect(() => {
    // Retrieve read state from local storage or backend API, if available
    // Example using local storage:
    const storedReadState = localStorage.getItem('notificationReadState');
    if (storedReadState) {
      setRead(JSON.parse(storedReadState));
    }
  }, []);

  useEffect(() => {
    // Save read state to local storage or backend API
    // Example using local storage:
    localStorage.setItem('notificationReadState', JSON.stringify(read));
  }, [read]);

  const onMarkRead = (id) => {
    setRead(prevState => ({
      ...prevState,
      [id]: true
    }));
  };

  useEffect(() => {
    // Retrieve read state from local storage, if available
    const storedReadState = localStorage.getItem('readState');
    if (storedReadState) {
      setRead(JSON.parse(storedReadState));
    }
  }, []);

  useEffect(() => {
    // Save read state to local storage
    localStorage.setItem("readState", JSON.stringify(read));
  }, [read]);

  const viewmessageView = () => {
    setmessageView(!messageView);
  };

  const onmessageViewOpen = () => {
    viewmessageView();
  };



  const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 5;

  // Calculate the starting and ending index of the items to display
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = Notification.slice(indexOfFirstItem, indexOfLastItem);
  // const noOfPages = Math.round(Notification.length / itemsPerPage);

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
        {Notification.length > 0 ? (
          <>
            <div>
              {/* {currentItems.map((Notification) => { */}
                return (
                  <div
                    className="Notification-notifications-list"
                    key={id}
                    onClick={() => onMarkRead(id)}
                    onDoubleClick={onmessageViewOpen}
                  >
                    {read[Notification.id] && messageView && (
                      <section className="Notification-ViewNotification">
                        <div className="Notification-ViewNotification-overlay"></div>
                        <div className="Notification-ViewNotification-content">
                          <h1>{title}</h1>
                          <p>{message}</p>
                          <button
                            className="Notification-ViewNotification-close"
                            onClick={onmessageViewOpen}
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
                            read[id]
                              ? "Notification-ViewNotification-ticks"
                              : "Notification-ViewNotification-hide"
                          }
                        >
                          {<ReadMark />}
                        </span>
                        <span
                          className={
                            read[id]
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
                          read[id]
                            ? "Notification-messageViews-title"
                            : "Notification-messageViews-title active"
                        }
                      >
                        {title}
                      </div>
                      <div
                        className={
                          read[id]
                            ? "Notification-messageViews-body"
                            : "Notification-messageViews-body active"
                        }
                      >
                         <ListItem text={message} />
                       
                        
                      </div>
                    </div>
                    <div className="Notification-notifications-OptionsIcon">
                      <span>{<OptionsIcon />}</span>
                    </div>
                  </div>
                );
              {/* })} */}
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
                  {[...Array(5)].map((_, index) => (
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
                // disabled={2 >= Notification.length}
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
