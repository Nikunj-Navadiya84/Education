import React, { useState } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";

const Header = ({ onHomeClick, onCategoriesClick, onCoursesClick, onPrinciplesClick, onFooterClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activePage, setActivePage] = useState('home');

    const handleMenuClick = () => setMenuOpen(!menuOpen);

    const handleNavItemClick = (page, callback) => {
        setActivePage(page);
        setMenuOpen(false);
        callback();
    };

    const getNavItemClasses = (page) => {
        const baseClasses = "cursor-pointer transition-all duration-300 relative";
        const activeClasses = activePage === page
            ? "text-gray-900 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[3px] after:bg-gray-900 after:origin-left after:scale-x-100 after:transition-transform after:duration-300"
            : "text-gray-700 hover:text-gray-900 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[3px] after:bg-gray-900 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300";
        return `${baseClasses} ${activeClasses}`;
    };

    const getMobileNavItemClasses = (page) => {
        const baseClasses = "cursor-pointer border border-gray-200 rounded px-3 py-2 transition-all duration-300 relative overflow-hidden";
        const activeClasses = activePage === page
            ? "text-gray-900 border-gray-900 bg-gray-50 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gray-900 after:origin-left after:scale-x-100 after:transition-transform after:duration-300"
            : "text-gray-700 hover:text-gray-900 hover:border-gray-900 hover:bg-gray-50 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gray-900 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300";
        return `${baseClasses} ${activeClasses}`;
    };

    return (
        <div className="relative  top-0 z-50">
            <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[12vw] py-5  bg-[#f5f9f1]">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl sm:text-3xl font-bold text-gray-700 cursor-pointer">
                        EDUC<span className="text-gray-500">ODE</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
                        <ul className="flex gap-6">
                            <li className={getNavItemClasses('home')} onClick={() => handleNavItemClick('home', onHomeClick)}>HOME</li>
                            <li className={getNavItemClasses('about')} onClick={() => handleNavItemClick('about', onCategoriesClick)}>ABOUT US</li>
                            <li className={getNavItemClasses('courses')} onClick={() => handleNavItemClick('courses', onCoursesClick)}>COURSES</li>
                            <li className={getNavItemClasses('blog')} onClick={() => handleNavItemClick('blog', onPrinciplesClick)}>BLOG</li>
                            <li className={getNavItemClasses('contact')} onClick={() => handleNavItemClick('contact', onFooterClick)}>CONTACT</li>
                        </ul>
                    </div>

                    <div className="flex items-center">
                        {/* Button Login & Signup */}
                        <div className="hidden sm:flex gap-4 text-sm">
                            <button className="border-b px-5 py-2 cursor-pointer text-gray-700 hover:text-black transition-colors">
                                Login
                            </button>
                            <button className="text-white bg-gray-700 px-5 py-2 rounded-full hover:bg-gray-800 transition-colors">
                                Signup
                            </button>
                        </div>

                        {/* Mobile Menu Icon */}
                        <div className="lg:hidden flex items-center ml-2">
                            <button onClick={handleMenuClick} className="p-2">
                                <AiOutlineAlignLeft className="text-2xl sm:text-3xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-[#f5f9f1] z-40 flex flex-col gap-4 py-4 px-4 sm:px-[5vw] md:px-[7vw] text-sm font-medium shadow-md">
                    <ul className="flex flex-col gap-3">
                        <li className={getMobileNavItemClasses('home')} onClick={() => handleNavItemClick('home', onHomeClick)}>HOME</li>
                        <li className={getMobileNavItemClasses('about')} onClick={() => handleNavItemClick('about', onCategoriesClick)}>ABOUT US</li>
                        <li className={getMobileNavItemClasses('courses')} onClick={() => handleNavItemClick('courses', onCoursesClick)}>COURSES</li>
                        <li className={getMobileNavItemClasses('blog')} onClick={() => handleNavItemClick('blog', onPrinciplesClick)}>BLOG</li>
                        <li className={getMobileNavItemClasses('contact')} onClick={() => handleNavItemClick('contact', onFooterClick)}>CONTACT</li>
                    </ul>
                    {/* Mobile Login & Signup */}
                    <div className="sm:hidden flex flex-col gap-2 mt-2">
                        <button className="w-full text-center border border-gray-200 rounded px-3 py-2 cursor-pointer text-gray-700 hover:text-black hover:border-gray-900 hover:bg-gray-50 transition-all">
                            Login
                        </button>
                        <button className="w-full text-center text-white bg-gray-700 rounded px-3 py-2 hover:bg-gray-800 transition-colors">
                            Signup
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
