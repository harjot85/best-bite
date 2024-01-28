import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id="navbar"
      className="flex items-center justify-between flex-wrap bg-black p-4 lg:p-6"
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-3xl tracking-tight text-red-900">
          BestBite Pizza
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          id="navbar-toggle"
          className="flex items-center px-3 py-2 border rounded text-red-700 border-red-700 hover:text-red hover:border-red"
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
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-red-900 hover:text-red-500 mr-2 text-lg"
          >
            Menu
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-red-900 hover:text-white ml-12 mr-2 text-lg"
          >
            Contact
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-red-900 hover:text-white ml-12 mr-2 text-lg"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
