# React Concepts

## Scripts to Run Parcel on Dev and Prod

- **Development**:
  Use the following script to start the Parcel development server:
  ```sh
  npx parcel index.html
  ```
  This will start a local development server with features like Hot Module Replacement (HMR).

- **Production**:
  Use the following script to build the project for production:
  ```sh
  npx parcel build index.html
  ```
  This will generate optimized files in the `dist` folder, ready for deployment.

---

## Functional vs Class-Based Components

### Functional Components
- **Definition**: Functional components are simple JavaScript functions that return JSX.
- **Features**:
  - Easier to write and understand.
  - Stateless by default but can use state and lifecycle methods with React Hooks (e.g., `useState`, `useEffect`).
  - Lightweight and better for performance in most cases.
- **Example**:
  ```javascript
  const Greeting = () => {
    return <h1>Hello, Functional Component!</h1>;
  };
  ```

### Class-Based Components
- **Definition**: Class-based components are ES6 classes that extend `React.Component`.
- **Features**:
  - Can manage state and lifecycle methods without hooks.
  - More verbose and complex compared to functional components.
  - Used more often in older React codebases.
- **Example**:
  ```javascript
  import React, { Component } from "react";

  class Greeting extends Component {
    render() {
      return <h1>Hello, Class-Based Component!</h1>;
    }
  }
  ```

### Key Differences
| Feature                  | Functional Components                | Class-Based Components          |
|--------------------------|--------------------------------------|----------------------------------|
| **Syntax**               | Simple function                      | ES6 class extending `React.Component` |
| **State Management**     | Uses React Hooks (`useState`, etc.)  | Uses `this.state` and `setState` |
| **Lifecycle Methods**    | Uses hooks like `useEffect`          | Uses methods like `componentDidMount` |
| **Performance**          | Lightweight and faster               | Slightly heavier due to class overhead |
| **Readability**          | Easier to read and maintain          | More verbose and complex         |

---

## JSX

- **What is JSX?**
  JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your React components. It makes it easier to create and visualize the structure of your UI.

- **Example**:
  ```javascript
  const element = <h1>Hello, JSX!</h1>;
  ```

- **Why Use JSX?**
  - It’s more readable and declarative.
  - It allows embedding JavaScript expressions directly in your HTML-like code.

---

## Ways of Rendering JavaScript in JSX

1. **Using Components**:
   ```javascript
   const Title = () => <h1>Hello, Title Component!</h1>;
   const App = () => <Title />;
   ```

2. **Using Functions**:
   ```javascript
   const title = () => "Hello, Function!";
   const App = () => <h1>{title()}</h1>;
   ```

3. **Using Variables**:
   ```javascript
   const title = "Hello, Variable!";
   const App = () => <h1>{title}</h1>;
   ```

4. **Using Tags**:
   ```javascript
   const App = () => <h1>Hello, Tag!</h1>;
   ```

---

## Notes
- Functional components are now the preferred way to write React components due to the introduction of hooks.
- JSX allows you to write clean and maintainable UI code by combining HTML-like syntax with JavaScript logic.