import React from "react";
import slider1 from "../assets/images/backgrounds/image-banner.png";

const MainSlider = () => {
    return (
        <section className="main-slider">
            <div className="main-slider__carousel">
                {/* Slide 1 */}
                <div className="item">
                    <div
                        className="main-slider__bg"
                        style={{
                            backgroundImage: `url(${slider1})`,

                            backgroundSize: "fixed",
                            backgroundPosition: "center",
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default MainSlider;
