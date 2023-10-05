// styling
import "../styles/dashboard.css";
const Schedule = () => {
  return (
    <>
      <div className="schedules">
        <div className="schedule-container calendar">Calendar</div>
        <div className="schedule-container weekly-sales">
          <div className="header">
            <span>Weekly</span>
            <div>...</div>
          </div>
          {/* <div className="pie-chart">PieChart Goes Here</div> */}
          <div className="sale-details">
            <div className="sales-amount">
              <h4>Sales</h4>
              <ul>
                <li>
                  <div className="square1"></div>Direct
                </li>
                <li>
                  <div className="square2"></div>Affiliate
                </li>
                <li>
                  <div className="square3"></div>Email
                </li>
                <li>
                  <div className="square4"></div>Other
                </li>
              </ul>
            </div>
            <div className="revenue">
              <h4>Revenue</h4>
              <ul>
                <li>$1500</li>
                <li>$300</li>
                <li>$1900</li>
                <li>$180</li>
              </ul>
            </div>
            <div className="value">
              <h4>Value</h4>
              <ul>
                <li>+20%</li>
                <li>+13%</li>
                <li>+20%</li>
                <li>+2%</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="schedule-container appointments">Appointment</div>
      </div>
    </>
  );
};

export default Schedule;
