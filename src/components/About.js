import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shivasaineelam");
    const json = await data.json();
    this.setState({ count: json });
  }
  componentDidUpdate() {}
  render() {
    if (this.state.count === null) {
      return <div>loading</div>;
    }
    const { count } = this.state;
    return (
      <div>
        <h1>{count.login}</h1>
        <h1>{count.id}</h1>
        <img className="personimage" src={count.avatar_url}></img>
        <h1>{count.node_id}</h1>
        <h1>{count.public_repos}</h1>
        <h1>{count.company}</h1>
        <h1>{count.twitter_username}</h1>
        <h1>{count.location}</h1>
      </div>
    );
  }
}

export default About;
