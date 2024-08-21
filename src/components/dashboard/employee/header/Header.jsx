import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";

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
    return pathMap[pathname] || "wrong page";
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
          {index < pathSegments.length - 1 && " / "}
        </span>
      );
    });
  };
  const currentPath = location.pathname;
  const breadcrumb = createBreadcrumb(currentPath);

  return (
    <div className="emp-header">
      <div className="emp-header-links">
        <i class="ph ph-house" onClick={handleDashboardHome}></i>
        <span>/{breadcrumb}</span>
      </div>
      <div className="emp-header-notifications">
        <i class="ph ph-bell"></i>
      </div>
    </div>
  );
};

export default Header;
