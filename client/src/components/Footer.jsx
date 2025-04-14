import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full mt-20">
            {/* CTA Section */}
            <div className="w-1/2 mx-auto px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] relative z-10">
                <div className="bg-[#FDF8F7] rounded-2xl -mb-20">
                    <div className="p-10 text-center">
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
                <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
                    <div className="max-w-7xl mx-auto">
                        {/* Footer Content Grid */}
                        <div className="flex flex-col items-center gap-8 pb-8 border-b border-[#0d5613]">
                            {/* Logo & Description */}
                            <div className="space-y-4">
                                <Link to="/" className="inline-block">
                                    <h1 className="text-white text-3xl font-bold">EDUCODE</h1>
                                </Link>
                            </div>

                            {/* Quick Links */}
                            <div className="space-y-4 border-b border-[#0d5613] w-full justify-items-center">
                                <nav className="flex gap-10 text-sm space-y-3">
                                    <Link to="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
                                    <Link to="/about" className="text-white hover:text-gray-300 transition-colors">About Us</Link>
                                    <Link to="/courses" className="text-white hover:text-gray-300 transition-colors">Courses</Link>
                                    <Link to="/blog" className="text-white hover:text-gray-300 transition-colors">Blog</Link>
                                    <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">Contact Us</Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="flex  gap-10 text-sm justify-center ">
                                <div className="flex w-1/3 flex-col items-center space-x-3 text-white">
                                    <img src={assets.email} alt="Email" className="w-6 h-6 mb-5" />
                                    <p>educode@gmail.com</p>
                                </div>
                                <div className="flex w-1/3 flex-col items-center space-x-3 text-white">
                                    <img src={assets.phone} alt="Phone" className="w-6 h-6 mb-5" />
                                    <p>123-456-7890</p>
                                </div>
                                <div className="flex w-1/2 text-center flex-col items-center space-x-3 text-white">
                                    <img src={assets.location} alt="Location" className="w-7 h-7 mb-5" />
                                    <p>1524 Crooks Lakes, Gabrielchester, GA 05494-9992</p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4 justify-center lg:justify-start">
                                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                                    <img src={assets.instagram} alt="Instagram" className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                                    <img src={assets.facebook} alt="Facebook" className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                                    <img src={assets.close} alt="Twitter" className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                                    <img src={assets.youtube} alt="YouTube" className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-gray-400 text-sm">
                            <p>Copyright © 2025 All Rights Reserved</p>
                            <div className="flex space-x-4 mt-4 md:mt-0">
                                <a href="#" className="hover:text-white transition-colors">privacy policy</a>
                                <span>|</span>
                                <a href="#" className="hover:text-white transition-colors">terms of service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 