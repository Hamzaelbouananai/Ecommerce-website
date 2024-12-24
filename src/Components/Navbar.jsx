import React, { useState, useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    // Update the dark mode state in localStorage
    localStorage.setItem("darkMode", isDarkMode);
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark"); // Add dark mode class
    } else {
      html.classList.remove("dark"); // Remove dark mode class
    }
  }, [isDarkMode]);

  const handleOrderClick = () => {
    // Handle the order click (e.g., navigate to an order page or show an alert)
    alert("Order button clicked!");
  };

  return (
    <div className="bg-[#7ed2d2] text-black dark:bg-[#184545] dark:text-white py-2">
      <div className="container flex justify-between items-center">
        {/* Logo and Name */}
        <a href="#" className="font-bold text-xl sm:text-2xl flex items-center gap-2">
          <img src="src/assets/lolo.png" alt="logo" className="w-10" />
          7M
        </a>

        {/* Search Bar */}
        <div group className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-[100px] sm:w-[200px] px-4 py-2 rounded-full border
                border-gray-300 dark:border-gray-600 bg-white dark:bg-[#184545] focus:outline-none 
                focus:ring-2 focus:ring-gray-500 dark:focus:ring-[#7ed2d2]
                focus:shadow-lg transition-all duration-300 ease-in-out focus:w-[300px]"
            />

          <IoMdSearch 
            className="text-grey-600 dark:text-gray-400 group-hover:text-primary
            absolute top-1/2 -translate-y-1/2 right-3"
          />
        </div>

        {/* Order Button (Placed after the search bar) */}
        <button
          onClick={() => alert("Ordering not available yet")}
          className="bg-gradient-to-r from-[#71a5a5] to-slate-900 dark:from-slate-700 dark:to-[#8fcece] 
          transition-all duration-200 text-white py-3 px-4 rounded-full flex items-center group"

        >

            <FaCartShopping/>
         <span className="group-hover:block hidden transition-all duration-200">Order</span> 
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="px-2 py-2 text-sm rounded-none bg-[#7ed2d2] dark:bg-[#184545]"
        >
          <img
            src={isDarkMode ? "src/assets/light-bulb_18471445.png" : "src/assets/half-moon_1312372.png"}
            alt="Mode Icon"
            className="w-8 h-8 rounded-none" // Ensures the image is square without rounding
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
