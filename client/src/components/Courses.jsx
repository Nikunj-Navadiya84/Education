import React from 'react';
import { assets } from "../assets/assets";

const Courses = () => {
    const courses = [
        {
            id: 1,
            title: "Get Essential Blogging Tips To Engage Your Audience",
            category: "DATA SCIENCE",
            image: assets.courses1,
            students: "423 students",
            duration: "02h 30m",
            instructor: {
                name: "Albert Flores",
                avatar: assets.courses4
            },
            price: "$450.00"
        },
        {
            id: 2,
            title: "Exploring Data Insights: Statistical Techniques",
            category: "DATA ANALYTICS",
            image: assets.courses2,
            students: "423 students",
            duration: "02h 30m",
            instructor: {
                name: "Annabelle Jones",
                avatar: assets.courses5
            },
            price: "$650.00"
        },
        {
            id: 3,
            title: "Boost Reader Engagement With Captivating Strategies",
            category: "DEVELOPMENT",
            image: assets.courses3,
            students: "423 students",
            duration: "02h 30m",
            instructor: {
                name: "Myrella Aston",
                avatar: assets.courses6
            },
            price: "$520.00"
        }
    ];

    return (
        <section className="w-full bg-white py-16 md:py-20">
            <div className="w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[12vw]">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-[#0A2429] text-4xl md:text-4xl font-bold mb-4">
                        Our Popular Online Courses
                    </h2>
                    <p className="text-gray-600 mx-auto text-sm">
                        Design and market online courses, faster engaging communities, and
                        earn from memberships - all on one robust, scalable platform.
                    </p>
                </div>

                {/* Course Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-[20px] border border-[#E4DED8] overflow-hidden hover:shadow-lg transition-all duration-300 p-5"
                        >
                            {/* Course Image */}
                            <div className="relative">
                                <img
                                    src={course.image}
                                    alt=""
                                    className="w-full object-cover"
                                />
                                <div className="absolute  bottom-[-10px] left-[50%] translate-x-[-50%]">
                                    <span className="bg-[#E8F1EE]/80 backdrop-blur-sm px-4 py-2 w-full rounded-full text-[12px] font-medium text-[#0A2429]">
                                        {course.category}
                                    </span>
                                </div>
                            </div>

                            {/* Course Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-[#0A2429] mb-4">
                                    {course.title}
                                </h3>

                                {/* Course Meta */}
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="flex text-sm items-center gap-2">
                                        <img src={assets.courses7} alt="students" className="w-5 h-5" />
                                        <span className="text-gray-600">{course.students}</span>
                                    </div>
                                    <div className="flex text-sm items-center gap-2">
                                        <img src={assets.courses8} alt="duration" className="w-5 h-5" />
                                        <span className="text-gray-600">{course.duration}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={course.instructor.avatar}
                                            alt=""
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <span className="text-sm font-medium text-[#0A2429]">
                                            {course.instructor.name}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Explore Button */}
                            <div className="px-6 flex justify-between items-center gap-4">
                                <div>
                                    <span className="text-xl font-medium text-[#0A2429]">
                                        {course.price}
                                    </span>
                                </div>

                                <button className="bg-[#0A2429] text-xs text-white py-3 px-6 rounded-full font-medium hover:bg-[#1a3f47]transition-colors text-[15px] cursor-pointer">
                                    EXPLORE
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;                    