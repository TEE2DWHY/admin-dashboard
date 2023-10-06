// These icons are generated from font awesome(https://fontawesome.com)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

export const Toggle = () => {
  return <FontAwesomeIcon icon={faBars} />;
};

export const Search = () => {
  return <FontAwesomeIcon icon={faSearch} />;
};

export const DollarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="align-middle text-success"
      style={{
        backgroundColor: "#4E4FEB",
        padding: "10px",
        borderRadius: "50%",
        color: "##3f80ea",
      }}
    >
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );
};
