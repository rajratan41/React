import { useState } from "react";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  // API call to check Authentication
  return false;
};

// Single Page Application (SPA) ?
// client side Routing

// Logo
const Logo = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://scontent.fccu19-1.fna.fbcdn.net/v/t39.30808-6/245514136_344214294165882_1239671097814191122_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GXE6wm2BukwAX-Y0Mep&_nc_ht=scontent.fccu19-1.fna&oh=00_AfAcLMVQxu9fbPbJVSJ14HZ2kDdfsbfe01XMv-agaEymdw&oe=640A6AE7"
      />
    </a>
  );
};

// Header Component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="cart">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
