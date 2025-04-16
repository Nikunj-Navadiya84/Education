import React, { useState } from 'react';

const Questions = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question: ''
    });

    const faqData = [
        {
            id: 1,
            question: "What Is The Purpose Of Education?",
            answer: "Education serves to impart knowledge, develop critical thinking skills, and prepare individuals for future challenges, both personally and professionally."
        },
        {
            id: 2,
            question: "What Are The Different Levels Of Education?",
            answer: "Education encompasses various levels including Early Childhood Education, Primary Education, Secondary Education, Higher Education (Undergraduate and Graduate), and Continuing Education programs."
        },
        {
            id: 3,
            question: "What Financial Aid Options Are Available For Students?",
            answer: "Students can access various financial aid options including scholarships, grants, student loans, work-study programs, and merit-based financial assistance packages."
        },
        {
            id: 4,
            question: "What Are Some Effective Note-Taking Strategies?",
            answer: "Effective note-taking strategies include the Cornell method, mind mapping, outline method, and digital note-taking tools. Focus on key concepts and organize information systematically."
        },
        {
            id: 5,
            question: "What Skills Are Employers Looking For In Graduates?",
            answer: "Employers seek graduates with critical thinking, problem-solving, communication, teamwork, digital literacy, and adaptability skills, along with relevant technical expertise."
        }
    ];

    const handleQuestionClick = (index) => {
        if (activeQuestion === index) {
            setActiveQuestion(null);
        } else {
            setActiveQuestion(index);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <section className="w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[12vw] py-20">
            <div className="">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-3xl font-bold text-[#0A2429] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-sm mx-auto">
                        Explore our FAQs to learn more about how EduCode works and how
                        we can support your learning journey.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* FAQ Section */}
                    <div className="space-y-4 w-full">
                        {faqData.map((faq, index) => (
                            <div 
                                key={faq.id}
                                className={`border border-[#d1e0e3] rounded-lg overflow-hidden transition-all duration-300 ${activeQuestion === index ? 'bg-[#F8FFF9]' : 'bg-white'}`}
                            >
                                <button
                                    className="w-full px-6 py-4 text-left flex justify-between items-center"
                                    onClick={() => handleQuestionClick(index)}
                                >
                                    <span className="font-medium text-lg text-[#0A2429]">{faq.question}</span>
                                    <p className={`transform transition-transform text-xl cursor-pointer duration-300 w-6 h-6 flex justify-center ${activeQuestion === index ? 'rotate-180' : ''}` }>
                                        {activeQuestion === index ? '-' : '+'}
                                    </p>
                                </button>
                                {activeQuestion === index && (
                                    <div className="px-6 pb-4 text-gray-600 animate-fadeIn">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#F8FFF9] p-6 rounded-lg 2xl:w-1/2 sm:w-full md:w-full border border-[#d1e0e3]">
                        <h3 className="text-lg text-center font-semibold mb-1 text-[#0A2429]">
                            In What Way Can We Help?
                        </h3>
                        <p className="text-gray-600 text-center  text-sm mb-3">
                            Feel free to reach out to us with your inquiries.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4 ">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                                    Write Your Question
                                </label>
                                <textarea
                                    id="question"
                                    name="question"
                                    value={formData.question}
                                    onChange={handleInputChange}
                                    rows="2"
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                ></textarea>
                            </div>
                            <div className='flex justify-end'>
                            <button
                                type="submit"
                                className="flex bg-[#0A2429] text-white py-2 px-6 rounded-md hover:bg-[#0A2429]/90 transition-colors"
                            >
                                SUBMIT NOW
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Questions; 