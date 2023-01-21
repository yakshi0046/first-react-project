import { logo } from "../constant";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={logo} alt="logo" />
    </a>
  );
};
export const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
