import React from "react";
import { assets } from "../assets/assets";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="curved-bottom bg-[#f5f9f1]">
            <div className="relative w-full pt-15 flex items-center justify-center px-4 sm:px-[5vw] md:px-[7vw] lg:px-[12vw] overflow-hidden">
                <div className="w-full">
                    <div className="flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-5">

                        {/* Left Content */}
                        <div className="flex-1 space-y-6 xl:space-y-8 w-full xl:w-1/2 flex flex-col items-center lg:items-start relative">
                            <div className="space-y-2 sm:space-y-3 text-center lg:text-left">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2429]">Choose Classes</h1>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2429]">Led By Exceptional</h2>
                                <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                                    <div className="flex -space-x-2 sm:-space-x-3">
                                        <img src={assets.group1} alt="teacher" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                                        <img src={assets.group2} alt="teacher" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                                        <img src={assets.group3} alt="teacher" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" />
                                    </div>
                                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2429]">Teachers!</span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 max-w-sm text-center lg:text-left">
                                The best online courses taught by expert educators to nurture your skills and fuel your career growth.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-6 py-3 text-sm bg-[#0A2429] text-white rounded-full hover:bg-opacity-90 transition-colors duration-300 font-semibold">
                                    EXPLORE COURSES
                                </button>
                                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-sm text-[#0A2429] font-semibold">
                                    <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg">
                                        <FaPlay className="text-[#0A2429] ml-1" />
                                    </div>
                                    WATCH VIDEO
                                </button>
                            </div>

                            {/* Join Counter */}
                            <div className="flex justify-end w-full">
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

                            {/* Star Decorative */}
                            <div className="absolute bottom-4 left-4 text-[#0A2429]">
                                <img src={assets.star1} alt="star" className="w-6 h-6 sm:w-8 sm:h-8" />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="relative w-full xl:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                            {/* Background Circle */}
                            <div className="absolute left-[1.5rem] top-[2.5rem] sm:left-[5rem] sm:top-[2rem] md:left-[6rem] md:top-[2rem] xl:left-[2rem] xl:top-[4.5rem]">
                                <img src={assets.banner2} alt="" className="w-full h-auto max-w-[480px] object-contain" />
                            </div>

                            {/* Main Image */}
                            <img
                                src={assets.bannergirls}
                                alt="Student"
                                className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 w-[220px] sm:w-[300px] md:w-[400px] xl:w-[520px] h-auto object-contain"
                            />


                            {/* Course Count Badge */}
                            <div className="absolute top-2 right-4 sm:top-4 sm:right-12 md:top-6 md:right-20 lg:top-10 lg:right-60 xl:top-20 xl:right-4 bg-[#FFF5D9] rounded-tl-4xl rounded-br-4xl p-4 z-20">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-white rounded-full">
                                        <img src={assets.online} alt="courses" className="w-6 h-6 sm:w-8 sm:h-8" />
                                    </div>
                                    <div>
                                        <p className="text-sm sm:text-base font-bold">80+ Online</p>
                                        <p className="text-xs sm:text-sm">Courses</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Stars */}
                            <div className="absolute 
                top-[10rem] right-[1rem] 
                sm:top-[12rem] sm:right-[3rem] 
                md:top-[14rem] md:right-[5rem] 
                lg:top-[16rem] lg:right-[8rem] 
                xl:top-[18rem] xl:right-[0rem]
                2xl:top-[18rem] 2xl:right-[4rem]">
                                <img src={assets.star1} alt="star" className="w-6 h-6 sm:w-8 sm:h-8" />
                            </div>


                            <div className="absolute top-[6rem] left-[3rem] sm:top-[7rem] sm:left-[5rem] md:top-[8rem] md:left-[8rem] lg:top-[11rem] lg:left-[8rem] xl:top-[12rem] xl:left-[3rem]">
                                <img src={assets.star1} alt="star" className="w-6 h-6 sm:w-8 sm:h-8" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
