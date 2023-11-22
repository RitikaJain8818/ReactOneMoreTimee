import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h2>About</h2>
        <UserClass />
      </div>
    );
  }
}
export default About;

/*
 - Parent Constructor
 - Parent Render
    - First Child Constructor
    - First Child Render

    - Second Child Constructor
    - Second Child Render

    [DOM IS UPDATED IN A SINGLE BATCH]

    - First Child componentDidMount
    - Second Child componentDidMount

 - Parent componentDidMount

*/
