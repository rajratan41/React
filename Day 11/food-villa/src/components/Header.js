import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Logo from "../assets/img/foodVilla.png";

const loggedInUser = () => {
  // API call to check Authentication
  return false;
};

// Single Page Application (SPA) ?
// client side Routing

// Logo
const Title = () => (
  <Link to="/">
    <img className="h-24 rounded-lg" alt="logo" src={Logo} />
  </Link>
);

// Header Component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="flex flex-wrap justify-between items-center p-4 pl-10 pr-10 bg-pink-200 shadow-md font-[Poppins]">
      <Title />
      <div className="nav-items">
        <ul className="flex gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/instamart">Instamart</Link>
          </li>

          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? "🟢 Online" : "🔴 Offline"}</h1>
      {isLoggedIn ? (
        <button
          className="bg-purple-700 rounded-lg py-2 px-6 text-white transition ease-out duration-150 hover:scale-90"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-purple-700 rounded-lg py-2 px-6 text-white transition ease-out duration-75 hover:scale-95"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
