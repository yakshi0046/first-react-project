import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer";
import "firebase/firestore";

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
const firebaseConfig = {
  apiKey: "AIzaSyBxyV4ZbgF7HAN1s7Od84FZVRMLzLNmTSA",
  authDomain: "cart-27164.firebaseapp.com",
  projectId: "cart-27164",
  storageBucket: "cart-27164.appspot.com",
  messagingSenderId: "748851021267",
  appId: "1:748851021267:web:fb066ee0149b7352fddb26",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// createRoot tells react about root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
