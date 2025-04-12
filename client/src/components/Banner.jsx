import React from "react";
import { assets } from "../assets/assets";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="curved-bottom bg-[#f5f9f1]">
            <div className="relative w-full  flex items-center justify-center px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]  sm:py-12 md:py-16  overflow-hidden">

                <div className="w-full ">
                    <div className="flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-5">
                        {/* Left Content */}
                        <div className="flex-1 space-y-6 xl:space-y-8 w-full xl:w-1/2 flex flex-col items-center lg:items-start relative">
                            <div className="space-y-2 sm:space-y-3 text-center lg:text-left">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2429]">Choose Classes</h1>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2429]">Led By Exceptional</h2>
                                <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                                    <div className="flex -space-x-2 sm:-space-x-3">
                                        <img src={assets.group1} alt="teacher" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                                        <img src={assets.group2} alt="teacher" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                                        <img src={assets.group3} alt="teacher" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                                    </div>
                                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2429]">Teachers!</span>
                                </div>
                            </div>

                            <p className="text-base sm:text-lg text-gray-600 max-w-xl text-center lg:text-left">
                                The best online courses taught by expert educators to nurture your skills and fuel your career growth.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-6 py-3 bg-[#0A2429] text-white rounded-full hover:bg-opacity-90 transition-colors duration-300 font-semibold">
                                    EXPLORE COURSES
                                </button>
                                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-[#0A2429] font-semibold">
                                    <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg">
                                        <FaPlay className="text-[#0A2429] ml-1" />
                                    </div>
                                    WATCH VIDEO
                                </button>
                            </div>

                            {/* Join Counter */}
                            <div className="flex justify-end p-4 m-0 w-full">
                                <div className="flex flex-col bg-[#E6F5F9] rounded-tl-4xl rounded-br-4xl p-4 gap-2">
                                    <div className="flex -space-x-2">
                                        <img src={assets.people1} alt="student" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                                        <img src={assets.people2} alt="student" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                                        <img src={assets.people3} alt="student" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                                        <img src={assets.people4} alt="student" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                                        <img src={assets.people5} alt="student" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                                    </div>
                                    <p className="text-sm font-medium text-center">
                                        Join 120k+ People<br />Already
                                    </p>
                                </div>
                            </div>

                            <div className="absolute bottom-10 left-0 text-[#0A2429] text-2xl sm:text-3xl">
                                <img src={assets.star1} alt="star" className="w-6 h-6 sm:w-8 sm:h-8" />
                            </div>

                        </div>

                        {/* Right Content */}
                        <div className="flex relative w-full xl:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] ">
                            <div className="absolute inset-0">
                                {/* Background Circle */}
                                <div className="absolute left-6 top-10 w-120 sm:w-90 md:w-110 lg:w-120 sm:top-0 sm:left-20 md:left-30 md:top-0 lg:left-27 lg:top-15 xl:left-8 xl:top-18 flex items-center justify-center">
                                    <img
                                        src={assets.banner2}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Main Image */}
                                <img
                                    src={assets.bannergirls}
                                    alt="Student"
                                    className="absolute z-10 w-130 top-16 sm:top-12 sm:left-0 md:left-20 md:top-16 xl:left-0 xl:top-19 h-full object-contain object-bottom"
                                />

                                {/* Course Count Badge */}
                                <div className="absolute sm:top-0 sm:right-12 md:right-20 md:top-0 lg:top-10 lg:right-60 xl:right-0 xl:top-20 bg-[#FFF5D9] rounded-tl-4xl rounded-br-4xl p-3 sm:p-4 2xl:right-68 z-20">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-white rounded-full">
                                            <img src={assets.online} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
                                        </div>
                                        <div>
                                            <p className="text-sm sm:text-base font-bold">80+ Online</p>
                                            <p className="text-xs sm:text-sm">Courses</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Stars */}
                                <div className="absolute sm:top-40 sm:right-32 md:right-24 md:top-50 lg:right-62 lg:top-70 xl:right-2 2xl:right-68 text-[#0A2429] text-2xl sm:text-3xl">
                                    <img src={assets.star1} alt="star" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </div>
                                <div className="absolute top-30 left-14 sm:top-25 sm:left-21 md:top-30 md:left-32 lg:top-43 lg:left-32 xl:top-50 xl:left-10 text-[#0A2429] text-2xl sm:text-3xl">
                                    <img src={assets.star1} alt="star" className="w-6 h-6 sm:w-8 sm:h-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner; 