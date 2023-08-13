import { useState } from "react";
// import { close, logo, menu } from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "categories",
        title: "Categories",
    },
    {
        id: "about",
        title: "About",
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
        id: "cart",
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
            <h1 className="text-3xl text-black">Logo</h1>

            {/* Desktop Navigation */}
            <ul className="list-none sm:flex hidden  items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer mx-5 text-[16px] ${active === nav.title ? "text-gray-400" : "text-black"
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
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-gray-500" : "text-black"
                            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
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