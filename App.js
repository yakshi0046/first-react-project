import React from "react";
import ReactDOM from "react-dom/client";
import { resturants } from "./constant";
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
const HeaderComponent = () => {
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

// config driven ui(send by backend)
const config = [];

const burgerKing = [
  {
    name: "burger king",
    image: "https://miro.medium.com/max/1200/1*pIJH1mPega8583Y3NuPaLg.jpeg",
    cusines: ["burgers", "american"],
    rating: "4.2",
  },
  {
    name: "burger king",
    image: "https://miro.medium.com/max/1200/1*pIJH1mPega8583Y3NuPaLg.jpeg",
    cusines: ["burgers", "american"],
    rating: "4.2",
  },
];
const ResturantCard = (props) => {
  console.log("gg");
  const { name, cuisines, totalRatingsString, cloudinaryImageId } = props;
  console.log(name, cuisines);
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="burger king"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{totalRatingsString}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="resturant-list">
      {resturants.map((resturant) => {
        return <ResturantCard {...resturant?.data} />;
      })}
    </div>
  );
};
const Footer = () => {
  return <div>Footer</div>;
};
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};
// createRoot tells react about root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
