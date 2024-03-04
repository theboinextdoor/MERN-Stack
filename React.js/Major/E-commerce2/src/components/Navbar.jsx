import { useState } from "react";
import logo from "../assets/logo.png";
import { FaLanguage } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItem = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <>
      {/* nav Items for tablets and laptops devices */}
      <nav className="bg-white md:px-14 p-1 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0 ">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium ">
          {/* logo and menu */}
          <div className="flex space-x-14 items-center ">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center  text-primary"
            >
              <img
                src={logo}
                alt="logo"
                className="w-[67px] inline-block items-center"
              />
              <span>XYZ</span>
            </a>

            {/* showing the nav Item using map function */}
            <ul className="md:flex space-x-12 hidden ">
              {navItem.map(({ link, path }) => (
                <a className="block hover:text-gray-300" key={link} href={path}>
                  {link}
                </a>
              ))}
            </ul>
          </div>

          {/* language and signUp */}
          <div className="space-x-12 hidden md:flex items-center ">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <FaLanguage className="mr-2 w-10" />
              <span>Language</span>
            </a>
            <button
              type="submit"
              className="bg-secondary px-4 py-2 transition-all duration-300 rounded-[50px] hover:text-white active:bg-indigo-600 items-center"
            >
              Sign Up
            </button>
          </div>

          {/* menu button for mobile dipaly only */}
          <div className="md:hidden ">
            <button onClick={handleToggleButton} className=" focus:outline-none">
              {isMenuOpen ? (
                <RxCross2 className="w-6 h-6 textprimary " />
              ) : (
                <RxHamburgerMenu className="w-6 h-6 textprimary " />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* menu for mobiles devices */} 
      <nav>
        <div
          className={`space-y-4 px-4 pt-24 pb-5 items-center flex flex-col bg-secondary text-xl md:hidden ${
            isMenuOpen ? "blocked fixed top-0 right-0 left-0" : "hidden"
          } `}
        >
          {navItem.map(({ link, path }) => (
            <a key={link} href={path} className="block hover:text-gray-300 pt-3  ">
              {link}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
