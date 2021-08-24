import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux Imports
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import userReducer from "./Features/User"
import themeReducer from "./Features/Theme"

//conifgureStore() will create a store data structure which contains a reducer object that will contain all our global state
//wrap the <App/> component with <Provider/> so that all component can accces global state variables.
//pass the created store to store props of Provider

//reducer is a function 

const store = configureStore({
  reducer : {
    users:userReducer,
    theme: themeReducer
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

