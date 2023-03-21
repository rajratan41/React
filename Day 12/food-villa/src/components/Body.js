import { useEffect, useState, useContext } from "react";

// Component
import RestaurantCard from "./restaurantCard";
import ShimmerUi from "./ShimmerUi";

import { Link } from "react-router-dom";

// Helper
import { filterData } from "../utils/helper";

// Custom Hook
import useOnline from "../utils/useOnline";

import UserContext from "../utils/UserContext";

// Body Component
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { user, setUser } = useContext(UserContext);

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
      <div className=" flex flex-wrap items-center justify-center pt-8 font-[Poppins] bg-pink-200 ">
        <input
          type="text"
          className="bg-slate-100 focus:bg-white text-black rounded-lg py-3 px-6 w-96"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-purple-700 rounded-lg text-white ml-9 py-3 px-6 transition ease-out duration-75 hover:scale-95"
          onClick={() => {
            // need to filter data
            const data = filterData(searchText, allRestaurants);
            // update the state
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>

        {/* To change Context */}
        <input
          className="py-3 px-6 m-2"
          type="text"
          placeholder="Context Name"
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>

        <input
          className="py-3 px-6 m-2"
          type="email"
          placeholder="Context Email"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        ></input>
        {/* To change Context */}
      </div>
      <div className="restaurant-lists pt-12 pl-7 pr-7 flex items-center justify-center flex-wrap gap-5 bg-pink-200">
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
