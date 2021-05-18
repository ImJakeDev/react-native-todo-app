import * as React from "react";
import uuid from "react-native-uuid";
import initialState from "../api/example-data.json";

const TodoContext = React.createContext();

const randomId = () => uuid.v4().toString();

const createItem = (title) => ({ id: randomId(), title });

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, createItem(action.payload)];
    case "REMOVE_TODO":
      return state.filter((item) => item.id !== action.payload);
    case "EDIT_TODO":
      return state.map((item, index) => {
        if (item.id !== action.payload.id) {
          // This isn't the item we care about - keep it as-is
          return item;
        }
        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          ...action.payload,
        };
      });
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
