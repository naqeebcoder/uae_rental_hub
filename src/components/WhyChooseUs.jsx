import React from "react";

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            title: "Easy & Fast Booking",
            text: "Renting a vehicle has never been easier! Enjoy a quick and hassle-free booking process that gets you on the road in no time. Choose your preferred crane, bus, car, recovery, set your dates, and confirm instantly simple, fast, and reliable.",
            icon: "icon-range",
            delay: "100ms",
            animate: "fadeInLeft",
            link: "listing-single.html",
        },
        {
            id: 2,
            title: "Many Pickup Location",
            text: "We make vehicle rentals convenient with multiple pickup points across the city. Whether you need a car, bus, crane, recovery vehicle, excavator, or boom loader, we’ve got you covered. Choose the nearest location, pick your vehicle, and get moving — simple, flexible, and hassle-free.",
            icon: "icon-car-insurance",
            delay: "300ms",
            animate: "fadeInUp",
            link: "listing-single.html",
        },
        {
            id: 3,
            title: "Customer Satisfaction",
            text: "Your satisfaction is our top priority. We’re committed to providing a smooth, reliable, and enjoyable rental experience — from easy booking to well-maintained vehicles and friendly support. With every ride, we aim to exceed your expectations and ensure you drive away happy.",
            icon: "icon-rating",
            delay: "500ms",
            animate: "fadeInRight",
            link: "listing-single.html",
        },
    ];

    return (
        <section className="why-choose-one">
            <div className="why-choose-one__shape-1"></div>
            <div className="why-choose-one__shape-2"></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style2">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-shape">
                            <img
                                src="assets/images/shapes/section-title-tagline-shape-1.png"
                                alt=""
                            />
                        </div>
                        <span className="section-title__tagline">Why Choose Us</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        We are innovative and passionate <br /> about the work we do.
                    </h2>
                </div>

                <div className="row">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className={`col-xl-4 col-lg-6 col-md-6 wow ${feature.animate}`}
                            data-wow-delay={feature.delay}
                            data-wow-duration="1500ms"
                        >
                            <div className="why-choose-one__single">
                                <div className="why-choose-one__icon">
                                    <span className={feature.icon}></span>
                                </div>
                                <div className="why-choose-one__single-inner">
                                    <h3 className="why-choose-one__title">{feature.title}</h3>
                                    <p className="why-choose-one__text">{feature.text}</p>
                                </div>
                                <div className="why-choose-one__btn-box">
                                    <a href={feature.link} className="thm-btn">
                                        Rent Now <span className="fas fa-arrow-right"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
