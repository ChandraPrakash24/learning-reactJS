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
          <div className="card-container">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="food-pic" />
            <h4 >{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h6>{avgRating} Stars</h6>
            <h6>{sla.lastMileTravelString ?? "1.1 km"} minutes</h6>
          </div>
        );
      };

export default RestrountComponent;