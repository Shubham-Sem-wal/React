import {HEADER_LOGO} from "../utills/constants"


const Header = () => {
    return (
      <div className='Header'>
  
        <div className='logo-conatiner'>
          <img className='logo' src= {HEADER_LOGO} alt="logo" />
        </div>
        <div className='nav-items'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Cart</a></li>
          </ul>
  
        </div>
  
      </div>
    )
  }

  export default Header;