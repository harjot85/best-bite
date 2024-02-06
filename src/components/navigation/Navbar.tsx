import { useState } from "react";
import data from "../../data/data.json";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const { navbarOptions } = data.business;

  return (
    <nav
      id="navbar"
      className="flex items-center justify-between flex-wrap bg-black px-4 py-1 lg:px-6"
    >
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="tracking-tight">
          <img src={Logo} className="h-20 lg:h-28" alt="" />
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          id="navbar-toggle"
          className="flex items-center px-3 py-2 border rounded text-orange-600 border-orange-600 hover:text-red hover:border-red"
          onClick={toggleNavbar}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu toggle</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        id="navbar-options"
        className={`${
          isOpen ? "block" : "hidden"
        } w-full block text-right flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="lg:flex-grow">
          {navbarOptions &&
            navbarOptions.map((option) => {
              return (
                <a
                  key={option.value}
                  href={option.href}
                  className="block mt-4 lg:inline-block lg:mt-0
                             text-orange-700 hover:text-orange-400 mr-2 ml-12 text-2xl font-medium"
                >
                  {option.value}
                </a>
              );
            })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
