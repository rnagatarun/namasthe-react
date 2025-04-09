import React from 'react';
import ReactDOM from 'react-dom/client';

// React.CreateElement  -> is a  Object -> and it is converted to HTMLElement(render)
const heading = 'Now we are laying the foundation of React!';
const element = React.createElement('h1', null, heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

//JSX is not HTML in JavaScript

/*
    JSX is a syntax extension for JavaScript that looks similar to HTML. 
    It allows you to write HTML-like code within your JavaScript files, making it easier to create and manage UI components. 
    JSX is not HTML in JavaScript; it's a syntax that gets transformed into JavaScript function calls by tools like Babel. 
    This transformation allows React to efficiently update the UI by creating a virtual representation of the DOM.
*/

const jsxHeading = <h1>I am from JSX</h1>
root.render(jsxHeading);

//Functional Component: A functional component is a JavaScript function that returns a React element.
const TitleComponent = () => {
    return <h1>I am title component rendered in Heading Component via <i>Component Composition</i></h1>
}

const HeadingComponent = () => {
    return(
        <div id="container">
        <h1>React Functional Component</h1>
        <TitleComponent/>
        </div>
    ); 
}

root.render(<HeadingComponent/>);