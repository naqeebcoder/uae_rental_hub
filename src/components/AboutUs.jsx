import React, { useEffect, useRef } from "react";


import imgMain from "../assets/images/resources/crane-img.jpg";
import imgAlt from "../assets/images/resources/bus-service.jpg";
import shape1 from "../assets/images/shapes/about-one-shape-1.png";
import shape2 from "../assets/images/shapes/about-one-shape-2.png";
import shape3 from "../assets/images/shapes/about-one-shape-3.png";
import shape4 from "../assets/images/shapes/about-one-shape-4.png";
import taglineShape from "../assets/images/shapes/section-title-tagline-shape-1.png";


const AboutUs = () => {
    const rootRef = useRef(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        // Intersection Observer to add `.in-view` when elements enter viewport
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const el = entry.target;
                    if (entry.isIntersecting) {
                        el.classList.add("in-view");

                        // If it's the odometer, animate number once
                        if (el.classList.contains("about-one__experience-count")) {
                            animateOdometer(el.querySelector(".odometer"), 10, 1500);
                        }

                        // If it's a progress bar wrapper, animate child .bar-inner widths
                        if (el.classList.contains("about-one__progress")) {
                            const inner = el.querySelector(".bar-inner");
                            if (inner) {
                                const percent = inner.getAttribute("data-percent") || "0%";
                                inner.style.width = percent;
                            }
                        }

                        // Unobserve after first reveal to avoid repeated triggers
                        io.unobserve(el);
                    }
                });
            },
            { threshold: 0.2 }
        );

        // Observe the left image block for a slide-in effect and the other animated pieces
        const watchSelectors = root.querySelectorAll(
            ".about-one__left, .about-one__experience-count, .about-one__progress"
        );
        watchSelectors.forEach((el) => io.observe(el));

        // Also animate progress items individually
        const progresses = root.querySelectorAll(".about-one__progress");
        progresses.forEach((p) => io.observe(p));

        return () => io.disconnect();
    }, []);

    // Smooth numeric counter for odometer effect
    function animateOdometer(el, to = 50, duration = 1500) {
        if (!el) return;
        const start = 0;
        const change = to - start;
        const startTime = performance.now();
        function step(now) {
            const elapsed = now - startTime;
            const t = Math.min(elapsed / duration, 1);
            // easeOutQuad
            const value = Math.round(start + change * (1 - (1 - t) * (1 - t)));
            el.textContent = value.toString().padStart(2, "0");
            if (t < 1) requestAnimationFrame(step);
            else {
                // append plus sign if there is a sibling span "+"
                // leave final formatting to markup (we keep original structure)
            }
        }
        requestAnimationFrame(step);
    }

    return (
        <section className="about-one" ref={rootRef}>
            {/* Inline style for minimal demo animation – move this to your CSS for production */}
            <style>{`
        /* Reveal animations */
        .about-one__left { opacity: 0; transform: translateX(-30px); transition: all 700ms ease-out; }
        .about-one__left.in-view { opacity: 1; transform: translateX(0); }

        .about-one__experience-count { opacity: 0; transform: translateY(10px); transition: all 700ms ease-out 150ms; }
        .about-one__experience-count.in-view { opacity: 1; transform: translateY(0); }

        .about-one__progress { opacity: 0; transform: translateY(12px); transition: all 700ms ease-out; }
        .about-one__progress.in-view { opacity: 1; transform: translateY(0); }

        .bar { background: rgba(0,0,0,0.06); border-radius: 6px; height: 12px; overflow: hidden; }
        .bar-inner { width: 0; height: 100%; transition: width 900ms ease-out; display:flex; align-items:center; justify-content:flex-end; padding-right:6px; box-sizing:border-box; }
        .count-text { font-size: 12px; font-weight:600; }

        /* If you want to keep existing .float-bob-x/y effects from your template, leave them. */
      `}</style>

            <div className="container">
                <div className="row">
                    {/* Left Image Section */}
                    <div className="col-xl-6">
                        <div
                            className="about-one__left"
                            // data-wow attributes preserved
                            data-wow-delay="100ms"
                            data-wow-duration="2500ms"
                        >
                            <div className="about-one__img-box">
                                <div className="about-one__img">
                                    <img src={imgMain} alt="About Gorent" />
                                </div>

                                <div className="about-one__shape-2 float-bob-y">
                                    <img src={shape2} alt="shape" />
                                </div>

                                <div className="about-one__shape-1">
                                    <img src={shape1} alt="shape" />
                                </div>

                                <div className="about-one__shape-4 float-bob-x">
                                    <img src={shape4} alt="shape" />
                                </div>

                                <div className="about-one__shape-3 float-bob-x">
                                    <img src={shape3} alt="shape" />
                                </div>

                                <div className="about-one__img-2">
                                    <img src={imgAlt} alt="About Gorent" style={{ width: "100%", height: "auto" }} />
                                </div>


                                <div className="about-one__experience">
                                    <div className="about-one__experience-count">
                                        <h3 className="odometer" data-count="10">
                                            10
                                        </h3>
                                        <span>+</span>
                                    </div>
                                    <p className="about-one__experience-text">
                                        Years of <br /> Experience
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <div className="section-title text-left sec-title-animation animation-style1">
                                <div className="section-title__tagline-box">
                                    {/* <div className="section-title__tagline-shape">
                                        <img src={taglineShape} alt="shape" />
                                    </div> */}
                                    <span className="section-title__tagline">About RentOut</span>
                                </div>
                                <h2 className="section-title__title title-animation">
                                    Welcome to RentOut, Your Trusted Vehicle Booking Partner
                                </h2>
                            </div>

                            {/* <p className="about-one__text-1">
                                We’re committed to providing our customers
                                with the ultimate rental experience through
                                reliable service, flexible plans, and trusted partners.
                            </p> */}

                            <p className="about-one__text-2">
                                At RentOut, you can easily find and book cars, trucks,
                                recovery vehicles, cranes, and buses available daily, weekly,
                                or monthly. We connect verified fleet owners with businesses and
                                individuals who need vehicles to get the job done efficiently and on time.
                            </p>

                            <ul className="about-one__progress-box list-unstyled">
                                <li>
                                    <div className="about-one__progress">
                                        <h4 className="about-one__progress-title">Time Awareness</h4>
                                        <div className="bar">
                                            <div
                                                className="bar-inner count-bar"
                                                data-percent="90%"
                                                // inline style width set to 0; will animate to data-percent when in view
                                                style={{ width: "0%" }}
                                            >
                                                <div className="count-text">90%</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-one__progress">
                                        <h4 className="about-one__progress-title">
                                            Driver Experience
                                        </h4>
                                        <div className="bar">
                                            <div
                                                className="bar-inner count-bar"
                                                data-percent="70%"
                                                style={{ width: "0%" }}
                                            >
                                                <div className="count-text">70%</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div className="about-one__btn-box-and-call-box">
                                <div className="about-one__btn-box">
                                    <a href="about.html" className="about-one__btn thm-btn">
                                        Read More <span className="fas fa-arrow-right"></span>
                                    </a>
                                </div>

                                <div className="about-one__call-box">
                                    <div className="about-one__call-box-icon">
                                        <span className="icon-call-2"></span>
                                    </div>
                                    <div className="about-one__call-box-content">
                                        <p>Call to Anytime</p>
                                        <h4>
                                            <a href="tel:97156141832">+971-561418322</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end right content */}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
