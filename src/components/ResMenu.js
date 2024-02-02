import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

function ResMenu() {
  const [resinfo, setresinfo] = useState(null);
  const { resId } = useParams();
  const getdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=" +
        resId
    );
    const json = await data.json();
    setresinfo(json);
  };
  useEffect(() => {
    getdata();
  }, []);
  if (resinfo === null) {
    return <Shimmer />;
  }
  const { cards } = resinfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  return (
    <div>
      <h1> {resinfo.data.cards[0].card.card.info.name}</h1>
      <h1> {resinfo.data.cards[0].card.card.info.city}</h1>

      {cards &&
        cards.map((c, i) => (
          <div key={i}>
            <h1>{c.card.card.title}</h1>
            {c?.card.card.itemCards &&
              c.card.card.itemCards.map((item, i) => (
                <div key={i}>
                  <p>
                    {item.card.info.name} {item.card.info.price / 100}
                  </p>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
}

export default ResMenu;
