// import FoodFireLogo from "@/Images/Food Fire Logo.png"
// import FoodFireLogo from "../chapter-2/Images/Food Fire Logo.png"
import { useState } from "react";
import FoodFireLogo from "../../Images/Food Fire Logo.png"
import { Link } from "react-router-dom";

const loggedIn = () => {
  // make api cal here for auth and get succes or failurse response
  return true; // mimicking succes response
}

// navbar
const HeaderComponent = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
      <div className="header-container flex p-2 justify-between items-center bg-green-100 shadow-md  rounded-md" >
        <a href="/">
          <img src={FoodFireLogo} className="h-20" alt="logo-pic" />
        </a>
        <div className="nav-item">
          <ul className="flex py-5 space-x-4">
              <li><Link to="/">Home</Link></li>
              <Link to="/about"> <li>About</li> </Link>
              <Link to="/instamart"> <li>Instamart</li> </Link>
              {/* <li><Link to="/about">About</Link></li> */}
              <Link to="/contact"> <li>Contact</li> </Link>
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
  // Q Never create component inside component
  // Q Never write useState inside if else and for loop
  // Q Never create or use useState outside your functional component
  // Q CDN assets vs local assets
  // Q Formik forms
  // Q what is the problem with anchor tag (it reffereshes whole page)
  // Q what is SPA (single page application) (does not make network call on different page jump and do not reffereshes the whole page)
  // Q what are two types of routing (client side (react-router-dom) and server side (file based in next js))
  // Q Diffrent between avgRating (int) vs avgRatingString (string)
  // Q what is Object.value() in JS
  // Q By default assets are default export?
  // Q Component benifets (moduler, readable, maintanable, testable, reusable) 