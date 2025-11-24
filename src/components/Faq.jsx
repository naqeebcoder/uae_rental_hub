import React, { useState } from "react";
import sectionShape from "../assets/images/shapes/section-title-tagline-shape-1.png";

const faqs = [
    {
        id: 1,
        question: "How old do I need to be to rent a car?",
        answer:
            "From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do. Let us be your trusted partner in achieving success. From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do.",
    },
    {
        id: 2,
        question: "What documents do I need to rent a car?",
        answer:
            "From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do. Let us be your trusted partner in achieving success. From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do.",
    },
    {
        id: 3,
        question: "What types of vehicles are available for rent?",
        answer:
            "From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do. Let us be your trusted partner in achieving success. From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do.",
    },
    {
        id: 4,
        question: "Can I rent a car with a debit card?",
        answer:
            "From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do. Let us be your trusted partner in achieving success. From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do.",
    },
    {
        id: 5,
        question: "What is your fuel policy?",
        answer:
            "From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do. Let us be your trusted partner in achieving success. From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do.",
    },
    {
        id: 6,
        question: "Can I add additional drivers to my rental agreement?",
        answer:
            "From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do. Let us be your trusted partner in achieving success. From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do.",
    },
];

const Faq = () => {
    const [activeId, setActiveId] = useState(2); // default active

    const toggleFaq = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="faq-two">
            <div className="faq-two__shape-1"></div>
            <div className="faq-two__shape-2"></div>
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-shape">
                            <img src={sectionShape} alt="Shape" />
                        </div>
                        <span className="section-title__tagline">Our Faqs</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        Frequently Asking Any Question
                    </h2>
                </div>

                {/* Accordion Section */}
                <div className="faq-two__inner-content">
                    <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.id}
                                className={`accrodion wow ${index % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                                    } ${activeId === faq.id ? "active" : ""}`}
                                data-wow-delay={`${index * 100}ms`}
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-title"
                                    onClick={() => toggleFaq(faq.id)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <h4>{faq.question}</h4>
                                </div>
                                {activeId === faq.id && (
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>{faq.answer}</p>
                                        </div>
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
