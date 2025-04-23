import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    console.log("Parent constructor --(About.js Class)")
    super(props);
  }

  componentDidMount(){
    console.log("Parent componentDidMount --(About.js Class)")
  }

  render() {
    console.log("Parent render --(About.js Class)")
    return (
      <div className="about">
        <h1>About Us</h1>
        <p>This is the about page of our application.</p>
        <p>We are dedicated to providing the best service possible.</p>
        <User name={"Naga Tarun(Function)"} location={"Banglore"} />

        <UserClass name={"Naga Tarun(Class)"} location={"Banglore"} />
      </div>
    );
  }
}

export default About;