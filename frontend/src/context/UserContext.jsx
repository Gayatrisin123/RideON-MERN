import React , {createContext} from 'react'
export const UserDataContext = createContext();

const UserContext = ({children}) => {

   const [user, setUser] = React.useState({
    email: '',
    fullName: {
      firstName: '',
        lastName: ''
    },
   });

  return (
    <div>
      <UserDataContext.Provider value = {[user, setUser]}>
        {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
