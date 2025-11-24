import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OurAppSection from "../components/OurAppSection";
import Counter from "../components/Counter";
import TestimonialTwo from "../components/TestimonialTwo";

// ✅ Import images (recommended way)
import bgImage from "../assets/images/backgrounds/about_bus_header.png";
import shapeImage from "../assets/images/shapes/slide_image.png";

const AppWork = () => {
    return (
        <>
            {/* Navbar Section */}
            <Navbar />

            {/* Page Header */}
            <section className="page-header mb-4">
                <div
                    className="page-header__bg"
                    style={{ backgroundImage: `url(${bgImage})` }}
                ></div>
                {/* <div
                    className="page-header__shape-1"
                    style={{
                        backgroundImage: `url(${shapeImage})`,

                        height: "120px",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        position: "absolute",
                        right: "0",

                    }}
                ></div> */}


                <div className="container">
                    <div className="page-header__inner">
                        <h3>App Work</h3>
                        <div className="thm-breadcrumb__inner">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <span className="icon-arrow-left"></span>
                                </li>
                                <li>How App Work</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* OurAppSection Section */}
            <OurAppSection />
            <br />
            {/* Counter Section */}
            <Counter />
            <br />
            {/* TestimonialTwo Section */}
            <TestimonialTwo />

            {/* Footer Section */}
            <Footer />
        </>
    );
};

export default AppWork;
