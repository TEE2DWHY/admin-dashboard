// styling
import "../../styles/modal.css";
import {
  Analytics,
  Help,
  Profile,
  Settings,
  SignOut,
} from "../../icons/profileIcons";
const ProfileModal = ({ hideProfileModal }) => {
  const logout = () => {
    sessionStorage.clear("isLoggedIn");
    window.location = "/";
  };
  return (
    <>
      <div className="profile-modal-container" onMouseLeave={hideProfileModal}>
        <ul className="profile-modal">
          <li>
            <Profile />
            Profile
          </li>
          <li>
            <Analytics />
            Analytics
          </li>
          <li>
            <Settings />
            Settings
          </li>
          <li>
            <Help />
            Help
          </li>
          <a onClick={() => logout()}>
            <li>
              <SignOut />
              Sign Out
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default ProfileModal;
