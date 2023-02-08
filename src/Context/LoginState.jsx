import React, { useState } from 'react'
import LoginContext from './LoginContext'

const Login = JSON.parse(localStorage.getItem("Login"))  || false
console.log(Login)
const LoginState = (props) => {
    const [loginStatus,setLoginStatus]= useState(Login)


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