import React from "react";
import { IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
  const { data } = props;
  const dispatch = useDispatch();

  return (
    <div>
      {data.map((item, ind) => (
        <div key={ind} className="my-2 p-2 border-b-2 border-gray-100 flex ">
          <div className="text-left w-3/4">
            <span className="font-bold">{item.card.info.name}</span>
            <span className="font-bold">
              -₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p>
              {item.card.info.ratings.aggregatedRating.rating && (
                <span>{item.card.info.ratings.aggregatedRating.rating}⭐</span>
              )}{" "}
            </p>
            <p className="text-xs mt-6 mb-4">{item.card.info.description}</p>
          </div>
          {
            <div className=" w-1/4 ">
              <button
                className="absolute  p-2 rounded-lg bg-white  text-green-500"
                onClick={() => dispatch(addItem(item))}
              >
                add +
              </button>
              <img
                className="rounded-lg "
                src={IMG_URL + item.card.info.imageId}
              ></img>
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default ItemList;
