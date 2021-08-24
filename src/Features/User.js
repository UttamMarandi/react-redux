import { createSlice } from "@reduxjs/toolkit"; 

//createSlice allows us to create reducer function in an organized way
//create a 
const initialValue = {
        name : "",
        age : 0,

    }
export const userSlice = createSlice({
    name : "users", //name of the state, this name will be used as a key fore reducer and passed to configureStore() in Index.js
    initialState : {value : initialValue}, //intial state of state
    //instial state will have a value prop and this value prop will contain an object having initial values for each of our state

    reducers : {
        login : (state , action ) => {
            state.value = action.payload
        },
        logout : (state) => {
            state.value = initialValue
        }

        //login is a reducer function. each reducer function takes a state and action parameter.State contains the intial state on load and keeps track of the current state
        //action is a object that contains two keys , a.payload and b.type
        //payload is information that you want to use in a function
        //type : diffrent types of action will trigger diffrent reducer funciton

        //in this app we want to set the default state to the payload that we receive when user logs in
    }

})


// export login 
export const {login , logout} = userSlice.actions
export default userSlice.reducer