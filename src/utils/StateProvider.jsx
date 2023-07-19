import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children, initState, reducer }) => (
  <StateContext.Provider value={useReducer(reducer, initState)}>
    {children}
  </StateContext.Provider>
);

export const useStateProvider = () => useContext(StateContext);
