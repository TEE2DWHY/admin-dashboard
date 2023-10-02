import styles from "../styles/sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h3>Logo</h3>
      <div className={styles.sidebarContainer}>
        <ul className={styles.myList}>
          <li>Pages</li>
          <li>Dashboards</li>
          <li>Defaults</li>
          <li>Analytics</li>
          <li>Saas</li>
          <li>Social</li>
          <li>Crypto</li>
        </ul>
      </div>
      <div className={styles.sidebarContainer}>
        <ul className={styles.myList}>
          <li>Tools & Components</li>
          <li>UI Elements</li>
          <li>Icons</li>
          <li>Forms</li>
          <li>Tables</li>
        </ul>
      </div>
      <div className={styles.sidebarContainer}>
        <ul className={styles.myList}>
          <li>Plugins and Addons</li>
          <li>Form Plugins</li>
          <li>Advanced Tables</li>
          <li>Charts</li>
          <li>Notifications</li>
          <li>Maps</li>
          <li>Calendar</li>
          <li>Multi Level</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
