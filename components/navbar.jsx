// styling
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <h4>Toggle</h4>
        <input type="text" placeholder="Search" />
      </div>
      <div className="nav-right">Right</div>
    </div>
  );
};

export default Navbar;
