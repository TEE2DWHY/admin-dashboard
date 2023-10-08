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
      <div className="nav-right">Right</div>
    </div>
  );
};

export default Navbar;
