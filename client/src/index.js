import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from 'redux';
import { Provider }  from 'react-redux';
import thunk from 'redux-thunk';

import App from "./App";
import reducer from './reducers';
import { logger } from "./logger";
import "./Assets/App.css";

const store = createStore(reducer, applyMiddleware(thunk, logger))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

export default App;