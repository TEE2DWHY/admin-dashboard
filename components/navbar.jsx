// styling
import { Toggle } from "@/icons/icons";
import styles from "../styles/navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLeft}>
        <h4>Toggle</h4>
        <input type="text" placeholder="Search" />
      </div>
      <div className={styles.navRight}>Right</div>
    </div>
  );
};

export default Navbar;
