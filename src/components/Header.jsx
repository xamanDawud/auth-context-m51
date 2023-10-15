import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const Header = () => {
  let { user, logOut } = useContext(authContext);
  // console.log(user.email);
  // Logout User
  let logoutHandler = () => {
    logOut()
      .then(() => {})
      .catch((e) => {
        console.log(e.message);
      });
  };
  let menus = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
      <li>
        <NavLink to={"/visitors"}>Visitors</NavLink>
      </li>
      <li>
        <NavLink to={"/checkout"}>Check-Out</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-200 rounded-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menus}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Selim Store</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menus}</ul>
      </div>

      <div className="navbar-end">
        {user && <p>{user.email}</p>}
        {user ? (
          <a onClick={logoutHandler} className="btn">
            Logout
          </a>
        ) : (
          <>
            <Link to={"/login"} className="btn">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
