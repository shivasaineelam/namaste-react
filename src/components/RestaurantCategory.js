import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showitem, f, index }) => {
  const displayitem = () => {
    if (showitem === true) f(-1);
    else f(index);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto ">
        <div
          className="  flex justify-between  cursor-pointer my-2 p-4 shadow-lg bg-gray-50"
          onClick={displayitem}
        >
          <span className="font-bold ">
            {data.title}({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <div>{showitem && <ItemList data={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
