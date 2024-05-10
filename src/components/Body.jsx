import React, { useEffect, useState } from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext } from 'react';
import UserContext from '../utils/Context';



const Body = ()=>{
  const onlineStatus = useOnlineStatus();
  const [inputText,setInputText] = useState('')
  const [cardDispaly ,setCardDisplay] = useState([])
  const [res, setRes] = useState([])
  const {loggedInUser,setUsername} = useContext(UserContext);


 async function getResInfo (){
  const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
  const response = await data.json();
  setCardDisplay(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

useEffect( ()=>{
 getResInfo()
},[])

  const bestHandler = () =>{
    const bestRes = cardDispaly.filter((data)=>
      data?.info.avgRating >=4
    ) 
      setRes(bestRes);
  }

if(onlineStatus===false){
  return <h1>You are not connected to the Internet! Please check your internet connection</h1>
}
  
 return (
    <div className='flex flex-col items-center'>

  <div className='h-14 w-full  flex items-center p-4'>
  <input placeholder='Search' className="px-2 border border-black " value={inputText} onChange={(e)=>{setInputText(e.target.value)}}/>
 <button 
 onClick ={()=>{
  const fiteredList =  cardDispaly.filter((data)=>
        data?.info?.name.toLowerCase().includes(inputText.toLowerCase())
      )
      setRes(fiteredList)
 }} 
 className="px-4 m-4 py-0.5 bg-green-300 text-slate-900 rounded-lg" >Search</button>
 <button className="bg-slate-600 m-4 px-4 py-0.5 text-white rounded-md" onClick={bestHandler}>Best Pick</button>
 <label className='mr-2'>Username</label>
 <input className='border border-black p-2 outline-none' value={loggedInUser} onChange={(e)=>(setUsername(e.target.value))}/>
  </div>
  <div className='flex flex-wrap m-4 p-4'>
  {
  cardDispaly.length === 0 && res.length === 0 ? (<Shimmer/>) : res.length === 0 ? 
  (cardDispaly.map((data,index)=> <Link  key={index} to={'/resturant/'+data?.info?.id}> <Card  data={data} /> </Link>)):
  (res.map((data,index)=><Link  key={index} to={'/resturant/'+data?.info?.id}> <Card data={data} key={index}/> </Link>))
 }
  </div>
 
</div>
 )
}

export default Body;