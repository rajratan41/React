import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <div>
      <h1>Food-Villa</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title />);
