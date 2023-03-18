import { IMG_CDN_URL } from "../constants";

// restaurant Card Component
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
}) => {
  return (
    <div className="rounded-lg h-[20rem] w-[18rem] font-[Poppins] bg-pink-300 text-black shadow-xl">
      <img className="mt-0 rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-medium mt-2 text-center">{name}</h2>
      <h5 className="mt-2 text-sm text-center">{cuisines.join(", ")}</h5>
      <h3 className="mt-2 text-sm text-center">{totalRatingsString}</h3>
    </div>
  );
};

export default RestaurantCard;
