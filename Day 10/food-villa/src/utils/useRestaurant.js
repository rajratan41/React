import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  //   Get data from API

  //   useEffect
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  //   API Call
  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  // return restaurant data
  return restaurant;
};

export default useRestaurant;
