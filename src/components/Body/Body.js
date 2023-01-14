import React from "react";
import { resturantslist } from "../../constant";
import ResturantCard from "./ResturantCard";

export default Body = () => {
  const [searchTxt, setSeachTxt] = React.useState("KFC");
  // const [searchClicked, setSearchClicked] = React.useState(false);
  const [resturants, setResturants] = React.useState(resturantslist);
  // callback fn when input change it will be called
  const onChangeInput = (e) => {};
  const filterData = (searchTxt, resturantslist) => {
    console.log(searchTxt, resturantslist);
    const filteredResturants = resturantslist.filter((item) => {
      console.log(item);
      return item?.data?.name.includes(searchTxt);
    });
    return filteredResturants;
  };
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
            // setSearchClicked(!searchClicked);
            const data = filterData(searchTxt, resturantslist);
            console.log(data);
            setResturants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
        {resturants.map((resturant) => {
          return <ResturantCard {...resturant?.data} />;
        })}
      </div>
    </>
  );
};
