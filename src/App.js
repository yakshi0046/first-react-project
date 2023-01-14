import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer";

//    Example of imports which will work
// import * as obj from './components/Header.js
// import * as obj from './components/Header.jsx
// import * as obj from './components/Header
// obj.Title will work for you

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

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
// createRoot tells react about root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
