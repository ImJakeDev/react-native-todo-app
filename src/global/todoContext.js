import * as React from "react";

import initialState from "../api/example-data.json";

const TodoContext = React.createContext();

function todoReducer(state, action) {
  console.debug(state, action);
  switch (action.type) {
    case types.ADD:
      return { ...state, items: [...state.items, action.payload] };
    case types.REMOVE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function TodoProvider({ children }) {
  const [state, dispatch] = React.useReducer(todoReducer, initialState);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

function useTodo() {
  const context = React.useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
}

export { TodoProvider, useTodo };