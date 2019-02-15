import React from 'react';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router';
import './index.css';
import './LoginForm.css';
import './OrderListView.css';
import LoginForm from './LoginForm';
import OrderView from './OrderListView';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

export default withRouter(
    <Route component={OrderView} path="./OrderListView" />
);

ReactDOM.render(<LoginForm/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

