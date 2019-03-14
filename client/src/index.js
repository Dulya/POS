import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/LoginForm.css';
import './css/OrderListView.css';
import './css/cardPanel.css';
import './css/header.css';
import Main from './views/Main';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';



ReactDOM.render(
    <Main />
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();



