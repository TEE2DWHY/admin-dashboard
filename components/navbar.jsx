"use client";
import { useEffect, useState } from "react";
// styling
import { Alarm, Chat, Search, Toggle } from "@/icons/icons";
import "../styles/navbar.css";
import CountryModal from "./modal/countryModal";
const Navbar = ({ toggleSidebar }) => {
  const [chatNumber, setChatNumber] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setChatNumber(chatNumber + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [chatNumber]);

  const [showCountryModal, setShowCountryModal] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="toggle-sidebar" onClick={toggleSidebar}>
          <Toggle />
        </div>
        <input
          className="search-input"
          type="text"
          placeholder="Search Projects..."
        />
        <div>
          <Search />
        </div>
      </div>
      <div className="nav-right">
        <div>
          <Chat />
          <span className="indicator">{chatNumber >= 10 ? 0 : chatNumber}</span>
        </div>
        <Alarm />
        <img
          className="country"
          src={"/images/uk.png"}
          alt="uk-symbol"
          onMouseOver={() => setShowCountryModal(!showCountryModal)}
        />
        {showCountryModal && (
          <CountryModal
            hideCountryModal={() => setShowCountryModal(!showCountryModal)}
          />
        )}
        <img className="avatar" src={"/images/avatar-5.jpeg"} alt="avatar" />
        <p>Ashley Briggs</p>
      </div>
    </div>
  );
};

export default Navbar;
