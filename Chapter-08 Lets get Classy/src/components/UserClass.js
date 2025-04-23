import "./User.css";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child construtor--(UserClass)")
    super(props);
    this.state = {
      count: 0,
    }
  }

  
  componentDidMount(){
    console.log("Child componentDidMount --(UserClass)")
    //Do API call here.
  }

  render() {
    console.log("Child render --(UserClass)")
    const{name} = this.props;
    const{count} = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={() => {
          //Never update STATE variable directly like "this.state.count = this.state.count + 1"
          //In setState() pass the object{} and update logic inside it like {count: this.state.count + 1}
          this.setState({count: this.state.count + 1})
        }}>Increase Count</button>
        <h2>Name: {name} </h2>
        <h3>Location:{this.props.location} </h3>
        <h4>contact: @naga_tarun</h4>
      </div>
    );
  }
}

export default UserClass;
