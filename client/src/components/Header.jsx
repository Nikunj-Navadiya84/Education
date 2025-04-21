import React, { useState } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";

const Header = ({ onHomeClick, onCategoriesClick, onCoursesClick, onPrinciplesClick, onFooterClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activePage, setActivePage] = useState('home');
    const [showLoginModal, setShowLoginModal] = useState(false);

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
        <div className="relative top-0 z-50">
            <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[12vw] py-5 bg-[#f5f9f1]">
                <div className="flex items-center justify-between">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-700 cursor-pointer">
                        EDUC<span className="text-gray-500">ODE</span>
                    </div>

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
                        {/* Desktop Login & Signup */}
                        <div className="hidden sm:flex gap-4 text-sm">
                            <button
                                onClick={() => setShowLoginModal(true)}
                                className="border-b px-5 py-2 cursor-pointer text-gray-700 hover:text-black transition-colors"
                            >
                                Login
                            </button>
                            <button className="text-white bg-gray-700 px-5 py-2 rounded-full hover:bg-gray-800 transition-colors">
                                Signup
                            </button>
                        </div>

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
                <div className="lg:hidden fixed inset-0 z-40">
                    <div className="absolute inset-0 bg-opacity-30" onClick={() => setMenuOpen(false)}></div>
                    <div className="absolute top-0 left-0 h-full w-3/4 max-w-sm bg-[#f5f9f1] shadow-lg transition-transform duration-300 transform">
                        <div className="flex flex-col gap-4 py-6 px-4 text-sm font-medium">
                            <ul className="flex flex-col gap-3">
                                <li className={getMobileNavItemClasses('home')} onClick={() => handleNavItemClick('home', onHomeClick)}>HOME</li>
                                <li className={getMobileNavItemClasses('about')} onClick={() => handleNavItemClick('about', onCategoriesClick)}>ABOUT US</li>
                                <li className={getMobileNavItemClasses('courses')} onClick={() => handleNavItemClick('courses', onCoursesClick)}>COURSES</li>
                                <li className={getMobileNavItemClasses('blog')} onClick={() => handleNavItemClick('blog', onPrinciplesClick)}>BLOG</li>
                                <li className={getMobileNavItemClasses('contact')} onClick={() => handleNavItemClick('contact', onFooterClick)}>CONTACT</li>
                            </ul>
                            <div className="sm:hidden flex flex-col gap-2 mt-2">
                                <button onClick={() => setShowLoginModal(true)} className="w-full text-center border border-gray-200 rounded px-3 py-2 text-gray-700 hover:text-black hover:border-gray-900 hover:bg-gray-50 transition-all">
                                    Login
                                </button>
                                <button className="w-full text-center text-white bg-gray-700 rounded px-3 py-2 hover:bg-gray-800 transition-colors">
                                    Signup
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Login Modal */}
            {showLoginModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-brightness-40">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Login</h2>
                            <button onClick={() => setShowLoginModal(false)} className="text-gray-500 hover:text-black text-2xl cursor-pointer">&times;</button>
                        </div>

                        <form className="flex flex-col gap-4">
                            <input type="email" placeholder="Email" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400" />
                            <input type="password" placeholder="Password" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400" />
                            <button type="submit" className="bg-gray-700 text-white py-2 rounded hover:bg-gray-800 transition-colors cursor-pointer">Login</button>
                        </form>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
