import { useSelector } from "react-redux";
import store from "../utils/store";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div>
      <h1 className="font-bold text-3xl text-center">
        Cart - {cartItem.length}
      </h1>
      <div className="  rounded-lg bg-white mt-5 text-center font-[Montserrat]  text-black">
        {cartItem.map((items, index) => (
          <h2
            key={index}
            className="font-bold mt-2 flex flex-col justify-center items-center"
          >
            {...items}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Cart;
