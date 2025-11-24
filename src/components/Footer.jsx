import React from "react";
import footerLogo from "../assets/images/resources/footer-logo.png";
import logo2 from "../assets/images/resources/logo-2.png";
import footerBg from "../assets/images/backgrounds/site-footer-bg.jpg";

const Footer = () => {
    return (
        <>
            {/* Site Footer Start */}
            <footer className="site-footer">
                <div
                    className="site-footer__bg"
                    style={{ backgroundImage: `url(${footerBg})` }}
                ></div>
                <div className="site-footer__top">
                    <div className="container">
                        <div className="site-footer__top-inner">
                            <div className="row">
                                {/* About Section */}
                                <div
                                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                    data-wow-delay="100ms"
                                >
                                    <div className="footer-widget__about">
                                        <div className="footer-widget__about-logo">
                                            {/* <a href="/">
                                                <img src={footerLogo} alt="footer logo" />
                                            </a> */}
                                        </div>
                                        <p className="footer-widget__about-text" style={{ textAlign: "justify" }}>
                                            At RentOut, finding and booking vehicles is simple and reliable.
                                            Choose from a wide range of cars, trucks, recovery vehicles, cranes,
                                            and buses available on a daily, weekly, or monthly basis. We connect
                                            verified fleet owners with businesses and individuals who need trusted
                                            vehicles to get their work done efficiently and on time.
                                        </p>
                                        <form className="footer-widget__form">
                                            <div className="footer-widget__input">
                                                <input type="email" placeholder="Your Email" />
                                            </div>
                                            <button type="submit" className="footer-widget__btn">
                                                <i className="icon-right-arrow"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>

                                {/* Quick Links */}
                                <div
                                    className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                                    data-wow-delay="200ms"
                                >
                                    <div className="footer-widget__links">
                                        <h4 className="footer-widget__title">Quick links</h4>
                                        <ul className="footer-widget__links-list list-unstyled">
                                            <li><a href="/about">About Us</a></li>
                                            <li><a href="/services">Our Services</a></li>
                                            <li><a href="/drivers">FAQs</a></li>
                                            <li><a href="/blog">Privacy Policy</a></li>
                                            <li><a href="/contact">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Services */}
                                <div
                                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                                    data-wow-delay="400ms"
                                >
                                    <div className="footer-widget__services">
                                        <h4 className="footer-widget__title">Services</h4>
                                        <ul className="footer-widget__links-list list-unstyled">
                                            <li><a href="#">Crane</a></li>
                                            <li><a href="#">Bus</a></li>
                                            <li><a href="#">Recovery</a></li>
                                            <li><a href="#">Flatbed Trailer</a></li>
                                            <li><a href="#">Boom Loader</a></li>

                                        </ul>
                                    </div>
                                </div>

                                {/* Contact */}
                                <div
                                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                                    data-wow-delay="300ms"
                                >
                                    <div className="footer-widget__contact">
                                        <h3 className="footer-widget__title">Contact Us</h3>
                                        <ul className="footer-widget__contact-list list-unstyled">
                                            <li>
                                                <div className="icon"><span className="icon-pin"></span></div>
                                                <p>Abu Dhabi Mussafah M 26</p>
                                            </li>
                                            <li>
                                                <div className="icon"><span className="icon-call"></span></div>
                                                <p><a href="tel:971561418322">+971-561418322</a></p>
                                            </li>
                                            <li>
                                                <div className="icon"><span className="icon-envelope"></span></div>
                                                <p><a href="mailto:info@bahadartransport.com">info@bahadartransport.com</a></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="site-footer__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer__bottom-inner">
                                    <div className="site-footer__copyright">
                                        <p>
                                            © 2025 RentOut Developed By{" "}
                                            <a href="">Naqeeb</a>{" "}
                                            All Rights Reserved.
                                        </p>
                                    </div>
                                    <div className="site-footer__bottom-menu-box">
                                        <ul className="list-unstyled site-footer__bottom-menu">
                                            <li><a href="">Terms of Service</a></li>
                                            <li><a href="">Privacy policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Site Footer End */}

            {/* Mobile Nav */}
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler"></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler">
                        <i className="fa fa-times"></i>
                    </span>
                    <div className="logo-box">
                        <a href="/" aria-label="logo image">
                            <img src={logo2} width="140" alt="logo" />
                        </a>
                    </div>
                    <div className="mobile-nav__container"></div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:info@bahadartransport.com">info@bahadartransport.com</a>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            <a href="tel:971561418322">+971-561418322</a>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-facebook-square"></a>
                            <a href="#" className="fab fa-pinterest-p"></a>
                            <a href="#" className="fab fa-instagram"></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Popup */}
            <div className="search-popup">
                <div className="search-popup__overlay search-toggler"></div>
                <div className="search-popup__content">
                    <form>
                        <label htmlFor="search" className="sr-only">search here</label>
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="thm-btn">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>

            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="scroll-to-target scroll-to-top"
            >
                <span className="scroll-to-top__wrapper">
                    <span className="scroll-to-top__inner"></span>
                </span>
                <span className="scroll-to-top__text"> Go Back Top</span>
            </a>

        </>
    );
};

export default Footer;
