import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useonlinestatus from "../utils/useonlinestatus";

const Header = () => {
  const [btn, setbtn] = useState("Login");
  const value = useonlinestatus();
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

          <li className="px-4">cart</li>
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
        </ul>
      </div>
    </div>
  );
};
export default Header;
