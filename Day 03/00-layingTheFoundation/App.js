import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => gives Object => it converts into HTML (DOM)

/**
 * JSX -
 *
 * Fancy way of writing HTML inside JavaScript
 * JSX is HTML like Syntax but it is not HTML inside JavaScript
 */

const heading1 = (
  <h1 className="heading" key="h1">
    Hello I'm JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
