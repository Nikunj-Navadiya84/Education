import React, { useState } from 'react';
import { assets } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Student = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

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
            name: "Daniel Kim",
            role: "Software Engineer",
            image: assets.student4,
            quote: "I've built strong foundational skills here and found support at every step of my journey. Definitely a game-changer for me!"
        },
        {
            id: 5,
            name: "Ava Patel",
            role: "UI/UX Intern",
            image: assets.student5,
            quote: "This platform helped me transition from beginner to confident designer. The project-based learning is my favorite part."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <div className='student' ref={ref}>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
                className="w-full bg-[#F8F9FE] curved-bottom relative"
            >
                {/* Top Curve */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-0 left-0 w-full"
                >
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
                </motion.div>

                <div className="w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[12vw] py-20">
                    <div className="w-full">
                        {/* Student Images */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.4 }}
                            className="relative h-32 w-full max-w-[1200px] mx-auto"
                        >
                            <div className="absolute w-full top-1/2 left-0 -translate-y-1/2">
                                <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
                                    <div className="relative w-full h-full">
                                        {/* Previous Students */}
                                        <motion.div 
                                            variants={imageVariants}
                                            initial="hidden"
                                            animate={isInView ? "visible" : "hidden"}
                                            transition={{ delay: 0.5 }}
                                            className="absolute left-[5%] 2xl:top-[-10px] sm:top-[-30px] transform -translate-y-1/2"
                                        >
                                            <img
                                                src={testimonials[(currentSlide - 1 + testimonials.length) % testimonials.length].image}
                                                alt="Student"
                                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
                                            />
                                        </motion.div>
                                        <motion.div 
                                            variants={imageVariants}
                                            initial="hidden"
                                            animate={isInView ? "visible" : "hidden"}
                                            transition={{ delay: 0.6 }}
                                            className="absolute left-[25%] top-[10px] sm:top-[5px] transform -translate-x-1/2 -translate-y-1/2"
                                        >
                                            <img
                                                src={testimonials[(currentSlide - 2 + testimonials.length) % testimonials.length].image}
                                                alt="Student"
                                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
                                            />
                                        </motion.div>

                                        {/* Current Student */}
                                        <motion.div 
                                            variants={imageVariants}
                                            initial="hidden"
                                            animate={isInView ? "visible" : "hidden"}
                                            transition={{ delay: 0.7 }}
                                            className="absolute left-1/2 top-[10px] transform -translate-x-1/2 -translate-y-1/2"
                                        >
                                            <img
                                                src={testimonials[currentSlide].image}
                                                alt={testimonials[currentSlide].name}
                                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg"
                                            />
                                        </motion.div>

                                        {/* Next Students */}
                                        <motion.div 
                                            variants={imageVariants}
                                            initial="hidden"
                                            animate={isInView ? "visible" : "hidden"}
                                            transition={{ delay: 0.8 }}
                                            className="absolute right-[25%] top-[10px] sm:top-[5px] transform translate-x-1/2 -translate-y-1/2"
                                        >
                                            <img
                                                src={testimonials[(currentSlide + 1) % testimonials.length].image}
                                                alt="Student"
                                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
                                            />
                                        </motion.div>
                                        <motion.div 
                                            variants={imageVariants}
                                            initial="hidden"
                                            animate={isInView ? "visible" : "hidden"}
                                            transition={{ delay: 0.9 }}
                                            className="absolute right-[5%] 2xl:top-[-10px] sm:top-[-30px] transform -translate-y-1/2"
                                        >
                                            <img
                                                src={testimonials[(currentSlide + 2) % testimonials.length].image}
                                                alt="Student"
                                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Testimonial Content */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 1 }}
                            className="relative bg-white rounded-xl flex justify-center items-center text-center max-w-3xl mx-auto px-4"
                        >
                            <motion.div 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className='absolute left-[-16px] sm:left-[-20px] top-1/2 -translate-y-1/2'
                            >
                                <button
                                    onClick={prevSlide}
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-black"
                                >
                                    <img src={assets.leftarrow} alt="arrow" className='w-3 h-3 sm:w-4 sm:h-4' />
                                </button>
                            </motion.div>

                            <AnimatePresence initial={false} custom={-1}>
                                <motion.div 
                                    key={currentSlide}
                                    custom={-1}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    className='p-6 sm:p-8 md:p-10 text-center'
                                >
                                    <motion.h3 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-[#0A2429] text-lg sm:text-xl md:text-2xl font-semibold mb-2"
                                    >
                                        {testimonials[currentSlide].name}
                                    </motion.h3>

                                    <motion.p 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 leading-relaxed"
                                    >
                                        {testimonials[currentSlide].quote}
                                    </motion.p>

                                    <motion.p 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-gray-500 text-xs sm:text-sm"
                                    >
                                        — {testimonials[currentSlide].role}
                                    </motion.p>
                                </motion.div>
                            </AnimatePresence>

                            <motion.div 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className='absolute right-[-16px] sm:right-[-20px] top-1/2 -translate-y-1/2'
                            >
                                <button
                                    onClick={nextSlide}
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-black"
                                >
                                    <img src={assets.rightarrow} alt="arrow" className='w-3 h-3 sm:w-4 sm:h-4' />
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Student;
