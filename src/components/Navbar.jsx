import React from "react";
import { Link } from "react-router-dom"; // use this instead of <a> for internal pages
import Header from "../components/Header";
import logo1 from "../assets/images/resources/logo-1.png";

const Navbar = () => {
    return (
        <header className="main-header">

            <div className="main-menu__top">
                <div className="main-menu__top-inner">
                    <ul className="list-unstyled main-menu__contact-list">
                        <li>
                            <div className="icon">
                                <i className="icon-call-2"></i>
                            </div>
                            <div className="text">
                                <p>
                                    <a href="tel:9288006780">+971-561418322</a>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-envelope-2"></i>
                            </div>
                            <div className="text">
                                <p>
                                    <a href="mailto:info@bahadartransport.com">info@bahadartransport.com</a>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-pin-2"></i>
                            </div>
                            <div className="text">
                                <p>Abu Dhabi Mussafah M 26</p>
                            </div>
                        </li>
                    </ul>

                    <div className="main-menu__top-right">
                        <div className="main-menu__top-login-reg-box">
                            <Link to="/login">Login</Link>
                            <p>or</p>
                            <Link to="/register">Register</Link>
                        </div>
                        <div className="main-menu__social">
                            <a href="#"><i className="icon-facebook"></i></a>
                            <a href="#"><i className="icon-instagram"></i></a>
                            <a href="#"><i className="icon-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main nav */}
            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                        {/* Logo */}
                        <div className="main-menu__left">
                            <div className="main-menu__logo">
                                <Link to="/">
                                    <img src={logo1} alt="Logo" />
                                </Link>
                            </div>
                        </div>

                        {/* Navigation links */}
                        <div className="main-menu__middle-box">
                            <div className="main-menu__main-menu-box">
                                <a href="#" className="mobile-nav__toggler">
                                    <i className="fa fa-bars"></i>
                                </a>
                                <ul className="main-menu__list">
                                    <li>
                                        <Link to="/">HOME</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">ABOUT US </Link>
                                    </li>

                                    <li class="dropdown">
                                        <a href="#">COMPANY</a>
                                        <ul class="shadow-box">
                                            <li><a href="/faq">FAQs</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="app">How Our App Works</a></li>
                                            <li><a href="pricing">Pricing Plan</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/contact">CONTACT</Link>
                                    </li>
                                </ul>
                            </div>


                        </div>

                        {/* Right section */}

                        <div className="main-menu__right">
                            <div className="about-one__btn-box">
                                <a
                                    href=""
                                    className="about-one__btn thm-btn text-white"
                                    style={{ fontSize: "18px", fontWeight: "600" }}
                                >
                                    +971-561418322
                                </a>

                            </div>

                        </div>
                    </div>
                </div>
            </nav>

            {/* Sticky header */}

            <div className="stricky-header stricked-menu main-menu">
                <div className="sticky-header__content"></div>
            </div>
        </header>
    );
};

export default Navbar;
