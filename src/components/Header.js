import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useonlinestatus from "../utils/useonlinestatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setbtn] = useState("Login");
  const cartitems = useSelector((store) => store.cart.items);
  const value = useonlinestatus();
  const { loggedinUser } = useContext(UserContext);
  const lastname = useSelector((store) => store.user.name);
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
      <Link to="/">
        <div className="">
          <img className="w-40" src={LOGO_URL} />
        </div>
      </Link>
      <div className="flex item-center">
        <ul className=" flex m-4 p-4 ">
          <li className="px-4">
            online status{value === "true" ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>

          <Link to="/cart">
            <li className="px-4 font-3xl">🛒({cartitems.length}items)</li>
          </Link>
          <li className="px-4">
            <button
              className=" px-4 py-1 border-solid border-b-2 bg-blue-300"
              onClick={() => {
                btn == "Login" ? setbtn("Logout") : setbtn("Login");
              }}
            >
              {btn}
            </button>
          </li>
          <li className=" font-bold  text-xl">
            {loggedinUser + " " + lastname}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
