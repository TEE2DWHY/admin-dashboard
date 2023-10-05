// styling
import "../styles/dashboard.css";
// data
import { notifications } from "@/data/data";

const DailyFeed = () => {
  return (
    <div className="daily-feed">
      <div className="daily-feed-header">
        <div>Daily Feed</div>
        <span className="daily-feed-today">Today</span>
      </div>
      {notifications.map((notification, index) => (
        <div className="notifications" key={index}>
          <div className="notification-info">
            <img
              className="avatar"
              src={notification.img}
              alt={notification.alt}
            />
            <span className="notification-details">{notification.details}</span>
          </div>
          <div className="notification-time">
            {notification.notificationTime}
          </div>
        </div>
      ))}
      <button className="load-more">Load More</button>
    </div>
  );
};

export default DailyFeed;
