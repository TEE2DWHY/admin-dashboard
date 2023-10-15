// These icons are generated from font awesome(https://fontawesome.com)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faGear,
  faPowerOff,
  faQuestion,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const Profile = () => {
  return (
    <FontAwesomeIcon
      icon={faUser}
      style={{ marginRight: "10px", color: "#3f80ea" }}
    />
  );
};

export const Analytics = () => {
  return (
    <FontAwesomeIcon
      icon={faChartPie}
      style={{ marginRight: "10px", color: "#3f80ea" }}
    />
  );
};

export const Settings = () => {
  return (
    <FontAwesomeIcon
      icon={faGear}
      style={{ marginRight: "10px", color: "#3f80ea" }}
    />
  );
};

export const Help = () => {
  return (
    <FontAwesomeIcon
      icon={faQuestion}
      style={{ marginRight: "10px", color: "#3f80ea" }}
    />
  );
};

export const SignOut = () => {
  return (
    <FontAwesomeIcon
      icon={faPowerOff}
      style={{ marginRight: "10px", color: "#3f80ea" }}
    />
  );
};
