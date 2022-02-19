import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        <img
          src="https://www.appleute.de/wp-content/uploads/2021/08/Frame-46.svg"
          alt="logo"
          width="180px"
        />
        Quiz App
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
