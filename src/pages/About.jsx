import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import OurAppSection from "../components/OurAppSection";
import Counter from "../components/Counter";
import TestimonialTwo from "../components/TestimonialTwo";

// ✅ Import images (recommended way)
import bgImage from "../assets/images/backgrounds/back_crane_header.jpg";
// import shapeImage from "../assets/images/shapes/page-header-shape-1.png";

const About = () => {
    return (
        <>
            <Navbar />

            {/* Page Header */}
            <section className="page-header">
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
                        <h3>About Us</h3>
                        <div className="thm-breadcrumb__inner">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <span className="icon-arrow-left"></span>
                                </li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <AboutUs />
            <br />
            {/* OurAppSection Section */}
            <OurAppSection />
            <br />
            {/* Counter Section */}
            <Counter />
            <br />
            {/* TestimonialTwo Section */}
            <TestimonialTwo />

            <Footer />
        </>
    );
};

export default About;
