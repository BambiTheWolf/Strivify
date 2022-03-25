import "./Sidebar.css";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { ImBooks } from "react-icons/im";

import Logo from "../../assets/spologo.png";

const Sidebar = () => {
  return (
    <div className="sidebar__wrap">
      <div className="top-part">
        <Link to={"/"}>
          <img src={Logo} className="logo" alt="sidebar-logo" />
        </Link>
        <Link to={"/"} className="menu__single selected__menu">
          <HiOutlineHome className="menu__item" /> Home
        </Link>
        <div className="menu__single">
          <BsSearch className="menu__item" /> Search
        </div>
        <div className="menu__single">
          <ImBooks className="menu__item" /> Books
        </div>
      </div>
      <div className="bottom-part">
        <button className="signup__btn btn">Sign up</button>
        <button className="login__btn btn">Login</button>
      </div>
    </div>
  );
};

export default Sidebar;
