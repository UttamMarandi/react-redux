
import './App.css';
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import ChangeColor from "./Components/ChangeColor"

function App() {
  return (
    <div className="app">
      <Profile/>
      <Login/>
      <ChangeColor/>
    </div>
  );
}
// Redux is used to pass data between components.
//it helps in maintaining state of the app

//steps
//import configureStore in index.js
//import { Provider } from 'react-redux' in index.js

//initialize a store variable using configureStore
// const store = configureStore({
//   reducer : {
//     user:userReducer
//   }
// })
//it holds all of our global states

//wrap the <App/> component with <Provider/> so that all component can accces global state variables.
//pass the created store to store props of Provider
{/* <Provider store ={store}></Provider> */}

//create a file User.js that will contain the reducer funciton
//import { createSlice } from "@reduxjs/toolkit"; 
//head to User.js for further info


//We are set up
//In any file we want to access the global state we need to import useSelector() hook
//import { useSelector } from 'react-redux'
//In any file we want to modify the global state we need to import useDispatch hool
//import { useDispatch } from 'react-redux'

//To modify
//check login.js

//To access
//check profile.js







export default App;
