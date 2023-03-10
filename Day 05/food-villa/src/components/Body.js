import { RestaurantLists } from "../constants";
import ResturantCard from "./ResturantCard";

/**
 * key -
 * there is no key then use index as a key.
 * use unique key (best practice).
 * No KEY is not Acceptable.
 */

// Body Component
const Body = () => {
  return (
    <div className="resturant-lists">
      {RestaurantLists.map((restaurant) => {
        return <ResturantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

export default Body;
