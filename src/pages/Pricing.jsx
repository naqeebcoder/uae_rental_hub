import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Import images
import pageHeaderBg from "../assets/images/backgrounds/page-header-bg.png";
import pageHeaderShape from "../assets/images/shapes/page-header-shape-1.png";
import sectionTaglineShape from "../assets/images/shapes/section-title-tagline-shape-1.png";

const pricingPlans = [
    {
        id: 1,
        title: "Basic",
        description:
            "Car service is essential for maintaining performance and longevity of vehicle. From oil changes",
        price: "AED 30",
        iconClass: "icon-taxi",
        delay: "100ms",
    },
    {
        id: 2,
        title: "Standard",
        description:
            "Car service is essential for maintaining performance and longevity of vehicle. From oil changes",
        price: "AED 40",
        iconClass: "icon-cuv",
        delay: "200ms",
    },
    {
        id: 3,
        title: "Premium",
        description:
            "Car service is essential for maintaining performance and longevity of vehicle. From oil changes",
        price: "AED 50",
        iconClass: "icon-jeep",
        delay: "300ms",
    },
];

const pricingDetails = [
    { label: "Initial charge:", value: "$06" },
    { label: "Additional Kilometre:", value: "$06" },
    { label: "Per minutes stopped traffic:", value: "$06" },
    { label: "Waiting Charge:", value: "$06" },
];

const Pricing = () => {
    return (
        <>
            <Navbar />

            {/* Sticky Header */}
            <div className="stricky-header stricked-menu main-menu">
                <div className="sticky-header__content"></div>
            </div>

            {/* Page Header */}
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{ backgroundImage: `url(${pageHeaderBg})` }}
                ></div>
                {/* <div
                    className="page-header__shape-1"
                    style={{ backgroundImage: `url(${pageHeaderShape})` }}
                ></div> */}

                <div className="container">
                    <div className="page-header__inner">
                        <h3>Pricing</h3>
                        <div className="thm-breadcrumb__inner">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <span className="icon-arrow-left"></span>
                                </li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="pricing-one pricing-page-one">
                <div className="pricing-one__shape-1"></div>
                <div className="pricing-one__shape-2"></div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box justify-content-center">
                            <div className="section-title__tagline-shape">
                                <img src={sectionTaglineShape} alt="shape" />
                            </div>
                            <span className="section-title__tagline">Pricing & Plan</span>
                        </div>
                        <h2 className="section-title__title title-animation">
                            Time Quick and Easy to <br /> Transportation
                        </h2>
                    </div>

                    <div className="row">
                        {pricingPlans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`col-xl-4 col-lg-6 col-md-6 wow fadeInUp`}
                                data-wow-delay={plan.delay}
                                data-wow-duration="1500ms"
                            >
                                <div className="pricing-one__single">
                                    <div className="pricing-one__title-box">
                                        <h2 className="pricing-one__title">{plan.title}</h2>
                                        <p className="pricing-one__text">{plan.description}</p>
                                    </div>

                                    <div className="pricing-one__price-and-icon-box">
                                        <div className="pricing-one__price-box">
                                            <h3 className="pricing-one__price">
                                                {plan.price} <span>/month</span>
                                            </h3>
                                        </div>
                                        <div className="pricing-one__icon-box">
                                            <span className={plan.iconClass}></span>
                                        </div>
                                    </div>

                                    <ul className="list-unstyled pricing-one__points">
                                        {pricingDetails.map((item, index) => (
                                            <li key={index}>
                                                <div className="text">
                                                    <p>{item.label}</p>
                                                </div>
                                                <div className="price">
                                                    <p>{item.value}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pricing-one__btn-box">
                                        <a href="/pricing" className="thm-btn">
                                            Rent Now <span className="fas fa-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Pricing;
