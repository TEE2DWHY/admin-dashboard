// styling
import "../styles/footer.css";
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <footer>
        <ul className="left">
          <div className="left-container">
            <li>Support</li>
            <li>Help Center</li>
          </div>
          <div className="left-container">
            <li>Privacy</li>
            <li>Terms of Service</li>
          </div>
        </ul>
        <ul className="right">
          <li> &copy; CopyRight - AppStack {year}</li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
