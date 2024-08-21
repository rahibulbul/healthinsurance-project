import React, { useState } from "react";
import EmployeeSidebar from "../../../../components/dashboard/employee/sidebar/Sidebar";

import "./style.css";

const Home = () => {
  return (
    <div className="emp-base">
      <div className="emp-base-sidebar">
        <EmployeeSidebar />
      </div>
      <div className="emp-container">
        <p className="right">right</p>
        <p className="left">left</p>
      </div>
    </div>
  );
};

export default Home;
