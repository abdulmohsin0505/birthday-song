import logo from "../../assets/images/Cadbury Logo.png";
import logo2 from "../../assets/images/logo2.png";
import hamburger from "../../assets/images/Hamburger.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} className="logo_img" alt="logo" />
      </div>
      <div className="logo2">
        <img src={logo2} className="logo2_img" alt="logo2" />
      </div>
      <button className="hamburger_btn">
        <img src={hamburger} className="hamburger_icon" alt="hamburger" />
      </button>
    </div>
  );
};

export default Header;
