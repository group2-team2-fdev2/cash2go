import BreadCrumbs from "../BreadCrumbs";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/SideBar";
import { Notifications } from "./NotificationObj";
import OptionsIcon from "./OptionsIcon";
import "./noticications.css";

export default function NotificationPage() {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="dashboard-content">
        <BreadCrumbs />
        <div className="display">
          <div className="notification-title">
            <h4>All Notifications</h4>
            <p>Sorted by Date</p>
          </div>
          <div>
            {Notifications.map((Notifications) => {
              return (
                <div className="notification" key={Notifications.id}>
                  <div>
                    <div className="date">{new Date().toLocaleString()}</div>
                    <div className="title">{Notifications.title}</div>
                    <div className="message">{Notifications.message}</div>
                  </div>
                  <div className="icon">
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
