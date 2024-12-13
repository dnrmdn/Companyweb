import { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State untuk mengontrol menu

  // Fungsi untuk toggle menu
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      {/* Navbar Utama */}
      <div className="flex justify-between items-center py-4 px-6 bg-transparent">
        <img src={assets.logo} alt="Logo" />
        <ul className="hidden md:flex gap-7 items-center text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Project" className="cursor-pointer hover:text-gray-400">
            Project
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>
        {/* Icon Menu untuk Mobile */}
        <img
          src={assets.menu_icon}
          alt="Menu"
          className="md:hidden w-7 cursor-pointer"
          onClick={toggleMobileMenu}
        />
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && ( // Tampilkan menu jika showMobileMenu bernilai true
        <div className="md:hidden fixed inset-0 bg-white bg-opacity-90 text-black z-20">
          <div className="flex justify-end p-6">
            <img
              src={assets.cross_icon}
              className="w-6 cursor-pointer"
              alt="Close Menu"
              onClick={toggleMobileMenu} // Tutup menu saat cross icon di-click
            />
          </div>
          <ul className="flex flex-col items-center gap-5 mt-5 px-5 text-lg font-medium">
            <a
              href="#Header"
              className="px-4 py-2 rounded-full inline-block"
              onClick={toggleMobileMenu} // Tutup menu saat link di-click
            >
              Home
            </a>
            <a
              href="#About"
              className="px-4 py-2 rounded-full inline-block"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a
              href="#Project"
              className="px-4 py-2 rounded-full inline-block"
              onClick={toggleMobileMenu}
            >
              Project
            </a>
            <a
              href="#Testimonials"
              className="px-4 py-2 rounded-full inline-block"
              onClick={toggleMobileMenu}
            >
              Testimonials
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
