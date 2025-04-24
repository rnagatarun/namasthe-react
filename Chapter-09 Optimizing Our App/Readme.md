# React Concepts: Custom Hooks and Lazy Loading

## Custom Hooks

### What are Custom Hooks?
Custom hooks are reusable functions in React that encapsulate logic. They allow you to share functionality across components without duplicating code.

### Why Use Custom Hooks?
- **Reusability**: Encapsulate logic that can be reused across multiple components.
- **Clean Code**: Simplify components by moving complex logic into hooks.
- **Separation of Concerns**: Keep your components focused on rendering while hooks handle logic.

---

## Lazy Loading

### What is Lazy Loading?
Lazy loading is a performance optimization technique where components or resources are loaded only when they are needed. This reduces the initial bundle size and improves the app's load time.

### Why Use Lazy Loading?
- **Improved Performance**: Reduces the initial load time by splitting the code into smaller chunks.
- **Efficient Resource Usage**: Loads components or resources only when required.

### React Implementation
React provides `React.lazy()` and `Suspense` to implement lazy loading for components.

### Example of Lazy Loading with Suspense
```javascript
import React, { Suspense } from "react";

// Lazy load the About component
const About = React.lazy(() => import("./About"));

const App = () => (
  <div>
    <h1>Welcome to the App</h1>
    {/* Suspense provides a fallback while the lazy component is loading */}
    <Suspense fallback={<div>Loading...</div>}>
      <About />
    </Suspense>
  </div>
);

export default App;
```

### Key Points
1. **`React.lazy()`**: Dynamically imports a component, returning a promise that resolves to the component.
2. **`Suspense`**: Wraps the lazy-loaded component and provides a fallback UI (e.g., a loading spinner) while the component is being loaded.

---

## Summary
- **Custom Hooks**: Encapsulate reusable logic for cleaner and more maintainable code.
- **Lazy Loading**: Optimize performance by loading components or resources only when needed.

Both concepts are essential for building scalable and efficient React applications.