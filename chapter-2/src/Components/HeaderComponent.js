// import FoodFireLogo from "@/Images/Food Fire Logo.png"
// import FoodFireLogo from "../chapter-2/Images/Food Fire Logo.png"
import { useState } from "react";
import FoodFireLogo from "../../Images/Food Fire Logo.png"

const loggedIn = () => {
  // make api cal here for auth and get succes or failurse response
  return true; // mimicking succes response
}

// navbar
const HeaderComponent = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


    return(
      <div className="header-container" >
        <a href="/">
          <img src={FoodFireLogo} alt="logo-pic" />
        </a>
        <div className="nav-item">
          <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li><i className="fa-solid fa-cart-shopping"></i></li>
              {
                isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}>Logout</button> : <button onClick={()=> setIsLoggedIn(true)} >Login</button>
              }
          </ul>
        </div>
      </div>
    );
  };

  export default HeaderComponent;

  // Q js expression vs satatement
  // Q JSX currley braces
  // Q Diff algo is written on react core liberary and dom update is happen via react-dom
  // Q React recounsiletion work same to same in react native