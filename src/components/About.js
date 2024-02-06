import React from "react";
import UserContext from "../utils/UserContext";
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
      <div className="text-center p-6">
        <div>
          <UserContext.Consumer>
            {(data) => (
              <div>
                <h1>{data.loggedinUser}</h1>
              </div>
            )}
          </UserContext.Consumer>
        </div>

        <h1 className="m-2">{count.login}</h1>
        <h1>{count.id}</h1>
        <div className="mx-auto my-2 w-28">
          <h1>avatar</h1>
          <img className="p-2 mx-auto bg-cover " src={count.avatar_url}></img>
        </div>
        <h1 className="my-2">{count.node_id}</h1>
        <h1 className="my-2">{count.public_repos}</h1>
        <h1 className="my-2">{count.company}</h1>
        <h1 className="my-2">{count.twitter_username}</h1>
        <h1 className="my-2">{count.location}</h1>
      </div>
    );
  }
}

export default About;
