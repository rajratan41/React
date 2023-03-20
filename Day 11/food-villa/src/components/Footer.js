import { useContext } from "react";
import UserContext from "../utils/UserContext";

// Footer Component
const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-center items-center font-semibold p-9 bg-pink-200 font-[Poppins]">
      <h3> This site is developed with ❤️ by {user.name} </h3>
    </div>
  );
};

export default Footer;
