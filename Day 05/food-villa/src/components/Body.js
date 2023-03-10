import { ResturantLists } from "../constants";
import ResturantCard from "./ResturantCard";
import { useState } from "react";

/**
 * key -
 * there is no key then use index as a key.
 * use unique key (best practice).
 * No KEY is not Acceptable.
 */

// what is State?
// what is useState? - will return [variable Name, function to update variable]
// what is Hooks? - function

// Filter Data of Resturant
function filterData(searchText, resturants) {
  const filterData = resturants.filter((resturant) =>
    resturant.data.name.includes(searchText)
  );
  return filterData;
}

// Body Component
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resturants, setResturants] = useState(ResturantLists);

  return (
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
            const data = filterData(searchText, resturants);
            // update the state
            setResturants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-lists">
        {resturants.map((resturant) => {
          return <ResturantCard {...resturant.data} key={resturant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
