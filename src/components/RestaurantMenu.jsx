
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useResturantMenu from '../utils/useResturantMenu';
import RestaurantCategories from './RestaurantCategory';


const ResturantMenu = () =>{
    // const [resInfo,setResInfo] = useState(null)
    const {resId} = useParams();
    const resInfo = useResturantMenu(resId)



if( resInfo === null ) return <Shimmer/>;

const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards



const {name,cuisines,costForTwoMessage,avgRating} = resInfo?.cards[2]?.card?.card?.info
const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card


    return (<div className="text-center">
        <h1 className='font-bold my-6 text-2xl'>{name}</h1>
        <h3 className='font-bold '>{cuisines.join(", ")}-{costForTwoMessage}</h3>
       {/* Categories Accordians*/}
       {
        categories.map((category,index)=>{
            return <RestaurantCategories key={index} data={category?.card?.card}/>
        })
       }
    </div>)
}
export default ResturantMenu;
 {/* 
        <h4>{costForTwoMessage}</h4>
        <h4>{avgRating}</h4>
        <ul>
                {
                    itemCards.map((res)=><li key={res.card.info.id}>{res.card.info.name}-Rs.{res.card.info.finalPrice/100 || res.card.info.defaultPrice/100 ||  res.card.info.price/100}</li>)
                }
        </ul> */}