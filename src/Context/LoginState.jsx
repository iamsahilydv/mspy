import React, { useState } from 'react'
import LoginContext from './LoginContext'

const Login = JSON.parse(localStorage.getItem("Login"))
const LoginState = (props) => {
    const [loginStatus,setLoginStatus]= useState(Login || false)


    // const click =()=>{
    //     loginStatus===false?setLoginStatus(true):
    // }
  return (
    <LoginContext.Provider value= {{loginStatus,setLoginStatus}}>
        {props.children}
    </LoginContext.Provider>
  )
}

export default LoginState