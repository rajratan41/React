import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

// restaurant Card Component
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className=" rounded-lg bg-white  w-[15rem] font-[Montserrat]  text-black shadow-xl transition ease-out duration-75 hover:scale-95">
      <img
        className="mt-0 rounded-t-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2 className="font-bold mt-2 text-center">{name}</h2>
      <h5 className="mt-2 text-sm text-center">{cuisines.join(", ")}</h5>
      <h3 className="mt-2 text-sm text-center">{totalRatingsString}</h3>
      <h5 className="font-semibold text-red-900">
        {user.name} - {user.email}
      </h5>
    </div>
  );
};

export default RestaurantCard;
