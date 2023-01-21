export default ResturantCard = (props) => {
  const { name, cusines, totalRatingsString, cloudinaryImageId } = props;
  return (
    <div className="card">
      <img src={cloudinaryImageId} alt="burger king" />
      <h2>{name}</h2>
      <h3>{cusines}</h3>
      <h4>{totalRatingsString}</h4>
    </div>
  );
};
