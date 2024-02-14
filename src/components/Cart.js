import React from "react";
import { IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center">
      <div className="w-6/12 p-2 m-4">
        <h1 className="font-bold text-green-600 ">CART ITEMS:</h1>
        {cartitems &&
          cartitems.map((item, ind) => (
            <div
              key={ind}
              className="my-4 p-2 border-b-2 border-gray-100 flex "
            >
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
                    <span>
                      {item.card.info.ratings.aggregatedRating.rating}⭐
                    </span>
                  )}{" "}
                </p>
                <p className="text-xs mt-6 mb-4">
                  {item.card.info.description}
                </p>
              </div>
              {
                <div className=" w-1/4 ">
                  <button
                    className="absolute  p-2 rounded-lg bg-white  text-green-500"
                    onClick={() => dispatch(removeItem(ind))}
                  >
                    remove -
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
    </div>
  );
};

export default Cart;
