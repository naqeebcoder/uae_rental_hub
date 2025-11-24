import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ Import images properly
import pageHeaderBg from "../assets/images/backgrounds/page-header-bg.png";
import pageHeaderShape1 from "../assets/images/shapes/page-header-shape-1.png";

const Faq = () => {
    return (
        <>
            <Navbar />

            {/* Page Header Start */}
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage: `url(${pageHeaderBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
                {/* <div
                    className="page-header__shape-1"
                    style={{
                        backgroundImage: `url(${pageHeaderShape1})`,

                        height: "120px",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        position: "absolute",
                        right: "0",

                    }}
                ></div> */}
                <div className="container">
                    <div className="page-header__inner">
                        <h3>Our FAQ</h3>
                        <div className="thm-breadcrumb__inner">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><span className="icon-arrow-left"></span></li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Page Header End */}

            {/* FAQ Page Start */}
            <div className="faq-one faq-page py-5">
                <div className="container">
                    <div className="row">
                        {/* Left Column */}
                        <div className="col-xl-6 col-lg-6 mb-4">
                            <div className="faq-page__left">
                                <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                                    <AccordionItem
                                        title="How old do I need to be to rent a car?"
                                        active={false}
                                    />
                                    <AccordionItem
                                        title="What documents do I need to rent a car?"
                                        active={true}
                                    />
                                    <AccordionItem
                                        title="What types of vehicles are available for rent?"
                                        active={false}
                                    />
                                    <AccordionItem
                                        title="Can I rent a car with a debit card?"
                                        active={false}
                                    />
                                    <AccordionItem
                                        title="What is your fuel policy?"
                                        active={false}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-page__right">
                                <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                                    <AccordionItem
                                        title="How old do I need to be to rent a car?"
                                        active={false}
                                    />
                                    <AccordionItem
                                        title="What documents do I need to rent a car?"
                                        active={false}
                                    />
                                    <AccordionItem
                                        title="What types of vehicles are available for rent?"
                                        active={false}
                                    />
                                    <AccordionItem
                                        title="Can I rent a car with a debit card?"
                                        active={false}
                                    />
                                    <AccordionItem
                                        title="What is your fuel policy?"
                                        active={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FAQ Page End */}

            <Footer />
        </>
    );
};

// ✅ Accordion Item Component
const AccordionItem = ({ title, active }) => {
    const [isOpen, setIsOpen] = React.useState(active);

    return (
        <div className={`accrodion ${isOpen ? "active" : ""}`}>
            <div
                className="accrodion-title"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    cursor: "pointer",
                    backgroundColor: "#f8f9fa",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                    marginBottom: "10px",
                    transition: "all 0.3s ease",
                }}
            >
                <h4 style={{ margin: 0, fontSize: "18px", color: "#333" }}>{title}</h4>
            </div>

            {isOpen && (
                <div
                    className="accrodion-content"
                    style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #eaeaea",
                        padding: "15px 20px",
                        borderRadius: "8px",
                        boxShadow: "0 1px 5px rgba(0,0,0,0.05)",
                        marginBottom: "15px",
                        transition: "all 0.3s ease",
                    }}
                >
                    <div className="inner">
                        <p style={{ color: "#555", lineHeight: "1.6" }}>
                            From personalized solutions to expert execution, we prioritize quality,
                            reliability, and customer satisfaction in everything we do. Let us be
                            your trusted partner in achieving success.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Faq;
