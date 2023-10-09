"use client";
import { useEffect, useState } from "react";
// styling
import "../styles/dashboard.css";
// data
import { weeklyRevenue } from "@/data/data";
import PieChart from "./piechart";
import Modal from "./modal/modal";
const Schedule = () => {
  const [UserData, setUserData] = useState({
    labels: ["Direct", "Affiliate", "Email", "Others"],
    datasets: [
      {
        label: "Sales",
        data: weeklyRevenue.map((data) => data.sale),
        backgroundColor: weeklyRevenue.map((data) => data.backgroundColor),
        hoverOffset: 4,
      },
    ],
  });

  const [weeklySalesModal, setWeeklySalesModal] = useState(false);

  useEffect(() => {
    const salesDropdown = document.querySelector(".weekly-sales-dropdown");
    salesDropdown.addEventListener("click", () => {
      setWeeklySalesModal(!weeklySalesModal);
    });
    return () => {
      salesDropdown.removeEventListener("click", () => {
        setWeeklySalesModal(!weeklySalesModal);
      });
    };
  }, [weeklySalesModal]);

  useEffect(() => {
    const salesDropdownContainer = document.querySelector(
      ".weekly-sales-modal"
    );
    salesDropdownContainer.addEventListener("mouseleave", () => {
      setWeeklySalesModal(!weeklySalesModal);
    });
    return () => {
      salesDropdownContainer.removeEventListener("mouseleave", () => {
        setWeeklySalesModal(!weeklySalesModal);
      });
    };
  }, [weeklySalesModal]);

  return (
    <>
      <div className="schedules">
        <div className="schedule-container calendar">Calendar</div>
        <div className="schedule-container weekly-sales">
          <div className="header">
            <span>Weekly</span>
            <div className="weekly-sales-modal">
              <span className="weekly-sales-dropdown">....</span>
              <div>{weeklySalesModal && <Modal />}</div>
            </div>
          </div>
          <div className="pie-chart">
            <PieChart chartData={UserData} />
          </div>
          <div className="sale-details">
            <div className="sales-amount">
              <h4>Sales</h4>
              <ul>
                <li>
                  <div className="square1"></div>Direct
                </li>
                <li>
                  <div className="square2"></div>Affiliate
                </li>
                <li>
                  <div className="square3"></div>Email
                </li>
                <li>
                  <div className="square4"></div>Other
                </li>
              </ul>
            </div>
            <div className="revenue">
              <h4>Revenue</h4>
              <ul>
                <li>$1500</li>
                <li>$300</li>
                <li>$1900</li>
                <li>$180</li>
              </ul>
            </div>
            <div className="value">
              <h4>Value</h4>
              <ul>
                <li>+20%</li>
                <li>+13%</li>
                <li>+20%</li>
                <li>+2%</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="schedule-container appointments">Appointment</div>
      </div>
    </>
  );
};

export default Schedule;
