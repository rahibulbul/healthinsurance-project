import React, { useState } from "react";
import EmployeeSidebar from "../../../../components/dashboard/employee/sidebar/Sidebar";
import EmployeeHeader from "../../../../components/dashboard/employee/header/Header";
import "./insurance.css";

const Insurance = () => {
  return (
    <div className="emp-base">
      <div className="emp-base-sidebar">
        <EmployeeSidebar />
      </div>
      <div className="emp-container">
        <div className="emp-base-header">
          <EmployeeHeader />
        </div>
        <div className="emp-base-main"></div>
      </div>
    </div>
  );
};

export default Insurance;
