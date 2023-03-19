import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import ShimmerUi from "./ShimmerUi";

// Custom hooks
import useRestaurant from "../utils/useRestaurant";

// Refactoring this component's logic of loading from API and rendering on the screen
// We are separating the logic between component and new Hook
const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <ShimmerUi />
  ) : (
    <div className="flex items-center justify-center bg-pink-200">
      <div className="flex  text-center p-5 bg-white rounded-3xl w-[40rem] shadow-2xl m-6">
        <div>
          <h1>restaurant id: {resId}</h1>
          <h2 className="font-semibold text-4xl m-5">
            {restaurant?.cards[0]?.card?.card?.info?.name}
          </h2>
          <img
            className="rounded-lg w-80 "
            src={
              IMG_CDN_URL +
              restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
            }
          />
          <h3 className="mt-5">
            {restaurant?.cards[0]?.card?.card?.info?.locality}
          </h3>
          <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
          <h3>
            {restaurant?.cards[0]?.card?.card?.info?.avgRatingString} Stars
          </h3>
          <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
        </div>
        <div className="ml-12 p-5">
          <h1 className="font-semibold text-3xl mb-6 ">Menu</h1>
          <ul className="divide-y-2 ">
            {Object.values(
              restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
                ?.card?.card?.itemCards
            ).map((items) => {
              return (
                <li className="mt-2" key={items?.card?.info?.id}>
                  {items?.card?.info?.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
