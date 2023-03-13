import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import ShimmerUi from "./ShimmerUi";

const ResturantMenu = () => {
  /**
   * how to read the dynamic URL
   * using useParams() hook from react-router-dom
   */

  //   const parms = useParams();
  //   const { id } = parms;
  //   console.log(parms);

  //   or you can direct distructure
  const { resId } = useParams();
  const [resturant, setResturant] = useState(null);

  //   useEffect
  useEffect(() => {
    getResturantInfo();
  }, []);

  //   API Call
  async function getResturantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=17.385044&lng=78.486671&menuId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setResturant(json.data);
  }

  return !resturant ? (
    <ShimmerUi />
  ) : (
    <div className="menu">
      <div>
        <h1>Resturant id: {resId}</h1>
        <h2>{resturant?.name}</h2>
        <img src={IMG_CDN_URL + resturant?.cloudinaryImageId} />
        <h3>{resturant?.area}</h3>
        <h3>{resturant?.city}</h3>
        <h3>{resturant?.avgRating} Stars</h3>
        <h3>{resturant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(resturant?.menu?.items).map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
