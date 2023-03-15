import { ResturantLists } from "../constants";
import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";

// Filter Data of Resturant
function filterData(searchText, resturants) {
  const filterData = resturants.filter((resturant) =>
    resturant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

// Body Component
const Body = () => {
  const [allResturants, setAllResturants] = useState([]);
  const [filterdResturants, setFilteredResturants] = useState([]);
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
    getResturants();
  }, []);

  // console.log("Render"); //-> Called first, before useEffect()

  async function getResturants() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1196607&lng=85.390982&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();

    // Optional Chaining
    setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredResturants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // Conditional Rendering
  // if resturant is empty => ShimmerUi
  // if resturant has data => Actual Ui

  // not render component (Early Return)
  if (!allResturants) {
    return null;
  }

  // if (filterdResturants?.length === 0) {
  //   return <h3>No Resturant match your filter !!!</h3>;
  // }

  return allResturants.length === 0 ? (
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
            const data = filterData(searchText, allResturants);
            // update the state
            setFilteredResturants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-lists">
        {filterdResturants.map((resturant) => {
          return (
            <Link
              to={"/resturant/" + resturant.data.id}
              key={resturant.data.id}
            >
              <ResturantCard {...resturant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
