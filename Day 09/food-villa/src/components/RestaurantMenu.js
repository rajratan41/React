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
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} Stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
