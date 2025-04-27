# Redux Toolkit
 - Install @reduxjs/toolkit and react-redux and add it pacakage.json (`npm install @reduxjs/toolkit react-redux`)
 - Build our own store
 - Connect our store to our app
 - Slice(cartSlice) 
 - dispatch(action)
 - Selector

## Key Concepts

1. **Store**: The central repository that holds the application's state.
2. **Slice**: A slice of the state, managed by a reducer and actions.
3. **Reducer**: A pure function that updates the state based on the dispatched action.
4. **Action**: An object that describes what happened (e.g., `ADD`).
5. **Dispatch**: A method to send actions to the store.
6. **Selector**: A function to extract specific data from the store.
7. **Subscribe**: A mechanism to listen for state updates.

---

## Workflow Steps

User Interaction (e.g., Click "ADD")
        |
        v
Dispatch Action (e.g., dispatch({ type: "ADD" }))
        |
        v
Reducer Execution (Processes the action and updates the state)
        |
        v
Store Update (Centralized state is updated)
        |
        v
Selector Subscription (Components subscribe to the updated state)
        |
        v
UI Update (Components re-render with the updated state)

---
