import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import configureStore from '../src/store/configureStore'
import {startLoggedIn} from '../src/action/userAction'


const store = configureStore()

store.subscribe(()=>{
    console.log(store.getState())
})
console.log(store.getState())

if(localStorage.getItem('token')){
    store.dispatch(startLoggedIn(localStorage.getItem('token')))
}


const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));