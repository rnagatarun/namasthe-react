import User from './User';
import UserClass from './UserClass';

const About = () => {
    return(
        <div className="about">
            <h1>About Us</h1>
            <p>This is the about page of our application.</p>
            <p>We are dedicated to providing the best service possible.</p>
            <User name={"Naga Tarun(Function)"} location ={"Banglore"}/>
            
            <UserClass name={"Naga Tarun(Class)"} location ={"Banglore"}/>
        </div>
    );
}

export default About;