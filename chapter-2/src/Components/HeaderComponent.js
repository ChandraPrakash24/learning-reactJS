// import FoodFireLogo from "@/Images/Food Fire Logo.png"
// import FoodFireLogo from "../chapter-2/Images/Food Fire Logo.png"
import FoodFireLogo from "../../Images/Food Fire Logo.png"

// navbar
const HeaderComponent = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default HeaderComponent;