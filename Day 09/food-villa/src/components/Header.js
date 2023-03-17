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
    <img alt="logo" src={Logo} className="logo" />
  </Link>
);

// Header Component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
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
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? "🟢 Online" : "🔴 Offline"}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
