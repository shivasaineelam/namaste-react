import { useState, useEffect } from "react";

const useResmenuhook = (resId) => {
  const [resinfo, setresinfo] = useState(null);
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
  return resinfo;
};
export default useResmenuhook;
