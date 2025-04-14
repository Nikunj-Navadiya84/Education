import React from 'react';
import { assets } from '../assets/assets';

const Asked = () => {
    const blogPosts = [
        {
            id: 1,
            title: "How To Maximize Your Study Time Effectively",
            date: "27 Mar,2025",
            image: assets.asked1,
            alt: "Student studying online with laptop"
        },
        {
            id: 2,
            title: "Top 10 Must-Have Skills For Aspiring Content Writers",
            date: "27 Mar,2025",
            image: assets.asked2,
            alt: "Content writer working with headphones"
        },
        {
            id: 3,
            title: "I Want To See How Best The Community Can Help",
            date: "27 Mar,2025",
            image: assets.asked3,
            alt: "Student learning online with headphones"
        }
    ];

    return (
        <section className="asked">
            <div className="w-full bg-[#FDF8F7] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] curved-bottom py-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#0A2429] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 w-lg mx-auto text-sm">
                        Explore our FAQs to learn more about how EduCode works and how
                        we can support your learning journey.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <div 
                            key={post.id} 
                            className="bg-white rounded-lg p-5 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Image Container */}
                            <div className="aspect-w-16 aspect-h-9 relative">
                                <img
                                    src={post.image}
                                    alt={post.alt}
                                    className="w-full h-full rounded-lg object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="py-5">
                                {/* Date */}
                                <div className="flex items-center gap-2 mb-3">
                                    <img src={assets.date} alt="Date" className="w-4 h-4" />
                                    <span className="text-sm text-gray-600">{post.date}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-md font-semibold text-[#0A2429] mb-4">
                                    {post.title}
                                </h3>

                                {/* Learn More Button */}
                                <button className="text-[#0A2429] text-sm border-b cursor-pointer">
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Asked; 