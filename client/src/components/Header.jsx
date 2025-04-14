import React, { useState } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";


const Header = ({ onHomeClick, onCategoriesClick, onCoursesClick, onPrinciplesClick, onFooterClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => setMenuOpen(!menuOpen);
    const handleNavItemClick = () => setMenuOpen(false);

    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] sticky top-0 z-99  bg-[#f5f9f1]">
            <div className="flex items-center justify-between py-5">

                {/* Logo */}
                <div className="text-3xl font-bold text-gray-700 cursor-pointer">
                    EDUC<span className="text-gray-500">ODE</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6 text-gray-700 text-sm font-medium">
                    <ul className="flex gap-6">
                        <li className="cursor-pointer hover:text-gray-900" onClick={onHomeClick}>HOME</li>
                        <li className="cursor-pointer hover:text-gray-900 " onClick={onCategoriesClick}>ABOUT US</li>
                        <li className="cursor-pointer hover:text-gray-900" onClick={onCoursesClick}>COURSES</li>
                        <li className="cursor-pointer hover:text-gray-900" onClick={onPrinciplesClick}>BLOG</li>
                        <li className="cursor-pointer hover:text-gray-900" onClick={onFooterClick}>CONTACT</li>
                    </ul>
                </div>


                <div className="flex">
                    
                    {/* Button Login & Signup */}
                    <div className="flex  gap-4 text-sm">
                        <button className="border-b px-5 py-2 cursor-pointer text-gray-700 hover:text-black">
                            Login
                        </button>
                        <button className="text-white bg-gray-700 px-5 py-2 rounded-full hover:bg-gray-800">
                            Signup
                        </button>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="lg:hidden flex items-center ml-2">
                        <button onClick={handleMenuClick}>
                            <AiOutlineAlignLeft className="text-3xl " />
                        </button>
                    </div>

                </div>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden flex flex-col gap-4 py-4 text-gray-700 text-sm font-medium">
                    <ul className="flex flex-col gap-3">
                        <li className="cursor-pointer hover:text-gray-900 border border-gray-200 rounded px-3 py-2" onClick={handleNavItemClick}>HOME</li>
                        <li className="cursor-pointer hover:text-gray-900 border border-gray-200 rounded px-3 py-2" onClick={handleNavItemClick}>ABOUT US</li>
                        <li className="cursor-pointer hover:text-gray-900 border border-gray-200 rounded px-3 py-2" onClick={handleNavItemClick}>COURSES</li>
                        <li className="cursor-pointer hover:text-gray-900 border border-gray-200 rounded px-3 py-2" onClick={handleNavItemClick}>BLOG</li>
                        <li className="cursor-pointer hover:text-gray-900 border border-gray-200 rounded px-3 py-2" onClick={handleNavItemClick}>CONTACT</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;