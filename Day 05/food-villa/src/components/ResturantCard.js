import { IMG_CDN_URL } from "../constants";

// Resturant Card Component
const ResturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h3>{totalRatingsString}</h3>
    </div>
  );
};

export default ResturantCard;
