import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="emp-sidebar">
      <div className="emp-sidebar-content">
        <ul>
          <div className="emp-logo">
            <Link to="#" className="emp-logo-links">
              <i class="ph ph-squares-four"></i>
              square
            </Link>
          </div>
          <li>
            <Link
              to="/employeedashboard"
              className={`emp-links ${
                location.pathname === "/employeedashboard"
                  ? "emp-sidebar-active"
                  : ""
              }`}
            >
              <i class="icon ph-bold ph-house-simple"></i>
              Overview
            </Link>
          </li>
          <li>
            <Link
              to="/employeedashboard/insurance"
              className={`emp-links ${
                location.pathname === "/employeedashboard/insurance"
                  ? "emp-sidebar-active"
                  : ""
              }`}
            >
              <i class="ph ph-umbrella-simple"></i>
              Insurance
            </Link>
          </li>
          <li>
            <Link to="#" className="emp-links">
              <i class="ph ph-users"></i>
              Users
            </Link>
          </li>
          <li>
            <Link to="#" className="emp-links">
              <i class="ph ph-stethoscope"></i>
              Doctors
            </Link>
          </li>
          <li>
            <Link to="#" className="emp-links">
              <i class="ph ph-clipboard"></i>
              Appointments
            </Link>
          </li>
          <li>
            <Link to="#" className="emp-links">
              <i class="ph ph-hospital"></i>
              Medical Center
            </Link>
          </li>
          <li>
            <Link to="#" className="emp-links">
              <i class="ph ph-pill"></i>
              Pharmacy
            </Link>
          </li>
          <li>
            <Link to="#" className="emp-links">
              <i class="ph ph-user"></i>
              Employees
            </Link>
          </li>
          <li>
            <Link to="#" className="emp-links">
              <i class="ph ph-coins"></i>
              Investor
            </Link>
          </li>
          <li>
            <Link to="#" className="emp-links">
              <i class="ph ph-calendar"></i>
              Calender
            </Link>
          </li>
          <li>
            <Link to="#" className="emp-links">
              <i class="ph ph-credit-card"></i>
              Bills and payments
            </Link>
          </li>
          <li>
            <Link to="#" className="emp-links">
              <i class="ph ph-headset"></i>
              Support
            </Link>
          </li>
          <li>
            <Link to="#" className="emp-links">
              <i class="ph ph-clipboard-text"></i>
              Reports
            </Link>
          </li>
          <li>
            <Link to="#" className="emp-links">
              <i class="ph ph-envelope-simple"></i>
              Mail
            </Link>
          </li>
          <li>
            <Link to="#" className="emp-links">
              <i class="ph ph-chats"></i>
              Messages
            </Link>
          </li>
          <li>
            <Link to="#" className="emp-links">
              <i class="ph ph-lock"></i>
              Privacy and security
            </Link>
          </li>
        </ul>
      </div>
      <div className="emp-sidebar-bottom">
        <ul>
          <li>
            <Link to="#" className="emp-links">
              <i class="ph ph-user-gear"></i>
              Profile
            </Link>
          </li>
          <li>
            <Link to="#" className="emp-links">
              <i class="icon ph-bold ph-sign-out"></i>
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
