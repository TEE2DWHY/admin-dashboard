import "../styles/dashboard.css";
// component
import Cards from "./cards";
const User = () => {
  return (
    <>
      <div className="dashboard-header">
        <h4>DashBoard</h4>
        <h4>Today</h4>
      </div>
      <div className="card">
        <Cards figure="1500" text="Net Profit" />
      </div>
    </>
  );
};

export default User;
