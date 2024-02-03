import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
    console.log("child constructor called");
  }
  componentDidMount() {
    console.log("child component did mount");
  }
  render() {
    console.log("child render called");
    const { name, location, college } = this.props;
    const { count, count1 } = this.state;
    return (
      <div className="aboutc">
        <button
          className="btnc"
          onClick={() => {
            this.setState({ count: count + 1, count1: count1 + 1 });
          }}
        ></button>
        <h1>count={count}</h1>
        <h1>count1 ={count1}</h1>
        <h1>Name: {name}</h1>
        <h1>Location: {location}</h1>
        <h1>College: {college}</h1>
      </div>
    );
  }
}
export default UserClass;
