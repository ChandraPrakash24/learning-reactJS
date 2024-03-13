import { useEffect, useState } from "react"; 
import RestrountComponent from "./RestrountComponent";
// import {RestaurantList} from "../constaints";
import MultipleShimmers from "./MultipleShimmer";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useOnline from "../../utils/useOnline";

const BodyComponent = () => {
  
  const [restaurents, setRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    getData();
  },[])

  async function getData() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();
    // setRestaurents(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info);
    setRestaurents(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // data.cards[3].card.card.gridElements.infoWithStyle.restaurants[0].info
    // setRestaurents(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(jsonData.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);
  }

  // console.log("rerenderd()");

  // is online custome hook
  const isOffline = useOnline();

  if(!isOffline){
    return <h1>Offline</h1>;
  }



  // // early return
  // if(!restaurents) return null;

  // if(restaurents?.length === 0) return <h1>No Restaurent Match Your Filter</h1>

    // return (restaurents.length === 0) ? <Shimmer/> : (
    return(restaurents && restaurents.length === 0) ? <MultipleShimmers/> : (
      <>
      <div className="search-container py-3 space-x-4 mt-1">
        <input type="text" className="search-input border border-gray-300 rounded-md p-1 ml-[45vw]" placeholder="Search" value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="button" className="search-btn py-1.5 px-3 rounded-md bg-purple-200 hover:bg-purple-300" onClick={() => {
          // filter data
          if(searchText.includes(' ') || searchText.trim().length === 0){

          } else{
            const data = filterData(searchText, restaurents);
            setRestaurents(data);
            // const [restaurents, setRestaurents] = useState(RestaurantList);

          }
          // seta restauro data
          // setTimeout(()=>{
          // if(data.length !== RestaurantList.length){
          // setRestaurents(RestaurantList);
          // }
          // },2000);
        }} >Search</button>
      </div>
      <div className="resto-list flex flex-wrap justify-center gap-1">
        {
          restaurents.map(restaurantListObj => (
            <Link to={"/restaurent/" + restaurantListObj.info.id} key={restaurantListObj.info.id}>
              <RestrountComponent {...restaurantListObj.info} />
            </Link>
          ))
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