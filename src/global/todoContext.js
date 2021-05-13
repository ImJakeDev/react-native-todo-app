import * as React from "react";

import initialState from "../api/example-data.json";

const TodoContext = React.createContext();

const randomId = () => Math.random().toString();

const createItem = (title) => ({ id: randomId(), title });

function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, createItem(action.payload)]
    case "remove":
      return state.filter((item) => item.id !== action.payload)
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
