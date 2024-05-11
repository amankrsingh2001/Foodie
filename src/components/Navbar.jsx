import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/Context";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [loginVaue, setLoginValue] = useState("login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const { loggedInUser } = data;

  function loginHandler() {
    loginVaue === "login" ? setLoginValue("logout") : setLoginValue("login");
  }

  // Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  return (
    <div className="flex justify-between bg-[#F98866] h-24 shadow-lg mb-2 p-2">
      <div className="flex items-center h-full w-42 ml-6">
        <img
          className="w-full h-full"
          src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
        />
      </div>

      <div className="">
        <ul className="flex p-4 m-4">
          <li className="mx-4 text-green-300">Online:{onlineStatus ? " ✅" : " 🔴"}</li>
          <NavLink className="px-4  text-white" to="/">
            Home
          </NavLink>
          <NavLink className="px-4  text-white" to="/about">
            About
          </NavLink>
          <NavLink className="px-4  text-white" to="/contact">
            Contact
          </NavLink>
          <NavLink className=" text-white px-4" to="/services">
            Services
          </NavLink>
          <NavLink to="/cart">
          <li className="mx-4 text-white">
            Cart: {cartItems.length}
          </li>
          </NavLink>
          
          <li className="text-white" onClick={loginHandler}>{loginVaue}</li>
          <li className="text-white ml-[12px] font-bold ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
