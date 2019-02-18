import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import './LoginForm.css';
import './OrderListView.css';
import LoginForm from './LoginForm';
import OrderView from './OrderListView';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer';
import orderReducer from './reducers/orderReducer';
const middleware = applyMiddleware(thunk);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const allReducers = combineReducers({
    user:userReducer,
    orders:orderReducer
});
const store = createStore(allReducers, composeEnhancer(middleware));


ReactDOM.render(<Provider store={store}>
    <Router>
        <div>
            <Route exact component={OrderView} path="/" />
            <Route component={LoginForm} path="/login" />
            <Route component={OrderView} path="/orders" />
        </div>
    </Router></Provider >, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

