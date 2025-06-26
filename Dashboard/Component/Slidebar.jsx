import React, { useContext } from 'react'
import { AuthorContext } from '../Author'

const Slidebar = () => {
   const {user} = useContext(AuthorContext)
  return (
    <>
         <aside className='Sidebar'>
            <h1>Sidebar</h1>
            <h4><strong>Name : {user.name}</strong></h4>

            <h4><strong>Email : {user.email}</strong></h4>
            
         </aside>
    </>
  )
}

export default Slidebar
