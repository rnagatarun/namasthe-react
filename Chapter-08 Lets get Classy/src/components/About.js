import User from './User';

const About = () => {
    return(
        <div className="about">
            <h1>About Us</h1>
            <p>This is the about page of our application.</p>
            <p>We are dedicated to providing the best service possible.</p>
            <User />
        </div>
    );
}

export default About;