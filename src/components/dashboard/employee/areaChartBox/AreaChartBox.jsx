// import React from "react";
// import "./areachartbox.css";
// import {
//   Area,
//   AreaChart,
//   CartesianGrid,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
//   defs,
//   linearGradient,
//   stop,
// } from "recharts";

// const data = [
//   {
//     name: "January",
//     uv: 4000,
//   },
//   {
//     name: "February",
//     uv: 3000,
//   },
//   {
//     name: "March",
//     uv: 2000,
//   },
//   {
//     name: "April",
//     uv: 2780,
//   },
//   {
//     name: "May",
//     uv: 1890,
//   },
//   {
//     name: "June",
//     uv: 2390,
//   },
//   {
//     name: "July",
//     uv: 3490,
//   },
//   {
//     name: "August",
//     uv: 3490,
//   },
// ];

// const AreaChartBox = () => {
//   return (
//     <div className="areaChart">
//       <div className="areaChart-areaInfo">
//         <div className="title">
//           <i className="ph ph-users"></i>
//           <span>Repeat Customer Rate</span>
//         </div>
// <div className="areaMenu">
//   <div className="areaMenuIcon">
//     <i className="ph ph-dots-three-vertical"></i>
//   </div>
//   <div className="areaMenuDetails">
//     <span className="count">600</span>
//     <span className="percentage">2.34%</span>
//   </div>
// </div>
//       </div>
//       <div className="areaChart-chart">
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart
//             width={500}
//             height={400}
//             data={data}
//             margin={{
//               top: 10,
//               right: 30,
//               left: 0,
//               bottom: 0,
//             }}
//           >
//             <defs>
//               <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor="#8884d8" stopOpacity={1} />
//                 <stop offset="100%" stopColor="#ffffff" stopOpacity={1} />
//               </linearGradient>
//             </defs>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Area
//               type="monotone"
//               dataKey="uv"
//               stroke="#8884d8"
//               fill="url(#colorUv)"
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default AreaChartBox;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./areachartbox.css";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AreaChartBox = (props) => {
  const [selectedTimeline, setSelectedTimeline] = useState("weekly");
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTimelineChange = (timeline) => {
    setSelectedTimeline(timeline);
    setIsMenuVisible(false);
  };

  const currentData = props.timeline[selectedTimeline] || [];
  const totalUsers =
    currentData.length > 0
      ? currentData.reduce((sum, item) => sum + item[props.dataKey], 0)
      : 0;
  const percentageChange =
    currentData.length > 1
      ? ((totalUsers - currentData[0][props.dataKey]) /
          currentData[0][props.dataKey]) *
        100
      : 0;

  return (
    <div className="areaChart">
      <div className="areaChart-areaInfo">
        <div className="title">
          <i className={`ph ${props.icon}`}></i>
          <span>{props.title}</span>
        </div>
        <div className="areaMenu" ref={menuRef}>
          <div className="areaMenu">
            <div className="areaMenuIcon">
              <i
                className="ph ph-dots-three-vertical"
                onClick={handleMenuToggle}
              ></i>
              <div className={`areaMenu-panel ${isMenuVisible ? "show" : ""}`}>
                <span onClick={() => handleTimelineChange("weekly")}>
                  Weekly
                </span>
                <span onClick={() => handleTimelineChange("monthly")}>
                  Monthly
                </span>
                <span onClick={() => handleTimelineChange("yearly")}>
                  Yearly
                </span>
              </div>
            </div>
            <div className="areaMenuDetails">
              <span className="count">{totalUsers}</span>
              <span
                className="percentage"
                style={{
                  color: percentageChange < 0 ? "white" : "white",
                  backgroundColor: percentageChange < 0 ? "#d93d3d" : "#4bb592",
                  padding: "5px 10px",
                  fontSize: "13px",
                  borderRadius: "10px",
                }}
              >
                {percentageChange.toFixed(2) || 0}%
              </span>
              <span className="timeline" style={{ color: props.color }}>
                {selectedTimeline.charAt(0).toUpperCase() +
                  selectedTimeline.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="areaChart-chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={currentData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8884d8" stopOpacity={1} />
                <stop offset="100%" stopColor="#ffffff" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey={props.dataKey}
              stroke="#8884d8"
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChartBox;
