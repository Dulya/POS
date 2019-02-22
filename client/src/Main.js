import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import OrderView from './OrderListView';
import LoginForm from './LoginForm';
import ModalContainer from './ModalContainer';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer';
import orderReducer from './reducers/orderReducer';
import orderitemReducer from './reducers/orderitemReducer';
import modalReducer from './reducers/modalReducer';
import { validateUserDetails } from './actions/userActions';


const middleware = applyMiddleware(thunk);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const allReducers = combineReducers({
    user: userReducer,
    orders: orderReducer,
    orderitems: orderitemReducer,
    modal:modalReducer
});

const store = createStore(allReducers, composeEnhancer(middleware));
store.dispatch(validateUserDetails());

class Main extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>

                        <div className="navbar">
                            <p>POS</p>
                            <div className="user_icon_div" >
                            <i className="glyphicon glyphicon-user" id="user_icon"></i>
                            </div>
                            <div className="user_Label">
                                user
                            </div>
                        </div>

                        <div className="content">
                            <Route exact component={OrderView} path="/" />
                            <Route component={LoginForm} path="/login" />
                            <Route component={OrderView} path="/orders" />
                            <Route component={ModalContainer} path="/modal" />
                        </div>
                    </div>
                </BrowserRouter >
            </Provider>

        );
    }
}

export default Main;