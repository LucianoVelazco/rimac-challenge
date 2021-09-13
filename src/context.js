import React, { useContext, useState } from 'react'


const UserContext = React.createContext({})

export function useUserContext () {
  return useContext(UserContext)
}

export function UserProvider ({ children }) {
  const [user, setUser] = useState(
    {
      email:'',
      name:''
    }
  )

  // ? Handle Subscription Edit WorkspaceInfo
 
  function handleUser (user) {
    return setUser(user)
  }

  const value = {
    user,
    handleUser
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
