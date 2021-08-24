import { createSlice } from "@reduxjs/toolkit"; 

//createSlice allows us to create reducer function in an organized way
//create a 
const initialValue = ""
export const themeSlice = createSlice({
    name : "theme", //name of the state, this name will be used as a key fore reducer and passed to configureStore() in Index.js
    initialState : {value : initialValue}, //intial state of state
    //instial state will have a value prop and this value prop will contain an object having initial values for each of our state

    reducers : {
        changeColor : (state , action ) => {
            state.value = action.payload
        },
    }

})


// export login 
export const {changeColor} = themeSlice.actions
export default themeSlice.reducer