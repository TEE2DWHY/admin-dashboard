// styling
import { Search, Toggle } from "@/icons/icons";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <Toggle />
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
        <img className="avatar" src={"/images/avatar-5.jpeg"} alt="" />
        <p>Ashley Briggs</p>
      </div>
    </div>
  );
};

export default Navbar;
