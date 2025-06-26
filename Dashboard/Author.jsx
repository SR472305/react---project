import React, { createContext, useEffect, useState } from 'react'


export const AuthorContext = createContext()

const Author = ({children}) => {
    const [user, setuser] = useState("")


     useEffect(()=>{
        
            setuser({
                name : 'shyam',
                age : 23,
                email : "shyam@2350",
                course : "Java developer"
            })
            
        
     },[])
    return (
        <div>
            <AuthorContext.Provider value={{user,setuser}}>
               {children}
            </AuthorContext.Provider>
        </div>
    )
}

export default Author
