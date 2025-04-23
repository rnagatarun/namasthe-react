import "./User.css";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child construtor--(UserClass)");
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy Name",
        location: "Default",
        avatar: "http://dummyimage.com/"
      },
    };
  }

  async componentDidMount() {
    console.log("Child componentDidMount --(UserClass)");
    //Do API call here.
    const data = await fetch("https://api.github.com/users/rnagatarun");
    const json = await data.json();

    //Update state of userInfo using setState to assign values dynamically from API 
      this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    console.log("Child render --(UserClass)");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card"> 
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            //Never update STATE variable directly like "this.state.count = this.state.count + 1"
            //In setState() pass the object{} and update logic inside it like {count: this.state.count + 1}
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase Count
        </button>

        <h2>Name: {name} </h2>
        <img src={avatar_url} className="user-class-img" />
        <h3>Location:{location} </h3>
        <h4>contact: @naga_tarun</h4>
      </div>
    );
  }
}

export default UserClass;
