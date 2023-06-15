import BreadCrumbs from "../components/BreadCrumbs";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import { Notifications } from "../components/Notifications/NotificationObj";
import OptionsIcon from "../components/Notifications/OptionsIcon";
import "./Notification.css";

export default function NotificationPage() {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
        <BreadCrumbs />
        <div className="Notification-display">
          <div className="Notification-title">
            <h4>All Notifications</h4>
            <p>Sorted by Date</p>
          </div>
          <div>
            {Notifications.map((Notifications) => {
              return (
                <div className="Notification" key={Notifications.id}>
                  <div>
                    <div className="Notification-date">{new Date().toLocaleString()}</div>
                    <div className="Notification-message-title">{Notifications.title}</div>
                    <div className="Notification-message">{Notifications.message}</div>
                  </div>
                  <div className="Notification-icon">
                    <span>{<OptionsIcon />}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
