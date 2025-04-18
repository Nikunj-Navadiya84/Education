import React from 'react';
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <div className="success">
            <div className="curved-bottom bg-[#FFFAF5]">
                <div className="w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[12vw] py-20">
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center"
                    >
                        {/* Left Content */}
                        <motion.div 
                            variants={itemVariants}
                            className="space-y-6"
                        >
                            <motion.div 
                                variants={itemVariants}
                                className="space-y-4"
                            >
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-[#0A2429] text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight"
                                >
                                    EduCode: Transforming
                                    <br />
                                    Knowledge Into Success
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    className="text-gray-600 text-sm w-[69%]"
                                >
                                    At EduCode, we believe that education should be accessible, engaging,
                                    and career-focused. Our courses are designed to:
                                </motion.p>
                            </motion.div>

                            <motion.div 
                                variants={containerVariants}
                                className="space-y-4"
                            >
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ 
                                            x: 5,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="flex items-center gap-3 text-[#0A2429]"
                                    >
                                        <motion.img
                                            src={feature.icon}
                                            alt="arrow"
                                            className="w-3 h-3 text-[#4CAF50]"
                                            whileHover={{ 
                                                rotate: 45,
                                                transition: { duration: 0.2 }
                                            }}
                                        />
                                        <p className="font-medium text-sm">{feature.text}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.button 
                                whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: "#1a3f47"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#0A2429] text-white text-sm px-8 py-3 rounded-full font-medium transition-all"
                            >
                                ABOUT US
                            </motion.button>
                        </motion.div>

                        {/* Right Content - Images */}
                        <motion.div 
                            variants={itemVariants}
                            className="relative flex justify-end"
                        >
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="rounded-3xl flex justify-end w-[80%] xs:w-[80%] sm:w-[60%] md:w-[65%] lg:w-[70%]"
                            >
                                <motion.img
                                    src={assets.success2}
                                    alt="Student learning online"
                                    className="object-cover h-auto rounded-3xl"
                                    
                                />

                                <motion.div 
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="absolute top-25 left-[0px] xl:left-[10px] w-[70%] sm:w-[50%] sm:left-25 xl:top-30 2xl:top-40 2xl:w-[65%] lg:w-[70%] lg:top-45 lg:left-5 md:top-40"
                                >
                                    <motion.img
                                        src={assets.success1}
                                        alt="Online meeting"
                                        className="w-[70%] h-auto object-cover"
                                    />
                                </motion.div>

                                {/* Decorative star icon */}
                                <motion.div 
                                    animate={{ 
                                        rotate: 360,
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ 
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute top-5 left-5 w-8 h-8 sm:w-10 sm:h-10"
                                >
                                    <img src={assets.star} alt="" className="w-full h-full object-contain" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Success;