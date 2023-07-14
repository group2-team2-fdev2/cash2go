import { useState, useEffect, useCallback } from "react";

// style
import "../../Dashboard.css";
// components
import { Notifications } from "../Notifications/NotificationObj";
import SearchIcon from "./SearchIcon";
import AvatarIcon from "./AvatarIcon";
import NotificationIcons from "./NotificationIcon";
import CancelIcon from "./CancelIcon";

// eslint-disable-next-line react/prop-types
export default function Navbar({
  // eslint-disable-next-line react/prop-types
  email,
  // eslint-disable-next-line react/prop-types
  handleSearchInputChange,
  // eslint-disable-next-line react/prop-types
  handleClearSearch, searchQuery
  // eslint-disable-next-line react/prop-types
  
}) {
  const [userName, setUserName] = useState("");

  const notificationCount = Notifications.length;
  const viewNotification = () => {
    Notifications.length = 0;
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

  console.log("searchQuery:", searchQuery);

  return (
    <div className="navbar-container">
      <div className="left-navbar">
        <div className="searchbar-wrapper">
          <SearchIcon />
          <input
            type="text"
            className= "navbar-search"
            placeholder= "Search by name"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <CancelIcon onClick={handleClearSearch} />
        </div>
      </div>

      <div className="right-navbar">
        <div className="right-navbar-icons">
          <p
            className={
              notificationCount > 0
                ? "notificationBell"
                : "notificationBell-hide"
            }
          >
            {notificationCount}
          </p>
          <NotificationIcons onClick={viewNotification} />

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
