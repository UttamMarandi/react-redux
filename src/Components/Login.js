import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../Features/User'


//useDispatch hook is used to modify values of state
//intialise a funcition using useDispatch()
//const dispatch = useDispatch()
//dispatch() calls the reducer funtion that we have defined in reducers in CreateSlice()
//dispatch is function that will modify our state
//dispatch will take the reducer function i.e login and pass in an object which contains the values for the new state.
//the new state will become our current state

// {dispatch(login(
//   {name : "Uttam", age : 20, email : "uttam@gmail.com"}
//  ))}

//if we don't define action as a parameter in while defining the reducer funciton , then we can't pass payload to reducer within dispatch
//


const Login = () => {

    const dispatch = useDispatch()

    return (
        <div className="login">
            <button onClick={()=> {dispatch(login(
                {name : "Uttam", age : 20, email : "uttam@gmail.com"}
            ))}}>Login</button>

            <button onClick={()=> {dispatch(logout())}} >Log Out</button>
        </div>
    )
}

export default Login
