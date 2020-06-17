import React, { createContext, useContext, useReducer, useState } from "react";

// Initialize context with the default theme
const initialState = {
  widgetBackgroundColor: "#ffffff",
  gridBackGroundColor: "#D9E0EC",
  selectedWidgetBackgroundColor: "#D9E0EC",
  primary: "#2ce0d0",
  secondary: "#903dc9",
  extendedColors: ["#33b3be", "#8763d2", "#136d7d", "#b981d5"]
};

const ThemeContext = createContext(initialState);

// Reducer to handle dispatched actions that change context
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE THEME": {
      return {
        ...state,
        ...payload
      };
    }
    default:
      return state;
  }
};

const ThemeProvider = props => {
  const [theme, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

/*
HOW TO USE AND CHANGE THE STATE IN THE APP:

//Use in functional component:

import { ThemeContext } from  <path to ThemeContext.js>;

const ThemedButton = () => {
  const { state, dispatch } = useContext(ThemeContext);
  return (
    <p>
      Hello, {context.user.name}!
    </p>
  );
}

//Use in class component:

import React, { Component } from 'react';
import { ThemeContext } from  <path to StateContext.js>;

class ThemedButton extends Component {
  static contextType = ThemeContext;

  render() {
    const {state, dispatch} = this.context;
    return (
    <p>
      Hello, {context.user.name}!
    </p>
    );
  }
}
*/
