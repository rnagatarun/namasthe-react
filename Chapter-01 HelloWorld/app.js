// React development CDN

/* CDN stands for Content Delivery Network. It’s a network of servers distributed geographically that deliver content 
 (like images, videos, stylesheets, JavaScript files, etc.) to users based on their location.*/

/*The crossorigin attribute controls how the browser handles cross-origin requests made by the script tag. -->
 A cross-origin request happens when your webpage is served from one origin (e.g., http://localhost:3000) 
 and tries to load a resource from another origin (like https://unpkg.com). */

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!!"
);

console.log(heading);//heading is an object of type React element

//root is a ReactDOM object that is used to render React elements into the DOM.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



//********** React.createElement() Nested Structure ***********/
/**
 *
 * <div id="parent">
 *   <div id="child">
 *     <h1>I'm an h1 tag</h1>
 *     <h2>I'm an h2 tag</h2>
 *   </div>
 *   <div id="child2">
 *     <h1>I'm an h1 tag</h1>
 *     <h2>I'm an h2 tag</h2>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

root.render(parent);