import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import ShimmerUi from "./ShimmerUi";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

// Custom hooks
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();
  const addFoodItem = (items) => {
    dispatch(addItem(items));
  };

  return !restaurant ? (
    <ShimmerUi />
  ) : (
    <div className="flex items-center justify-center bg-pink-200">
      <div className="flex  text-center p-5 bg-white rounded-3xl w-[50%] shadow-2xl m-6 shadow-black">
        <div>
          <h1>restaurant id: {resId}</h1>
          <h2 className="font-semibold text-2xl m-5">
            {restaurant?.cards[0]?.card?.card?.info?.name}
          </h2>
          <img
            className="rounded-lg w-80  "
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

        <div className="ml-12 p-5 w-[31rem]">
          <h1 className="font-semibold text-3xl mb-6 ">Menu</h1>
          <ul className="">
            {Object.values(
              restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
                ?.card?.card?.itemCards
            ).map((items, index) => {
              return (
                <>
                  <li className="m-5" key={items?.card?.info?.id}>
                    {items?.card?.info?.name} -
                    <button
                      className="px-3  py-1 rounded-lg text-white ml-2 bg-purple-700"
                      onClick={() => addFoodItem(items?.card?.info?.name)}
                    >
                      Add
                    </button>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
