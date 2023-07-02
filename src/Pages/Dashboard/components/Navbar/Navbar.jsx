import { useState, useEffect, useCallback } from "react";

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

// eslint-disable-next-line react/prop-types
export default function Navbar({email}) {
  const [userName, setUserName] = useState("");
  
  const fetchUserName = useCallback(async () => {
    try {
      const storedUserName = localStorage.getItem("userName");
      if (storedUserName) {
        setUserName(storedUserName);
      } else {
        const response = await fetch(
          `https://cash2go-backendd.onrender.com/api/v1/user/get-firstnameandlastname?email=${email}`
        );
        const data = await response.json();

        if (data.status === "Success") {
          const userName = data.data.name;
          setUserName(userName);
          localStorage.setItem("userName", userName);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [email]);

  useEffect(() => {
    fetchUserName();
  }, [fetchUserName]);


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
          <p className="user">{userName}</p>
          <p className="user">Loan Analyst</p>
        </div>
      </div>
    </div>
  );
}
