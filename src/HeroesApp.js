import React from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthContext } from './auth/AuthContext'
import { useReducer } from 'react'
import { authReducer } from './auth/authReducer'
import { useEffect } from 'react'

const init = () =>{
  return JSON.parse(localStorage.getItem('user')) || {logged:false} //reviso el local storage para ver si existe el objeto

}





export const HeroesApp = () => {
      const [user,dispatch] = useReducer(authReducer,{},init)

      
      
useEffect(() => {

  localStorage.setItem('user',JSON.stringify(user));

}, [user])




    return (
        <AuthContext.Provider value={{user,dispatch}}>
<AppRouter />

        </AuthContext.Provider>
        
    )
}
