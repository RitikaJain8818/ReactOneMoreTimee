import React from "react";
class UserClass extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log("Child Constructor");
  }

  async componentDidMount() {
    console.log("Child componentDidMount");
    const data = await fetch("https://api.github.com/users/ritikajain8818");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  //Called after DOM Update is completed with the api response
  componentDidUpdate() {
    console.log("Child componentDidUpdate");
  }

  //It's called just before we move to different page (just before component is unmounted)
  componentWillUnmount() {
    console.log("Child componentWillUnmount");
  }

  render() {
    console.log("Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;

/**
 *
 * -------MOUNTING----------
 *
 * Constructor(dummy)
 * Render(dummy)
 *      <HTML (dummy)>
 *
 * After Mounting
 *
 * Component Did Mount
 *      API Call
 *      <this.setState> -> State Variable is updated
 *
 *
 * -------UPDATE--------------
 *
 *          render(API Data)
 *          <HTML (new API Data)>
 *
 *          After Update
 *
 *          Component Did Update
 *
 *          Component Will Unmount
 * --------UNMOUNTING------------
 *
 *
 *
 *
 *
 */
