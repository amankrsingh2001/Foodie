import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import UserContext from '../utils/Context';
import { Provider } from 'react-redux';
import AppStore from '../utils/AppStore';


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
    <Provider store={AppStore}>
<UserContext.Provider value={{ loggedInUser:username,setUsername }}>
    <Navbar/>
    <Outlet/>
</UserContext.Provider>
</Provider>
    </>
  )
}

export default Root