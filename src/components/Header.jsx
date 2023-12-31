import { useState } from "react";
import { Link } from "react-router-dom";
// import { close, logo, menu } from "../assets";

export const navLinks = [
  {
    id: "home",
    link:"/",
    title: "Home",
  },
  {
    id: "contact",
    title: "Contact",
    linke:"/contact"
  },
  {
    id: "about",
    title: "About",
    link:"/about",
  },
];


export const users = [
  {
    id: "login",
    title: "Login",
    link:"/login",
  },
  {
    id: "wishlist",
    title: "WishList",
    link:"/wishlist",
  },
  {
    id: "shopping-cart",
    title: "Cart",
    link:"/cart"
  },
  {
    id: "profile",
    title: "profile",
    link:"/profile",
  },
];

const Header = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 shadow-lg flex  py-6 px-5 bg-black text-white justify-between items-center navbar">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-3xl text-white">Logo</h1>
      </Link>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden  items-center flex-1">
        {navLinks.map((nav, index) => (
          <Link to={nav.link}>
              <li
                key={nav.id}
                className={`font-poppins font-semibold cursor-pointer mx-5 text-[16px] ${
                  active === nav.title ? "text-gray-400 underline" : "text-white"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
          </Link>
         
        ))}
      </ul>   

      <ul className="list-none flex  justify-end items-center flex-1">
        {users.map((nav, index) => (
        
          <li
            key={nav.id}
            className={`font-poppins font-semibold cursor-pointer text-[16px] ${
              active === nav.title ? "text-gray-400 underline" : "text-white"
            } ${index === users.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            {nav.id === "shopping-cart" ? (
              <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
              </Link>
              
            ) : nav.id === "wishlist" ? (
              <Link to={nav.link}>
                 <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              </Link>
             
            ) : nav.id === "profile" ? (
              <Link to="/profile">
                 <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              </Link>
             
            ) : (
              <Link to={nav.link}>{nav.title}</Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : "../assets/menu.jpg"}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-gray-500 underline" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
