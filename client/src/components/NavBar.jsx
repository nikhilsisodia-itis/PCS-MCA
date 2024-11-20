import React, { useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa"; // Importing icons from react-icons
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isDashboard }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/sign-in'); 
  };

  const handleSignUpClick = () => {
    navigate('/sign-up'); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <>
      <div className="flex bg-transparent p-1 w-[100vw] h-[12vh] items-center">
        <p className="flex-initial text-6xl font-bold text-white border-2 border-double rounded-lg">
          PCS
        </p>
        <FaBars
          className="text-white text-3xl cursor-pointer ml-auto md:hidden"
          onClick={toggleMenu}
        />
        <div
          className={`absolute top-[12vh] left-0 w-full bg-transparent p-2 ${
            menuOpen ? "block" : "hidden"
          } md:flex md:relative md:top-0 md:left-auto md:w-auto md:space-y-0 md:space-x-4 ml-auto`}
        >
          <hr className="block md:hidden" />
          <Link
            className="text-white p-2 block md:inline-block text-center"
            to="/"
          >
            Home
            <hr className="block md:hidden" />
          </Link>
          <Link
            className="text-white p-2 block md:inline-block text-center"
            to="/about"
          >
            About Us
            <hr className="block md:hidden" />
          </Link>
          <Link
            className="text-white p-2 block md:inline-block text-center"
            to="/tax-policy"
          >
            Check Tax Policy
            <hr className="block md:hidden" />
          </Link>
          <button className="text-white p-2 border-2 border-purple-400 hover:bg-purple-600 hover:text-black rounded-lg hidden md:block"
                      onClick={handleSignInClick}>
            Sign-in
          </button>
          <button className="text-white p-2 border-2 border-purple-400 hover:bg-purple-600 hover:text-black rounded-lg hidden md:block" onClick={handleSignUpClick}>

            Sign-up
          </button>
        </div>
        {isDashboard && <FaUserCircle className="text-white text-3xl ml-4" />}
      </div>
    </>
  );
};

export default Navbar;
