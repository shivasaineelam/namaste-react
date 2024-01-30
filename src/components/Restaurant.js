import {IMG_URL} from "../utils/constants";
const Restaurant=(props)=>
 {
    const {resData}=props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData?.info;
     return (
    <div className="res-card" >
        {<img  className="res-img" src={IMG_URL+cloudinaryImageId}/> }
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h3>{avgRating} rating</h3>
        <h3>{resData.info.sla.deliveryTime} minutes</h3>
        <h3>{resData.info.costForTwo}</h3> 
    </div>
);
};
export default Restaurant;