const Jsx = () => {
  return <h1>Hello Style</h1>;
};

// Inline Style
const Jsx1 = () => {
  return (
    <h1 style={{ background: "red", textAlign: "center" }}>Hello Style</h1>
  );
};

// creating a element of style and call it in jsx
const styleObj = {
  background: "red",
  textAlign: "center",
  color: "white",
};
// calling into jsx file
const Jsx2 = () => {
  return <h1 style={styleObj}>Hello Style</h1>;
};

/**
 * Other styling are Through
 *
 * Tailwind CSS
 * Bootstrap
 * Material Ui
 *
 * and many more....
 */
