"use client";

import { useEffect, useState } from "react";
// styling
import "../styles/dashboard.css";
// data
import { salesData } from "@/data/data";
import Barchart from "@/libs/BarChart";
import Modal from "./modal/modal";

const Sales = () => {
  const [UserData, setUserData] = useState({
    labels: salesData.map((data) => data.year),
    datasets: [
      {
        label: "Sales/ Revenue Data",
        data: salesData.map((data) => data.amountSold),
        backgroundColor: ["#AED2FF"],
        borderColor: "#000",
        borderWidth: 1,
        hoverBackgroundColor: "#B0D9B1",
      },
    ],
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const salesDropdown = document.querySelector(".sales-dropdown");
    const toggleModal = () => {
      setShowModal(!showModal);
    };
    salesDropdown.addEventListener("click", toggleModal);
    return () => {
      salesDropdown.removeEventListener("click", toggleModal);
    };
  }, [showModal]);

  useEffect(() => {
    const salesDropdown = document.querySelector(".sale-modal-container");
    const toggleModal = () => {
      setShowModal(!showModal);
    };
    salesDropdown.addEventListener("mouseleave", toggleModal);

    return () => {
      salesDropdown.removeEventListener("mouseleave", toggleModal);
    };
  }, [showModal]);

  return (
    <>
      <div className="sales">
        <div className="sales-header">
          <div className="sales-revenue">Sales/ Revenue</div>
          <div className="sale-modal-container">
            <span className="sales-dropdown">...</span>
            <div>{showModal && <Modal />}</div>
          </div>
        </div>
        <div className="bar-chart">
          <Barchart chartData={UserData} />
        </div>
      </div>
    </>
  );
};

export default Sales;
