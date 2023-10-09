// styling
import "../styles/footer.css";
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <footer>
        <ul className="left">
          <li>Support</li>
          <li>Help Center</li>
          <li>Privacy</li>
          <li>Terms of Service</li>
        </ul>
        <ul className="right">
          <li> &copy; CopyRight - AppStack {year}</li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
