const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a9176967613739.5b3f984f5e0e9.jpg"
        alt="logo"
      />
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
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
