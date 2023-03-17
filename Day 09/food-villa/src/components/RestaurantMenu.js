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
    <div className="menu">
      <div>
        <h1>restaurant id: {resId}</h1>
        <h2>{resturant?.cards[0]?.card?.card?.info?.name}</h2>
        <img
          src={
            IMG_CDN_URL +
            resturant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3>{resturant?.cards[0]?.card?.card?.info?.locality}</h3>
        <h3>{resturant?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{resturant?.cards[0]?.card?.card?.info?.avgRatingString} Stars</h3>
        <h3>{resturant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(
            resturant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.itemCards
          ).map((item) => {
            return (
              <li key={items?.card?.info?.id}>{items?.card?.info?.name}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
