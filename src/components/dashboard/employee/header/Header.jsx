import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import dummyNotifications from "../../../../utils/dummyData/dummyNotifications";
import userImage from "../../../../assets/img/user.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleDashboardHome = () => {
    navigate("/employeedashboard");
  };

  const pathMap = {
    "/employeedashboard": "Dashboard",
    "/employeedashboard/insurance": "Insurance",
  };

  const getPageName = (pathname) => {
    return pathMap[pathname] || "404 Page not found";
  };

  const createBreadcrumb = (pathname) => {
    const pathSegments = pathname.split("/").filter(Boolean);
    return pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
      return (
        <span key={path}>
          <Link to={path} className="breadcrumb-link">
            {getPageName(path)}
          </Link>
          {index < pathSegments.length - 1 && " ❯ "}
        </span>
      );
    });
  };
  const currentPath = location.pathname;
  const breadcrumb = createBreadcrumb(currentPath);

  // Notification Panel Hide and Show
  const [isNotificationDropdownVisible, setIsNotificationDropdownVisible] =
    useState(false);

  // Message Panel Hide and Show
  const [isUserDropdownVisible, setIsMessageDropdownVisible] = useState(false);

  const handleNotificationIconClick = (event) => {
    event.stopPropagation();
    setIsNotificationDropdownVisible((prev) => !prev);
    if (isUserDropdownVisible) {
      setIsMessageDropdownVisible(false);
    }
  };

  const handleUserIconClick = (event) => {
    event.stopPropagation();
    setIsMessageDropdownVisible((prev) => !prev);
    if (isNotificationDropdownVisible) {
      setIsNotificationDropdownVisible(false);
    }
  };

  const handleOutsideClick = useCallback(() => {
    if (isNotificationDropdownVisible) setIsNotificationDropdownVisible(false);
    if (isUserDropdownVisible) setIsMessageDropdownVisible(false);
  }, [isNotificationDropdownVisible, isUserDropdownVisible]);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  // Dummy Notification
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    setNotifications(dummyNotifications);
    setUnreadCount(dummyNotifications.filter((n) => !n.isRead).length);
  }, []);

  // Copy username to clipboard
  const copyUsernameToClipboard = () => {
    const username = "@rahibulbul";
    navigator.clipboard
      .writeText(username)
      .then(() => {
        console.log("Username copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="emp-header">
      <div className="emp-header-links">
        <i className="ph ph-house" onClick={handleDashboardHome}></i>
        <span> ❯ {breadcrumb}</span>
      </div>
      <div className="emp-header-icon">
        <div className="emp-notify-icons">
          <i
            className="ph ph-bell emp-notify-icon"
            onClick={handleNotificationIconClick}
          ></i>
          {unreadCount > 0 && (
            <span className="emp-dash-notification-count">{unreadCount}</span>
          )}
          <div
            className={`emp-dash-notification-panel ${
              isNotificationDropdownVisible ? "show" : ""
            }`}
          >
            <div className="emp-dash-notification-panel-top">
              <div className="emp-dash-notification-panel-title">
                Notification
              </div>
              <button
                type="button"
                className="emp-dash-notification-panel-mark-read"
              >
                Mark all as read
              </button>
            </div>
            <div className="notification-body">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`notification-item ${
                    notification.isRead ? "read" : "unread"
                  }`}
                >
                  <div className="notification-from">
                    <span>{notification.title}</span>
                  </div>
                  <div className="notification-message">
                    {notification.message}
                  </div>
                  <div className="notification-timestamp">
                    <div className="notification-date">{notification.date}</div>
                    <div className="notification-time">{notification.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="emp-notify-icons">
          <i
            className="ph ph-user emp-notify-icon"
            onClick={handleUserIconClick}
          ></i>
          <div
            className={`emp-dash-user-panel
             ${isUserDropdownVisible ? "show" : ""}`}
          >
            <div className="emp-dash-user-details">
              <div className="user-img">
                <img src={userImage} alt="userimgae" />
              </div>
              <div className="user-name-tag">
                <span
                  className="emp-full-name"
                  onClick={copyUsernameToClipboard}
                >
                  Rahi Bulbul
                </span>
                <span className="emp-user-tag">Manager</span>
                <span
                  className="emp-user-name"
                  id="emp-username"
                  onClick={copyUsernameToClipboard}
                >
                  @rahibulbul
                  <i
                    className="ph ph-copy"
                    onClick={copyUsernameToClipboard}
                  ></i>
                </span>
              </div>
            </div>
            <div className="emp-dash-user-settings">
              <ul className="user-settings-lists">
                <li className="user-settings-list">
                  <Link to="#" className="user-settings-links">
                    <i className="ph ph-user-gear"></i>
                    Edit Profile
                  </Link>
                </li>
                <li className="user-settings-list">
                  <Link to="#" className="user-settings-links">
                    <i className="ph ph-lock"></i>
                    Privacy and security
                  </Link>
                </li>
                <li className="user-settings-list">
                  <Link to="#" className="user-settings-links">
                    <i className="ph ph-headset"></i>
                    Help and support
                  </Link>
                </li>
                <li className="user-settings-list">
                  <Link to="/" className="user-settings-links">
                    <i className="icon ph-bold ph-sign-out"></i>
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
