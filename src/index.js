import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import {createBrowserHistory} from "history";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {routerMiddleware,ConnectedRouter} from 'connected-react-router'
import {Provider} from "react-redux";
import Layout from 'components/layout'
import createRootReducer from "reducers";
const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
let store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout />
        </ConnectedRouter>
    </Provider>, document.getElementById('root'))

