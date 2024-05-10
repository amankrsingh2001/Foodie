import { useEffect, useState } from "react"
import { MENU_API,MENU_2_API } from '../utils/Constant';
const useResturantMenu = (resId) =>{

    const [resInfo,setResInfo]  = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch(MENU_API+resId+MENU_2_API)
        const response =await data.json();
        setResInfo(response.data)
    }
    return resInfo;
};
export default useResturantMenu