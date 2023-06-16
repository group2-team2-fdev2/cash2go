import BreadCrumbs from "../components/BreadCrumbs";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import { Notifications } from "../components/Notifications/NotificationObj";
import BoxIcon from "../components/Notifications/checkIcons";
import OptionsIcon from "../components/Notifications/OptionsIcon";

import "./Notification.css";

export default function NotificationPage() {
  const isNotifcationPage = true;
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
      <div className="NotificationPage-display">
        <BreadCrumbs />
        <DashboardHeader
          title="Notifications"
          firstLink= "/settings"
          secondLink= "/#"
          firstButtonTitle= "Settings"
          secondButtonTitle= "Mark All"
          isNotificationPage = {isNotifcationPage}
        />

          <div className="Notification-notifications-title">
            <h4>All Notifications</h4>
            <p>Sorted by Date</p>
          </div>
          <div>
            {Notifications.map((Notifications) => {
              return (
                
                <div className="Notification-notifications-list" key={Notifications.id}>
                  <div>
                  <div className="Notification-notifications-BoxIcon">
                    <span>{<BoxIcon />}</span>

                  </div>
                    <div className="Notification-notifications-date">{new Date().toLocaleString()}</div>
                    
                    <div className="Notification-messages-title">{Notifications.title}</div>
                    <div className="Notification-messages-boby">{Notifications.message}</div>
                  </div>
                  <div className="Notification-notifications-OptionsIcon">
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
