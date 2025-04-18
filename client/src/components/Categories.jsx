import React from 'react';
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

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
                duration: 0.8
            }
        }
    };

    return (
        <div className="pb-20 pt-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[12vw]">
            <div className="w-full">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-[#0A2429] mb-4">
                        Explore Course Categories
                    </h2>
                    <p className="text-gray-600 mx-auto text-sm">
                        Discover courses tailored to your interests and career goals. Join a
                        vibrant learning community and enhance your expertise.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className={`${category.bgColor} rounded-3xl p-4 cursor-pointer`}
                            style={{
                                boxShadow: `-5px 0px 0px 0px ${category.shadowColor}ee, 0px 5px 0px 0px ${category.shadowColor}ee`
                            }}
                        >
                            <motion.div 
                                className="flex flex-col items-center h-full gap-4 p-5"
                                whileHover={{ 
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.div 
                                    className={`w-14 h-14 rounded-full ${category.iconBg} flex items-center justify-center`}
                                    whileHover={{ 
                                        scale: 1.1,
                                        rotate: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <img 
                                        src={category.image} 
                                        alt={category.title}
                                        className="w-8 h-8 object-contain"
                                    />
                                </motion.div>
                                <motion.h3 
                                    className="text-sm font-semibold text-[#0A2429] text-center w-full"
                                    whileHover={{ 
                                        scale: 1.05,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    {category.title}
                                </motion.h3>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Categories;
