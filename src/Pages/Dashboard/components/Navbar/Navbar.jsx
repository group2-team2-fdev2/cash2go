// style
import "../../Dashboard.css";
// components
import ArrowRightIcon from "./ArrowRightIcon";
import SearchIcon from "./SearchIcon";
import NotificationIcon from "./NotificationIcon";
import AvatarIcon from "./AvatarIcon";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="left-navbar">
        <div className="searchbar-wrapper">
          <SearchIcon />
          <input type="text" className="navbar-search" placeholder="Search"/>
          <ArrowRightIcon />
        </div>
      </div>

      <div className="right-navbar">
        <div className="right-navbar-icons">
          <NotificationIcon />
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
