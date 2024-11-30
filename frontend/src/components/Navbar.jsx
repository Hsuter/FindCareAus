import React, { useState, useEffect } from "react";
import { logo } from "../assets";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useHref, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/authSlice";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const [active, setActive] = useState(null);

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/Login");
    toast.warning("You've logged out", { position: "top-center" });
  };

  // Update the menu state based on screen size on component mount
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMenu(false); // Set menu to false for small screens
      } else {
        setMenu(true); // Set menu to true for larger screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-row justify-between text-green md:px-28   ">
      <div onClick={handleMenu} className="md:hidden flex z-[1000]">
        {menu ? (
          <div>
            <CloseIcon />
          </div>
        ) : (
          <div>
            {" "}
            <MenuIcon />
          </div>
        )}
      </div>
      <div className="flex md:flex-row flex-row-reverse">
        <div className="">
          <img src={logo} alt="onsite_homecare_logo " className="w-[150px]" />
        </div>
      </div>

      <div
        className={`${
          menu ? "flex " : "hidden"
        } items-center md:w-auto w-full md:relative absolute   md:bg-transparent bg-white z-[900] md:pt-0 pt-10 md:pl-0 pl-4 }`}
      >
        <ul className="flex md:flex-row  flex-col gap-6 font-medium  ">
          <li
            className="cursor-pointer"
            onMouseEnter={() => setActive(0)}
            onMouseLeave={() => setActive(-1)}
          >
            <Link to="/">
              {" "}
              <span
                className={`underline-animation ${
                  active === 0 ? "active" : ""
                }`}
              >
                Home
              </span>
            </Link>
          </li>
          <li
            className="cursor-pointer"
            onMouseEnter={() => setActive(1)}
            onMouseLeave={() => setActive(-1)}
          >
            {" "}
            <Link to="/#services">
              <span
                className={`underline-animation ${
                  active === 1 ? "active" : ""
                }`}
              >
                Services
              </span>
            </Link>
          </li>
          <li
            className="cursor-pointer"
            onMouseEnter={() => setActive(2)}
            onMouseLeave={() => setActive(-2)}
          >
            <Link to="/#about">
              <span
                className={`underline-animation ${
                  active === 2 ? "active" : ""
                }`}
              >
                About
              </span>
            </Link>
          </li>
          <li
            className="cursor-pointer"
            onMouseEnter={() => setActive(3)}
            onMouseLeave={() => setActive(-3)}
          >
            <Link to="/donation">
              {" "}
              <span
                className={`underline-animation ${
                  active === 3 ? "active" : ""
                }`}
              >
                Donate
              </span>
            </Link>
          </li>
          <li
            className="cursor-pointer"
            onMouseEnter={() => setActive(4)}
            onMouseLeave={() => setActive(-4)}
          >
            <Link to="/#contacts">
              <span
                className={`underline-animation ${
                  active === 4 ? "active" : ""
                }`}
              >
                Contact
              </span>
            </Link>
          </li>
          <li
            className="cursor-pointer"
            onMouseEnter={() => setActive(5)}
            onMouseLeave={() => setActive(-5)}
          >
            <span
              className={`underline-animation ${active === 5 ? "active" : ""}`}
            >
              <p>
                {" "}
                {auth._id ? (
                  <p onClick={handleLogout}>Logout</p>
                ) : (
                  <Link to="/Login">Login</Link>
                )}
              </p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
