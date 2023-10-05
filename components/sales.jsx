"use client";
import { useState } from "react";
// styling
import "../styles/dashboard.css";
// data
import { userData } from "@/data/data";
import Barchart from "./barchart";

const Sales = () => {
  const [UserData, setUserData] = useState({
    labels: userData.map((data) => data.year),
    datasets: [
      {
        label: "Sales Increase",
        data: userData.map((data) => data.userGain),
        backgroundColor: ["#AED2FF"],
        borderColor: "#000",
        borderWidth: 1,
        hoverBackgroundColor: "#B0D9B1",
      },
    ],
  });

  return (
    <>
      <div className="sales">
        <div className="sales-header">
          <div className="sales-revenue">Sales/ Revenue</div>
          <div className="sales-dropdown"> ... </div>
        </div>
        <div className="bar-chart">
          <Barchart chartData={UserData} />
        </div>
      </div>
    </>
  );
};

export default Sales;
