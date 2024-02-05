import { IMG_URL } from "../utils/constants";
const Restaurant = (props) => {
  const { resdata } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resdata?.info;
  return (
    <div className="w-[250px]   m-4 p-4 rounded-lg bg-gray-300 shadow-lg">
      {
        <img
          className="w-[240px] h-[200px] bg-cover"
          src={IMG_URL + cloudinaryImageId}
        />
      }
      <h2 className="mt-3 font-bold">{name}</h2>
      <h3
        className="break-words mt-2
      "
      >
        {cuisines.join(",")}
      </h3>
      <h3>{avgRating} ⭐rating</h3>
      <h3>{resdata.info.sla.deliveryTime} minutes</h3>
      <h3>{resdata.info.costForTwo}</h3>
    </div>
  );
};
export const offercomponent = () => {
  return (props) => {
    const { resdata } = props;
    const object =
      resdata.info.aggregatedDiscountInfoV3 ||
      resdata.info.aggregatedDiscountInfoV2;

    return (
      <div>
        <label className="bg-black text-white   m-2 absolute p-2 rounded-lg ">
          {object.header &&
            object.subHeader &&
            object.header + "  " + object.subHeader}
        </label>
        <Restaurant resdata={resdata} />
      </div>
    );
  };
};
export default Restaurant;
