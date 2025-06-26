import React, { useContext } from 'react'
import { AuthorContext } from '../Author'

const Header = () => {
    const {user}  =   useContext(AuthorContext)
  return (
    <>
      <header className='header_part'>
          <h1>Welcome   {user.name}</h1>
      </header>
     
    </>
  )
}

export default Header
