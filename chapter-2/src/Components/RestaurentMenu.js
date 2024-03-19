import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constaints";
import MultipleShimmer from "./MultipleShimmer";
import useRestraunt from "../../utils/useRestraunt";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const RestaurentMenu = () => {
  const param = useParams();
  // const { id } = useParams(); // destructure on the fly
  // console.log(param);
  const { id } = param; // destructure of param
  
  // custom hook
  const RestaurentMenuInfoData = useRestraunt(id);

  const dispatchItem = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatchItem(addItem(item));
  };


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

  return !RestaurentMenuInfoData ? (
    <MultipleShimmer />
  ) : (
    <div>
      <div>
        <h1>Restro Menue</h1>
        <h1>Restro id : {id}</h1>
        {/* <h1>{RestaurentMenuInfoData.data.cards[0].card.card.info.name}</h1> */}
        {/* {RestaurentMenuInfoData && RestaurentMenuInfoData.data && RestaurentMenuInfoData.data.cards && RestaurentMenuInfoData.data.cards.length > 0 && (
                                <h1>{RestaurentMenuInfoData.data.cards[0].card.card.info.name}</h1>
                        )} */}
        {/*      OR             */}
        {/* {console.log(RestaurentMenuInfoData.data.cards[0].card.card.info.name)} */}
        <h1>
          {RestaurentMenuInfoData?.data?.cards[0]?.card?.card?.info?.name}
        </h1>
        <h1>
          {RestaurentMenuInfoData?.data?.cards[0]?.card?.card?.info?.id}
        </h1>
        <h1>
          {RestaurentMenuInfoData?.data?.cards[0]?.card?.card?.info?.city}
        </h1>
        <h1>
          {
            RestaurentMenuInfoData?.data?.cards[0]?.card?.card?.info
              ?.avgRating
          }
        </h1>
        <button className="m-2 p-2 bg-green-200 rounded-md border border-green-500 hover:bg-green-300" onClick={() => handleAddItem(RestaurentMenuInfoData?.data?.cards[0]?.card?.card?.info?.name)}>Add</button>
        <img
          height={200}
          width={200}
          src={
            IMG_CDN_URL +
            RestaurentMenuInfoData?.data?.cards[0]?.card?.card?.info
              ?.cloudinaryImageId
          }
        />
        {/* <h1>{RestaurentMenuInfoData}</h1> */}
        {/* <h1>Restro id : {param.id}</h1>  // not destructure of param
                        <h1>Restrounnt {param.id}</h1> */}

        {/* {RestaurentMenuInfoData?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name} */}
      </div>

      <div>
        <h2>Menu</h2>
        <ul>
          {/* {console.log(
              RestaurentMenuInfoData?.data?.cards[2]?.groupedCard?.cardGroupMap
                ?.REGULAR?.cards[1]?.card?.card?.itemCards
            )}
            {console.log(
              RestaurentMenuInfoData?.data?.cards[2]?.groupedCard?.cardGroupMap
                ?.REGULAR?.cards[1]?.card?.card?.itemCards[0].card.info.name
            )} */}
          {/* {console.log([1].card.info.name)} */}

          {/* {RestaurentMenuInfoData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
                (item) => (
                    <li
                    key={
                        item.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1]
                        .card.card.itemCards[0].card.info.id
                    }
                    >
                    item.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name
                    </li>
                )
                )} */}

          {/* {RestaurentMenuInfoData &&
              RestaurentMenuInfoData.data &&
              RestaurentMenuInfoData.data.cards &&
              RestaurentMenuInfoData.data.cards[2] &&
              RestaurentMenuInfoData.data.cards[2].groupedCard.cardGroupMap
                .REGULAR.cards[1] &&
              RestaurentMenuInfoData.data.cards[2].groupedCard.cardGroupMap
                .REGULAR.cards[1].card.card.itemCards &&
              RestaurentMenuInfoData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
                (item) => (
                  <li
                    key={
                      item.data.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.itemCards[0].card.info.id
                    }
                  >
                    {
                      item.data.cards[2].groupedCard.cardGroupMap.REGULAR
                        .cards[1].card.card.itemCards[0].card.info.name
                    }
                  </li>
                )
              )} */}

          {RestaurentMenuInfoData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.length > 0 ? (
            // If REGULAR.cards[1] is not empty, render its itemCards
            RestaurentMenuInfoData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item) => (
              <li key={item.card.info.id}>{item.card.info.name}</li>
            ))
          ) : (
            // If REGULAR.cards[1] is empty, render REGULAR.cards[2]'s itemCards
            RestaurentMenuInfoData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item) => (
              <li key={item.card.info.id}>{item.card.info.name}</li>
            ))
          )}


          {/* {Object.values(RestaurentMenuInfoData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map(
              (item) => (
                <li key={item.card.info.id}>{item.card.info.name}</li>
              )
            )} */}
          {/* {RestaurentMenuInfoData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
              (item) => (
                <li key={item.card.info.id}>{item.card.info.name}</li>
              )
            )} */}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;