import { Star } from "lucide-react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const truncateName = (name) => {
    if (name.length > 25) {
      return name.substring(0, 25) + "...";
    }
    return name;
  };

  return (
    <div className="res-card ">
      <div className="zoom-out-container">
      
        <img
          className="res-logo zoom-out-image"
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt="res-logo"
        />
      </div>
      <div className="info-container">
        <span>{truncateName(resData.info.name)}</span><br />
        <span style={{ fontSize: '15px'}}> <Star strokeWidth={0} fill="green"  size={20}/> {resData.info.avgRatingString} | {resData.info.sla.slaString} | {resData.info.locality}</span>  <br />
        <span style={{color: "gray", fontSize: '14px', fontWeight: '600'}}>{resData.info.cuisines.join(", ")}</span>
      </div>
    </div>
  );
};


//pure function (not modify behaviour), higher order func
export const withPromotedLabel = (RestaurantCard) => {
  //return component
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
