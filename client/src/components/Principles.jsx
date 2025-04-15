import React from 'react';
import { assets } from "../assets/assets";

const Principles = () => {
    const principles = [
        {
            id: 1,
            icon: assets.principles1,
            title: "Community First",
            description: "We prioritize building connections and fostering a sense of belonging."
        },
        {
            id: 2,
            icon: assets.principles2,
            title: "Always Authentic",
            description: "We value honesty and strive to deliver real, unfiltered learning experiences."
        },
        {
            id: 3,
            icon: assets.principles3,
            title: "Celebrate Diversity",
            description: "By nurturing cultural openness, we create inclusive, global learning spaces."
        },
        {
            id: 4,
            icon: assets.principles4,
            title: "Waves Before Web",
            description: "We go beyond tech—encouraging human interaction and deep community."
        },
        {
            id: 5,
            icon: assets.principles5,
            title: "Positive Energy",
            description: "We create safe spaces that spark curiosity, creativity, and kindness."
        },
        {
            id: 6,
            icon: assets.principles6,
            title: "Stay Sustainable",
            description: "Our commitment to eco-consciousness goes beyond education."
        },
        {
            id: 7,
            icon: assets.principles7,
            title: "Learning Resources",
            description: "Our courses are built with rich learning material to enrich every journey."
        },
        {
            id: 8,
            icon: assets.principles8,
            title: "Friendly Support Team",
            description: "Our team is always ready to assist you at every step of your learning path."
        }
    ];

    return (
        <div className='principles'>
            <div className="w-full bg-[#FFF5F5] curved-bottom  py-16 md:py-20">
            <div className="w-full px-4 sm:px-[5vw]  md:px-[7vw] lg:px-[9vw]">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[#0A2429] text-4xl md:text-4xl font-bold mb-4">
                        Our Guiding Principles
                    </h2>
                    <p className="text-gray-600 mx-auto text-sm">
                        Our values guide our mission to deliver impactful and accessible
                        education to learners everywhere.
                    </p>
                </div>

                {/* Principles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {principles.map((principle) => (
                        <div 
                            key={principle.id}
                            className="bg-white rounded-2xl p-6 border border-[#E4DED8] hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-14 h-14 rounded-full bg-[#0A2429] flex items-center justify-center">
                                    <img 
                                        src={principle.icon} 
                                        alt={principle.title}
                                        className="w-8 h-8"
                                    />
                                </div>
                                <h3 className="text-md font-semibold text-[#0A2429]">
                                    {principle.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {principle.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Principles; 