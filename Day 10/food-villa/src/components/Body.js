import { RestaurantLists } from "../constants";
import RestaurantCard from "./restaurantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

// Body Component
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  /**
   * 1) useEffect() with empty dep array
   *    Called once after render
   *
   * 2) useEffect() with dep array [searchText]
   *    Once after render + Called everytime after render "searchText" changes
   *
   * 3) useEffect() with dep array [restaurants]
   *    Once after render + Called everytime restaurants changes that is on click of "Search" button
   */

  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  // console.log("Render"); //-> Called first, before useEffect()

  async function getRestaurants() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1196607&lng=85.390982&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();

    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  // if (!isOnline) {
  //   return <h1>🔴 Offline, Please Check Your Internet Connection!!</h1>;
  // }

  // not render component (Early Return)
  if (!allRestaurants) {
    return null;
  }

  // if (filteredRestaurants?.length === 0) {
  //   return <h3>No restaurant match your filter !!!</h3>;
  // }

  return allRestaurants.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className=" flex items-center justify-center pt-8 font-[Poppins] bg-pink-200 ">
        <input
          type="text"
          className="bg-slate-50 text-black rounded-lg pt-3 pb-3 pl-6 pr-6 w-96"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-purple-700 rounded-lg text-white ml-9 pt-3 pb-3 pl-6 pr-6"
          onClick={() => {
            // need to filter data
            const data = filterData(searchText, allRestaurants);
            // update the state
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-lists pt-12 pl-7 pr-7 flex items-center justify-center flex-wrap gap-9 bg-pink-200">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
