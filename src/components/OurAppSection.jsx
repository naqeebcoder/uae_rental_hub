import React from "react";
import downloadAppBg from "../assets/images/backgrounds/download-app-one-bg.jpg";
import downloadAppImg1 from "../assets/images/icon/download-app-img1.png";
import downloadAppImg2 from "../assets/images/icon/download-app-img2.png";
import appMainImg from "../assets/images/resources/download-app-img-1.png";
import appCarImg from "../assets/images/resources/download-app-car-img-1.png";

const DownloadAppOne = () => {
    return (
        <section className="download-app-one mb-3">
            {/* Background with Jarallax */}
            <div
                className="download-app-one__bg jarallax"
                data-jarallax
                data-speed="0.2"
                data-imgposition="50% 0%"
                style={{ backgroundImage: `url(${downloadAppBg})` }}
            ></div>

            <div className="container">
                <div className="download-app-one__inner">
                    <div className="row">
                        {/* Left Content */}
                        <div className="col-xl-7 col-lg-7">
                            <div className="download-app-one__content sec-title-animation animation-style2">
                                <p className="download-app-one__sub-title">Download Our App</p>
                                <h2 className="download-app-one__title title-animation">
                                    Rentout User Friendly <br /> App Available
                                </h2>
                                <p className="download-app-one__text">
                                    Get our mobile app for easy and convenient usage
                                </p>
                                <div className="download-app-one__google-and-app-store">
                                    <a href="contact.html">
                                        <img src={downloadAppImg1} alt="Google Play" />
                                    </a>
                                    <a href="contact.html">
                                        <img src={downloadAppImg2} alt="App Store" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Images */}
                        <div className="col-xl-5 col-lg-5">
                            <div className="download-app-one__right">
                                <div className="download-app-one__img">
                                    <div className="download-app-one__img1">
                                        <img src={appMainImg} alt="App Preview" />
                                    </div>
                                </div>
                                <div className="download-app-one-car__img float-bob-x">
                                    <img src={appCarImg} alt="Car Preview" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadAppOne;
