import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("child constructor render" + this.props.name);
  }

  componentDidMount() {
    console.log("child componentDidMount render" + this.props.name);
  }

  render() {
    const { count } = this.state;
    console.log("child component render" + this.props.name);
    return (
      <div>
        <h2>Profile Class Component</h2>
        <h4>{this.props.name}</h4>
        <p>{count}</p>
        <button
          onClick={() =>
            this.setState({
              count: 1,
            })
          }
        >
          Click
        </button>
      </div>
    );
  }
}

export default Profile;
