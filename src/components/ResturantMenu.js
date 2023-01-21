import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { image } from "../constant";
import Shimmer from "./Body/Shimmer";

const ResturantMenu = () => {
  const { id } = useParams();
  const [resturantMenu, setResturantMenu] = useState([]);
  const getResturantMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json.data);
    setResturantMenu(json.data);
    console.log(json);
  };

  useEffect(() => {
    getResturantMenu();
  }, []);
  //   if (!resturantMenu) return null;
  return !resturantMenu || resturantMenu.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="resturant-menu">
      <div>
        <div>Resturant id:{id}</div>
        <div>{resturantMenu?.name}</div>
        <img src={image + resturantMenu?.cloudinaryImageId} />
        <h3>{resturantMenu?.area}</h3>
        <h3>{resturantMenu?.city}</h3>
        <h3>{resturantMenu?.avgRating}</h3>
        <h3>{resturantMenu?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(resturantMenu?.menu?.items).map((item) => {
            return <li key={item?.id}>{item?.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default ResturantMenu;
