import React from 'react'
import { useSelector } from 'react-redux'


//useSelector hook allow us to grab values of state in components so that we can have access
//initialise a object using useSelector function
// const user = useSelector((state)=> {
//   return state.users.value
// })

//now we can access new state using user.values

const Profile = () => {

    const user = useSelector((state)=> {
        return state.users.value
    })

    const themeColor = useSelector((state)=> {
        return state.theme.value
    })
    console.log(themeColor);

    return (
        <div className = "profile" style={{color : themeColor}}> 
            <h1>Profile Page</h1>
            <p>Name : {user.name}</p>
            <p>Age :{user.age} </p>
            <p>Email :{user.email} </p>
            
        </div>
    )
}
 
export default Profile
