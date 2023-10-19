"use client";
import { useEffect, useState } from "react";
// styling
import "../styles/dashboard.css";
// data
import {
  revenueRoi,
  revenues,
  salesMethods,
  weeklyRevenue,
  appointments,
} from "@/data/data";
import PieChart from "../libs/PieChart";
import Modal from "./modal/modal";
import CalendarComponent from "../libs/Calendar";
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
        <div className="schedule-container calendar">
          <div className="calendar-header">
            <div>Calendar</div>
            <div>...</div>
          </div>
          <CalendarComponent />
        </div>
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
                {salesMethods.map((sale, index) => (
                  <div key={index}>
                    <li>
                      <div className={sale.square}></div>
                      {sale.method}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="revenue">
              <h4>Revenue</h4>
              <ul>
                {revenues.map((revenue, index) => (
                  <div key={index}>
                    <li>{revenue.data}</li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="value">
              <h4>Value</h4>
              <ul>
                {revenueRoi.map((revenue, index) => (
                  <div key={index}>
                    <li>{revenue.roi}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="schedule-container appointments">
          <div className="header">
            <div>Appointment</div>
            <div>...</div>
          </div>
          {appointments.map((data, index) => (
            <div className="details" key={index}>
              <>
                <div className="assignment">
                  <span className="assignment-header"> {data.assignment}</span>
                  <p>{data.paragraph}</p>
                </div>
                <div className="time-span">{data.timeSpan}</div>
              </>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Schedule;
