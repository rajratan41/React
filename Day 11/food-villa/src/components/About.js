import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import { Component } from "react";
import UserContext from "../utils/UserContext";

// Class based Component

class About extends Component {
  constructor(props) {
    super(props);
    // here state goes

    // console.log("Parent - Constructor");
  }

  componentDidMount() {
    // Best place for API Call
    // console.log("Parent - ComponenetDidMount");
  }

  render() {
    // console.log("Parent - render");

    return (
      <div className="text-center">
        <h2>About us Page 🚀</h2>
        <p>we are learning how to create path</p>

        {/* using Context in Class based Componenet */}
        <UserContext.Consumer>
          {({ user }) => (
            <h1 className="font-bold text-center">
              {user.name} - {user.email}
            </h1>
          )}
        </UserContext.Consumer>

        {/* <Outlet/>  make route about/profile */}

        <ProfileFunctionalComponent name={"First Child"} xyz={"Abc"} />
      </div>
    );
  }
}

export default About;

/****
 * Lifecycle
 *
 * ====================================
 *    RENDER PHASE
 * ====================================
 *
 * Parent - Constructor
 * Parent - Render
 *    First Child - Constructor
 *    First Child - Render
 *    Second Child - Constructor
 *    Second Child - Render
 *
 * ====================================
 *    COMMIT PHASE
 * ====================================
 *   DOM UPDATED FOR CHILDREN
 * ====================================
 *
 *    First Child - componentDidMount
 *    Second Child - componentDidMount
 * Parent - componentDidMount
 *
 */
