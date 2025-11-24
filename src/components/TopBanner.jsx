import React from "react";
import bannerShapeBg from "../assets/images/shapes/banner-one-shape-bg.png";
import bannerShape1Bg from "../assets/images/backgrounds/banner-one-shape-1-bg.jpg";
import bannerOneImg1 from "../assets/images/resources/banner-one-img-1.png";

const BannerOne = () => {
    return (
        <section className="banner-one">
            {/* Background Shape */}
            <div
                className="banner-one__shape-bg"
                style={{ backgroundImage: `url(${bannerShapeBg})` }}
            ></div>

            {/* Shape 1 */}
            <div className="banner-one__shape-1">
                <div
                    className="banner-one__shape-1-bg"
                    style={{ backgroundImage: `url(${bannerShape1Bg})` }}
                ></div>
            </div>

            {/* Shape 2 */}
            <div className="banner-one__shape-2"></div>

            {/* Container */}
            <div className="container">
                <div className="banner-one__inner">
                    {/* Content */}
                    <div className="banner-one__content">
                        <p className="banner-one__sub-title">
                            100% Trusted car rental platform in the World
                        </p>
                        <h2 className="banner-one__title">
                            Find Your Best Dream <br />
                            <span> Car for </span>{" "}
                            <span
                                className="typed-effect"
                                id="type-1"
                                data-strings="Rental, Booking"
                            ></span>
                        </h2>
                        <p className="banner-one__text">
                            Lorem ipsum is simply ipun txns mane so dummy text of free
                            available in market <br /> the printing and typesetting industry
                            has been the industry's standard dummy <br /> text ever. Open
                            multipy a green form lesser their from in made herb multiply.
                        </p>
                        <div className="banner-one__btn-box">
                            <a href="about.html" className="thm-btn">
                                Read More <span className="fas fa-arrow-right"></span>
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div
                        className="banner-one__img-one"
                        data-aos="slide-left"
                        data-aos-duration="2000"
                    >
                        <img src={bannerOneImg1} alt="Banner Car" className="float-bob-y" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerOne;
