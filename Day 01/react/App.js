const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    className: "class",
    style: { color: "red" },
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    className: "class",
    style: { color: "red" },
  },
  "Heading 2"
);

const heading3 = React.createElement(
  "h3",
  {
    id: "title",
    className: "class",
    style: { color: "red" },
  },
  "Heading 3"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2, heading3]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing a react element inside root element
root.render(container);
