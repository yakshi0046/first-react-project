import React from "react";

const Shimmer = () => {
  return (
    <div className="resturant-list">
      {Array(10)
        .fill("")
        .map((e, index) => {
          return (
            <div className="shimmer-card" key={index}>
              <div className="shimmer-img"></div>
              <div className="shimmer-name"></div>
              <div className="shimmer-name"></div>
            </div>
          );
        })}
    </div>
  );
};
export default Shimmer;
