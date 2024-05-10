import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import UserContext from '../utils/Context';



const Root = () => {
const [username,setUsername] = useState();
const data = useContext(UserContext)



useEffect(()=>{
  const data = {
    name:"Aman kumar singh",
  } 
  setUsername(data.name);
},[])

  return (
    <>
<UserContext.Provider value={{ loggedInUser:username,setUsername }}>
    <Navbar/>
    <Outlet/>
</UserContext.Provider>
    </>
  )
}

export default Root