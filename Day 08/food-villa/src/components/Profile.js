import { useEffect, useState } from "react";
/**
 * First render
 * then API Call (useEffect())
 * then again render
 */

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("NAMASTE REACT OP");
    }, 1000);

    // willUnmount in useEffect - when you leave the page it will end
    return () => {
      clearInterval(timer);
    };
  });

  // console.log("render");

  return (
    <div>
      <h1>Profile - Functional Component</h1>
      <h3>Name: {props.name}</h3>
      <h3>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
      <button
        onClick={() => {
          setCount(1), setCount2(2);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;
