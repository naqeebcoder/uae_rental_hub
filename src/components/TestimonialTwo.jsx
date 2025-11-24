import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


import testimonialShape1 from "../assets/images/shapes/testimonial-two-shape-1.png";
import testimonialShape2 from "../assets/images/shapes/testimonial-two-shape-2.png";
import taglineShape from "../assets/images/shapes/section-title-tagline-shape-1.png";


import testimonial1 from "../assets/images/testimonial/testimonial-2-1.jpg";
import testimonial2 from "../assets/images/testimonial/testimonial-2-2.jpg";
import testimonial3 from "../assets/images/testimonial/testimonial-2-3.jpg";
import testimonial4 from "../assets/images/testimonial/testimonial-2-4.jpg";
import testimonial5 from "../assets/images/testimonial/testimonial-2-5.jpg";
import testimonial6 from "../assets/images/testimonial/testimonial-2-6.jpg";

const testimonials = [
    {
        id: 1,
        name: "Alisa Fox",
        role: "Auto Dealer",
        image: testimonial1,
        text: "A logistic service provider company plays a pivotal role in the global supply chain. A logistic service provider company plays a pivotal role.",
    },
    {
        id: 2,
        name: "Creas Jordan",
        role: "Customer",
        image: testimonial2,
        text: "A logistic service provider company plays a pivotal role in the global supply chain. A logistic service provider company plays a pivotal role.",
    },
    {
        id: 3,
        name: "Ass Lee",
        role: "Senior Consultant",
        image: testimonial3,
        text: "A logistic service provider company plays a pivotal role in the global supply chain. A logistic service provider company plays a pivotal role.",
    },
    {
        id: 4,
        name: "Creas Wokes",
        role: "Managing Director",
        image: testimonial4,
        text: "A logistic service provider company plays a pivotal role in the global supply chain. A logistic service provider company plays a pivotal role.",
    },
    {
        id: 5,
        name: "Alex Jordan",
        role: "Customer",
        image: testimonial5,
        text: "A logistic service provider company plays a pivotal role in the global supply chain. A logistic service provider company plays a pivotal role.",
    },
    {
        id: 6,
        name: "Janaton Trot",
        role: "Auto Dealer",
        image: testimonial6,
        text: "A logistic service provider company plays a pivotal role in the global supply chain. A logistic service provider company plays a pivotal role.",
    },
];

const TestimonialTwo = () => {
    return (
        <section className="testimonial-two">
            {/* Background Shapes */}
            <div className="testimonial-two__shape-1 float-bob-y">
                <img src={testimonialShape1} alt="Shape 1" />
            </div>
            <div className="testimonial-two__shape-2 float-bob-x">
                <img src={testimonialShape2} alt="Shape 2" />
            </div>

            <div className="container">
                {/* Section Title */}
                <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                        {/* <div className="section-title__tagline-shape">
                            <img src={taglineShape} alt="Tagline Shape" />
                        </div> */}
                        <span className="section-title__tagline">Testimonials</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        What People Say <br /> about Renout
                    </h2>
                </div>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 4000 }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                    className="testimonial-two__carousel"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__quote">
                                    <span className="icon-quote"></span>
                                </div>
                                <div className="testimonial-two__img">
                                    <img src={testimonial.image} alt={testimonial.name} />
                                </div>
                                <p className="testimonial-two__text">{testimonial.text}</p>
                                <div className="testimonial-two__client-info">
                                    <div className="testimonial-two__client-content">
                                        <h4 className="testimonial-two__client-name">
                                            <a href="testimonials.html">{testimonial.name}</a>
                                        </h4>
                                        <p className="testimonial-two__client-sub-title">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                    <div className="testimonial-two__rating">
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                        <span className="icon-star"></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialTwo;
