import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider }  from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from "./logger";
import reducer from './Components/reducers/index'
import App from './App';
import { BrowserRouter as Router} from "react-router-dom"
import "./App.css"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const middleware = applyMiddleware(thunk, logger);
const store = createStore (reducer , composeEnhancers(middleware));

ReactDOM.render(
  <Router>
    <Provider store={store}>
        <App />
    </Provider>
  </Router>, document.getElementById('root'));
  export default App;
