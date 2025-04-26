import UserContext from "../utils/UserContext";
import User from "./User";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    console.log("Parent constructor --(About.js Class)");
    super(props);
  }

  componentDidMount() {
    console.log("Parent componentDidMount --(About.js Class)");
  }

  render() {
    console.log("Parent render --(About.js Class)");
    return (
      <div className="about">
        <h1>About Us</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <p>This is the about page of our application.</p>
        <p>We are dedicated to providing the best service possible.</p>
        <User name={"Naga Tarun(Function)"} location={"Banglore"} />
      </div>
    );
  }
}

export default About;
