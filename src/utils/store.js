import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {
  
    const [idS, setId] = React.useState([])
    const [userS, setUser] = React.useState([])
    const [passS, setPass] = React.useState([])
  
    const store = {
      id: [idS, setId],
      user: [userS, setUser],
      pass: [passS, setPass],
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}