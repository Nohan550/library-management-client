// FaBars PiBookOpenDuotone
import { FaBars } from "react-icons/fa";
import { PiBookOpenDuotone } from "react-icons/pi";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const pages = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-sky-500" : ""
        }
          to="/"
        >
          HOME
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-sky-500" : ""
        }
          to="/add-books"
        >
          ADD BOOKS
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-sky-500" : ""
        }
          to="/all-books"
        >
          ALL BOOKS
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-sky-500" : ""
        }
          to="/borrowed-books"
        >
          BORROWED BOOKS
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="mx-auto md:px-5   lg:max-w-[1150px] bg-base-100 ">
      <div className="lg:hidden pt-6 ">
        <Link className="lg:hidden" to="/">
          <div className="btn btn-ghost  flex  lg:block items-center font-semibold">
            <h1 className=" text-5xl text-sky-500">
              <PiBookOpenDuotone></PiBookOpenDuotone>
            </h1>
            <h1 className="text-4xl">
              <span className="text-sky-500">LI</span>BRA
            </h1>
          </div>
        </Link>
      </div>
      <div className="navbar py-4 lg:pt-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-4xl lg:hidden">
              <FaBars />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base font-medium"
            >
              {pages}
            </ul>
          </div>
          <Link className="hidden lg:block" to="/">
            <div className="btn btn-ghost  flex   items-center font-semibold">
              <h1 className=" text-5xl text-sky-500">
                <PiBookOpenDuotone></PiBookOpenDuotone>
              </h1>
              <h1 className="text-4xl">
                <span className="text-sky-500">LI</span>BRA
              </h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-base">{pages}</ul>
        </div>
        <div className="navbar-end ">
          <Link to="/login">
            {" "}
            <div className="px-[34px] py-[6px] font-medium rounded text-white bg-sky-500">
              Login
            </div>
          </Link>
        </div>
   
      </div>
    </div>
  );
};

export default Navbar;
