import { useState } from "react"
import ItemList from "./ItemList"


const RestaurantCategories = ({data,showItem ,setShowIndex}) =>{
    
    const clickHandler = () =>{
        setShowIndex()
    }

    const {title,name,type,vegOnlyDetails} = data 
 
    // if(data.categories != undefined){
    //     data.categories.map((data)=>{
    //         return console.log(data);
    //     })
    // }

    
    
    return (<div>
        {/* Header */}
        <div className="w-7/12 mx-auto my-4 bg-orange-300 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={clickHandler}>
            <span className="font-bold">{title || name || type || vegOnlyDetails.title} </span>
            <span>↧</span>
            </div>
           { showItem && < ItemList items={data.itemCards||data.categories}/>   } 
        </div>
        {/* Body Accordian */}
           
    </div>)
}
export default RestaurantCategories;