import 'antd/lib/index.css';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory as History, HashRouter as Router} from 'react-router-dom';
import Routes from './router/index';
import store from './redux/store';

ReactDom.render(
    <Provider store={store}>
        <Router history={History}>
            <Routes></Routes>
        </Router>
    </Provider>,
document.getElementById('app')
);
