import React from "react";
import EmployeeSidebar from "../../../../components/dashboard/employee/sidebar/Sidebar";
import EmployeeHeader from "../../../../components/dashboard/employee/header/Header";
import "./style.css";

const Home = () => {
  return (
    <div className="emp-base debug-screen">
      <div className="emp-base-sidebar">
        <EmployeeSidebar />
      </div>
      <div className="emp-container">
        <div className="emp-base-header">
          <EmployeeHeader />
        </div>
        <div className="emp-base-main emp-home"></div>
      </div>
    </div>
  );
};

export default Home;
