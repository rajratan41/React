// make style object and call in JSX
const styleObj = {
  backgroundColor: "red",
  color: "white",
  textAlign: "center",
};

const Jsx = () => {
  return <h1 style={styleObj}>Hello React Style</h1>;
};

// Inline CSS
const Jsx1 = () => {
  return (
    <h1 style={{ backgroundColor: "red", color: "white", textAlign: "center" }}>
      Hello React Style
    </h1>
  );
};

/**
 * There are more
 *
 * In style.css file
 *
 * Tailwind CSS
 * Bootstrap
 * Material UI
 *
 * and more...
 */
