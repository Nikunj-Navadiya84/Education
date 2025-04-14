import React, { useState } from 'react';
import { assets } from "../assets/assets";

const Student = () => {
    const testimonials = [
        {
            id: 1,
            name: "Elise Tarchin",
            role: "Junior UI Designer",
            image: assets.student1,
            quote: "This platform has completely changed the way I learn. The courses are thoughtfully structured and easy to follow. I love how everything is interactive and visually engaging."
        },
        {
            id: 2,
            name: "Michael Roberts",
            role: "Web Developer",
            image: assets.student2,
            quote: "The quality of instruction and the practical approach to learning have been invaluable. I've gained real-world skills that I use every day in my development work."
        },
        {
            id: 3,
            name: "Sarah Chen",
            role: "Digital Marketing Specialist",
            image: assets.student3,
            quote: "What sets this platform apart is the community and support system. The instructors are incredibly responsive, and the peer interaction adds so much value to the learning experience."
        },
        {
            id: 4,
            name: "Sarah Chen",
            role: "Digital Marketing Specialist",
            image: assets.student4,
            quote: "What sets this platform apart is the community and support system. The instructors are incredibly responsive, and the peer interaction adds so much value to the learning experience."
        },
        {
            id: 5,
            name: "Sarah Chen",
            role: "Digital Marketing Specialist",
            image: assets.student5,
            quote: "What sets this platform apart is the community and support system. The instructors are incredibly responsive, and the peer interaction adds so much value to the learning experience."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className='student'>
            <div className="w-full bg-[#F8F9FE] curved-bottom relative overflow-hidden">
                {/* Top Curve */}
                <div className="absolute  top-0 left-0 w-full">
                    <svg
                        className="w-full h-40"
                        viewBox="0 0 1440 96"
                        fill="none"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 0L1440 0C1440 0 1440 96 720 96C0 96 0 0 0 0Z"
                            fill="white"
                        />
                    </svg>
                </div>

                <div className="w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-20">
                    {/* Testimonial Slider */}
                    <div className="w-full">
                        {/* Student Images */}
                        <div className="relative h-32  w-full max-w-[1200px] mx-auto">
                            <div className="absolute w-full top-1/2 left-0 -translate-y-1/2">
                                {/* Student Images */}
                                <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
                                    <div className="relative w-full h-full">
                                        {/* Previous Students */}
                                        <div className="absolute  left-[5%] 2xl:top-[-10px] sm:top-[-30px] transform -translate-y-1/2">
                                            <img
                                                src={testimonials[(currentSlide - 1 + testimonials.length) % testimonials.length].image}
                                                alt="Student"
                                                className="w-12 h-12 rounded-full border-2 border-white"
                                            />
                                        </div>
                                        <div className="absolute left-[25%] top-[10px] sm:top-[5px] transform -translate-x-1/2 -translate-y-1/2">
                                            <img
                                                src={testimonials[(currentSlide - 2 + testimonials.length) % testimonials.length].image}
                                                alt="Student"
                                                className="w-12 h-12 rounded-full border-2 border-white"
                                            />
                                        </div>

                                        {/* Current Student */}
                                        <div className="absolute left-1/2 top-[10px] transform -translate-x-1/2 -translate-y-1/2">
                                            <img
                                                src={testimonials[currentSlide].image}
                                                alt={testimonials[currentSlide].name}
                                                className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                                            />
                                        </div>

                                        {/* Next Students */}
                                        <div className="absolute right-[25%] top-[10px] sm:top-[5px] transform translate-x-1/2 -translate-y-1/2">
                                            <img
                                                src={testimonials[(currentSlide + 1) % testimonials.length].image}
                                                alt="Student"
                                                className="w-12 h-12 rounded-full border-2 border-white"
                                            />
                                        </div>
                                        <div className="absolute right-[5%] 2xl:top-[-10px] sm:top-[-30px] transform -translate-y-1/2">
                                            <img
                                                src={testimonials[(currentSlide + 2) % testimonials.length].image}
                                                alt="Student"
                                                className="w-12 h-12 rounded-full border-2 border-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="relative bg-white rounded-xl flex justify-center items-center text-center max-w-3xl mx-auto px-4">
                            <div className='absolute left-[-20px] top-1/2 -translate-y-1/2'>
                                <button
                                    onClick={prevSlide}
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-black cursor-pointer"
                                >
                                    <img src={assets.leftarrow} alt="arrow" className='w-4 h-4' />
                                </button>
                            </div>

                            <div className='p-10'>
                                <h3 className="text-[#0A2429] text-xl font-semibold mb-1">
                                    {testimonials[currentSlide].name}
                                </h3>

                                <p className="text-gray-700 text-md mb-6 leading-relaxed">
                                    {testimonials[currentSlide].quote}
                                </p>

                                <p className="text-gray-500 text-sm">
                                    — {testimonials[currentSlide].role}
                                </p>
                            </div>

                            <div className='absolute right-[-20px] top-1/2 -translate-y-1/2'>
                                <button
                                    onClick={nextSlide}
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-black cursor-pointer"
                                >
                                    <img src={assets.rightarrow} alt="arrow" className='w-4 h-4' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Student; 