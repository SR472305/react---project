import React from 'react'
import Author from './Author'
import Header from './Component/Header'
import Slidebar from './Component/Slidebar'
import Profilecard from './Component/Profilecard'
import "./style.css";

const Profile = () => {
  return (
     <Author>
         <Header />
         <Slidebar />
         <Profilecard />
     </Author>
  )
}

export default Profile
