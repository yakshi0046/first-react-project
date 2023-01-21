import React from "react";
import { resturantslist } from "../../constant";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

export default Body = () => {
  const [searchTxt, setSeachTxt] = React.useState("");
  const [resturants, setResturants] = React.useState([]);
  const [filteredResturants, setFilteredResturants] = React.useState([]);

  const getResturants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    // convert data to json to read it
    const json = await data.json();
    setResturants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredResturants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json?.data?.cards[2]?.data?.data?.cards);
  };

  // called after intial render, empty dependency-> call once only
  // with state it will call whenever state changes and once after render
  React.useEffect(() => {
    getResturants();
  }, []);

  // callback fn when input change it will be called
  const filterData = (searchTxt, resturantslist) => {
    console.log(searchTxt, resturantslist);
    const filteredResturants = resturantslist.filter((item) => {
      console.log(item);
      return (item?.data?.name).toLowerCase().includes(searchTxt.toLowerCase());
    });
    return filteredResturants;
  };

  // not render component(early return)
  if (!resturants) return null;
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSeachTxt(e.target.value)}
        />
        <button
          type="search"
          onClick={() => {
            const data = filterData(searchTxt, resturants);
            setFilteredResturants(data);
          }}
        >
          Search
        </button>
      </div>
      {resturants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="resturant-list">
          {filteredResturants.length === 0 ? (
            <h1>No Data Found</h1>
          ) : (
            filteredResturants?.map((resturant) => {
              return (
                <ResturantCard {...resturant?.data} key={resturant.data.id} />
              );
            })
          )}
        </div>
      )}
    </>
  );
};
