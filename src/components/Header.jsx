import { useState } from "react";
import { Link } from "react-router-dom";
// import { close, logo, menu } from "../assets";

export const navLinks = [
    // {
    //     id: "home",
    //     title: "Home",
    // },
    {
        id: "categories",
        title: "Categories",
    },
    {
        id: "latest",
        title: "Latest",
    },
    {
        id: "popular",
        title: "Popular",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "blog",
        title: "Blog",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const categories = ["Shoes", "Clothes", "Jewelry", "Bags"];


export const users = [
    {
        id: "login",
        title: "Login",
    },
    {
        id: "shopping-cart",
        title: "Cart",
    },
];

const Header = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    const [toggleCategories, setToggleCategories] = useState(false);


    return (
        <nav className="w-full shadow-lg flex py-6 px-5 justify-between items-center navbar">
            {/* Logo */}
            <Link to='/'>
            <h1 className="text-3xl text-black">Logo</h1>
            </Link>

            {/* Desktop Navigation */}
            <ul className="list-none sm:flex hidden  items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-semibold cursor-pointer mx-5 text-[16px] ${active === nav.title ? "text-black" : "text-gray-400"
                            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => {
                            setActive(nav.title);
                            if (nav.title === "Categories") {
                                setToggleCategories(!toggleCategories);
                            }
                        }}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
            {/* categories */}
            <div
                className={`${!toggleCategories ? "hidden" : "flex"
                    } p-6 bg-gray-300 absolute top-20 left-48 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                    {categories.map((category) => (
                        <li
                            key={category}
                            className="font-poppins font-medium cursor-pointer text-[16px]"
                        >
                            <a href={`#${category}`}>{category}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <ul className="list-none flex  justify-end items-center flex-1">
                {users.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-semibold cursor-pointer text-[16px] ${active === nav.title ? "text-black" : "text-gray-400"
                            } ${index === users.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        {nav.id === 'shopping-cart' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                          </svg>
                          
                        ):( <a href={`#${nav.id}`}>{nav.title}</a>)}
                       
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : '../assets/menu.jpg'}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                />

                {/* Sidebar */}
                <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-gray-500" : "text-black"
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