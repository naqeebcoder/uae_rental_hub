import React from "react";

const RentalProcess = () => {
    const steps = [
        {
            id: 1,
            title: "Sign Up & Verify",
            text: "Register your fleet or company, upload the required documents, and get verified to start renting out your vehicles.",
            icon: "fa fa-sign-in",
            bg: "assets/images/backgrounds/process-one-single-bg-1.jpg",
            delay: "100ms",
            animate: "fadeInLeft",
        },
        {
            id: 2,
            title: "Add Vehicles",
            text: "List your vehicles with complete details — type, number (daily, weekly, or monthly), location, and availability schedule.",
            icon: "icon-in-person",
            bg: "assets/images/backgrounds/process-one-single-bg-2.jpg",
            delay: "300ms",
            animate: "fadeInLeft",
        },
        {
            id: 3,
            title: "Rental Requests",
            text: "Get instant notifications when companies or renters request to hire your vehicles for their projects or transport needs.",
            icon: "icon-car-insurance",
            bg: "assets/images/backgrounds/process-one-single-bg-3.jpg",
            delay: "500ms",
            animate: "fadeInRight",
        },
        {
            id: 4,
            title: "Pick Up & Start",
            text: "Meet at the agreed time and location to hand over the vehicle, and start earning steady income from your fleet.",
            icon: "icon-steering-wheel",
            bg: "assets/images/backgrounds/process-one-single-bg-4.jpg",
            delay: "700ms",
            animate: "fadeInRight",
        },
    ];

    return (
        <section className="process-one">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style2">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-shape">
                            <img
                                src="assets/images/shapes/section-title-tagline-shape-1.png"
                                alt=""
                            />
                        </div>
                        <span className="section-title__tagline">Find a Companies in 4 Easy Steps!</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        How It Works for Customers <br />(Fleet Owners)
                    </h2>
                </div>

                <div className="row">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className={`col-xl-3 col-lg-6 col-md-6 wow ${step.animate}`}
                            data-wow-delay={step.delay}
                            data-wow-duration="1500ms"
                        >
                            <div className="process-one__single">
                                <div
                                    className="process-one__single-bg"
                                    style={{ backgroundImage: `url(${step.bg})` }}
                                ></div>
                                <div className="process-one__icon-box">
                                    <div className="process-one__icon-shape"></div>
                                    <div className="process-one__icon">
                                        <span className={step.icon}></span>
                                    </div>
                                    <div className="process-one__count"></div>
                                </div>
                                <h3 className="process-one__title">{step.title}</h3>
                                <p className="process-one__text">{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RentalProcess;
