import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import NoteReducer from "./Reducers/NoteReducer";
import App from "./App";
import "./index.css";
import * as serviceWorker from './serviceWorker';

// create store
var store = createStore(NoteReducer);

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>, document.querySelector('#container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();