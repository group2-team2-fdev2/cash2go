// style
import "../../Dashboard.css"
// component
import Cash2goLogo from "./Cash2goLogo";
import DashboardIcon from "./DashboardIcon";
import ApplicationsIcon from "./ApplicationsIcon";
import AnalyticsIcon from "./AnalyticsIcon";
import NotificationIcon from "./NotificationIcon";
// import RecoveryIcon from "./RecoveryIcon";
// import MessageIcon from "./MessageIcon";
import ResourcesIcon from "./ResourcesIcon";
import SettingsIcon from "./SettingsIcon";
// import HelpcenterIcon from "./HelpcenterIcon";
import LogoutIcon from "./LogoutIcon";


export default function SideBar() {
  return (
    <div className="sidebar-container">
      <div>
        <Cash2goLogo />
        <DashboardIcon />
        <ApplicationsIcon />
        <AnalyticsIcon />
        <NotificationIcon />
        {/* <RecoveryIcon /> */}
        {/* <MessageIcon /> */}
      </div>    
      <div className="sidebar-bottom-wrapper">
        <ResourcesIcon />
        <SettingsIcon />
        {/* <HelpcenterIcon /> */}
      </div>
      <div>
        <LogoutIcon />
      </div>
    </div>
  );
}
