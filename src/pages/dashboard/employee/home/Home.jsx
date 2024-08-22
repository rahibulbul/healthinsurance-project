// // import React from "react";
// // import EmployeeSidebar from "../../../../components/dashboard/employee/sidebar/Sidebar";
// // import EmployeeHeader from "../../../../components/dashboard/employee/header/Header";
// // import ChartBox from "../../../../components/dashboard/employee/chartBox/ChartBox";
// // import "./style.css";
// // import { chartNetIncome } from "../../../../utils/dummyChart/data";

// // const Home = () => {
// //   return (
// //     <div className="emp-base debug-screen">
// //       <div className="emp-base-sidebar">
// //         <EmployeeSidebar />
// //       </div>
// //       <div className="emp-container">
// //         <div className="emp-base-header">
// //           <EmployeeHeader />
// //         </div>
// //         <div className="emp-base-main emp-home">
// //           <div className="emp-charts">
// //             <div className="emp-chart chart-1">
// //               <ChartBox />
// //             </div>
// //             <div className="emp-chart chart-2"></div>
// //             <div className="emp-chart chart-3"></div>
// //             <div className="emp-chart chart-4"></div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// import React from "react";
// import EmployeeSidebar from "../../../../components/dashboard/employee/sidebar/Sidebar";
// import EmployeeHeader from "../../../../components/dashboard/employee/header/Header";
// import ChartBox from "../../../../components/dashboard/employee/chartBox/ChartBox";
// import "./style.css";
// import { chartNetIncome } from "../../../../utils/dummyChart/data";

// const Home = () => {
//   return (
//     <div className="emp-base debug-screen">
//       <div className="emp-base-sidebar">
//         <EmployeeSidebar />
//       </div>
//       <div className="emp-container">
//         <div className="emp-base-header">
//           <EmployeeHeader />
//         </div>
//         <div className="emp-base-main emp-home">
//           <div className="emp-charts">
//             <div className="emp-chart chart-1">
//               <ChartBox
//                 icon={chartNetIncome.icon}
//                 title={chartNetIncome.title}
//                 dataKey={chartNetIncome.dataKey}
//                 color={chartNetIncome.color}
//                 viewAll={chartNetIncome.viewAll}
//                 timeline="Weekly" // Default timeline
//                 dummyData={chartNetIncome.timeline.weekly} // Default data
//                 total={chartNetIncome.timeline.weekly.reduce(
//                   (sum, item) => sum + item.income,
//                   0
//                 )} // Calculate total for weekly
//                 percentage={
//                   ((chartNetIncome.timeline.weekly.reduce(
//                     (sum, item) => sum + item.income,
//                     0
//                   ) -
//                     chartNetIncome.timeline.weekly[0].income) /
//                     chartNetIncome.timeline.weekly[0].income) *
//                   100
//                 } // Example percentage calculation
//               />
//             </div>
//             <div className="emp-chart chart-2"></div>
//             <div className="emp-chart chart-3"></div>
//             <div className="emp-chart chart-4"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import EmployeeSidebar from "../../../../components/dashboard/employee/sidebar/Sidebar";
import EmployeeHeader from "../../../../components/dashboard/employee/header/Header";
import ChartBox from "../../../../components/dashboard/employee/chartBox/ChartBox";
import AreaChart from "../../../../components/dashboard/employee/areaChart/AreaChart";
import "./style.css";
import {
  chartNetIncome,
  chartNetUser,
  chartNetInsurance,
  chartNetExpense,
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
              <AreaChart />
            </div>
            <div className="new-customer-rate"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
