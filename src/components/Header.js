import { LOGO_URL } from "../utils/constants";

const Header = () => (
  <div className="header">
    <div className="logo">
      <img src={LOGO_URL} />
    </div>
    <div className="nav-items">
      <ul className="items">
        <li>home</li>
        <li>orders</li>
        <li>address</li>
        <li>offers</li>
        <li>cart</li>
      </ul>
    </div>
  </div>
);
export default Header;
