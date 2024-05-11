import { useDispatch, useSelector } from "react-redux";
import ItemList from './ItemList';
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch()

    const handleClearCart = ()=>{
            dispatch(clearCart())
    }

  return (
    <div className="font-bold m-auto w-6/12">
       <button className="m-8 p-4 rounded-lg bg-amber-700 text-white" onClick={handleClearCart}>Clear Cart</button>
       {
        cartItems.length === 0 ? (<h1>Your cart is empty please add something </h1>) : (<ItemList items = {cartItems}/>)
       }
        

    </div>
  );
};
export default Cart;
