import "./User.css";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const{name} = this.props
    return (
      <div className="user-card">
        <h2>Name: {name} </h2>
        <h3>Location:{this.props.location} </h3>
        <h4>contact: @naga_tarun</h4>
      </div>
    );
  }
}

export default UserClass;
