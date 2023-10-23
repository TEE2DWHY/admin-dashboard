"use client";
import { useEffect, useState } from "react";
// styling
import { Alarm, ArrowDown, Chat, Search, Toggle } from "@/icons/icons";
import "../styles/navbar.css";
import CountryModal from "./modal/countryModal";
import ProfileModal from "./modal/profileModal";
const Navbar = ({ toggleSidebar }) => {
  // State Variables
  const [name, setName] = useState("");
  const [chatNumber, setChatNumber] = useState(0);
  const [showCountryModal, setShowCountryNodal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setChatNumber(chatNumber + 1);
    }, 5000);

    const user = sessionStorage.getItem("name");
    setName(user);

    return () => {
      clearInterval(interval);
    };
  }, [chatNumber]);

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
          onClick={() => setShowCountryNodal(!showCountryModal)}
        />
        {showCountryModal && (
          <CountryModal
            hideCountryModal={() => setShowCountryNodal(!showCountryModal)}
          />
        )}
        <img
          className="avatar user-img"
          src={"/images/avatar-5.jpeg"}
          alt="avatar"
        />
        <p className="username">
          {name}
          <ArrowDown
            showProfileModal={() => setShowProfileModal(!showProfileModal)}
          />
        </p>
        {showProfileModal && (
          <ProfileModal
            hideProfileModal={() => setShowProfileModal(!setShowProfileModal)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
