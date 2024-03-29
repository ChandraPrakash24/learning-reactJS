import { IMG_CDN_URL } from "../constaints";

// restrorent cards
// const RestrountComponent = (props) => {
    const RestrountComponent = ({ cloudinaryImageId, name, cuisines, avgRating, sla }) => {
        // const lastMileTravelString = sla.lastMileTravelString;
        // console.log(props);
        // console.log(props.name);
        // console.log(props.availability.nextCloseTime);
        // console.log(props.sla.lastMileTravelString);
        // const {  } =  restauro.info;
        // const { lastMileTravelStringg } = lastMileTravelString.sla;
        return(
          // <div className="card-container w-56 p-2 m-2 shadow-lg bg-green-50">
          //   <img src={IMG_CDN_URL + cloudinaryImageId} alt="food-pic" />
          //   <h4 className="font-bold text-xl" >{name}</h4>
          //   <h5>{cuisines.join(", ")}</h5>
          //   <h6>{avgRating} Stars</h6>
          //   <h6>{sla.lastMileTravelString ?? "1.1 km"} minutes</h6>
          // </div>
          <div className="card-container w-52 h-[400px] p-2 m-2 shadow-lg bg-green-50 flex flex-col rounded-md">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="food-pic" className="w-52 h-52 object-cover" />
            <h4 className="font-bold text-xl">{name}</h4>
            <h5 className="text-gray-700">{cuisines.join(", ")}</h5>
            <h6 className="text-gray-600">{avgRating} Stars</h6>
            <h6 className="text-gray-600">{sla.lastMileTravelString ?? "1.1 km"} minutes</h6>
          </div>
        );
      };

export default RestrountComponent;