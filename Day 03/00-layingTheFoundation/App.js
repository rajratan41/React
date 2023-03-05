import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => gives Object => it converts into HTML (DOM)

/**
 * JSX -
 *
 * Fancy way of writing HTML inside JavaScript
 * JSX is HTML like Syntax but it is not HTML inside JavaScript
 */

// react element
const heading = (
  <h1 className="heading" key="h1">
    Hello I'm React element
  </h1>
);

const Heading2 = () => (
  <h2 className="heading" key="h2">
    Hello I'm Functional Component - Imported in HeaderComponent
  </h2>
);

/***
 * React Components
 *
 * Functional Component - NEW way of writing Code
 * Class based Component - OLD way of writing Code
 *
 */

// Functional Component
let abc = "JavaScript";

// {we can write any piece of javaScript code inside this}

const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <Heading2 />
      {abc}
      <h1 className="heading">Hello I'm Functional Component</h1>
      <p>I'm Paragraph</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
