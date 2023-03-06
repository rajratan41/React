import React from "react";
import ReactDOM from "react-dom/client";

/***
 * Food Villa - Layout
 * *********************************
 * Header
 *    - Logo
 *    - Nav Items (Right Side)
 *    - Cart
 * **********************************
 *
 * * *********************************
 * Body
 *    - Search Bar
 *    - Resturant List
 *    - Resturant Cards
 *        - Image
 *        - Name
 *        - Cusine
 *        - Rating
 * **********************************
 *
 * * *********************************
 * Footer
 *    - Links
 *    - Copyright
 * **********************************
 */

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
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Resturant List Component
const ResturantLists = [
  {
    name: "Briyani Maharaj",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qgthkrhsblq3ruyekmlh",
    cusine: ["Briyani", "Hydrabadi", "North Indian", "Tandoor"],
    rating: "4.2",
  },
  {
    name: "Briyani Maharaj",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qgthkrhsblq3ruyekmlh",
    cusine: ["Briyani", "Hydrabadi", "North Indian", "Tandoor"],
    rating: "4.2",
  },
  {
    name: "Briyani Maharaj",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qgthkrhsblq3ruyekmlh",
    cusine: ["Briyani", "Hydrabadi", "North Indian", "Tandoor"],
    rating: "4.2",
  },
  {
    name: "Briyani Maharaj",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qgthkrhsblq3ruyekmlh",
    cusine: ["Briyani", "Hydrabadi", "North Indian", "Tandoor"],
    rating: "4.2",
  },
  {
    name: "Briyani Maharaj",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qgthkrhsblq3ruyekmlh",
    cusine: ["Briyani", "Hydrabadi", "North Indian", "Tandoor"],
    rating: "4.2",
  },
];

// Resturant Card Component
const ResturantCard = () => {
  return (
    <div className="card">
      <img src={ResturantLists.image} />
      <h2>{ResturantLists.name}</h2>
      <h5>{ResturantLists.cusine.join(", ")}</h5>
      <h3>{ResturantLists.rating} Stars</h3>
    </div>
  );
};

// Body Component
const Body = () => {
  return (
    <div className="resturant-lists">
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
      <ResturantCard />
    </div>
  );
};

// Footer Component
const Footer = () => {
  return <h4>Footer</h4>;
};

// React Fragment - <React.Fragment> <React.Fragment/>  or <>we can use empty tag</>
// JSX - have only one parent that's why we use React Fragment or div or empty tag

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
