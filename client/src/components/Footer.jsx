import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full mt-20">
            {/* CTA Section */}
            <div className="w-full sm:w-4/5 lg:w-1/2 mx-auto relative z-10 px-4">
                <div className="bg-[#FDF8F7] rounded-2xl -mb-20">
                    <div className="p-5 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2429] mb-4">
                            Why Don't You Start Today?
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto mb-8">
                            Join EduCode and venture into your digital skills era. Your
                            journey to success begins here. Enroll today!
                        </p>
                        <button className="bg-[#0A2429] text-white px-5 py-3 rounded-full hover:bg-[#0A2429]/90 transition-colors">
                            GET STARTED
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-[#032606] pt-32 pb-6">
                <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[12vw]">
                    <div className="max-w-7xl mx-auto">
                        {/* Footer Content Grid */}
                        <div className="flex flex-col items-center gap-8 pb-8 border-b border-[#0d5613]">
                            {/* Logo */}
                            <div className="space-y-4">
                                <Link to="/" className="inline-block">
                                    <h1 className="text-white text-3xl font-bold">EDUCODE</h1>
                                </Link>
                            </div>

                            {/* Quick Links */}
                            <div className="w-full border-b border-[#0d5613] pb-4">
                                <nav className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-8 text-sm text-white text-center">
                                    <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
                                    <Link to="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
                                    <Link to="/courses" className="hover:text-gray-300 transition-colors">Courses</Link>
                                    <Link to="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
                                    <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-white w-full">
                                <div className="flex flex-col items-center text-center">
                                    <img src={assets.email} alt="Email" className="w-6 h-6 mb-2" />
                                    <p>educode@gmail.com</p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <img src={assets.phone} alt="Phone" className="w-6 h-6 mb-2" />
                                    <p>123-456-7890</p>
                                </div>
                                <div className="flex flex-col items-center text-center max-w-xs">
                                    <img src={assets.location} alt="Location" className="w-7 h-7 mb-2" />
                                    <p>1524 Crooks Lakes, Gabrielchester, GA 05494-9992</p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4 justify-center pt-4">
                                <a href="#" className="hover:text-gray-300 transition-colors">
                                    <img src={assets.instagram} alt="Instagram" className="w-6 h-6" />
                                </a>
                                <a href="#" className="hover:text-gray-300 transition-colors">
                                    <img src={assets.facebook} alt="Facebook" className="w-6 h-6" />
                                </a>
                                <a href="#" className="hover:text-gray-300 transition-colors">
                                    <img src={assets.vector} alt="Twitter" className="w-6 h-6" />
                                </a>
                                <a href="#" className="hover:text-gray-300 transition-colors">
                                    <img src={assets.you} alt="YouTube" className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-gray-400 text-sm">
                            <p>Copyright © 2025 All Rights Reserved</p>
                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-4 md:mt-0">
                                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                <span className="hidden sm:block">|</span>
                                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
