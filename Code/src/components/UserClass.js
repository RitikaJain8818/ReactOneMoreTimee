import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log(this.props.name + " Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " Child componentDidMount");
  }

  render() {
    console.log(this.props.name + " Child Render");
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Count : {count}</h3>
        <h3>Count2 : {count2}</h3>
        <button
          onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY LIKE this.state.count = this.state.count + 1
            //Doing it will cause inconsistency in the program
            this.setState({
              count: count + 1,
              count2: count2 + 2,
            });
          }}
        >
          Increment
        </button>
        <h3>Location: {location}</h3>
        <h4>Contact: LinkedIn</h4>
      </div>
    );
  }
}

export default UserClass;
