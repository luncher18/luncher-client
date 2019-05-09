import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider }  from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from "./logger";
import reducer from './reducers'
import App from './App';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const middleware = applyMiddleware(thunk, logger);
const store = createStore (reducer , composeEnhancers(middleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));