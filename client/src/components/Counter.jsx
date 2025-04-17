import React from 'react';
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Counter = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const numberVariants = {
        hidden: { scale: 0.5, opacity: 0 },
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
        <div className="counter-section" ref={ref}>
            <div className="w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[12vw] pt-20">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#E8F1EE] p-10 rounded-4xl"
                >
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4"
                    >
                        {stats.map((stat) => (
                            <motion.div 
                                key={stat.id}
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                className="flex flex-col items-center justify-center text-center"
                            >
                                <motion.h3 
                                    variants={numberVariants}
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2429] mb-2"
                                >
                                    {stat.number}
                                </motion.h3>
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-xs md:text-sm text-[#0A2429] font-medium tracking-wider"
                                >
                                    {stat.label}
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Counter; 