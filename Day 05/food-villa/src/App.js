import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/**
 * Default import
 * import Header from "./components/Header";
 * import NewHeader from "./components/Header";
 *    We can rename it to a different value
 *
 * Named import(s)
 * import { Title } from "./components/Header";
 *    Example createRoot import style
 *
 * import * as Obj from "./components/Header";
 *    <Obj.Title /> Example of React.Fragment
 * **/

/***
 * Food Villa - Website Design
 * ============================
 * Header
 *    - Logo
 *    - Nav Items (Right Side)
 *    - Cart
 * ============================
 *
 * =============================
 * Body
 *    - Search Bar
 *    - Resturant List
 *    - Resturant Cards
 *        - Image
 *        - Name
 *        - Cusine
 *        - Rating
 * ==============================
 *
 * ==============================
 * Footer
 *    - Links
 *    - Copyright
 * ==============================
 */

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
