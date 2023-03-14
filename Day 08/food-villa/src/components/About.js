import { Outlet } from "react-router-dom";
import Profile from "./Profile";
const About = () => {
  return (
    <div>
      <h2>About us Page</h2>
      <p>we are learning how to create path</p>
      {/* <Outlet/> */}
      <Profile />
    </div>
  );
};

export default About;
