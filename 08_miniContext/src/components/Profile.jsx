import React from 'react'
import userContext from '../context/userContext'
import { useState ,useContext} from 'react'

function Profile() {
    const {User} = useContext(userContext)
 if(!User) return <div>please Login ! </div>
 return <div>welcome {User.username}</div>
}

export default Profile
