import { useState, useEffect, useCallback } from "react";

// style
import "../../Dashboard.css";
// components
// import { Notifications } from "../Notifications/NotificationObj";
import ArrowRightIcon from "./ArrowRightIcon";
import SearchIcon from "./SearchIcon";
import AvatarIcon from "./AvatarIcon";
import NotificationIcons from "./NotificationIcon";

// eslint-disable-next-line react/prop-types
export default function Navbar({ email }) {
  const [userName, setUserName] = useState("");
  const [notificationClick, setIsClicked] = useState(false);

  const notificationCount = ' ';
  const clickNotification = () => {
    setIsClicked(true);
  };

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

       
                      <p
onClick={clickNotification}
className={ notificationClick ? "notificationBell-hide" :  "notificationBell"}
          >
            {notificationCount}
          </p>
          <NotificationIcons />
         

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
