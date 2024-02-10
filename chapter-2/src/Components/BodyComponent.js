import { useState } from "react"; 
import RestrountComponent from "./RestrountComponent";
import {RestaurantList} from "../constaints";

function filterData(searchText, wholeRestaurentList){
 const filterData = wholeRestaurentList.filter((restauro) => restauro.info.name.includes(searchText));
 return filterData;
}


const BodyComponent = () => {
  
  const [restaurents, setRestaurents] = useState(RestaurantList);
  const [searchText, setSearchText] = useState("");

    return(
      <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="button" className="search-btn" onClick={() => {
          // filter data
          const data = filterData(searchText, restaurents);
          // seta restauro data
          setRestaurents(data);
        }} >Search</button>
      </div>
      <div className="resto-list">
      {
        restaurents.map(
          restaurantListObj => <RestrountComponent {...restaurantListObj.info} key={restaurantListObj.info.id}/>
          )
      }
  
      {/* <RestrountComponent {...RestaurantList[0].info} lastMileTravelStringg={RestaurantList[0].info.sla.lastMileTravelString} /> */}
        {/* <RestrountComponent {...RestaurantList[0].info} />
        <RestrountComponent {...RestaurantList[1].info} />
        <RestrountComponent {...RestaurantList[2].info} />
        <RestrountComponent {...RestaurantList[3].info} />
        <RestrountComponent {...RestaurantList[4].info} />
        <RestrountComponent {...RestaurantList[5].info} /> */}
      </div>
      </>
    );
  };

  export default BodyComponent;