import RestrountComponent from "./RestrountComponent";
import {RestaurantList} from "../constaints";

const BodyComponent = () => {
    return(
      <div className="resto-list">
  
      {
        RestaurantList.map(
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
    );
  };

  export default BodyComponent;