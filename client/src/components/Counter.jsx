import React from 'react';
import { assets } from "../assets/assets";

const Counter = () => {
    const stats = [
        {
            id: 1,
            number: "80+",
            label: "COURSE"
        },
        {
            id: 2,
            number: "30K",
            label: "MEMBER"
        },
        {
            id: 3,
            number: "50",
            label: "UNIVERCITY PARTNER"
        },
        {
            id: 4,
            number: "50M+",
            label: "TOTAL VIEW"
        }
    ];

    return (
        <div className="counter-section">
            <div className="w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-20 ">
                <div className="bg-[#E8F1EE] p-10 rounded-4xl" >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
                        {stats.map((stat) => (
                            <div 
                                key={stat.id}
                                className="flex flex-col items-center justify-center text-center"
                            >
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2429] mb-2">
                                    {stat.number}
                                </h3>
                                <p className="text-xs md:text-sm text-[#0A2429] font-medium tracking-wider">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Counter; 