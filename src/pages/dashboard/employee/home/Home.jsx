import React from "react";
import EmployeeSidebar from "../../../../components/dashboard/employee/sidebar/Sidebar";
import EmployeeHeader from "../../../../components/dashboard/employee/header/Header";
import ChartBox from "../../../../components/dashboard/employee/chartBox/ChartBox";
import AreaChartBox from "../../../../components/dashboard/employee/areaChartBox/AreaChartBox";
import PieChartBox from "../../../../components/dashboard/employee/pieChartBox/PieChartBox";
import "./style.css";
import {
  chartNetIncome,
  chartNetUser,
  chartNetInsurance,
  chartNetExpense,
  AreaChartRepeatCustomer,
} from "../../../../utils/dummyChart/data";

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
        <div className="emp-base-main emp-home">
          <div className="emp-cards">
            <div className="emp-chart chart-1">
              <ChartBox {...chartNetIncome} unit="£" />
            </div>
            <div className="emp-chart chart-2">
              <ChartBox {...chartNetUser} />
            </div>
            <div className="emp-chart chart-3">
              <ChartBox {...chartNetInsurance} />
            </div>
            <div className="emp-chart chart-4">
              <ChartBox {...chartNetExpense} unit="£" />
            </div>
          </div>
          <div className="customer-rate">
            <div className="repeat-customer-rate">
              <AreaChartBox {...AreaChartRepeatCustomer} />
            </div>
            <div className="insurance-category">
              <PieChartBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
