import React, { useEffect } from "react";
import { resturantslist } from "../../constant";
import ResturantCard from "./ResturantCard";
import db from "../../App";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { set } from "mongoose";

export default Body = () => {
  const db = firebase.firestore();
  const [searchTxt, setSeachTxt] = React.useState("KFC");
  // const [searchClicked, setSearchClicked] = React.useState(false);
  const [resturants, setResturants] = React.useState([]);
  // callback fn when input change it will be called

  // fetching products from firebase (version 8)
  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      setResturants(data);
    });
  }, []);

  const addProduct = () => {
    db.collection("products")
      .add({
        cloudinaryImageId:
          "https://www.bing.com/th?id=OIP.Ts0XdS-iYCN0B6p0Whd_dQHaJC&w=226&h=276&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        name: "Burger King",
        cusines: ["indian"],
        totalRatingsString: 4.2,
      })
      .then((docRef) => {
        console.log("product added", docRef);
      });
  };

  const UpdateProduct = (product) => {
    console.log(product);
    const docRef = db.collection("products").doc(product.id);
    docRef
      .update({
        totalRatingsString: product.totalRatingsString + 1,
      })
      .then(() => {
        console.log("updated");
      })
      .catch(() => {
        console.log("error in update");
      });
  };

  const deleteProduct = (product) => {
    const docRef = db.collection("products").doc(product.id);
    docRef
      .delete()
      .then(() => {
        console.log("deleted");
      })
      .catch(() => {
        console.log("error in deletion");
      });
  };

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
            addProduct();
            const data = filterData(searchTxt, resturantslist);
            console.log(data);
            setResturants(data);
          }}
        >
          Search/Add Product
        </button>
        <button
          type="search"
          onClick={() => {
            // setSearchClicked(!searchClicked);
            UpdateProduct(resturants[0]);
          }}
        >
          Update Product
        </button>
        <button
          type="search"
          onClick={() => {
            // setSearchClicked(!searchClicked);
            deleteProduct(resturants[0]);
          }}
        >
          Delete Product
        </button>
      </div>
      <div className="resturant-list">
        {resturants.length > 0 &&
          resturants.map((resturant) => {
            return <ResturantCard {...resturant} />;
          })}
      </div>
    </>
  );
};
