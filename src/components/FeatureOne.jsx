import React from "react";
import bg1 from "../assets/images/backgrounds/feature-one-bg-1.jpg";
import bg2 from "../assets/images/backgrounds/feature-one-bg-2.jpg";

const FeatureOne = () => {
    return (
        <section className="feature-one">
            <div className="container">
                <div className="feature-one__inner">
                    <div className="row">
                        {/* Left */}
                        <div className="col-xl-6 col-lg-6">
                            <div
                                className="feature-one__inner-single wow slideInLeft"
                                data-wow-delay="100ms"
                                data-wow-duration="2500ms"
                            >
                                <div
                                    className="feature-one__inner-single-bg"
                                    style={{
                                        backgroundImage: `url(${bg1})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></div>
                                <h3 className="feature-one__inner-title">
                                    Are You Looking <br /> For a Car ?
                                </h3>
                                <p className="feature-one__inner-text">
                                    Lorem ipsum is simply ipun txns mane so dummy text of free
                                    available in market the printing and typesetting industry
                                </p>
                                <div className="feature-one__inner-btn-box">
                                    <a href="contact.html" className="thm-btn">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="col-xl-6 col-lg-6">
                            <div
                                className="feature-one__inner-single feature-one__inner-single--two wow slideInRight"
                                data-wow-delay="100ms"
                                data-wow-duration="2500ms"
                            >
                                <div
                                    className="feature-one__inner-single-bg"
                                    style={{
                                        backgroundImage: `url(${bg2})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></div>
                                <h3 className="feature-one__inner-title">
                                    Do You Want to <br /> Rent a Car ?
                                </h3>
                                <p className="feature-one__inner-text">
                                    Lorem ipsum is simply ipun txns mane so dummy text of free
                                    available in market the printing and typesetting industry
                                </p>
                                <div className="feature-one__inner-btn-box">
                                    <a href="car-list-v-1.html" className="thm-btn">
                                        Rent Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureOne;
