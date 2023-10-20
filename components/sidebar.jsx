// styling
import "../styles/sidebar.css";
import "../styles/mobile.css";
const Sidebar = ({ closeSideBar }) => {
  return (
    <div className="sidebar" data-aos="fade-right" data-aos-duration="800">
      <span className="close-sidebar" onClick={closeSideBar}>
        &#x2718;
      </span>
      <div className="sidebar-container pages">
        <ul>
          <li className="logo"> AppsStack.</li>
          <li>Pages</li>
          <li>
            Dashboards <span className="sidebar-ads">5</span>
          </li>
          <li>Defaults</li>
          <li>Analytics</li>
          <li>Saas</li>
          <li>Social</li>
          <li>Crypto</li>
        </ul>
      </div>
      <div className="sidebar-container tools-components">
        <ul>
          <li>Tools & Components</li>
          <li>UI Elements</li>
          <li>
            Icons <span className="sidebar-ads">1500+</span>
          </li>
          <li>Forms</li>
          <li>Tables</li>
        </ul>
      </div>
      <div className="sidebar-container plugins-addons">
        <ul>
          <li>Plugins and Addons</li>
          <li>Form Plugins</li>
          <li>Advanced Tables</li>
          <li>
            Charts <span className="sidebar-ads">New</span>
          </li>
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
