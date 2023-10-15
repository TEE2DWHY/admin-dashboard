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
          <li>
            <SignOut />
            Sign Out
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileModal;
