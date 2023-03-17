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
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.1196607&lng=85.390982&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json.data);
    setResturant(json.data);
    console.log(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards[0].card.info
    );
    // cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name
    // cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name
  }

  return !resturant ? (
    <ShimmerUi />
  ) : (
    <div className="menu">
      <div>
        <h1>Resturant id: {resId}</h1>
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
          ).map((items) => {
            return (
              <li key={items?.card?.info?.id}>{items?.card?.info?.name}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
