import React from "react";

/**
 * First Constructer
 * then render
 * then API CALL (componentDidMount())
 */

// Class based Component in React

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      userInfo: {
        name: "DUMMY NAME",
        location: "DUMMY LOCATION",
        avatar_url: "DUMMY IMAGE",
      },
    };

    console.log("Child - Constructer " + this.props.name);
  }

  async componentDidMount() {
    // API Call
    const data = await fetch("https://api.github.com/users/rajratan41");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });

    console.log("Child - Component Did Mount " + this.props.name);
  }

  componentDidUpdate() {
    console.log("Child - componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Child - render " + this.props.name);
    // Destructute
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h1>Profile - Class Component</h1>
        <img src={avatar_url} />
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default Profile;

/****
 * Parent with Child Life Cycle
 * =============================
 *
 * parent constructor
 * parent render
 *    first child constructor
 *    first child render
 * parent componentDidMount (bcz first child componentDidMount is Async so it will take time to fetch data)
 *
 *    log (inside componenetDidMount and is Async so it will take time to print)
 *
 * ==================================
 * Update the Dom
 * ==================================
 *    first child componenetDidMount
 *    first child render
 *
 */

/****
 * Child Life Cycle
 * ==================
 * first child constructor
 * first child render
 * 
 
 * first child componentDidMount
 * API Call
 * Set state
 * 
 * ================
 * Update Cycles
 * ================
 * first child render
 * 
 *
 */

// ComponenetWillUnmount - when we leave the page
