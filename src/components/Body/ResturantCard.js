import { image } from "../../constant";
export default ResturantCard = (props) => {
  const { name, cuisines, totalRatingsString, cloudinaryImageId } = props;
  return (
    <div className="card">
      <img src={image + cloudinaryImageId} alt="burger king" />
      <h2>{name}</h2>
      <h3>{cuisines?.join(",")}</h3>
      <h4>{totalRatingsString}</h4>
    </div>
  );
};
