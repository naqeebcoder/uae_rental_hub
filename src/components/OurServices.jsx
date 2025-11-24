import React from "react";
import sectionTitleShape from "../assets/images/shapes/section-title-tagline-shape-1.png";
import "../assets/css/custom-design/our-services.css";

const servicesData = [
    {
        id: 1,
        icon: "fa fa-sign-in",
        title: "Sign Up",
        text: "Register your company profile, upload your trade license and required documents, and get verified to start hiring vehicles.",
        delay: "100ms",
        animation: "fadeInLeft",
    },
    {
        id: 2,
        icon: "icon-car-insurance",
        title: "Booking Request",
        text: "Browse available cars, trucks, recovery vehicles, cranes, or buses. Select the vehicle that matches your project needs and send a booking request.",
        delay: "300ms",
        animation: "fadeInLeft",
    },
    {
        id: 3,
        icon: "fa fa-book",
        title: "Confirmation",
        text: "Get quick approval and booking confirmation with all the details you need — including pickup location and schedule.",
        delay: "500ms",
        animation: "fadeInRight",
    },
    {
        id: 4,
        icon: "fa fa-check",
        title: "Hire Vehicle ",
        text: "Collect the vehicle at the confirmed time or request delivery (if available). Use it to complete your work.",
        delay: "700ms",
        animation: "fadeInRight",
    },
];

const OurServices = () => {
    return (
        <section className="services-one">
            {/* Background shapes */}
            <div className="services-one__shape-1"></div>
            <div className="services-one__shape-2"></div>

            <div className="container">
                {/* Section title */}
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        {/* <div className="section-title__tagline-shape">
                            <img src={sectionTitleShape} alt="Section Shape" />
                        </div> */}
                        <span className="section-title__tagline">Find a Customer in 4 Steps!</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        How It Works for Companies <br />(Renters)
                    </h2>
                </div>

                {/* Service boxes */}
                <div className="row">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className={`col-xl-3 col-lg-6 col-md-6 wow ${service.animation}`}
                            data-wow-delay={service.delay}
                            data-wow-duration="1500ms"
                        >
                            <div className="services-one__single">
                                <div className="services-one__single-shape-1"></div>
                                <div className="services-one__single-shape-2"></div>
                                <div className="services-one__single-shape-3"></div>
                                <div className="services-one__count"></div>
                                <div className="services-one__icon">
                                    <span className={service.icon}></span>
                                </div>
                                <h3 className="services-one__title">
                                    <a href="services.html">{service.title}</a>
                                </h3>
                                <p className="services-one__text">{service.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
