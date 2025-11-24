import React, { useState } from "react";
import faqImage from "../assets/images/resources/faq-one-img-1.jpg";
import taglineShape from "../assets/images/shapes/section-title-tagline-shape-1.png";

const faqs = [
    {
        id: 1,
        question: "How old do I need to be to rent a car?",
        answer:
            "From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do. Let us be your trusted partner in achieving success.",
    },
    {
        id: 2,
        question: "What documents do I need to rent a car?",
        answer:
            "From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do. Let us be your trusted partner in achieving success.",
    },
    {
        id: 3,
        question: "What types of vehicles are available for rent?",
        answer:
            "From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do. Let us be your trusted partner in achieving success.",
    },
    {
        id: 4,
        question: "Can I rent a car with a debit card?",
        answer:
            "From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do. Let us be your trusted partner in achieving success.",
    },
    {
        id: 5,
        question: "What is your fuel policy?",
        answer:
            "From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do. Let us be your trusted partner in achieving success.",
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-one relative py-20 bg-gray-50">
            <div className="faq-one__shape-1 absolute top-0 left-0 w-20 h-20 bg-blue-100 rounded-full blur-3xl"></div>
            <div className="faq-one__shape-2 absolute bottom-0 right-0 w-20 h-20 bg-orange-100 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left Side */}
                    <div className="faq-one__left space-y-6">
                        <div className="section-title text-left">
                            <div className="flex items-center mb-2">
                                <img
                                    src={taglineShape}
                                    alt="shape"
                                    className="w-8 h-8 mr-2 animate-pulse"
                                />
                                <span className="text-blue-600 font-semibold">Our Faqs</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                Frequently Asking Any Question
                            </h2>
                        </div>

                        <div className="relative w-full max-w-md">
                            <img
                                src={faqImage}
                                alt="faq"
                                className="rounded-2xl shadow-lg w-full"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white px-6 py-4 rounded-xl flex items-center shadow-lg">
                                <h2 className="text-3xl font-bold mr-2">55</h2>
                                <p className="text-sm leading-tight">
                                    Year of <br /> experience
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="faq-one__right space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.id}
                                className={`border rounded-2xl transition-all duration-300 ${activeIndex === index
                                    ? "border-blue-500 bg-white shadow-lg"
                                    : "border-gray-200 bg-gray-100"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full text-left px-6 py-4 flex justify-between items-center"
                                >
                                    <h4 className="text-lg font-semibold text-gray-800">
                                        {faq.question}
                                    </h4>
                                    <span
                                        className={`text-xl transform transition-transform duration-300 ${activeIndex === index ? "rotate-45" : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>

                                {activeIndex === index && (
                                    <div className="px-6 pb-4 text-gray-600 animate-fadeIn">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
