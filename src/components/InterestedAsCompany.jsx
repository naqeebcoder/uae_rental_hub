import React from "react";
import letsTalkBg from "../assets/images/backgrounds/lets-talk-bg.jpg";
import { FaArrowRight } from "react-icons/fa";

const LetsTalk = () => {
    return (
        <section className="lets-talk relative mt-4">
            {/* Background Image */}
            <div
                className="lets-talk__bg absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${letsTalkBg})` }}
            ></div>

            {/* Content */}
            <div className="container relative z-10">
                <div className="lets-talk__inner text-center py-20">
                    <div className="lets-talk__title mb-8">
                        <p className="text-white text-lg mb-2" style={{ textAlign: "left" }}>
                            Need Reliable Service
                        </p>
                        <h2 className="text-black text-4xl font-bold">Want to Get Your Project Done?</h2>
                    </div>
                    <div className="lets-talk__btn-boxes flex justify-center gap-6 mt-8">
                        <div className="lets-talk__btn-1">
                            <a href="/contact" className="thm-btn inline-flex items-center gap-2 mt-4">
                                Join Now <FaArrowRight />
                            </a>
                        </div>
                        {/* <div className="lets-talk__btn-2">
                            <a href="/car-list-v-1" className="thm-btn inline-flex items-center gap-2">
                                Rent Now <FaArrowRight />
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LetsTalk;
