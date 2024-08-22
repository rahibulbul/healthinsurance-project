import React, { useState, useEffect, useRef } from "react";
import "./piechartbox.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Bronze", value: 600, color: "#00C49F" },
  { name: "Silver", value: 900, color: "#0088FE" },
  { name: "Gold", value: 300, color: "#FFBB28" },
  { name: "Platinum", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
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

  return (
    <div className="piechartbox">
      <div className="piechart-boxInfo">
        <div className="title">
          <i className="ph ph-umbrella"></i>
          <span>Insurance Group</span>
        </div>
        <div className="areaMenu" ref={menuRef}>
          <div className="areaMenuIcon">
            <i
              className="ph ph-dots-three-vertical"
              onClick={handleMenuToggle}
            ></i>
            <div className={`areaMenu-panel ${isMenuVisible ? "show" : ""}`}>
              <span onClick={() => handleTimelineChange("weekly")}>Weekly</span>
              <span onClick={() => handleTimelineChange("monthly")}>
                Monthly
              </span>
              <span onClick={() => handleTimelineChange("yearly")}>Yearly</span>
            </div>
          </div>
        </div>
      </div>
      <div className="piechartbox-chartInfo">
        <ResponsiveContainer width="99%" height="100%">
          <PieChart width={800} height={400}>
            <Tooltip contentStyle={{ background: "item.color" }} />
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="piechartbox-detailsInfo">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div
                className="dot"
                style={{ backgroundColor: item.color }}
              ></div>
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
