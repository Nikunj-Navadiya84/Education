import React from 'react';
import { assets } from "../assets/assets";

const Success = () => {
    const features = [
        {
            text: "Empower Learners With Practical Knowledge",
            icon: assets.arrow
        },
        {
            text: "Offer Hands-On Projects And Real-World Applications",
            icon: assets.arrow
        },
        {
            text: "Provide Guidance From Industry-Leading Instructors",
            icon: assets.arrow
        },
        {
            text: "Create An Inclusive And Interactive Learning Experience",
            icon: assets.arrow
        }
    ];

    return (
        <div className="success">
            <div className="curved-bottom bg-[#FFFAF5]">
                <div className="w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[12vw] py-20">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h2 className="text-[#0A2429] text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight">
                                    EduCode: Transforming
                                    <br />
                                    Knowledge Into Success
                                </h2>
                                <p className="text-gray-600 text-sm w-[69%]">
                                    At EduCode, we believe that education should be accessible, engaging,
                                    and career-focused. Our courses are designed to:
                                </p>
                            </div>

                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 text-[#0A2429]"
                                    >
                                        <img
                                            src={feature.icon}
                                            alt="arrow"
                                            className="w-3 h-3 text-[#4CAF50]"
                                        />
                                        <p className="font-medium text-sm">{feature.text}</p>
                                    </div>
                                ))}
                            </div>

                            <button className="bg-[#0A2429] text-white text-sm px-8 py-3 rounded-full font-medium hover:bg-[#1a3f47] transition-colors">
                                ABOUT US
                            </button>
                        </div>

                        {/* Right Content - Images */}
                        <div className="relative flex justify-end">
                            <div className=" rounded-3xl flex justify-end w-[80%] xs:w-[80%] sm:w-[60%] md:w-[65%] lg:w-[70%]">
                                <img
                                    src={assets.success2}
                                    alt="Student learning online"
                                    className="object-cover  h-auto rounded-3xl"
                                />

                              
                                <div className="absolute top-25 left-[0px] xl:left-[10px] w-[70%] sm:w-[50%] sm:left-25 xl:top-30 2xl:top-40 2xl:w-[65%] lg:w-[70%] lg:top-45 lg:left-5 md:top-40">
                                    <img
                                        src={assets.success1}
                                        alt="Online meeting"
                                        className="w-[70%] h-auto object-cover"
                                    />
                                </div>

                                {/* Decorative star icon */}
                                <div className="absolute top-5 left-5 w-8 h-8 sm:w-10 sm:h-10">
                                    <img src={assets.star} alt="" className="w-full h-full object-contain" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;