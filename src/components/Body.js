import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [lir, setlir] = useState([]);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.2437197&lng=77.7172413&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlir(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (lir && lir.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <button
        className="search"
        onClick={() => {
          setlir(lir.filter((ob) => ob.info.avgRating > 3.8));
        }}
      >
        click me!
      </button>
      <div className="res-container">
        {lir && lir.map((ob) => <Restaurant key={ob.info.id} resData={ob} />)}
      </div>
    </div>
  );
};

export default Body;
