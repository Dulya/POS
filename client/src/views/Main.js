import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import OrderView from '../views/OrderListView';
import OrderItemView from '../views/OrderItemView';
import LoginForm from '../views/LoginForm';
import ModalContainer from '../views/ModalContainer';
import Nav from '../views/Nav';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import userReducer from '../reducers/userReducer';
import orderReducer from '../reducers/orderReducer';
import orderitemReducer from '../reducers/orderitemReducer';
import itemReducer from '../reducers/itemReducer';
import modalReducer from '../reducers/modalReducer';
import { validateUserDetails } from '../actions/userActions';


const middleware = applyMiddleware(thunk);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const allReducers = combineReducers({
    user: userReducer,
    orders: orderReducer,
    orderitems: orderitemReducer,
    items: itemReducer,
    modal: modalReducer
});

const store = createStore(allReducers, composeEnhancer(middleware));

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Nav />
                        <div className="content">
                            <Route exact component={OrderView} path="/" />
                            <Route component={LoginForm} path="/login" />
                            <Route component={OrderView} path="/orders" />
                            <Route component={OrderItemView} path="/order/:id" />
                            <Route component={ModalContainer} path="/modal" />

                        </div>
                    </div>
                </BrowserRouter >
            </Provider>
        );
    }
}

export default Main;
