import { RestaurantLists } from "../constants";
import RestaurantCard from "./restaurantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

// Body Component
const Body = () => {
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filterdrestaurants, setFilteredRestaurants] = useState([]);
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

  // Conditional Rendering
  // if restaurant is empty => ShimmerUi
  // if restaurant has data => Actual Ui

  // not render component (Early Return)
  if (!allrestaurants) {
    return null;
  }

  // if (filterdrestaurants?.length === 0) {
  //   return <h3>No restaurant match your filter !!!</h3>;
  // }

  return allrestaurants.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="searchbtn"
          onClick={() => {
            // need to filter data
            const data = filterData(searchText, allrestaurants);
            // update the state
            setFilteredrestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-lists">
        {filterdrestaurants.map((restaurant) => {
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