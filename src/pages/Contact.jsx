import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ Import images properly
import pageHeaderBg from "../assets/images/backgrounds/page-header-bg.png";
import pageHeaderShape from "../assets/images/shapes/page-header-shape-1.png";

const Contact = () => {
    return (
        <>
            <Navbar />

            {/* Page Header Start */}
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage: `url(${pageHeaderBg})`,
                    }}
                ></div>
                <div
                    className="page-header__shape-1"
                // style={{
                //     backgroundImage: `url(${pageHeaderShape})`,
                // }}
                ></div>
                <div className="container">
                    <div className="page-header__inner">
                        <h3>Contact</h3>
                        <div className="thm-breadcrumb__inner">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li>
                                    {/* ✅ Use React Router navigation instead of plain href */}
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <span className="icon-arrow-left"></span>
                                </li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Page Header End */}

            {/* Contact Info Start */}
            <section className="contact-info">
                <div className="container">
                    <div className="row">
                        {/* Contact Single Start */}
                        <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-call"></span>
                                </div>
                                <p>Contact Us</p>
                                <h3>
                                    <a href="tel:971561418322">+971-561418322</a>
                                </h3>
                            </div>
                        </div>
                        {/* Contact Single End */}

                        {/* Contact Single Start */}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-email"></span>
                                </div>
                                <p>Mail Us</p>
                                <h3>
                                    <a href="mailto:info@bahadartransport.com">info@bahadartransport.com</a>
                                </h3>
                            </div>
                        </div>
                        {/* Contact Single End */}

                        {/* Contact Single Start */}
                        <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-location"></span>
                                </div>
                                <p>Our Location</p>
                                <h3>Abu Dhabi Mussafah M 26</h3>
                            </div>
                        </div>
                        {/* Contact Single End */}
                    </div>
                </div>
            </section>
            {/* Contact Info End */}

            {/* Contact Page Start */}
            <section className="contact-page">
                <div className="container">
                    <div className="contact-page__inner">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="contact-page__left">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                                        className="google-map__one"
                                        allowFullScreen
                                        loading="lazy"
                                        title="Google Map"
                                    ></iframe>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="contact-page__right">
                                    <h3 className="contact-page__form-title">Get A Free Quote</h3>
                                    <form
                                        id="contact-form"
                                        className="contact-form-validated contact-page__form"
                                        action="https://dreamlayout.mnsithub.com/html/gorent/main-html/assets/mail.php"
                                        method="POST"
                                    >
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input type="text" name="name" placeholder="Your name" required />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input type="email" name="email" placeholder="Your Email" required />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input type="text" name="number" placeholder="Mobile" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-page__input-box">
                                                    <input type="text" name="company" placeholder="Company" />
                                                </div>
                                            </div>

                                            <div className="col-xl-12">
                                                <div className="contact-page__input-box text-message-box">
                                                    <textarea name="message" placeholder="Message"></textarea>
                                                </div>
                                                <div className="contact-page__btn-box">
                                                    <button
                                                        type="submit"
                                                        className="thm-btn contact-page__btn"
                                                        data-loading-text="Please wait..."
                                                    >
                                                        <span className="thm-btn-text">Send A Message</span>
                                                        <span className="thm-btn-icon-box">
                                                            <i className="fas fa-arrow-right"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="ajax-response mb-0"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Page End */}

            <Footer />
        </>
    );
};

export default Contact;
