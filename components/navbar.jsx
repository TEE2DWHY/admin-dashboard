// styling
import { Toggle } from "@/icons/icons";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <Toggle />
        <input type="text" placeholder="Search" />
      </div>
      <div className="nav-right">Right</div>
    </div>
  );
};

export default Navbar;
