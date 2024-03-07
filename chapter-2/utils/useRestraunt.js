import { useState, useEffect } from "react";

const useRestraunt = (id) => {
    // manatining state
    const [RestaurentMenuInfoData, setRestaurentMenuInfoData] = useState();
    
    // api call
    useEffect(()=>{
        getRestaurentInfo();
    },[]);
    
    async function getRestaurentInfo() {
        const RestaurentInfoData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=" + id + "&catalog_qa=undefined&submitAction=ENTER");
    
        const parsedRestaurentInfoData = await RestaurentInfoData.json();
        // console.log(parsedRestaurentInfoData.data);
        //data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[6].card.info.name
        setRestaurentMenuInfoData(parsedRestaurentInfoData);
    }

    // rerturning data
    return RestaurentMenuInfoData;
}

export default useRestraunt;