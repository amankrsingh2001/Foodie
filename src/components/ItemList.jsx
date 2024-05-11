import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
const ItemList = ({ items }) => {

    // Check if items is defined before mapping over it
    if (!items) {
        return <div>No items to display</div>;
    }
    const dispatch = useDispatch();

 const handleAddItem = (item)=>{
    //dispatch an Action
    dispatch(addItem(item))
 }

    return (
        <div>
            {
                items.map((item,index) => { return  <div key={index}>
                    <div className="border-b border-sky-700">
                        <span >{item?.card?.info?.name  }</span>
                        <p>{item?.card?.info?.description }</p>
                       
                    </div>
                    <div className="flex items-center justify-center">
                    <button onClick={()=>handleAddItem(item)} className="bg-black text-white m-4 p-4">Add Items</button>
                    </div>
                </div>})
            }
        </div>
    );
}

export default ItemList;
{/* <div key={index}>{item?.card?.info?.name}</div> */}