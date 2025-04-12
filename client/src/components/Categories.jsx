import React from 'react';
import { assets } from "../assets/assets";

const Categories = () => {
    const categories = [
        {
            title: "IT & Software",
            image: assets.categories1,
            bgColor: "bg-[#FFE6D9]",
            shadowColor: "#FDD4C6",
            iconBg: "bg-[#FF8A5C]/20"
        },
        {
            title: "Personal Development",
            image: assets.categories2,
            bgColor: "bg-[#FFF8D9]",
            shadowColor: "#fff1c0",
            iconBg: "bg-[#FFD93D]/20"
        },
        {
            title: "Business",
            image: assets.categories3,
            bgColor: "bg-[#DAEEE1]",
            shadowColor: "#bbe1c7",
            iconBg: "bg-[#4CAF50]/20"
        },
        {
            title: "Digital Marketing",
            image: assets.categories4,
            bgColor: "bg-[#E6E9FF]",
            shadowColor: "#c4d0fd",
            iconBg: "bg-[#4C6FFF]/20"
        }
    ];

    return (
        <div className="pb-20 pt-40 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <div className="w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#0A2429] mb-4">
                        Explore Course Categories
                    </h2>
                    <p className="text-gray-600 w-lg mx-auto text-sm">
                        Discover courses tailored to your interests and career goals. Join a
                        vibrant learning community and enhance your expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`${category.bgColor} rounded-3xl p-6 cursor-pointer transition-transform hover:scale-105`}
                            style={{
                                  boxShadow: `-5px 0px 0px 0px ${category.shadowColor}ee, 0px 5px 0px 0px ${category.shadowColor}ee`
                            }}
                        >
                            <div className="flex flex-col items-start h-full gap-4">
                                <div className={`w-14 h-14 rounded-full ${category.iconBg} flex items-center justify-center self-start`}>
                                    <img 
                                        src={category.image} 
                                        alt={category.title}
                                        className="w-8 h-8 object-contain"
                                    />
                                </div>
                                <h3 className="text-md font-semibold text-[#0A2429] text-center w-full">
                                    {category.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories; 