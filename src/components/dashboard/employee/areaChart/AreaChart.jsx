import React from "react";
import "./areachart.css";
import {
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AreaChart = () => {
  return (
    <div className="areaChart">
      <div className="areaChart-areaInfo">
        <div className="title">
          <i className="ph ph-users"></i>
          <span>Repeat Customer Rate</span>
        </div>
        <div className="areaMenu">
          <div className="areaMenuIcon">
            <i className="ph ph-dots-three-vertical"></i>
          </div>
          <div className="areaMenuDetails">
            <span className="count">600</span>
            <span className="percentage">2.34%</span>
          </div>
        </div>
      </div>
      <div className="areaChart-chart">
        <div className="chart"></div>
      </div>
    </div>
  );
};

export default AreaChart;
