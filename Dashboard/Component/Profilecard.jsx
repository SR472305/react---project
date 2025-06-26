import React, { useContext } from 'react'
import { AuthorContext } from '../Author'

const Profilecard = () => {
    const {user} =useContext(AuthorContext)
  return (
    <div className='card' >
       <h1>Profile Dashboard</h1>

       <h3>Name : {user.name}</h3>
       <h3>Age : {user.age}</h3>
       <h3>Email : {user.email}</h3>
       <h3>Course : {user.course}</h3>
       
    
    </div>
  )
}

export default Profilecard
