import Restaurant, { offercomponent } from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useresinfo from "../utils/useresinfo";

const Body = () => {
  const [inputtext, setinputtext] = useState("");
  const listofrestaurant = useresinfo();
  const [dummylistofrestaurant, setdummylistofrestaurant] = useState([]);
  useEffect(() => {
    setdummylistofrestaurant(listofrestaurant);
  }, [listofrestaurant]);
  if (!listofrestaurant || listofrestaurant.length === 0) {
    return <Shimmer />;
  }
  const Offercomponent = offercomponent(Restaurant);
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <input
            type="text"
            value={inputtext}
            className="w-60 m-4 p-2 border-2 border-solid border-black rounded-lg "
            onChange={(e) => {
              setinputtext(e.target.value);
            }}
            placeholder="search for restaurant and food"
          />
        </div>
        <div>
          <button
            onClick={() => {
              setdummylistofrestaurant(
                listofrestaurant.filter((ob) =>
                  ob.info.name.toLowerCase().includes(inputtext.toLowerCase())
                )
              );
            }}
            className="bg-green-200 m-4 px-4 py-2 rounded-lg "
          >
            search
          </button>
        </div>

        <div>
          <button
            className="bg-gray-200 m-4 px-4 py-2 rounded-lg "
            onClick={() => {
              setdummylistofrestaurant(
                dummylistofrestaurant.filter((ob) => ob.info.avgRating > 4)
              );
            }}
          >
            Filter top rated restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap m-4 p-4">
        {dummylistofrestaurant &&
          dummylistofrestaurant.map((ob) => {
            const object = ob.info.aggregatedDiscountInfoV3
              ? ob.info.aggregatedDiscountInfoV3
              : ob.info.aggregatedDiscountInfoV2;

            return (
              <Link key={ob.info.id} to={"/restaurant/" + ob.info.id}>
                {"header" in object && "subHeader" in object ? (
                  <Offercomponent resdata={ob} />
                ) : (
                  <Restaurant resdata={ob} />
                )}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
