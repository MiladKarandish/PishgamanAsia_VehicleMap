import { createContext, useState, useEffect } from 'react'

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState()

  useEffect(() => {
    const lsUserData = JSON.parse(localStorage.getItem('userData'))

    lsUserData ? setUserData(lsUserData.userToken) : setUserData(null)
  }, [])

  const value = { userData, setUserData }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContext
