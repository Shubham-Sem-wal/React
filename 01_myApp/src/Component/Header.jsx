import {HEADER_LOGO} from "../utills/constants"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";


// let btnText = "Login";



const Header = () => {

  const [btnText , setbtnText] = useState("Login")

  const btnTextChanged = () => {
    if (btnText == "Login") setbtnText("Logout");
    else setbtnText("Login");
  }

  const onlineStatus = useOnlineStatus();


    return (
      <div className= "flex justify-between shadow-lg bg-pink-100" >
  
        <div className='logo-conatiner'>
         <Link to="/"> <img className='w-44' src= {HEADER_LOGO} alt="logo" /> </Link>
        </div>
        <div className='flex items-center '>
          <ul className="flex p-5 m-4" >
            <li className="px-5">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
            <li className="px-5"><Link to="/">Home</Link></li>
            <li className="px-5"><Link to="/about">About Us</Link></li>
            <li className="px-5"><Link to="/contact">Contact Us</Link></li>
            <li className="px-5"><a href="#">Cart</a></li>
            <button className="login-btn" onClick={btnTextChanged}>{btnText}</button>
          </ul>
  
        </div>
  
      </div>
    )
  }

  export default Header;