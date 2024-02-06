import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResmenuhook from "../utils/useResmenuhook";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

function ResMenu() {
  const { resId } = useParams();
  const resinfo = useResmenuhook(resId);
  const [showindex, setshowindex] = useState(-1);
  if (resinfo === null) {
    return <Shimmer />;
  }
  const { cards } = resinfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const { name, cuisines } = resinfo?.data?.cards[0]?.card?.card?.info;
  const categories = cards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return (
    <div className="text-center m-6 ">
      <h1 className="font-bold my-6 text-2xl"> {name}</h1>
      <p className="font-bold text-lg"> {cuisines.join(",")}</p>
      {categories.map((c, ind) => (
        <RestaurantCategory
          key={ind}
          data={c.card.card}
          showitem={ind === showindex}
          index={ind}
          f={(p1) => {
            setshowindex(p1);
          }}
        />
      ))}
    </div>
  );
}

export default ResMenu;
