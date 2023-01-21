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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
