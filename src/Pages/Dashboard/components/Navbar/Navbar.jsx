// style
import "../../Dashboard.css";
// components
import { Notifications } from "../Notifications/NotificationObj";
import ArrowRightIcon from "./ArrowRightIcon";
import SearchIcon from "./SearchIcon";
import AvatarIcon from "./AvatarIcon";
import NotificationIcons from "./NotificationIcon";

export default function Navbar() {
  const notificationCount = Notifications.length;
  const viewNotification = () => {
    Notifications.length = 0
  };
  return (
    <div className="navbar-container">
      <div className="left-navbar">
        <div className="searchbar-wrapper">
          <SearchIcon />
          <input type="text" className="navbar-search" placeholder="Search" />
          <ArrowRightIcon />
        </div>
      </div>

      <div className="right-navbar">
        <div className="right-navbar-icons">
          <p className={notificationCount > 0 ? "notificationBell" : "notificationBell-hide"} >
            {notificationCount}
          </p>
          <NotificationIcons onClick={viewNotification } />

          <AvatarIcon />
        </div>
        <div className="user-profile">
          {/* The p elements below will take in a dynamic data */}
          <p className="user ">Gbenga Stutern</p>
          <p className="user">Loan Analyst</p>
        </div>
      </div>
    </div>
  );
}
