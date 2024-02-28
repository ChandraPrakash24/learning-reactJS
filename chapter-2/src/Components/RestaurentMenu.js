import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
    const param = useParams();
    // const { id } = useParams(); // destructure on the fly
    // console.log(param);
    const { id } = param; // destructure of param

    const [RestaurentMenuInfoData, setRestaurentMenuInfoData] = useState();
    useEffect(()=>{
        getRestaurentInfo();
    },[]);
    
    async function getRestaurentInfo() {
        const RestaurentInfoData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=84070&catalog_qa=undefined&submitAction=ENTER");
    
        const parsedRestaurentInfoData = await RestaurentInfoData.json();
        // console.log(parsedRestaurentInfoData.data);
        //data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[6].card.info.name
        setRestaurentMenuInfoData(parsedRestaurentInfoData);
    }
    
    // console.log(parsedRestaurentInfoData);
    // console.log(RestaurentMenuInfoData);
    // setTimeout(()=>{console.log(RestaurentMenuInfoData.data.cards[0].card.card.info.name);},10000)
    //     OR
    // useEffect(() => {
    //     if (RestaurentMenuInfoData) {
    //         // setTimeout(() => {
    //         //     console.log(RestaurentMenuInfoData.data.cards[0].card.card.info.name);
    //         // }, 10);
            
    //         console.log(RestaurentMenuInfoData.data.cards[0].card.card.info.name);
    //     }
    // }, [RestaurentMenuInfoData]);

    // console.log(RestaurentMenuInfoData.data.cards[0].card.card.info.name);
    
    return (
        <div>
        <h1>Restro Menue</h1>
        <h1>Restro id : {id}</h1>
        {/* <h1>{RestaurentMenuInfoData.data.cards[0].card.card.info.name}</h1> */}
        {RestaurentMenuInfoData && RestaurentMenuInfoData.data && RestaurentMenuInfoData.data.cards && RestaurentMenuInfoData.data.cards.length > 0 && (
                <h1>{RestaurentMenuInfoData.data.cards[0].card.card.info.name}</h1>
            )}
        {/* <h1>{RestaurentMenuInfoData}</h1> */}
        {/* <h1>Restro id : {param.id}</h1>  // not destructure of param
        <h1>Restrounnt {param.id}</h1> */}
    </div>
  );
};

export default RestaurentMenu;