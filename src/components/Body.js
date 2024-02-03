import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [lir, setlir] = useState([]);
  const [fillir, setfillir] = useState([]);
  const [inputtext, setinputtext] = useState("");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlir(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfillir(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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
      <div className="search">
        <input
          type="text"
          value={inputtext}
          className="search-text"
          onChange={(e) => {
            setinputtext(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setfillir(
              lir.filter((ob) =>
                ob.info.name.toLowerCase().includes(inputtext.toLowerCase())
              )
            );
          }}
          className="button"
        >
          search
        </button>
      </div>

      <button
        className="search"
        onClick={() => {
          setfillir(fillir.filter((ob) => ob.info.avgRating > 4));
        }}
      >
        click me!
      </button>
      <div className="res-container">
        {fillir &&
          fillir.map((ob) => ( 
            <Link key={ob.info.id} to={"/restaurant/" + ob.info.id}>
              <Restaurant resData={ob} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
